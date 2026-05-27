import { useRef } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, MapPinned, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { contactInfo, images, tours } from "../data/travelData";

const tourTypes = [
  {
    title: "One Day Tours",
    text: "Short Sri Lanka day trips for beaches, culture, wildlife, temples, and viewpoints.",
    button: "View One Day Tours",
    href: "#/one-day-tours",
    image: images.blueBeach,
    alt: "Blue Beach in Sri Lanka",
  },
  {
    title: "Round Tours Around Sri Lanka",
    text: "Multi-day island tours with driver support, hotels, routes, and flexible planning.",
    button: "View Round Tours",
    href: "#/round-tours",
    image: images.trainRide,
    alt: "Sri Lanka scenic train ride through hill country",
  },
];

export default function Tours({ setPage }) {
  const { t } = useLanguage();
  const tourIdeasRef = useRef(null);
  const goToBooking = () => setPage("booking");
  const customTourMessage = encodeURIComponent(t("messages.customTour"));

  const scrollTourIdeas = (direction) => {
    tourIdeasRef.current?.scrollBy({ left: direction * 380, behavior: "smooth" });
  };

  return (
    <div className="page">
      <PageHero
        eyebrow={t("tours.hero.eyebrow")}
        title={t("tours.hero.title")}
        description={t("tours.hero.description")}
        image={images.sigiriya}
        alt="Sigiriya Rock Fortress"
      >
        <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
          <MessageCircle size={19} />
          {t("common.planOnWhatsApp")}
        </a>
      </PageHero>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("tours.typesHeader.eyebrow")}
            title={t("tours.typesHeader.title")}
            text={t("tours.typesHeader.text")}
          />
          <div className="tour-type-grid tour-type-grid--two">
            {tourTypes.map((type, index) => (
              <Reveal className="tour-type-card" key={type.title}>
                <div className="tour-type-card__media">
                  <img src={type.image} alt={type.alt} loading="lazy" />
                </div>
                <div className="tour-type-card__body">
                  <h3>{t(`tours.types.${index}.title`, type.title)}</h3>
                  <p>{t(`tours.types.${index}.text`, type.text)}</p>
                  <a
                    className="button button--primary tour-type-card__button"
                    href={type.href}
                  >
                    {t(`tours.types.${index}.button`, type.button)}
                    <ArrowRight size={18} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="carousel-heading">
            <SectionHeader
              eyebrow={t("tours.ideasHeader.eyebrow")}
              title={t("tours.ideasHeader.title")}
              text={t("tours.ideasHeader.text")}
              align="left"
            />
            <div className="carousel-controls">
              <button className="icon-button" type="button" onClick={() => scrollTourIdeas(-1)} aria-label={t("common.previousTourIdea")}>
                <ArrowLeft size={19} />
              </button>
              <button className="icon-button" type="button" onClick={() => scrollTourIdeas(1)} aria-label={t("common.nextTourIdea")}>
                <ArrowRight size={19} />
              </button>
            </div>
          </div>
          <Reveal className="tour-ideas-note">
            {t("tours.ideasNote")}
          </Reveal>
          <div className="tour-ideas-carousel" ref={tourIdeasRef}>
            {tours.map((tour, index) => (
              <article className="tour-idea-card" key={tour.id}>
                <div className="tour-idea-card__media">
                  <img src={tour.image} alt={tour.alt} loading="lazy" />
                  <span>{t(`tours.ideas.${index}.duration`, tour.duration)}</span>
                </div>
                <div className="tour-idea-card__body">
                  <div className="tour-idea-card__meta">
                    <span>
                      <MapPinned size={15} />
                      {tour.location}
                    </span>
                    <span>
                      <CalendarDays size={15} />
                      {t(`tours.ideas.${index}.duration`, tour.duration)}
                    </span>
                  </div>
                  <h3>{t(`tours.ideas.${index}.title`, tour.title)}</h3>
                  <p>{t(`tours.ideas.${index}.summary`, tour.summary)}</p>
                  <div className="tour-idea-card__places">
                    {tour.highlights.map((place, placeIndex) => (
                      <span key={place}>{t(`tours.ideas.${index}.highlights.${placeIndex}`, place)}</span>
                    ))}
                  </div>
                  <button className="text-button" type="button" onClick={goToBooking}>
                    {t("common.planThisTour")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <Reveal className="booking-cta-panel tour-whatsapp-cta">
            <div>
              <span className="eyebrow">{t("tours.cta.eyebrow")}</span>
              <h2>{t("tours.cta.title")}</h2>
              <p>{t("tours.cta.text")}</p>
            </div>
            <div className="cta-actions">
              <a
                className="button button--primary"
                href={`https://wa.me/${contactInfo.whatsapp}?text=${customTourMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={19} />
                {t("common.customizeOnWhatsApp")}
              </a>
              <button className="button button--light" type="button" onClick={() => setPage("booking")}>
                {t("common.bookingForm")}
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
