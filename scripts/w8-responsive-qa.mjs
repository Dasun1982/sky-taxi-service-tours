import assert from "node:assert/strict";
import { join } from "node:path";
import { tmpdir } from "node:os";
import puppeteer from "puppeteer";

const base = "http://127.0.0.1:4173";
const routes = ["/", "/airport", "/private-driver-sri-lanka", "/chauffeur-guide-sri-lanka", "/round-tours", "/testimonials", "/custom-journey", "/tours", "/5-day-sri-lanka-tour", "/ai-trip-planner", "/booking"];
const nextSteps = [
  ["/airport", ".airport-continue-journey a[href='/private-driver-sri-lanka']", "/private-driver-sri-lanka"],
  ["/private-driver-sri-lanka", ".private-driver-cta a[href='/chauffeur-guide-sri-lanka']", "/chauffeur-guide-sri-lanka"],
  ["/chauffeur-guide-sri-lanka", ".private-driver-cta a[href='/custom-journey']", "/custom-journey"],
  ["/round-tours", ".one-day-custom-tour a[href='/custom-journey']", "/custom-journey"],
  ["/testimonials", ".feature-grid a[href='/airport']", "/airport"],
  ["/testimonials", ".feature-grid a[href='/private-driver-sri-lanka']", "/private-driver-sri-lanka"],
  ["/testimonials", ".feature-grid a[href='/custom-journey']", "/custom-journey"],
];
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
let checks = 0;
const ok = (value, label) => { assert.ok(value, label); checks += 1; };
const same = (actual, expected, label) => { assert.equal(actual, expected, label); checks += 1; };

async function visit(route, width, language = "en") {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.setViewport({ width, height: 850 });
  await page.evaluateOnNewDocument((selected) => localStorage.setItem("sky-language", selected), language);
  await page.goto(`${base}${route}`, { waitUntil: "networkidle2" });
  await page.waitForSelector("h1");
  return { page, errors };
}

try {
  for (const width of [390, 768, 1280]) {
    for (const route of routes) {
      const { page, errors } = await visit(route, width);
      const state = await page.evaluate(() => ({
        path: location.pathname,
        h1Count: document.querySelectorAll("h1").length,
        overflow: document.documentElement.scrollWidth - innerWidth,
        title: document.title,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        schemaTypes: [...document.querySelectorAll('script[type="application/ld+json"]')].map((node) => JSON.parse(node.textContent)["@type"]),
        body: document.body.innerText,
        stars: document.querySelectorAll(".stars, .testimonial-slider, .review-card").length,
        whyCards: document.querySelectorAll("#why .why-card-home").length,
        airportBenefits: document.querySelectorAll(".airport-benefit-card").length,
        primaryLinks: [...document.querySelectorAll(".private-driver-cta .button--primary, .airport-pricing-section .button--primary")].length,
      }));
      same(state.path, route, `${route} ${width} path`);
      same(state.h1Count, 1, `${route} ${width} one H1`);
      ok(state.overflow <= 1, `${route} ${width} overflow ${state.overflow}`);
      ok(state.title.length > 10, `${route} ${width} title`);
      same(state.canonical, `https://www.skytaxisrilanka.com${route === "/" ? "/" : route}`, `${route} ${width} canonical`);
      same(errors.length, 0, `${route} ${width} runtime errors`);
      if (route === "/") {
        same(state.whyCards, 6, `${width} six Home reassurance cards`);
        ok(state.body.includes("Visible starting prices") && state.body.includes("Clear confirmation"), `${width} Home factual reassurance`);
        ok(!state.body.includes("Safe Travel"), `${width} no unsupported Home safety card`);
      }
      if (route === "/airport") {
        same(state.airportBenefits, 4, `${width} airport benefits`);
        ok(state.body.includes("Pickup details reviewed") && !state.body.includes("Flight-time checking"), `${width} airport reassurance`);
        ok(state.body.includes("Need private transport after arrival?"), `${width} airport continuation`);
        ok(state.primaryLinks >= 1, `${width} airport primary quote remains`);
        const order = await page.evaluate(() => document.querySelector(".airport-pricing-section").compareDocumentPosition(document.querySelector(".airport-continue-journey")) & Node.DOCUMENT_POSITION_FOLLOWING);
        ok(order, `${width} airport continuation follows pricing`);
      }
      if (route === "/private-driver-sri-lanka") {
        ok(state.body.includes("From LKR 25,000/day") && state.body.includes("150 km/day"), `${width} driver price basis`);
        ok(state.primaryLinks >= 1, `${width} driver primary quote remains`);
      }
      if (route === "/chauffeur-guide-sri-lanka") {
        ok(state.body.includes("From $69/day") && state.body.includes("150 km/day"), `${width} guide price basis`);
        ok(state.primaryLinks >= 1, `${width} guide primary quote remains`);
      }
      if (route === "/testimonials") {
        same(state.stars, 0, `${width} no unverified review UI`);
        ok(state.body.includes("does not currently publish individual customer reviews"), `${width} review evidence message`);
        ok(state.schemaTypes.includes("WebPage") && !state.schemaTypes.includes("Review") && !state.schemaTypes.includes("AggregateRating"), `${width} review schema safety`);
      }
      if (route === "/custom-journey") {
        ok(state.body.includes("not a booking") && state.body.includes("current quote"), `${width} W7 authority`);
      }
      if (route === "/booking") same(await page.$$(".booking-form-panel").then((items) => items.length), 1, `${width} Booking form preserved`);
      if (["/", "/airport", "/testimonials"].includes(route)) {
        const selector = route === "/" ? "#why" : route === "/airport" ? ".airport-continue-journey" : ".page > .section";
        const target = await page.$(selector);
        await target.evaluate((node) => node.scrollIntoView({ block: "center" }));
        await new Promise((resolve) => setTimeout(resolve, 450));
        const path = join(tmpdir(), `sky-w8-${route === "/" ? "home" : route.slice(1)}-${width}.png`);
        await target.screenshot({ path });
        console.log(`SCREENSHOT ${path}`);
      }
      await page.close();
    }
  }

  for (const [source, selector, destination] of nextSteps) {
    const { page } = await visit(source, 1280);
    const link = await page.$(selector);
    ok(link, `${source} related link exists`);
    await link.focus();
    same(await page.evaluate(() => document.activeElement?.getAttribute("href")), destination, `${source} link keyboard focus`);
    await link.click();
    await page.waitForFunction((path) => location.pathname === path, {}, destination);
    await page.waitForSelector("h1");
    same(new URL(page.url()).pathname, destination, `${source} navigation`);
    same(await page.$$("h1").then((items) => items.length), 1, `${destination} destination H1`);
    await page.close();
  }

  for (const language of ["ar", "ru"]) {
    for (const route of ["/", "/airport", "/testimonials"]) {
      const { page, errors } = await visit(route, 390, language);
      const state = await page.evaluate(() => ({ lang: document.documentElement.lang, dir: document.documentElement.dir, overflow: document.documentElement.scrollWidth - innerWidth }));
      same(state.lang, language, `${language} ${route} language`);
      same(state.dir, language === "ar" ? "rtl" : "ltr", `${language} ${route} direction`);
      ok(state.overflow <= 1, `${language} ${route} overflow`);
      same(errors.length, 0, `${language} ${route} runtime errors`);
      await page.close();
    }
  }

  console.log(`W8 responsive QA: ${checks} checks passed`);
} finally {
  await browser.close();
}
