import { ArrowRight, Car, MessageCircle, Sparkles, UserCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import RelatedRoutes from "../components/RelatedRoutes";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findDestination } from "../data/destinations";
import { roundTourPackages, tourIncludes, notIncluded } from "./RoundTours";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { setBookingContext } from "../utils/bookingContext";
import { trackEvent } from "../utils/analytics";

// Real, existing catalog entry (see RoundTours.jsx / tours.js /
// pricing.js) — this page re-presents it with duration-specific framing
// and decision context, it does not invent a second 5-day product.
const tour = roundTourPackages.find((item) => item.id === "trincomalee-cultural-triangle-hill-country-wildlife-5-day-tour");

const whoFor = [
  "First-time visitors who want to see both coast and hill country without rushing",
  "Travelers who want a cultural triangle stop (Sigiriya, Dambulla) alongside hill country and a wildlife safari",
  "Couples or families who want one continuous private-driver trip instead of booking separate day tours",
];

const destinationIds = ["trincomalee", "sigiriya", "kandy", "nuwara-eliya", "ella"];

function fiveDayTourMessage() {
  return "Hello SKY Taxi Service & Tours, I want to book the 5-Day Trincomalee, Cultural Triangle, Hill Country & Wildlife tour. Travel dates: ___ Number of passengers: ___ Driver only or Driver + Guide: ___";
}

export default function FiveDaySriLankaTour({ setPage }) {
  const requestTour = () => {
    trackEvent("tour_clicked", { tour_name: tour.title, page_source: "5-day-tour-page" });
    setBookingContext({ tripType: "Round tour", message: `${tour.title} (${tour.price})`, source: "5-day-tour-page", tourId: tour.id });
    trackEvent("booking_started", { source: "5-day-tour-page" });
    setPage("booking");
  };

  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "5-day-tour-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "5-day-tour-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="5-Day Sri Lanka Tour"
        title="5-Day Sri Lanka Tour: Trincomalee, Cultural Triangle, Hill Country & Wildlife"
        description="A real, priced 5-day private tour covering the east coast, ancient cities, hill country, and a wildlife safari — with a private driver, or a driver plus a specialist guide, for the whole trip."
        image={images.blueBeach}
        alt="Blue beach in Sri Lanka, start of the 5-day tour route"
      >
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
            <span className="eyebrow">Who this tour is for</span>
            <h2>5 days, one private vehicle, a real route</h2>
            <p>
              This is SKY's real 5-day round tour package — the same one listed in the tour catalog, with a confirmed starting price of{" "}
              {tour.price} for the entire private vehicle (not per person). It's built for travelers who want the east coast, the Cultural
              Triangle, hill country, and a wildlife safari in one continuous trip, without arranging separate transport for each stop.
            </p>
            <ul>
              {whoFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="colombo-airport-link-row">
              <a href="/round-tours?tour=trincomalee-cultural-triangle-hill-country-wildlife-5-day-tour">Full itinerary on Round Tours</a>
              <a href="/tours">All Tours</a>
              <a href="/driver-guide-sri-lanka">Driver + Guide explained</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            <article>
              <span>
                <Car size={20} />
              </span>
              <h3>Transportation model</h3>
              <p>One private air-conditioned vehicle and driver for all 5 days — the same driver throughout, not a new booking per stop.</p>
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
              <p>Add a specialist licensed local guide for the Cultural Triangle or Kandy stops where deeper history helps most.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Day by day" title="The real 5-day route" text={tour.summary} align="left" />
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

      <section className="section">
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

      <section className="section section--soft">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <div>
              <span className="eyebrow">Ready to plan this trip?</span>
              <h2>Request the 5-day tour, or ask SKY AI to adjust it</h2>
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
            <a className="text-button" href={buildWhatsAppLink(fiveDayTourMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={16} />
              Or ask on WhatsApp directly
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="5-day tour FAQ"
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
            <article className="faq-item">
              <h3>Is a guide included?</h3>
              <div>
                <p>
                  Not by default. Your driver handles transportation, timing, and route knowledge. A specialist licensed local guide can be
                  arranged separately for the Cultural Triangle or Kandy stops — see Driver + Guide.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Where this route goes" title="Real destinations on this route" align="left" />
          <div className="destination-showcase-grid">
            {destinationIds.map((id) => {
              const destination = findDestination(id);
              if (!destination?.image) return null;
              return (
                <a
                  className="reveal destination-showcase-card"
                  href={destination.seoSlug || "/destinations"}
                  key={id}
                  onClick={() => trackEvent("destination_clicked", { destination: destination.name, page_source: "5-day-tour-page" })}
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

      <RelatedRoutes
        destinationId="kandy"
        eyebrow="Airport transportation"
        title="Airport routes to stops on this tour"
        text="Real Colombo Airport routes to destinations this 5-day tour visits, if you want to start or extend your trip independently."
        pageSource="5-day-tour-page"
      />
    </div>
  );
}
