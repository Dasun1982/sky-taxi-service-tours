import { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPinned } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function TourCarousel({ tours, onBook }) {
  const { t } = useLanguage();
  const railRef = useRef(null);

  const scroll = (direction) => {
    railRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  return (
    <div className="tour-carousel">
      <div className="carousel-actions">
        <button className="icon-button" type="button" onClick={() => scroll(-1)} aria-label={t("common.previousTourPackage")}>
          <ChevronLeft size={20} />
        </button>
        <button className="icon-button" type="button" onClick={() => scroll(1)} aria-label={t("common.nextTourPackage")}>
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="tour-carousel__rail" ref={railRef}>
        {tours.map((tour) => (
          <article className="package-slide" key={tour.id}>
            <img src={tour.image} alt={tour.alt} loading="lazy" />
            <div>
              <span>
                <MapPinned size={15} />
                {tour.location}
              </span>
              <h3>{tour.title}</h3>
              <p>{tour.summary}</p>
              <button className="text-button" type="button" onClick={onBook}>
                {t("common.requestPackage")}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
