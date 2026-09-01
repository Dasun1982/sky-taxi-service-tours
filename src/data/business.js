import { brand, contactInfo } from "./travelData";

/**
 * Canonical business configuration. Every value here already existed
 * elsewhere in the project (brand/contactInfo in travelData.js, or hardcoded
 * literals found during the Milestone 1C audit) — nothing here is invented.
 * This file re-exports/documents them as one lookup point for values that
 * were duplicated as separate literals (site URL, AI planner URL, founder
 * email) without changing brand.name/contactInfo, which already worked.
 */
export const businessName = brand.name;
// www, not apex: Vercel serves the site at www.skytaxisrilanka.com (200)
// and 307-redirects the apex domain there. This must match that reality,
// or every canonical/structured-data URL disagrees with where the page
// actually resolves — a real canonicalization conflict Google has to
// arbitrate rather than one it's told outright.
export const website = "https://www.skytaxisrilanka.com";
export const aiPlannerUrl = "https://ai.skytaxisrilanka.com";
export const phone = contactInfo.phone;
export const whatsapp = contactInfo.whatsapp;
export const email = contactInfo.email;
export const address = contactInfo.address;
export const country = "Sri Lanka";
export const currency = "LKR";
