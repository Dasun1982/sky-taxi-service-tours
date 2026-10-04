import puppeteer from "puppeteer";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { getPrivateDriverOffer } from "../src/data/privateDriverOffer.js";

const base = "http://127.0.0.1:4173";
const routes = ["/private-driver-sri-lanka", "/sri-lanka-tour-driver", "/airport-to-unawatuna", "/taxi"];
const widths = [390, 768, 1280];
const offer = getPrivateDriverOffer();
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
let failures = 0;

function check(condition, description) {
  if (!condition) {
    failures++;
    console.error(`FAIL ${description}`);
  }
}

try {
  for (const width of widths) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 840, deviceScaleFactor: 1 });
    await page.goto(base + "/private-driver-sri-lanka", { waitUntil: "networkidle2" });
    await page.evaluate(() => localStorage.setItem("sky-language", "en"));
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));

    for (const route of routes) {
      await page.goto(base + route, { waitUntil: "networkidle2" });
      const result = await page.evaluate(() => ({
        title: document.title,
        h1: document.querySelector("h1")?.textContent?.trim(),
        h1Count: document.querySelectorAll("h1").length,
        description: document.querySelector('meta[name="description"]')?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        jsonLdValid: [...document.querySelectorAll('script[type="application/ld+json"]')].every((node) => { try { JSON.parse(node.textContent); return true; } catch { return false; } }),
        jsonLdCount: document.querySelectorAll('script[type="application/ld+json"]').length,
        overflow: document.documentElement.scrollWidth - innerWidth,
        footer: !!document.querySelector("footer"),
        bottomControl: !!document.querySelector(".bottom-action-bar"),
      }));
      check(result.h1Count === 1 && !!result.h1, `${route} ${width}: one H1`);
      check(!!result.description && !!result.canonical && new URL(result.canonical).pathname === route, `${route} ${width}: description and canonical`);
      check(result.jsonLdCount > 0 && result.jsonLdValid, `${route} ${width}: valid JSON-LD`);
      check(result.overflow <= 1 && result.footer && result.bottomControl, `${route} ${width}: layout and shell`);
      check(!errors.length, `${route} ${width}: no runtime errors`);
      console.log(JSON.stringify({ width, route, ...result, errors }));

      if (route === "/private-driver-sri-lanka") {
        const commercial = await page.evaluate(() => ({
          heroPrice: document.querySelector(".private-driver-hero-price")?.textContent,
          prices: [...document.querySelectorAll(".private-driver-vehicle-price")].map((node) => node.textContent),
          classes: [...document.querySelectorAll(".private-driver-vehicle-card h3")].map((node) => node.textContent),
          included: document.querySelector(".private-driver-inclusions")?.textContent,
          journeyStops: document.querySelectorAll(".private-driver-journey-stops li").length,
          processSteps: document.querySelectorAll(".private-driver-process-grid li").length,
          quoteHrefs: [...document.querySelectorAll('.private-driver-page a[href^="https://wa.me/"]')].map((node) => node.href),
          vehicleAnchor: document.querySelector('.premium-hero-actions a[href="#private-driver-vehicles"]') !== null,
        }));
        check(commercial.heroPrice?.includes(`From LKR ${offer.startingPrice.toLocaleString("en-US")}/day`) && commercial.heroPrice.includes(`${offer.includedKmPerDay} km/day`), `${route} ${width}: W1 hero price and distance`);
        check(JSON.stringify(commercial.classes) === JSON.stringify(["Sedan", "Mini Van", "KDH Van"]), `${route} ${width}: distinct class names`);
        check(JSON.stringify(commercial.prices) === JSON.stringify(offer.vehicleOptions.map((vehicle) => `LKR ${vehicle.dailyPrice.toLocaleString("en-US")}/day`)), `${route} ${width}: W1 class prices`);
        check(offer.inclusions.every((item) => commercial.included.toLowerCase().includes(item)), `${route} ${width}: founder inclusions`);
        check(commercial.journeyStops === 6 && commercial.processSteps === 5 && commercial.vehicleAnchor, `${route} ${width}: journey, process, and hero action`);
        check(commercial.quoteHrefs.length >= 3 && commercial.quoteHrefs.every((href) => {
          const message = new URL(href).searchParams.get("text");
          return message.includes("Number of days: ___") && message.includes("Destinations: ___") && !message.includes("Vehicle preference:");
        }), `${route} ${width}: W2 default prompts and no false vehicle choice`);

        if (width === 390) {
          const hero = join(tmpdir(), "sky-w4-final-private-driver-hero-390.png");
          await page.screenshot({ path: hero });
          console.log(`SCREENSHOT ${hero}`);
          const buttons = await page.$$(".private-driver-vehicle-choice");
          await buttons[1].focus();
          await page.keyboard.press("Space");
          const selected = await page.evaluate(() => ({
            pressed: document.querySelectorAll(".private-driver-vehicle-choice")[1].getAttribute("aria-pressed"),
            links: [...document.querySelectorAll('.private-driver-page a[href^="https://wa.me/"]')].map((node) => new URL(node.href).searchParams.get("text")),
          }));
          check(selected.pressed === "true" && selected.links.every((message) => message.includes("Vehicle preference: Mini Van") && !/assigned|reserved/i.test(message)), `${route}: keyboard choice reaches every W2 CTA as preference`);
          await page.evaluate(() => document.querySelector(".private-driver-vehicles").scrollIntoView({ block: "start" }));
          await new Promise((resolve) => setTimeout(resolve, 300));
          const card = join(tmpdir(), "sky-w4-final-private-driver-vehicles-390.png");
          await (await page.$(".private-driver-vehicles .section__inner")).screenshot({ path: card });
          console.log(`SCREENSHOT ${card}`);
          await buttons[1].click();
          const finalMessage = await page.$eval(".private-driver-vehicle-quote", (node) => new URL(node.href).searchParams.get("text"));
          check(!finalMessage.includes("Vehicle preference:"), `${route}: choice can be cleared`);
        } else {
          const path = join(tmpdir(), `sky-w4-final-private-driver-vehicles-${width}.png`);
          await page.evaluate(() => document.querySelector(".private-driver-vehicles").scrollIntoView({ block: "start" }));
          await new Promise((resolve) => setTimeout(resolve, 300));
          await (await page.$(".private-driver-vehicles .section__inner")).screenshot({ path });
          console.log(`SCREENSHOT ${path}`);
        }
      }

      if (route === "/sri-lanka-tour-driver") {
        const text = await page.$eval(".tour-driver-page", (node) => node.textContent);
        check(text.includes("continuous multi-day journey with one dedicated driver") && text.includes("flexible daily hire"), `${route} ${width}: distinct continuous trip wording`);
      }

      if (route === "/airport-to-unawatuna") {
        const href = await page.$eval(".airport-continue-journey a", (node) => node.href);
        check(new URL(href).pathname === "/private-driver-sri-lanka", `${route} ${width}: W3 cross-sell destination`);
        if (width === 390) {
          await page.goto(href, { waitUntil: "networkidle2" });
          const arrival = await page.$eval(".private-driver-hero-price", (node) => node.textContent);
          check(arrival.includes("LKR 25,000/day"), "W3 cross-sell lands on W4 product and price");
        }
      }
    }

    if (width === 390) {
      await page.goto(base + "/private-driver-sri-lanka", { waitUntil: "networkidle2" });
      await page.evaluate(() => localStorage.setItem("sky-language", "ar"));
      await page.reload({ waitUntil: "networkidle2" });
      const rtl = await page.evaluate(() => ({ dir: document.documentElement.dir, lang: document.documentElement.lang, overflow: document.documentElement.scrollWidth - innerWidth, cards: document.querySelectorAll(".private-driver-vehicle-card").length }));
      check(rtl.dir === "rtl" && rtl.lang === "ar" && rtl.overflow <= 1 && rtl.cards === 3, "Arabic RTL Private Driver structure");
      console.log(JSON.stringify({ route: "/private-driver-sri-lanka", language: "ar", ...rtl }));
    }
    await page.close();
  }
} finally {
  await browser.close();
}

if (failures) process.exitCode = 1;
