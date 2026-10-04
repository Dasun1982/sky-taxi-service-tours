/** Refresh only the homepage snapshot from an already-running local production preview. */
import assert from "node:assert/strict";
import { writeFileSync } from "node:fs";
import puppeteer from "puppeteer";
import { getPrivateDriverOffer } from "../src/data/privateDriverOffer.js";
import { getChauffeurGuideOffer } from "../src/data/chauffeurGuideOffer.js";
import { formatCommercialPrice } from "../src/data/pricing.js";

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle2" });
  await page.evaluate(() => localStorage.setItem("sky-language", "en"));
  await page.reload({ waitUntil: "networkidle2" });
  await page.waitForSelector(".home-service-grid--commercial .home-service-card:nth-child(4)");
  await new Promise((resolve) => setTimeout(resolve, 500));
  const html = await page.content();
  const driver = getPrivateDriverOffer();
  const guide = getChauffeurGuideOffer();
  for (const value of [
    "Find the right way to travel in Sri Lanka",
    `From ${formatCommercialPrice(driver.startingPrice, driver.currency, true)}`,
    `From ${formatCommercialPrice(guide.startingPrice, guide.currency, true)}`,
    'href="/private-driver-sri-lanka"',
    'href="/chauffeur-guide-sri-lanka"',
  ]) {
    assert.ok(html.includes(value), `Missing expected homepage content: ${value}`);
  }
  assert.equal((html.match(/<h1\b/g) || []).length, 1, "single homepage H1");
  assert.equal((html.match(/application\/ld\+json/g) || []).length, 3, "existing home JSON-LD");
  writeFileSync(new URL("../public/prerendered-home.html", import.meta.url), html, "utf8");
  console.log(`Updated only public/prerendered-home.html (${html.length} characters)`);
} finally {
  await browser.close();
}
