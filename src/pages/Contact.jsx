import { Globe2, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { contactInfo, images } from "../data/travelData";

const contactMethods = [
  {
    title: "WhatsApp",
    text: "Fastest for bookings, prices, and route details.",
    href: `https://wa.me/${contactInfo.whatsapp}`,
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

export default function Contact() {
  const { t } = useLanguage();

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
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
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
