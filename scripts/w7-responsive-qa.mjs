import assert from "node:assert/strict";
import { join } from "node:path";
import { tmpdir } from "node:os";
import puppeteer from "puppeteer";

const base = "http://127.0.0.1:4173";
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
let checks = 0;
const same = (actual, expected, label) => { assert.equal(actual, expected, label); checks += 1; };
const truth = (actual, label) => { assert.ok(actual, label); checks += 1; };

try {
  for (const width of [390, 768, 1280]) {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewport({ width, height: 840 });
    await page.goto(`${base}/custom-journey`, { waitUntil: "networkidle2" });
    await page.evaluate(() => localStorage.setItem("sky-language", "en"));
    await page.reload({ waitUntil: "networkidle2" });
    const initial = await page.evaluate(() => ({
      path: location.pathname,
      title: document.title,
      h1: document.querySelector("h1")?.textContent?.trim(),
      h1Count: document.querySelectorAll("h1").length,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      robots: document.querySelector('meta[name="robots"]')?.content,
      schemaTypes: [...document.querySelectorAll('script[type="application/ld+json"]')].map((node) => JSON.parse(node.textContent)["@type"]),
      overflow: document.documentElement.scrollWidth - innerWidth,
      forms: document.querySelectorAll(".custom-journey-page form").length,
      fields: [...document.querySelectorAll(".custom-journey-form [name]")].map((node) => node.name),
      service: document.querySelector('[name="serviceChoice"]')?.value,
      vehicle: document.querySelector('[name="vehicle"]')?.value,
      airport: document.querySelector('[name="airportPickup"]')?.value,
      dateType: document.querySelector('[name="startDate"]')?.type,
      textarea: document.querySelector('[name="route"]')?.tagName,
      preview: document.querySelector(".custom-journey-preview")?.textContent,
    }));
    same(initial.path, "/custom-journey", "direct W7 route");
    truth(initial.title.includes("Custom Sri Lanka Journey Request"), "W7 title");
    truth(initial.h1.includes("Tell SKY about your Sri Lanka journey"), "W7 H1");
    same(initial.h1Count, 1, "single W7 H1");
    same(initial.canonical, "https://www.skytaxisrilanka.com/custom-journey", "self-canonical");
    same(initial.robots, "index, follow", "W7 robots");
    same(initial.schemaTypes.join("|"), "LocalBusiness|WebPage|BreadcrumbList", "truthful W7 schema");
    truth(initial.overflow <= 0, "no W7 horizontal overflow");
    same(initial.forms, 1, "one journey form");
    same(initial.fields.length, 11, "eleven optional journey controls");
    same(initial.service, "Help Me Choose", "uncertain service default");
    same(initial.vehicle, "", "no vehicle selection");
    same(initial.airport, "", "uncertain airport default");
    same(initial.dateType, "date", "native date input");
    same(initial.textarea, "TEXTAREA", "simple route textarea");
    same(initial.preview, undefined, "no fabricated empty preview");
    same(errors.length, 0, "no W7 runtime errors");
    const heroScreenshot = join(tmpdir(), `sky-w7-hero-${width}.png`);
    await (await page.$(".page-hero")).screenshot({ path: heroScreenshot });
    await page.$eval(".custom-journey-form", (node) => node.scrollIntoView({ block: "start" }));
    await new Promise((resolve) => setTimeout(resolve, 600));
    const formScreenshot = join(tmpdir(), `sky-w7-form-${width}.png`);
    await (await page.$(".custom-journey-form")).screenshot({ path: formScreenshot });

    await page.evaluate(() => { window.open = (href) => { window.__w7Opened = href; return null; }; });
    await page.click(".custom-journey-send");
    truth(await page.$eval("[role='alert']", (node) => node.textContent.includes("Add at least one detail")), "empty request error");
    same(await page.evaluate(() => window.__w7Opened), undefined, "no handoff on empty request");
    await page.type('[name="route"]', "Ella and South Coast");
    const preview = await page.$eval(".custom-journey-preview", (node) => node.textContent);
    truth(preview.includes("Route: Ella and South Coast"), "minimal route preview");
    truth(preview.includes("Dates: ___") && preview.includes("Travelers: ___"), "unknown values remain editable");
    await page.click(".custom-journey-send");
    const handoff = await page.evaluate(() => ({ opened: window.__w7Opened, fallback: document.querySelector(".custom-journey-fallback a")?.href }));
    const href = new URL(handoff.opened);
    same(href.origin + href.pathname, "https://wa.me/94779291073", "W2 WhatsApp number");
    same(new URL(handoff.fallback).searchParams.get("text"), href.searchParams.get("text"), "fallback preserves request");
    truth(href.searchParams.get("text").includes("Service preference: Help Me Choose"), "uncertain service in message");
    truth(!href.searchParams.get("text").includes("Vehicle preference"), "no invented vehicle");
    await page.focus('[name="route"]');
    same(await page.evaluate(() => document.activeElement?.name), "route", "route keyboard focus");
    truth(await page.$eval('[name="route"]', (node) => node.labels.length >= 1), "route has a native label");
    await page.select('[name="serviceChoice"]', "Chauffeur Guide");
    await page.select('[name="vehicle"]', "Mini Van");
    await page.select('[name="airportPickup"]', "Yes");
    const selectedPreview = await page.$eval(".custom-journey-preview", (node) => node.textContent);
    truth(selectedPreview.includes("Service preference: Chauffeur Guide"), "selected service visible in review");
    truth(selectedPreview.includes("Vehicle preference: Mini Van"), "selected vehicle visible in review");
    truth(selectedPreview.includes("Airport pickup needed: Yes"), "airport need visible in review");
    await page.type('[name="duration"]', "0");
    await page.evaluate(() => { window.__w7Opened = undefined; });
    await page.click(".custom-journey-send");
    truth(await page.$eval("#journey-duration-error", (node) => node.textContent.includes("above zero")), "invalid duration error linked to field");
    same(await page.evaluate(() => window.__w7Opened), undefined, "invalid duration blocks handoff");
    same(await page.$eval('[name="duration"]', (node) => node.getAttribute("aria-invalid")), "true", "invalid field announced");
    await page.click('[name="duration"]');
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.up("Control");
    await page.keyboard.press("Backspace");
    await page.evaluate(() => { window.open = () => { throw new Error("popup blocked"); }; });
    await page.click(".custom-journey-send");
    truth(Boolean(await page.$(".custom-journey-fallback a")), "prepared link remains if popup fails");
    same(errors.length, 0, "no interaction errors");
    console.log(JSON.stringify({ width, ...initial, heroScreenshot, formScreenshot, handoffText: href.searchParams.get("text"), errors }));

    if (width === 390) {
      await page.evaluate(() => localStorage.setItem("sky-language", "ar"));
      await page.reload({ waitUntil: "networkidle2" });
      const rtl = await page.evaluate(() => ({
        lang: document.documentElement.lang,
        dir: document.documentElement.dir,
        overflow: document.documentElement.scrollWidth - innerWidth,
        fields: document.querySelectorAll(".custom-journey-form [name]").length,
        action: document.querySelector(".custom-journey-send")?.textContent.trim(),
      }));
      same(rtl.lang, "ar", "Arabic language");
      same(rtl.dir, "rtl", "RTL direction");
      truth(rtl.overflow <= 0, "RTL no overflow");
      same(rtl.fields, 11, "RTL fields usable");
      const rtlScreenshot = join(tmpdir(), "sky-w7-form-ar-390.png");
      await page.$eval(".custom-journey-form", (node) => node.scrollIntoView({ block: "start" }));
      await new Promise((resolve) => setTimeout(resolve, 600));
      await (await page.$(".custom-journey-form")).screenshot({ path: rtlScreenshot });
      console.log(JSON.stringify({ rtl, screenshot: rtlScreenshot }));
    }
    await page.close();
  }

  const routes = ["/", "/booking", "/airport", "/private-driver-sri-lanka", "/chauffeur-guide-sri-lanka", "/tours", "/ai-trip-planner", "/5-day-sri-lanka-tour"];
  for (const route of routes) {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewport({ width: 390, height: 840 });
    await page.goto(`${base}${route}`, { waitUntil: "networkidle2" });
    await page.evaluate(() => localStorage.setItem("sky-language", "en"));
    await page.reload({ waitUntil: "networkidle2" });
    const data = await page.evaluate(() => ({
      path: location.pathname,
      h1Count: document.querySelectorAll("h1").length,
      overflow: document.documentElement.scrollWidth - innerWidth,
      journeyLinks: document.querySelectorAll('a[href^="/custom-journey"]').length,
      bookingForm: document.querySelectorAll(".booking-form-panel").length,
      aiUrl: document.querySelector('.ai-trip-planner-page a[href^="https://ai."]')?.href,
    }));
    same(data.path, route, `${route} path`);
    same(data.h1Count, 1, `${route} H1`);
    truth(data.overflow <= 0, `${route} no overflow`);
    same(errors.length, 0, `${route} no runtime errors`);
    if (["/", "/tours", "/ai-trip-planner", "/5-day-sri-lanka-tour"].includes(route)) truth(data.journeyLinks >= 1, `${route} W7 entry`);
    if (route === "/booking") same(data.bookingForm, 1, "existing booking form preserved");
    if (route === "/ai-trip-planner") truth(data.aiUrl?.includes("ai.skytaxisrilanka.com"), "AI destination preserved");
    console.log(JSON.stringify({ route, ...data, errors }));
    await page.close();
  }

  const page = await browser.newPage();
  await page.goto(`${base}/custom-journey?itinerary=5-day-sri-lanka-tour`, { waitUntil: "networkidle2" });
  truth(await page.$eval('[name="itinerary"]', (node) => node.value.includes("5-Day Trincomalee")), "known tour context prefilled");
  await page.reload({ waitUntil: "networkidle2" });
  truth(await page.$eval('[name="itinerary"]', (node) => node.value.includes("5-Day Trincomalee")), "known context survives direct refresh from URL");
  await page.close();
  console.log(`W7 responsive QA: ${checks} checks passed`);
} finally {
  await browser.close();
}
