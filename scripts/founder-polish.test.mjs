import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import test from "node:test";
import { chauffeurGuideFaqs } from "../src/data/chauffeurGuideOffer.js";
import { chauffeurGuidePricing } from "../src/data/pricing.js";

const source = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const pageFiles = [
  ...readdirSync(new URL("../src/pages/", import.meta.url)).map((name) => `../src/pages/${name}`),
  ...readdirSync(new URL("../src/components/seo/", import.meta.url)).map((name) => `../src/components/seo/${name}`),
];

test("Home sells value: no detailed price rendering in the chooser or reasons", () => {
  const home = source("../src/pages/Home.jsx");
  assert.doesNotMatch(home, /formatCommercialPrice|getPrivateDriverOffer|startingPrice|home\.commercial\.from/);
  assert.match(home, /home\.commercial\.\$\{service\.id\}\.bestFor/);
  const translations = source("../src/data/translations.js");
  const commercial = translations.slice(translations.indexOf("    commercial: {"), translations.indexOf("moreServicesLabel"));
  assert.doesNotMatch(commercial, /LKR|\$\d|From"/);
});

test("route discovery is a manual rail built from real route pages", () => {
  const home = source("../src/pages/Home.jsx");
  assert.match(home, /<RouteRail/);
  assert.doesNotMatch(home, /home-seo-route-track|home-seo-route-group--clone/);
  const rail = source("../src/components/RouteRail.jsx");
  assert.match(rail, /role="region"/);
  assert.match(rail, /aria-controls=\{railId\}/);
  assert.match(rail, /prefers-reduced-motion/);
  assert.doesNotMatch(rail, /setInterval|requestAnimationFrame|autoplay/i);
  const routes = source("../src/data/routes.js");
  assert.ok((routes.match(/taxiServiceSlug:/g) || []).length >= 13, "route registry still lists the live airport routes");
});

test("FAQ accordion keeps every answer in the DOM", () => {
  const faq = source("../src/components/FaqList.jsx");
  assert.match(faq, /aria-expanded=\{open\}/);
  assert.match(faq, /aria-controls=\{panelId\}/);
  assert.match(faq, /inert=\{!open\}/);
  assert.doesNotMatch(faq, /\{open &&|open \?\s*\(/, "answers must not be conditionally rendered");
  for (const file of pageFiles) {
    const text = source(file);
    // Only the AI planner's "how it works" steps may keep the plain list markup.
    const raw = (text.match(/<article className="faq-item"/g) || []).length;
    assert.equal(raw, file.endsWith("AiTripPlanner.jsx") ? 1 : 0, `${file}: FAQ uses FaqItem`);
  }
});

test("Chauffeur Guide FAQ derives prices from W1 and shares one source with schema", () => {
  const prices = Object.values(chauffeurGuidePricing.dailyByClass).map((amount) => `$${amount}`);
  const priceAnswer = chauffeurGuideFaqs.find((faq) => /fixed/.test(faq.question)).answer;
  for (const price of prices) assert.ok(priceAnswer.includes(price), price);
  assert.ok(chauffeurGuideFaqs.some((faq) => faq.answer.includes(`${chauffeurGuidePricing.includedKmPerDay} km per day`)));
  assert.match(source("../src/data/schemaData.js"), /"chauffeur-guide-sri-lanka": chauffeurGuideFaqs/);
  assert.match(source("../src/pages/ChauffeurGuideSriLanka.jsx"), /chauffeurGuideFaqs\.map/);
  assert.doesNotMatch(JSON.stringify(chauffeurGuideFaqs), /licensed|certified|official guide|multilingual/i);
});

test("current-price wording never becomes a fake discount, sale or scarcity claim", () => {
  const fake = /\d+\s?% off|\bon sale\b|\bwas (LKR|\$)\s?\d|limited[- ]time|today only|lowest price guaranteed|best price guaranteed|only \d+ (left|seats|cars)/i;
  for (const file of [...pageFiles, "../src/data/translations.js", "../src/data/travelData.js", "../src/data/chauffeurGuideOffer.js", "../src/components/AirportRouteOffer.jsx"]) {
    assert.doesNotMatch(source(file), fake, file);
  }
  const approved = [source("../src/data/translations.js"), source("../src/components/AirportRouteOffer.jsx")].join(" ");
  assert.match(approved, /today's best available price|today&apos;s best available price/);
});
