/**
 * Reads a query parameter for a tour deep link, e.g. /one-day-tours?tour=ella-one-day-trip.
 * Checks the real URL search string first (a normal browser navigation to
 * that path), then falls back to a query string appended after the hash
 * (e.g. #/one-day-tours?tour=x) in case a future internal link ever
 * navigates that way. Returns null when absent — callers must treat that
 * as "no deep link requested", never invent a default tour.
 */
export function getDeepLinkParam(key) {
  const hashQuery = window.location.hash.split("?")[1];
  const params = new URLSearchParams(hashQuery || window.location.search);
  return params.get(key);
}
