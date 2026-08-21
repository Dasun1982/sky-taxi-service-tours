import { createClient } from "@supabase/supabase-js";

/**
 * Public, browser-safe Supabase client. Uses the anon key only — this key
 * can, per supabase/schema.sql's RLS policy, INSERT into `bookings` and
 * nothing else (no select/update/delete for anon). Never put the
 * service-role key here.
 *
 * Returns null when the project hasn't configured Supabase yet (no env
 * vars set). Callers must treat null as "database not available right
 * now" and fall back gracefully — see bookingSubmission.js.
 */
let client = null;
let attempted = false;

export function getSupabaseClient() {
  if (attempted) return client;
  attempted = true;

  const url = import.meta.env.VITE_SUPABASE_URL;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  client = createClient(url, anonKey);
  return client;
}
