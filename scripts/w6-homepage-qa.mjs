import assert from "node:assert/strict";
import { join } from "node:path";
import { tmpdir } from "node:os";
import puppeteer from "puppeteer";
import { getPrivateDriverOffer } from "../src/data/privateDriverOffer.js";
import { getChauffeurGuideOffer } from "../src/data/chauffeurGuideOffer.js";
import { formatCommercialPrice } from "../src/data/pricing.js";
import { buildQuoteWhatsAppLink } from "../src/utils/whatsapp.js";
import { whatsappIntents } from "../src/utils/whatsappQuote.js";

const baseUrl = "http://127.0.0.1:4173";
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
let checks = 0;
const equal = (actual, expected, message) => {
  assert.equal(actual, expected, message);
  checks += 1;
};
const ok = (actual, message) => {
  assert.ok(actual, message);
  checks += 1;
};

try {
  for (const width of [390, 768, 1280]) {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewport({ width, height: 840 });
    await page.goto(baseUrl, { waitUntil: "networkidle2" });
    await page.evaluate(() => localStorage.setItem("sky-language", "en"));
    await page.reload({ waitUntil: "networkidle2" });
    const data = await page.evaluate(() => ({
      title: document.title,
      h1: document.querySelector("h1")?.textContent?.trim(),
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      jsonLd: document.querySelectorAll('script[type="application/ld+json"]').length,
      overflow: document.documentElement.scrollWidth - innerWidth,
      heroActions: [...document.querySelectorAll(".home-hero .hero-actions > *")].map((node) => node.textContent.trim()),
      serviceHeadings: [...document.querySelectorAll("#services .home-service-card h3")].map((node) => node.textContent.trim()),
      serviceRates: [...document.querySelectorAll("#services .home-service-card__rate")].map((node) => node.textContent.trim()),
      serviceLinks: [...document.querySelectorAll("#services .home-service-card a.service-detail-button")].map((node) => ({ text: node.textContent.trim(), path: new URL(node.href).pathname })),
      serviceLinkColor: getComputedStyle(document.querySelector("#services .home-service-card a.service-detail-button")).color,
      whatsappLinks: [...document.querySelectorAll(".home-page a[href^='https://wa.me/']")].map((node) => node.href),
      seoLinks: [...document.querySelectorAll(".home-seo-routes-section a[href]")].length,
      destinationLinks: [...document.querySelectorAll(".home-destination-section a[href], .explore-sri-lanka-section a[href]")].length,
      sectionOrder: [...document.querySelectorAll(".home-page > section")].map((node) => node.id || node.className),
      servicesTop: Math.round(document.querySelector("#services").getBoundingClientRect().top + scrollY),
      servicesHeight: Math.round(document.querySelector("#services").getBoundingClientRect().height),
      serviceColumns: getComputedStyle(document.querySelector(".home-service-grid--commercial")).gridTemplateColumns.split(" ").length,
    }));
    ok(data.h1?.includes("SKY Taxi Service"), "brand H1");
    ok(data.title.includes("SKY"), "SEO title");
    equal(data.canonical, "https://www.skytaxisrilanka.com/", "production self-canonical");
    ok(data.jsonLd >= 1, "home structured data");
    ok(data.overflow <= 0, `${width}px horizontal overflow: ${data.overflow}`);
    equal(data.heroActions[0], "Explore services", "hero primary action");
    equal(data.heroActions[1], "Plan with SKY AI", "hero AI action");
    equal(data.serviceHeadings.join("|"), "Airport Transfers|Private Driver|Chauffeur Guide|Tours & Itineraries", "four product paths");
    equal(data.serviceLinks.map(({ path }) => path).join("|"), "/airport|/private-driver-sri-lanka|/chauffeur-guide-sri-lanka|/tours", "crawlable product URLs");
    equal(data.serviceLinkColor, "rgb(255, 255, 255)", "chooser action contrast");
    equal(data.serviceRates[0], "See route-specific prices", "airport price context");
    equal(data.serviceRates[1], `From ${formatCommercialPrice(getPrivateDriverOffer().startingPrice, getPrivateDriverOffer().currency, true)}`, "driver W1 starting price");
    equal(data.serviceRates[2], `From ${formatCommercialPrice(getChauffeurGuideOffer().startingPrice, getChauffeurGuideOffer().currency, true)}`, "guide W1 starting price");
    equal(data.serviceRates[3], "Tailored to your route", "tour price context");
    ok(data.whatsappLinks.length >= 3, "direct inquiry CTAs");
    const expectedQuote = new URL(buildQuoteWhatsAppLink({ intent: whatsappIntents.GENERAL, sourcePage: "home" }));
    ok(data.whatsappLinks.every((href) => {
      const actual = new URL(href);
      return actual.pathname === expectedQuote.pathname && actual.searchParams.get("text") === expectedQuote.searchParams.get("text");
    }), "all home WhatsApp links use W2 quote builder");
    ok(data.seoLinks >= 9, "SEO route links preserved");
    ok(data.destinationLinks >= 4, "destination links preserved");
    equal(data.serviceColumns, width === 1280 ? 4 : width === 768 ? 2 : 1, "responsive product grid");
    equal(errors.length, 0, "no homepage runtime errors");
    for (const card of await page.$$("#services .home-service-card")) {
      await card.evaluate((node) => node.scrollIntoView({ block: "center" }));
      await new Promise((resolve) => setTimeout(resolve, 180));
    }
    await page.$eval("#services", (node) => node.scrollIntoView({ block: "start" }));
    await new Promise((resolve) => setTimeout(resolve, 650));
    const screenshot = join(tmpdir(), `sky-w6-after-services-${width}.png`);
    await (await page.$("#services")).screenshot({ path: screenshot });
    const heroScreenshot = join(tmpdir(), `sky-w6-after-hero-${width}.png`);
    await page.$eval(".home-hero", (node) => node.scrollIntoView({ block: "start" }));
    await new Promise((resolve) => setTimeout(resolve, 250));
    await (await page.$(".home-hero")).screenshot({ path: heroScreenshot });
    console.log(JSON.stringify({ width, ...data, errors, screenshot, heroScreenshot }));
    if (width === 390) {
      for (const language of ["ar", "ru"]) {
        await page.evaluate((value) => localStorage.setItem("sky-language", value), language);
        await page.reload({ waitUntil: "networkidle2" });
        const localized = await page.evaluate(() => ({
          lang: document.documentElement.lang,
          dir: document.documentElement.dir,
          overflow: document.documentElement.scrollWidth - innerWidth,
          h1: document.querySelector("h1")?.textContent?.trim(),
          products: [...document.querySelectorAll("#services h3")].map((node) => node.textContent.trim()),
        }));
        equal(localized.lang, language, "language switch");
        equal(localized.dir, language === "ar" ? "rtl" : "ltr", "text direction");
        ok(localized.overflow <= 0, "localized horizontal overflow");
        equal(localized.products.length, 4, "localized products remain visible");
        console.log(JSON.stringify({ language, ...localized }));
        if (language === "ar") {
          const rtlScreenshot = join(tmpdir(), "sky-w6-after-services-ar-390.png");
          await page.$eval("#services", (node) => node.scrollIntoView({ block: "start" }));
          await new Promise((resolve) => setTimeout(resolve, 650));
          await (await page.$("#services")).screenshot({ path: rtlScreenshot });
          console.log(`SCREENSHOT ${rtlScreenshot}`);
        }
      }
    }
    await page.close();
  }

  const destinations = [
    ["Airport Transfers", "/airport"],
    ["Private Driver", "/private-driver-sri-lanka"],
    ["Chauffeur Guide", "/chauffeur-guide-sri-lanka"],
    ["Tours & Itineraries", "/tours"],
  ];
  for (const [label, route] of destinations) {
    const page = await browser.newPage();
    await page.goto(baseUrl, { waitUntil: "networkidle2" });
    await page.evaluate(() => localStorage.setItem("sky-language", "en"));
    await page.reload({ waitUntil: "networkidle2" });
    await page.evaluate((name) => {
      const card = [...document.querySelectorAll("#services .home-service-card")].find((node) => node.querySelector("h3")?.textContent === name);
      card.querySelector("a.service-detail-button").click();
    }, label);
    await page.waitForFunction((path) => location.pathname === path, {}, route);
    await page.waitForFunction(() => document.querySelector("h1")?.textContent?.trim() !== "SKY Taxi Service& Tours Sri Lanka");
    const destination = await page.evaluate(() => ({
      path: location.pathname,
      h1: document.querySelector("h1")?.textContent?.trim(),
      h1Count: document.querySelectorAll("h1").length,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      title: document.title,
    }));
    equal(destination.path, route, `${label} destination`);
    ok(destination.h1, `${label} destination H1`);
    equal(destination.h1Count, 1, `${label} single H1`);
    equal(destination.canonical, `https://www.skytaxisrilanka.com${route}`, `${label} canonical`);
    console.log(JSON.stringify({ label, ...destination }));
    await page.close();
  }
  console.log(`W6 homepage QA: ${checks} checks passed`);
} finally {
  await browser.close();
}
