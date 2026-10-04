import puppeteer from "puppeteer";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { getChauffeurGuideOffer } from "../src/data/chauffeurGuideOffer.js";

const base = "http://127.0.0.1:4173";
const routes = ["/chauffeur-guide-sri-lanka", "/private-driver-sri-lanka", "/driver-guide-sri-lanka", "/round-tours", "/airport-to-unawatuna"];
const widths = [390, 768, 1280];
const offer = getChauffeurGuideOffer();
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
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewport({ width, height: 840, deviceScaleFactor: 1 });
    await page.goto(base + "/chauffeur-guide-sri-lanka", { waitUntil: "networkidle2" });
    await page.evaluate(() => localStorage.setItem("sky-language", "en"));

    for (const route of routes) {
      errors.length = 0;
      await page.goto(base + route, { waitUntil: "networkidle2" });
      const result = await page.evaluate(() => {
        const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')].map((node) => {
          try { return JSON.parse(node.textContent); } catch { return null; }
        });
        return {
          title: document.title,
          h1: document.querySelector("h1")?.textContent?.trim(),
          h1Count: document.querySelectorAll("h1").length,
          description: document.querySelector('meta[name="description"]')?.content,
          canonical: document.querySelector('link[rel="canonical"]')?.href,
          jsonLdCount: jsonLd.length,
          jsonLdValid: jsonLd.every(Boolean),
          schemaTypes: jsonLd.map((schema) => schema?.["@type"]),
          overflow: document.documentElement.scrollWidth - innerWidth,
          footer: !!document.querySelector("footer"),
          bottomControl: !!document.querySelector(".bottom-action-bar"),
        };
      });
      check(result.h1Count === 1 && !!result.h1, `${route} ${width}: one H1`);
      check(!!result.description && !!result.canonical, `${route} ${width}: metadata`);
      check(result.jsonLdCount > 0 && result.jsonLdValid, `${route} ${width}: JSON-LD`);
      check(result.overflow <= 1 && result.footer && result.bottomControl, `${route} ${width}: layout and shell`);
      check(!errors.length, `${route} ${width}: no runtime errors`);
      console.log(JSON.stringify({ width, route, ...result, errors }));

      if (route === "/chauffeur-guide-sri-lanka") {
        const commercial = await page.evaluate(() => ({
          heroPrice: document.querySelector(".private-driver-hero-price")?.textContent,
          prices: [...document.querySelectorAll(".private-driver-vehicle-price")].map((node) => node.textContent),
          classes: [...document.querySelectorAll(".private-driver-vehicle-card h3")].map((node) => node.textContent),
          included: document.querySelector(".private-driver-inclusions")?.textContent,
          customization: document.querySelector(".chauffeur-guide-itineraries")?.textContent,
          journeyStops: document.querySelectorAll(".private-driver-journey-stops li").length,
          processSteps: document.querySelectorAll(".private-driver-process-grid li").length,
          quoteHrefs: [...document.querySelectorAll('.chauffeur-guide-page a[href^="https://wa.me/"]')].map((node) => node.href),
        }));
        check(new URL(result.canonical).pathname === route, `${route} ${width}: self-canonical`);
        check(result.schemaTypes.includes("Service"), `${route} ${width}: truthful product schema`);
        check(commercial.heroPrice?.includes(`From $${offer.startingPrice}/day`) && commercial.heroPrice.includes(`${offer.normallyMinDays}+ day`) && commercial.heroPrice.includes(`${offer.includedKmPerDay} km/day`), `${route} ${width}: W1 hero truth`);
        check(JSON.stringify(commercial.classes) === JSON.stringify(["Sedan", "Mini Van", "KDH Van"]), `${route} ${width}: vehicle classes`);
        check(JSON.stringify(commercial.prices) === JSON.stringify(offer.vehicleOptions.map((vehicle) => `$${vehicle.dailyPrice}/day`)), `${route} ${width}: W1 vehicle prices`);
        check(offer.inclusions.every((item) => commercial.included.toLowerCase().includes(item)), `${route} ${width}: W1 inclusions`);
        check(commercial.customization.includes("without a separate itinerary-customization fee") && commercial.customization.includes("final travel quote can still change"), `${route} ${width}: customization truth`);
        check(commercial.journeyStops === 8 && commercial.processSteps === 6, `${route} ${width}: journey and process`);
        check(commercial.quoteHrefs.length >= 3 && commercial.quoteHrefs.every((href) => {
          const message = new URL(href).searchParams.get("text");
          return message.includes("Arrival date: ___") && message.includes("Places I'd like to visit: ___") && !message.includes("Vehicle preference:");
        }), `${route} ${width}: W2 default quote`);

        const screenshot = join(tmpdir(), `sky-w5-chauffeur-guide-hero-${width}.png`);
        await page.screenshot({ path: screenshot });
        console.log(`SCREENSHOT ${screenshot}`);
        await page.evaluate(() => document.querySelector(".private-driver-vehicles").scrollIntoView({ block: "start" }));
        const cardsPath = join(tmpdir(), `sky-w5-chauffeur-guide-vehicles-${width}.png`);
        await (await page.$(".private-driver-vehicles .section__inner")).screenshot({ path: cardsPath });
        console.log(`SCREENSHOT ${cardsPath}`);
        if (width === 390 || width === 1280) {
          for (const [section, label] of [[".private-driver-inclusions", "inclusions"], [".chauffeur-guide-itineraries", "itineraries"], [".private-driver-journey", "journey"], [".private-driver-process", "process"]]) {
            const path = join(tmpdir(), `sky-w5-chauffeur-guide-${label}-${width}.png`);
            await (await page.$(`${section} .section__inner`)).screenshot({ path });
            console.log(`SCREENSHOT ${path}`);
          }
        }

        if (width === 390) {
          const buttons = await page.$$(".private-driver-vehicle-choice");
          await buttons[1].focus();
          await page.keyboard.press("Space");
          const selected = await page.evaluate(() => ({
            pressed: document.querySelectorAll(".private-driver-vehicle-choice")[1].getAttribute("aria-pressed"),
            quoteMessages: [...document.querySelectorAll('.chauffeur-guide-page a[href^="https://wa.me/"]')].map((node) => new URL(node.href).searchParams.get("text")),
          }));
          check(selected.pressed === "true" && selected.quoteMessages.every((message) => message.includes("Vehicle preference: Mini Van")), `${route}: keyboard choice reaches all quotes`);
          await buttons[1].click();
          const cleared = await page.$eval(".private-driver-vehicle-quote", (node) => new URL(node.href).searchParams.get("text"));
          check(!cleared.includes("Vehicle preference:"), `${route}: preference clears`);
          await page.reload({ waitUntil: "networkidle2" });
          check((await page.$eval("h1", (node) => node.textContent)).includes("Chauffeur-Guided"), `${route}: refresh works`);
        }
      } else {
        check(new URL(result.canonical).pathname === (route === "/round-tours" ? "/round-tours" : route), `${route} ${width}: canonical preserved`);
      }
      if (route === "/private-driver-sri-lanka") {
        const text = await page.$eval(".private-driver-hero-price", (node) => node.textContent);
        check(text.includes("LKR 25,000/day"), `${route} ${width}: W4 LKR preserved`);
        check(!!(await page.$('a[href="/chauffeur-guide-sri-lanka"]')), `${route} ${width}: W5 internal path`);
        if (width === 390) {
          await page.click('a[href="/chauffeur-guide-sri-lanka"]');
          await page.waitForFunction(() => location.pathname === "/chauffeur-guide-sri-lanka");
          await page.waitForFunction(() => document.querySelector("h1")?.textContent?.includes("Chauffeur-Guided"));
          check((await page.$eval("h1", (node) => node.textContent)).includes("Chauffeur-Guided"), `${route}: internal navigation opens W5`);
        }
      }
      if (route === "/driver-guide-sri-lanka") {
        const text = await page.$eval(".driver-guide-intro", (node) => node.textContent);
        check(text.includes("specialist licensed local guide can be") && text.includes("alongside your driver"), `${route} ${width}: separate-guide semantics`);
      }
      if (route === "/airport-to-unawatuna") {
        const href = await page.$eval(".airport-continue-journey a", (node) => node.href);
        check(new URL(href).pathname === "/private-driver-sri-lanka", `${route} ${width}: W3 continuity`);
      }
    }

    if (width === 390) {
      await page.goto(base + "/chauffeur-guide-sri-lanka", { waitUntil: "networkidle2" });
      await page.evaluate(() => localStorage.setItem("sky-language", "ar"));
      await page.reload({ waitUntil: "networkidle2" });
      const rtl = await page.evaluate(() => ({ dir: document.documentElement.dir, lang: document.documentElement.lang, overflow: document.documentElement.scrollWidth - innerWidth, cards: document.querySelectorAll(".private-driver-vehicle-card").length }));
      check(rtl.dir === "rtl" && rtl.lang === "ar" && rtl.overflow <= 1 && rtl.cards === 3, "Arabic RTL Chauffeur Guide structure");
      console.log(JSON.stringify({ route: "/chauffeur-guide-sri-lanka", language: "ar", ...rtl }));
      const screenshot = join(tmpdir(), "sky-w5-chauffeur-guide-ar-390.png");
      await page.screenshot({ path: screenshot });
      console.log(`SCREENSHOT ${screenshot}`);
    }
    await page.close();
  }
} finally {
  await browser.close();
}

if (failures) process.exitCode = 1;
