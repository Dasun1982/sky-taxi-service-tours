import { ArrowRight, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { images } from "../data/travelData";
import { buildWhatsAppLink } from "../utils/whatsapp";

const checkableDetails = [
  {
    title: "Published price context",
    text: "See route-specific airport starting prices and daily Private Driver and Chauffeur Guide rates. SKY confirms a current quote for your journey.",
    href: "/airport",
    action: "Check airport prices",
  },
  {
    title: "Clear service boundaries",
    text: "Private Driver and Chauffeur Guide pages explain their daily price basis, operating inclusions, and guest costs that remain separate.",
    href: "/private-driver-sri-lanka",
    action: "Explore Private Driver",
  },
  {
    title: "A human quote before confirmation",
    text: "Describe a route even if some details are uncertain. SKY reviews the request and discusses options before you decide whether to confirm.",
    href: "/custom-journey",
    action: "Describe your journey",
  },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <div className="page">
      <PageHero
        eyebrow={t("reviewIntegrity.heroEyebrow", "Customer feedback")}
        title={t("reviewIntegrity.heroTitle", "Reviews and travel details you can check")}
        description={t("reviewIntegrity.heroText", "SKY does not currently publish individual customer reviews here because their wording, source, and ratings have not been verified. You can still check how our services and quotes work before contacting us.")}
        image={images.boatTour}
        alt="Sri Lanka boat tour"
      />

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("reviewIntegrity.detailsEyebrow", "Before you decide")}
            title={t("reviewIntegrity.detailsTitle", "Check the service details")}
            text={t("reviewIntegrity.detailsText", "These pages show what is known, what depends on your route, and what SKY confirms with you.")}
          />
          <div className="feature-grid">
            {checkableDetails.map((item, index) => (
              <Reveal className="feature-card" key={item.href}>
                <h3>{t(`reviewIntegrity.details.${index}.title`, item.title)}</h3>
                <p>{t(`reviewIntegrity.details.${index}.text`, item.text)}</p>
                <a className="text-button" href={item.href}>{t(`reviewIntegrity.details.${index}.action`, item.action)} <ArrowRight size={16} /></a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>{t("reviewIntegrity.ctaTitle", "Ask SKY about your own trip")}</h2>
          <p>{t("reviewIntegrity.ctaText", "Share your dates and route on WhatsApp. A request starts a conversation; you confirm only after reviewing the current details with SKY.")}</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
              <MessageCircle size={19} /> {t("reviewIntegrity.ctaAction", "Ask SKY on WhatsApp")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
