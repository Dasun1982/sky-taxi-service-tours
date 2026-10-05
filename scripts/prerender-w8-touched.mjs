/** Refresh only the W8-changed public snapshots from a local production preview. */
import assert from "node:assert/strict";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const routes = [
  ["home", "/", "Visible starting prices"],
  ["airport", "/airport", "Need private transport after arrival?"],
  ["private-driver-sri-lanka", "/private-driver-sri-lanka", "Explore Chauffeur Guide"],
  ["chauffeur-guide-sri-lanka", "/chauffeur-guide-sri-lanka", "Still deciding your route?"],
  ["round-tours", "/round-tours", "Have several stops in mind?"],
  ["testimonials", "/testimonials", "does not currently publish individual customer reviews"],
];
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
try {
  for (const [slug, path, expectedText] of routes) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.evaluateOnNewDocument(() => localStorage.setItem("sky-language", "en"));
    await page.goto(`http://127.0.0.1:4173${path}`, { waitUntil: "networkidle2" });
    await page.waitForFunction((text) => document.body.innerText.includes(text), {}, expectedText);
    const html = (await page.content()).replace(/[ \t]+(?=\r?$)/gm, "");
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${slug}: H1 count`);
    assert.ok(html.includes(`https://www.skytaxisrilanka.com${path}`), `${slug}: canonical`);
    assert.ok(html.includes(expectedText), `${slug}: W8 content`);
    if (slug === "testimonials") {
      assert.ok(!html.includes('class="stars"'), "unsupported stars remain");
      assert.ok(!html.includes('"@type":"Review"'), "unsupported review schema remains");
      assert.ok(!html.includes('"@type":"AggregateRating"'), "unsupported aggregate rating remains");
    }
    if (slug === "home") {
      writeFileSync(join(root, "public", "prerendered-home.html"), html, "utf8");
    } else {
      const flat = join(root, "public", `${slug}.html`);
      const nested = join(root, "public", slug, "index.html");
      mkdirSync(dirname(nested), { recursive: true });
      writeFileSync(flat, html, "utf8");
      writeFileSync(nested, html, "utf8");
    }
    console.log(`Updated W8 ${slug} snapshot (${html.length} characters)`);
    await page.close();
  }
} finally {
  await browser.close();
}
