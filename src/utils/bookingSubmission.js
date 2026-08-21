import { getSupabaseClient } from "./supabaseClient";

/**
 * Best-effort save of a booking form submission to Supabase.
 *
 * This NEVER throws and NEVER blocks the WhatsApp handoff — the caller
 * (BookingForm.jsx) always opens WhatsApp regardless of what this returns.
 * If Supabase isn't configured, or the insert fails for any reason (bad
 * network, RLS misconfiguration, project paused, etc.), the customer must
 * still be able to reach the business exactly as before this phase.
 *
 * `context` is whatever bookingContext.js's consumeBookingContext()
 * returned (or null for a direct /booking visit) — only `source` and
 * `tourId` are used here, and only when they were genuinely set by the
 * page that navigated here (see Tours.jsx). Never invented.
 */
export async function submitBookingLead({ form, tripTypeLabel, message, context }) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { saved: false, reason: "not-configured" };
  }

  try {
    // Generated here, not read back via .select() after the insert: RLS's
    // insert-only policy (see schema.sql) has no SELECT policy at all, and
    // Postgres requires SELECT privilege — subject to RLS — for an
    // INSERT's RETURNING clause to work. Rather than depend on that
    // (untested against the live project), the client supplies its own id
    // up front. `bookings.id` is just `uuid primary key default
    // gen_random_uuid()` — an explicit value in the insert payload is used
    // exactly like the default would be. Inside the try block (not above
    // it) so a browser without `crypto.randomUUID` degrades the same way
    // any other failure here does — WhatsApp still opens regardless.
    const bookingId = crypto.randomUUID();

    const { error } = await supabase
      .from("bookings")
      .insert({
        id: bookingId,
        trip_type: tripTypeLabel || form.tripType,
        source: context?.source || "booking-page",
        customer_name: form.name,
        phone: form.phone,
        pickup: form.pickup || null,
        drop_location: form.drop || null,
        travel_date: form.date || null,
        travel_time: form.time || null,
        passengers: form.passengers || null,
        luggage: form.luggage || null,
        tour_id: context?.tourId || null,
        destination_id: context?.destinationId || null,
        route_id: context?.routeId || null,
        message,
        whatsapp_sent: true,
        // Only set when the customer actually picked a Google Places
        // suggestion (see googleMaps.js) — plain typed addresses leave these
        // null, exactly like every booking before Phase 3.
        pickup_place_id: form.pickupPlaceId || null,
        pickup_lat: form.pickupLat ?? null,
        pickup_lng: form.pickupLng ?? null,
        dropoff_place_id: form.dropoffPlaceId || null,
        dropoff_lat: form.dropoffLat ?? null,
        dropoff_lng: form.dropoffLng ?? null,
      });

    if (error) {
      console.error("Booking save failed, continuing to WhatsApp:", error.message);
      return { saved: false, reason: error.message };
    }

    return { saved: true, bookingId };
  } catch (error) {
    console.error("Booking save failed, continuing to WhatsApp:", error);
    return { saved: false, reason: "network-error" };
  }
}
