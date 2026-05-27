import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
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
  Users,
  Wallet,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import {
  contactInfo,
  destinationShowcase,
  featuredExperiences,
  images,
  popularTours,
  whyChooseUs,
} from "../data/travelData";

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
    title: "Vehicle Rentals",
    text: "Clean cars and vans for couples, families, solo travelers, and small groups.",
    icon: Users,
    image: images.vehicleRentals,
    page: "vehicle-rentals",
  },
  {
    title: "Travel Support",
    text: "Friendly help with routes, pickup places, luggage, airport timing, and fair travel plans.",
    icon: Headphones,
    image: images.trainRide,
    page: "contact",
  },
];

const whyIcons = [Wallet, HeartHandshake, CheckCircle2, MessageCircle, MapPin, ShieldCheck];

export default function Home({ setPage }) {
  const { t } = useLanguage();
  const carouselRef = useRef(null);

  const scrollTours = (direction) => {
    carouselRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page home-page">
      <section className="home-hero home-hero--polished">
        <div className="home-hero__ring home-hero__ring--one" aria-hidden="true" />
        <div className="home-hero__ring home-hero__ring--two" aria-hidden="true" />
        <div className="hero-accent hero-accent--pink" />
        <div className="hero-accent hero-accent--peach" />

        <div className="home-hero__content reveal">
          <h1 className="hero-gradient-title">
            <span>{t("home.hero.line1")}</span>
            <span>{t("home.hero.line2")}</span>
          </h1>
          <p>{t("home.hero.subtitle")}</p>
          <div className="hero-actions">
            <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
              <MessageCircle size={19} />
              {t("common.bookOnWhatsApp")}
            </a>
            <button className="button button--light" type="button" onClick={scrollToServices}>
              {t("common.viewServices")}
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="home-trust-row">
            <span>
              <BadgeCheck size={17} />
              {t("common.fairPrices")}
            </span>
            <span>
              <Car size={17} />
              {t("common.islandWideTaxi")}
            </span>
            <span>
              <Plane size={17} />
              {t("common.airportTransfers")}
            </span>
            <span>
              <HeartHandshake size={17} />
              {t("common.friendlyDrivers")}
            </span>
          </div>
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
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>
                  <div className="home-service-card__body">
                    <span>
                      <Icon size={20} />
                    </span>
                    <h3>{t(`home.services.${index}.title`, service.title)}</h3>
                    <p>{t(`home.services.${index}.text`, service.text)}</p>
                    <button className="service-detail-button" type="button" onClick={() => setPage(service.page)}>
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
                <img src={tour.image} alt={tour.title} loading="lazy" />
                <div>
                  <span>{t(`home.popularTours.${index}.location`, tour.location)}</span>
                  <h3>{t(`home.popularTours.${index}.title`, tour.title)}</h3>
                  <p>{t(`home.popularTours.${index}.text`, tour.text)}</p>
                  <button className="text-button" type="button" onClick={() => setPage("booking")}>
                    {t("common.askForFairQuote")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
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

      <section className="section section--soft">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <div>
              <span className="eyebrow">{t("home.bookingCta.eyebrow")}</span>
              <h2>{t("home.bookingCta.title")}</h2>
              <p>{t("home.bookingCta.text")}</p>
            </div>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
                <MessageCircle size={19} />
                {t("common.bookOnWhatsApp")}
              </a>
              <button className="button button--light" type="button" onClick={() => setPage("booking")}>
                {t("common.openBookingForm")}
              </button>
            </div>
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
                <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
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
                <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
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
