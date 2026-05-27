import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function TestimonialsSlider({ testimonials }) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const move = (direction) => {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-slider">
      <button className="icon-button testimonial-slider__control" type="button" onClick={() => move(-1)} aria-label={t("common.previousTestimonial")}>
        <ChevronLeft size={20} />
      </button>
      <article className="testimonial-slider__card">
        <Quote size={34} />
        <div className="stars" aria-label={t("common.fiveStarRating")}>
          {Array.from({ length: 5 }, (_, starIndex) => (
            <Star fill="currentColor" size={18} key={starIndex} />
          ))}
        </div>
        <h3>{active.title}</h3>
        <p>{active.text}</p>
        <strong>{active.traveler}</strong>
      </article>
      <button className="icon-button testimonial-slider__control" type="button" onClick={() => move(1)} aria-label={t("common.nextTestimonial")}>
        <ChevronRight size={20} />
      </button>
      <div className="testimonial-slider__dots">
        {testimonials.map((item, dotIndex) => (
          <button
            aria-label={t("common.showTestimonial", `Show ${item.title}`, { name: item.title })}
            className={index === dotIndex ? "dot dot--active" : "dot"}
            key={item.title}
            onClick={() => setIndex(dotIndex)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
