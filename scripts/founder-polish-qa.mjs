import assert from "node:assert/strict";
import puppeteer from "puppeteer";

// Founder polish regression: route rail, FAQ accordion, value-led Home,
// dedicated prices, honest price wording. Runs against `vite preview` on
// 127.0.0.1:4173 (see docs/engineering/SKY_WEBSITE_W10_LAUNCH_READINESS.md).
const base = "http://127.0.0.1:4173";
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
let checks = 0;
const ok = (value, label) => { assert.ok(value, label); checks++; };
const fakeOffers = /\d+\s?% off|\bsale\b|\bwas (LKR|\$)|limited[- ]time|today only|lowest price guaranteed|best price guaranteed|only \d+ (left|seats|cars)/i;

async function open(path, width = 1280, { reducedMotion = false } = {}) {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.setViewport({ width, height: 900 });
  if (reducedMotion) await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.goto(`${base}${path}`, { waitUntil: "networkidle2" });
  await page.waitForSelector("h1");
  return { page, errors };
}

try {
  // Route discovery: many real routes, manual controls, works with reduced motion.
  for (const [width, reducedMotion] of [[1280, false], [1280, true], [390, true]]) {
    const { page, errors } = await open("/", width, { reducedMotion });
    const rail = await page.evaluate(() => {
      const scroller = document.querySelector(".route-rail__scroller");
      const cards = [...scroller.querySelectorAll(".home-seo-route-card h3 a")].map((a) => a.getAttribute("href"));
      const buttons = [...document.querySelectorAll(".route-rail__controls button")].map((b) => ({ label: b.getAttribute("aria-label"), controls: b.getAttribute("aria-controls"), disabled: b.disabled }));
      return { cards, buttons, scrollerId: scroller.id, role: scroller.getAttribute("role"), label: scroller.getAttribute("aria-label"), tabIndex: scroller.tabIndex, animation: getComputedStyle(scroller.querySelector("ul")).animationName, overflow: document.documentElement.scrollWidth - innerWidth };
    });
    ok(rail.cards.length >= 12, `${width}${reducedMotion ? " reduced-motion" : ""}: rail exposes ${rail.cards.length} routes`);
    ok(new Set(rail.cards).size === rail.cards.length, "rail routes are unique");
    ok(rail.role === "region" && rail.label && rail.tabIndex === 0, "rail is a labelled, focusable region");
    ok(rail.buttons.length === 2 && rail.buttons.every((b) => b.label && b.controls === rail.scrollerId), "rail buttons are named and control the rail");
    ok(rail.buttons[0].disabled && !rail.buttons[1].disabled, "rail starts at the beginning");
    ok(rail.animation === "none", "rail never auto-moves");
    ok(rail.overflow <= 0, `${width}: no page overflow`);
    await page.click('.route-rail__controls button[aria-label="More routes"]');
    await new Promise((resolve) => setTimeout(resolve, 900));
    const moved = await page.evaluate(() => ({ left: Math.abs(document.querySelector(".route-rail__scroller").scrollLeft), prevDisabled: document.querySelector('.route-rail__controls button[aria-label="Previous routes"]').disabled }));
    ok(moved.left > 100 && !moved.prevDisabled, "next button moves the rail and enables previous");
    for (const href of rail.cards.slice(0, 17)) {
      const response = await fetch(`${base}${href}/`);
      ok(response.ok, `rail route ${href} resolves`);
    }
    ok(errors.length === 0, "no runtime errors on Home");
    await page.close();
  }

  // Home sells value, not detailed prices.
  for (const width of [390, 1280]) {
    const { page } = await open("/", width);
    const text = await page.evaluate(() => document.querySelector("main").innerText);
    ok(!/LKR\s?\d|\$\d{2}/.test(text), `${width}: Home shows no detailed prices`);
    ok(/today's best available price/i.test(text), "Home offers the honest current-price route");
    ok(!fakeOffers.test(text), "Home has no fake discount or scarcity language");
    await page.close();
  }

  // Dedicated commercial pages keep their prices; FAQ accordion behaves.
  const pricePages = {
    "/private-driver-sri-lanka": [/LKR 25,000\/day/, /LKR 30,000\/day/, /LKR 35,000\/day/],
    "/chauffeur-guide-sri-lanka": [/\$69\/day/, /\$79\/day/, /\$89\/day/],
    "/airport-to-galle": [/LKR 14,000/, /LKR 16,000/],
    "/airport-to-mirissa": [/LKR 16,000/, /LKR 18,000/, /LKR 23,000/],
  };
  for (const [path, prices] of Object.entries(pricePages)) {
    for (const width of [320, 360, 390, 430, 1280]) {
      const { page, errors } = await open(path, width);
      const state = await page.evaluate(() => ({ text: document.querySelector("main").innerText, overflow: document.documentElement.scrollWidth - innerWidth }));
      for (const price of prices) ok(price.test(state.text), `${path} ${width}: ${price}`);
      ok(!fakeOffers.test(state.text), `${path}: no fake discount or scarcity`);
      ok(state.overflow <= 0, `${path} ${width}: no page overflow`);
      ok(errors.length === 0, `${path} ${width}: no runtime errors`);
      await page.close();
    }
  }

  // FAQ accordion: collapsed by default, answers in the DOM, keyboard operable.
  for (const path of ["/private-driver-sri-lanka", "/chauffeur-guide-sri-lanka", "/airport-to-galle", "/ella-taxi-service", "/sri-lanka-honeymoon"]) {
    for (const width of [390, 1280]) {
      const { page } = await open(path, width);
      const faq = await page.evaluate(() => [...document.querySelectorAll(".faq-accordion .faq-item")].map((item) => {
        const button = item.querySelector(".faq-item__button");
        const panel = document.getElementById(button.getAttribute("aria-controls"));
        return { expanded: button.getAttribute("aria-expanded"), heading: button.parentElement.tagName, panelText: panel?.textContent.trim().length || 0, inert: panel?.inert, labelledBy: panel?.getAttribute("aria-labelledby") === button.id };
      }));
      ok(faq.length >= 3, `${path}: accordion present (${faq.length})`);
      ok(faq.every((item) => item.expanded === "false" && item.inert && item.heading === "H3"), `${path}: collapsed by default inside headings`);
      ok(faq.every((item) => item.panelText > 20 && item.labelledBy), `${path}: every answer stays in the DOM and is labelled`);
      const width0 = await page.evaluate(() => document.querySelector(".faq-accordion").getBoundingClientRect().width);
      ok(width0 <= 882, `${path} ${width}: FAQ column is readable (${Math.round(width0)}px)`);
      await page.focus(".faq-accordion .faq-item__button");
      await page.keyboard.press("Enter");
      await new Promise((resolve) => setTimeout(resolve, 300));
      const opened = await page.evaluate(() => { const b = document.querySelector(".faq-accordion .faq-item__button"); const p = document.getElementById(b.getAttribute("aria-controls")); return { expanded: b.getAttribute("aria-expanded"), inert: p.inert, height: p.getBoundingClientRect().height }; });
      ok(opened.expanded === "true" && !opened.inert && opened.height > 20, `${path}: Enter opens the first answer`);
      await page.keyboard.press("Space");
      await new Promise((resolve) => setTimeout(resolve, 300));
      ok(await page.evaluate(() => document.querySelector(".faq-accordion .faq-item__button").getAttribute("aria-expanded") === "false"), `${path}: Space closes it again`);
      await page.close();
    }
  }

  console.log(`Founder polish QA: ${checks} checks passed`);
} finally {
  await browser.close();
}
