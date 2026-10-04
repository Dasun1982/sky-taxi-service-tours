import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { getAirportConversionOffer, priorityAirportRouteSlugs } from "../src/data/airportConversion.js";
import { airportPickupOptions, findAirportPricing } from "../src/data/pricing.js";
import { buildQuoteWhatsAppLink } from "../src/utils/whatsapp.js";
import { whatsappIntents } from "../src/utils/whatsappQuote.js";

const expected = {
  "airport-to-galle": { name: "Galle", routeId: "cmb-galle-unawatuna", starting: 14000, sedan: [16000, 14000], miniVan: [20000, 17000], van: [21000, 18000] },
  "airport-to-unawatuna": { name: "Unawatuna", routeId: "cmb-galle-unawatuna", starting: 14000, sedan: [16000, 14000], miniVan: [20000, 17000], van: [21000, 18000] },
  "airport-to-weligama": { name: "Weligama", routeId: "cmb-weligama-mirissa", starting: 16000, sedan: [18000, 16000], miniVan: [21000, 18000], van: [23000, 20000] },
  "airport-to-mirissa": { name: "Mirissa", routeId: "cmb-weligama-mirissa", starting: 16000, sedan: [18000, 16000], miniVan: [21000, 18000], van: [23000, 20000] },
};

test("all four page slugs map to the exact W1 CMB route and 24 class/pickup amounts", () => {
  assert.deepEqual(priorityAirportRouteSlugs, Object.keys(expected));
  for (const [slug, details] of Object.entries(expected)) {
    const offer = getAirportConversionOffer(slug);
    assert.equal(offer.origin, "CMB");
    assert.equal(offer.commercialRouteId, details.routeId);
    assert.equal(offer.destinationName, details.name);
    assert.equal(offer.pickupName, "Colombo Airport (CMB)");
    assert.equal(offer.currency, "LKR");
    assert.equal(offer.startingPrice, details.starting);
    assert.equal(offer.startingVehicleName, "Sedan");
    assert.equal(offer.startingPickupName, "Outside Meeting");
    for (const vehicle of offer.vehicleOptions) {
      assert.deepEqual([
        vehicle.prices.arrivalLobby.amount,
        vehicle.prices.outsidePostOffice.amount,
      ], details[vehicle.id]);
    }
  }
});

test("reverse and unsupported routes cannot receive a founder outbound offer", () => {
  for (const slug of ["galle-to-airport", "unawatuna-to-airport", "airport-to-ella", "airport-to-kandy", "airport", "constructor"]) {
    assert.equal(getAirportConversionOffer(slug), null);
  }
  assert.equal(findAirportPricing("toyota-prius").routes.unawatuna, "$49.99");
  assert.equal(findAirportPricing("toyota-kdh-van").routes.weligama, "$69.99");
});

test("pickup choices describe two actual arrangements, not a promotion", () => {
  const offer = getAirportConversionOffer("airport-to-galle");
  assert.deepEqual(offer.pickupOptions.map(({ id, name }) => [id, name]), [["arrivalLobby", "Arrival Lobby"], ["outsidePostOffice", "Outside Meeting"]]);
  assert.match(airportPickupOptions.arrivalLobby.description, /arrival lobby.*name sign/i);
  assert.match(airportPickupOptions.outsidePostOffice.description, /post office.*50 metres/i);
});

test("each priority route generates a W2 airport inquiry with truthful known context", () => {
  for (const slug of priorityAirportRouteSlugs) {
    const offer = getAirportConversionOffer(slug);
    const url = new URL(buildQuoteWhatsAppLink({ intent: whatsappIntents.AIRPORT_TRANSFER, pickup: offer.pickupName, destination: offer.destinationName, sourcePage: slug }));
    assert.equal(url.pathname, "/94779291073");
    const message = url.searchParams.get("text");
    assert.match(message, /Pickup: Colombo Airport \(CMB\)/);
    assert.ok(message.includes(`Destination: ${offer.destinationName}`));
    assert.match(message, /Pickup option: ___/);
    assert.doesNotMatch(message, /Vehicle preference:|sourcePage|airport-to-/);
  }
});

test("explicit pickup and vehicle choices are requests, not assignments", () => {
  const message = new URL(buildQuoteWhatsAppLink({ intent: whatsappIntents.AIRPORT_TRANSFER, pickup: "Colombo Airport (CMB)", destination: "Mirissa", pickupOption: "outsidePostOffice", vehicle: "KDH Van" })).searchParams.get("text");
  assert.match(message, /Pickup option: Outside Meeting/);
  assert.match(message, /Vehicle preference: KDH Van/);
  assert.doesNotMatch(message, /assigned|reserved|confirmed booking/i);
});

test("priority JSX has no duplicated W1 amounts or unsupported authority claims", () => {
  const files = [
    "../src/components/AirportRouteOffer.jsx",
    "../src/pages/AirportToGalleTaxi.jsx",
    "../src/pages/AirportToUnawatunaTaxi.jsx",
    "../src/pages/AirportToWeligamaTaxi.jsx",
    "../src/pages/AirportToMirissaTaxi.jsx",
  ];
  for (const file of files) {
    const source = readFileSync(new URL(file, import.meta.url), "utf8");
    assert.doesNotMatch(source, /(?:LKR\s*)?(?:14,?000|16,?000|17,?000|18,?000|20,?000|21,?000|23,?000)/);
    assert.doesNotMatch(source, /booking confirmed|guaranteed availability|vehicle reserved|only 2 left|50% off|best price guaranteed/i);
  }
});
