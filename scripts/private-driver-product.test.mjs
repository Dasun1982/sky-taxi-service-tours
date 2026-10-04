import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { getPrivateDriverOffer } from "../src/data/privateDriverOffer.js";
import { chauffeurGuidePricing, privateDriverPricing } from "../src/data/pricing.js";
import { buildQuoteWhatsAppLink } from "../src/utils/whatsapp.js";
import { whatsappIntents } from "../src/utils/whatsappQuote.js";

const page = readFileSync(new URL("../src/pages/PrivateDriverSriLanka.jsx", import.meta.url), "utf8");
const tourDriverPage = readFileSync(new URL("../src/pages/SriLankaTourDriver.jsx", import.meta.url), "utf8");
const airportOffer = readFileSync(new URL("../src/components/AirportRouteOffer.jsx", import.meta.url), "utf8");
const schemaSource = readFileSync(new URL("../src/data/schemaData.js", import.meta.url), "utf8");

test("W4 class prices and minimum derive from the W1 Private Driver product", () => {
  const offer = getPrivateDriverOffer();
  assert.equal(offer.id, "private-driver");
  assert.equal(offer.currency, "LKR");
  assert.deepEqual(offer.vehicleOptions.map(({ id, name, dailyPrice }) => [id, name, dailyPrice]), [
    ["sedan", "Sedan", 25000],
    ["miniVan", "Mini Van", 30000],
    ["van", "KDH Van", 35000],
  ]);
  assert.equal(offer.startingPrice, 25000);
  assert.equal(offer.vehicleOptions.every(({ id, dailyPrice }) => privateDriverPricing.dailyByClass[id] === dailyPrice), true);
});

test("daily basis and founder inclusions are represented without an excess-km formula", () => {
  const offer = getPrivateDriverOffer();
  assert.equal(offer.includedKmPerDay, 150);
  assert.deepEqual(offer.inclusions, ["driver meals", "driver accommodation", "fuel", "highway charges", "parking"]);
  assert.equal(offer.flexibleRoute, true);
  assert.deepEqual(offer.finalQuoteDependsOn, ["route", "distance", "duration"]);
  assert.match(page, /offer\.includedKmPerDay/);
  assert.match(page, /offer\.inclusions\.map/);
  assert.match(page, /Guest accommodation and meals/);
  assert.doesNotMatch(page, /(?:extra|excess|additional).{0,30}(?:LKR|Rs\.|per km)/i);
});

test("priced classes do not absorb unverified fleet vehicles or guide rates", () => {
  const offer = getPrivateDriverOffer();
  assert.deepEqual(offer.vehicleOptions.map(({ id }) => id), ["sedan", "miniVan", "van"]);
  assert.equal(offer.vehicleOptions.some(({ id }) => /shuttle|vezel/i.test(id)), false);
  assert.notEqual(offer.currency, chauffeurGuidePricing.currency);
  assert.doesNotMatch(page, /\$69|\$79|\$89|licensed guide|professional tour guide|chauffeur guide/i);
  assert.match(page, /specialist site guiding is separate/i);
});

test("W2 default driver quote leaves customer details and vehicle choice unknown", () => {
  const message = new URL(buildQuoteWhatsAppLink({ intent: whatsappIntents.PRIVATE_DRIVER, sourcePage: "private-driver-sri-lanka" })).searchParams.get("text");
  for (const label of ["Dates", "Number of days", "Travelers", "Starting location", "Destinations"]) {
    assert.ok(message.includes(`${label}: ___`));
  }
  assert.doesNotMatch(message, /Vehicle preference:|sourcePage|assigned|reserved/i);
});

test("W2 custom seven-day route and class selection remain requests", () => {
  const message = new URL(buildQuoteWhatsAppLink({
    intent: whatsappIntents.PRIVATE_DRIVER,
    dates: "2026-11-10 to 2026-11-16",
    numberOfDays: "7",
    travelers: "2",
    startingLocation: "Colombo Airport",
    destinations: "Sigiriya, Kandy, Ella, Mirissa, Galle",
    vehicle: "Mini Van",
  })).searchParams.get("text");
  assert.match(message, /Number of days: 7/);
  assert.match(message, /Destinations: Sigiriya, Kandy, Ella, Mirissa, Galle/);
  assert.match(message, /Vehicle preference: Mini Van/);
  assert.doesNotMatch(message, /assigned|reserved|confirmed booking/i);
});

test("page copy keeps truth boundaries and W1 numeric prices out of JSX", () => {
  assert.doesNotMatch(page, /\b(?:25,?000|30,?000|35,?000|150)\b/);
  assert.doesNotMatch(page, /booking confirmed|driver assigned|guaranteed availability|best price guaranteed|only \d+ left|50% off|instant confirmation/i);
  assert.doesNotMatch(page, /passengerCapacity|luggageCapacity|routeLuggageNote/);
  assert.match(page, /Example multi-day journey/);
  assert.match(page, /not a fixed tour package, guaranteed itinerary, or quoted total/);
});

test("W3 airport cross-sell and Tour Driver boundary stay coherent", () => {
  assert.match(airportOffer, /href="\/private-driver-sri-lanka"/);
  assert.match(tourDriverPage, /continuous multi-day journey with one dedicated driver/);
  assert.match(tourDriverPage, /flexible daily hire/);
  assert.match(schemaSource, /"private-driver-sri-lanka": \[[\s\S]*?Private Driver supports a custom multi-day route/);
});
