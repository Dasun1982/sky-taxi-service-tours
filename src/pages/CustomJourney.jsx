import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import { useLanguage } from "../context/LanguageContext";
import { images } from "../data/travelData";
import {
  journeyAirportChoices,
  journeyDraftFromSearch,
  journeyServiceChoices,
  journeyVehicleChoices,
  toCompleteJourneyQuote,
  validateJourneyDraft,
} from "../data/customJourneyRequest";
import { buildQuoteWhatsAppLink } from "../utils/whatsapp";
import { buildWhatsAppMessage } from "../utils/whatsappQuote";
import "../styles/customJourney.css";

export default function CustomJourney() {
  const { t } = useLanguage();
  const [draft, setDraft] = useState(() => journeyDraftFromSearch(window.location.search));
  const [attempted, setAttempted] = useState(false);
  const [handoffHref, setHandoffHref] = useState("");
  const currentErrors = validateJourneyDraft(draft);
  const valid = Object.keys(currentErrors).length === 0;
  const quote = valid ? toCompleteJourneyQuote(draft) : null;
  const preview = quote ? buildWhatsAppMessage(quote) : "";

  const updateField = (event) => {
    const { name, value } = event.target;
    setDraft((current) => ({ ...current, [name]: value }));
    setHandoffHref("");
  };

  const submitRequest = (event) => {
    event.preventDefault();
    setAttempted(true);
    if (!valid) {
      window.requestAnimationFrame(() => document.querySelector(".custom-journey-form [aria-invalid='true']")?.focus());
      return;
    }
    const href = buildQuoteWhatsAppLink(quote);
    setHandoffHref(href);
    try {
      window.open(href, "_blank", "noopener,noreferrer");
    } catch {
      // The same prepared link remains available below the button.
    }
  };

  const fieldError = (name) => attempted && currentErrors[name] ? currentErrors[name] : "";
  const fieldProps = (name) => ({
    name,
    value: draft[name],
    onChange: updateField,
    "aria-invalid": Boolean(fieldError(name)),
    "aria-describedby": fieldError(name) ? `journey-${name}-error` : undefined,
  });
  const error = (name) => fieldError(name) && <span className="field-error" id={`journey-${name}-error`}>{fieldError(name)}</span>;

  return (
    <div className="page custom-journey-page">
      <PageHero
        eyebrow={t("journey.hero.eyebrow")}
        title={t("journey.hero.title")}
        description={t("journey.hero.description")}
        image={images.trainRide}
        alt="Sri Lanka hill country train route"
      >
        <a className="button button--primary" href="#journey-request">
          {t("journey.hero.action")}
          <ArrowRight size={18} />
        </a>
      </PageHero>

      <section className="section custom-journey-section" id="journey-request">
        <div className="section__inner">
          <div className="custom-journey-intro">
            <span className="eyebrow">{t("journey.form.eyebrow")}</span>
            <h2>{t("journey.form.title")}</h2>
            <p>{t("journey.form.description")}</p>
          </div>

          <form className="form-panel custom-journey-form reveal" onSubmit={submitRequest} noValidate>
            <fieldset className="custom-journey-group">
              <legend>{t("journey.groups.trip")}</legend>
              <div className="form-grid custom-journey-grid">
                <label>
                  {t("journey.fields.startDate")}
                  <input type="date" {...fieldProps("startDate")} />
                  {error("startDate")}
                </label>
                <label>
                  {t("journey.fields.duration")}
                  <input type="number" min="1" step="1" inputMode="numeric" placeholder={t("journey.placeholders.duration")} {...fieldProps("duration")} />
                  {error("duration")}
                </label>
                <label>
                  {t("journey.fields.travelers")}
                  <input type="number" min="1" step="1" inputMode="numeric" placeholder={t("journey.placeholders.travelers")} {...fieldProps("travelers")} />
                  {error("travelers")}
                </label>
              </div>
            </fieldset>

            <fieldset className="custom-journey-group">
              <legend>{t("journey.groups.route")}</legend>
              <div className="form-grid custom-journey-grid">
                <label>
                  {t("journey.fields.startingLocation")}
                  <input type="text" maxLength={120} placeholder={t("journey.placeholders.startingLocation")} dir="auto" {...fieldProps("startingLocation")} />
                </label>
                <label>
                  {t("journey.fields.endingLocation")}
                  <input type="text" maxLength={120} placeholder={t("journey.placeholders.endingLocation")} dir="auto" {...fieldProps("endingLocation")} />
                </label>
                <label className="custom-journey-grid__wide">
                  {t("journey.fields.route")}
                  <textarea rows="3" maxLength={500} placeholder={t("journey.placeholders.route")} dir="auto" {...fieldProps("route")} />
                </label>
                <label className="custom-journey-grid__wide">
                  {t("journey.fields.itinerary")}
                  <input type="text" maxLength={160} placeholder={t("journey.placeholders.itinerary")} dir="auto" {...fieldProps("itinerary")} />
                </label>
              </div>
            </fieldset>

            <fieldset className="custom-journey-group">
              <legend>{t("journey.groups.help")}</legend>
              <p className="custom-journey-hint">{t("journey.groups.helpHint")}</p>
              <div className="form-grid custom-journey-grid">
                <label>
                  {t("journey.fields.serviceChoice")}
                  <select {...fieldProps("serviceChoice")}>
                    {journeyServiceChoices.map((choice) => <option key={choice} value={choice}>{t(`journey.service.${choice}`, choice)}</option>)}
                  </select>
                  {error("serviceChoice")}
                </label>
                <label>
                  {t("journey.fields.vehicle")}
                  <select {...fieldProps("vehicle")}>
                    <option value="">{t("journey.notSure")}</option>
                    {journeyVehicleChoices.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
                  </select>
                  {error("vehicle")}
                </label>
                <label>
                  {t("journey.fields.airportPickup")}
                  <select {...fieldProps("airportPickup")}>
                    <option value="">{t("journey.notSure")}</option>
                    {journeyAirportChoices.map((choice) => <option key={choice} value={choice}>{t(`journey.airport.${choice}`, choice)}</option>)}
                  </select>
                  {error("airportPickup")}
                </label>
              </div>
            </fieldset>

            <div className="custom-journey-group">
              <label>
                {t("journey.fields.notes")}
                <textarea rows="3" maxLength={500} placeholder={t("journey.placeholders.notes")} dir="auto" {...fieldProps("notes")} />
              </label>
            </div>

            <section className="custom-journey-review" aria-labelledby="journey-review-title">
              <h3 id="journey-review-title">{t("journey.review.title")}</h3>
              <p>{t("journey.review.description")}</p>
              {preview ? <pre className="custom-journey-preview">{preview}</pre> : <p className="custom-journey-review__empty">{t("journey.review.empty")}</p>}
              {attempted && currentErrors.form && <p className="field-error" role="alert">{currentErrors.form}</p>}
              <button className="button button--primary custom-journey-send" type="submit">
                <MessageCircle size={18} />
                {t("journey.review.action")}
              </button>
              <p className="custom-journey-hint">{t("journey.review.handoff")}</p>
              {handoffHref && <p className="custom-journey-fallback">{t("journey.review.fallback")} <a href={handoffHref} target="_blank" rel="noreferrer">{t("journey.review.openAgain")}</a></p>}
            </section>
          </form>

          <div className="custom-journey-related">
            <p>{t("journey.related.intro")}</p>
            <a href="/airport">{t("journey.related.airport")}</a>
            <a href="/private-driver-sri-lanka">{t("journey.related.driver")}</a>
            <a href="/chauffeur-guide-sri-lanka">{t("journey.related.guide")}</a>
            <a href="/tours">{t("journey.related.tours")}</a>
            <a href="/booking">{t("journey.related.booking")}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
