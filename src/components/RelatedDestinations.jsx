import SectionHeader from "./SectionHeader";
import { findRelatedDestinations } from "../data/destinations";

/**
 * MILESTONE 3 — first UI consumer of the destination data architecture
 * (src/data/destinations.js). Shows destinations already marked as related
 * to `destinationId` in the data layer — never invents a relationship.
 *
 * Reuses the existing `.destination-showcase-card` styling (already used on
 * the homepage for destinationShowcase) so this looks native to the site
 * with zero new card CSS. Only destinations with a verified existing image
 * are shown, since that card style is image-forward by design — a
 * text-only degraded version of the same card would look like a visual
 * bug sitting next to full-image cards, so those destinations are simply
 * left out of this component rather than rendered with an invented photo.
 *
 * Also requires a real `seoSlug` — some related destinations (e.g. Dambulla,
 * reached from Kandy) have a verified image but no dedicated page yet, and
 * a card with no working link would be a broken-link regression.
 */
export default function RelatedDestinations({ destinationId, eyebrow = "Explore nearby", title, text, soft = true }) {
  const related = findRelatedDestinations(destinationId).filter(
    (destination) => destination.image && destination.seoSlug,
  );

  if (!related.length) return null;

  return (
    <section className={`section${soft ? " section--soft" : ""} related-destinations-section`}>
      <div className="section__inner">
        <SectionHeader
          eyebrow={eyebrow}
          title={title || "Nearby destinations"}
          text={text || "Popular places nearby, with the same private driver support."}
        />
        <div className="related-destinations-grid">
          {related.map((destination) => (
            <a
              className="reveal destination-showcase-card"
              href={destination.seoSlug}
              aria-label={`Explore ${destination.name}`}
              key={destination.id}
            >
              <img src={destination.image} alt={destination.alt} loading="lazy" />
              <div>
                {destination.region && <span>{destination.region}</span>}
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
