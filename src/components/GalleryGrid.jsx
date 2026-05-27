import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function GalleryGrid({ items }) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartX = useRef(0);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showImage = useCallback((direction) => {
    setActiveIndex((current) => {
      if (current === null) return 0;
      return (current + direction + items.length) % items.length;
    });
  }, [items.length]);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showImage(-1);
      if (event.key === "ArrowRight") showImage(1);
    };

    document.documentElement.classList.add("sky-scroll-lock");
    document.body.classList.add("sky-scroll-lock");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.classList.remove("sky-scroll-lock");
      document.body.classList.remove("sky-scroll-lock");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showImage]);

  const startSwipe = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const endSwipe = (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 42) {
      showImage(distance > 0 ? -1 : 1);
    }
  };

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, index) => {
          const sizeClass = index % 9 === 0 ? "gallery-card--large" : index % 7 === 0 ? "gallery-card--wide" : "";

          return (
            <figure className={`gallery-card ${sizeClass}`} key={item.title}>
              <button
                className="gallery-card__button"
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={t("common.openImage", `Open ${item.title} image`, { name: item.title })}
              >
                <img src={item.src} alt={item.alt} loading={index < 2 ? "eager" : "lazy"} />
              </button>
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.location}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      {activeItem && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={activeItem.title}>
          <button className="gallery-lightbox__backdrop" type="button" onClick={closeLightbox} aria-label={t("common.closeGallery")} />
          <div className="gallery-lightbox__panel" onTouchStart={startSwipe} onTouchEnd={endSwipe}>
            <button className="gallery-lightbox__close" type="button" onClick={closeLightbox} aria-label={t("common.closeGallery")}>
              <X size={22} />
            </button>
            <button className="gallery-lightbox__nav gallery-lightbox__nav--prev" type="button" onClick={() => showImage(-1)} aria-label={t("common.previousImage")}>
              <ChevronLeft size={24} />
            </button>
            <img src={activeItem.src} alt={activeItem.alt} />
            <button className="gallery-lightbox__nav gallery-lightbox__nav--next" type="button" onClick={() => showImage(1)} aria-label={t("common.nextImage")}>
              <ChevronRight size={24} />
            </button>
            <div className="gallery-lightbox__caption">
              <strong>{activeItem.title}</strong>
              <span>{activeItem.location}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
