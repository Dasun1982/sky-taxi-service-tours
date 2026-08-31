import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

const rows = [
  { factor: "Scenery", train: "The hill country rail line is genuinely one of the most scenic train routes in the world.", car: "Flexible stops let you pull over for a viewpoint whenever you want, not just what the train passes." },
  { factor: "Schedule", train: "Fixed timetable — you plan your day around the train, not the other way around.", car: "No fixed timetable — pickup times and stops are agreed directly with your driver." },
  { factor: "Door-to-door", train: "Station to station only — you still need transport to and from each station.", car: "Door-to-door the whole way, no separate local transport needed." },
  { factor: "Seat availability", train: "Popular routes and seat classes can sell out, especially in peak season.", car: "No seat availability issue — the vehicle is exclusively yours." },
];

function trainMessage() {
  return "Hello SKY Taxi Service & Tours, I'm deciding between the train and a private car for part of my Sri Lanka trip. Route: ___";
}

export default function TrainVsPrivateCarSriLanka({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "train-vs-private-car-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "train-vs-private-car-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Getting around"
        title="Is Sri Lanka Better by Train or Private Car?"
        description="An honest comparison — the hill country train is genuinely scenic, but a private car solves different problems."
        image={images.trainRide}
        alt="Sri Lanka scenic train ride through hill country"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(trainMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
            <h2>Not a strict either/or — many travelers do both</h2>
            <p>
              The hill country train (particularly around Ella) is a genuinely worthwhile scenic experience many visitors specifically want to
              do once. A private car covers everything else — airport transfers, multi-stop days, and routes the train doesn't reach — with no
              fixed timetable.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.kandyTemple} alt="Temple of the Tooth in Kandy" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Side by side" title="Train vs private car" align="left" />
          <div className="colombo-airport-route-grid">
            {rows.map((row) => (
              <Reveal className="colombo-airport-route-card" key={row.factor}>
                <div>
                  <h3>{row.factor}</h3>
                  <p>
                    <strong>Train:</strong> {row.train}
                  </p>
                  <p>
                    <strong>Private car:</strong> {row.car}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="A common combination"
            title="Ride the train, let your driver meet you"
            text="SKY doesn't sell train tickets directly, but a private driver can drop you at one station and meet you at another, so you get the scenic train experience without losing door-to-door convenience for the rest of your trip."
            align="left"
          />
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Want to combine both on your trip?</h2>
          <p>Send your planned route on WhatsApp and we'll help plan around a train segment if you want one.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(trainMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("things-to-do-in-ella")}>
              Things to Do in Ella
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
