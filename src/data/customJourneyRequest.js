import { getPrivateDriverOffer } from "./privateDriverOffer.js";
import { whatsappIntents } from "../utils/whatsappQuote.js";

export const journeyServiceChoices = Object.freeze([
  "Help Me Choose",
  "Airport Transfer",
  "Private Driver",
  "Chauffeur Guide",
  "Tour / Itinerary",
]);

export const journeyVehicleChoices = Object.freeze(getPrivateDriverOffer().vehicleOptions.map(({ name }) => name));
export const journeyAirportChoices = Object.freeze(["Yes", "No"]);

export const emptyJourneyDraft = Object.freeze({
  startDate: "",
  duration: "",
  travelers: "",
  startingLocation: "",
  route: "",
  endingLocation: "",
  itinerary: "",
  serviceChoice: "Help Me Choose",
  vehicle: "",
  airportPickup: "",
  notes: "",
});

const knownItineraries = Object.freeze({
  "5-day-sri-lanka-tour": "5-Day Trincomalee, Cultural Triangle, Hill Country & Wildlife Tour",
});

export function journeyDraftFromSearch(search = "") {
  const slug = new URLSearchParams(search).get("itinerary");
  return { ...emptyJourneyDraft, itinerary: knownItineraries[slug] || "" };
}

const text = (value) => typeof value === "string" ? value.trim() : "";
const positiveInteger = (value) => /^[1-9]\d*$/u.test(text(value));

function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

export function validateJourneyDraft(draft) {
  const errors = {};
  if (text(draft.startDate) && !validDate(text(draft.startDate))) errors.startDate = "Enter a valid requested date.";
  if (text(draft.duration) && !positiveInteger(draft.duration)) errors.duration = "Enter a whole number of days above zero.";
  if (text(draft.travelers) && !positiveInteger(draft.travelers)) errors.travelers = "Enter a whole number of travelers above zero.";
  if (!journeyServiceChoices.includes(draft.serviceChoice)) errors.serviceChoice = "Choose a listed service preference.";
  if (draft.vehicle && !journeyVehicleChoices.includes(draft.vehicle)) errors.vehicle = "Choose a listed vehicle preference.";
  if (draft.airportPickup && !journeyAirportChoices.includes(draft.airportPickup)) errors.airportPickup = "Choose a listed airport preference.";

  const hasJourneyDetail = [
    draft.startDate, draft.duration, draft.travelers, draft.startingLocation, draft.route,
    draft.endingLocation, draft.itinerary, draft.notes,
  ].some((value) => Boolean(text(value))) || draft.serviceChoice !== "Help Me Choose" || draft.airportPickup === "Yes";
  if (!hasJourneyDetail) errors.form = "Add at least one detail about your journey so SKY has a starting point.";
  return errors;
}

export function toCompleteJourneyQuote(draft) {
  const errors = validateJourneyDraft(draft);
  if (Object.keys(errors).length) throw new RangeError("Journey request needs valid details before opening WhatsApp.");
  return {
    intent: whatsappIntents.COMPLETE_JOURNEY,
    dates: text(draft.startDate),
    duration: text(draft.duration) ? `${text(draft.duration)} days` : "",
    travelers: text(draft.travelers),
    startingLocation: text(draft.startingLocation),
    route: text(draft.route),
    endingLocation: text(draft.endingLocation),
    itinerary: text(draft.itinerary),
    serviceChoice: draft.serviceChoice,
    vehicle: draft.vehicle,
    airportPickup: draft.airportPickup,
    notes: text(draft.notes),
  };
}
