/**
 * Central pricing data for SKY Taxi Service & Tours.
 *
 * This is the source for taxi, airport, driver, guide, tour and rental rates.
 * Existing tour/rental prices below remain published values pending a
 * separate commercial review. Do not infer a quote from a starting rate.
 *
 * Legacy entries retain their published effectiveDate. The founder-supplied
 * W1 products have no asserted effective date beyond this audit.
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
 * Existing airport-page cards are for Unawatuna/Weligama -> airport. Preserve
 * their published USD prices until reverse-direction rates are confirmed.
 * The new founder rates further below are CMB -> destinations, a DIFFERENT
 * direction, and must never be substituted into those cards.
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

/** Founder-supplied CMB outbound transfer products and pickup arrangements. */
export const commercialVehicleClasses = {
  sedan: { id: "sedan", name: "Sedan", example: null },
  miniVan: { id: "miniVan", name: "Mini Van", example: "Honda Freed / Toyota Voxy type" },
  van: { id: "van", name: "Van", example: "Toyota KDH type" },
};

// Only unambiguous fleet examples are mapped. Shuttle (wagon) and Vezel
// (SUV) require a quote; the founder has not supplied rates for those types.
export const airportVehicleClassById = {
  "toyota-prius": "sedan",
  "honda-insight": "sedan",
  "honda-freed": "miniVan",
  "toyota-kdh-van": "van",
};

export const airportPickupOptions = {
  arrivalLobby: {
    id: "arrivalLobby",
    description: "Driver meets the guest in the airport arrival lobby with a name sign.",
  },
  outsidePostOffice: {
    id: "outsidePostOffice",
    description: "Guest exits the airport and meets the driver near the post office, approximately 50 metres from the exit.",
    reductionLkrByClass: { sedan: 2000, miniVan: 3000, van: 3000 },
  },
};

export const airportOutboundPricing = [
  {
    id: "cmb-galle-unawatuna",
    origin: "CMB",
    destinations: ["galle", "unawatuna"],
    currency: "LKR",
    status: "active",
    lobbyLkrByClass: { sedan: 16000, miniVan: 20000, van: 21000 },
    inclusions: ["Transport operating costs for the defined transfer"],
  },
  {
    id: "cmb-weligama-mirissa",
    origin: "CMB",
    destinations: ["weligama", "mirissa"],
    currency: "LKR",
    status: "active",
    lobbyLkrByClass: { sedan: 18000, miniVan: 21000, van: 23000 },
    inclusions: ["Transport operating costs for the defined transfer"],
  },
];

export const privateDriverPricing = {
  id: "private-driver",
  currency: "LKR",
  dailyByClass: { sedan: 25000, miniVan: 30000, van: 35000 },
  includedKmPerDay: 150,
  inclusions: ["driver meals", "driver accommodation", "fuel", "highway charges", "parking"],
  flexibleRoute: true,
  finalQuoteDependsOn: ["route", "distance", "duration"],
};

export const chauffeurGuidePricing = {
  id: "chauffeur-guide",
  currency: "USD",
  dailyByClass: { sedan: 69, miniVan: 79, van: 89 },
  includedKmPerDay: 150,
  normallyMinDays: 5,
  inclusions: ["guide meals", "guide accommodation", "fuel", "highway charges", "parking"],
  customizableItinerary: true,
};

export const tourCustomizationPolicy = {
  itineraryChangesHaveSeparateFee: false,
  finalPriceDependsOn: ["route", "service", "vehicle", "duration", "current quote"],
};

export function findAirportTransfer(destination) {
  return airportOutboundPricing.find((route) => route.destinations.includes(destination));
}

export function getAirportTransferPrice(destination, vehicleClass, pickupOption = "arrivalLobby") {
  const route = findAirportTransfer(destination);
  if (!route || !commercialVehicleClasses[vehicleClass] || !airportPickupOptions[pickupOption]) return null;
  const lobby = route.lobbyLkrByClass[vehicleClass];
  const reduction = pickupOption === "outsidePostOffice"
    ? airportPickupOptions.outsidePostOffice.reductionLkrByClass[vehicleClass]
    : 0;
  return { amount: lobby - reduction, currency: route.currency };
}

export function formatCommercialPrice(amount, currency, perDay = false) {
  const number = Number(amount).toLocaleString("en-US");
  const formatted = currency === "LKR" ? `LKR ${number}` : currency === "USD" ? `$${number}` : `${currency} ${number}`;
  return perDay ? `${formatted}/day` : formatted;
}

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
