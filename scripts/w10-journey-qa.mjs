import assert from "node:assert/strict";
import puppeteer from "puppeteer";

// W10 customer-journey regression (A–H). Runs against `vite preview` on
// 127.0.0.1:4173. WhatsApp is never opened: hrefs are inspected only.
const base = "http://127.0.0.1:4173";
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
let checks = 0;
const ok = (value, label) => { assert.ok(value, label); checks++; };

async function open(path, width = 390) {
  const page = await browser.newPage();
  const external = [];
  const errors = [];
  page.on("request", (request) => { if (/googletagmanager|google-analytics|googleadservices|doubleclick|facebook\.net|hotjar/.test(request.url())) external.push(request.url()); });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.setViewport({ width, height: 900 });
  await page.goto(`${base}${path}`, { waitUntil: "networkidle2" });
  await page.waitForSelector("h1");
  const state = await page.evaluate(() => ({
    text: document.body.innerText.replace(/\s+/g, " "),
    hrefs: [...document.querySelectorAll("main a[href]")].map((a) => a.getAttribute("href")),
    whatsapp: [...document.querySelectorAll("main a[href*='wa.me']")].map((a) => decodeURIComponent(a.href)),
    stars: document.querySelectorAll("[class*=star], [aria-label*=star i]").length,
    schema: [...document.querySelectorAll('script[type="application/ld+json"]')].map((node) => node.textContent).join(" "),
  }));
  await page.close();
  return { ...state, external, errors };
}

const hasLink = (state, target) => state.hrefs.some((href) => href === target || href?.startsWith(`${target}#`) || href?.startsWith(`${target}?`));
const noAuthority = (text, label) => ok(!/booking (is )?confirmed instantly|guaranteed availability|instant confirmation|limited time offer|only \d+ (seats|cars) left/i.test(text), `${label}: no fake urgency or authority`);

try {
  // A. Search → airport route → price + meeting option → WhatsApp quote → Private Driver continuation
  const airportRoute = await open("/airport-to-galle");
  ok(/LKR 14,000/.test(airportRoute.text) && /LKR 16,000/.test(airportRoute.text), "A: Galle Outside Meeting and Arrival Lobby prices shown");
  ok(/Arrival Lobby/.test(airportRoute.text) && /Outside Meeting/.test(airportRoute.text), "A: meeting options distinguished");
  ok(airportRoute.whatsapp.some((href) => href.startsWith("https://wa.me/94779291073")), "A: WhatsApp quote handoff");
  const airportHub = await open("/airport");
  ok(hasLink(airportHub, "/private-driver-sri-lanka"), "A: Private Driver continuation from Airport");
  noAuthority(airportRoute.text, "A");

  // B. Private Driver → LKR 25,000/day basis → inclusions → quote → Chauffeur Guide secondary
  const driver = await open("/private-driver-sri-lanka");
  ok(/LKR 25,000\/day/.test(driver.text) && /LKR 30,000/.test(driver.text) && /LKR 35,000/.test(driver.text), "B: Sedan/Mini Van/KDH daily prices");
  ok(/150 km/.test(driver.text), "B: 150 km/day basis");
  ok(driver.whatsapp.length > 0, "B: WhatsApp quote");
  ok(hasLink(driver, "/chauffeur-guide-sri-lanka"), "B: Chauffeur Guide continuation");
  ok(!/\$69/.test(driver.text.split("Chauffeur Guide")[0]), "B: Private Driver leads with its own LKR basis");

  // C. Private tour → Chauffeur Guide $69/day → itinerary → customise → WhatsApp
  const guide = await open("/chauffeur-guide-sri-lanka");
  ok(/\$69\/day/.test(guide.text) && /\$79/.test(guide.text) && /\$89/.test(guide.text), "C: Chauffeur Guide daily prices");
  ok(/5\+? days? or more|5\+ day/i.test(guide.text), "C: normally 5+ days");
  ok(hasLink(guide, "/custom-journey"), "C: customise via Custom Journey");
  ok(guide.whatsapp.length > 0, "C: WhatsApp quote");
  ok(!/licensed|certified guide|government.approved/i.test(guide.text), "C: no invented guide credentials");

  // D. AI Planner → Custom Journey → human quote
  const planner = await open("/ai-trip-planner");
  ok(planner.hrefs.some((href) => href?.startsWith("https://ai.skytaxisrilanka.com")), "D: AI planner handoff");
  ok(hasLink(planner, "/custom-journey"), "D: Custom Journey from AI planner");
  ok(/not a booking|starting point/i.test(planner.text), "D: AI plan is not a booking");
  const journey = await open("/custom-journey");
  ok(/optional/i.test(journey.text) && /quote/i.test(journey.text), "D: Custom Journey review-to-quote framing");

  // E. Uncertain traveller → Home chooser → Custom Journey
  const home = await open("/");
  for (const target of ["/airport", "/private-driver-sri-lanka", "/chauffeur-guide-sri-lanka", "/tours"]) ok(hasLink(home, target), `E: Home chooser → ${target}`);
  ok(hasLink(home, "/custom-journey"), "E: Home → Custom Journey");

  // F. Returning taxi traveller → simple Booking flow
  const booking = await open("/booking");
  ok(/Trip type/i.test(booking.text) && booking.whatsapp.length > 0, "F: Booking form and WhatsApp path");
  ok(!/Fast reply/.test(booking.text), "F: no unverified reply-speed promise");

  // G. Review-skeptical traveller → honest trust route
  const reviews = await open("/testimonials");
  ok(/not currently publish individual customer reviews/i.test(reviews.text), "G: honest review statement");
  ok(reviews.stars === 0 && !/★/.test(reviews.text), "G: no star ratings");
  ok(!/AggregateRating|"Review"/.test(reviews.schema), "G: no review schema");

  // H. Privacy-conscious traveller → no third-party tracking by default
  for (const [label, state] of Object.entries({ airportRoute, airportHub, driver, guide, planner, journey, home, booking, reviews })) {
    ok(state.external.length === 0, `H: no tracking requests on ${label}`);
    ok(state.errors.length === 0, `no runtime errors on ${label}`);
  }

  console.log(`W10 customer journey QA: ${checks} checks passed`);
} finally {
  await browser.close();
}
