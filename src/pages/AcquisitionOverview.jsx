import {
  BarChart3,
  Bot,
  Brain,
  CheckCircle2,
  Code2,
  Compass,
  FileText,
  GitBranch,
  Globe2,
  Layers3,
  Mail,
  MapPinned,
  MessageCircle,
  Route,
  Search,
  ServerCog,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Reveal from "../components/Reveal";

const contactEmail = "dasunpunsiri@gmail.com";

const tags = ["AI TravelTech", "Tourism Infrastructure", "Route Intelligence", "Lead Generation"];

const platformAssets = [
  { title: "Main tourism website", icon: Globe2 },
  { title: "AI itinerary planner", icon: Bot },
  { title: "Route intelligence logic", icon: Route },
  { title: "WhatsApp conversion flow", icon: MessageCircle },
  { title: "SEO architecture", icon: Search },
  { title: "Mobile-first UI", icon: Smartphone },
  { title: "Vercel deployment", icon: ServerCog },
  { title: "Brand/domain assets", icon: Sparkles },
];

const livePlatforms = [
  {
    title: "Main tourism platform",
    url: "https://skytaxisrilanka.com",
    text: "Production deployment for the live tourism website, mobile-ready UX, SEO infrastructure, and real tourism business integration.",
    icon: Globe2,
  },
  {
    title: "AI planning platform",
    url: "https://ai.skytaxisrilanka.com",
    text: "Live AI planning infrastructure for itinerary generation, route-aware planning, and tourism inquiry preparation.",
    icon: Bot,
  },
];

const aiSystemItems = [
  "GPT-powered itinerary generation",
  "Tourism-specific prompt architecture",
  "Route optimization logic",
  "Travel pacing",
  "Mood/vibe itinerary intelligence",
  "Food/cafe recommendation logic",
  "Stay-area recommendations",
  "WhatsApp itinerary summaries",
];

const defensibilityItems = [
  {
    title: "Tourism workflow architecture",
    text: "Custom tourism planning flows built specifically for Sri Lanka travel behavior, transportation logic, and route sequencing.",
    icon: Compass,
  },
  {
    title: "AI itinerary intelligence",
    text: "Structured AI prompt systems for itinerary generation, travel pacing, and tourism recommendation logic.",
    icon: Brain,
  },
  {
    title: "SEO clustering system",
    text: "Route-aware tourism SEO architecture designed for scalable destination and travel-intent expansion.",
    icon: Search,
  },
  {
    title: "WhatsApp conversion funnel",
    text: "Integrated tourism inquiry workflows designed to convert travel intent into private-driver and tour leads.",
    icon: MessageCircle,
  },
  {
    title: "Production-ready deployment",
    text: "Live deployment architecture already configured with responsive UI systems and scalable frontend infrastructure.",
    icon: ServerCog,
  },
  {
    title: "Tourism-specific UX",
    text: "User experience designed specifically around real traveler planning behavior instead of generic chatbot interactions.",
    icon: Smartphone,
  },
];

const seoItems = [
  "Route-based tourism SEO",
  "Destination page architecture",
  "Schema systems",
  "Internal linking",
  "Topical authority",
  "Sitemap and robots setup",
  "Google Search Console / Analytics readiness",
];

const includedItems = [
  "Domain",
  "Main website",
  "AI planner",
  "Frontend source code",
  "Backend/API code",
  "OpenAI integration setup",
  "OpenRouteService integration",
  "Deployment configuration",
  "Branding assets",
  "Prompt architecture",
  "Tourism workflow logic",
  "Documentation",
];

const stackItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "React/Vite",
  "Vercel",
  "OpenAI API",
  "OpenStreetMap",
  "Leaflet",
  "OpenRouteService",
];

const expansionItems = [
  { title: "PDF itinerary exports", icon: FileText },
  { title: "WhatsApp automation", icon: MessageCircle },
  { title: "Tourism CRM", icon: BarChart3 },
  { title: "Hotel integrations", icon: Layers3 },
  { title: "Dynamic pricing", icon: GitBranch },
  { title: "Multilingual SEO", icon: Globe2 },
  { title: "Regional expansion", icon: MapPinned },
  { title: "White-label tourism SaaS", icon: Code2 },
];

const buyerFitItems = [
  {
    title: "TravelTech startups",
    text: "A fast path to Sri Lanka-focused AI planning infrastructure without starting from a blank product surface.",
    icon: Bot,
  },
  {
    title: "Tourism companies",
    text: "Useful for operators that want a stronger digital funnel around airport transfers, private drivers, and custom tours.",
    icon: Globe2,
  },
  {
    title: "SEO operators",
    text: "A route and destination content structure that can be expanded into broader tourism search demand.",
    icon: Search,
  },
  {
    title: "AI product studios",
    text: "A live vertical AI workflow system with practical travel logic rather than a generic chatbot wrapper.",
    icon: Code2,
  },
  {
    title: "Lead-generation businesses",
    text: "A tourism-intent funnel designed to turn planning activity into quote-ready WhatsApp inquiries.",
    icon: BarChart3,
  },
  {
    title: "Micro private equity buyers",
    text: "An early-stage digital asset with product, brand, deployment, and expansion paths already organized.",
    icon: Layers3,
  },
  {
    title: "Tourism SaaS founders",
    text: "A focused foundation for building itinerary exports, CRM features, driver workflows, or white-label travel tools.",
    icon: Sparkles,
  },
  {
    title: "Regional travel operators",
    text: "A model that can be adapted beyond Sri Lanka into nearby tourism markets with similar route-planning needs.",
    icon: MapPinned,
  },
];

const funnelSteps = ["Traveler intent", "AI itinerary generation", "Route planning", "WhatsApp inquiry", "Private-driver/tour lead"];

function OverviewCard({ title, icon: Icon }) {
  return (
    <article className="acquisition-overview-card">
      <span>
        <Icon size={20} />
      </span>
      <strong>{title}</strong>
    </article>
  );
}

function LivePlatformCard({ item }) {
  const Icon = item.icon;
  return (
    <Reveal className="acquisition-overview-live-card">
      <span>
        <Icon size={21} />
      </span>
      <div>
        <strong>{item.title}</strong>
        <a href={item.url} target="_blank" rel="noreferrer">
          {item.url}
        </a>
        <p>{item.text}</p>
      </div>
    </Reveal>
  );
}

function StrategicCard({ item }) {
  const Icon = item.icon;
  return (
    <Reveal className="acquisition-overview-strategy-card">
      <span>
        <Icon size={20} />
      </span>
      <div>
        <strong>{item.title}</strong>
        <p>{item.text}</p>
      </div>
    </Reveal>
  );
}

function OverviewList({ items }) {
  return (
    <ul className="acquisition-overview-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function AcquisitionOverview() {
  return (
    <div className="page acquisition-overview-page">
      <section className="acquisition-overview-cover">
        <div className="acquisition-overview-confidential">
          <strong>CONFIDENTIAL</strong>
          <span>Private Acquisition Overview</span>
        </div>
        <div className="acquisition-overview-cover__content">
          <span className="eyebrow">Buyer Overview</span>
          <h1>Sky AI TravelTech Platform</h1>
          <p>AI-Powered Sri Lanka Travel Planning & Tourism Lead Generation Infrastructure</p>
          <div className="acquisition-overview-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="acquisition-overview-contact">
            <strong>Dihen Dewhan</strong>
            <span>Solo Technical Founder</span>
            <span>Operational tourism business: SKY Taxi Service & Tours Sri Lanka</span>
            <span>Business operations contact: Dasun Punsiri</span>
            <a href={`mailto:${contactEmail}?subject=Sky%20AI%20TravelTech%20Acquisition%20Overview`}>
              <Mail size={18} />
              {contactEmail}
            </a>
          </div>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--light">
        <div className="acquisition-overview-inner acquisition-overview-split">
          <Reveal>
            <span className="eyebrow">Executive Summary</span>
            <h2>AI tourism workflow infrastructure, not a basic taxi website</h2>
          </Reveal>
          <Reveal>
            <p>
              Sky AI TravelTech is an early-stage AI tourism infrastructure platform combining AI itinerary generation, route intelligence, tourism SEO
              architecture, mobile-first UX, and WhatsApp inquiry conversion.
            </p>
            <p>
              The platform is positioned as AI-powered tourism workflow infrastructure: a system that helps travelers plan routes, structure itineraries,
              and move toward clearer private-driver and tour inquiries.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--soft">
        <div className="acquisition-overview-inner">
          <div className="acquisition-overview-heading">
            <span className="eyebrow">Live Platform Infrastructure</span>
            <h2>Production systems available for buyer review</h2>
          </div>
          <div className="acquisition-overview-live-grid">
            {livePlatforms.map((item) => (
              <LivePlatformCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--soft">
        <div className="acquisition-overview-inner">
          <div className="acquisition-overview-heading">
            <span className="eyebrow">Platform Assets</span>
            <h2>Core assets included in the acquisition package</h2>
          </div>
          <div className="acquisition-overview-card-grid">
            {platformAssets.map((item) => (
              <OverviewCard title={item.title} icon={item.icon} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--dark">
        <div className="acquisition-overview-inner acquisition-overview-split">
          <Reveal>
            <span className="eyebrow">AI System</span>
            <h2>Structured itinerary intelligence for tourism planning</h2>
            <p>
              The AI planner is built around practical Sri Lanka travel workflows: route order, pacing, traveler preferences, itinerary summaries, and
              inquiry-ready output.
            </p>
          </Reveal>
          <Reveal className="acquisition-overview-panel">
            <OverviewList items={aiSystemItems} />
          </Reveal>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--soft">
        <div className="acquisition-overview-inner">
          <div className="acquisition-overview-heading">
            <span className="eyebrow">DEFENSIBILITY</span>
            <h2>Why this platform is difficult to replicate</h2>
            <p>
              The platform combines tourism workflow design, AI itinerary logic, conversion-focused UX, and scalable SEO infrastructure into a unified
              tourism intelligence system.
            </p>
          </div>
          <div className="acquisition-overview-strategy-grid">
            {defensibilityItems.map((item) => (
              <StrategicCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--light">
        <div className="acquisition-overview-inner acquisition-overview-split">
          <Reveal>
            <span className="eyebrow">SEO & Acquisition Infrastructure</span>
            <h2>Route-based search architecture for tourism intent</h2>
            <p>
              The SEO layer is organized around destination movement, airport transfers, route pages, topical authority, and structured discovery paths.
            </p>
          </Reveal>
          <Reveal className="acquisition-overview-panel">
            <OverviewList items={seoItems} />
          </Reveal>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--soft">
        <div className="acquisition-overview-inner">
          <div className="acquisition-overview-heading">
            <span className="eyebrow">Conversion Funnel</span>
            <h2>From traveler intent to private-driver lead</h2>
          </div>
          <Reveal className="acquisition-overview-flow">
            {funnelSteps.map((step, index) => (
              <div className="acquisition-overview-flow__step" key={step}>
                <strong>{step}</strong>
                {index < funnelSteps.length - 1 ? <i aria-hidden="true" /> : null}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--dark">
        <div className="acquisition-overview-inner acquisition-overview-split">
          <Reveal>
            <span className="eyebrow">What Is Included</span>
            <h2>Transfer package components</h2>
            <p>The acquisition package is intended to include the product, code, deployment setup, brand assets, and workflow logic.</p>
          </Reveal>
          <Reveal className="acquisition-overview-panel">
            <OverviewList items={includedItems} />
          </Reveal>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--light">
        <div className="acquisition-overview-inner">
          <div className="acquisition-overview-heading">
            <span className="eyebrow">Technical Stack</span>
            <h2>Modern, transferable infrastructure</h2>
          </div>
          <div className="acquisition-overview-stack">
            {stackItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--soft">
        <div className="acquisition-overview-inner">
          <div className="acquisition-overview-heading">
            <span className="eyebrow">Expansion Opportunities</span>
            <h2>Future product directions</h2>
          </div>
          <div className="acquisition-overview-card-grid">
            {expansionItems.map((item) => (
              <OverviewCard title={item.title} icon={item.icon} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--dark">
        <div className="acquisition-overview-inner acquisition-overview-split">
          <Reveal>
            <span className="eyebrow">Founder Story</span>
            <h2>Built by a solo technical founder</h2>
          </Reveal>
          <Reveal className="acquisition-overview-founder-card">
            <dl>
              <div>
                <dt>Built by</dt>
                <dd>
                  Dihen Dewhan
                  <span>Solo Technical Founder</span>
                </dd>
              </div>
              <div>
                <dt>Operational tourism business</dt>
                <dd>SKY Taxi Service & Tours Sri Lanka</dd>
              </div>
              <div>
                <dt>Business operations contact</dt>
                <dd>Dasun Punsiri</dd>
              </div>
              <div>
                <dt>Contact email</dt>
                <dd>
                  <a href={`mailto:${contactEmail}?subject=Sky%20AI%20TravelTech%20Acquisition%20Overview`}>{contactEmail}</a>
                </dd>
              </div>
            </dl>
            <p>
              Built and architected independently by Dihen Dewhan as a solo technical founder focused on AI-powered tourism infrastructure, route
              intelligence, and scalable travel workflows.
            </p>
            <p>
              Operational tourism contact infrastructure is supported through an active Sri Lanka taxi service business operated under existing tourism
              operations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--light">
        <div className="acquisition-overview-inner acquisition-overview-split">
          <Reveal>
            <span className="eyebrow">Current Stage</span>
            <h2>Early-stage, deployed, and built for expansion</h2>
            <span className="acquisition-overview-stage-label">Early-Stage AI TravelTech Infrastructure</span>
          </Reveal>
          <Reveal className="acquisition-overview-panel">
            <OverviewList
              items={[
                "Early-stage",
                "Production deployed",
                "Live website",
                "Live AI planner",
                "Traffic and SEO are still early",
                "Built for scalable expansion",
                "No fake revenue or fake traction claims",
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--soft">
        <div className="acquisition-overview-inner">
          <div className="acquisition-overview-heading">
            <span className="eyebrow">BUYER FIT</span>
            <h2>Who this acquisition is best suited for</h2>
            <p>
              The platform is positioned for operators, founders, and businesses looking to accelerate tourism-tech deployment, SEO growth, and
              AI-assisted travel infrastructure.
            </p>
          </div>
          <div className="acquisition-overview-buyer-grid">
            {buyerFitItems.map((item) => (
              <StrategicCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="acquisition-overview-section acquisition-overview-section--final">
        <div className="acquisition-overview-inner">
          <Reveal className="acquisition-overview-final-card">
            <span className="eyebrow">Next Steps</span>
            <h2>Acquisition discussions available upon request</h2>
            <p>Interested buyers can request a walkthrough, technical overview, transfer package, and acquisition discussion.</p>
            <a href={`mailto:${contactEmail}?subject=Sky%20AI%20TravelTech%20Acquisition%20Overview`}>
              <Mail size={18} />
              Contact: {contactEmail}
            </a>
            <small>This document is intended for private acquisition discussions and strategic buyer review.</small>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
