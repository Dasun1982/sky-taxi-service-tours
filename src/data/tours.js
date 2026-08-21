/**
 * Tour catalog index for SKY Taxi Service & Tours.
 *
 * MILESTONE 2 — CORE TOURISM DATA ARCHITECTURE
 *
 * This is deliberately a thin INDEX, not a rewrite of the tour products.
 * The full itinerary, includes/excludes, FAQs, and marketing copy for each
 * tour remain exactly where they already live — in the `oneDayTours` array
 * in src/pages/OneDayTours.jsx and the `roundTourPackages` array in
 * src/pages/RoundTours.jsx — because that content is genuinely page-specific
 * and rewriting it would risk changing real SEO/marketing copy.
 *
 * What this file adds: one place a future system (AI planner, mobile app,
 * search) can query "what tours does SKY offer, at what price, covering
 * which destinations" without needing to import a React page component.
 * `id` matches the `id` already present on each tour's entry in its page
 * file (and the matching entry in src/data/pricing.js), so all three layers
 * stay in sync by construction — updating a tour's id in one place is a
 * deliberate, visible change, not silent drift.
 *
 * `destinations` values are destination ids from src/data/destinations.js,
 * populated only from each tour's own `places` array (its author-curated
 * destination list) — never inferred from itinerary prose, to avoid
 * misattributing a stop to the wrong destination.
 */

import { oneDayTourPricing, roundTourPricing } from "./pricing";

export const tours = [
  {
    id: "ella-one-day-trip",
    name: "One-Day Trip in Ella",
    type: "day-tour",
    duration: "Full day",
    destinations: ["ella"],
    priceId: "ella-one-day-trip",
    page: "one-day-tours",
  },
  {
    id: "sinharaja-one-day-trip",
    name: "One-Day Trip in Sinharaja",
    type: "day-tour",
    duration: "Full day",
    destinations: ["sinharaja"],
    priceId: "sinharaja-one-day-trip",
    page: "one-day-tours",
  },
  {
    id: "kandy-one-day-trip",
    name: "One-Day Trip in Kandy",
    type: "day-tour",
    duration: "Full day",
    destinations: ["kandy"],
    priceId: "kandy-one-day-trip",
    page: "one-day-tours",
  },
  {
    id: "colombo-one-day-trip",
    name: "One-Day Trip in Colombo",
    type: "day-tour",
    duration: "Full day",
    destinations: ["colombo"],
    priceId: "colombo-one-day-trip",
    page: "one-day-tours",
  },
  {
    id: "ella-2-day-tour",
    name: "2-Day Private Tour to Ella",
    type: "round-tour",
    duration: "2 Days",
    destinations: ["ella"],
    priceId: "ella-2-day-tour",
    page: "round-tours",
  },
  {
    id: "kandy-nuwara-eliya-ella-2-day-tour",
    name: "2-Day Private Tour to Kandy, Nuwara Eliya & Ella",
    type: "round-tour",
    duration: "2 Days",
    destinations: ["kandy", "nuwara-eliya", "ella"],
    priceId: "kandy-nuwara-eliya-ella-2-day-tour",
    page: "round-tours",
  },
  {
    id: "sigiriya-kandy-nuwara-eliya-ella-3-day-tour",
    name: "3-Day Private Tour to Sigiriya, Kandy, Nuwara Eliya & Ella",
    type: "round-tour",
    duration: "3 Days",
    destinations: ["sigiriya", "dambulla", "kandy", "ella"],
    priceId: "sigiriya-kandy-nuwara-eliya-ella-3-day-tour",
    page: "round-tours",
  },
  {
    id: "trincomalee-cultural-triangle-hill-country-wildlife-5-day-tour",
    name: "5-Day Private Tour of Trincomalee, Cultural Triangle, Hill Country & Wildlife",
    type: "round-tour",
    duration: "5 Days",
    destinations: ["trincomalee", "sigiriya", "kandy", "ella"],
    priceId: "trincomalee-cultural-triangle-hill-country-wildlife-5-day-tour",
    page: "round-tours",
  },
  {
    id: "cultural-heritage-hill-country-wildlife-7-day-tour",
    name: "7-Day Private Tour of Sri Lanka's Cultural Heritage, Hill Country & Wildlife",
    type: "round-tour",
    duration: "7 Days",
    destinations: ["trincomalee", "polonnaruwa", "anuradhapura", "kandy", "ella"],
    priceId: "cultural-heritage-hill-country-wildlife-7-day-tour",
    page: "round-tours",
  },
  {
    id: "north-east-cultural-heritage-hill-country-wildlife-10-day-tour",
    name: "10-Day Private Tour of Sri Lanka's North, East, Cultural Heritage, Hill Country & Wildlife",
    type: "round-tour",
    duration: "10 Days",
    destinations: ["negombo", "jaffna", "trincomalee", "kandy", "yala", "galle"],
    priceId: "north-east-cultural-heritage-hill-country-wildlife-10-day-tour",
    page: "round-tours",
  },
];

export function findTour(id) {
  return tours.find((tour) => tour.id === id);
}

export function findToursByDestination(destinationId) {
  return tours.filter((tour) => tour.destinations.includes(destinationId));
}

/**
 * Resolves a tour's price from the correct pricing.js source for its type,
 * so callers (components) never need to know which of the two pricing
 * arrays a given tour belongs to. Returns undefined if the tour or its
 * price entry can't be found — callers must handle that, never invent a
 * fallback price.
 */
export function findTourPricing(tourId) {
  const tour = findTour(tourId);
  if (!tour) return undefined;
  const source = tour.type === "day-tour" ? oneDayTourPricing : roundTourPricing;
  return source.find((entry) => entry.id === tour.priceId);
}
