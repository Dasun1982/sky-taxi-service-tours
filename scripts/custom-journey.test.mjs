import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  emptyJourneyDraft,
  journeyAirportChoices,
  journeyDraftFromSearch,
  journeyServiceChoices,
  journeyVehicleChoices,
  toCompleteJourneyQuote,
  validateJourneyDraft,
} from "../src/data/customJourneyRequest.js";
import { getPrivateDriverOffer } from "../src/data/privateDriverOffer.js";
import { buildWhatsAppMessage, whatsappIntents } from "../src/utils/whatsappQuote.js";

const source = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const message = (draft) => buildWhatsAppMessage(toCompleteJourneyQuote({ ...emptyJourneyDraft, ...draft }));

test("one focused W7 route and form coexist with unchanged booking submission", () => {
  const app = source("../src/App.jsx");
  const registry = source("../src/data/seoPages.js");
  const page = source("../src/pages/CustomJourney.jsx");
  assert.equal((app.match(/"custom-journey": CustomJourney/g) || []).length, 1);
  assert.equal((registry.match(/slug: "custom-journey"/g) || []).length, 1);
  assert.equal((page.match(/<form\b/g) || []).length, 1);
  assert.doesNotMatch(page, /bookingSubmission|submitBookingLead|supabase|localStorage|sessionStorage/);
  assert.match(source("../src/components/BookingForm.jsx"), /submitBookingLead/);
});

test("early planner keeps date and vehicle unknown while sharing a useful route", () => {
  const output = message({ duration: "7", travelers: "2", route: "Sigiriya, Kandy, Ella, Mirissa", airportPickup: "Yes" });
  assert.match(output, /Dates: ___/);
  assert.match(output, /Travelers: 2/);
  assert.match(output, /Route: Sigiriya, Kandy, Ella, Mirissa/);
  assert.match(output, /Duration: 7 days/);
  assert.match(output, /Service preference: Help Me Choose/);
  assert.match(output, /Airport pickup needed: Yes/);
  assert.doesNotMatch(output, /Vehicle preference|starting price|total/i);
});

test("private driver preference is not a vehicle assignment or multiplied price", () => {
  const output = message({ startingLocation: "CMB / Colombo Airport", duration: "8", travelers: "2", route: "Sigiriya → Kandy → Ella → Galle", serviceChoice: "Private Driver", vehicle: "Sedan" });
  assert.match(output, /Starting location: CMB \/ Colombo Airport/);
  assert.match(output, /Duration: 8 days/);
  assert.match(output, /Service preference: Private Driver/);
  assert.match(output, /Vehicle preference: Sedan/);
  assert.doesNotMatch(output, /assigned|reserved|25,000|200,000|available/i);
});

test("chauffeur guide preference stays a request without a USD package quote", () => {
  const output = message({ duration: "10", route: "Cultural Triangle → Kandy → Hill Country → Yala → South Coast", serviceChoice: "Chauffeur Guide", vehicle: "Mini Van" });
  assert.match(output, /Service preference: Chauffeur Guide/);
  assert.match(output, /Vehicle preference: Mini Van/);
  assert.doesNotMatch(output, /\$79|\$790|certif|licensed|available|confirmed/i);
});

test("known existing tour context and requested changes reach the same W2 intent", () => {
  const draft = journeyDraftFromSearch("?itinerary=5-day-sri-lanka-tour");
  const output = message({ ...draft, notes: "Add Yala and remove Nuwara Eliya" });
  assert.match(output, /SKY itinerary idea: 5-Day Trincomalee, Cultural Triangle, Hill Country & Wildlife Tour/);
  assert.match(output, /Notes: Add Yala and remove Nuwara Eliya/);
  assert.doesNotMatch(output, /free custom|same price|reprice|total/i);
  assert.equal(journeyDraftFromSearch("?itinerary=not-a-real-tour").itinerary, "");
});

test("minimal uncertain route still creates a compact editable message", () => {
  const output = message({ route: "Ella and South Coast" });
  assert.match(output, /Dates: ___/);
  assert.match(output, /Travelers: ___/);
  assert.match(output, /Route: Ella and South Coast/);
  assert.match(output, /Service preference: Help Me Choose/);
  assert.doesNotMatch(output, /Vehicle preference|Airport pickup needed/);
  assert.ok(output.length < 400);
});

test("optional details reject broken values without forcing invented answers", () => {
  assert.ok(validateJourneyDraft({ ...emptyJourneyDraft }).form);
  assert.deepEqual(validateJourneyDraft({ ...emptyJourneyDraft, route: "Ella" }), {});
  assert.ok(validateJourneyDraft({ ...emptyJourneyDraft, route: "Ella", duration: "0" }).duration);
  assert.ok(validateJourneyDraft({ ...emptyJourneyDraft, route: "Ella", duration: "-2" }).duration);
  assert.ok(validateJourneyDraft({ ...emptyJourneyDraft, route: "Ella", travelers: "2.5" }).travelers);
  assert.ok(validateJourneyDraft({ ...emptyJourneyDraft, route: "Ella", startDate: "2026-02-30" }).startDate);
  assert.deepEqual(validateJourneyDraft({ ...emptyJourneyDraft, route: "Ella", startDate: "2026-10-04" }), {});
  assert.throws(() => toCompleteJourneyQuote({ ...emptyJourneyDraft, route: "Ella", travelers: "-1" }), RangeError);
});

test("service, vehicle, and airport options remain known preferences only", () => {
  assert.deepEqual(journeyServiceChoices, ["Help Me Choose", "Airport Transfer", "Private Driver", "Chauffeur Guide", "Tour / Itinerary"]);
  assert.deepEqual(journeyVehicleChoices, getPrivateDriverOffer().vehicleOptions.map(({ name }) => name));
  assert.deepEqual(journeyAirportChoices, ["Yes", "No"]);
  assert.ok(validateJourneyDraft({ ...emptyJourneyDraft, route: "Ella", vehicle: "SUV" }).vehicle);
  assert.ok(validateJourneyDraft({ ...emptyJourneyDraft, route: "Ella", serviceChoice: "Guide assigned" }).serviceChoice);
  assert.ok(validateJourneyDraft({ ...emptyJourneyDraft, route: "Ella", airportPickup: "Guaranteed" }).airportPickup);
  const output = message({ route: "Ella", travelers: "6", vehicle: "" });
  assert.doesNotMatch(output, /Vehicle preference|KDH|capacity|seats/);
});

test("W2 message stays compact, truthful, and excludes source metadata", () => {
  const quote = toCompleteJourneyQuote({ ...emptyJourneyDraft, route: "Sigiriya, Ella", duration: "7", notes: "A relaxed pace" });
  assert.equal(quote.intent, whatsappIntents.COMPLETE_JOURNEY);
  const output = buildWhatsAppMessage({ ...quote, sourcePage: "secret-route", email: "hidden@example.com" });
  assert.match(output, /Please review my journey and let me know suitable options and a current quote\./);
  assert.doesNotMatch(output, /secret-route|hidden@example|booking confirmed|payment|availability|driver assigned|vehicle reserved/i);
  assert.ok(output.length < 500);
  assert.doesNotMatch(source("../src/pages/CustomJourney.jsx"), /trackEvent|analytics/);
});
