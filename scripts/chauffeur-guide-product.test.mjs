import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { getChauffeurGuideOffer } from "../src/data/chauffeurGuideOffer.js";
import { chauffeurGuidePricing, formatCommercialPrice, privateDriverPricing, tourCustomizationPolicy } from "../src/data/pricing.js";
import { buildQuoteWhatsAppLink } from "../src/utils/whatsapp.js";
import { whatsappIntents } from "../src/utils/whatsappQuote.js";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const page = read("../src/pages/ChauffeurGuideSriLanka.jsx");
const privateDriver = read("../src/pages/PrivateDriverSriLanka.jsx");
const driverGuide = read("../src/pages/DriverGuideSriLanka.jsx");
const airport = read("../src/components/AirportRouteOffer.jsx");
const app = read("../src/App.jsx");
const registry = read("../src/data/seoPages.js");
const meta = read("../src/data/travelData.js");

test("W5 class prices and minimum derive from the W1 USD product", () => {
  const offer = getChauffeurGuideOffer();
  assert.equal(offer.id, "chauffeur-guide");
  assert.equal(offer.currency, "USD");
  assert.deepEqual(offer.vehicleOptions.map(({ id, name, dailyPrice }) => [id, name, dailyPrice]), [
    ["sedan", "Sedan", 69], ["miniVan", "Mini Van", 79], ["van", "KDH Van", 89],
  ]);
  assert.equal(offer.startingPrice, 69);
  assert.equal(offer.vehicleOptions.every(({ id, dailyPrice }) => chauffeurGuidePricing.dailyByClass[id] === dailyPrice), true);
  assert.equal(formatCommercialPrice(offer.startingPrice, offer.currency, true), "$69/day");
  assert.doesNotMatch(page, /\$69|\$79|\$89|LKR|25,?000|30,?000|35,?000/);
});

test("W5 keeps its daily basis, inclusions, and normal duration contextual", () => {
  const offer = getChauffeurGuideOffer();
  assert.equal(offer.normallyMinDays, 5);
  assert.equal(offer.includedKmPerDay, 150);
  assert.deepEqual(offer.inclusions, ["guide meals", "guide accommodation", "fuel", "highway charges", "parking"]);
  assert.match(page, /normally best suited to journeys of \{offer\.normallyMinDays\} days or more, but you can ask SKY about another duration/i);
  assert.match(page, /offer\.includedKmPerDay/);
  assert.match(page, /offer\.inclusions\.map/);
  assert.match(page, /Guest accommodation and meals/);
  assert.doesNotMatch(page, /(?:extra|excess|additional).{0,30}(?:USD|\$|per km)/i);
});

test("customization is fee-free but route changes remain quote-dependent", () => {
  const offer = getChauffeurGuideOffer();
  assert.equal(offer.customizableItinerary, true);
  assert.equal(offer.itineraryChangesHaveSeparateFee, false);
  assert.equal(tourCustomizationPolicy.itineraryChangesHaveSeparateFee, false);
  assert.deepEqual(offer.finalPriceDependsOn, ["route", "service", "vehicle", "duration", "current quote"]);
  assert.match(page, /without a separate itinerary-customization fee/);
  assert.match(page, /final travel quote can still change with route, distance, duration, vehicle class, and service requirements/);
  assert.doesNotMatch(page, /unlimited changes for free|every route costs the same/i);
});

test("products, vehicles, and credentials stay separate", () => {
  const offer = getChauffeurGuideOffer();
  assert.equal(privateDriverPricing.currency, "LKR");
  assert.notEqual(privateDriverPricing.id, offer.id);
  assert.deepEqual(offer.vehicleOptions.map(({ id }) => id), ["sedan", "miniVan", "van"]);
  assert.doesNotMatch(page, /passengerCapacity|luggageCapacity|routeLuggageNote|shuttle|vezel/i);
  assert.doesNotMatch(page, /licensed|certified|government.approved|official guide|English.speaking|German.speaking|Russian.speaking|French.speaking/i);
  assert.match(page, /href="\/private-driver-sri-lanka"/);
  assert.match(page, /href="\/driver-guide-sri-lanka"/);
  assert.match(driverGuide, /specialist licensed local guide can be\s+arranged alongside your driver/);
  assert.match(privateDriver, /No specialist guiding is included in the Private Driver daily price/);
});

test("W2 Chauffeur Guide prompts leave unknown details and vehicle choice unknown", () => {
  const message = new URL(buildQuoteWhatsAppLink({ intent: whatsappIntents.CHAUFFEUR_GUIDE, sourcePage: "chauffeur-guide-sri-lanka" })).searchParams.get("text");
  assert.match(message, /private chauffeur-guided Sri Lanka tour/);
  for (const label of ["Arrival date", "Number of days", "Travelers", "Places I'd like to visit"]) assert.ok(message.includes(`${label}: ___`));
  assert.doesNotMatch(message, /Vehicle preference:|sourcePage|assigned|reserved/i);
  assert.match(page, /intent: whatsappIntents\.CHAUFFEUR_GUIDE/);
  assert.match(page, /vehicle: selectedVehicle\?\.name/);
});

test("W2 accepts a seven-day custom route and optional class as requests", () => {
  const message = new URL(buildQuoteWhatsAppLink({
    intent: whatsappIntents.CHAUFFEUR_GUIDE,
    arrivalDate: "2026-11-10",
    numberOfDays: 7,
    travelers: 2,
    places: "Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Galle",
    vehicle: "Mini Van",
  })).searchParams.get("text");
  assert.match(message, /Arrival date: 2026-11-10/);
  assert.match(message, /Number of days: 7/);
  assert.match(message, /Places I'd like to visit: Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Galle/);
  assert.match(message, /Vehicle preference: Mini Van/);
  assert.doesNotMatch(message, /assigned|reserved|booking confirmed/i);
});

test("one product route is registered and existing itineraries stay references", () => {
  assert.match(app, /"chauffeur-guide-sri-lanka": ChauffeurGuideSriLanka/);
  assert.match(registry, /slug: "chauffeur-guide-sri-lanka",\s*pageType: pageTypes\.CHAUFFEUR_GUIDE/);
  assert.match(meta, /"chauffeur-guide-sri-lanka": \{/);
  assert.match(page, /href="\/5-day-sri-lanka-tour"/);
  assert.match(page, /href="\/round-tours"/);
  assert.match(page, /Existing tour prices are separate offers, not this service's guaranteed total/);
  assert.match(page, /not a fixed package, guaranteed duration, or quoted total/);
});

test("W5 contains no false confirmation or scarcity and W3/W4 entry points remain", () => {
  assert.doesNotMatch(page, /booking confirmed|guide assigned|guaranteed availability|vehicle reserved|instant confirmation|only \d+ left|50% off|best price guaranteed/i);
  assert.match(page, /you confirm only after reviewing the quote/);
  assert.match(privateDriver, /href="\/chauffeur-guide-sri-lanka"/);
  assert.match(airport, /href="\/private-driver-sri-lanka"/);
});
