import { contactInfo } from "../data/travelData";

/**
 * Single technical WhatsApp link generation system. This does not standardize
 * message content — every page keeps its own legitimate message template —
 * it only centralizes the URL construction (number + encoding) that was
 * previously re-typed on every page.
 */
const WHATSAPP_BASE_URL = "https://wa.me";

export function buildWhatsAppLink(message) {
  const trimmed = typeof message === "string" ? message.trim() : message;
  if (!trimmed) {
    return `${WHATSAPP_BASE_URL}/${contactInfo.whatsapp}`;
  }
  return `${WHATSAPP_BASE_URL}/${contactInfo.whatsapp}?text=${encodeURIComponent(trimmed)}`;
}

export function openWhatsApp(message) {
  window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
}
