/**
 * Airport transfer route registry for SKY Taxi Service & Tours.
 *
 * MILESTONE 2 — CORE TOURISM DATA ARCHITECTURE
 *
 * Deliberately narrow scope: only the 8 airport-transfer routes that already
 * have a dedicated AirportToXTaxi.jsx SEO page are included. This is NOT a
 * general route engine — city-to-city routes mentioned in page copy (e.g.
 * "Unawatuna to Galle") are real content but have no structured pricing or
 * dedicated page backing them yet, so they stay as page-local SEO text
 * rather than being forced into this registry.
 *
 * No distance or duration field exists here because no source in the
 * project states a verified distance/duration for these routes — the
 * per-page prose ("around 2 to 2.5 hours") is approximate marketing
 * copy, not a verified figure, so it is intentionally not duplicated here.
 *
 * pricingRouteKey only exists for the 2 destinations that already have a
 * structured per-vehicle price in src/data/pricing.js (airportTransferPricing
 * routes.unawatuna / routes.weligama, from Milestone 1A). The other 6 routes
 * only offer a WhatsApp quote on their page — leaving pricingRouteKey
 * undefined here rather than inventing a number.
 */

export const routes = [
  {
    id: "airport-ella",
    origin: "colombo-airport",
    destination: "ella",
    serviceTypes: ["airport-transfer"],
    seoSlug: "/airport-to-ella",
  },
  {
    id: "airport-galle",
    origin: "colombo-airport",
    destination: "galle",
    serviceTypes: ["airport-transfer"],
    seoSlug: "/airport-to-galle",
  },
  {
    id: "airport-hiriketiya",
    origin: "colombo-airport",
    destination: "hiriketiya",
    serviceTypes: ["airport-transfer"],
    seoSlug: "/airport-to-hiriketiya",
  },
  {
    id: "airport-kandy",
    origin: "colombo-airport",
    destination: "kandy",
    serviceTypes: ["airport-transfer"],
    seoSlug: "/airport-to-kandy",
  },
  {
    id: "airport-mirissa",
    origin: "colombo-airport",
    destination: "mirissa",
    serviceTypes: ["airport-transfer"],
    seoSlug: "/airport-to-mirissa",
  },
  {
    id: "airport-sigiriya",
    origin: "colombo-airport",
    destination: "sigiriya",
    serviceTypes: ["airport-transfer"],
    seoSlug: "/airport-to-sigiriya",
  },
  {
    id: "airport-unawatuna",
    origin: "colombo-airport",
    destination: "unawatuna",
    serviceTypes: ["airport-transfer"],
    pricingRouteKey: "unawatuna",
    seoSlug: "/airport-to-unawatuna",
  },
  {
    id: "airport-weligama",
    origin: "colombo-airport",
    destination: "weligama",
    serviceTypes: ["airport-transfer"],
    pricingRouteKey: "weligama",
    seoSlug: "/airport-to-weligama",
  },
];

export function findRoute(id) {
  return routes.find((route) => route.id === id);
}

export function findRoutesByDestination(destinationId) {
  return routes.filter((route) => route.destination === destinationId);
}
