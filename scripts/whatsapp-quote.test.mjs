import assert from "node:assert/strict";
import test from "node:test";
import { buildWhatsAppMessage, whatsappIntents as intents } from "../src/utils/whatsappQuote.js";
import { buildWhatsAppLink, buildQuoteWhatsAppLink } from "../src/utils/whatsapp.js";

test("all eight intents retain their distinct inquiry purpose and useful fields", () => {
  const cases = [
    [intents.GENERAL, {}, ["information about travelling"]],
    [intents.TRANSFER, {}, ["private transfer", "Pickup: ___", "Destination: ___", "Date: ___", "Time: ___", "Passengers: ___", "Luggage: ___"]],
    [intents.AIRPORT_TRANSFER, {}, ["private airport transfer", "Flight number: ___", "Arrival time: ___", "Pickup option: ___"]],
    [intents.PRIVATE_DRIVER, {}, ["private driver around Sri Lanka", "Dates: ___", "Number of days: ___", "Travelers: ___", "Starting location: ___", "Destinations: ___"]],
    [intents.CHAUFFEUR_GUIDE, {}, ["private chauffeur-guided Sri Lanka tour", "Arrival date: ___", "Number of days: ___", "Travelers: ___", "Places I'd like to visit: ___"]],
    [intents.TOUR, { tourName: "Ella Day Tour" }, ["this Sri Lanka tour", "Tour: Ella Day Tour"]],
    [intents.CUSTOMIZE_TOUR, { tourName: "Ella Day Tour" }, ["customize this Sri Lanka tour", "Tour: Ella Day Tour", "Changes I'd like: ___"]],
    [intents.COMPLETE_JOURNEY, {}, ["complete Sri Lanka journey", "Dates: ___", "Travelers: ___", "Route: ___"]],
  ];
  for (const [intent, details, expected] of cases) {
    const message = buildWhatsAppMessage({ intent, ...details });
    for (const part of expected) assert.ok(message.includes(part), `${intent}: ${part}`);
    assert.ok(message.startsWith("Hi SKY 👋\n"));
  }
});

test("unknown details are placeholders, selected details are truthful, and products remain distinct", () => {
  const airport = buildWhatsAppMessage({ intent: intents.AIRPORT_TRANSFER, pickup: "Colombo Airport (CMB)", destination: "Galle", pickupOption: "outsidePostOffice", passengers: 2 });
  assert.match(airport, /Pickup: Colombo Airport \(CMB\)/);
  assert.match(airport, /Destination: Galle/);
  assert.match(airport, /Pickup option: Outside Meeting/);
  assert.match(airport, /Passengers: 2/);
  assert.match(buildWhatsAppMessage({ intent: intents.AIRPORT_TRANSFER, pickupOption: "unknown" }), /Pickup option: ___/);
  assert.doesNotMatch(buildWhatsAppMessage({ intent: intents.PRIVATE_DRIVER }), /chauffeur.guide/i);
  assert.doesNotMatch(buildWhatsAppMessage({ intent: intents.CHAUFFEUR_GUIDE }), /private driver/i);
});

test("empty, object, and metadata values never leak into the message", () => {
  const message = buildWhatsAppMessage({ intent: intents.TOUR, tourName: { bad: true }, travelers: null, dates: "  4 Oct\n  to  8 Oct ", sourcePage: "/secret", service: "internal", notes: undefined });
  assert.match(message, /Tour: ___/);
  assert.match(message, /Dates: 4 Oct to 8 Oct/);
  assert.doesNotMatch(message, /undefined|null|\[object Object\]|secret|internal/);
  assert.throws(() => buildWhatsAppMessage({ intent: "unrecognized" }), RangeError);
});

test("no intent implies booking, payment, availability, or assigned driver authority", () => {
  for (const intent of Object.values(intents)) {
    assert.doesNotMatch(buildWhatsAppMessage({ intent }), /booking confirmed|payment confirmed|guaranteed availability|driver reserved|reservation complete/i);
  }
});

test("service preference appears only when selected from supported options", () => {
  assert.doesNotMatch(buildWhatsAppMessage({ intent: intents.COMPLETE_JOURNEY }), /Service preference/);
  assert.match(buildWhatsAppMessage({ intent: intents.COMPLETE_JOURNEY, serviceChoice: "Help Me Choose" }), /Service preference: Help Me Choose/);
  assert.doesNotMatch(buildWhatsAppMessage({ intent: intents.COMPLETE_JOURNEY, serviceChoice: "Unselected" }), /Service preference/);
});

test("canonical URL encoding and legacy general contact remain valid", () => {
    assert.equal(buildWhatsAppLink(), "https://wa.me/94779291073");
    const message = "Hi SKY 👋\nI'd like Sri Lanka & Galle! مرحبا — café?";
    const url = new URL(buildWhatsAppLink(message));
    assert.equal(url.origin + url.pathname, "https://wa.me/94779291073");
    assert.equal(url.searchParams.get("text"), message);
    assert.equal(buildWhatsAppLink({ bad: true }), "https://wa.me/94779291073");
    const quote = new URL(buildQuoteWhatsAppLink({ intent: intents.TOUR, tourName: "Ella & Galle" }));
    assert.match(quote.searchParams.get("text"), /Tour: Ella & Galle/);
    assert.equal(quote.searchParams.get("text").match(/Hi SKY/g)?.length, 1);
});
