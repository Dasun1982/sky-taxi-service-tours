import { commercialVehicleClasses, privateDriverPricing } from "./pricing.js";

const classIds = ["sedan", "miniVan", "van"];

/** View model for the existing Private Driver page; W1 remains the price source. */
export function getPrivateDriverOffer() {
  const vehicleOptions = classIds.map((id) => ({
    id,
    name: id === "van" ? "KDH Van" : commercialVehicleClasses[id].name,
    example: commercialVehicleClasses[id].example,
    dailyPrice: privateDriverPricing.dailyByClass[id],
  }));

  return {
    id: privateDriverPricing.id,
    currency: privateDriverPricing.currency,
    includedKmPerDay: privateDriverPricing.includedKmPerDay,
    inclusions: privateDriverPricing.inclusions,
    finalQuoteDependsOn: privateDriverPricing.finalQuoteDependsOn,
    flexibleRoute: privateDriverPricing.flexibleRoute,
    startingPrice: Math.min(...vehicleOptions.map((vehicle) => vehicle.dailyPrice)),
    vehicleOptions,
  };
}
