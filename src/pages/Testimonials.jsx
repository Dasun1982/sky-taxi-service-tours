import { ArrowRight, MessageCircle, Quote, Star } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import TestimonialsSlider from "../components/TestimonialsSlider";
import { useLanguage } from "../context/LanguageContext";
import { images, testimonials } from "../data/travelData";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function Testimonials({ setPage }) {
  const { t } = useLanguage();
  const translatedTestimonials = testimonials.map((item, index) => ({
    ...item,
    title: t(`testimonials.items.${index}.title`, item.title),
    traveler: t(`testimonials.items.${index}.traveler`, item.traveler),
    text: t(`testimonials.items.${index}.text`, item.text),
  }));

  return (
    <div className="page">
      <PageHero
        eyebrow={t("testimonials.hero.eyebrow")}
        title={t("testimonials.hero.title")}
        description={t("testimonials.hero.description")}
        image={images.boatTour}
        alt="Sri Lanka boat tour"
      />

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("testimonials.header.eyebrow")}
            title={t("testimonials.header.title")}
            text={t("testimonials.header.text")}
          />
          <Reveal>
            <TestimonialsSlider testimonials={translatedTestimonials} />
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="section__inner">
          <div className="testimonial-grid">
            {translatedTestimonials.map((item) => (
              <Reveal className="review-card" key={item.title}>
                <Quote size={30} />
                <div className="stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star fill="currentColor" size={16} key={index} />
                  ))}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong>{item.traveler}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>{t("testimonials.cta.title", "Ready to plan your own Sri Lanka trip?")}</h2>
          <p>
            {t(
              "testimonials.cta.text",
              "Send your travel dates and interests on WhatsApp, or browse our tours for a private route with SKY Taxi Service & Tours.",
            )}
          </p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
              <MessageCircle size={19} />
              {t("testimonials.cta.whatsapp", "Plan on WhatsApp")}
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("tours")}>
              {t("testimonials.cta.tours", "Browse Tours")}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
