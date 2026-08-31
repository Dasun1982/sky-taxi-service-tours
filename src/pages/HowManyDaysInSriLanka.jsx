import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { tours, findTourPricing } from "../data/tours";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

const typeLabels = {
  "day-tour": "One-day tour",
  "round-tour": "Round tour",
};

// Real, existing catalog entries (tours.js) grouped by duration — this page
// answers "how many days" by showing what SKY actually has as a bookable,
// priced route at each length, not an invented itinerary per number.
const durationGroups = [
  { label: "1 Day", tourIds: ["ella-one-day-trip", "sinharaja-one-day-trip", "kandy-one-day-trip", "colombo-one-day-trip"], summary: "Enough for one focused destination — a single city, temple route, or nature reserve, with the same private driver all day." },
  { label: "2 Days", tourIds: ["ella-2-day-tour", "kandy-nuwara-eliya-ella-2-day-tour"], summary: "Enough for the hill country alone, or one overnight stop paired with a nearby town.", dedicatedPage: "2-days-in-sri-lanka" },
  { label: "3 Days", tourIds: ["sigiriya-kandy-nuwara-eliya-ella-3-day-tour"], summary: "Enough to add the Cultural Triangle (Sigiriya, Dambulla) to a hill country route without rushing between stops.", dedicatedPage: "3-days-in-sri-lanka" },
  { label: "5 Days", tourIds: ["trincomalee-cultural-triangle-hill-country-wildlife-5-day-tour"], summary: "Enough to combine the east coast, Cultural Triangle, hill country, and a wildlife safari in one continuous trip.", dedicatedPage: "5-day-sri-lanka-tour" },
  { label: "7 Days", tourIds: ["cultural-heritage-hill-country-wildlife-7-day-tour"], summary: "Enough to add the ancient cities of Polonnaruwa and Anuradhapura to a 5-day-style route, with more time at each stop.", dedicatedPage: "7-days-in-sri-lanka" },
  { label: "10 Days", tourIds: ["north-east-cultural-heritage-hill-country-wildlife-10-day-tour"], summary: "Enough to cover the north (Jaffna), east coast, hill country, wildlife, and south coast — close to a full-island route.", dedicatedPage: "10-days-in-sri-lanka" },
];

function planningMessage() {
  return "Hello SKY Taxi Service & Tours, I'm planning a Sri Lanka trip and not sure how many days to spend. My rough travel dates: ___ Places I'm interested in: ___";
}

export default function HowManyDaysInSriLanka({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "how-many-days-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "how-many-days-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Trip planning"
        title="How Many Days Do You Need in Sri Lanka?"
        description="A practical answer based on SKY's real, priced private-tour routes — from a single focused day to a 10-day route across the island — not a generic guess."
        image={images.sigiriya}
        alt="Sigiriya Rock Fortress in Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(planningMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
            <MessageCircle size={19} />
            Ask on WhatsApp
          </a>
          <a className="button button--light" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={openAiPlanner}>
            <Sparkles size={18} />
            Plan with SKY AI
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Short answer</span>
            <h2>It depends on how many regions you want, not a fixed number</h2>
            <p>
              There's no single right length for a Sri Lanka trip. The honest way to answer it is by region: the hill country alone takes 2 to 3
              days, adding the Cultural Triangle takes 3 to 5, and covering the north, east, hill country, wildlife, and south coast in one route
              takes closer to 10. Below are the actual trip lengths SKY currently runs as real, priced routes — not a theoretical list.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.trainRide} alt="Sri Lanka scenic train ride through hill country" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Real durations" title="What each trip length actually covers" align="left" />
          <div className="pricing-grid related-tours-grid">
            {durationGroups.map((group) => {
              const firstTour = tours.find((item) => item.id === group.tourIds[0]);
              const catalogPage = firstTour?.type === "day-tour" ? "one-day-tours" : "round-tours";
              return (
                <article className="pricing-card" key={group.label}>
                  <span className="pricing-card__label">{group.label}</span>
                  <h3>{group.summary}</h3>
                  <ul>
                    {group.tourIds.map((id) => {
                      const tour = tours.find((item) => item.id === id);
                      const pricing = findTourPricing(id);
                      if (!tour) return null;
                      return (
                        <li key={id}>
                          {tour.name}
                          {pricing && ` — ${pricing.price}`}
                        </li>
                      );
                    })}
                  </ul>
                  <button className="text-button" type="button" onClick={() => setPage(group.dedicatedPage || catalogPage)}>
                    {group.dedicatedPage ? `View the ${group.label} route` : typeLabels[firstTour?.type] === "One-day tour" ? "View one-day tours" : "View round tours"}
                    <ArrowRight size={16} />
                  </button>
                </article>
              );
            })}
          </div>
          <p className="package-price-note">
            Prices shown are for the entire private vehicle, not per person. Final price is confirmed on WhatsApp based on exact dates, vehicle
            type, and any changes to the route.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Still deciding"
            title="No trip length here fits exactly?"
            text="These are real starting itineraries, not the only options — days, stops, and pace can all be adjusted."
            align="left"
          />
          <div className="faq-list">
            <article className="faq-item">
              <h3>Can I combine or shorten these routes?</h3>
              <div>
                <p>
                  Yes. Every route above is a real starting point. Send your interests and available dates on WhatsApp, or describe your trip to
                  SKY AI, and days or stops can be added, removed, or reordered.
                </p>
              </div>
            </article>
            <article className="faq-item">
              <h3>What if I only have a weekend?</h3>
              <div>
                <p>
                  A single focused day trip (Ella, Kandy, Sinharaja, or Colombo) is realistic for a short stay near one region — see the 1-day
                  options above rather than trying to combine multiple regions in too little time.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Tell us your dates and we'll suggest a real route</h2>
          <p>Send how many days you have and what interests you on WhatsApp, or start with SKY AI for a draft itinerary.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(planningMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("tours")}>
              Browse All Tours
              <ArrowRight size={18} />
            </button>
            <button className="button button--light" type="button" onClick={() => setPage("first-time-visitor-sri-lanka")}>
              First-Time Visitor Guide
            </button>
            <button className="button button--light" type="button" onClick={() => setPage("ai-trip-planner")}>
              How SKY AI Planning Works
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
