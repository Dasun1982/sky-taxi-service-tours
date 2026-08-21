import { images } from "./travelData";

/**
 * Single source of truth for the SKY taxi fleet (cars, SUVs, vans used for
 * taxi rides and airport transfers). Order matches the existing translation
 * index keys used in TaxiService and AirportTransfers pages (taxi.vehicles.N,
 * airport.vehicles.N) — do not reorder without checking translations.js.
 *
 * luggageCapacity is the wording used on the AirportTransfers pricing cards.
 * routeLuggageNote is the wording used across the route/city SEO landing
 * pages (AirportToXTaxi, XTaxiService, etc). Both conventions already existed
 * independently in production with slightly different phrasing for Honda
 * Shuttle and Honda Vezel — kept as two fields instead of merged into one so
 * centralizing this data doesn't silently change either page's visible copy.
 */
export const taxiFleet = [
  {
    id: "toyota-prius",
    name: "Toyota Prius",
    image: images.toyotaPrius,
    category: "car",
    passengerCapacity: "Best for 1-3 passengers",
    luggageCapacity: "2 medium bags",
    routeLuggageNote: "2 medium bags",
    description: "Budget-friendly hybrid car for airport transfers, city rides, and short trips.",
  },
  {
    id: "honda-shuttle",
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    category: "car",
    passengerCapacity: "Best for 1-4 passengers",
    luggageCapacity: "3 medium bags",
    routeLuggageNote: "Comfortable luggage space",
    description: "Comfortable wagon with good luggage space for airport pickups and day tours.",
  },
  {
    id: "honda-insight",
    name: "Honda Insight",
    image: images.hondaInsight,
    category: "car",
    passengerCapacity: "Best for 1-3 passengers",
    luggageCapacity: "2 medium bags",
    routeLuggageNote: "2 medium bags",
    description: "Clean hybrid car for smooth private taxi rides across Sri Lanka.",
  },
  {
    id: "honda-vezel",
    name: "Honda Vezel",
    image: images.hondaVezel,
    category: "suv",
    passengerCapacity: "Best for 1-4 passengers",
    luggageCapacity: "3 medium bags",
    routeLuggageNote: "SUV luggage space",
    description: "Comfortable SUV option for couples, families, and longer routes.",
  },
  {
    id: "honda-freed",
    name: "Honda Freed",
    image: images.hondaFreed,
    category: "van",
    passengerCapacity: "Best for 1-5 passengers",
    luggageCapacity: "Family luggage space",
    routeLuggageNote: "Family luggage space",
    description: "Spacious family vehicle with luggage space for tours and transfers.",
  },
  {
    id: "toyota-kdh-van",
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    category: "van",
    passengerCapacity: "Best for 1-8 passengers",
    luggageCapacity: "Large group luggage",
    routeLuggageNote: "Large group luggage",
    description: "Large van for families, groups, airport transfers, and island-wide tours.",
  },
];

export function findTaxiVehicle(id) {
  return taxiFleet.find((vehicle) => vehicle.id === id);
}

/**
 * Self-drive rental fleet (scooters, bikes, tuk-tuk, plus a few taxi-fleet
 * vehicles also offered as self-drive rentals). Order matches VehicleRentals
 * page display order.
 */
export const rentalFleet = [
  {
    id: "tvs-ntorq-125",
    name: "TVS Ntorq 125",
    image: images.tvsNtorq,
    category: "scooter",
    alt: "TVS Ntorq 125 rental vehicle",
    description: "Sporty scooter, smooth ride, great for city travel.",
  },
  {
    id: "honda-dio",
    name: "Honda Dio",
    image: images.hondaDio,
    category: "scooter",
    alt: "Honda Dio rental vehicle",
    description: "Lightweight scooter, easy handling, fuel efficient.",
  },
  {
    id: "yamaha-zr",
    name: "Yamaha ZR",
    image: images.yamahaRayZr,
    category: "scooter",
    alt: "Yamaha ZR rental vehicle",
    description: "Comfortable scooter, ideal for daily local rides.",
  },
  {
    id: "hero-xoom",
    name: "Hero Xoom",
    image: images.heroXoom,
    category: "scooter",
    alt: "Hero Xoom rental vehicle",
    description: "Modern scooter, smooth performance, stylish design.",
  },
  {
    id: "honda-navi",
    name: "Honda Navi Bike",
    image: images.hondaNavi,
    category: "bike",
    alt: "Honda Navi Bike rental vehicle",
    description: "Compact bike, fun ride, easy to control.",
  },
  {
    id: "tuk-tuk",
    name: "Tuk-Tuk",
    image: images.tuktuk,
    category: "tuktuk",
    alt: "Tuk-Tuk rental vehicle",
    description: "Local three-wheeler, perfect for groups and luggage.",
  },
  {
    id: "honda-freed-rental",
    name: "Honda Freed",
    image: images.hondaFreed,
    category: "van",
    alt: "Honda Freed family rental vehicle",
    description: "Family rental vehicle with comfortable seats and luggage space.",
  },
  {
    id: "honda-insight-rental",
    name: "Honda Insight",
    image: images.hondaInsight,
    category: "car",
    alt: "Honda Insight economy sedan rental vehicle",
    description: "Economy sedan option for budget-friendly city rides and transfers.",
  },
  {
    id: "honda-vezel-rental",
    name: "Honda Vezel",
    image: images.hondaVezel,
    category: "suv",
    alt: "Honda Vezel SUV rental vehicle",
    description: "Premium SUV rental option for private tours and longer routes.",
  },
];
