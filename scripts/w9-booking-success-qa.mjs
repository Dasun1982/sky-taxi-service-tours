import assert from "node:assert/strict";
import puppeteer from "puppeteer";

// Run only against a temporary build configured with a local, intercepted
// Supabase URL. No real booking, customer data, or Google request is sent.
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
let checks = 0;
const same = (actual, expected, label) => { assert.equal(actual, expected, label); checks++; };
const ok = (value, label) => { assert.ok(value, label); checks++; };

async function runCase(succeed) {
  const page = await browser.newPage();
  const external = [];
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    const url = request.url();
    if (/googletagmanager|google-analytics|googleadservices|doubleclick/.test(url)) external.push(url);
    if (!url.startsWith("http://127.0.0.1:9999/")) return request.continue();
    if (request.method() === "OPTIONS") return request.respond({ status: 204, headers: {
      "access-control-allow-origin": "*", "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "*",
    } });
    return request.respond({
      status: succeed ? 201 : 500,
      contentType: "application/json",
      headers: { "access-control-allow-origin": "*" },
      body: succeed ? "" : '{"message":"mock failure"}',
    });
  });
  await page.evaluateOnNewDocument(() => {
    window.__skyEvents = [];
    window.__SKY_ANALYTICS_CAPTURE__ = (event) => window.__skyEvents.push(event);
  });
  await page.goto("http://127.0.0.1:4173/booking", { waitUntil: "networkidle2" });
  await page.evaluate(() => { window.open = (href) => { window.__opened = href; return null; }; });
  for (const [name, value] of [["name", "Private Tester"], ["phone", "+94770000000"], ["pickup", "Secret Pickup"], ["drop", "Secret Drop"]]) {
    await page.type(`[name="${name}"]`, value);
  }
  await page.click(".booking-form-panel button[type='submit']");
  await page.waitForFunction(() => window.__skyEvents.some((event) => event.name === "booking_request_success" || event.name === "booking_request_error"));
  const result = await page.evaluate(() => ({ events: window.__skyEvents, opened: window.__opened }));
  same(result.events.filter((event) => event.name === "whatsapp_handoff").length, 1, "Booking handoff once");
  same(result.events.filter((event) => event.name === "booking_request_success").length, succeed ? 1 : 0, "authoritative success only");
  same(result.events.filter((event) => event.name === "booking_request_error").length, succeed ? 0 : 1, "failure only on failed insert");
  ok(result.opened.startsWith("https://wa.me/94779291073"), "WhatsApp fallback unaffected");
  ok(!/Private Tester|Secret Pickup|Secret Drop|94770000000|bookingId/.test(JSON.stringify(result.events)), "no private payload");
  same(external.length, 0, "no Google requests");
  same(errors.length, 0, "no runtime errors");
  await page.close();
}

try {
  await runCase(true);
  await runCase(false);
  console.log(`W9 intercepted Booking QA: ${checks} checks passed`);
} finally {
  await browser.close();
}
