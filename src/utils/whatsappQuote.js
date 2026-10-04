export const whatsappIntents = Object.freeze({
  GENERAL: "general",
  TRANSFER: "transfer",
  AIRPORT_TRANSFER: "airportTransfer",
  PRIVATE_DRIVER: "privateDriver",
  CHAUFFEUR_GUIDE: "chauffeurGuide",
  TOUR: "tour",
  CUSTOMIZE_TOUR: "customizeTour",
  COMPLETE_JOURNEY: "completeJourney",
});

const definitions = {
  general: ["I'd like some information about travelling in Sri Lanka.", []],
  transfer: ["I'd like a quote for a private transfer.", [["Pickup", "pickup"], ["Destination", "destination"], ["Date", "date"], ["Time", "time"], ["Passengers", "passengers"], ["Luggage", "luggage"]]],
  airportTransfer: ["I'd like a quote for a private airport transfer.", [["Pickup", "pickup"], ["Destination", "destination"], ["Date", "date"], ["Time", "time"], ["Flight number", "flightNumber"], ["Arrival time", "arrivalTime"], ["Passengers", "passengers"], ["Luggage", "luggage"], ["Pickup option", "pickupOption"]]],
  privateDriver: ["I'm interested in a private driver around Sri Lanka.", [["Dates", "dates"], ["Number of days", "numberOfDays"], ["Travelers", "travelers"], ["Starting location", "startingLocation"], ["Destinations", "destinations"]]],
  chauffeurGuide: ["I'm interested in a private chauffeur-guided Sri Lanka tour.", [["Arrival date", "arrivalDate"], ["Number of days", "numberOfDays"], ["Travelers", "travelers"], ["Places I'd like to visit", "places"]]],
  tour: ["I'm interested in this Sri Lanka tour.", [["Tour", "tourName"], ["Dates", "dates"], ["Travelers", "travelers"]]],
  customizeTour: ["I'd like to customize this Sri Lanka tour.", [["Tour", "tourName"], ["Number of days", "numberOfDays"], ["Travelers", "travelers"], ["Changes I'd like", "changes"]]],
  completeJourney: ["I'd like a quote for my complete Sri Lanka journey.", [["Dates", "dates"], ["Travelers", "travelers"], ["Route", "route"]]],
};
const pickupOptions = { arrivalLobby: "Arrival Lobby", outsidePostOffice: "Outside Meeting" };

function cleanText(value) {
  if (Array.isArray(value)) return value.map(cleanText).filter(Boolean).join(", ");
  if (typeof value !== "string" && (typeof value !== "number" || !Number.isFinite(value))) return "";
  return String(value).replace(/\s+/gu, " ").trim();
}

/** Source metadata is excluded from the customer-visible message. */
export function buildWhatsAppMessage({ intent = whatsappIntents.GENERAL, ...details } = {}) {
  if (!Object.hasOwn(definitions, intent)) throw new RangeError(`Unsupported WhatsApp intent: ${intent}`);
  const definition = definitions[intent];
  const [opening, fields] = definition;
  const lines = ["Hi SKY 👋", opening];
  for (const [label, key] of fields) {
    const value = key === "pickupOption"
      ? (Object.hasOwn(pickupOptions, details[key]) ? pickupOptions[details[key]] : "")
      : cleanText(details[key]);
    lines.push(`${label}: ${value || "___"}`);
  }
  if (intent === whatsappIntents.COMPLETE_JOURNEY) {
    const choice = cleanText(details.serviceChoice);
    if (["Private Driver", "Chauffeur Guide", "Help Me Choose"].includes(choice)) lines.push(`Service preference: ${choice}`);
  }
  if ([whatsappIntents.AIRPORT_TRANSFER, whatsappIntents.PRIVATE_DRIVER, whatsappIntents.CHAUFFEUR_GUIDE].includes(intent) && cleanText(details.vehicle)) {
    lines.push(`Vehicle preference: ${cleanText(details.vehicle)}`);
  }
  if (cleanText(details.notes)) lines.push(`Notes: ${cleanText(details.notes)}`);
  return lines.join("\n");
}
