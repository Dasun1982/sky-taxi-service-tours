/**
 * Frontend-only "contextual booking" bridge. When a visitor taps something
 * like "Plan this tour" or "Book this vehicle" on a page other than the
 * booking form, we stash a small hint here before navigating so BookingForm
 * can pre-fill its trip type and message. No backend, no global state
 * library — sessionStorage is enough for a same-tab, same-visit handoff.
 *
 * Storage failures (private browsing, disabled storage) are swallowed:
 * booking still works, it just starts blank, exactly like today.
 */
const STORAGE_KEY = "sky-booking-context";

export function setBookingContext(context) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(context));
  } catch {
    // Storage unavailable — booking form falls back to its normal blank state.
  }
}

export function consumeBookingContext() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    sessionStorage.removeItem(STORAGE_KEY);
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
