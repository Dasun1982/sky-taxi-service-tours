import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { seoPages, pageTypes } from "../src/data/seoPages.js";

const publicDir = fileURLToPath(new URL("../public/", import.meta.url));
const distDir = fileURLToPath(new URL("../dist/", import.meta.url));
const read = (name) => readFileSync(join(publicDir, name), "utf8");
const utility = new Set(["privacy", "terms", "account-deletion", "support"]);
const excluded = new Set([pageTypes.INVESTOR_NOINDEX, pageTypes.SOFT_DEINDEXED, pageTypes.NOT_FOUND]);
const sitemapUrls = [...read("sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const sitemapSlugs = new Set(sitemapUrls.map((url) => new URL(url).pathname.replace(/^\//, "") || "home"));
let checks = 0;
const decode = (text) => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
const retiredClaims = [
  /24\/7 (WhatsApp|support|service|booking|reliable)/i,
  /\blicensed (local |specialist |site )?guides?\b/i,
  /flight-time checking/i,
  /Safe airport transfer|Travel safely|take you safely/,
  /Fast reply/,
  /published operating hours/,
];

assert.equal(sitemapUrls.length, 99, "sitemap URL count"); checks++;
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length, "unique sitemap URLs"); checks++;

for (const entry of seoPages) {
  if (excluded.has(entry.pageType)) continue;
  const slug = entry.slug;
  const path = slug === "home" ? "/" : `/${slug}`;
  const html = read(slug === "home" ? "prerendered-home.html" : `${slug}.html`);
  if (slug !== "home") {
    assert.equal(html, read(`${slug}/index.html`), `${slug}: flat/nested snapshots match`); checks++;
  }
  const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]+>/g, "").trim();
  assert.ok(h1, `${slug}: crawlable H1`); checks++;
  assert.match(html, /<meta name="description" content="[^"]+"/, `${slug}: description`); checks++;
  assert.match(html, /<title>[^<]+<\/title>/, `${slug}: title`); checks++;
  assert.ok(!html.includes('"priceRange":"$$"'), `${slug}: no unsupported schema priceRange`); checks++;
  assert.ok(!/"@type":"(?:Review|AggregateRating)"/.test(html), `${slug}: no unsupported review schema`); checks++;
  assert.ok(!html.includes("24/7 WhatsApp booking") && !html.includes("24/7 service"), `${slug}: no old availability claim`); checks++;

  // Crawler-visible copy carries none of the retired, unverified claims.
  const visible = decode(html.slice(html.indexOf("<body")).replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ");
  const affirmative = visible.replace(/\b(?:does not claim|not claimed here as|not a) 24\/7/gi, "");
  for (const claim of retiredClaims) {
    assert.ok(!claim.test(affirmative), `${slug}: retired claim ${claim}`); checks++;
  }

  // FAQPage schema only describes questions and answers shown on the page.
  for (const block of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    const data = JSON.parse(block[1]);
    if (data["@type"] !== "FAQPage") continue;
    for (const item of data.mainEntity) {
      assert.ok(visible.includes(item.name), `${slug}: FAQ question visible — ${item.name}`); checks++;
      assert.ok(visible.includes(item.acceptedAnswer.text.replace(/\s+/g, " ")), `${slug}: FAQ answer visible — ${item.name}`); checks++;
    }
  }

  const robots = html.match(/<meta name="robots" content="([^"]+)"/i)?.[1];
  if (utility.has(slug)) {
    assert.equal(robots, "noindex, follow", `${slug}: utility robots`); checks++;
    assert.ok(!sitemapSlugs.has(slug), `${slug}: excluded from sitemap`); checks++;
  } else if (sitemapSlugs.has(slug)) {
    assert.equal(robots, "index, follow", `${slug}: indexable robots`); checks++;
    assert.ok(html.includes(`href="https://www.skytaxisrilanka.com${path}"`), `${slug}: self-canonical`); checks++;
  }
  for (const asset of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
    assert.ok(existsSync(join(distDir, decodeURIComponent(asset[1].slice(1)))), `${slug}: asset ${asset[1]} exists`); checks++;
  }
}

for (const url of sitemapUrls) {
  const slug = new URL(url).pathname.replace(/^\//, "") || "home";
  assert.ok(seoPages.some((page) => page.slug === slug), `${slug}: sitemap route in registry`); checks++;
}

console.log(`W10 static QA: ${checks} checks passed across ${seoPages.filter((page) => !excluded.has(page.pageType)).length} snapshots and ${sitemapUrls.length} sitemap URLs`);
