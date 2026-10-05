import assert from "node:assert/strict";
import { join } from "node:path";
import { tmpdir } from "node:os";
import puppeteer from "puppeteer";

const base = "http://127.0.0.1:4173";
const routes = ["/", "/airport", "/colombo-airport-taxi", "/airport-to-galle", "/private-driver-sri-lanka", "/chauffeur-guide-sri-lanka", "/custom-journey", "/tours", "/round-tours", "/booking", "/contact", "/testimonials", "/ai-trip-planner", "/privacy", "/terms", "/support", "/account-deletion"];
const widths = [320, 360, 390, 768, 1024, 1280, 1920];
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
let checks = 0;

async function visit(route, width, language = "en") {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.setViewport({ width, height: 850 });
  await page.evaluateOnNewDocument((lang) => localStorage.setItem("sky-language", lang), language);
  await page.goto(`${base}${route}`, { waitUntil: "networkidle2" });
  await page.waitForSelector("h1");
  return { page, errors };
}

try {
  for (const width of widths) {
    for (const route of routes) {
      const { page, errors } = await visit(route, width);
      const state = await page.evaluate(() => ({
        h1: [...document.querySelectorAll("h1")].map((node) => node.textContent.trim()),
        overflow: document.documentElement.scrollWidth - innerWidth,
        title: document.title,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        robots: document.querySelector('meta[name="robots"]')?.content,
        brokenImages: [...document.images].filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.src),
        schemaTypes: [...document.querySelectorAll('script[type="application/ld+json"]')].map((node) => JSON.parse(node.textContent)["@type"]),
        // Hero legibility: light buttons need dark text; photo-hero eyebrows need light text.
        heroLightButtons: [...document.querySelectorAll(".page-hero .button--light")].map((node) => getComputedStyle(node).color),
        heroEyebrow: (() => {
          const hero = document.querySelector(".page-hero");
          if (!hero) return null;
          return { h1: getComputedStyle(hero.querySelector("h1")).color, eyebrow: getComputedStyle(hero.querySelector(".eyebrow")).color };
        })(),
      }));
      const luminance = (rgb) => rgb.match(/[\d.]+/g).slice(0, 3).reduce((sum, value, index) => sum + [0.2126, 0.7152, 0.0722][index] * value / 255, 0);
      for (const color of state.heroLightButtons) {
        assert.ok(luminance(color) < 0.5, `${route} ${width}: hero light button text is dark (${color})`); checks++;
      }
      if (state.heroEyebrow && luminance(state.heroEyebrow.h1) > 0.8) {
        assert.ok(luminance(state.heroEyebrow.eyebrow) > 0.6, `${route} ${width}: photo-hero eyebrow is legible (${state.heroEyebrow.eyebrow})`); checks++;
      }
      assert.equal(state.h1.length, 1, `${route} ${width}: one H1`); checks++;
      assert.ok(state.h1[0], `${route} ${width}: H1 text`); checks++;
      assert.ok(state.overflow <= 1, `${route} ${width}: horizontal overflow ${state.overflow}`); checks++;
      assert.ok(state.title.length > 10, `${route} ${width}: title`); checks++;
      assert.equal(state.canonical, `https://www.skytaxisrilanka.com${route}`, `${route} ${width}: canonical`); checks++;
      assert.deepEqual(errors, [], `${route} ${width}: runtime errors`); checks++;
      assert.deepEqual(state.brokenImages, [], `${route} ${width}: broken images`); checks++;
      assert.ok(!state.schemaTypes.includes("Review") && !state.schemaTypes.includes("AggregateRating"), `${route} ${width}: no unsupported review schema`); checks++;
      if (["/privacy", "/terms", "/support", "/account-deletion"].includes(route)) {
        assert.equal(state.robots, "noindex, follow", `${route} ${width}: utility robots`); checks++;
      }
      if (width === 390 && ["/", "/airport", "/booking", "/custom-journey"].includes(route)) {
        const path = join(tmpdir(), `sky-w10-${route === "/" ? "home" : route.slice(1)}-390.png`);
        await page.screenshot({ path, fullPage: false });
        console.log(`SCREENSHOT ${path}`);
      }
      await page.close();
    }
  }

  for (const language of ["ar", "ru", "de"]) {
    for (const route of ["/", "/airport", "/private-driver-sri-lanka", "/chauffeur-guide-sri-lanka", "/custom-journey", "/booking", "/contact"]) {
      const { page, errors } = await visit(route, 390, language);
      const state = await page.evaluate(() => ({ lang: document.documentElement.lang, dir: document.documentElement.dir, overflow: document.documentElement.scrollWidth - innerWidth }));
      assert.equal(state.lang, language, `${language} ${route}: lang`); checks++;
      assert.equal(state.dir, language === "ar" ? "rtl" : "ltr", `${language} ${route}: direction`); checks++;
      assert.ok(state.overflow <= 1, `${language} ${route}: overflow ${state.overflow}`); checks++;
      assert.deepEqual(errors, [], `${language} ${route}: runtime errors`); checks++;
      if (language === "ar" && route === "/") {
        const path = join(tmpdir(), "sky-w10-home-ar-390.png");
        await page.screenshot({ path, fullPage: false });
        console.log(`SCREENSHOT ${path}`);
      }
      await page.close();
    }
  }

  console.log(`W10 final responsive QA: ${checks} checks passed`);
} finally {
  await browser.close();
}
