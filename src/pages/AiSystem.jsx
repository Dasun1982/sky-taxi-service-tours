import {
  Bot,
  Brain,
  CheckCircle2,
  Compass,
  GitBranch,
  Layers3,
  MapPinned,
  MessageCircle,
  Route,
  ServerCog,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { aiPlannerUrl } from "../data/business";

const intelligenceItems = [
  {
    title: "Destination clustering",
    text: "Groups Sri Lanka places by realistic travel regions, so routes can connect beaches, hill country, culture, wildlife, and airport transfers without feeling random.",
    icon: MapPinned,
  },
  {
    title: "Transfer timing awareness",
    text: "Plans around private-driver movement, airport pickups, long-distance transfers, and the time travelers actually spend between destinations.",
    icon: Route,
  },
  {
    title: "Realistic route pacing",
    text: "Balances travel days with sightseeing days so itinerary ideas stay useful for driver-supported Sri Lanka trips.",
    icon: Compass,
  },
  {
    title: "Day-by-day planning logic",
    text: "Structures trips into practical daily flows with route order, destination context, and quote-ready planning details.",
    icon: Layers3,
  },
  {
    title: "Travel flow balancing",
    text: "Connects arrival, destination movement, activity preferences, rest time, and transfer needs into one planning workflow.",
    icon: GitBranch,
  },
];

const personalizationItems = [
  {
    title: "Family adaptation",
    text: "Supports gentler pacing, cleaner transfer handoffs, luggage-aware movement, and practical family-friendly route choices.",
    icon: Users,
  },
  {
    title: "Couple itinerary logic",
    text: "Prioritizes scenic routes, relaxed beach and hill country flow, flexible stops, and private-driver comfort.",
    icon: Sparkles,
  },
  {
    title: "Solo traveler flow",
    text: "Creates simple route structures that reduce planning friction while keeping airport and destination movement clear.",
    icon: Compass,
  },
  {
    title: "Budget-aware planning",
    text: "Shapes route ideas around fair-price travel, realistic transfer needs, and practical private-driver planning constraints.",
    icon: Wallet,
  },
  {
    title: "Preference systems",
    text: "Works with beach, culture, wildlife, hill country, city, surf, and round-tour travel preferences.",
    icon: Brain,
  },
];

const workflowSteps = [
  "Traveler Input",
  "AI Planning Engine",
  "Route Optimization",
  "Itinerary Structuring",
  "WhatsApp Conversion Flow",
];

const architectureNodes = [
  {
    title: "Traveler Input",
    text: "Traveler provides destinations, trip length, traveler type, and preferences.",
  },
  {
    title: "Route Intelligence",
    text: "System analyzes Sri Lanka destination clusters, transfer paths, and regional travel patterns.",
  },
  {
    title: "AI Planning Logic",
    text: "Applies route-aware tourism workflows and practical travel constraints.",
  },
  {
    title: "Itinerary Structuring",
    text: "Builds day-by-day travel flow with pacing and destination sequencing.",
  },
  {
    title: "WhatsApp Inquiry Handoff",
    text: "Produces quote-ready planning context for private-driver conversations.",
  },
];

const differenceItems = [
  "Structured tourism workflows instead of open-ended chat prompts",
  "Sri Lanka-specific travel intelligence and destination logic",
  "Route-aware planning for private-driver movement",
  "Transfer-aware logic for airport pickups and long-distance routes",
  "Conversion-oriented itinerary generation for quote-ready requests",
  "Practical trip planning instead of generic inspiration",
];

const leadItems = [
  {
    title: "Itinerary generation",
    text: "Turns traveler intent into structured route ideas that can be reviewed, adjusted, and sent for a private-driver quote.",
    icon: Bot,
  },
  {
    title: "Lead capture potential",
    text: "Moves travelers from early planning into clear inquiry data such as dates, people, destinations, budget, and pickup needs.",
    icon: MessageCircle,
  },
  {
    title: "WhatsApp inquiry handoff",
    text: "Keeps the final conversion flow practical for Sri Lanka travel operators who already close custom quotes through WhatsApp.",
    icon: Route,
  },
  {
    title: "Quote-ready requests",
    text: "Produces clearer planning context for driver selection, route discussion, timing, vehicle needs, and final pricing.",
    icon: CheckCircle2,
  },
];

const expansionItems = [
  "Bali route and itinerary intelligence",
  "Thailand private-driver and island transfer workflows",
  "Vietnam multi-city travel planning",
  "Maldives resort transfer and trip planning layers",
  "Regional tourism markets with route-led private travel",
];

const stackItems = [
  {
    title: "Next.js",
    text: "Supports the dedicated AI planner experience and future modular planning flows.",
    icon: ServerCog,
  },
  {
    title: "React",
    text: "Provides reusable interface patterns across the travel website and planning platform.",
    icon: Layers3,
  },
  {
    title: "TypeScript",
    text: "Supports clearer AI planner data structures and safer workflow expansion.",
    icon: CheckCircle2,
  },
  {
    title: "OpenAI integration",
    text: "Powers structured itinerary generation and travel planning workflows.",
    icon: Brain,
  },
  {
    title: "Serverless APIs",
    text: "Keeps the AI planner modular, scalable, and easier to extend.",
    icon: GitBranch,
  },
  {
    title: "Vercel deployment",
    text: "Supports fast deployment, iteration, and platform transfer readiness.",
    icon: ServerCog,
  },
];

export default function AiSystem() {
  return (
    <div className="page ai-system-page">
      <PageHero
        eyebrow="Sky AI System"
        title="AI-Powered Tourism Planning Infrastructure"
        description="The Sky AI system combines itinerary generation, Sri Lanka route intelligence, travel pacing logic, and conversion-focused tourism workflows into one scalable planning platform."
        image={images.nineArchBridge}
        alt="AI-powered Sri Lanka tourism planning infrastructure"
      >
        <div className="ai-system-hero-badges" aria-label="AI system strengths">
          <span>Route Intelligence</span>
          <span>AI Workflow System</span>
          <span>Tourism Lead Generation</span>
        </div>
        <div className="premium-hero-actions">
          <a className="button button--primary" href={aiPlannerUrl} target="_blank" rel="noreferrer">
            <Bot size={19} />
            Try AI Planner
          </a>
          <a className="button button--light" href="/acquire">
            <Compass size={18} />
            View Acquisition Page
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Tourism Intelligence Engine"
            title="Built around how travelers actually move through Sri Lanka"
            text="The system is designed for practical destination flow, transfer timing, and day-by-day private-driver planning logic."
          />
          <div className="feature-grid">
            {intelligenceItems.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal className="feature-card" key={item.title}>
                  <span className="feature-card__icon">
                    <Icon size={22} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Personalized Planning Logic"
            title="Planning flows shaped by traveler type and trip style"
            text="The AI system can adapt route ideas around who is traveling, how they prefer to move, and what kind of Sri Lanka experience they want."
          />
          <div className="feature-grid">
            {personalizationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal className="feature-card feature-card--calm" key={item.title}>
                  <span className="feature-card__icon">
                    <Icon size={22} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner split-layout ai-system-workflow-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Structured Workflow System</span>
            <h2>From traveler input to quote-ready handoff</h2>
            <p>
              The AI system is designed around practical travel planning workflows. Instead of only generating inspiration, it helps structure route
              intent, daily movement, and the details needed for a useful WhatsApp inquiry.
            </p>
          </Reveal>
          <Reveal className="ai-system-workflow">
            {workflowSteps.map((step, index) => (
              <div className="ai-system-workflow__step" key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--soft ai-system-architecture-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Operational Architecture"
            title="How the AI planning system operates"
            text="The planning infrastructure combines traveler intent, regional route logic, itinerary structuring, and inquiry generation into one operational workflow."
          />
          <Reveal className="ai-system-architecture-flow" aria-label="AI planning system operating workflow">
            {architectureNodes.map((node, index) => (
              <div className="ai-system-architecture-step" key={node.title}>
                <article className="ai-system-architecture-node">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{node.title}</h3>
                  <p>{node.text}</p>
                </article>
                {index < architectureNodes.length - 1 ? <i className="ai-system-architecture-connector" aria-hidden="true" /> : null}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner split-layout ai-system-difference-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Why This Is Different</span>
            <h2>Not a generic chatbot</h2>
            <p>
              The Sky AI system is positioned as structured tourism workflow infrastructure. It is built around Sri Lanka-specific route intelligence,
              transfer-aware planning, and conversion-oriented itinerary generation.
            </p>
          </Reveal>
          <Reveal className="feature-card ai-system-proof-card">
            <span className="feature-card__icon">
              <Brain size={22} />
            </span>
            <h3>Structured tourism logic</h3>
            <ul className="ai-system-detail-list">
              {differenceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Lead Generation Architecture"
            title="Designed for tourism inquiry conversion"
            text="The planning system helps turn route exploration into clearer WhatsApp requests that can support custom private-driver quotes."
          />
          <div className="feature-grid feature-grid--four">
            {leadItems.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal className="feature-card" key={item.title}>
                  <span className="feature-card__icon">
                    <Icon size={22} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Expansion Potential</span>
            <h2>Scalable infrastructure for route-led tourism markets</h2>
            <p>
              The same planning model can be extended into other tourism-heavy regions where travelers need route clarity, private transfers, and
              customized itinerary support.
            </p>
          </Reveal>
          <Reveal className="feature-card">
            <span className="feature-card__icon">
              <Route size={22} />
            </span>
            <h3>Regional expansion paths</h3>
            <ul className="ai-system-detail-list">
              {expansionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Technical Stack"
            title="Modular AI infrastructure"
            text="The platform uses a practical modern stack for AI workflow deployment, route logic expansion, and product transfer readiness."
          />
          <div className="feature-grid feature-grid--six">
            {stackItems.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal className="feature-card feature-card--calm" key={item.title}>
                  <span className="feature-card__icon">
                    <Icon size={22} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <div>
              <span className="eyebrow">AI Infrastructure CTA</span>
              <h2>Interested in the AI planning infrastructure?</h2>
              <p>Request acquisition details, technical overview, and product walkthrough access.</p>
            </div>
            <div className="cta-actions">
              <a className="button button--primary" href="/acquire">
                <Compass size={18} />
                View Acquisition Page
              </a>
              <a className="button button--light" href={aiPlannerUrl} target="_blank" rel="noreferrer">
                <Bot size={18} />
                Try AI Planner
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
