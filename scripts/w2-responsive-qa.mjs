import puppeteer from "puppeteer";
import { join } from "node:path";
import { tmpdir } from "node:os";

const base = "http://127.0.0.1:4173";
const routes = ["/", "/airport", "/airport-to-galle", "/airport-to-arugam-bay", "/one-day-tours", "/round-tours", "/private-driver-sri-lanka", "/ella-to-kandy"];
const widths = [390, 768, 1280];
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
let failures = 0;
try {
  for (const width of widths) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 840, deviceScaleFactor: 1 });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const route of routes) {
      await page.goto(base + route, { waitUntil: "networkidle2" });
      const result = await page.evaluate(() => ({
        title: document.title,
        h1: document.querySelector("h1")?.textContent?.trim(),
        overflow: document.documentElement.scrollWidth - innerWidth,
        links: [...document.querySelectorAll('a[href^="https://wa.me/"]')].map((a) => ({ label: a.getAttribute("aria-label") || a.textContent.trim(), href: a.href })),
      }));
      const invalid = result.links.filter(({ href }) => {
        const url = new URL(href);
        return url.pathname !== "/94779291073" || (url.searchParams.has("text") && /undefined|null|\[object Object\]/.test(url.searchParams.get("text")));
      });
      if (!result.h1 || result.overflow > 1 || errors.length || invalid.length) failures++;
      console.log(JSON.stringify({ width, route, h1: result.h1, overflow: result.overflow, errors, invalid: invalid.length, whatsappLinks: result.links.length, quoteSample: result.links.find(({ href }) => /private airport transfer|private driver around|this Sri Lanka tour|private transfer\./.test(new URL(href).searchParams.get("text") || "")) }));
      if (width === 390 && ["/", "/airport", "/airport-to-galle", "/airport-to-arugam-bay", "/one-day-tours", "/private-driver-sri-lanka"].includes(route)) {
        const path = join(tmpdir(), `sky-w2-${route === "/" ? "home" : route.slice(1)}-390.png`);
        await page.screenshot({ path });
        console.log(`SCREENSHOT ${path}`);
      }
      if (width !== 390 && route === "/airport-to-galle") {
        const path = join(tmpdir(), `sky-w2-airport-to-galle-${width}.png`);
        await page.screenshot({ path });
        console.log(`SCREENSHOT ${path}`);
      }
    }
    await page.close();
  }
  const rtl = await browser.newPage();
  await rtl.setViewport({ width: 390, height: 840 });
  await rtl.goto(base + "/airport", { waitUntil: "networkidle2" });
  await rtl.evaluate(() => localStorage.setItem("sky-language", "ar"));
  await rtl.reload({ waitUntil: "networkidle2" });
  const arabic = await rtl.evaluate(() => ({
    dir: document.documentElement.dir,
    overflow: document.documentElement.scrollWidth - innerWidth,
    h1: document.querySelector("h1")?.textContent?.trim(),
    airportMessage: new URL(document.querySelector('.airport-hero__actions a[href^="https://wa.me/"]')?.href).searchParams.get("text"),
  }));
  if (arabic.dir !== "rtl" || arabic.overflow > 1 || !arabic.airportMessage || arabic.airportMessage.startsWith("Hi SKY")) failures++;
  console.log(JSON.stringify({ width: 390, route: "/airport", language: "ar", ...arabic }));
  await rtl.close();
} finally {
  await browser.close();
}
if (failures) process.exitCode = 1;
