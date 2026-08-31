import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

const rows = [
  { factor: "Who drives", rental: "You do, adjusting to left-hand traffic and mixed-use roads from day one.", driver: "A local driver who already knows the roads, timing, and practical stops." },
  { factor: "Route knowledge", rental: "You navigate unfamiliar roads in real time, especially outside main highways.", driver: "Route knowledge is already built in — no wrong turns to plan around." },
  { factor: "Flexibility mid-trip", rental: "Possible, but you handle every parking spot, map check, and adjustment yourself.", driver: "A multi-stop day can pause for a viewpoint or change of plan without rebooking anything." },
  { factor: "Fatigue over a long trip", rental: "Driving fatigue adds up on longer multi-day routes.", driver: "You can rest, read, or enjoy the scenery — someone else is driving." },
  { factor: "Cost structure", rental: "Rental cost plus fuel, and the time cost of navigating unfamiliar roads yourself.", driver: "No fixed online price — final cost depends on route, vehicle type, and passenger count, confirmed on WhatsApp." },
];

function rentalMessage() {
  return "Hello SKY Taxi Service & Tours, I'm deciding between a rental car and a private driver for my Sri Lanka trip. My route: ___ Travel dates: ___";
}

export default function PrivateDriverVsRentalCar({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "private-driver-vs-rental-car-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "private-driver-vs-rental-car-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Getting around"
        title="Private Driver vs Rental Car"
        description="A direct, practical comparison for travelers deciding how to get around Sri Lanka — not a sales pitch for either option."
        image={images.toyotaPrius}
        alt="Toyota Prius taxi vehicle"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(rentalMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
        <div className="section__inner">
          <SectionHeader eyebrow="Side by side" title="Rental car vs private driver" align="left" />
          <div className="colombo-airport-route-grid">
            {rows.map((row) => (
              <Reveal className="colombo-airport-route-card" key={row.factor}>
                <div>
                  <h3>{row.factor}</h3>
                  <p>
                    <strong>Rental car:</strong> {row.rental}
                  </p>
                  <p>
                    <strong>Private driver:</strong> {row.driver}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Honest exceptions" title="When a rental car might make sense" align="left" text="If your entire trip is a single town with no plans to travel further, or you specifically want the experience of self-driving Sri Lanka's roads, a rental can be a reasonable choice. A private driver's value is clearest on multi-stop, multi-region routes — the kind most first-time Sri Lanka itineraries actually are." />
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Still deciding?</h2>
          <p>Send your planned route on WhatsApp, or read the fuller breakdown on whether a private driver is worth it.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(rentalMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("is-a-private-driver-worth-it")}>
              Is a Private Driver Worth It?
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
