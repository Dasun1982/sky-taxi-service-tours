import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  bookingResultEvent, classifyLink, createAnalytics, createGoogleAdsAdapter,
  eventRegistry, initializeGoogleTag, installAnalyticsInteractions,
  normalizeEvent, trackEvent,
} from "../src/utils/analytics.js";

const source = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("ten registered events have only enum properties and clear tiers", () => {
  assert.equal(Object.keys(eventRegistry).length, 10);
  for (const [name, definition] of Object.entries(eventRegistry)) {
    assert.match(name, /^[a-z]+(?:_[a-z]+)*$/);
    assert.ok([0, 1, 2, 3].includes(definition.tier));
    assert.ok(definition.properties.length > 0);
    assert.deepEqual(normalizeEvent(name, { service: "general", locale: "en" })?.name, name);
  }
  for (const bad of ["booking_confirmed", "whatsapp_message_sent", "sale", "booking_submitted", "whatsapp_clicked", "tour_clicked"]) {
    assert.equal(normalizeEvent(bad, {}), null);
  }
});

test("allowlist discards PII, free text, URLs, query strings, monetary values and unknown enums", () => {
  const dangerous = {
    name: "John", phone: "+94770000000", email: "john@example.com", pickup: "Villa",
    dropoff: "Kandy", flight_number: "EK650", route: "Sigiriya, Kandy, Ella",
    dates: "October 10", travelers: 2, luggage: "large", notes: "secret",
    prompt: "private driver for 8 days", itinerary: "secret", whatsapp_url: "https://wa.me/1?text=secret",
    page_location: "https://example.com/?email=secret", booking_id: "secret-id",
    value: 25000, currency: "LKR", revenue: 69, gclid: "secret", utm_campaign: "secret",
  };
  for (const name of Object.keys(eventRegistry)) {
    const event = normalizeEvent(name, { ...dangerous, service: "private_driver", source_surface: "private_driver", locale: "ar" });
    assert.ok(event);
    assert.ok(Object.keys(event.properties).every((key) => eventRegistry[name].properties.includes(key)));
    assert.doesNotMatch(JSON.stringify(event), /John|EK650|Kandy|October|25000|secret|LKR|69/);
  }
  assert.deepEqual(normalizeEvent("whatsapp_handoff", { service: "John", source_surface: "airport?flight=EK650" }).properties, {});
  assert.equal(normalizeEvent("whatsapp_handoff", null), null);
});

test("provider failure is isolated and one accepted action reaches one later adapter", () => {
  const received = [];
  const send = createAnalytics([() => { throw Error("ad blocker"); }, (event) => received.push(event)]);
  assert.equal(send("whatsapp_handoff", { service: "airport", source_surface: "airport_route" }), true);
  assert.equal(send("unknown", { service: "airport" }), false);
  assert.equal(received.length, 1);
  assert.equal(received[0].name, "whatsapp_handoff");
  assert.equal(trackEvent("whatsapp_handoff", new Proxy({}, { ownKeys: () => { throw Error("bad caller"); } })), false);
});

test("Airport, driver, guide and tour handoffs reveal only a coarse fixed service", () => {
  const href = "https://wa.me/94779291073?text=John%20EK650%20Oct%2010%20Kandy%20%2469";
  for (const [route, service] of [
    ["/airport-to-galle", "airport"], ["/private-driver-sri-lanka", "private_driver"],
    ["/chauffeur-guide-sri-lanka", "chauffeur_guide"], ["/one-day-tours", "tour"],
    ["/round-tours", "tour"], ["/custom-journey", "custom_journey"],
  ]) {
    const action = classifyLink(href, route);
    assert.equal(action.name, "whatsapp_handoff");
    assert.equal(action.properties.service, service);
    assert.doesNotMatch(JSON.stringify(action), /John|EK650|Oct|Kandy|69|text=/);
  }
  assert.equal(classifyLink("https://wa.me/not-a-number?text=secret", "/airport"), null);
  assert.equal(classifyLink(href, "/", "floating-whatsapp").properties.source_surface, "floating_whatsapp");
  assert.equal(classifyLink(href, "/", "bottom-action-button--whatsapp").properties.source_surface, "bottom_action");
});

test("Custom Journey tracks first edit and valid handoff with no draft properties", () => {
  const page = source("../src/pages/CustomJourney.jsx");
  assert.match(page, /if \(!startedRef\.current\)[\s\S]*?trackEvent\("custom_journey_start", \{ service: "custom_journey", source_surface: "custom_journey" \}\)/);
  assert.match(page, /if \(!valid\)[\s\S]*?return;[\s\S]*?trackEvent\("whatsapp_handoff", \{ service: "custom_journey", source_surface: "custom_journey" \}\)/);
  assert.doesNotMatch(page, /trackEvent\([^\n]*(draft|quote|preview|href|route|travelers|notes)/);
});

test("Booking strong success is derived only from resolved save result", () => {
  const form = source("../src/components/BookingForm.jsx");
  assert.match(form, /submitBookingLead\([^;]+\.then\(\(result\) => \{[\s\S]*?bookingResultEvent\(result\)/);
  assert.equal(bookingResultEvent({ saved: true, bookingId: "private-id", reason: "John" }).name, "booking_request_success");
  assert.equal(bookingResultEvent({ saved: false, reason: "John@example.com" }).name, "booking_request_error");
  assert.equal(bookingResultEvent(null).name, "booking_request_error");
  assert.doesNotMatch(JSON.stringify(bookingResultEvent({ saved: true, bookingId: "private-id" })), /private-id/);
  assert.doesNotMatch(JSON.stringify(bookingResultEvent({ saved: false, reason: "John@example.com" })), /John/);
  assert.doesNotMatch(form, /trackEvent\("booking_submitted"/);
  assert.match(form, /trackEvent\("whatsapp_handoff"[\s\S]*?window\.open\(buildWhatsAppLink\(message\)/);
});

test("AI, phone and email actions send no prompt or contact value", () => {
  const planner = classifyLink("https://ai.skytaxisrilanka.com/", "/");
  assert.deepEqual(planner, { name: "ai_planner_open", properties: { source_surface: "home" } });
  assert.deepEqual(classifyLink("tel:+94779291073", "/contact"), { name: "contact_action", properties: { channel: "phone", source_surface: "contact" } });
  assert.deepEqual(classifyLink("mailto:john@example.com?subject=secret", "/contact"), { name: "contact_action", properties: { channel: "email", source_surface: "contact" } });
  assert.equal(classifyLink("mailto:owner@example.com", "/valuation"), null);
});

test("W8 cross-sells are observations, never lead conversions", () => {
  for (const [from, to, sourceProduct, destinationProduct] of [
    ["/airport", "/private-driver-sri-lanka", "airport", "private_driver"],
    ["/airport-to-galle", "/private-driver-sri-lanka", "airport", "private_driver"],
    ["/private-driver-sri-lanka", "/chauffeur-guide-sri-lanka", "private_driver", "chauffeur_guide"],
    ["/chauffeur-guide-sri-lanka", "/custom-journey", "chauffeur_guide", "custom_journey"],
    ["/round-tours", "/custom-journey", "round_tours", "custom_journey"],
  ]) {
    const event = classifyLink(to, from);
    assert.equal(event.name, "cross_sell_follow");
    assert.deepEqual(event.properties, { source_product: sourceProduct, destination_product: destinationProduct });
    assert.equal(eventRegistry[event.name].tier, 0);
  }
});

test("one DOM click records one canonical event without changing the link", () => {
  const originalWindow = globalThis.window;
  const originalDocument = globalThis.document;
  const events = [];
  globalThis.window = { location: { hostname: "127.0.0.1", pathname: "/airport-to-galle" }, __SKY_ANALYTICS_CAPTURE__: (event) => events.push(event) };
  globalThis.document = { documentElement: { lang: "ar" } };
  try {
    let listener;
    const root = { addEventListener: (_name, fn) => { listener = fn; }, removeEventListener: () => {}, contains: () => true };
    const anchor = { className: "button", getAttribute: () => "https://wa.me/94779291073?text=private", href: "https://wa.me/94779291073?text=private" };
    installAnalyticsInteractions(root);
    const click = { target: { closest: () => anchor }, preventDefault: () => { throw Error("navigation blocked"); } };
    listener(click);
    trackEvent("whatsapp_clicked", { page_source: "airport", whatsapp_url: anchor.href }); // old React handler
    assert.equal(events.length, 1);
    assert.equal(events[0].properties.locale, "ar");
    assert.equal(anchor.href, "https://wa.me/94779291073?text=private");
  } finally {
    globalThis.window = originalWindow;
    globalThis.document = originalDocument;
  }
});

test("Ads is disabled for missing/malformed configuration and local preview", () => {
  const calls = [];
  const gtag = (...args) => calls.push(args);
  const event = normalizeEvent("whatsapp_handoff", { service: "airport" });
  createGoogleAdsAdapter({}, gtag)(event);
  createGoogleAdsAdapter({ enabled: true, id: "AW-123456", whatsappLabel: "bad label", bookingLabel: "bookingLabel" }, gtag)(event);
  assert.equal(calls.length, 0);
  const originalWindow = globalThis.window;
  globalThis.window = { location: { hostname: "127.0.0.1" } };
  try {
    createGoogleAdsAdapter({ enabled: true, id: "AW-123456", whatsappLabel: "whatsappLabel", bookingLabel: "bookingLabel" }, gtag)(event);
    assert.equal(calls.length, 0);
    assert.equal(initializeGoogleTag(), false);
  } finally { globalThis.window = originalWindow; }
});

test("configured Ads maps only two lead actions, without PII or monetary values", () => {
  const originalWindow = globalThis.window;
  const calls = [];
  globalThis.window = { location: { hostname: "www.skytaxisrilanka.com", origin: "https://www.skytaxisrilanka.com", pathname: "/booking" } };
  try {
    const adapter = createGoogleAdsAdapter({ enabled: true, id: "AW-123456", whatsappLabel: "whatsappLabel", bookingLabel: "bookingLabel" }, (...args) => calls.push(args));
    for (const name of ["service_interest", "quote_start", "ai_planner_open", "cross_sell_follow", "contact_action", "booking_request_error", "acquisition_action"]) adapter(normalizeEvent(name, {}));
    adapter(normalizeEvent("whatsapp_handoff", { source_surface: "booking" }));
    assert.equal(calls.length, 0);
    adapter(normalizeEvent("whatsapp_handoff", { message: "John", value: 25000 }));
    adapter(normalizeEvent("booking_request_success", { email: "John@example.com", currency: "USD" }));
    assert.equal(calls.length, 3); // one Ads config, two conversions
    assert.equal(calls[0][0], "config");
    assert.deepEqual(calls.slice(1).map((call) => call[2].send_to), ["AW-123456/whatsappLabel", "AW-123456/bookingLabel"]);
    assert.doesNotMatch(JSON.stringify(calls), /John|25000|USD|value|currency/);
  } finally { globalThis.window = originalWindow; }
});

test("no old static Google tag or new live dependency remains", () => {
  assert.doesNotMatch(source("../index.html"), /googletagmanager|gtag\(/);
  assert.doesNotMatch(source("../public/airport/index.html"), /googletagmanager|gtag\(/);
  assert.doesNotMatch(source("../public/custom-journey.html"), /googletagmanager|gtag\(/);
  assert.doesNotMatch(source("../package.json"), /react-ga|mixpanel|posthog|segment|amplitude/i);
  assert.match(source("../src/utils/analytics.js"), /VITE_GA_ENABLED === "true"/);
});
