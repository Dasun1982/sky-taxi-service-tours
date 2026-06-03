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
