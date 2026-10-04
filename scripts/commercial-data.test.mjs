import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  airportPickupOptions,
  airportOutboundPricing,
  chauffeurGuidePricing,
  commercialVehicleClasses,
  findAirportPricing,
  formatCommercialPrice,
  getAirportTransferPrice,
  privateDriverPricing,
} from "../src/data/pricing.js";

test("founder airport rates and outside meeting are exact for every destination and class", () => {
  const expected = {
    galle: { sedan: [16000, 14000], miniVan: [20000, 17000], van: [21000, 18000] },
    unawatuna: { sedan: [16000, 14000], miniVan: [20000, 17000], van: [21000, 18000] },
    weligama: { sedan: [18000, 16000], miniVan: [21000, 18000], van: [23000, 20000] },
    mirissa: { sedan: [18000, 16000], miniVan: [21000, 18000], van: [23000, 20000] },
  };

  assert.equal(airportOutboundPricing.length, 2);
  for (const [destination, classes] of Object.entries(expected)) {
    for (const [vehicleClass, [lobby, outside]] of Object.entries(classes)) {
      assert.deepEqual(getAirportTransferPrice(destination, vehicleClass), { amount: lobby, currency: "LKR" });
      assert.deepEqual(getAirportTransferPrice(destination, vehicleClass, "outsidePostOffice"), { amount: outside, currency: "LKR" });
    }
  }
  assert.deepEqual(airportPickupOptions.outsidePostOffice.reductionLkrByClass, { sedan: 2000, miniVan: 3000, van: 3000 });
  assert.deepEqual(Object.keys(commercialVehicleClasses), ["sedan", "miniVan", "van"]);
  assert.equal(getAirportTransferPrice("ella", "sedan"), null);
  assert.equal(getAirportTransferPrice("galle", "suv"), null);
});

test("inbound airport cards retain their separate published values", () => {
  assert.equal(findAirportPricing("toyota-prius").routes.unawatuna, "$49.99");
  assert.equal(findAirportPricing("toyota-kdh-van").routes.weligama, "$69.99");
});

test("private driver and chauffeur guide are distinct daily products", () => {
  assert.notEqual(privateDriverPricing.id, chauffeurGuidePricing.id);
  assert.equal(privateDriverPricing.currency, "LKR");
  assert.deepEqual(privateDriverPricing.dailyByClass, { sedan: 25000, miniVan: 30000, van: 35000 });
  assert.equal(chauffeurGuidePricing.currency, "USD");
  assert.deepEqual(chauffeurGuidePricing.dailyByClass, { sedan: 69, miniVan: 79, van: 89 });
  assert.equal(privateDriverPricing.includedKmPerDay, 150);
  assert.equal(chauffeurGuidePricing.includedKmPerDay, 150);
  assert.equal(chauffeurGuidePricing.normallyMinDays, 5);
});

test("commercial formatting keeps currencies separate", () => {
  assert.equal(formatCommercialPrice(16000, "LKR"), "LKR 16,000");
  assert.equal(formatCommercialPrice(25000, "LKR", true), "LKR 25,000/day");
  assert.equal(formatCommercialPrice(69, "USD", true), "$69/day");
});

test("canonical WhatsApp contact remains the founder number", () => {
  const source = readFileSync(new URL("../src/data/travelData.js", import.meta.url), "utf8");
  assert.match(source, /phone: "\+94 77 929 1073"/);
  assert.match(source, /whatsapp: "94779291073"/);
});
