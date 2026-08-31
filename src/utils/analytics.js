export function trackAcquisitionCta({ ctaName, pageSource, destination }) {
  // Keep CTA tracking safe: links still work if Google Analytics is unavailable.
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  try {
    window.gtag("event", "acquisition_cta_click", {
      event_category: "acquisition_funnel",
      event_label: `${pageSource}:${ctaName}`,
      cta_name: ctaName,
      page_source: pageSource,
      destination,
    });
  } catch {
    // Navigation should never be blocked by analytics.
  }
}

/**
 * General-purpose funnel event tracker, same safe pattern as
 * trackAcquisitionCta above (no-op without gtag, never throws, never
 * blocks navigation). `params` must never contain PII — no customer
 * names, phone numbers, emails, or free-text trip notes. Only
 * non-identifying context (page/category/label-style strings) belongs
 * here; the real booking/lead details already live in Supabase via
 * bookingSubmission.js, not in analytics.
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  try {
    window.gtag("event", eventName, params);
  } catch {
    // Never let analytics break the user-facing action it's attached to.
  }
}
