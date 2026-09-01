/**
 * Copies the Puppeteer-captured snapshots from dist/ (see prerender.mjs) into
 * public/, which Vite copies verbatim into dist/ on every normal build. This
 * is what actually gets the prerendered HTML shipped to Vercel: dist/ itself
 * is gitignored and gets wiped/regenerated on every build, so nothing in it
 * survives to be committed or deployed on its own.
 *
 * The home route can't use public/index.html (Vite reserves the root
 * index.html as its build template and warns/breaks if public/ also has
 * one), so its snapshot is staged as public/prerendered-home.html instead.
 * scripts/apply-prerendered-home.mjs (run as the last step of `npm run
 * build`) swaps it over dist/index.html after Vite's own build finishes —
 * a plain file copy, no browser involved, so it's safe to run on Vercel.
 *
 * Full workflow (local only, see README note added alongside this):
 *   1. npm run build       (fresh dist/, correct asset hashes)
 *   2. npm run prerender   (Puppeteer captures real rendered HTML into dist/)
 *   3. npm run sync-prerender  (this script: stages captures into public/)
 *   4. npm run build       (final build: public/ captures copied into dist/,
 *                            then apply-prerendered-home.mjs finishes the job)
 *   5. commit public/ and package.json
 */
import { cpSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist");
const PUBLIC = join(ROOT, "public");

if (!existsSync(DIST)) {
  console.error("dist/ not found â€” run `npm run build && npm run prerender` first.");
  process.exit(1);
}

const seoPagesSrc = readFileSync(join(ROOT, "src/data/seoPages.js"), "utf8");
const allSlugs = [...seoPagesSrc.matchAll(/slug: "([a-z0-9-]+)"/g)].map((m) => m[1]);
const excludedSlugs = new Set([
  "acquire", "acquisition-overview", "ai-system", "valuation", "not-found", "vehicle-rentals",
]);
const routes = [...new Set(allSlugs)].filter((s) => !excludedSlugs.has(s) && s !== "home");

let copied = 0;
const missing = [];

for (const slug of routes) {
  const dirSrc = join(DIST, slug, "index.html");
  const flatSrc = join(DIST, `${slug}.html`);
  if (!existsSync(dirSrc) || !existsSync(flatSrc)) {
    missing.push(slug);
    continue;
  }
  const dirDest = join(PUBLIC, slug, "index.html");
  const flatDest = join(PUBLIC, `${slug}.html`);
  mkdirSync(dirname(dirDest), { recursive: true });
  cpSync(dirSrc, dirDest);
  cpSync(flatSrc, flatDest);
  copied++;
}

const homeSrc = join(DIST, "index.html");
if (existsSync(homeSrc)) {
  cpSync(homeSrc, join(PUBLIC, "prerendered-home.html"));
} else {
  missing.push("home");
}

console.log(`Synced ${copied}/${routes.length} route snapshots into public/, plus home -> public/prerendered-home.html`);
if (missing.length) {
  console.log(`Missing from dist/ (not synced): ${missing.join(", ")}`);
  process.exitCode = 1;
}
