// Single W9 registry. Every value sent outside the UI must pass an enum below.
export const eventRegistry = Object.freeze({
  service_interest: { tier: 0, properties: ["service", "source_surface", "locale"] },
  quote_start: { tier: 1, properties: ["service", "source_surface", "locale"] },
  custom_journey_start: { tier: 1, properties: ["service", "source_surface", "locale"] },
  ai_planner_open: { tier: 0, properties: ["source_surface", "locale"] },
  cross_sell_follow: { tier: 0, properties: ["source_product", "destination_product", "locale"] },
  whatsapp_handoff: { tier: 2, properties: ["service", "source_surface", "locale"] },
  contact_action: { tier: 2, properties: ["channel", "source_surface", "locale"] },
  booking_request_success: { tier: 3, properties: ["service", "source_surface", "locale"] },
  booking_request_error: { tier: 1, properties: ["service", "source_surface", "locale"] },
  acquisition_action: { tier: 0, properties: ["cta", "source_surface", "locale"] },
});

const allowed = Object.freeze({
  service: new Set(["general", "airport", "private_driver", "chauffeur_guide", "driver_guide", "tour", "taxi", "custom_journey", "rental"]),
  source_surface: new Set(["home", "airport", "airport_route", "private_driver", "chauffeur_guide", "driver_guide", "custom_journey", "tours", "round_tours", "one_day_tours", "booking", "contact", "ai_planner", "editorial", "floating_whatsapp", "bottom_action", "acquisition", "valuation"]),
  source_product: new Set(["airport", "private_driver", "chauffeur_guide", "round_tours"]),
  destination_product: new Set(["private_driver", "chauffeur_guide", "custom_journey"]),
  channel: new Set(["phone", "email"]),
  locale: new Set(["en", "ru", "hi", "es", "ar", "fr", "de"]),
  cta: new Set(["contact_founder", "view_ai_planner", "download_pdf", "watch_demo", "view_ai_system", "view_acquisition_overview"]),
});

export function normalizeEvent(name, properties = {}) {
  const definition = eventRegistry[name];
  if (!definition || !properties || typeof properties !== "object") return null;
  const safe = {};
  for (const key of definition.properties) {
    if (typeof properties[key] === "string" && allowed[key]?.has(properties[key])) safe[key] = properties[key];
  }
  return { name, properties: safe };
}

export function createAnalytics(adapters = []) {
  return (name, properties) => {
    const event = normalizeEvent(name, properties);
    if (!event) return false;
    for (const adapter of adapters) {
      try { adapter(event); } catch { /* Telemetry never blocks a commercial action. */ }
    }
    return true;
  };
}

const productionSite = () => typeof window !== "undefined" && window.location.hostname === "www.skytaxisrilanka.com";

export function initializeGoogleTag() {
  // The pre-W9 tag loaded unconditionally, including previews, and could
  // collect query strings/WhatsApp URLs through enhanced measurement. Keep
  // it dormant until a reviewed production activation explicitly opts in.
  if (!productionSite() || adsEnv.VITE_GA_ENABLED !== "true" || window.gtag) return false;
  try {
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args) => window.dataLayer.push(args);
    window.gtag("js", new Date());
    window.gtag("config", "G-Y0R4ZZVG67", {
      page_location: `${window.location.origin}${window.location.pathname}`,
      page_referrer: "",
    });
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-Y0R4ZZVG67";
    document.head.appendChild(script);
    return true;
  } catch { return false; }
}

function gaAdapter(event) {
  if (!productionSite() || adsEnv.VITE_GA_ENABLED !== "true" || typeof window.gtag !== "function") return;
  window.gtag("event", event.name, {
    ...event.properties,
    page_location: `${window.location.origin}${window.location.pathname}`,
    page_referrer: "",
  });
}

// Uses the existing Google tag only when explicitly activated after W10.
// No Ads script, network call, or conversion mapping exists when disabled.
export function createGoogleAdsAdapter(config = {}, gtag = null) {
  const { enabled, id, whatsappLabel, bookingLabel } = config;
  if (enabled !== true || !/^AW-[0-9]{6,15}$/.test(id || "") ||
      !/^[A-Za-z0-9_-]{5,80}$/.test(whatsappLabel || "") ||
      !/^[A-Za-z0-9_-]{5,80}$/.test(bookingLabel || "") || typeof gtag !== "function") return () => {};
  let configured = false;
  return (event) => {
    if (!productionSite()) return;
    // Booking opens WhatsApp as its fallback and may also save a request.
    // Count that form action once in Ads, at authoritative save success.
    const label = event.name === "whatsapp_handoff" && event.properties?.source_surface !== "booking"
      ? whatsappLabel : event.name === "booking_request_success" ? bookingLabel : null;
    if (!label) return;
    if (!configured) {
      gtag("config", id, {
        send_page_view: false,
        page_location: `${window.location.origin}${window.location.pathname}`,
        page_referrer: "",
      });
      configured = true;
    }
    gtag("event", "conversion", {
      send_to: `${id}/${label}`,
      page_location: `${window.location.origin}${window.location.pathname}`,
      page_referrer: "",
    });
  };
}

const adsEnv = import.meta.env || {};
const adsAdapter = createGoogleAdsAdapter({
  enabled: adsEnv.VITE_GA_ENABLED === "true" && adsEnv.VITE_GOOGLE_ADS_ENABLED === "true",
  id: adsEnv.VITE_GOOGLE_ADS_ID,
  whatsappLabel: adsEnv.VITE_GOOGLE_ADS_WHATSAPP_LABEL,
  bookingLabel: adsEnv.VITE_GOOGLE_ADS_BOOKING_LABEL,
}, (...args) => window.gtag?.(...args));

const send = createAnalytics([
  (event) => {
    // Deterministic local-preview sink; it never transmits externally.
    if (typeof window !== "undefined" && ["localhost", "127.0.0.1"].includes(window.location.hostname)) {
      window.__SKY_ANALYTICS_CAPTURE__?.(event);
    }
  },
  gaAdapter,
  adsAdapter,
]);

export function trackEvent(name, properties = {}) {
  try {
    const locale = typeof document === "undefined" ? "en" : document.documentElement.lang;
    // Narrow compatibility for two useful pre-W9 signals. All other legacy
    // names are intentionally unregistered and cannot reach a provider.
    if (name === "booking_started") {
      const surface = typeof window === "undefined" ? "editorial" : surfaceFromPath(window.location.pathname);
      return send("quote_start", { service: serviceFromSurface(surface), source_surface: surface, locale });
    }
    if (name === "service_selected" && properties.page_source === "home-page") {
      const service = {
        airport: "airport", privateDriver: "private_driver", chauffeurGuide: "chauffeur_guide",
        tours: "tour", taxi: "taxi", "one-day-tours": "tour", "tour-driver": "private_driver",
        "driver-guide": "driver_guide", "travel-help": "general",
      }[properties.service_id];
      return service ? send("service_interest", { service, source_surface: "home", locale }) : false;
    }
    return send(name, { ...properties, locale });
  } catch { return false; }
}

// Owner-facing acquisition pages predate W9. Keep their action counts, but
// never forward destination URLs or caller-written event labels.
const acquisitionCtas = Object.freeze({
  "Contact Founder": "contact_founder", "View AI Planner": "view_ai_planner",
  "Download Acquisition PDF": "download_pdf", "Watch Platform Demo": "watch_demo",
  "View AI System": "view_ai_system", "View Acquisition Overview": "view_acquisition_overview",
});
export function trackAcquisitionCta({ ctaName, pageSource } = {}) {
  const cta = acquisitionCtas[ctaName];
  if (!cta) return false;
  return trackEvent("acquisition_action", { cta, source_surface: pageSource === "valuation" ? "valuation" : "acquisition" });
}

export function surfaceFromPath(pathname) {
  if (pathname === "/") return "home";
  if (pathname === "/airport") return "airport";
  if (pathname.startsWith("/airport-to-") || pathname.includes("airport-taxi") || pathname === "/airport-transfer-sri-lanka") return "airport_route";
  if (["/private-driver-sri-lanka", "/sri-lanka-tour-driver"].includes(pathname)) return "private_driver";
  if (pathname === "/chauffeur-guide-sri-lanka") return "chauffeur_guide";
  if (pathname === "/driver-guide-sri-lanka") return "driver_guide";
  if (pathname === "/custom-journey") return "custom_journey";
  if (pathname === "/tours") return "tours";
  if (pathname === "/round-tours") return "round_tours";
  if (pathname === "/one-day-tours") return "one_day_tours";
  if (pathname === "/booking") return "booking";
  if (pathname === "/contact") return "contact";
  if (pathname === "/ai-trip-planner") return "ai_planner";
  if (pathname === "/valuation") return "valuation";
  if (["/acquire", "/acquisition-overview"].includes(pathname)) return "acquisition";
  return "editorial";
}

export function serviceFromSurface(surface) {
  if (["airport", "airport_route"].includes(surface)) return "airport";
  if (["private_driver", "chauffeur_guide", "driver_guide", "custom_journey"].includes(surface)) return surface;
  if (["tours", "round_tours", "one_day_tours"].includes(surface)) return "tour";
  return "general";
}

export function bookingResultEvent(result) {
  // Deliberately ignores bookingId, reason, form, and backend error text.
  return result?.saved === true
    ? { name: "booking_request_success", properties: { service: "general", source_surface: "booking" } }
    : { name: "booking_request_error", properties: { service: "general", source_surface: "booking" } };
}

const crossSell = Object.freeze({
  "/airport|/private-driver-sri-lanka": ["airport", "private_driver"],
  "/private-driver-sri-lanka|/chauffeur-guide-sri-lanka": ["private_driver", "chauffeur_guide"],
  "/chauffeur-guide-sri-lanka|/custom-journey": ["chauffeur_guide", "custom_journey"],
  "/round-tours|/custom-journey": ["round_tours", "custom_journey"],
});

export function classifyLink(href, pathname, className = "") {
  if (typeof href !== "string") return null;
  const routeSurface = surfaceFromPath(pathname);
  const source = className.includes("floating-whatsapp") ? "floating_whatsapp" :
    className.includes("bottom-action-button--whatsapp") ? "bottom_action" : routeSurface;
  let url;
  try { url = new URL(href, "https://www.skytaxisrilanka.com"); } catch { return null; }
  // The site builds these links with W2. Never inspect or forward ?text=.
  if (url.origin === "https://wa.me" && /^\/[0-9]{9,15}$/.test(url.pathname)) {
    return { name: "whatsapp_handoff", properties: { service: serviceFromSurface(routeSurface), source_surface: source } };
  }
  if (href.startsWith("tel:") && !["acquisition", "valuation"].includes(source)) return { name: "contact_action", properties: { channel: "phone", source_surface: source } };
  if (href.startsWith("mailto:") && !["acquisition", "valuation"].includes(source)) return { name: "contact_action", properties: { channel: "email", source_surface: source } };
  if (url.origin === "https://ai.skytaxisrilanka.com" && url.pathname === "/") {
    return { name: "ai_planner_open", properties: { source_surface: source } };
  }
  if (url.origin === "https://www.skytaxisrilanka.com") {
    const pair = crossSell[`${pathname}|${url.pathname}`] ||
      (routeSurface === "airport_route" && url.pathname === "/private-driver-sri-lanka" ? ["airport", "private_driver"] : null);
    if (pair) return { name: "cross_sell_follow", properties: { source_product: pair[0], destination_product: pair[1] } };
  }
  return null;
}

export function installAnalyticsInteractions(root = document) {
  const onClick = (event) => {
    try {
      const anchor = event.target?.closest?.("a[href]");
      if (!anchor || !root.contains(anchor)) return;
      const action = classifyLink(anchor.getAttribute("href"), window.location.pathname, anchor.className);
      if (action) trackEvent(action.name, action.properties);
    } catch { /* Never alter native anchor navigation. */ }
  };
  root.addEventListener("click", onClick, { capture: true });
  return () => root.removeEventListener("click", onClick, { capture: true });
}
