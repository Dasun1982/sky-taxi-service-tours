import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { findToursByDestination, findTourPricing } from "../data/tours";

const typeLabels = {
  "day-tour": "One-day tour",
  "round-tour": "Round tour",
};

/**
 * MILESTONE 3 — second UI consumer of the tourism data architecture
 * (src/data/tours.js). Shows only tours whose own `destinations` list
 * (sourced from that tour's real itinerary in OneDayTours.jsx/RoundTours.jsx)
 * includes `destinationId`. Prices always come from pricing.js via
 * findTourPricing — never hardcoded here. Links to the existing tour page
 * rather than duplicating itinerary content in this card.
 */
export default function RelatedTours({ destinationId, eyebrow = "Plan your trip", title, text, soft = false }) {
  const tours = findToursByDestination(destinationId);

  if (!tours.length) return null;

  return (
    <section className={`section${soft ? " section--soft" : ""} related-tours-section`}>
      <div className="section__inner">
        <SectionHeader
          eyebrow={eyebrow}
          title={title || "Tours that include this area"}
          text={text || "Private tours already planned around this route — final price confirmed on WhatsApp."}
        />
        <div className="pricing-grid related-tours-grid">
          {tours.map((tour) => {
            const pricing = findTourPricing(tour.id);
            return (
              <article className="pricing-card" key={tour.id}>
                {pricing && <span className="pricing-card__label">{pricing.price}</span>}
                <h3>{tour.name}</h3>
                <p>
                  {tour.duration} &middot; {typeLabels[tour.type] || tour.type}
                </p>
                <a className="text-button" href={`/${tour.page}`}>
                  View this tour
                  <ArrowRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
