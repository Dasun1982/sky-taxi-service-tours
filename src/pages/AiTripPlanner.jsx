import { ArrowRight, Compass, MapPinned, MessageCircle, Route, Sparkles, Wallet } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

const openPlanner = () => trackEvent("ai_planner_opened", { page_source: "ai-trip-planner-page" });

const inputs = [
  { title: "Trip length", text: "How many days you have in Sri Lanka.", icon: Route },
  { title: "Interests", text: "Wildlife, beaches, hill country, culture, surfing, or a mix.", icon: Compass },
  { title: "Budget", text: "A rough travel style — budget, mid-range, or comfort.", icon: Wallet },
  { title: "Places in mind", text: "Any destinations you already know you want, like Ella or Yala.", icon: MapPinned },
];

const steps = [
  {
    title: "Tell SKY AI about your trip",
    text: "Describe your trip in your own words — how many days, what you love, and any places you already have in mind.",
  },
  {
    title: "SKY AI drafts a route",
    text: "It builds a day-by-day route across real Sri Lanka destinations, with practical transfer timing between stops.",
  },
  {
    title: "Send it to SKY for a quote",
    text: "Once the route looks right, send it to SKY Taxi Service & Tours on WhatsApp for a private-driver quote and to confirm your trip.",
  },
];

const faqs = [
  {
    question: "Is SKY AI a real, working trip planner?",
    answer: "Yes. SKY AI is a live AI trip planner at ai.skytaxisrilanka.com that generates a Sri Lanka route from what you tell it.",
  },
  {
    question: "Does the AI book my trip automatically?",
    answer:
      "No. SKY AI drafts a recommended route and itinerary. Your actual private driver, vehicle, and final price are confirmed separately by SKY Taxi Service & Tours on WhatsApp.",
  },
  {
    question: "Does the AI show real prices or availability?",
    answer:
      "The AI focuses on route and itinerary planning, not live pricing or availability. Final pricing and vehicle availability are always confirmed on WhatsApp before travel.",
  },
  {
    question: "Who is the AI trip planner for?",
    answer:
      "Anyone planning a private Sri Lanka trip who isn't sure how to sequence their days — it works well whether you already know a few destinations or are starting from scratch.",
  },
  {
    question: "Do I still need to contact SKY after using the AI planner?",
    answer:
      "Yes. The AI route is a starting point. Send it to SKY Taxi Service & Tours on WhatsApp so a real driver, vehicle, and route price can be confirmed before you travel.",
  },
];

export default function AiTripPlanner({ setPage }) {
  return (
    <div className="page ai-trip-planner-page">
      <PageHero
        eyebrow="SKY AI Trip Planner"
        title="Plan your Sri Lanka trip with SKY AI"
        description="Tell SKY AI where you want to go, how long you have, and what you love. It drafts a private-driver route across Sri Lanka in seconds, then SKY Taxi Service & Tours confirms it with a real quote."
        image={images.nineArchBridge}
        alt="Nine Arch Bridge in Ella, Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={openPlanner}>
            <Sparkles size={19} />
            Start SKY AI Trip Planner
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("tours")}>
            Browse Tours
            <ArrowRight size={18} />
          </button>
        </div>
      </PageHero>

      <section className="section">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">What SKY AI does</span>
            <h2>A route-planning assistant, not a booking guarantee</h2>
            <p>
              SKY AI is a real, live trip-planning tool built for Sri Lanka. Describe your trip in plain language and it drafts a day-by-day route across
              real destinations — wildlife, beaches, hill country, culture, or a mix — with practical transfer timing between stops.
            </p>
            <p>
              It does not show live prices or guaranteed availability. Once you have a route you like, SKY Taxi Service &amp; Tours confirms the real
              vehicle, driver, and price on WhatsApp before you travel.
            </p>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {inputs.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <span>
                    <Icon size={20} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="How it works" title="From idea to route in three steps" align="left" />
          <div className="faq-list">
            {steps.map((step, index) => (
              <article className="faq-item" key={step.title}>
                <h3>
                  {String(index + 1).padStart(2, "0")} — {step.title}
                </h3>
                <div>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <div>
              <span className="eyebrow">Ready when you are</span>
              <h2>Start planning your Sri Lanka route</h2>
              <p>Open SKY AI, describe your trip, and send the route to SKY Taxi Service &amp; Tours for a private-driver quote.</p>
            </div>
            <div className="cta-actions">
              <a className="button button--primary" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={openPlanner}>
                <Sparkles size={18} />
                Start SKY AI Trip Planner
              </a>
              <a className="button button--light" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Ask on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Or start with a guide" title="Real planning content, if you'd rather browse first" align="left" />
          <div className="colombo-airport-link-row">
            <a href="/how-many-days-in-sri-lanka">How Many Days Do You Need?</a>
            <a href="/best-places-to-visit-in-sri-lanka">Best Places to Visit</a>
            <a href="/destinations">All Destinations</a>
            <a href="/transport">Transport Options</a>
            <a href="/first-time-visitor-sri-lanka">First-Time Visitor Guide</a>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="AI trip planner FAQ" title="Common questions" text="Helpful answers before you start planning with SKY AI." />
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <div>
                  <p>{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
