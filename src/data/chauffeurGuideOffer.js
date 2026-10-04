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
