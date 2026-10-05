import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import test from "node:test";

const source = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const utilityRoutes = ["privacy", "terms", "account-deletion", "support"];
const airportRoutePages = ["Ella", "Galle", "Hiriketiya", "Kandy", "Mirissa", "Sigiriya", "Unawatuna", "Weligama"];

test("utility and legal routes are registered, noindex, and kept out of the sitemap", () => {
  const registry = source("../src/data/seoPages.js");
  for (const slug of utilityRoutes) {
    assert.match(registry, new RegExp(`slug: "${slug}", pageType: pageTypes\\.UTILITY_NOINDEX`));
  }
  assert.match(source("generate-sitemap.mjs"), /pageTypes\.UTILITY_NOINDEX/);
  const app = source("../src/App.jsx");
  for (const slug of utilityRoutes) assert.match(app, new RegExp(`"${slug}"[^\\n]*\\]\\.includes\\(activePage\\)`));
});

test("LocalBusiness schema carries no invented price range or review data", () => {
  const schema = source("../src/components/SeoSchema.jsx");
  assert.doesNotMatch(schema, /priceRange/);
  assert.doesNotMatch(schema, /AggregateRating|"Review"|ratingValue|reviewCount/);
});

test("late-arrival airport FAQ says the same thing on the page and in its schema", () => {
  const schemaData = source("../src/data/schemaData.js");
  for (const town of airportRoutePages) {
    const answer = `Share your flight time on WhatsApp and SKY will confirm whether a late-arrival pickup to ${town} is available before travel.`;
    assert.ok(source(`../src/pages/AirportTo${town}Taxi.jsx`).includes(answer), `${town} visible FAQ`);
    assert.ok(schemaData.includes(answer), `${town} FAQ schema`);
  }
  assert.doesNotMatch(schemaData, /day or night arrivals/);
});

test("guide pages without a visible FAQ emit no FAQ schema", () => {
  const schemaData = source("../src/data/schemaData.js");
  const faqBlock = schemaData.slice(schemaData.indexOf("export const schemaFaqs"));
  for (const slug of ["wildlife", "experiences", "travel-guide", "best-beaches-near-galle", "ella-vs-nuwara-eliya", "galle-to-ella", "how-many-days-in-sri-lanka", "is-a-private-driver-worth-it"]) {
    assert.doesNotMatch(faqBlock, new RegExp(`^  "?${slug}"?: \\[`, "m"), slug);
  }
});

test("retired unverified claims stay out of rendered page and data copy", () => {
  const files = [
    ...readdirSync(new URL("../src/pages/", import.meta.url)).map((name) => `../src/pages/${name}`),
    ...readdirSync(new URL("../src/components/seo/", import.meta.url)).map((name) => `../src/components/seo/${name}`),
    "../src/data/schemaData.js", "../src/data/services.js", "../src/data/travelData.js", "../src/data/seo/airportTransfers.js",
  ];
  const retired = [/24\/7 (WhatsApp|support|service|booking|reliable)/i, /\blicensed (local |specialist |site )?guides?\b/i, /flight-time checking/i, /Fixed route pricing/, /Travel safely|take you safely|Safe airport transfer/, /published operating hours/];
  for (const file of files) {
    // Explicit negations ("does not claim 24/7 support") are the honest form.
    const text = source(file).replace(/\b(?:does not claim|not claimed here as|not a) 24\/7/gi, "");
    for (const claim of retired) assert.doesNotMatch(text, claim, `${file}: ${claim}`);
  }
  const translations = source("../src/data/translations.js");
  assert.doesNotMatch(translations, /24\/7|Fast reply|Быстрый ответ|तेज जवाब/);
  assert.doesNotMatch(translations, /Safe airport transfer|"Travel safely"|Viaje seguro|Voyage sûr|سفر آمن|सुरक्षित यात्रा/);
});

test("titles stay within a reviewed length and the normal build uses the native config loader", () => {
  const travelData = source("../src/data/travelData.js");
  const meta = travelData.slice(travelData.indexOf("export const pageMeta"));
  for (const [, title] of meta.matchAll(/^    title: "((?:[^"\\]|\\.)*)",$/gm)) {
    assert.ok(title.length <= 70, `title too long (${title.length}): ${title}`);
  }
  assert.match(JSON.parse(source("../package.json")).scripts.build, /vite build --configLoader native/);
});
