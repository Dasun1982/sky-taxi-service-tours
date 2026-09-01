/**
 * Last step of `npm run build`. Vite just copied public/prerendered-home.html
 * (a Puppeteer-captured snapshot staged by sync-prerender-to-public.mjs)
 * verbatim into dist/prerendered-home.html. This swaps it over the
 * freshly-built dist/index.html so the homepage ships with real crawlable
 * content instead of the empty pre-render shell.
 *
 * Plain file copy only, no browser, so it's safe to run as part of every
 * build (including on Vercel). If no snapshot has been staged yet (e.g. a
 * fresh checkout before the prerender workflow has been run locally once),
 * this is a no-op and the normal Vite-built index.html ships unchanged.
 */
import { copyFileSync, existsSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const snapshot = join(ROOT, "dist", "prerendered-home.html");
const target = join(ROOT, "dist", "index.html");

if (existsSync(snapshot)) {
  copyFileSync(snapshot, target);
  rmSync(snapshot);
  console.log("Applied prerendered home snapshot to dist/index.html");
} else {
  console.log("No prerendered home snapshot found in dist/ - skipping (run npm run sync-prerender to stage one)");
}
