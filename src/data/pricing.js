/**
 * Central pricing data for SKY Taxi Service & Tours.
 *
 * This is the ONLY place taxi/airport/rental prices should be written.
 * Pages read from here instead of hardcoding numbers, so a price change
 * only has to happen in one place. All figures below are the site's real,
 * currently published prices — nothing here is invented.
 *
 * effectiveDate uses ISO format (YYYY-MM-DD). Update it whenever prices
 * change so it's clear how current a price is.
 */

export const taxiRatePerKm = {
  oneWay: "Rs. 150 / km",
  roundTrip: "Rs. 100 / km",
  currency: "LKR",
  effectiveDate: "2026-08-18",
  status: "active",
  notes: "Final price confirmed on WhatsApp based on route, date, and vehicle.",
};

/**
 * Per-vehicle airport transfer pricing, by destination. vehicleId refers to
 * entries in taxiFleet (src/data/vehicles.js).
 */
export const airportTransferPricing = [
  {
    vehicleId: "toyota-prius",
    currency: "USD",
    effectiveDate: "2026-08-18",
    status: "active",
    routes: { unawatuna: "$49.99", weligama: "$54.99" },
  },
  {
    vehicleId: "honda-shuttle",
    currency: "USD",
    effectiveDate: "2026-08-18",
    status: "active",
    routes: { unawatuna: "$49.99", weligama: "$54.99" },
  },
  {
    vehicleId: "honda-insight",
    currency: "USD",
    effectiveDate: "2026-08-18",
    status: "active",
    routes: { unawatuna: "$49.99", weligama: "$54.99" },
  },
  {
    vehicleId: "honda-vezel",
    currency: "USD",
    effectiveDate: "2026-08-18",
    status: "active",
    routes: { unawatuna: "$59.99", weligama: "$64.99" },
  },
  {
    vehicleId: "honda-freed",
    currency: "USD",
    effectiveDate: "2026-08-18",
    status: "active",
    routes: { unawatuna: "$59.99", weligama: "$64.99" },
  },
  {
    vehicleId: "toyota-kdh-van",
    currency: "USD",
    effectiveDate: "2026-08-18",
    status: "active",
    routes: { unawatuna: "$65.99", weligama: "$69.99" },
  },
];

/**
 * Self-drive rental pricing. vehicleId refers to entries in rentalFleet
 * (src/data/vehicles.js).
 */
export const rentalPricing = [
  { vehicleId: "tvs-ntorq-125", currency: "LKR", effectiveDate: "2026-08-18", status: "active", oneDay: "Rs.2500", weekly: "Rs.2000" },
  { vehicleId: "honda-dio", currency: "LKR", effectiveDate: "2026-08-18", status: "active", oneDay: "Rs.2000", weekly: "Rs.1500" },
  { vehicleId: "yamaha-zr", currency: "LKR", effectiveDate: "2026-08-18", status: "active", oneDay: "Rs.2000", weekly: "Rs.1500" },
  { vehicleId: "hero-xoom", currency: "LKR", effectiveDate: "2026-08-18", status: "active", oneDay: "Rs.2500", weekly: "Rs.2000" },
  { vehicleId: "honda-navi", currency: "LKR", effectiveDate: "2026-08-18", status: "active", oneDay: "Rs.2000", weekly: "Rs.1500" },
  { vehicleId: "tuk-tuk", currency: "LKR", effectiveDate: "2026-08-18", status: "active", oneDay: "Rs.5000", weekly: "Rs.4500" },
  { vehicleId: "honda-freed-rental", currency: "LKR", effectiveDate: "2026-08-18", status: "active", oneDay: "Ask price", weekly: "Custom plan" },
  { vehicleId: "honda-insight-rental", currency: "LKR", effectiveDate: "2026-08-18", status: "active", oneDay: "Ask price", weekly: "Custom plan" },
  { vehicleId: "honda-vezel-rental", currency: "LKR", effectiveDate: "2026-08-18", status: "active", oneDay: "Ask price", weekly: "Custom plan" },
];

/**
 * One-day tour pricing (per tour, whole private vehicle — not per person).
 * id refers to the matching tour entry in src/pages/OneDayTours.jsx.
 */
export const oneDayTourPricing = [
  { id: "ella-one-day-trip", currency: "USD", effectiveDate: "2026-08-18", status: "active", price: "$120" },
  { id: "sinharaja-one-day-trip", currency: "USD", effectiveDate: "2026-08-18", status: "active", price: "$84" },
  { id: "kandy-one-day-trip", currency: "USD", effectiveDate: "2026-08-18", status: "active", price: "$117" },
  { id: "colombo-one-day-trip", currency: "USD", effectiveDate: "2026-08-18", status: "active", price: "$84" },
];

/**
 * Round tour (multi-day) pricing. id refers to the matching package entry in
 * src/pages/RoundTours.jsx.
 */
export const roundTourPricing = [
  { id: "ella-2-day-tour", currency: "USD", effectiveDate: "2026-08-18", status: "active", price: "$180" },
  { id: "kandy-nuwara-eliya-ella-2-day-tour", currency: "USD", effectiveDate: "2026-08-18", status: "active", price: "$180" },
  { id: "sigiriya-kandy-nuwara-eliya-ella-3-day-tour", currency: "USD", effectiveDate: "2026-08-18", status: "active", price: "$250" },
  { id: "trincomalee-cultural-triangle-hill-country-wildlife-5-day-tour", currency: "USD", effectiveDate: "2026-08-18", status: "active", price: "$368" },
  { id: "cultural-heritage-hill-country-wildlife-7-day-tour", currency: "USD", effectiveDate: "2026-08-18", status: "active", price: "$514" },
  { id: "north-east-cultural-heritage-hill-country-wildlife-10-day-tour", currency: "USD", effectiveDate: "2026-08-18", status: "active", price: "$734" },
];

export function findAirportPricing(vehicleId) {
  return airportTransferPricing.find((entry) => entry.vehicleId === vehicleId);
}

export function findRentalPricing(vehicleId) {
  return rentalPricing.find((entry) => entry.vehicleId === vehicleId);
}

export function findOneDayTourPricing(id) {
  return oneDayTourPricing.find((entry) => entry.id === id);
}

export function findRoundTourPricing(id) {
  return roundTourPricing.find((entry) => entry.id === id);
}
