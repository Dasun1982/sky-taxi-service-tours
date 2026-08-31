import { ArrowRight, Car, Compass, Globe2, Mail, MapPin, MessageCircle, Navigation, Phone, Plane } from "lucide-react";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { contactInfo, images } from "../data/travelData";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { setBookingContext } from "../utils/bookingContext";

const inquiryPaths = [
  { title: "Custom Tour", text: "Multi-day private route across the destinations you choose.", icon: Compass, tripType: "Private tour" },
  { title: "Private Driver", text: "A driver for your full trip, not just one transfer.", icon: Car, tripType: "Private tour" },
  { title: "Airport Transfer", text: "Pickup or drop-off at Colombo Bandaranaike Airport.", icon: Plane, tripType: "Airport transfer" },
  { title: "General Inquiry", text: "Not sure yet — ask a question first.", icon: MessageCircle, tripType: "Taxi ride" },
];

const contactMethods = [
  {
    title: "WhatsApp",
    text: "Fastest for bookings, prices, and route details.",
    href: buildWhatsAppLink(),
    icon: MessageCircle,
    label: "Message on WhatsApp",
  },
  {
    title: "Phone",
    text: "Call us for urgent airport transfers or pickup help.",
    href: `tel:${contactInfo.tel}`,
    icon: Phone,
    label: contactInfo.phone,
  },
  {
    title: "Email",
    text: "Send longer tour plans, hotel details, or questions.",
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
    label: contactInfo.email,
  },
  {
    title: "Location",
    text: "Based in Sri Lanka and available island-wide.",
    href: "#contact-location",
    icon: MapPin,
    label: "View location",
  },
];

export default function Contact({ setPage }) {
  const { t } = useLanguage();

  const startInquiry = (path) => {
    setBookingContext({ tripType: path.tripType, message: path.title, source: "contact-page" });
    setPage("booking");
  };

  return (
    <div className="page contact-page">
      <PageHero
        eyebrow={t("contact.hero.eyebrow")}
        title={t("contact.hero.title")}
        description={t("contact.hero.description")}
        image={images.jungleBeach}
        alt="Jungle Beach near Unawatuna"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            {t("common.whatsapp")}
          </a>
          <a className="button button--light" href={`tel:${contactInfo.tel}`}>
            <Phone size={18} />
            {t("common.callNow")}
          </a>
        </div>
        <div className="premium-hero-badges">
          <span>
            <Globe2 size={16} />
            {t("contact.hero.based")}
          </span>
          <span>
            <Navigation size={16} />
            {t("contact.hero.available")}
          </span>
        </div>
      </PageHero>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Start here"
            title="What are you planning?"
            text="Pick the closest match and we will pre-fill your booking request — you can always change the details before sending."
          />
          <div className="contact-method-grid">
            {inquiryPaths.map((path) => {
              const Icon = path.icon;
              return (
                <Reveal key={path.title} className="contact-method-card">
                  <span className="contact-method-card__icon">
                    <Icon size={22} />
                  </span>
                  <h3>{path.title}</h3>
                  <p>{path.text}</p>
                  <button
                    className="text-button"
                    type="button"
                    onClick={() => startInquiry(path)}
                    aria-label={`Start request — ${path.title}`}
                  >
                    Start request
                    <ArrowRight size={16} />
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section contact-method-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("contact.methodsHeader.eyebrow")}
            title={t("contact.methodsHeader.title")}
            text={t("contact.methodsHeader.text")}
          />
          <div className="contact-method-grid">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const external = method.href.startsWith("http");

              return (
                <Reveal className="contact-method-card" key={method.title}>
                  <div className="contact-method-card__icon">
                    <Icon size={22} />
                  </div>
                  <h3>{t(`contact.methods.${index}.title`, method.title)}</h3>
                  <p>{t(`contact.methods.${index}.text`, method.text)}</p>
                  <a href={method.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                    {t(`contact.methods.${index}.label`, method.label)}
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft contact-quick-section" id="contact-location">
        <div className="section__inner contact-quick-shell">
          <Reveal className="contact-location-card">
            <span className="contact-location-card__eyebrow">{t("contact.location.eyebrow")}</span>
            <h2>{t("contact.location.title")}</h2>
            <p>
              {t("contact.location.text")}
            </p>
            <div className="contact-location-card__address">
              <MapPin size={19} />
              <span>{contactInfo.address}</span>
            </div>
            <div className="contact-location-card__map">
              <iframe
                src={contactInfo.mapEmbed}
                title={t("common.locationMapTitle")}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal className="contact-quick-card">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
