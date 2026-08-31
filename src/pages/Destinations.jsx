import { ArrowRight, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { destinations } from "../data/destinations";
import { images } from "../data/travelData";
import { buildWhatsAppLink } from "../utils/whatsapp";

const browsableDestinations = destinations.filter((destination) => destination.image && destination.seoSlug);

export default function Destinations({ setPage }) {
  return (
    <div className="page">
      <PageHero
        eyebrow="Sri Lanka Destinations"
        title="Explore Sri Lanka Destinations"
        description="Browse Sri Lanka destinations covered by SKY Taxi Service & Tours, from hill country towns to south coast beaches and the Cultural Triangle, with private taxi and tour support for each place."
        image={images.sigiriya}
        alt="Sigiriya Rock Fortress in Sri Lanka"
      >
        <a className="button button--primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
          <MessageCircle size={19} />
          Plan on WhatsApp
        </a>
      </PageHero>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="All destinations"
            title="Places SKY Taxi Service & Tours can take you"
            text="Each destination below has a dedicated taxi or tour page with real routes, vehicles, and WhatsApp booking."
          />
          <div className="related-destinations-grid">
            {browsableDestinations.map((destination) => (
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
                  <div className="destination-showcase-card__tags">
                    {destination.categories.slice(0, 3).map((category) => (
                      <span key={category}>{category}</span>
                    ))}
                  </div>
                  <span className="destination-showcase-card__explore">
                    Explore
                    <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <Reveal className="booking-cta-panel tour-whatsapp-cta">
            <div>
              <span className="eyebrow">Not sure where to start?</span>
              <h2>Tell us your dates and we will plan the route</h2>
              <p>Send your travel dates, destinations of interest, and passenger count on WhatsApp for a private route plan.</p>
            </div>
            <div className="cta-actions">
              <a className="button button--primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                <MessageCircle size={19} />
                Plan on WhatsApp
              </a>
              <button className="button button--light" type="button" onClick={() => setPage("tours")}>
                Browse Tours
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
