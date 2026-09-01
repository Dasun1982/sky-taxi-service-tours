import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Car,
  CheckCircle2,
  Compass,
  Headphones,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import CinematicVideoCard from "../components/CinematicVideoCard";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import {
  coastalStory,
  contactInfo,
  destinationShowcase,
  featuredExperiences,
  galleryPreview,
  images,
  cinematicVideos,
  popularTours,
  whyChooseUs,
  wildSriLanka,
} from "../data/travelData";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

const trackAiOpen = (pageSource) => () => trackEvent("ai_planner_opened", { page_source: pageSource });
const trackWhatsApp = (pageSource) => () => trackEvent("whatsapp_clicked", { page_source: pageSource });

const services = [
  {
    title: "Airport Transfers",
    text: "Safe airport transfers across Sri Lanka with planned pickup times, clean vehicles, and fair prices.",
    icon: Plane,
    image: images.airportTransfer,
    page: "airport",
  },
  {
    title: "Taxi Service",
    text: "Reliable Sri Lanka taxi service for short rides, hotel transfers, long routes, and day hire.",
    icon: Car,
    image: images.toyotaPrius,
    page: "taxi",
  },
  {
    title: "Private Tours",
    text: "Island-wide private tours with friendly local drivers and easy WhatsApp booking.",
    icon: Compass,
    image: images.sigiriya,
    page: "tours",
  },
  {
    title: "One-Day Tours",
    text: "Easy one-day tours from your hotel to beaches, forts, hill country, culture, and viewpoints.",
    icon: Route,
    image: images.boatTour,
    page: "tours",
  },
  {
    title: "Private Driver",
    text: "One driver and vehicle for your whole trip, with local route knowledge and flexible daily stops.",
    icon: Users,
    image: images.toyotaKdh,
    page: "sri-lanka-tour-driver",
  },
  {
    title: "Travel Support",
    text: "Friendly help with routes, pickup places, luggage, airport timing, and fair travel plans.",
    icon: Headphones,
    image: images.trainRide,
    page: "contact",
  },
];

const exploreRegions = [
  {
    name: "South Coast",
    image: images.galleFort,
    alt: "Galle Fort on the Sri Lanka south coast",
    places: [
      { name: "Galle", href: "/galle-taxi-service" },
      { name: "Unawatuna", href: "/unawatuna-taxi-service" },
      { name: "Mirissa", href: "/mirissa-taxi-service" },
      { name: "Weligama", href: "/weligama-taxi-service" },
    ],
  },
  {
    name: "Hill Country",
    image: images.nineArchBridge,
    alt: "Nine Arch Bridge in Ella hill country",
    places: [
      { name: "Ella", href: "/ella-taxi-service" },
      { name: "Nuwara Eliya", href: "/nuwara-eliya-taxi-service" },
      { name: "Kandy", href: "/kandy-taxi-service" },
    ],
  },
  {
    name: "Wildlife & Nature",
    image: images.safari,
    alt: "Wildlife safari route in Sri Lanka",
    places: [
      { name: "Yala", href: "/yala-safari-transfer" },
      { name: "Sinharaja", href: "/wildlife" },
    ],
  },
  {
    name: "Cultural Triangle",
    image: images.sigiriya,
    alt: "Sigiriya Rock Fortress in Sri Lanka",
    places: [
      { name: "Sigiriya", href: "/sigiriya-taxi-service" },
      { name: "Dambulla", href: "/dambulla-taxi-service" },
      { name: "Polonnaruwa", href: "/destinations" },
      { name: "Anuradhapura", href: "/destinations" },
    ],
  },
];

const tripFlowSteps = [
  { label: "Discover", text: "Explore Sri Lanka's destinations, wildlife, and experiences." },
  { label: "Plan with AI", text: "SKY AI builds a route from what you actually want." },
  { label: "Book", text: "Send your route to SKY for a private driver quote." },
  { label: "Travel", text: "Your journey begins with a private driver and clean vehicle." },
  { label: "Manage", text: "Confirm details and any changes directly with our team." },
];

const whyIcons = [Wallet, HeartHandshake, CheckCircle2, MessageCircle, MapPin, ShieldCheck];

const taxiRouteLinks = [
  {
    title: "Colombo Airport Taxi",
    description: "Book private Colombo Airport taxi service with clean vehicles, fair route-based prices, and WhatsApp confirmation.",
    image: images.airportWelcome,
    href: "/colombo-airport-taxi",
  },
  {
    title: "Ella Taxi Service",
    description: "Travel to Ella with a reliable private driver, scenic hill country stops, and comfortable island-wide pickup support.",
    image: images.nineArchBridge,
    href: "/ella-taxi-service",
  },
  {
    title: "Kandy Taxi Service",
    description: "Private taxi rides to Kandy for Temple of the Tooth, hill country routes, airport transfers, and hotel pickups.",
    image: images.kandyTemple,
    href: "/kandy-taxi-service",
  },
  {
    title: "Galle Taxi Service",
    description: "Easy private taxi service to Galle Fort, Unawatuna, south coast beaches, hotels, and Colombo Airport.",
    image: images.galleFort,
    href: "/galle-taxi-service",
  },
  {
    title: "Mirissa Taxi Service",
    description: "Comfortable taxi transfers to Mirissa for beach stays, whale watching, Weligama, Galle, and airport routes.",
    image: images.whaleWatching,
    href: "/mirissa-taxi-service",
  },
  {
    title: "Sigiriya Taxi Service",
    description: "Private taxi to Sigiriya, Dambulla, Pidurangala, and Cultural Triangle routes with friendly local driver support.",
    image: images.sigiriya,
    href: "/sigiriya-taxi-service",
  },
  {
    title: "Airport Transfer Sri Lanka",
    description: "Island-wide airport transfers with flight-time planning, clean private vehicles, and quick WhatsApp booking.",
    image: images.airportTransfer,
    href: "/airport-transfer-sri-lanka",
  },
  {
    title: "Sri Lanka Round Tours",
    description: "Flexible Sri Lanka round tours with private driver support, custom routes, hotel stops, and fair WhatsApp quotes.",
    image: images.trainRide,
    href: "/sri-lanka-round-tours",
  },
  {
    title: "Budget Taxi Sri Lanka",
    description: "Affordable Sri Lanka taxi service for airport transfers, long-distance rides, private drivers, and fair prices.",
    image: images.toyotaPrius,
    href: "/budget-taxi-sri-lanka",
  },
];

export default function Home({ setPage }) {
  const { t } = useLanguage();
  const carouselRef = useRef(null);

  const renderTaxiRouteCard = (route, isClone = false) => {
    const linkProps = isClone ? { tabIndex: -1 } : {};
    const cardContent = (
      <>
        <a className="home-seo-route-card__media" href={route.href} aria-label={route.title} {...linkProps}>
          <img src={route.image} alt="" loading="lazy" />
        </a>
        <div className="home-seo-route-card__body">
          <h3>
            <a href={route.href} {...linkProps}>
              {route.title}
            </a>
          </h3>
          <p>{route.description}</p>
          <a className="home-seo-route-card__button" href={route.href} aria-label={`View Route — ${route.title}`} {...linkProps}>
            View Route
            <ArrowRight size={16} />
          </a>
        </div>
      </>
    );

    if (isClone) {
      return (
        <article className="home-seo-route-card" key={`clone-${route.href}`}>
          {cardContent}
        </article>
      );
    }

    return (
      <Reveal as="article" className="home-seo-route-card" key={route.href}>
        {cardContent}
      </Reveal>
    );
  };

  const scrollTours = (direction) => {
    carouselRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToDiscover = () => {
    document.getElementById("explore-sri-lanka")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page home-page">
      <section className="home-hero home-hero--polished">
        {/* MOBILE PERFORMANCE: intentionally not "reveal" — that's the
            site-wide scroll-fade-in class (App.css .reveal), correct for
            content a visitor scrolls to. This is the hero, visible
            immediately on load with nothing to scroll past first; wrapping
            it in the same opacity:0 -> 1 animation only delayed when the
            LCP text (this H1) reached its final, stable paint by ~560ms
            for zero visual benefit. Every other .reveal usage on the site
            is untouched. */}
        <div className="home-hero__content">
          <h1 className="hero-gradient-title">
            <span>{t("home.hero.line1")}</span>
            <span>{t("home.hero.line2")}</span>
          </h1>
          <p>{t("home.hero.subtitle")}</p>
          <div className="hero-actions">
            <a className="button button--primary" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={trackAiOpen("home-hero")}>
              <Sparkles size={19} />
              {t("home.hero.planCta", "Plan my Sri Lanka trip")}
            </a>
            <button className="button button--light" type="button" onClick={scrollToDiscover}>
              {t("home.hero.exploreCta", "Explore Sri Lanka")}
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="home-trust-row">
            <span>
              <Sparkles size={17} />
              {t("home.hero.trust1", "AI trip planning")}
            </span>
            <span>
              <Car size={17} />
              {t("home.hero.trust2", "Private transport")}
            </span>
            <span>
              <Compass size={17} />
              {t("home.hero.trust3", "Local experiences")}
            </span>
          </div>
          <a className="text-button home-hero__whatsapp" href={buildWhatsAppLink()} target="_blank" rel="noreferrer" onClick={trackWhatsApp("home-hero")}>
            <MessageCircle size={16} />
            {t("home.hero.whatsappLink", "Or book directly on WhatsApp")}
          </a>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("home.servicesHeader.eyebrow")}
            title={t("home.servicesHeader.title")}
            text={t("home.servicesHeader.text")}
          />
          <div className="home-service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal className="home-service-card" key={service.title}>
                  <div className="home-service-card__image">
                    <img src={service.image} alt="" loading="lazy" />
                  </div>
                  <div className="home-service-card__body">
                    <span>
                      <Icon size={20} />
                    </span>
                    <h3>{t(`home.services.${index}.title`, service.title)}</h3>
                    <p>{t(`home.services.${index}.text`, service.text)}</p>
                    <button
                      className="service-detail-button"
                      type="button"
                      onClick={() => setPage(service.page)}
                      aria-label={`${t("common.viewDetails")} — ${t(`home.services.${index}.title`, service.title)}`}
                    >
                      {t("common.viewDetails")}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section tours-choice-strip">
        <div className="section__inner">
          <SectionHeader
            eyebrow="What should I choose?"
            title="Driver Only, Driver + Guide, Private Tour, or SKY AI"
            text="You already know your route? Want a specialist guide too? Want it all organized? Or not sure yet? Pick the option that fits."
            align="left"
          />
          <div className="colombo-airport-link-row">
            <a href="/sri-lanka-tour-driver" onClick={() => trackEvent("service_selected", { service_id: "driver-only", page_source: "home-page" })}>
              Driver Only
            </a>
            <a href="/driver-guide-sri-lanka" onClick={() => trackEvent("service_selected", { service_id: "driver-guide", page_source: "home-page" })}>
              Driver + Guide
            </a>
            <a href="/tours" onClick={() => trackEvent("service_selected", { service_id: "private-tour", page_source: "home-page" })}>
              Private Tour
            </a>
            <a href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={trackAiOpen("home-choice-strip")}>
              Plan with SKY AI
            </a>
          </div>
        </div>
      </section>

      <section className="section ai-planner-promo-section">
        <div className="section__inner">
          <Reveal className="ai-planner-card">
            <div className="ai-planner-card__copy">
              <span className="ai-planner-label">NEW AI TOUR PLANNER</span>
              <h2>Plan Your Sri Lanka Tour with SKY AI</h2>
              <p>
                Build a realistic Sri Lanka private-driver route in seconds, then send it to SKY Taxi Service & Tours for a custom quote.
              </p>
              <div className="ai-planner-badges" aria-label="AI Planner benefits">
                <span>
                  <Compass size={16} />
                  AI route planning
                </span>
                <span>
                  <Route size={16} />
                  Private driver quote
                </span>
                <span>
                  <MessageCircle size={16} />
                  WhatsApp support
                </span>
              </div>
            </div>
            <div className="ai-planner-card__actions">
              <a className="button button--primary" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={trackAiOpen("home-ai-planner-promo")}>
                Start AI Planner
                <ArrowRight size={18} />
              </a>
              <a className="button button--light" href="/tours">
                View Private Tours
                <Compass size={18} />
              </a>
              <a className="text-button" href="/ai-trip-planner">
                How SKY AI works
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section ai-preview-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Example route, not a live response"
            title="What SKY AI can build for you"
            text="Tell SKY AI where you want to go, how long you have, what you love, and how you want to travel. Here's the kind of route it builds."
            align="left"
          />
          <Reveal className="ai-preview-panel">
            <div className="ai-preview-panel__prompt">
              <span className="ai-preview-panel__label">You might ask</span>
              <p>&ldquo;I have 7 days in Sri Lanka. I love wildlife, mountains and beaches.&rdquo;</p>
            </div>
            <div className="ai-preview-panel__result">
              <span className="ai-preview-panel__label">SKY AI drafts a route like this</span>
              <ol className="ai-preview-days">
                <li>
                  <span>01</span>Negombo
                </li>
                <li>
                  <span>02</span>Sigiriya
                </li>
                <li>
                  <span>03</span>Kandy
                </li>
                <li>
                  <span>04</span>Ella
                </li>
                <li>
                  <span>05</span>Yala
                </li>
                <li>
                  <span>06</span>South Coast
                </li>
                <li>
                  <span>07</span>Galle
                </li>
              </ol>
              <a className="button button--primary" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={trackAiOpen("home-ai-preview")}>
                Build my journey with SKY AI
                <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft" id="popular-tours">
        <div className="section__inner">
          <div className="carousel-heading">
            <SectionHeader
              eyebrow={t("home.popularHeader.eyebrow")}
              title={t("home.popularHeader.title")}
              text={t("home.popularHeader.text")}
              align="left"
            />
            <div className="carousel-controls">
              <button className="icon-button" type="button" onClick={() => scrollTours(-1)} aria-label={t("common.previousTour")}>
                <ArrowLeft size={19} />
              </button>
              <button className="icon-button" type="button" onClick={() => scrollTours(1)} aria-label={t("common.nextTour")}>
                <ArrowRight size={19} />
              </button>
            </div>
          </div>

          <div className="home-tour-carousel" ref={carouselRef}>
            {popularTours.map((tour, index) => (
              <article className="home-tour-card" key={tour.title}>
                <img src={tour.image} alt="" loading="lazy" />
                <div>
                  <span>{t(`home.popularTours.${index}.location`, tour.location)}</span>
                  <h3>{t(`home.popularTours.${index}.title`, tour.title)}</h3>
                  <p>{t(`home.popularTours.${index}.text`, tour.text)}</p>
                  <button
                    className="text-button"
                    type="button"
                    onClick={() => setPage("booking")}
                    aria-label={`${t("common.askForFairQuote")} — ${t(`home.popularTours.${index}.title`, tour.title)}`}
                  >
                    {t("common.askForFairQuote")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-seo-routes-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Taxi routes"
            title="Popular Sri Lanka Taxi Routes"
            text="Plan your most requested airport transfers, private taxi routes, and island-wide Sri Lanka travel options."
          />

          <div className="home-seo-route-grid" aria-label="Popular Sri Lanka Taxi Routes">
            <div className="home-seo-route-track">
              <div className="home-seo-route-group">{taxiRouteLinks.map((route) => renderTaxiRouteCard(route))}</div>
              <div className="home-seo-route-group home-seo-route-group--clone" aria-hidden="true">
                {taxiRouteLinks.map((route) => renderTaxiRouteCard(route, true))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-destination-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("home.destinationHeader.eyebrow")}
            title={t("home.destinationHeader.title")}
            text={t("home.destinationHeader.text")}
          />
          <div className="destination-showcase-grid">
            {destinationShowcase.map((destination, index) => (
              <Reveal className="destination-showcase-card" key={destination.title}>
                <img src={destination.image} alt={destination.alt} loading="lazy" />
                <div>
                  <span>{t(`home.destinationShowcase.${index}.location`, destination.location)}</span>
                  <h3>{t(`home.destinationShowcase.${index}.title`, destination.title)}</h3>
                  <p>{t(`home.destinationShowcase.${index}.text`, destination.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="home-destination-section__link">
            <button className="text-button" type="button" onClick={() => setPage("destinations")}>
              {t("home.destinationHeader.viewAll", "View all destinations")}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="section section--soft explore-sri-lanka-section" id="explore-sri-lanka">
        <div className="section__inner">
          <SectionHeader eyebrow="Discover" title="Explore Sri Lanka by region" text="Real SKY destinations, grouped the way travelers actually plan a route." align="left" />
          <div className="explore-region-grid">
            {exploreRegions.map((region) => (
              <Reveal className="explore-region-card" key={region.name}>
                <img src={region.image} alt={region.alt} loading="lazy" />
                <div className="explore-region-card__body">
                  <h3>{region.name}</h3>
                  <div className="explore-region-card__places">
                    {region.places.map((place) => (
                      <a
                        href={place.href}
                        key={place.name}
                        onClick={() => trackEvent("destination_clicked", { destination: place.name, page_source: "home-explore" })}
                      >
                        {place.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section wild-sri-lanka-section">
        <div className="section__inner">
          <SectionHeader eyebrow={wildSriLanka.eyebrow} title={wildSriLanka.title} text={wildSriLanka.text} />
          <div className="wild-sri-lanka-layout">
            <Reveal className="wild-sri-lanka-feature">
              <img src={wildSriLanka.feature.image} alt={wildSriLanka.feature.alt} loading="lazy" />
              <div className="wild-sri-lanka-feature__caption">
                <h3>{wildSriLanka.feature.title}</h3>
                <p>{wildSriLanka.feature.text}</p>
              </div>
            </Reveal>
            <div className="wild-sri-lanka-grid">
              {wildSriLanka.supporting.map((item) => (
                <Reveal as="figure" className="wild-sri-lanka-grid__item" key={item.title}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <figcaption>{item.title}</figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section cinematic-feature-section">
        <div className="section__inner">
          <SectionHeader eyebrow={cinematicVideos.eyebrow} title={cinematicVideos.title} text={cinematicVideos.text} align="left" />
          <CinematicVideoCard
            size="feature"
            className="cinematic-feature-card"
            eager={false}
            poster={cinematicVideos.feature.poster}
            posterAlt={cinematicVideos.feature.posterAlt}
            src={cinematicVideos.feature.src}
            title={cinematicVideos.feature.title}
            text={cinematicVideos.feature.text}
            credit={cinematicVideos.feature.credit}
          />
        </div>
      </section>

      <section className="section section--soft home-experience-section">
        <div className="section__inner">
          <div className="home-experience-layout">
            <Reveal className="home-experience-copy">
              <span className="eyebrow">{t("home.featured.eyebrow")}</span>
              <h2>{t("home.featured.title")}</h2>
              <p>{t("home.featured.text")}</p>
              <button className="button button--primary" type="button" onClick={() => setPage("tours")}>
                {t("common.exploreTours")}
                <ArrowRight size={18} />
              </button>
            </Reveal>
            <div className="home-experience-grid">
              {featuredExperiences.map((experience, index) => (
                <Reveal className="home-experience-card" key={experience.title}>
                  <img src={experience.image} alt={experience.alt} loading="lazy" />
                  <div>
                    <span>{t(`home.featuredExperiences.${index}.tag`, experience.tag)}</span>
                    <h3>{t(`home.featuredExperiences.${index}.title`, experience.title)}</h3>
                    <p>{t(`home.featuredExperiences.${index}.text`, experience.text)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section coastal-story-section">
        <div className="section__inner coastal-story-layout">
          <Reveal className="coastal-story-photo">
            <img src={coastalStory.image} alt={coastalStory.alt} loading="lazy" />
          </Reveal>
          <div className="coastal-story-copy">
            <span className="eyebrow">{coastalStory.eyebrow}</span>
            <h2>{coastalStory.title}</h2>
            <p>{coastalStory.text}</p>
            <CinematicVideoCard
              size="supporting"
              className="coastal-story-video"
              poster={cinematicVideos.supporting.poster}
              posterAlt={cinematicVideos.supporting.posterAlt}
              src={cinematicVideos.supporting.src}
              title={cinematicVideos.supporting.title}
              text={cinematicVideos.supporting.text}
              credit={cinematicVideos.supporting.credit}
            />
          </div>
        </div>
      </section>

      <section className="section section--soft gallery-preview-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="A closer look"
            title="From the gallery"
            text="A small selection of real Sri Lanka photography. The full collection — wildlife, coast, culture, and landscapes — lives in the gallery."
            align="left"
          />
          <div className="gallery-preview-grid">
            {galleryPreview.map((item) => (
              <Reveal as="figure" className="gallery-preview-grid__item" key={item.title}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <figcaption>{item.title}</figcaption>
              </Reveal>
            ))}
          </div>
          <div className="gallery-preview-section__link">
            <button className="text-button" type="button" onClick={() => setPage("gallery")}>
              Explore the gallery
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="section" id="why">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("home.whyHeader.eyebrow")}
            title={t("home.whyHeader.title")}
            text={t("home.whyHeader.text")}
          />
          <div className="why-grid-home">
            {whyChooseUs.map((item, index) => {
              const Icon = whyIcons[index];
              return (
                <Reveal className="why-card-home" key={item.title}>
                  <span>
                    <Icon size={22} />
                  </span>
                  <h3>{t(`home.why.${index}.title`, item.title)}</h3>
                  <p>{t(`home.why.${index}.text`, item.text)}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section trip-flow-section">
        <div className="section__inner">
          <SectionHeader eyebrow="How SKY works" title="From idea to island" align="left" />
          <Reveal className="trip-flow-strip">
            {tripFlowSteps.map((step, index) => (
              <div className="trip-flow-strip__step" key={step.label}>
                <span className="trip-flow-strip__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="trip-flow-strip__label">{step.label}</span>
                <span className="trip-flow-strip__text">{step.text}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <div>
              <span className="eyebrow">{t("home.bookingCta.eyebrow")}</span>
              <h2>{t("home.bookingCta.title")}</h2>
              <p>{t("home.bookingCta.text")}</p>
            </div>
            <div className="cta-actions">
              <a className="button button--primary" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={trackAiOpen("home-booking-cta")}>
                <Sparkles size={19} />
                {t("home.bookingCta.planWithAi", "Plan with SKY AI")}
              </a>
              <button className="button button--light" type="button" onClick={() => setPage("booking")}>
                {t("home.bookingCta.bookTrip", "Book a private trip")}
              </button>
            </div>
            <a className="text-button home-booking-cta__whatsapp" href={buildWhatsAppLink()} target="_blank" rel="noreferrer" onClick={trackWhatsApp("home-booking-cta")}>
              <MessageCircle size={16} />
              {t("common.bookOnWhatsApp")}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section__inner">
          <div className="home-contact-layout">
            <Reveal className="home-contact-card">
              <span className="eyebrow">{t("home.contact.eyebrow")}</span>
              <h2>{t("home.contact.title")}</h2>
              <p>{t("home.contact.text")}</p>

              <div className="home-contact-list">
                <a href={`tel:${contactInfo.tel}`}>
                  <Phone size={18} />
                  {contactInfo.phone}
                </a>
                <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} />
                  {t("home.contact.whatsappBooking")}
                </a>
                <a href={`mailto:${contactInfo.email}`}>
                  <Mail size={18} />
                  {contactInfo.email}
                </a>
                <span>
                  <MapPin size={18} />
                  656/B, Kahatagaha Watta, Maharamba Road, Dalawella, Unawatuna, Sri Lanka.
                </span>
              </div>

              <div className="contact-cta-actions">
                <a className="button button--primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                  <MessageCircle size={19} />
                  {t("common.whatsapp")}
                </a>
                <a className="button button--light" href={`tel:${contactInfo.tel}`}>
                  <Phone size={18} />
                  {t("common.callNow")}
                </a>
              </div>
            </Reveal>

            <Reveal className="home-map-card">
              <iframe
                src={contactInfo.mapEmbed}
                title={t("common.googleMapTitle")}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
