/** Capture only W7's new route and the three existing routes with W7 links. */
import assert from "node:assert/strict";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import puppeteer from "puppeteer";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const routes = ["custom-journey", "tours", "ai-trip-planner", "5-day-sri-lanka-tour"];
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
try {
  for (const slug of routes) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(`http://127.0.0.1:4173/${slug}`, { waitUntil: "networkidle2" });
    await page.evaluate(() => localStorage.setItem("sky-language", "en"));
    await page.reload({ waitUntil: "networkidle2" });
    await page.waitForSelector(slug === "custom-journey" ? ".custom-journey-form" : 'a[href^="/custom-journey"]');
    await new Promise((resolve) => setTimeout(resolve, 400));
    const html = (await page.content()).replace(/[ \t]+(?=\r?$)/gm, "");
    if (slug !== "custom-journey") assert.ok(html.includes('href="/custom-journey'), `${slug}: W7 link missing`);
    assert.ok(html.includes(`https://www.skytaxisrilanka.com/${slug}`), `${slug}: canonical missing`);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${slug}: H1 count`);
    if (slug === "custom-journey") {
      assert.ok(html.includes("Review your WhatsApp request"), "W7 review missing");
      assert.ok(html.includes('name="route"'), "W7 route field missing");
    }
    const flat = join(root, "public", `${slug}.html`);
    const nested = join(root, "public", slug, "index.html");
    mkdirSync(dirname(nested), { recursive: true });
    writeFileSync(flat, html, "utf8");
    writeFileSync(nested, html, "utf8");
    console.log(`Updated only ${slug} static snapshots (${html.length} characters)`);
    await page.close();
  }
} finally {
  await browser.close();
}
