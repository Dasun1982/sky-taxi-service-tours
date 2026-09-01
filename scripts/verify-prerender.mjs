/**
 * Verifies the prerendered output in dist/: unique title/description/
 * canonical/H1 per route, and flags any accidental duplicate raw HTML
 * between major routes. Run after `npm run build && npm run prerender`.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");

const priorityRoutes = [
  "home", "taxi", "airport", "sigiriya-taxi-service", "ella-taxi-service",
  "galle-taxi-service", "kandy-taxi-service", "mirissa-taxi-service",
  "unawatuna-taxi-service", "yala-safari-transfer", "nuwara-eliya-taxi-service",
];

function extract(html) {
  const title = html.match(/<title>(.*?)<\/title>/is)?.[1] ?? null;
  const desc = html.match(/<meta name="description" content="(.*?)"/is)?.[1] ?? null;
  const canonical = html.match(/<link rel="canonical" href="(.*?)"/is)?.[1] ?? null;
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/is)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? null;
  const rootEmpty = /<div id="root"><\/div>/i.test(html);
  return { title, desc, canonical, h1, rootEmpty, length: html.length };
}

console.log("=== Priority route verification ===\n");
const seen = {};
let allUnique = true;
for (const route of priorityRoutes) {
  const path = route === "home" ? join(DIST, "index.html") : join(DIST, route, "index.html");
  if (!existsSync(path)) {
    console.log(`MISSING: ${route}`);
    allUnique = false;
    continue;
  }
  const html = readFileSync(path, "utf8");
  const info = extract(html);
  console.log(`${route}`);
  console.log(`  title:      ${info.title}`);
  console.log(`  description:${info.desc?.slice(0, 90)}`);
  console.log(`  canonical:  ${info.canonical}`);
  console.log(`  h1:         ${info.h1}`);
  console.log(`  root empty: ${info.rootEmpty} (should be false)`);
  console.log(`  size:       ${info.length} bytes\n`);

  const key = info.title;
  if (seen[key]) {
    console.log(`  !! DUPLICATE TITLE with: ${seen[key]}`);
    allUnique = false;
  }
  seen[key] = route;
  if (info.rootEmpty) allUnique = false;
}

// Full-route duplicate raw-HTML scan (all 102, not just the priority list)
console.log("=== Full duplicate-content scan (all routes) ===");
const allDirs = readdirSync(DIST, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);
const sizeMap = {};
for (const dir of allDirs) {
  const p = join(DIST, dir, "index.html");
  if (!existsSync(p)) continue;
  const html = readFileSync(p, "utf8");
  const title = html.match(/<title>(.*?)<\/title>/is)?.[1] ?? "MISSING";
  sizeMap[title] = sizeMap[title] || [];
  sizeMap[title].push(dir);
}
const dupTitles = Object.entries(sizeMap).filter(([, routes]) => routes.length > 1);
console.log(`Routes scanned: ${allDirs.length}`);
console.log(`Duplicate <title> groups: ${dupTitles.length}`);
dupTitles.forEach(([title, routes]) => console.log(`  "${title}": ${routes.join(", ")}`));

console.log(`\n=== RESULT: ${allUnique && dupTitles.length === 0 ? "PASS" : "FAIL"} ===`);
process.exit(allUnique && dupTitles.length === 0 ? 0 : 1);
