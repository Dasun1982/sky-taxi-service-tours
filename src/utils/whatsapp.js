import { contactInfo } from "../data/contact.js";
import { buildWhatsAppMessage } from "./whatsappQuote.js";

/**
 * Canonical WhatsApp URL generation. Legacy page messages remain supported;
 * quote callers share the intent-based message builder below.
 */
const WHATSAPP_BASE_URL = "https://wa.me";

export function buildWhatsAppLink(message) {
  const trimmed = typeof message === "string" ? message.trim() : "";
  if (!trimmed) {
    return `${WHATSAPP_BASE_URL}/${contactInfo.whatsapp}`;
  }
  return `${WHATSAPP_BASE_URL}/${contactInfo.whatsapp}?text=${encodeURIComponent(trimmed)}`;
}

export function buildQuoteWhatsAppLink(quote) {
  return buildWhatsAppLink(buildWhatsAppMessage(quote));
}

export function openWhatsApp(message) {
  window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
}
