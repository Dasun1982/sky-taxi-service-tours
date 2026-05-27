import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CalendarDays, CheckCircle2, MapPinned, MessageCircle, Wallet, X } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { contactInfo, images } from "../data/travelData";

const oneDayTours = [
  {
    title: "One-Day Trip in Ella",
    price: "$120",
    image: images.nineArchBridge,
    alt: "Nine Arch Bridge in Ella",
    shortText:
      "Hill country day trip with Nine Arch Bridge, Little Adam's Peak, tea views, waterfalls, and Ella town.",
    duration: "Full day",
    places: ["Nine Arch Bridge", "Little Adam's Peak", "Tea Views", "Waterfalls", "Ella Town"],
    itinerary: [
      {
        title: "Little Adam's Peak",
        description:
          "Start your day with an invigorating hike to Little Adam's Peak, offering panoramic views of the lush valleys and tea plantations surrounding Ella.",
      },
      {
        title: "Nine Arch Bridge",
        description:
          "Visit the iconic Nine Arch Bridge, a stunning example of colonial-era engineering nestled amidst dense greenery. Time your visit to catch a passing train for a perfect photo opportunity.",
      },
      {
        title: "Tea Factory",
        description:
          "Explore a traditional tea factory such as Halpewatta Tea Factory to learn about the tea production process. Sample freshly brewed Ceylon tea while enjoying hill country views.",
      },
      {
        title: "Ravana Falls",
        description: "Stop by Ravana Falls, one of Sri Lanka's most picturesque waterfalls, ideal for photos and a refreshing break.",
      },
      {
        title: "Ravana Cave",
        description: "Visit the historic Ravana Cave nearby, connected with local legend and myth.",
      },
      {
        title: "Spice Garden",
        description: "Discover Sri Lankan spices with a guided spice garden visit.",
      },
      {
        title: "Ella Rock Optional Hike",
        description: "Optional hike for adventurous travelers with mountain views.",
      },
      {
        title: "Ella Town",
        description: "Free time to explore Ella Town cafes, local streets, and shops.",
      },
    ],
    includes: ["Private air-conditioned vehicle", "Experienced local driver/guide", "All fuel and parking charges", "Hotel pick-up and drop-off", "Fully customizable itinerary"],
    notIncluded: ["Entrance fees", "Meals and refreshments"],
  },
  {
    title: "One-Day Trip in Sinharaja",
    price: "$84",
    image: images.monkey,
    alt: "Rainforest wildlife in Sri Lanka",
    shortText:
      "Rainforest nature trip with Sinharaja Forest Reserve, waterfalls, birdwatching, and tea plantation views.",
    duration: "Full day",
    places: ["Sinharaja Forest Reserve", "Waterfalls", "Birdwatching", "Tea Plantation Views"],
    itinerary: [
      {
        title: "Sinharaja Forest Reserve",
        description: "Explore the rainforest with endemic plants, birds, insects, and guided nature walks.",
      },
      {
        title: "Pitadeniya Entrance",
        description: "Access scenic rainforest trails and birdwatching points.",
      },
      {
        title: "Kudawa Entrance",
        description: "Explore another section of the reserve with unique forest landscapes.",
      },
      {
        title: "Kekuna Ella Waterfall",
        description: "Relax at a peaceful waterfall inside the forest.",
      },
      {
        title: "Pathan Oya Ella Waterfall",
        description: "Visit another hidden waterfall for photos and nature.",
      },
      {
        title: "Sinharaja Tea Plantations",
        description: "End with tea plantation views and Ceylon tea experience.",
      },
    ],
    includes: ["Private air-conditioned vehicle", "Experienced local driver/guide", "All fuel and parking charges", "Hotel pick-up and drop-off", "Fully customizable itinerary"],
    notIncluded: ["Entrance fees", "Meals and refreshments"],
  },
  {
    title: "One-Day Trip in Kandy",
    price: "$117",
    image: images.kandyTemple,
    alt: "Kandy Temple of the Tooth",
    shortText:
      "Cultural day trip with botanical gardens, Buddha statue, museums, Kandy city, and cultural experiences.",
    duration: "Full day",
    places: ["Botanical Gardens", "Buddha Statue", "Museums", "Kandy City", "Cultural Experiences"],
    itinerary: [
      {
        title: "Royal Botanical Gardens, Peradeniya",
        description: "Explore orchids, palm avenues, and beautiful plant collections.",
      },
      {
        title: "Bahirawakanda Vihara Buddha Statue",
        description: "Visit the large white Buddha statue with city views.",
      },
      {
        title: "Udawattakele Forest Reserve",
        description: "Peaceful forest for nature walks and birdwatching.",
      },
      {
        title: "Kandyan Dance Performance",
        description: "Traditional dance, drumming, costumes, and culture.",
      },
      {
        title: "Kandy City Center",
        description: "Shopping and city stop.",
      },
      {
        title: "National Museum of Kandy",
        description: "Historical artifacts and Kandyan Kingdom heritage.",
      },
      {
        title: "International Buddhist Museum",
        description: "Buddhist culture from around the world.",
      },
    ],
    includes: ["Private air-conditioned vehicle", "Experienced local driver/guide", "All fuel and parking charges", "Hotel pick-up and drop-off", "Fully customizable itinerary"],
    notIncluded: ["Entrance fees", "Meals and refreshments"],
  },
  {
    title: "One-Day Trip in Colombo",
    price: "$84",
    image: images.colomboCulture,
    alt: "Colombo city culture route",
    shortText:
      "City tour with temples, museum, Red Mosque, Galle Face, Pettah Market, parks, and Lotus Tower.",
    duration: "Full day",
    places: ["Temples", "Museum", "Red Mosque", "Galle Face", "Pettah Market", "Lotus Tower"],
    itinerary: [
      {
        title: "Gangaramaya Temple",
        description: "Important Buddhist temple with architecture, carvings, and museum.",
      },
      {
        title: "Seema Malaka Temple",
        description: "Peaceful temple over Beira Lake.",
      },
      {
        title: "Jami Ul-Alfar Mosque Red Mosque",
        description: "Famous red and white mosque in Pettah.",
      },
      {
        title: "National Museum of Colombo",
        description: "Sri Lanka's largest museum with cultural treasures.",
      },
      {
        title: "Independence Memorial Hall",
        description: "Historic independence monument.",
      },
      {
        title: "Dutch Hospital Shopping Precinct",
        description: "Colonial building with shops and food.",
      },
      {
        title: "Galle Face Green",
        description: "Seaside promenade and local atmosphere.",
      },
      {
        title: "Pettah Market",
        description: "Busy market with spices, textiles, and local life.",
      },
      {
        title: "Viharamahadevi Park",
        description: "Large city park with greenery.",
      },
      {
        title: "Lotus Tower",
        description: "City view from South Asia's tallest tower.",
      },
    ],
    includes: ["Private air-conditioned vehicle", "Experienced local driver/guide", "All fuel and parking charges", "Hotel pick-up and drop-off", "Fully customizable itinerary"],
    notIncluded: ["Entrance fees", "Meals and refreshments"],
  },
];

const customTourSteps = [
  "Tell us your pickup location",
  "Choose places you want to visit",
  "Share date, time, and number of people",
  "Get a fair WhatsApp quote",
];

const customTourIdeas = [
  "Beach + Galle Fort + Jungle Beach",
  "Ella hill country + waterfalls + tea views",
  "Safari + village lunch + sunset viewpoint",
  "Kandy culture + temple + botanical garden",
];

function tourMessage(tourName) {
  return tourName;
}

function customTourMessage() {
  return "custom";
}

export default function OneDayTours() {
  const { t } = useLanguage();
  const [activeTour, setActiveTour] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const closeTimerRef = useRef(null);

  const openModal = (tour) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }
    setIsModalClosing(false);
    setActiveTour(tour);
  };

  const closeModal = useCallback(() => {
    if (!activeTour) return;

    setIsModalClosing(true);
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = window.setTimeout(() => {
      setActiveTour(null);
      setIsModalClosing(false);
    }, 180);
  }, [activeTour]);

  useEffect(() => {
    if (!activeTour) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeModal();
    };

    document.documentElement.classList.add("sky-scroll-lock");
    document.body.classList.add("sky-scroll-lock");
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.documentElement.classList.remove("sky-scroll-lock");
      document.body.classList.remove("sky-scroll-lock");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeTour, closeModal]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const getTourMessage = (tourName) => encodeURIComponent(t("messages.oneDayTour", undefined, { name: tourName }));
  const getCustomTourMessage = () => encodeURIComponent(t("messages.oneDayCustom"));
  const getTourTitle = (tour) => t(`oneDay.packages.${tour.index}.title`, tour.title);
  const getTourShortText = (tour) => t(`oneDay.packages.${tour.index}.shortText`, tour.shortText);
  const getTourDuration = (tour) => t(`oneDay.packages.${tour.index}.duration`, tour.duration);
  const tourIncludes = activeTour ? t("oneDay.includes", activeTour.includes) : [];
  const tourNotIncluded = activeTour ? t("oneDay.notIncluded", activeTour.notIncluded) : [];

  return (
    <div className="page one-day-page">
      <PageHero
        eyebrow={t("oneDay.hero.eyebrow")}
        title={t("oneDay.hero.title")}
        description={t("oneDay.hero.description")}
        image={images.nineArchBridge}
        alt="Nine Arch Bridge in Ella"
      >
        <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
          <MessageCircle size={19} />
          {t("common.askOnWhatsApp")}
        </a>
      </PageHero>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("oneDay.header.eyebrow")}
            title={t("oneDay.header.title")}
            text={t("oneDay.header.text")}
          />
          <div className="one-day-grid">
            {oneDayTours.map((tour, index) => {
              const translatedTour = { ...tour, index };

              return (
              <Reveal className="one-day-card" key={tour.title}>
                <div className="one-day-card__media">
                  <img src={tour.image} alt={tour.alt} loading="lazy" />
                  <span>{t("common.startingFromUnawatuna")}</span>
                </div>
                <div className="one-day-card__body">
                  <h3>{getTourTitle(translatedTour)}</h3>
                  <div className="one-day-card__price">
                    <Wallet size={18} />
                    <strong>{tour.price}</strong>
                    <span>{t("common.privateCarPrice")}</span>
                  </div>
                  <p>{getTourShortText(translatedTour)}</p>
                  <div className="one-day-card__meta">
                    <span>
                      <CalendarDays size={16} />
                      {getTourDuration(translatedTour)}
                    </span>
                    <span>
                      <MapPinned size={16} />
                      {t("common.finalPriceWhatsapp")}
                    </span>
                  </div>
                  <div className="one-day-card__actions">
                    <button className="button button--light" type="button" onClick={() => openModal(translatedTour)}>
                      {t("common.viewFullDetails")}
                    </button>
                    <a
                      className="button button--primary"
                      href={`https://wa.me/${contactInfo.whatsapp}?text=${getTourMessage(getTourTitle(translatedTour))}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={18} />
                      {t("common.askOnWhatsApp")}
                    </a>
                  </div>
                </div>
              </Reveal>
              );
            })}
          </div>

          <Reveal className="one-day-custom-tour">
            <span className="one-day-custom-tour__glow one-day-custom-tour__glow--pink" aria-hidden="true" />
            <span className="one-day-custom-tour__glow one-day-custom-tour__glow--peach" aria-hidden="true" />

            <div className="one-day-custom-tour__copy">
              <span className="one-day-custom-tour__eyebrow">{t("oneDay.custom.eyebrow")}</span>
              <h2>{t("oneDay.custom.title")}</h2>
              <p>{t("oneDay.custom.text")}</p>
              <a
                className="button button--primary one-day-custom-tour__button"
                href={`https://wa.me/${contactInfo.whatsapp}?text=${getCustomTourMessage()}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                {t("common.customizeOnWhatsApp")}
              </a>
            </div>

            <div className="one-day-custom-tour__planner" aria-label={t("oneDay.custom.stepsAria")}>
              <div className="one-day-custom-tour__float-icons" aria-hidden="true">
                <span>
                  <MapPinned size={18} />
                </span>
                <span>
                  <CalendarDays size={18} />
                </span>
                <span>
                  <MessageCircle size={18} />
                </span>
              </div>

              <ol className="one-day-custom-tour__steps">
                {customTourSteps.map((step, index) => (
                  <li key={step} style={{ "--delay": `${index * 90}ms` }}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{t(`oneDay.custom.steps.${index}`, step)}</p>
                  </li>
                ))}
              </ol>

              <div className="one-day-custom-tour__ideas">
                <h3>{t("oneDay.custom.ideasTitle")}</h3>
                <div>
                  {customTourIdeas.map((idea, index) => (
                    <span key={idea}>
                      <CheckCircle2 size={16} />
                      {t(`oneDay.custom.ideas.${index}`, idea)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="package-price-note">
            <Wallet size={20} />
            <p>{t("oneDay.priceNote")}</p>
          </Reveal>
        </div>
      </section>

      {activeTour &&
        createPortal(
          <div className={isModalClosing ? "one-day-modal one-day-modal--closing" : "one-day-modal"} role="dialog" aria-modal="true" aria-labelledby="one-day-modal-title">
            <button className="one-day-modal__overlay" type="button" onClick={closeModal} aria-label={t("common.closeTourDetails")} />
            <div className="one-day-modal__panel">
              <button className="one-day-modal__close" type="button" onClick={closeModal} aria-label={t("common.closeTourDetails")}>
                <X size={22} />
              </button>

              <div className="one-day-modal__hero">
                <img src={activeTour.image} alt={activeTour.alt} />
                <div className="one-day-modal__hero-copy">
                  <div className="one-day-modal__badges">
                    <span>{t("common.startingFromUnawatuna")}</span>
                    <strong>{activeTour.price}</strong>
                  </div>
                  <h2 id="one-day-modal-title">{getTourTitle(activeTour)}</h2>
                  <p>{getTourShortText(activeTour)}</p>
                </div>
              </div>

              <div className="one-day-modal__content">
                <section className="one-day-modal__main">
                  <div className="one-day-modal__section-tabs" aria-label={t("oneDay.modalAria")}>
                    <span>{t("common.overview")}</span>
                    <span>{t("common.itinerary")}</span>
                    <span>{t("common.includes")}</span>
                    <span>{t("common.price")}</span>
                  </div>

                  <div className="one-day-overview">
                    <h3>{t("common.overview")}</h3>
                    <p>{getTourShortText(activeTour)}</p>
                    <div>
                      {activeTour.places.map((place, placeIndex) => (
                        <span key={place}>{t(`oneDay.packages.${activeTour.index}.places.${placeIndex}`, place)}</span>
                      ))}
                    </div>
                  </div>

                  <h3>{t("common.itinerary")}</h3>
                  <ol className="one-day-timeline">
                    {activeTour.itinerary.map((stop, index) => (
                      <li className="one-day-timeline__item" key={stop.title} style={{ "--delay": `${index * 70}ms` }}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <div>
                          <h4>{stop.title}</h4>
                          <p>{stop.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>

                <aside className="one-day-modal__summary-card">
                  <div className="one-day-modal__summary-price">
                    <h3>{t("common.price")}</h3>
                    <span>{t("common.privateCarPrice")}</span>
                    <strong>{activeTour.price}</strong>
                    <p>{t("common.entireCarNotPerPerson")}</p>
                  </div>

                  <section>
                    <h3>{t("common.tourIncludes")}</h3>
                    <ul>
                      {tourIncludes.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={17} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3>{t("common.notIncluded")}</h3>
                    <ul>
                      {tourNotIncluded.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={17} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="one-day-modal__note-card">
                    <h3>{t("common.importantNote")}</h3>
                    <p>{t("oneDay.privateTourNote")}</p>
                    <p>{t("oneDay.finalNote")}</p>
                  </section>

                  <a
                    className="button button--primary one-day-modal__side-action"
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${getTourMessage(getTourTitle(activeTour))}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={18} />
                    {t("common.askOnWhatsApp")}
                  </a>
                </aside>
              </div>

              <a
                className="button button--primary one-day-modal__mobile-sticky"
                href={`https://wa.me/${contactInfo.whatsapp}?text=${getTourMessage(getTourTitle(activeTour))}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                {t("common.askOnWhatsApp")}
              </a>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
