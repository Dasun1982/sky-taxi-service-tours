import { ArrowRight, Car, MessageCircle, Sparkles, UserCheck, Users } from "lucide-react";
import PageHero from "../PageHero";
import RelatedRoutes from "../RelatedRoutes";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { findDestination } from "../../data/destinations";
import { roundTourPackages, tourIncludes, notIncluded } from "../../pages/RoundTours";
import { durationTourPages } from "../../data/seo/durationTours";
import { aiPlannerUrl } from "../../data/business";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import { setBookingContext } from "../../utils/bookingContext";
import { trackEvent } from "../../utils/analytics";

/**
 * Shared template for duration-anchored landing pages ("2 Days in Sri
 * Lanka", "7 Days in Sri Lanka", etc.) — the same pattern the original
 * 5-day page established: re-present a REAL catalog tour from
 * RoundTours.jsx with duration-specific framing, never a second invented
 * product. Only built for durations with a real priced tour behind them
 * (see seoOpportunities.js tripLengthOpportunities for which durations
 * were deliberately skipped for having no real product).
 */
export default function DurationTourPage({ pageKey, setPage }) {
  const config = durationTourPages[pageKey];
  if (!config) return null;
  const tour = roundTourPackages.find((item) => item.id === config.tourId);
  if (!tour) return null;
  const alternate = config.alternateTourId ? roundTourPackages.find((item) => item.id === config.alternateTourId) : null;

  const requestTour = () => {
    trackEvent("tour_clicked", { tour_name: tour.title, page_source: `${pageKey}-page` });
    setBookingContext({ tripType: "Round tour", message: `${tour.title} (${tour.price})`, source: pageKey, tourId: tour.id });
    trackEvent("booking_started", { source: pageKey });
    setPage("booking");
  };

  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: `${pageKey}-page` });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: `${pageKey}-page` });

  return (
    <div className="page colombo-airport-page">
      <PageHero eyebrow={config.heroEyebrow} title={config.heroTitle} description={config.heroDescription} image={tour.image} alt={tour.alt}>
        <div className="premium-hero-actions">
          <button className="button button--primary" type="button" onClick={requestTour}>
            <MessageCircle size={19} />
            Request This Tour — {tour.price}
          </button>
          <a className="button button--light" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={openAiPlanner}>
            <Sparkles size={18} />
            Not sure? Plan with SKY AI
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Who this trip length is for</span>
            <h2>{config.whoForTitle}</h2>
            <p>
              This is SKY's real {tour.duration.toLowerCase()} round tour package — {tour.price} for the entire private vehicle, not per person.{" "}
              {config.whoForText}
            </p>
            <ul>
              {config.whoFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="colombo-airport-link-row">
              <a href={`/round-tours?tour=${tour.id}`}>Full itinerary on Round Tours</a>
              <a href="/tours">All Tours</a>
              <a href="/how-many-days-in-sri-lanka">How Many Days Do You Need?</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            <article>
              <span>
                <Car size={20} />
              </span>
              <h3>Transportation model</h3>
              <p>One private air-conditioned vehicle and driver for all {tour.duration.toLowerCase()} — the same driver throughout.</p>
            </article>
            <article>
              <span>
                <Users size={20} />
              </span>
              <h3>Driver Only</h3>
              <p>Best if you already know you want this route. Your driver handles the road, timing, and stops.</p>
            </article>
            <article>
              <span>
                <UserCheck size={20} />
              </span>
              <h3>Driver + Guide</h3>
              <p>Add a specialist licensed local guide for stops where deeper history helps most.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Day by day" title={`The real ${tour.duration.toLowerCase()} route`} text={tour.summary} align="left" />
          <ol className="one-day-timeline">
            {tour.itinerary.map((day, index) => (
              <li className="one-day-timeline__item" key={day.day} style={{ "--delay": `${index * 70}ms` }}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h4>
                    {day.day}: {day.title}
                  </h4>
                  <p>{day.stops.join(" ")}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {alternate && (
        <section className="section">
          <div className="section__inner">
            <SectionHeader eyebrow="Another real option" title={`A different ${tour.duration.toLowerCase()} route`} align="left" />
            <div className="pricing-grid related-tours-grid">
              <article className="pricing-card">
                <span className="pricing-card__label">{alternate.price}</span>
                <h3>{alternate.title}</h3>
                <p>{alternate.summary}</p>
                <a className="text-button" href={`/round-tours?tour=${alternate.id}`}>
                  View this route
                  <ArrowRight size={17} />
                </a>
              </article>
            </div>
          </div>
        </section>
      )}

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="What's included" title="Price and inclusions" text="Real inclusions from SKY's tour catalog — nothing added just for this page." align="left" />
          <div className="split-layout">
            <Reveal className="split-layout__copy">
              <h3>Included</h3>
              <ul>
                {tourIncludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="split-layout__copy">
              <h3>Not included</h3>
              <ul>
                {notIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="package-price-note">
            <p>
              Starting price: <strong>{tour.price}</strong> for the entire private vehicle, not per person. Final price is confirmed on WhatsApp
              depending on exact dates, vehicle type, hotel needs, entrance tickets, and whether a specialist guide is added.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <div>
              <span className="eyebrow">Ready to plan this trip?</span>
              <h2>Request this route, or ask SKY AI to adjust it</h2>
              <p>Request this exact route, or tell SKY AI what you'd change — fewer days, different stops, or a different pace — for a personalized version.</p>
            </div>
            <div className="cta-actions">
              <button className="button button--primary" type="button" onClick={requestTour}>
                <MessageCircle size={18} />
                Request This Tour
              </button>
              <a className="button button--light" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={openAiPlanner}>
                <Sparkles size={18} />
                Adjust with SKY AI
              </a>
            </div>
            <a className="text-button" href={buildWhatsAppLink(`Hello SKY Taxi Service & Tours, I want to book the ${tour.title}. Travel dates: ___ Number of passengers: ___ Driver only or Driver + Guide: ___`)} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={16} />
              Or ask on WhatsApp directly
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader
            eyebrow={`${tour.duration} FAQ`}
            title="Questions about this route"
            text="Answers based only on what SKY's tour catalog and pricing actually support."
          />
          <div className="faq-list">
            <article className="faq-item">
              <h3>Is {tour.price} the final price?</h3>
              <div>
                <p>
                  It's the confirmed starting price for the entire private vehicle. The final price is confirmed on WhatsApp based on your exact
                  dates, vehicle choice, hotel needs, entrance tickets, and whether you add a specialist guide.
                </p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Can I change the route or number of days?</h3>
              <div>
                <p>
                  Yes. This is one real example route — tell us your interests or send a message to SKY AI, and we can adjust stops, add or
                  remove days, or swap this for a different existing tour package.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Where this route goes" title="Real destinations on this route" align="left" />
          <div className="destination-showcase-grid">
            {config.destinationIds.map((id) => {
              const destination = findDestination(id);
              if (!destination?.image || !destination?.seoSlug) return null;
              return (
                <a
                  className="reveal destination-showcase-card"
                  href={destination.seoSlug}
                  key={id}
                  onClick={() => trackEvent("destination_clicked", { destination: destination.name, page_source: `${pageKey}-page` })}
                >
                  <img src={destination.image} alt={destination.alt} loading="lazy" />
                  <div>
                    {destination.region && <span>{destination.region}</span>}
                    <h3>{destination.name}</h3>
                    <p>{destination.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <RelatedRoutes destinationId={config.relatedRoutesDestinationId} eyebrow="Airport transportation" title="Airport routes to stops on this tour" pageSource={`${pageKey}-page`} />
    </div>
  );
}
