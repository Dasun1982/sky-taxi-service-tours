import { Quote, Star } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import TestimonialsSlider from "../components/TestimonialsSlider";
import { useLanguage } from "../context/LanguageContext";
import { images, testimonials } from "../data/travelData";

export default function Testimonials() {
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
    </div>
  );
}
