import {
  Car,
  CheckCircle2,
  Clock3,
  Compass,
  FileText,
  Headphones,
  Languages,
  MapPinned,
  MessageCircle,
  Plane,
  Play,
  Route,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";

const founderEmail = "dasunpunsiri@gmail.com";
const acquisitionMail = `mailto:${founderEmail}?subject=Sky%20Taxi%20Sri%20Lanka%20Acquisition%20Details`;
const aiPlannerUrl = "https://ai.skytaxisrilanka.com";
const acquisitionPdfUrl = "/sky-ai-traveltech-acquisition-overview.pdf";
const platformDemoUrl = "https://youtu.be/jmPyGNbCKk4";

const includedItems = [
  {
    title: "Main SEO travel website",
    text: "A production React/Vite travel platform focused on Sri Lanka taxi, airport transfer, route, and tourism search intent.",
    icon: Compass,
  },
  {
    title: "AI itinerary planner",
    text: "A dedicated AI planning layer for building realistic Sri Lanka private-driver routes and quote-ready travel requests.",
    icon: Route,
  },
  {
    title: "Sri Lanka route intelligence",
    text: "Destination and transfer logic for airport routes, beach transfers, hill country trips, and private-driver travel planning.",
    icon: MapPinned,
  },
  {
    title: "Airport transfer funnels",
    text: "Focused route pages for airport-to-destination taxi intent, built to capture high-conversion transfer leads.",
    icon: Plane,
  },
  {
    title: "Tourism destination pages",
    text: "SEO landing pages for Sri Lanka destinations, private drivers, round tours, day tours, and taxi service categories.",
    icon: Car,
  },
  {
    title: "WhatsApp lead conversion",
    text: "Booking flows built around fast WhatsApp handoff for custom quotes, pickup details, route questions, and driver confirmation.",
    icon: MessageCircle,
  },
  {
    title: "Analytics and SEO setup",
    text: "Google Analytics, sitemap, robots, metadata, schema support, and internal linking foundations are already in place.",
    icon: CheckCircle2,
  },
];

const aiSystemItems = [
  {
    title: "Dynamic itinerary generation",
    text: "Builds route ideas based on trip length, destinations, travel style, and Sri Lanka-specific planning constraints.",
    icon: Route,
  },
  {
    title: "Route logic and pacing",
    text: "Supports realistic travel pacing so itineraries can align with private-driver routes, transfers, and day-by-day movement.",
    icon: Clock3,
  },
  {
    title: "Budget adaptation",
    text: "Can shape travel recommendations around budget-friendly, private-driver, family, couple, and solo traveler needs.",
    icon: Wallet,
  },
  {
    title: "Personalized workflows",
    text: "Supports family, couple, solo, beach, culture, wildlife, hill country, and round-tour planning workflows.",
    icon: Users,
  },
];

const seoItems = [
  "Sitemap and robots setup",
  "Structured schema support",
  "Airport route landing pages",
  "Destination taxi service pages",
  "Private tour and round tour pages",
  "Internal linking hub structure",
  "Topical authority around Sri Lanka taxi and tours",
];

const buyerUpsideItems = [
  {
    title: "Expand route coverage",
    text: "Add more airport-to-destination pages, city transfer funnels, surf town routes, hill country routes, and regional taxi pages.",
    icon: Route,
  },
  {
    title: "Scale itinerary pages",
    text: "Create more AI-supported itinerary templates for day tours, round tours, family trips, beach routes, and cultural circuits.",
    icon: Compass,
  },
  {
    title: "Monetize private drivers",
    text: "Connect qualified leads with driver networks, transfer operators, tour guides, and custom private-driver quote workflows.",
    icon: Car,
  },
  {
    title: "Partner with tourism operators",
    text: "Build supply partnerships with hotels, villas, surf camps, tour operators, and destination experience providers.",
    icon: Headphones,
  },
  {
    title: "Replicate in other markets",
    text: "The route-led model can be adapted for Bali, Thailand, Maldives, Vietnam, and other tourism-heavy destinations.",
    icon: Languages,
  },
];

const stackItems = [
  "React",
  "Vite",
  "Next.js AI planner",
  "TypeScript",
  "OpenAI integration",
  "Vercel deployment",
  "Google Analytics",
  "Google Search Console",
];

export default function Acquire() {
  return (
    <div className="page acquire-page">
      <PageHero
        eyebrow="Acquisition Opportunity"
        title="AI-Powered Sri Lanka TravelTech Platform Built for Tourism Lead Generation"
        description="Sky Taxi Sri Lanka combines SEO-driven travel pages, airport transfer funnels, AI itinerary planning, and WhatsApp conversion workflows into one scalable Sri Lanka tourism infrastructure asset."
        image={images.trainRide}
        alt="Sri Lanka TravelTech platform acquisition opportunity"
      >
        <div className="acquire-hero-badges" aria-label="Platform strengths">
          <span>AI Travel Planning</span>
          <span>SEO Infrastructure</span>
          <span>Tourism Lead Generation</span>
        </div>
        <div className="premium-hero-actions">
          <a className="button button--primary" href={acquisitionMail}>
            <MessageCircle size={19} />
            Request Acquisition Details
          </a>
          <a className="button button--light" href={aiPlannerUrl} target="_blank" rel="noreferrer">
            <Compass size={18} />
            View AI Planner
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Platform Overview</span>
            <h2>Not a basic taxi website</h2>
            <p>
              Sky Taxi Sri Lanka is positioned as a tourism lead-generation and AI travel planning platform. The asset combines destination SEO,
              route-specific transfer pages, private-driver conversion flows, and an AI itinerary planner designed around Sri Lanka travel decisions.
            </p>
            <p>
              The platform is built to attract travelers at the planning stage, guide them through airport transfers and private tour routes, and convert
              qualified requests into quote-ready conversations.
            </p>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            <article>
              <span>
                <Plane size={20} />
              </span>
              <h3>Transfer demand</h3>
              <p>Airport and destination route pages target high-intent taxi and private transfer searches.</p>
            </article>
            <article>
              <span>
                <Route size={20} />
              </span>
              <h3>Route-led planning</h3>
              <p>Content and AI workflows are organized around how travelers actually move through Sri Lanka.</p>
            </article>
            <article>
              <span>
                <MessageCircle size={20} />
              </span>
              <h3>Quote handoff</h3>
              <p>WhatsApp conversion flows make travel requests easier to turn into custom private-driver quotes.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader
            eyebrow="What's Included"
            title="Core acquisition assets"
            text="The acquisition package centers on a travel platform, AI planning flow, SEO infrastructure, and conversion-ready route funnels."
          />
          <div className="feature-grid feature-grid--six">
            {includedItems.map((item) => {
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

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="AI System"
            title="Tourism-specific planning intelligence"
            text="The AI planner is designed for practical Sri Lanka travel planning, not generic trip inspiration."
          />
          <div className="feature-grid feature-grid--four">
            {aiSystemItems.map((item) => {
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

      <section className="section section--soft">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">SEO Infrastructure</span>
            <h2>Built around topical authority and route intent</h2>
            <p>
              The SEO structure focuses on airport transfer pages, destination taxi service pages, private driver topics, and Sri Lanka tour planning
              clusters. It is designed for expansion into more destinations, itinerary pages, and route-specific content.
            </p>
          </Reveal>
          <Reveal className="feature-card">
            <span className="feature-card__icon">
              <ShieldCheck size={22} />
            </span>
            <h3>SEO foundation</h3>
            <ul className="detail-list">
              {seoItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Buyer Upside"
            title="Expansion paths for a strategic buyer"
            text="The platform can be extended across more routes, operators, destination content, and tourism markets without making any traffic or revenue claims here."
          />
          <div className="feature-grid">
            {buyerUpsideItems.map((item) => {
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
            eyebrow="Technical Stack"
            title="Modern web and AI deployment stack"
            text="The platform uses a practical stack for fast iteration, SEO pages, AI workflow expansion, and cloud deployment."
          />
          <div className="feature-grid feature-grid--four">
            {stackItems.map((item) => (
              <Reveal className="feature-card feature-card--calm" key={item}>
                <span className="feature-card__icon">
                  <CheckCircle2 size={22} />
                </span>
                <h3>{item}</h3>
                <p>Part of the current TravelTech infrastructure and acquisition transfer package.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <div>
              <span className="eyebrow">Acquisition CTA</span>
              <h2>Interested in acquiring this AI TravelTech asset?</h2>
              <p>Request acquisition details, product walkthrough, technical overview, and transfer package.</p>
            </div>
            <div className="cta-actions">
              <a className="button button--primary" href={acquisitionMail}>
                <MessageCircle size={18} />
                Contact Founder
              </a>
              <a className="button button--light" href={aiPlannerUrl} target="_blank" rel="noreferrer">
                <Compass size={18} />
                View AI Planner
              </a>
              <a className="button button--light" href={acquisitionPdfUrl} target="_blank" rel="noreferrer" download>
                <FileText size={18} />
                Download Acquisition PDF
              </a>
              <a className="button button--light" href={platformDemoUrl} target="_blank" rel="noreferrer">
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
