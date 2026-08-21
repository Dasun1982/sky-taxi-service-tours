/**
 * Loads the Google Maps JavaScript API (Places library) exactly once, and
 * only when a browser API key is configured. Every caller shares the same
 * loading promise, so re-mounting a form component never injects a
 * duplicate <script> tag.
 *
 * If no key is configured, or the script fails to load (network blocked,
 * ad-blocker, invalid key, offline), callers get `null` back. That is not
 * an edge case to special-case — it is the expected, fully-supported state
 * until a real Google Maps key exists, and every caller must fall back to
 * plain text input exactly as it did before this existed.
 */
let loadPromise = null;

export function isGoogleMapsConfigured() {
  return Boolean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
}

export function loadGooglePlaces() {
  if (!isGoogleMapsConfigured()) {
    return Promise.resolve(null);
  }

  if (window.google?.maps?.places) {
    return Promise.resolve(window.google.maps.places);
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise((resolve) => {
    const existing = document.querySelector("script[data-sky-google-maps]");
    if (existing) {
      existing.addEventListener("load", () => resolve(window.google?.maps?.places ?? null));
      existing.addEventListener("error", () => resolve(null));
      return;
    }

    const script = document.createElement("script");
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.dataset.skyGoogleMaps = "true";
    script.addEventListener("load", () => resolve(window.google?.maps?.places ?? null));
    script.addEventListener("error", () => resolve(null));
    document.head.appendChild(script);
  });

  return loadPromise;
}
