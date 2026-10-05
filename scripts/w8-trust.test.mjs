import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { getPrivateDriverOffer } from "../src/data/privateDriverOffer.js";
import { getChauffeurGuideOffer } from "../src/data/chauffeurGuideOffer.js";

const read = (name) => readFileSync(new URL(`../src/${name}`, import.meta.url), "utf8");
const home = read("pages/Home.jsx");
const travelData = read("data/travelData.js");
const homeReasons = travelData.slice(travelData.indexOf("export const whyChooseUs"), travelData.indexOf("export const destinationShowcase"));
const airport = read("pages/AirportTransfers.jsx");
const driver = read("pages/PrivateDriverSriLanka.jsx");
const guide = read("pages/ChauffeurGuideSriLanka.jsx");
const roundTours = read("pages/RoundTours.jsx");
const reviews = read("pages/Testimonials.jsx");
const translations = read("data/translations.js");
const schema = read("components/SeoSchema.jsx");

test("unverified review stories and ratings are no longer source-backed UI", () => {
  assert.doesNotMatch(travelData, /export const testimonials|Airport transfer guest|South coast family trip|Round-trip traveler/);
  assert.doesNotMatch(translations, /testimonials:\s*\{|five-star review/i);
  assert.doesNotMatch(reviews, /TestimonialsSlider|\bStar\b|stars|review-card|reviewRating|traveler:|testimonial-grid/i);
  assert.match(reviews, /does not currently publish individual customer reviews/);
  assert.match(schema, /activePage === "custom-journey" \|\| activePage === "testimonials"/);
  assert.doesNotMatch(schema, /aggregateRating|reviewRating|"@type": "Review"/);
});

test("Home reassurance uses six factual service and quote statements", () => {
  assert.equal((homeReasons.match(/title:/g) || []).length, 6);
  assert.match(home, /home\.w8Trust\.reasons/);
  assert.match(homeReasons, /current route-specific quote/);
  assert.match(homeReasons, /confirmed only after you agree/);
  assert.doesNotMatch(homeReasons, /safe travel|best|guarantee|licensed|certified|verified driver|24\/7|five.star|happy travelers/i);
});

test("airport hub does not promise monitoring or instant confirmation", () => {
  const benefitCopy = airport.slice(airport.indexOf("const airportHeroBadges"), airport.indexOf("export default function"));
  assert.doesNotMatch(benefitCopy, /flight-time checking|24\/7|quick confirmation|guaranteed|safe airport/i);
  assert.match(benefitCopy, /Pickup details reviewed/);
  assert.match(airport, /Review the quote before confirming/);
  assert.match(airport, /href="\/private-driver-sri-lanka"/);
});

test("related-service actions follow the documented journey relationship", () => {
  assert.match(driver, /href="\/chauffeur-guide-sri-lanka">\s*Explore Chauffeur Guide/);
  assert.match(guide, /href="\/custom-journey">Still deciding your route/);
  assert.match(roundTours, /href="\/custom-journey">Have several stops in mind/);
  assert.equal((airport.match(/href="\/private-driver-sri-lanka"/g) || []).length, 1);
  assert.equal((guide.match(/href="\/custom-journey"/g) || []).length, 1);
  assert.equal((roundTours.match(/href="\/custom-journey"/g) || []).length, 1);
  assert.doesNotMatch([airport, driver, guide, roundTours].join(" "), /upgrade for only|bundle total|only \d+ left|instant confirmation/i);
});

test("W1 price and inquiry boundaries remain the only product authority", () => {
  assert.equal(getPrivateDriverOffer().startingPrice, 25000);
  assert.equal(getChauffeurGuideOffer().startingPrice, 69);
  assert.match(driver, /offer\.includedKmPerDay/);
  assert.match(guide, /offer\.includedKmPerDay/);
  assert.match(driver, /Guest accommodation and meals/);
  assert.match(guide, /Not included unless arranged/);
  assert.match(read("pages/CustomJourney.jsx"), /buildQuoteWhatsAppLink\(quote\)/);
  assert.doesNotMatch([reviews, home, airport, driver, guide, roundTours].join(" "), /aggregateRating|reviewCount|guaranteed availability|book instantly/i);
});
