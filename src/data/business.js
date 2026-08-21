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
export const website = "https://skytaxisrilanka.com";
export const aiPlannerUrl = "https://ai.skytaxisrilanka.com";
export const phone = contactInfo.phone;
export const whatsapp = contactInfo.whatsapp;
export const email = contactInfo.email;
export const address = contactInfo.address;
export const country = "Sri Lanka";
export const currency = "LKR";
