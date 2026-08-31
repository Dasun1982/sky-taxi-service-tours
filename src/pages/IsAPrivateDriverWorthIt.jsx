import { ArrowRight, Car, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

const comparisonRows = [
  {
    factor: "Left-hand traffic & mixed-use roads",
    selfDrive: "You adjust to unfamiliar left-hand traffic shared with tuk-tuks, buses, and pedestrians from day one.",
    privateDriver: "Your driver already knows the roads, timing, and how local traffic actually moves.",
  },
  {
    factor: "Route knowledge",
    selfDrive: "Route conditions vary a lot outside main highways — you're navigating unfamiliar roads in real time.",
    privateDriver: "A driver who already knows the practical stops, shortcuts, and timing for your route.",
  },
  {
    factor: "Flexibility mid-trip",
    selfDrive: "Possible, but you're the one adjusting the plan, reading maps, and finding parking at every stop.",
    privateDriver: "A multi-stop day can pause for a viewpoint, food stop, or change of plan without rebooking anything.",
  },
  {
    factor: "Fixed public-transport timetables",
    selfDrive: "Not applicable to self-drive, but buses/trains run on fixed schedules that don't adjust to your day.",
    privateDriver: "No fixed timetable — pickup times and stops are agreed directly with your driver.",
  },
  {
    factor: "Cost structure",
    selfDrive: "Rental cost plus fuel, and the time cost of navigating unfamiliar roads yourself.",
    privateDriver: "No fixed online price — final cost depends on route, vehicle type, and passenger count, confirmed on WhatsApp before travel.",
  },
];

function driverQuestionMessage() {
  return "Hello SKY Taxi Service & Tours, I'm deciding between self-drive and a private driver for my Sri Lanka trip. My route: ___ Travel dates: ___";
}

export default function IsAPrivateDriverWorthIt({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "private-driver-worth-it-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "private-driver-worth-it-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Trip planning"
        title="Is a Private Driver Worth It in Sri Lanka?"
        description="An honest, practical comparison — not a sales pitch — of what changes when you hire a private driver instead of self-driving or relying on public transport."
        image={images.toyotaPrius}
        alt="Toyota Prius taxi vehicle"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(driverQuestionMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
            <h2>For most visitors, yes — the main reason isn't luxury, it's logistics</h2>
            <p>
              Self-driving in Sri Lanka means adjusting to left-hand traffic and mixed-use roads shared with tuk-tuks, buses, and pedestrians, on
              routes that vary a lot in condition outside main highways. A private driver removes that learning curve and gives you someone who
              already knows the roads, timing, and practical stops — and keeps a multi-stop day flexible without needing to rebook anything if
              your plan changes.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.kandyTemple} alt="Temple of the Tooth in Kandy" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Side by side" title="Private driver vs. self-drive" align="left" />
          <div className="colombo-airport-route-grid">
            {comparisonRows.map((row) => (
              <Reveal className="colombo-airport-route-card" key={row.factor}>
                <div>
                  <h3>{row.factor}</h3>
                  <p>
                    <strong>Self-drive:</strong> {row.selfDrive}
                  </p>
                  <p>
                    <strong>Private driver:</strong> {row.privateDriver}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="What a private-driver day looks like" title="How it actually works" align="left" />
          <div className="colombo-airport-summary">
            <article>
              <span>
                <Car size={20} />
              </span>
              <h3>Pickup</h3>
              <p>A hotel or airport pickup at an agreed time — no waiting on a fixed public-transport schedule.</p>
            </article>
            <article>
              <span>
                <ShieldCheck size={20} />
              </span>
              <h3>Flexible stops</h3>
              <p>Pauses for food, photos, or a change of plan built into the day, not booked as separate trips.</p>
            </article>
            <article>
              <span>
                <MessageCircle size={20} />
              </span>
              <h3>Price confirmed on WhatsApp</h3>
              <p>No fixed online price — route, vehicle type, and passenger count are confirmed directly before travel.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="When it might not be worth it" title="Honest exceptions" align="left" />
          <p className="package-price-note">
            If your whole trip is one city with an established public transport option nearby, or you specifically want the experience of
            navigating Sri Lanka yourself, self-drive or public transport can be a reasonable choice. A private driver's main value shows up on
            multi-stop, multi-region routes — the kind most first-time Sri Lanka itineraries actually are.
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Not sure which option fits your trip?</h2>
          <p>Send your planned route on WhatsApp for a straight answer, or ask SKY AI to help think it through.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(driverQuestionMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("private-driver-sri-lanka")}>
              View Private Driver Service
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
