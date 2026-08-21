import { useRef, useState } from "react";
import { CheckCircle2, Copy, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { buildBookingWhatsAppMessage } from "../utils/buildBookingMessage";
import { consumeBookingContext } from "../utils/bookingContext";
import { submitBookingLead } from "../utils/bookingSubmission";
import { usePlacesAutocomplete } from "../utils/usePlacesAutocomplete";

// Optional — same graceful-fallback pattern as VITE_GOOGLE_MAPS_API_KEY
// (googleMaps.js): when unset, the reference still shows as plain text the
// customer can quote on WhatsApp, just without a clickable status link.
// Points at the AI planner app's public /booking/[id] page (see
// supabase/README.md) once that app's real deployed URL is known.
const bookingStatusUrl = (import.meta.env.VITE_BOOKING_STATUS_URL || "").replace(/\/+$/, "") || null;

const initialForm = {
  tripType: "Airport transfer",
  name: "",
  phone: "",
  pickup: "",
  drop: "",
  date: "",
  time: "",
  passengers: "",
  luggage: "",
  message: "",
  // PHASE 3 — only ever set by picking a real Google Places suggestion
  // (see usePlacesAutocomplete). Cleared the moment the matching text
  // field is hand-edited, so a stale address can never carry coordinates
  // that no longer describe it.
  pickupPlaceId: "",
  pickupLat: null,
  pickupLng: null,
  dropoffPlaceId: "",
  dropoffLat: null,
  dropoffLng: null,
};

const tripTypeValues = ["Airport transfer", "Taxi ride", "Private tour", "Round tour", "Vehicle rental"];

function buildInitialForm(context) {
  if (!context) return initialForm;
  return {
    ...initialForm,
    tripType: tripTypeValues.includes(context.tripType) ? context.tripType : initialForm.tripType,
    message: context.message || initialForm.message,
  };
}

export default function BookingForm() {
  const { t } = useLanguage();
  // Consumed exactly once per mount (consumeBookingContext clears storage as
  // it reads), so both the initial form state and submitBooking's DB write
  // need to share this single captured value rather than re-consuming it.
  const [context] = useState(consumeBookingContext);
  const [form, setForm] = useState(() => buildInitialForm(context));
  const [status, setStatus] = useState("");
  // Set once the Supabase save resolves (see submitBooking below) — stays
  // null if the save never resolves as saved (not configured, RLS error,
  // offline). WhatsApp already opened either way, so this is purely a
  // bonus for a customer who wants to check status or quote it later.
  const [reference, setReference] = useState(null);
  const [copied, setCopied] = useState(false);
  const tripTypeLabels = t("booking.form.tripTypes", tripTypeValues);

  const copyReference = async () => {
    if (!reference) return;
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can fail (permissions, insecure context) — the
      // reference is already visible as selectable text either way, so
      // this is a nice-to-have, never something to show an error for.
    }
  };

  // PHASE 32 — a fast double-click (or double-tap) on the submit button
  // would otherwise insert two rows into Supabase and open two WhatsApp
  // tabs. submitBookingLead has no server-side dedupe of its own (it writes
  // straight to Supabase, unlike the AI planner's public API), so the guard
  // has to live here. A ref blocks the second click synchronously — state
  // alone can't, since a rapid click can land before React re-renders the
  // disabled button.
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submittingRef = useRef(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => {
      const next = { ...current, [name]: value };
      // Hand-editing the address after picking a suggestion invalidates
      // the coordinates that went with the old text.
      if (name === "pickup") {
        next.pickupPlaceId = "";
        next.pickupLat = null;
        next.pickupLng = null;
      } else if (name === "drop") {
        next.dropoffPlaceId = "";
        next.dropoffLat = null;
        next.dropoffLng = null;
      }
      return next;
    });
  };

  const pickupInputRef = useRef(null);
  const dropInputRef = useRef(null);

  usePlacesAutocomplete(pickupInputRef, ({ address, placeId, lat, lng }) => {
    setForm((current) => ({ ...current, pickup: address, pickupPlaceId: placeId, pickupLat: lat, pickupLng: lng }));
  });

  usePlacesAutocomplete(dropInputRef, ({ address, placeId, lat, lng }) => {
    setForm((current) => ({ ...current, drop: address, dropoffPlaceId: placeId, dropoffLat: lat, dropoffLng: lng }));
  });

  const submitBooking = (event) => {
    event.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    setIsSubmitting(true);

    const tripTypeLabel = tripTypeLabels[tripTypeValues.indexOf(form.tripType)] || form.tripType;
    const message = buildBookingWhatsAppMessage({ t, tripTypeLabel, form });

    setStatus(t("booking.form.status"));
    setReference(null);

    // Best-effort: never blocks or delays WhatsApp opening below, and never
    // throws — see bookingSubmission.js. WhatsApp is the fallback of record.
    // The reference is shown once this resolves (a moment after WhatsApp
    // already opened) — never awaited before window.open, so a slow or
    // failed save can never delay the one thing that must always work.
    submitBookingLead({ form, tripTypeLabel, message, context }).then((result) => {
      if (result.saved && result.bookingId) {
        setReference(result.bookingId);
      }
    });

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");

    // Re-enable after a short window rather than locking the form forever —
    // this only needs to stop an accidental double-click/double-tap, not a
    // deliberate second booking a minute later.
    window.setTimeout(() => {
      submittingRef.current = false;
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <form className="form-panel booking-form-panel" onSubmit={submitBooking}>
      <div className="booking-form__header">
        <span>{t("booking.form.eyebrow")}</span>
        <h3>{t("booking.form.title")}</h3>
        <p>{t("booking.form.text")}</p>
      </div>

      <fieldset className="trip-type-selector">
        <legend>{t("booking.form.tripType")}</legend>
        <div>
          {tripTypeValues.map((type, index) => (
            <label className={form.tripType === type ? "trip-type-option trip-type-option--active" : "trip-type-option"} key={type}>
              <input type="radio" name="tripType" value={type} checked={form.tripType === type} onChange={updateField} />
              <CheckCircle2 size={16} />
              {tripTypeLabels[index] || type}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-grid">
        <label>
          {t("booking.form.name")}
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder={t("booking.form.placeholders.name")}
            autoComplete="name"
            required
          />
        </label>
        <label>
          {t("booking.form.phone")}
          <input
            name="phone"
            value={form.phone}
            onChange={updateField}
            placeholder={t("booking.form.placeholders.phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
          />
        </label>
        <label>
          {t("booking.form.pickup")}
          <input
            ref={pickupInputRef}
            name="pickup"
            value={form.pickup}
            onChange={updateField}
            placeholder={t("booking.form.placeholders.pickup")}
            autoComplete="off"
            required
          />
        </label>
        <label>
          {t("booking.form.drop")}
          <input
            ref={dropInputRef}
            name="drop"
            value={form.drop}
            onChange={updateField}
            placeholder={t("booking.form.placeholders.drop")}
            autoComplete="off"
            required
          />
        </label>
        <label>
          <span className="form-grid__label-text">
            {t("booking.form.date")}
            <span className="form-optional-tag">{t("booking.form.optionalTag", "(optional)")}</span>
          </span>
          <input name="date" value={form.date} onChange={updateField} type="date" />
        </label>
        <label>
          <span className="form-grid__label-text">
            {t("booking.form.time")}
            <span className="form-optional-tag">{t("booking.form.optionalTag", "(optional)")}</span>
          </span>
          <input name="time" value={form.time} onChange={updateField} type="time" />
        </label>
        <label>
          <span className="form-grid__label-text">
            {t("booking.form.passengers")}
            <span className="form-optional-tag">{t("booking.form.optionalTag", "(optional)")}</span>
          </span>
          <input
            name="passengers"
            value={form.passengers}
            onChange={updateField}
            placeholder={t("booking.form.placeholders.passengers")}
            inputMode="numeric"
          />
        </label>
        <label>
          <span className="form-grid__label-text">
            {t("booking.form.luggage")}
            <span className="form-optional-tag">{t("booking.form.optionalTag", "(optional)")}</span>
          </span>
          <input name="luggage" value={form.luggage} onChange={updateField} placeholder={t("booking.form.placeholders.luggage")} />
        </label>
        <label className="form-grid__wide">
          <span className="form-grid__label-text">
            {t("booking.form.message")}
            <span className="form-optional-tag">{t("booking.form.optionalTag", "(optional)")}</span>
          </span>
          <textarea name="message" value={form.message} onChange={updateField} placeholder={t("booking.form.placeholders.message")} />
        </label>
      </div>

      <button className="button button--primary form-panel__button" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
        <MessageCircle size={19} />
        {t("common.sendWhatsAppBooking")}
      </button>
      {status && !reference && (
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      )}
      {reference && (
        <div className="booking-confirmation" role="status" aria-live="polite">
          <CheckCircle2 size={22} className="booking-confirmation__icon" />
          <div className="booking-confirmation__body">
            <p className="booking-confirmation__title">{t("booking.form.confirmationTitle", "Booking received")}</p>
            <p className="booking-confirmation__text">
              {t("booking.form.confirmationText", "WhatsApp is open with your details — we'll confirm shortly. Save your reference below.")}
            </p>
            <div className="booking-confirmation__reference">
              <code>{reference}</code>
              <button type="button" onClick={copyReference} aria-label={t("booking.form.copyReference", "Copy reference")}>
                <Copy size={14} />
                {copied ? t("booking.form.copied", "Copied") : t("booking.form.copy", "Copy")}
              </button>
            </div>
            {bookingStatusUrl && (
              <a href={`${bookingStatusUrl}/${reference}`} target="_blank" rel="noopener noreferrer" className="booking-confirmation__link">
                {t("booking.form.viewStatus", "View booking status")} →
              </a>
            )}
          </div>
        </div>
      )}
    </form>
  );
}
