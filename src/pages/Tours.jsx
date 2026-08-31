import { useRef } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Compass, MapPinned, MessageCircle, Route } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { images, tours } from "../data/travelData";
import { findDestination } from "../data/destinations";
import { findTourPricing, tours as tourCatalog } from "../data/tours";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { setBookingContext } from "../utils/bookingContext";
import { trackEvent } from "../utils/analytics";

const dayTourCatalog = tourCatalog.filter((tour) => tour.type === "day-tour");
const roundTourCatalog = tourCatalog.filter((tour) => tour.type === "round-tour");

function destinationNames(destinationIds) {
  return destinationIds
    .map((id) => findDestination(id)?.name)
    .filter(Boolean)
    .join(", ");
}

const tourTypes = [
  {
    title: "One Day Tours",
    text: "Short Sri Lanka day trips for beaches, culture, wildlife, temples, and viewpoints.",
    button: "View One Day Tours",
    href: "#/one-day-tours",
    image: images.blueBeach,
    alt: "Blue Beach in Sri Lanka",
  },
  {
    title: "Round Tours Around Sri Lanka",
    text: "Multi-day island tours with driver support, hotels, routes, and flexible planning.",
    button: "View Round Tours",
    href: "#/round-tours",
    image: images.trainRide,
    alt: "Sri Lanka scenic train ride through hill country",
  },
];

export default function Tours({ setPage }) {
  const { t } = useLanguage();
  const tourIdeasRef = useRef(null);
  const goToBooking = (tour) => {
    // This carousel's `tour` comes from travelData.js's thematic idea list,
    // not the tours.js catalog, so it has no id that findTour() can resolve —
    // deliberately leaving tourId unset rather than passing a non-matching id.
    trackEvent("tour_clicked", { tour_name: tour.title, page_source: "tour-page" });
    setBookingContext({ tripType: "Private tour", message: tour.title, source: "tour-page" });
    trackEvent("booking_started", { source: "tour-page" });
    setPage("booking");
  };
  const goToBookingForCatalogTour = (tour, pricing) => {
    trackEvent("tour_clicked", { tour_name: tour.name, page_source: "tour-page" });
    setBookingContext({
      tripType: tour.type === "day-tour" ? "Private tour" : "Round tour",
      message: pricing ? `${tour.name} (${pricing.price})` : tour.name,
      source: "tour-page",
      tourId: tour.id,
    });
    trackEvent("booking_started", { source: "tour-page" });
    setPage("booking");
  };
  const customTourMessage = t("messages.customTour");

  const scrollTourIdeas = (direction) => {
    tourIdeasRef.current?.scrollBy({ left: direction * 380, behavior: "smooth" });
  };

  return (
    <div className="page">
      <PageHero
        eyebrow={t("tours.hero.eyebrow")}
        title={t("tours.hero.title")}
        description={t("tours.hero.description")}
        image={images.sigiriya}
        alt="Sigiriya Rock Fortress"
      >
        <a className="button button--primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
          <MessageCircle size={19} />
          {t("common.planOnWhatsApp")}
        </a>
      </PageHero>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("tours.typesHeader.eyebrow")}
            title={t("tours.typesHeader.title")}
            text={t("tours.typesHeader.text")}
          />
          <div className="tour-type-grid tour-type-grid--two">
            {tourTypes.map((type, index) => (
              <Reveal className="tour-type-card" key={type.title}>
                <div className="tour-type-card__media">
                  <img src={type.image} alt={type.alt} loading="lazy" />
                </div>
                <div className="tour-type-card__body">
                  <h3>{t(`tours.types.${index}.title`, type.title)}</h3>
                  <p>{t(`tours.types.${index}.text`, type.text)}</p>
                  <a
                    className="button button--primary tour-type-card__button"
                    href={type.href}
                  >
                    {t(`tours.types.${index}.button`, type.button)}
                    <ArrowRight size={18} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section tours-choice-strip">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Not sure which fits?"
            title="Private Tour, Driver Only, Driver + Guide, or SKY AI"
            text="A Private Tour below has the route and vehicle organized together. If you already know your route, or want a specialist guide at cultural sites, compare the other options."
            align="left"
          />
          <div className="colombo-airport-link-row">
            <a href="/sri-lanka-tour-driver" onClick={() => trackEvent("service_selected", { service_id: "driver-only", page_source: "tours-page" })}>
              Driver Only
            </a>
            <a href="/driver-guide-sri-lanka" onClick={() => trackEvent("service_selected", { service_id: "driver-guide", page_source: "tours-page" })}>
              Driver + Guide
            </a>
            <a href="/transport">Compare Transportation</a>
            <a
              href={aiPlannerUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("ai_planner_opened", { page_source: "tours-page" })}
            >
              Plan with SKY AI
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="carousel-heading">
            <SectionHeader
              eyebrow={t("tours.ideasHeader.eyebrow")}
              title={t("tours.ideasHeader.title")}
              text={t("tours.ideasHeader.text")}
              align="left"
            />
            <div className="carousel-controls">
              <button className="icon-button" type="button" onClick={() => scrollTourIdeas(-1)} aria-label={t("common.previousTourIdea")}>
                <ArrowLeft size={19} />
              </button>
              <button className="icon-button" type="button" onClick={() => scrollTourIdeas(1)} aria-label={t("common.nextTourIdea")}>
                <ArrowRight size={19} />
              </button>
            </div>
          </div>
          <Reveal className="tour-ideas-note">
            {t("tours.ideasNote")}
          </Reveal>
          <div className="tour-ideas-carousel" ref={tourIdeasRef}>
            {tours.map((tour, index) => (
              <article className="tour-idea-card" key={tour.id}>
                <div className="tour-idea-card__media">
                  <img src={tour.image} alt={tour.alt} loading="lazy" />
                  <span>{t(`tours.ideas.${index}.duration`, tour.duration)}</span>
                </div>
                <div className="tour-idea-card__body">
                  <div className="tour-idea-card__meta">
                    <span>
                      <MapPinned size={15} />
                      {tour.location}
                    </span>
                    <span>
                      <CalendarDays size={15} />
                      {t(`tours.ideas.${index}.duration`, tour.duration)}
                    </span>
                  </div>
                  <h3>{t(`tours.ideas.${index}.title`, tour.title)}</h3>
                  <p>{t(`tours.ideas.${index}.summary`, tour.summary)}</p>
                  <div className="tour-idea-card__places">
                    {tour.highlights.map((place, placeIndex) => (
                      <span key={place}>{t(`tours.ideas.${index}.highlights.${placeIndex}`, place)}</span>
                    ))}
                  </div>
                  <button className="text-button" type="button" onClick={() => goToBooking(tour)}>
                    {t("common.planThisTour")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tour-catalog-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Tour catalog"
            title="Browse real tours with prices"
            text="Every tour below has a confirmed price and a full itinerary. Final details are always confirmed on WhatsApp before booking."
          />
          <h3 className="tour-catalog-group-title">One Day Tours</h3>
          <div className="pricing-grid">
            {dayTourCatalog.map((tour) => {
              const pricing = findTourPricing(tour.id);
              return (
                <article className="pricing-card" key={tour.id}>
                  {pricing && <span className="pricing-card__label">{pricing.price}</span>}
                  <h3>{tour.name}</h3>
                  <p>
                    {tour.duration} &middot; {destinationNames(tour.destinations)}
                  </p>
                  <div className="tour-catalog-card__actions">
                    <a className="text-button" href={`/${tour.page}?tour=${tour.id}`} aria-label={`View full itinerary — ${tour.name}`}>
                      View full itinerary
                      <ArrowRight size={17} />
                    </a>
                    <button
                      className="text-button"
                      type="button"
                      onClick={() => goToBookingForCatalogTour(tour, pricing)}
                      aria-label={`Book this tour — ${tour.name}`}
                    >
                      Book this tour
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          <h3 className="tour-catalog-group-title">Round Tours Around Sri Lanka</h3>
          <div className="pricing-grid">
            {roundTourCatalog.map((tour) => {
              const pricing = findTourPricing(tour.id);
              return (
                <article className="pricing-card" key={tour.id}>
                  {pricing && <span className="pricing-card__label">{pricing.price}</span>}
                  <h3>{tour.name}</h3>
                  <p>
                    {tour.duration} &middot; {destinationNames(tour.destinations)}
                  </p>
                  <div className="tour-catalog-card__actions">
                    <a className="text-button" href={`/${tour.page}?tour=${tour.id}`} aria-label={`View full itinerary — ${tour.name}`}>
                      View full itinerary
                      <ArrowRight size={17} />
                    </a>
                    <button
                      className="text-button"
                      type="button"
                      onClick={() => goToBookingForCatalogTour(tour, pricing)}
                      aria-label={`Book this tour — ${tour.name}`}
                    >
                      Book this tour
                      <ArrowRight size={17} />
                    </button>
                  </div>
                  {tour.id === "trincomalee-cultural-triangle-hill-country-wildlife-5-day-tour" && (
                    <a className="text-button" href="/5-day-sri-lanka-tour">
                      Read the full 5-day tour guide
                      <ArrowRight size={17} />
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section ai-planner-promo-section">
        <div className="section__inner">
          <Reveal className="ai-planner-card">
            <div className="ai-planner-card__copy">
              <span className="ai-planner-label">NEW AI TOUR PLANNER</span>
              <h2>Not sure which route fits your trip?</h2>
              <p>Tell SKY AI your days, budget, and interests, and it drafts a private-driver route in seconds — then send it here for a custom quote.</p>
              <div className="ai-planner-badges" aria-label="AI Planner benefits">
                <span>
                  <Compass size={16} />
                  AI route planning
                </span>
                <span>
                  <Route size={16} />
                  Private driver quote
                </span>
              </div>
            </div>
            <div className="ai-planner-card__actions">
              <a
                className="button button--primary"
                href={aiPlannerUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("ai_planner_opened", { page_source: "tours-page" })}
              >
                Start AI Planner
                <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <Reveal className="booking-cta-panel tour-whatsapp-cta">
            <div>
              <span className="eyebrow">{t("tours.cta.eyebrow")}</span>
              <h2>{t("tours.cta.title")}</h2>
              <p>{t("tours.cta.text")}</p>
            </div>
            <div className="cta-actions">
              <a
                className="button button--primary"
                href={buildWhatsAppLink(customTourMessage)}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={19} />
                {t("common.customizeOnWhatsApp")}
              </a>
              <button className="button button--light" type="button" onClick={() => setPage("booking")}>
                {t("common.bookingForm")}
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
