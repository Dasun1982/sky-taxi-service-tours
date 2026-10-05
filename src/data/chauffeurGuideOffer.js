import { chauffeurGuidePricing, commercialVehicleClasses, tourCustomizationPolicy } from "./pricing.js";

const classIds = ["sedan", "miniVan", "van"];

/** W5 presentation data; W1 remains the sole commercial source. */
export function getChauffeurGuideOffer() {
  const vehicleOptions = classIds.map((id) => ({
    id,
    name: id === "van" ? "KDH Van" : commercialVehicleClasses[id].name,
    example: commercialVehicleClasses[id].example,
    dailyPrice: chauffeurGuidePricing.dailyByClass[id],
  }));

  return {
    id: chauffeurGuidePricing.id,
    currency: chauffeurGuidePricing.currency,
    includedKmPerDay: chauffeurGuidePricing.includedKmPerDay,
    normallyMinDays: chauffeurGuidePricing.normallyMinDays,
    inclusions: chauffeurGuidePricing.inclusions,
    customizableItinerary: chauffeurGuidePricing.customizableItinerary,
    itineraryChangesHaveSeparateFee: tourCustomizationPolicy.itineraryChangesHaveSeparateFee,
    finalPriceDependsOn: tourCustomizationPolicy.finalPriceDependsOn,
    startingPrice: Math.min(...vehicleOptions.map((vehicle) => vehicle.dailyPrice)),
    vehicleOptions,
  };
}

const usd = (amount) => `$${amount}`;
const { dailyByClass, includedKmPerDay, normallyMinDays } = chauffeurGuidePricing;

/**
 * Chauffeur Guide FAQs — rendered on the page and reused verbatim for the
 * FAQPage schema, so visible copy and structured data cannot drift apart.
 * Facts come from W1/W5 only; no guide licensing or language claims.
 */
export const chauffeurGuideFaqs = [
  {
    question: "How is Chauffeur Guide different from Private Driver?",
    answer: `Private Driver is transport-first: a driver and vehicle for your own stops, priced per day in LKR. Chauffeur Guide is a guiding-oriented multi-day journey with route and destination support beyond transport, normally for ${normallyMinDays} days or more.`,
  },
  {
    question: "How many days does a Chauffeur Guide journey need?",
    answer: `It normally suits journeys of ${normallyMinDays} days or more. If you have fewer days, share your dates and route with SKY, or compare the Private Driver service.`,
  },
  {
    question: "What does the daily rate include?",
    answer: `The private vehicle and chauffeur-guide service, fuel, highway charges, parking, and the guide's meals and accommodation, for up to ${includedKmPerDay} km per day. Guest accommodation, guest meals, entrance and safari tickets, train tickets, and personal expenses are not included unless arranged.`,
  },
  {
    question: "Can I change the route or the number of days?",
    answer: "Yes. You can change destinations and stops without a separate itinerary-customization fee. The final quote can still change with route, distance, duration, and vehicle class.",
  },
  {
    question: "Is the daily price fixed?",
    answer: `${usd(dailyByClass.sedan)}, ${usd(dailyByClass.miniVan)}, and ${usd(dailyByClass.van)} per day are starting prices by vehicle class for up to ${includedKmPerDay} km per day. Share your route on WhatsApp for today's best available price for your dates.`,
  },
];
