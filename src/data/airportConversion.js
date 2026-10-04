import {
  airportPickupOptions,
  commercialVehicleClasses,
  findAirportTransfer,
  getAirportTransferPrice,
} from "./pricing.js";

// Existing page slugs map explicitly to the founder's CMB outbound products.
// Reverse routes and unpriced destinations are intentionally absent.
const priorityDestinations = Object.freeze({
  "airport-to-galle": { id: "galle", name: "Galle" },
  "airport-to-unawatuna": { id: "unawatuna", name: "Unawatuna" },
  "airport-to-weligama": { id: "weligama", name: "Weligama" },
  "airport-to-mirissa": { id: "mirissa", name: "Mirissa" },
});

export const priorityAirportRouteSlugs = Object.freeze(Object.keys(priorityDestinations));

export function getAirportConversionOffer(pageSlug) {
  const destination = Object.hasOwn(priorityDestinations, pageSlug) ? priorityDestinations[pageSlug] : null;
  if (!destination) return null;
  const commercialRoute = findAirportTransfer(destination.id);
  if (!commercialRoute || commercialRoute.origin !== "CMB") return null;

  const pickupOptions = [
    { ...airportPickupOptions.arrivalLobby, name: "Arrival Lobby" },
    { ...airportPickupOptions.outsidePostOffice, name: "Outside Meeting" },
  ];
  const vehicleOptions = Object.values(commercialVehicleClasses).map((vehicleClass) => ({
    ...vehicleClass,
    prices: Object.fromEntries(pickupOptions.map((pickup) => [
      pickup.id,
      getAirportTransferPrice(destination.id, vehicleClass.id, pickup.id),
    ])),
  }));
  const startingOption = vehicleOptions.flatMap((vehicle) => pickupOptions.map((pickup) => ({
    vehicleName: vehicle.id === "van" ? "KDH Van" : vehicle.name,
    pickupName: pickup.name,
    price: vehicle.prices[pickup.id].amount,
  }))).reduce((lowest, option) => option.price < lowest.price ? option : lowest);

  return {
    pageSlug,
    commercialRouteId: commercialRoute.id,
    origin: commercialRoute.origin,
    pickupName: "Colombo Airport (CMB)",
    destinationId: destination.id,
    destinationName: destination.name,
    currency: commercialRoute.currency,
    startingPrice: startingOption.price,
    startingVehicleName: startingOption.vehicleName,
    startingPickupName: startingOption.pickupName,
    pickupOptions,
    vehicleOptions,
    inclusions: commercialRoute.inclusions,
  };
}
