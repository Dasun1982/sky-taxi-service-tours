import { ArrowRight, CalendarDays, CheckCircle2, MapPinned } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function TourCard({ tour, onBook }) {
  const { t } = useLanguage();

  return (
    <article className="tour-card">
      <div className="tour-card__media">
        <img src={tour.image} alt={tour.alt} loading="lazy" />
        <span>{tour.duration}</span>
      </div>
      <div className="tour-card__body">
        <div className="tour-card__meta">
          <span>
            <MapPinned size={16} />
            {tour.location}
          </span>
          <span>
            <CalendarDays size={16} />
            {tour.duration}
          </span>
        </div>
        <h3>{tour.title}</h3>
        <p>{tour.summary}</p>
        <ul>
          {tour.highlights.map((highlight) => (
            <li key={highlight}>
              <CheckCircle2 size={16} />
              {highlight}
            </li>
          ))}
        </ul>
        <button className="text-button" type="button" onClick={onBook}>
          {t("common.planThisTour")}
          <ArrowRight size={17} />
        </button>
      </div>
    </article>
  );
}
