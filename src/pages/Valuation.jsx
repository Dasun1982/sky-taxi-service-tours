import {
  Bot,
  Brain,
  CheckCircle2,
  Compass,
  FileText,
  GitBranch,
  Layers3,
  MapPinned,
  MessageCircle,
  Plane,
  Play,
  Route,
  Search,
  ServerCog,
  Sparkles,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { trackAcquisitionCta } from "../utils/analytics";

const acquisitionPdfUrl = "/sky-ai-traveltech-acquisition-overview.pdf";
const platformDemoUrl = "https://youtu.be/jmPyGNbCKk4";
const pageSource = "valuation";

const workflowNodes = [
  {
    title: "Traveler Input",
    text: "Traveler shares destinations, dates, trip style, and planning preferences.",
  },
  {
    title: "Destination Logic",
    text: "System organizes Sri Lanka places into useful regional travel patterns.",
  },
  {
    title: "Route Planning",
    text: "Route-aware logic balances transfer timing, sequencing, and movement flow.",
  },
  {
    title: "Itinerary Structuring",
    text: "Daily travel flow is shaped into clear, practical itinerary structure.",
  },
  {
    title: "Inquiry Handoff",
    text: "Planning context becomes easier to send into private-driver conversations.",
  },
];

const tourismIntentItems = [
  {
    title: "Airport transfer demand",
    text: "Airport pickups create clear traveler intent around routes, timing, luggage, destinations, and private-driver needs.",
    icon: Plane,
  },
  {
    title: "Route-specific tourism intent",
    text: "Destination pages align with searches such as airport-to-Ella, Galle transfers, Kandy routes, and island-wide taxi planning.",
    icon: Route,
  },
  {
    title: "Multi-destination discovery",
    text: "Travelers compare beaches, hill country, culture, wildlife, and airport routes before forming a private-driver plan.",
    icon: Search,
  },
  {
    title: "Day-tour planning",
    text: "Short-trip planning creates structured demand for places, timing, route order, driver support, and quote preparation.",
    icon: Compass,
  },
  {
    title: "Quote-ready traveler workflows",
    text: "The platform guides planning behavior toward cleaner route context and practical inquiry details.",
    icon: MessageCircle,
  },
];

const routeLogicItems = [
  {
    title: "Transfer timing awareness",
    text: "Planning flows account for private-driver movement, airport timing, and long-distance route duration.",
    icon: Route,
  },
  {
    title: "Regional destination clustering",
    text: "Sri Lanka places are grouped by realistic travel regions instead of generic attraction lists.",
    icon: MapPinned,
  },
  {
    title: "Realistic pacing logic",
    text: "The system supports practical day-by-day movement with space for transfer time and destination depth.",
    icon: Layers3,
  },
  {
    title: "Route sequencing",
    text: "Trip planning can follow natural movement patterns across airport, coast, hill country, culture, and safari routes.",
    icon: GitBranch,
  },
  {
    title: "Practical movement planning",
    text: "The infrastructure is oriented around traveler movement, not abstract itinerary inspiration.",
    icon: Compass,
  },
];

const conversionItems = [
  {
    title: "Inquiry preparation",
    text: "Travel ideas are shaped into details a driver or operator can evaluate quickly.",
    icon: CheckCircle2,
  },
  {
    title: "Traveler detail collection",
    text: "Planning flows encourage clear dates, people, destinations, pickup points, and trip preferences.",
    icon: MessageCircle,
  },
  {
    title: "Quote-ready planning context",
    text: "Route and itinerary context helps reduce vague requests and improves operational clarity.",
    icon: Route,
  },
  {
    title: "WhatsApp conversion workflows",
    text: "The platform supports a practical handoff channel already familiar to Sri Lanka tourism operators.",
    icon: Bot,
  },
  {
    title: "Operator handoff structure",
    text: "Private-driver conversations can start with cleaner route, timing, and traveler context.",
    icon: Layers3,
  },
];

const genericItems = ["Open-ended prompts", "No route intelligence", "No tourism structure", "Generic outputs", "Weak operational flow"];

const structuredItems = [
  "Route-aware workflows",
  "Tourism-specific planning logic",
  "Conversion-oriented outputs",
  "Structured itinerary systems",
  "Regional travel intelligence",
];

const expansionItems = [
  {
    title: "Bali",
    text: "Adapt route-led planning to airport transfers, villas, beaches, temples, and private-driver circuits.",
    icon: MapPinned,
  },
  {
    title: "Thailand",
    text: "Extend workflows across islands, city transfers, beach routes, and multi-stop tourism planning.",
    icon: Route,
  },
  {
    title: "Vietnam",
    text: "Support north-to-south itinerary planning, city-to-city movement, and regional travel sequencing.",
    icon: Compass,
  },
  {
    title: "Maldives",
    text: "Apply inquiry structure to resort transfers, arrival planning, and curated trip support.",
    icon: Sparkles,
  },
  {
    title: "Regional private-driver tourism",
    text: "Reuse the workflow model in markets where travelers need local route clarity and operator handoff.",
    icon: GitBranch,
  },
];

const stackItems = [
  {
    title: "React",
    text: "Reusable interface foundation for fast page and component expansion.",
    icon: Layers3,
  },
  {
    title: "Next.js",
    text: "Supports modular AI planner workflows and future planning surfaces.",
    icon: ServerCog,
  },
  {
    title: "TypeScript",
    text: "Improves structure for planning data, workflow logic, and transfer-ready code.",
    icon: CheckCircle2,
  },
  {
    title: "OpenAI integration",
    text: "Enables structured itinerary generation and route-aware planning workflows.",
    icon: Brain,
  },
  {
    title: "Serverless APIs",
    text: "Keeps planning operations modular and flexible for extension.",
    icon: GitBranch,
  },
  {
    title: "Vercel deployment",
    text: "Provides deployment flexibility and transfer-ready cloud infrastructure.",
    icon: ServerCog,
  },
];

function ValuationCard({ item }) {
  const Icon = item.icon;
  return (
    <Reveal className="feature-card valuation-card">
      <span className="feature-card__icon">
        <Icon size={22} />
      </span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </Reveal>
  );
}

export default function Valuation() {
  return (
    <div className="page valuation-page">
      <PageHero
        eyebrow="STRATEGIC POSITIONING"
        title="Why this AI tourism infrastructure has long-term strategic value"
        description="The platform combines tourism intent, route-based planning, AI workflow systems, and conversion-ready travel infrastructure into one scalable acquisition asset."
        image={images.sigiriya}
        alt="Strategic AI tourism infrastructure positioning"
      >
        <div className="valuation-hero-badges" aria-label="Strategic infrastructure strengths">
          <span>Route Intelligence</span>
          <span>Tourism Infrastructure</span>
          <span>AI Workflow System</span>
        </div>
        <div className="premium-hero-actions">
          <a
            className="button button--primary"
            href="/ai-system"
            onClick={() => trackAcquisitionCta({ ctaName: "View AI System", pageSource, destination: "/ai-system" })}
          >
            <Brain size={19} />
            View AI System
          </a>
          <a
            className="button button--light"
            href="/acquire"
            onClick={() => trackAcquisitionCta({ ctaName: "View Acquisition Overview", pageSource, destination: "/acquire" })}
          >
            <Compass size={18} />
            View Acquisition Overview
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Tourism Intent Value"
            title="Built around high-intent tourism planning behavior"
            text="The infrastructure aligns with how travelers actually search, compare, and plan private-driver travel across Sri Lanka."
          />
          <div className="feature-grid">
            {tourismIntentItems.map((item) => (
              <ValuationCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Route Logic"
            title="Route-aware systems create stronger planning infrastructure"
            text="The platform is built around realistic traveler movement instead of generic AI inspiration flows."
          />
          <div className="feature-grid">
            {routeLogicItems.map((item) => (
              <ValuationCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section valuation-dark-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="AI Workflow Value"
            title="Structured AI workflows increase infrastructure value"
            text="The planning system supports modular itinerary generation, traveler adaptation, inquiry preparation, and scalable planning operations."
          />
          <Reveal className="valuation-architecture-flow" aria-label="AI workflow value architecture">
            {workflowNodes.map((node, index) => (
              <div className="valuation-architecture-step" key={node.title}>
                <article className="valuation-architecture-node">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{node.title}</h3>
                  <p>{node.text}</p>
                </article>
                {index < workflowNodes.length - 1 ? <i className="valuation-architecture-connector" aria-hidden="true" /> : null}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Conversion Infrastructure"
            title="Designed for inquiry conversion and operational handoff"
            text="The system helps transform travel exploration into clearer, more structured private-driver requests."
          />
          <div className="feature-grid">
            {conversionItems.map((item) => (
              <ValuationCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Defensibility"
            title="More than a generic AI wrapper"
            text="The value comes from combining tourism workflows, route intelligence, conversion structure, and planning systems into one integrated infrastructure layer."
          />
          <div className="valuation-comparison">
            <Reveal className="valuation-comparison-panel valuation-comparison-panel--muted">
              <span className="eyebrow">Generic AI Chatbot</span>
              <h3>Open-ended output layer</h3>
              <ul className="valuation-detail-list">
                {genericItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="valuation-comparison-panel valuation-comparison-panel--strong">
              <span className="eyebrow">Structured Tourism AI Infrastructure</span>
              <h3>Route-aware operating layer</h3>
              <ul className="valuation-detail-list">
                {structuredItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section valuation-dark-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Expansion Value"
            title="Expandable across tourism-heavy regional markets"
            text="The same route-based planning infrastructure can support additional tourism ecosystems beyond Sri Lanka."
          />
          <div className="feature-grid">
            {expansionItems.map((item) => (
              <ValuationCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Modern Infrastructure" title="Built on transferable modern infrastructure" />
          <div className="feature-grid feature-grid--six">
            {stackItems.map((item) => (
              <ValuationCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <div>
              <span className="eyebrow">Strategic Infrastructure CTA</span>
              <h2>Interested in the strategic infrastructure behind Sky AI?</h2>
              <p>Request acquisition details, architecture overview, and platform walkthrough access.</p>
            </div>
            <div className="cta-actions">
              <a
                className="button button--primary"
                href="/ai-system"
                onClick={() => trackAcquisitionCta({ ctaName: "View AI System", pageSource, destination: "/ai-system" })}
              >
                <Brain size={18} />
                View AI System
              </a>
              <a
                className="button button--light"
                href="/acquire"
                onClick={() => trackAcquisitionCta({ ctaName: "View Acquisition Overview", pageSource, destination: "/acquire" })}
              >
                <Compass size={18} />
                View Acquisition Overview
              </a>
              <a
                className="button button--light"
                href={acquisitionPdfUrl}
                target="_blank"
                rel="noreferrer"
                download
                onClick={() => trackAcquisitionCta({ ctaName: "Download Acquisition PDF", pageSource, destination: acquisitionPdfUrl })}
              >
                <FileText size={18} />
                Download Acquisition PDF
              </a>
              <a
                className="button button--light"
                href={platformDemoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackAcquisitionCta({ ctaName: "Watch Platform Demo", pageSource, destination: platformDemoUrl })}
              >
                <Play size={18} />
                Watch Platform Demo
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
