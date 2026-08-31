/**
 * SEO / route-integrity audit for SKY Taxi Service & Tours.
 *
 * Read-only. Never edits anything. Run with `npm run seo-audit`.
 *
 * Checks route<->registry<->metadata consistency, duplicate titles/
 * descriptions, static broken links, and does a best-effort orphan scan —
 * clearly labeled PASS / WARNING / BLOCKED / UNVERIFIED per finding.
 *
 * KNOWN LIMITATION (do not "fix" this by guessing): internal links inside
 * the shared templates in src/components/seo/*.jsx are built from a
 * `config.somePage` variable, not a string literal — e.g.
 * `setPage(config.ctaPageB)`. A static regex genuinely cannot resolve
 * those without evaluating the corresponding src/data/seo/*.js file, so
 * this script flags such pages as UNVERIFIED-BY-STATIC-SCAN rather than
 * falsely reporting them as broken or orphaned. Cross-reference manually
 * (or extend this script's dynamic-aware pass) before trusting a
 * "possible orphan" result blindly.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const read = (p) => readFileSync(join(ROOT, p), "utf8");

let warnings = 0;
let failures = 0;
function pass(label, detail = "") {
  console.log(`PASS      ${label}${detail ? " — " + detail : ""}`);
}
function warn(label, detail = "") {
  warnings++;
  console.log(`WARNING   ${label}${detail ? " — " + detail : ""}`);
}
function fail(label, detail = "") {
  failures++;
  console.log(`BLOCKED   ${label}${detail ? " — " + detail : ""}`);
}
function unverified(label, detail = "") {
  console.log(`UNVERIFIED ${label}${detail ? " — " + detail : ""}`);
}

console.log("=== SKY Taxi Service & Tours — SEO audit ===\n");

// ---- routes ----
const appContent = read("src/App.jsx");
const pagesBlock = appContent.match(/const pages = \{([\s\S]*?)\n\};/)[1];
const routes = new Set(
  [...pagesBlock.matchAll(/(?:"([a-z0-9-]+)"|^\s*([a-z0-9-]+)):/gm)].map((m) => m[1] || m[2]),
);
routes.add("home");
routes.delete("rentals"); // alias only — getPageFromHash remaps it to vehicle-rentals before render
console.log(`Routes registered in App.jsx: ${routes.size}\n`);

// ---- registry ----
const seoPagesContent = read("src/data/seoPages.js");
const registrySlugs = new Set([...seoPagesContent.matchAll(/slug: "([a-z0-9-]+)"/g)].map((m) => m[1]));
const registryVsRoutes = [...registrySlugs].filter((s) => !routes.has(s));
const routesVsRegistry = [...routes].filter((s) => !registrySlugs.has(s) && s !== "not-found" && s !== "vehicle-rentals");
if (registryVsRoutes.length === 0 && routesVsRegistry.length === 0) {
  pass("Registry <-> route consistency", `${registrySlugs.size} registry entries, ${routes.size} routes, 0 mismatches`);
} else {
  fail("Registry <-> route consistency", `registry-only: ${registryVsRoutes.join(", ") || "none"}; route-only: ${routesVsRegistry.join(", ") || "none"}`);
}

// ---- metadata: pageMeta coverage + duplicates ----
const travelDataContent = read("src/data/travelData.js");
const pageMetaBlock = travelDataContent.match(/export const pageMeta = \{([\s\S]*?)\n\};/)[1];
const pageMetaSlugs = new Set([...pageMetaBlock.matchAll(/^\s*(?:"([a-z0-9-]+)"|([a-z0-9-]+)):\s*\{/gm)].map((m) => m[1] || m[2]));
const routesMissingMeta = [...routes].filter((s) => !pageMetaSlugs.has(s));
if (routesMissingMeta.length === 0) {
  pass("Every route has a pageMeta entry", `${pageMetaSlugs.size} entries`);
} else {
  fail("Routes missing pageMeta", routesMissingMeta.join(", "));
}

const titles = [...pageMetaBlock.matchAll(/title: "([^"]+)"/g)].map((m) => m[1]);
const descriptions = [...pageMetaBlock.matchAll(/description:\s*\n?\s*"([^"]+)"/g)].map((m) => m[1]);
const dupTitles = titles.filter((t, i) => titles.indexOf(t) !== i);
const dupDescriptions = descriptions.filter((d, i) => descriptions.indexOf(d) !== i);
if (dupTitles.length === 0) pass("Duplicate titles", `0 of ${titles.length}`);
else fail("Duplicate titles", [...new Set(dupTitles)].join(", "));
if (dupDescriptions.length === 0) pass("Duplicate descriptions", `0 of ${descriptions.length}`);
else fail("Duplicate descriptions", [...new Set(dupDescriptions)].join(", "));

const overLongTitles = titles.filter((t) => t.length > 60);
if (overLongTitles.length > 0) {
  warn("Titles over 60 characters (soft SERP-truncation guideline, not an error)", `${overLongTitles.length} of ${titles.length}`);
}

const emptyTitles = titles.filter((t) => !t || !t.trim());
const emptyDescriptions = descriptions.filter((d) => !d || !d.trim());
if (emptyTitles.length === 0 && emptyDescriptions.length === 0) {
  pass("No empty/missing title or description values");
} else {
  fail("Empty title or description found", `${emptyTitles.length} empty titles, ${emptyDescriptions.length} empty descriptions`);
}

// ---- canonicalOverrides sanity ----
const overridesMatch = appContent.match(/const canonicalOverrides = \{([\s\S]*?)\n\};/);
const canonicalOverrides = overridesMatch
  ? new Map([...overridesMatch[1].matchAll(/"([a-z0-9-]+)":\s*"([a-z0-9-]+)"/g)].map((m) => [m[1], m[2]]))
  : new Map();
const badOverrideTargets = [...canonicalOverrides.entries()].filter(([, target]) => !routes.has(target));
if (badOverrideTargets.length === 0) {
  pass("canonicalOverrides targets all resolve to real routes", `${canonicalOverrides.size} overrides`);
} else {
  fail("canonicalOverrides point at a non-existent route", badOverrideTargets.map(([k, v]) => `${k}->${v}`).join(", "));
}

// ---- sitemap ----
let sitemapUrls = [];
try {
  const sitemapContent = read("public/sitemap.xml");
  sitemapUrls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  const overriddenSlugs = new Set(canonicalOverrides.keys());
  const sitemapSlugs = new Set(
    sitemapUrls.map((u) => {
      const path = u.replace(/^https?:\/\/[^/]+\/?/, "");
      return path === "" ? "home" : path;
    }),
  );
  const overriddenInSitemap = [...overriddenSlugs].filter((s) => sitemapSlugs.has(s));
  if (overriddenInSitemap.length === 0) {
    pass("No canonical-override page leaked into sitemap.xml", `${sitemapUrls.length} URLs`);
  } else {
    fail("Canonical-override page present in sitemap.xml", overriddenInSitemap.join(", "));
  }
} catch {
  unverified("sitemap.xml check", "file not found — run `npm run sitemap` or `npm run build` first");
}

// ---- broken internal links (static scan; dynamic template links flagged separately) ----
function walk(dir) {
  let results = [];
  for (const entry of readdirSync(join(ROOT, dir), { withFileTypes: true })) {
    const rel = join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(walk(rel));
    else if (entry.name.endsWith(".jsx")) results.push(rel);
  }
  return results;
}
const jsxFiles = [...walk("src/pages"), ...walk("src/components")];
const brokenStatic = new Set();
const dynamicSetPageFiles = new Set();
const staticInbound = {};
for (const s of routes) staticInbound[s] = 0;
for (const f of jsxFiles) {
  const c = read(f);
  const hrefs = [...c.matchAll(/href="\/([a-z0-9-]+)"/g)].map((m) => m[1]);
  const setPagesLiteral = [...c.matchAll(/setPage\("([a-z0-9-]+)"\)/g)].map((m) => m[1]);
  for (const slug of [...hrefs, ...setPagesLiteral]) {
    if (!routes.has(slug)) brokenStatic.add(`${slug} <- ${basename(f)}`);
    else staticInbound[slug] = (staticInbound[slug] || 0) + 1;
  }
  if (/setPage\(config\.\w+\)/.test(c)) dynamicSetPageFiles.add(basename(f));
}
if (brokenStatic.size === 0) {
  pass("Broken internal links (static scan)", "0 found");
} else {
  fail("Broken internal links (static scan)", [...brokenStatic].join("; "));
}
if (dynamicSetPageFiles.size > 0) {
  unverified(
    "Dynamic-config internal links cannot be statically resolved",
    `${dynamicSetPageFiles.size} template files use setPage(config.x) — verify their src/data/seo/*.js targets manually: ${[...dynamicSetPageFiles].join(", ")}`,
  );
}

const excludedFromOrphanCheck = new Set(["home", "not-found", "acquire", "acquisition-overview", "ai-system", "valuation", "vehicle-rentals", "booking", "contact"]);
const possibleOrphans = [...routes].filter((s) => !excludedFromOrphanCheck.has(s) && (staticInbound[s] || 0) === 0);
if (possibleOrphans.length === 0) {
  pass("Zero-static-inbound-link pages", "none");
} else {
  unverified(
    "Pages with zero STATICALLY-detected inbound links",
    `${possibleOrphans.length} pages — many of these are reached via data-driven nav/footer arrays or dynamic template links (config.ctaPage etc.) invisible to a regex scan. Do not treat this list as confirmed orphans without tracing each one: ${possibleOrphans.join(", ")}`,
  );
}

// ---- H1 count per page file (literal <h1> only — most pages get theirs
// from the shared PageHero component instead, which is fine and not
// double-counted here since PageHero itself is a separate file) ----
const pageFiles = readdirSync(join(ROOT, "src/pages")).filter((f) => f.endsWith(".jsx"));
const multiH1Files = [];
for (const f of pageFiles) {
  const c = read(join("src/pages", f));
  const h1Count = (c.match(/<h1[\s>]/g) || []).length;
  if (h1Count >= 2) multiH1Files.push(`${f} (${h1Count})`);
}
if (multiH1Files.length === 0) {
  pass("No page file has 2+ literal <h1> tags");
} else {
  warn("Page files with multiple literal <h1> tags — verify only one ever renders", multiH1Files.join(", "));
}

// ---- images missing alt attribute entirely (empty alt="" is valid — only
// a fully missing attribute is flagged) ----
let imagesMissingAlt = [];
for (const f of jsxFiles) {
  const c = read(f);
  const imgTags = c.match(/<img\b[^>]*>/g) || [];
  for (const tag of imgTags) {
    if (!/\balt\s*=/.test(tag)) imagesMissingAlt.push(`${basename(f)}: ${tag.slice(0, 60)}`);
  }
}
if (imagesMissingAlt.length === 0) {
  pass("Every <img> tag has an alt attribute (static scan)");
} else {
  fail("<img> tags missing an alt attribute entirely", imagesMissingAlt.join("; "));
}

// ---- secrets scan ----
const envTracked = (() => {
  try {
    const gitignore = read(".gitignore");
    return !/^\.env$/m.test(gitignore);
  } catch {
    return true; // unknown — flag for manual check
  }
})();
if (!envTracked) pass(".env is listed in .gitignore");
else unverified(".gitignore .env rule", "could not confirm — check manually");

const secretPatterns = [/service_role/i, /SUPABASE_SERVICE/i, /sk-[a-zA-Z0-9]{20,}/, /AIza[0-9A-Za-z_-]{30,}/];
let secretHits = [];
for (const f of [...jsxFiles, ...walk("src/data"), ...walk("src/utils")]) {
  const c = read(f);
  for (const pattern of secretPatterns) {
    if (pattern.test(c)) secretHits.push(`${f} matches ${pattern}`);
  }
}
if (secretHits.length === 0) pass("No obvious hardcoded secret patterns in src/");
else fail("Possible secret exposure", secretHits.join("; "));

console.log(`\n=== ${failures} BLOCKED, ${warnings} WARNING ===`);
process.exit(failures > 0 ? 1 : 0);
