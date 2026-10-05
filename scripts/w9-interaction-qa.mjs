import assert from "node:assert/strict";
import puppeteer from "puppeteer";

const base = "http://127.0.0.1:4173";
const routes = ["/", "/airport", "/airport-to-galle", "/private-driver-sri-lanka", "/chauffeur-guide-sri-lanka", "/custom-journey", "/tours", "/one-day-tours", "/round-tours", "/5-day-sri-lanka-tour", "/booking", "/contact", "/ai-trip-planner"];
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
let checks = 0;
const same = (actual, expected, message) => { assert.equal(actual, expected, message); checks++; };
const ok = (value, message) => { assert.ok(value, message); checks++; };

async function visit(route, width = 390, locale = "en") {
  const page = await browser.newPage();
  const errors = [];
  const googleRequests = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("request", (request) => {
    if (/googletagmanager|google-analytics|googleadservices|doubleclick/.test(request.url())) googleRequests.push(request.url());
  });
  await page.setViewport({ width, height: 850 });
  await page.evaluateOnNewDocument((language) => {
    localStorage.setItem("sky-language", language);
    window.__skyEvents = [];
    window.__SKY_ANALYTICS_CAPTURE__ = (event) => window.__skyEvents.push(event);
  }, locale);
  await page.goto(`${base}${route}`, { waitUntil: "networkidle2" });
  await page.waitForSelector("h1");
  return { page, errors, googleRequests };
}

async function clickWithoutLeaving(page, selector) {
  return page.evaluate((query) => {
    const anchor = document.querySelector(query);
    if (!anchor) return null;
    const before = window.__skyEvents.length;
    const href = anchor.href;
    const target = anchor.target;
    const rel = anchor.rel;
    const stopForQa = (event) => event.preventDefault();
    document.addEventListener("click", stopForQa, { once: true });
    anchor.click();
    return { href, target, rel, events: window.__skyEvents.slice(before), unchanged: anchor.href === href && anchor.target === target && anchor.rel === rel };
  }, selector);
}

try {
  for (const width of [390, 768, 1280]) {
    for (const route of routes) {
      const { page, errors, googleRequests } = await visit(route, width);
      const state = await page.evaluate(() => ({
        pathname: location.pathname,
        h1s: document.querySelectorAll("h1").length,
        overflow: document.documentElement.scrollWidth - innerWidth,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
      }));
      same(state.pathname, route, `${route} ${width} route`);
      same(state.h1s, 1, `${route} ${width} H1`);
      ok(state.overflow <= 1, `${route} ${width} overflow`);
      same(state.canonical, `https://www.skytaxisrilanka.com${route}`, `${route} ${width} canonical`);
      same(errors.length, 0, `${route} ${width} runtime errors`);
      same(googleRequests.length, 0, `${route} ${width} Google requests`);
      await page.close();
    }
  }

  for (const [route, expectedService] of [
    ["/", "general"], ["/airport", "airport"], ["/airport-to-galle", "airport"],
    ["/private-driver-sri-lanka", "private_driver"], ["/chauffeur-guide-sri-lanka", "chauffeur_guide"],
    ["/tours", "tour"], ["/one-day-tours", "tour"], ["/round-tours", "tour"],
    ["/contact", "general"],
  ]) {
    const { page, errors, googleRequests } = await visit(route);
    const action = await clickWithoutLeaving(page, '.page a[href^="https://wa.me/"]');
    ok(action, `${route} WhatsApp CTA exists`);
    same(action.events.length, 1, `${route} one handoff`);
    same(action.events[0].name, "whatsapp_handoff", `${route} handoff name`);
    same(action.events[0].properties.service, expectedService, `${route} service`);
    ok(action.unchanged && action.href.startsWith("https://wa.me/94779291073"), `${route} W2 href/target/rel preserved`);
    ok(!/text=|pickup|drop|date|phone|message|value|currency/i.test(JSON.stringify(action.events)), `${route} private payload`);
    same(errors.length, 0, `${route} click errors`);
    same(googleRequests.length, 0, `${route} click Google requests`);
    await page.close();
  }

  for (const [from, selector, source, destination] of [
    ["/airport", ".airport-continue-journey a[href='/private-driver-sri-lanka']", "airport", "private_driver"],
    ["/airport-to-galle", "a[href='/private-driver-sri-lanka']", "airport", "private_driver"],
    ["/private-driver-sri-lanka", ".private-driver-cta a[href='/chauffeur-guide-sri-lanka']", "private_driver", "chauffeur_guide"],
    ["/chauffeur-guide-sri-lanka", ".private-driver-cta a[href='/custom-journey']", "chauffeur_guide", "custom_journey"],
    ["/round-tours", ".one-day-custom-tour a[href='/custom-journey']", "round_tours", "custom_journey"],
  ]) {
    const { page } = await visit(from);
    const action = await clickWithoutLeaving(page, selector);
    ok(action, `${from} cross-sell exists`);
    same(action.events.length, 1, `${from} one cross-sell event`);
    same(action.events[0].name, "cross_sell_follow", `${from} cross-sell name`);
    same(action.events[0].properties.source_product, source, `${from} source`);
    same(action.events[0].properties.destination_product, destination, `${from} destination`);
    ok(action.unchanged, `${from} link unchanged`);
    const destinationPath = new URL(action.href).pathname;
    await page.click(selector);
    await page.waitForFunction((path) => location.pathname === path, { timeout: 10000 }, destinationPath);
    same(new URL(page.url()).pathname, destinationPath, `${from} real navigation`);
    await page.close();
  }

  {
    const { page } = await visit("/ai-trip-planner");
    const action = await clickWithoutLeaving(page, '.page a[href^="https://ai.skytaxisrilanka.com"]');
    same(action.events.length, 1, "AI one open event");
    same(action.events[0].name, "ai_planner_open", "AI open meaning");
    ok(action.unchanged && action.target === "_blank", "AI outbound unchanged");
    await page.close();
  }

  {
    const { page } = await visit("/contact");
    const action = await clickWithoutLeaving(page, '.page a[href^="tel:"]');
    same(action.events.length, 1, "phone one event");
    same(action.events[0].properties.channel, "phone", "phone channel");
    ok(!JSON.stringify(action.events).includes("94779291073"), "phone value omitted");
    await page.close();
  }

  {
    const { page } = await visit("/", 390);
    const action = await clickWithoutLeaving(page, ".bottom-action-button--whatsapp");
    ok(action, "persistent WhatsApp action exists");
    same(action.events.length, 1, "persistent WhatsApp one event");
    same(action.events[0].name, "whatsapp_handoff", "persistent WhatsApp handoff");
    same(action.events[0].properties.source_surface, "bottom_action", "persistent action source");
    ok(action.unchanged, "persistent href/target/rel unchanged");
    await page.close();
  }

  {
    const { page } = await visit("/custom-journey", 390, "ar");
    await page.evaluate(() => { window.open = (href) => { window.__opened = href; return null; }; });
    await page.click(".custom-journey-send");
    same(await page.evaluate(() => window.__skyEvents.length), 0, "invalid journey has no handoff");
    await page.type('[name="route"]', "Sigiriya, Kandy, Ella");
    await page.type('[name="duration"]', "8");
    await page.type('[name="travelers"]', "2");
    await page.type('[name="notes"]', "private driver with secret details");
    await page.click(".custom-journey-send");
    const result = await page.evaluate(() => ({ events: window.__skyEvents, opened: window.__opened, dir: document.documentElement.dir }));
    same(result.events.filter((event) => event.name === "custom_journey_start").length, 1, "journey start once");
    same(result.events.filter((event) => event.name === "whatsapp_handoff").length, 1, "journey handoff once");
    same(result.dir, "rtl", "Arabic RTL");
    ok(result.opened.startsWith("https://wa.me/94779291073"), "W2 journey handoff unchanged");
    ok(!/Sigiriya|Kandy|Ella|secret|\b8\b|\b2\b/.test(JSON.stringify(result.events)), "journey private values omitted");
    await page.close();
  }

  {
    const { page } = await visit("/booking");
    await page.evaluate(() => { window.open = (href) => { window.__opened = href; return null; }; });
    for (const [name, value] of [["name", "Private Tester"], ["phone", "+94770000000"], ["pickup", "Secret Pickup"], ["drop", "Secret Drop"]]) {
      await page.type(`[name="${name}"]`, value);
    }
    await page.click(".booking-form-panel button[type='submit']");
    await page.waitForFunction(() => window.__skyEvents.some((event) => event.name === "booking_request_error"));
    const result = await page.evaluate(() => ({ events: window.__skyEvents, opened: window.__opened }));
    same(result.events.filter((event) => event.name === "whatsapp_handoff").length, 1, "Booking WhatsApp once");
    same(result.events.filter((event) => event.name === "booking_request_error").length, 1, "unconfigured save error once");
    same(result.events.filter((event) => event.name === "booking_request_success").length, 0, "no false Booking success");
    ok(result.opened.startsWith("https://wa.me/94779291073"), "Booking fallback unaffected");
    ok(!/Private Tester|Secret Pickup|Secret Drop|94770000000/.test(JSON.stringify(result.events)), "Booking private values omitted");
    await page.close();
  }

  console.log(`W9 browser interaction QA: ${checks} checks passed`);
} finally {
  await browser.close();
}
