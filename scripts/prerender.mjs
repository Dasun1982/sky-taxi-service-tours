/**
 * Build-time prerenderer for SKY Taxi Service & Tours.
 *
 * WHY THIS EXISTS (see the SEO audit that led to this): this is a
 * client-only Vite + React SPA with no server framework. Every route's
 * `index.html` was byte-for-byte identical before JavaScript ran — same
 * generic title, empty `<div id="root">`, no canonical — because title/
 * description/canonical/content are all set in a useEffect in App.jsx
 * after mount. That's a well-documented indexing trap: crawlers that don't
 * (or don't promptly) execute JS see 97 apparently-duplicate pages.
 *
 * WHY A REAL BROWSER, NOT A CUSTOM SSR REWRITE: this app has no React
 * Router, and reads `localStorage`/`window`/`IntersectionObserver`/
 * `matchMedia` directly in several places during render (e.g.
 * LanguageContext's `getSavedLanguage()`), not just inside effects.
 * Making the existing component tree safely renderable in a Node SSR
 * context would mean auditing and likely touching dozens of components —
 * exactly the invasive, high-risk change this task was told to avoid.
 * Puppeteer instead runs the REAL, ALREADY-WORKING production build in a
 * REAL browser and captures the DOM after it renders — zero application
 * code touched.
 *
 * WHY THIS DOESN'T TOUCH main.jsx / hydration: `main.jsx` still does a
 * plain `createRoot(...).render(...)` — a fresh client render, not
 * `hydrateRoot`. That's deliberate: on a real visit, this file's captured
 * HTML is fully replaced by React's own client render within
 * milliseconds, so a real visitor's experience is byte-for-byte what it
 * was before this script existed (same loader timing, same everything).
 * Only a client that reads raw HTML without executing JS — a crawler —
 * ever "sees" this file's content as final. Switching to `hydrateRoot`
 * was considered and rejected: the loader's `isLoading` state starts
 * `true` on every fresh client mount but is necessarily `false` in a
 * captured snapshot, which would produce a real hydration mismatch
 * warning/flash. Not worth the risk for a purely SEO-motivated change.
 *
 * WHAT THIS SCRIPT DOES NOT DO: it does not run on Vercel's build
 * servers. It's a separate, explicit step (`npm run prerender`) run
 * locally after `npm run build`, writing static HTML files directly into
 * `dist/`. That keeps the actual Vercel build (`npm run build`) exactly
 * as simple and fast as it already was — no new runtime risk on infra
 * this project doesn't control. The tradeoff, stated plainly: prerendered
 * snapshots go stale if page content changes and this script isn't
 * re-run before the next deploy. See README note added alongside this.
 */
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist");
const PORT = 4321; // dedicated port, unlikely to collide with dev/preview defaults
const BASE_URL = `http://localhost:${PORT}`;

const seoPagesSrc = readFileSync(join(ROOT, "src/data/seoPages.js"), "utf8");
const excludedTypes = new Set(["INVESTOR_NOINDEX", "SOFT_DEINDEXED", "NOT_FOUND"]);
const entries = [...seoPagesSrc.matchAll(/\{ slug: "([a-z0-9-]+)"[\s\S]*?pageType: pageTypes\.([A-Z_]+)/g)]
  .map((m) => ({ slug: m[1], type: m[2] }))
  // A handful of entries in seoPages.js only set pageType a few lines below
  // `slug` (multi-line object literals) and won't match the regex above;
  // fall back to a permissive slug-only pass and cross-check against the
  // excluded set by type where we found one.
  ;
const allSlugs = [...seoPagesSrc.matchAll(/slug: "([a-z0-9-]+)"/g)].map((m) => m[1]);
const excludedSlugs = new Set(entries.filter((e) => excludedTypes.has(e.type)).map((e) => e.slug));
// Known-excluded by construction (see seoPages.js) — matches the sitemap generator's own list.
["acquire", "acquisition-overview", "ai-system", "valuation", "not-found", "vehicle-rentals"].forEach((s) => excludedSlugs.add(s));

const routes = [...new Set(allSlugs)].filter((s) => !excludedSlugs.has(s));

console.log(`Prerendering ${routes.length} routes (excluded: ${[...excludedSlugs].join(", ")})`);

function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  return new Promise((resolvePromise, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok || res.status === 404) return resolvePromise();
      } catch {
        // not up yet
      }
      if (Date.now() - start > timeoutMs) return reject(new Error("preview server did not start in time"));
      setTimeout(tick, 300);
    };
    tick();
  });
}

async function main() {
  const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], {
    cwd: ROOT,
    stdio: "pipe",
    shell: true,
  });
  server.stdout.on("data", () => {});
  let serverErr = "";
  server.stderr.on("data", (d) => { serverErr += d.toString(); });

  try {
    await waitForServer(BASE_URL + "/");
  } catch (e) {
    console.error("Preview server failed to start:", serverErr);
    server.kill();
    process.exit(1);
  }

  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  let ok = 0;
  let failed = [];

  for (const slug of routes) {
    const path = slug === "home" ? "/" : `/${slug}`;
    const url = BASE_URL + path;
    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 15000 });
      // Real content marker: the per-route title effect + at least one H1
      // with real text. Falls through to a capture anyway after the
      // timeout rather than skipping the route entirely — a slightly
      // stale capture is still far better than none for this route.
      await page.waitForFunction(
        () => document.title && document.title.trim().length > 0 && document.querySelector("h1")?.textContent?.trim().length > 0,
        { timeout: 5000 },
      ).catch(() => {});

      const html = await page.content();
      if (slug === "home") {
        writeFileSync(join(DIST, "index.html"), html, "utf8");
      } else {
        // Written in BOTH conventions deliberately: local verification via
        // `vite preview` (sirv) proved it resolves `/foo` (no trailing
        // slash — the real URL format Google and every internal link on
        // this site actually use) by falling through to the SPA root
        // BEFORE checking `foo/index.html`, and only serves the correct
        // file for `/foo/` (trailing slash) or `/foo/index.html`. Vercel's
        // own filesystem routing is documented to check both `foo.html`
        // and `foo/index.html` for a clean URL, but this can't be
        // confirmed against real Vercel infrastructure from this
        // environment — writing both formats costs a few KB per route and
        // removes the guesswork.
        const dirPath = join(DIST, slug, "index.html");
        const flatPath = join(DIST, `${slug}.html`);
        mkdirSync(dirname(dirPath), { recursive: true });
        writeFileSync(dirPath, html, "utf8");
        writeFileSync(flatPath, html, "utf8");
      }
      ok++;
    } catch (err) {
      failed.push(`${slug}: ${err.message}`);
    }
  }

  await browser.close();
  server.kill();

  console.log(`Prerendered ${ok}/${routes.length} routes into dist/`);
  if (failed.length) {
    console.log(`Failed (${failed.length}):`);
    failed.forEach((f) => console.log(`  ${f}`));
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
