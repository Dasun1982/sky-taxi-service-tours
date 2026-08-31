import { findDestination } from "./destinations";

/**
 * Canonical route-intelligence registry for SKY Taxi Service & Tours.
 *
 * Each entry describes a real, already-live Colombo Airport -> destination
 * route that already has a dedicated SEO page (either a hand-written
 * AirportToXTaxi.jsx page or the data-driven AirportTransferLanding.jsx
 * template — see src/data/seo/airportTransfers.js). This file does not
 * create new pages; it's the linking/intelligence layer those existing
 * pages (and Transport.jsx) can query for quick facts and related routes.
 *
 * `travelTime` is copied verbatim from the matching live page's own copy —
 * every one of these ranges is already published, real content, not a new
 * estimate. Never add a route here with a guessed number; if a future route
 * has no verified time, use `travelTime: null` and render the generic
 * "varies depending on traffic, road conditions and stops" fallback instead.
 *
 * `transportOptions` is the same four services for every route because
 * they're delivered by the same shared driver/vehicle pool, not a
 * destination-specific capability — never destination-gated.
 */

export const transportOptionLabels = {
  "airport-transfer": "Airport Transfer",
  "private-taxi": "Private Taxi",
  "private-driver": "Private Driver",
  "driver-guide": "Driver + Guide",
};

const allTransportOptions = ["airport-transfer", "private-taxi", "private-driver", "driver-guide"];

export const routes = [
  {
    slug: "airport-to-ella",
    taxiServiceSlug: "/ella-taxi-service",
    destinationId: "ella",
    destinationName: "Ella",
    travelTime: "5.5 to 7 hours",
    transportOptions: allTransportOptions,
  },
  {
    slug: "airport-to-kandy",
    taxiServiceSlug: "/kandy-taxi-service",
    destinationId: "kandy",
    destinationName: "Kandy",
    travelTime: "3 to 4.5 hours",
    transportOptions: allTransportOptions,
  },
  {
    slug: "airport-to-galle",
    taxiServiceSlug: "/galle-taxi-service",
    destinationId: "galle",
    destinationName: "Galle",
    travelTime: "2 to 2.5 hours by Southern Expressway",
    transportOptions: allTransportOptions,
  },
  {
    slug: "airport-to-sigiriya",
    taxiServiceSlug: "/sigiriya-taxi-service",
    destinationId: "sigiriya",
    destinationName: "Sigiriya",
    travelTime: "3.5 to 4.5 hours",
    transportOptions: allTransportOptions,
  },
  {
    slug: "airport-to-mirissa",
    taxiServiceSlug: "/mirissa-taxi-service",
    destinationId: "mirissa",
    destinationName: "Mirissa",
    travelTime: "2.5 to 3.5 hours by Southern Expressway",
    transportOptions: allTransportOptions,
  },
  {
    slug: "airport-to-unawatuna",
    taxiServiceSlug: "/unawatuna-taxi-service",
    destinationId: "unawatuna",
    destinationName: "Unawatuna",
    travelTime: "2 to 2.5 hours by Southern Expressway",
    transportOptions: allTransportOptions,
  },
  {
    slug: "airport-to-weligama",
    taxiServiceSlug: "/weligama-taxi-service",
    destinationId: "weligama",
    destinationName: "Weligama",
    travelTime: "2.5 to 3 hours by Southern Expressway",
    transportOptions: allTransportOptions,
  },
  {
    slug: "airport-to-hiriketiya",
    taxiServiceSlug: "/hiriketiya-taxi-service",
    destinationId: "hiriketiya",
    destinationName: "Hiriketiya",
    travelTime: "3 to 4 hours by Southern Expressway",
    transportOptions: allTransportOptions,
  },
  {
    slug: "airport-to-nuwara-eliya",
    taxiServiceSlug: "/nuwara-eliya-taxi-service",
    destinationId: "nuwara-eliya",
    destinationName: "Nuwara Eliya",
    travelTime: "5 to 6 hours",
    transportOptions: allTransportOptions,
  },
  {
    slug: "airport-to-bentota",
    taxiServiceSlug: "/bentota-taxi-service",
    destinationId: "bentota",
    destinationName: "Bentota",
    travelTime: "1.5 to 2 hours by Southern Expressway",
    transportOptions: allTransportOptions,
  },
  {
    slug: "airport-to-negombo",
    taxiServiceSlug: "/negombo-taxi-service",
    destinationId: "negombo",
    destinationName: "Negombo",
    travelTime: "15 to 30 minutes",
    transportOptions: allTransportOptions,
  },
  {
    slug: "airport-to-arugam-bay",
    taxiServiceSlug: "/arugam-bay-taxi-service",
    destinationId: "arugam-bay",
    destinationName: "Arugam Bay",
    travelTime: "7 to 8 hours",
    transportOptions: allTransportOptions,
  },
  {
    slug: "airport-to-dambulla",
    taxiServiceSlug: "/dambulla-taxi-service",
    destinationId: "dambulla",
    destinationName: "Dambulla",
    travelTime: "3.5 to 4.5 hours",
    transportOptions: allTransportOptions,
  },
];

export function findRoute(slug) {
  return routes.find((route) => route.slug === slug);
}

export function findRouteByDestination(destinationId) {
  return routes.find((route) => route.destinationId === destinationId);
}

/**
 * Attractions/"useful stops" always come from destinations.js's real
 * `popularFor` list for the matching destination — never written here.
 */
export function routeAttractions(route) {
  return findDestination(route.destinationId)?.popularFor || [];
}

/**
 * Related routes for a given destination id, derived from destinations.js's
 * own relatedDestinations graph (already used by RelatedDestinations.jsx),
 * filtered to destinations that also have a live airport-transfer route
 * here. This keeps the two files' relationship data in sync without
 * duplicating it.
 */
export function relatedRoutes(destinationId, limit = 4) {
  const destination = findDestination(destinationId);
  if (!destination) return [];
  return destination.relatedDestinations
    .map((id) => findRouteByDestination(id))
    .filter(Boolean)
    .slice(0, limit);
}
