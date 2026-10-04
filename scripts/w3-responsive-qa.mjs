import puppeteer from "puppeteer";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { getAirportConversionOffer } from "../src/data/airportConversion.js";

const baseline = process.argv.includes("--baseline");
const base = "http://127.0.0.1:4173";
const routes = ["/airport", "/airport-to-galle", "/airport-to-unawatuna", "/airport-to-weligama", "/airport-to-mirissa"];
const widths = [390, 768, 1280];
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
    await page.goto(base + "/airport", { waitUntil: "networkidle2" });
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
        jsonLdCount: document.querySelectorAll('script[type="application/ld+json"]').length,
        overflow: document.documentElement.scrollWidth - innerWidth,
        offer: !!document.querySelector("[data-airport-offer]"),
        whatsappLinks: [...document.querySelectorAll('a[href^="https://wa.me/"]')].length,
        footer: !!document.querySelector("footer"),
        bottomActionBar: !!document.querySelector(".bottom-action-bar"),
      }));
      check(!!result.h1 && result.h1Count === 1, `${route} ${width}: one H1`);
      check(!!result.description && !!result.canonical && new URL(result.canonical).pathname === route, `${route} ${width}: description and self-canonical`);
      check(result.jsonLdCount > 0, `${route} ${width}: JSON-LD present`);
      check(result.overflow <= 1, `${route} ${width}: no horizontal overflow`);
      check(result.footer && result.bottomActionBar, `${route} ${width}: footer and existing bottom control`);
      check(!errors.length, `${route} ${width}: no page errors`);
      console.log(JSON.stringify({ width, route, ...result, errors }));
      if (width === 390 || (width === 1280 && route === "/airport-to-galle")) {
        const path = join(tmpdir(), `sky-w3-${baseline ? "before" : "after"}-${route.slice(1)}-${width}.png`);
        await page.screenshot({ path });
        console.log(`SCREENSHOT ${path}`);
      }
      if (!baseline && route !== "/airport") {
        const offer = getAirportConversionOffer(route.slice(1));
        const routeState = await page.evaluate(() => {
          const section = document.querySelector("[data-airport-offer]");
          const quote = section.querySelector(".airport-offer-quote a");
          return {
            heroPrice: document.querySelector(".airport-route-hero-price")?.textContent,
            pickupButtons: section.querySelectorAll(".airport-offer-pickup").length,
            vehicleCards: section.querySelectorAll(".airport-offer-vehicle-card").length,
            prices: [...section.querySelectorAll(".airport-transfer-card__prices strong")].map((item) => item.textContent),
            quoteHref: quote.href,
            crossSell: document.querySelector('.airport-continue-journey a[href="/private-driver-sri-lanka"]') !== null,
          };
        });
        check(result.offer, `${route} ${width}: commercial offer present`);
        check(routeState.heroPrice?.includes(`From LKR ${offer.startingPrice.toLocaleString("en-US")}`), `${route} ${width}: starting price`);
        check(routeState.pickupButtons === 2 && routeState.vehicleCards === 3 && routeState.prices.length === 6, `${route} ${width}: 2 pickup, 3 vehicle, 6 price cells`);
        check(routeState.crossSell, `${route} ${width}: cross-sell`);
        const defaultMessage = new URL(routeState.quoteHref).searchParams.get("text");
        check(defaultMessage.includes(`Pickup: ${offer.pickupName}`) && defaultMessage.includes(`Destination: ${offer.destinationName}`), `${route} ${width}: route quote context`);
        check(defaultMessage.includes("Pickup option: ___") && !defaultMessage.includes("Vehicle preference:"), `${route} ${width}: no false default`);
        if (width === 390) {
          const path = join(tmpdir(), `sky-w3-after-offer-${route.slice(1)}-390.png`);
          await (await page.$("[data-airport-offer] .section__inner")).screenshot({ path });
          console.log(`SCREENSHOT ${path}`);
          await page.click(".airport-offer-pickup:nth-child(2)");
          await page.click(".airport-offer-vehicle-card:nth-child(3) .airport-offer-choose");
          const selected = await page.evaluate(() => ({
            pickupPressed: document.querySelector(".airport-offer-pickup:nth-child(2)").getAttribute("aria-pressed"),
            vehiclePressed: document.querySelector(".airport-offer-vehicle-card:nth-child(3) .airport-offer-choose").getAttribute("aria-pressed"),
            href: document.querySelector(".airport-offer-quote a").href,
          }));
          const selectedMessage = new URL(selected.href).searchParams.get("text");
          check(selected.pickupPressed === "true" && selected.vehiclePressed === "true", `${route}: selected state exposed`);
          check(selectedMessage.includes("Pickup option: Outside Meeting") && selectedMessage.includes("Vehicle preference: KDH Van"), `${route}: selections reach W2 quote`);
          await page.evaluate(() => document.querySelector(".airport-offer-quote").scrollIntoView({ block: "center" }));
          await new Promise((resolve) => setTimeout(resolve, 350));
          const quoteVisible = await page.evaluate(() => {
            const quote = document.querySelector(".airport-offer-quote");
            return Number(getComputedStyle(quote).opacity) > 0.9 && quote.getBoundingClientRect().width > 0;
          });
          check(quoteVisible, `${route}: mobile quote CTA visible after scroll`);
          const quotePath = join(tmpdir(), `sky-w3-after-quote-${route.slice(1)}-390.png`);
          await (await page.$(".airport-offer-quote")).screenshot({ path: quotePath });
          console.log(`SCREENSHOT ${quotePath}`);
        }
      }
      if (!baseline && route === "/airport") {
        const hub = await page.evaluate(() => ({
          outbound: [...document.querySelectorAll(".airport-outbound-route")].map((a) => ({ href: new URL(a.href).pathname, text: a.textContent })),
          inboundNote: document.querySelector(".airport-inbound-note")?.textContent,
          reversePrice: document.querySelector(".airport-pricing-section .airport-transfer-card__prices strong")?.textContent,
        }));
        check(hub.outbound.length === 4, `${route} ${width}: four outbound links`);
        for (const offerRoute of ["galle", "unawatuna", "weligama", "mirissa"]) {
          const offer = getAirportConversionOffer(`airport-to-${offerRoute}`);
          check(hub.outbound.some((entry) => entry.href === `/${offer.pageSlug}` && entry.text.includes(`LKR ${offer.startingPrice.toLocaleString("en-US")}`)), `${route} ${width}: ${offerRoute} route discovery`);
        }
        check(hub.inboundNote?.includes("separate") && hub.reversePrice === "$49.99", `${route} ${width}: reverse USD context preserved`);
        if (width === 390) {
          const path = join(tmpdir(), "sky-w3-after-airport-outbound-390.png");
          await (await page.$(".airport-outbound-section .section__inner")).screenshot({ path });
          console.log(`SCREENSHOT ${path}`);
          await page.evaluate(() => document.querySelector(".airport-outbound-route:last-child").scrollIntoView({ block: "center" }));
          const cardReachable = await page.evaluate(() => {
            const card = document.querySelector(".airport-outbound-route:last-child").getBoundingClientRect();
            const bar = document.querySelector(".bottom-action-bar").getBoundingClientRect();
            return card.top >= 0 && card.bottom < bar.top;
          });
          check(cardReachable, "mobile Mirissa hub link reachable above bottom control");
        }
      }
      if (!baseline && [768, 1280].includes(width) && route === "/airport-to-galle") {
        const path = join(tmpdir(), `sky-w3-after-offer-airport-to-galle-${width}.png`);
        await (await page.$(".airport-offer-vehicle-grid")).screenshot({ path });
        console.log(`SCREENSHOT ${path}`);
      }
    }
    if (!baseline && width === 390) {
      await page.goto(base + "/airport", { waitUntil: "networkidle2" });
      await page.evaluate(() => localStorage.setItem("sky-language", "ar"));
      await page.reload({ waitUntil: "networkidle2" });
      const arabic = await page.evaluate(() => ({ dir: document.documentElement.dir, lang: document.documentElement.lang, overflow: document.documentElement.scrollWidth - innerWidth, outbound: document.querySelectorAll(".airport-outbound-route").length }));
      check(arabic.dir === "rtl" && arabic.lang === "ar" && arabic.overflow <= 1 && arabic.outbound === 4, "Arabic airport hub RTL and outbound section");
      console.log(JSON.stringify({ route: "/airport", language: "ar", ...arabic }));
      await page.goto(base + "/airport-to-galle", { waitUntil: "networkidle2" });
      const arabicRoute = await page.evaluate(() => ({ dir: document.documentElement.dir, lang: document.documentElement.lang, overflow: document.documentElement.scrollWidth - innerWidth, offer: !!document.querySelector("[data-airport-offer]") }));
      check(arabicRoute.dir === "rtl" && arabicRoute.lang === "ar" && arabicRoute.overflow <= 1 && arabicRoute.offer, "Arabic priority route RTL and offer");
      console.log(JSON.stringify({ route: "/airport-to-galle", language: "ar", ...arabicRoute }));
    }
    await page.close();
  }
} finally {
  await browser.close();
}
if (failures) process.exitCode = 1;
