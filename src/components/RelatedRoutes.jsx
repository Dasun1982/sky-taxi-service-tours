import SectionHeader from "./SectionHeader";
import { findDestination } from "../data/destinations";
import { relatedRoutes, transportOptionLabels } from "../data/routes";
import { trackEvent } from "../utils/analytics";

/**
 * Shows real, already-live Colombo Airport routes related to `destinationId`
 * (via destinations.js's own relatedDestinations graph). Reuses the
 * .destination-showcase-card styling already used by RelatedDestinations.jsx
 * — no new card CSS.
 */
export default function RelatedRoutes({ destinationId, eyebrow = "Popular journeys", title, text, soft = true, pageSource }) {
  const items = relatedRoutes(destinationId)
    .map((route) => ({ route, destination: findDestination(route.destinationId) }))
    .filter((item) => item.destination?.image);

  if (!items.length) return null;

  return (
    <section className={`section${soft ? " section--soft" : ""} related-destinations-section`}>
      <div className="section__inner">
        <SectionHeader
          eyebrow={eyebrow}
          title={title || "Other airport routes nearby"}
          text={text || "Real Colombo Airport transfer routes to nearby destinations, with the same private driver support."}
        />
        <div className="related-destinations-grid">
          {items.map(({ route, destination }) => (
            <a
              className="reveal destination-showcase-card"
              href={`/${route.slug}`}
              aria-label={`Colombo Airport to ${route.destinationName}`}
              key={route.slug}
              onClick={() => trackEvent("destination_clicked", { destination: route.destinationName, page_source: pageSource || "related-routes" })}
            >
              <img src={destination.image} alt={destination.alt} loading="lazy" />
              <div>
                <span>{route.travelTime}</span>
                <h3>Airport to {route.destinationName}</h3>
                <p>{route.transportOptions.map((option) => transportOptionLabels[option]).join(" · ")}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
