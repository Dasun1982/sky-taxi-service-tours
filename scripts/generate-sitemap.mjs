// Build-time sitemap generator — replaces the old hand-maintained
// public/sitemap.xml. Reads the same registry (src/data/seoPages.js) that
// already tracks every real page and its exclusion status, so the sitemap
// can no longer silently drift from what's actually live — the exact
// "silent-drift bug" seoPages.js's own header comment warns about.
//
// Excludes:
//   - pageType INVESTOR_NOINDEX / SOFT_DEINDEXED / NOT_FOUND (seoPages.js)
//   - any slug that is a key in App.jsx's canonicalOverrides (its own
//     canonical tag points at a different page, so it must not also claim
//     to be sitemap-canonical — duplicated here deliberately rather than
//     parsed out of App.jsx; keep in sync if canonicalOverrides changes)
//
// Run via `npm run build` (wired into the build script) or directly with
// `node scripts/generate-sitemap.mjs`.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { seoPages, pageTypes } from "../src/data/seoPages.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, "../public/sitemap.xml");

// Same value as src/data/business.js's `website` export. Not imported
// directly: business.js's import chain uses Vite-style extensionless
// specifiers (`./travelData`) that Vite's bundler resolves but plain
// Node ESM does not, and this script runs under plain Node, not Vite.
// If business.js's `website` value ever changes, update this too.
const SITE_URL = "https://skytaxisrilanka.com";

// Mirrors App.jsx's canonicalOverrides exactly — see that file for why
// each of these points elsewhere instead of being deleted or redirected.
const canonicalOverrides = {
  "sri-lanka-taxi-service": "taxi",
  "sri-lanka-round-tours": "round-tours",
  "day-tours-sri-lanka": "one-day-tours",
  "sri-lanka-private-tours": "tours",
  "airport-transfer-sri-lanka": "airport",
};

const excludedPageTypes = new Set([
  pageTypes.INVESTOR_NOINDEX,
  pageTypes.SOFT_DEINDEXED,
  pageTypes.NOT_FOUND,
]);

// Simple, defensible three-tier weighting. Google has said it largely
// ignores sitemap <priority> in ranking, so this isn't tuned further than
// "home first, everything else roughly equal, guides slightly lower."
const HIGH_PRIORITY_TYPES = new Set([
  pageTypes.CORE,
  pageTypes.AI_PLANNER,
  pageTypes.TAXI_HUB,
  pageTypes.AIRPORT_TRANSFER_HUB,
  pageTypes.TOURS_HUB,
  pageTypes.DESTINATIONS_HUB,
  pageTypes.TRANSPORT_HUB,
]);
const GUIDE_TYPES = new Set([pageTypes.DURATION_TOUR, pageTypes.DRIVER_GUIDE]);

function priorityFor(page) {
  if (page.slug === "home") return "1.0";
  if (GUIDE_TYPES.has(page.pageType)) return "0.7";
  if (HIGH_PRIORITY_TYPES.has(page.pageType)) return "0.9";
  return "0.8";
}

// Matches App.jsx's own canonicalUrl construction exactly (trailing slash
// on home, no trailing slash elsewhere) — the sitemap must not disagree
// with the canonical tag the page itself actually emits.
function pathFor(slug) {
  return slug === "home" ? "/" : `/${slug}`;
}

const indexablePages = seoPages.filter(
  (page) => !excludedPageTypes.has(page.pageType) && !canonicalOverrides[page.slug],
);

const urlEntries = indexablePages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${pathFor(page.slug)}</loc>
    <priority>${priorityFor(page)}</priority>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

writeFileSync(OUTPUT_PATH, xml, "utf8");
console.log(`sitemap.xml generated: ${indexablePages.length} URLs (from ${seoPages.length} registry entries)`);
