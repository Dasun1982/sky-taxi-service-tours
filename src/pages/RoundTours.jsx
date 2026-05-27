import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CalendarDays, CheckCircle2, MapPinned, MessageCircle, Wallet, X } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { contactInfo, images } from "../data/travelData";

const tourIncludes = [
  "Private air-conditioned vehicle",
  "Experienced local driver/guide",
  "All fuel and parking charges",
  "Hotel pick-up and drop-off",
  "Fully customizable itinerary",
];

const notIncluded = [
  "Entrance fees",
  "Meals and accommodation, can be arranged upon request",
  "Train tickets, can be arranged upon request",
  "Safari jeep hire and park entrance fees, can be arranged upon request",
];

const roundTourPackages = [
  {
    title: "2-Day Private Tour to Ella",
    price: "$180",
    duration: "2 Days",
    image: images.nineArchBridge,
    alt: "Nine Arch Bridge in Ella",
    summary: "A short hill country escape with Ella viewpoints, tea country, waterfalls, and optional safari stops.",
    places: ["Ella", "Nine Arch Bridge", "Tea Factory", "Ravana Falls"],
    itinerary: [
      {
        day: "Day 1",
        title: "Route to Ella",
        stops: [
          "Spice Garden Visit: Learn about Sri Lanka's herbs, spices, medicine, cuisine, and wellness.",
          "Safari Adventure Optional: Wildlife safari in Udawalawe or Yala National Park.",
          "Buduruwagala Rock Carvings: Ancient Buddhist rock sculptures carved into a cliff.",
          "Check-in at Hotel in Ella: Relax among tea-covered hills and forests.",
        ],
      },
      {
        day: "Day 2",
        title: "Explore Ella",
        stops: [
          "Ravana Falls: Iconic waterfall and photo stop.",
          "Nine Arch Bridge: Famous railway bridge hidden in greenery.",
          "Tea Factory Tour: Learn Ceylon tea production and taste fresh tea.",
          "Little Adam's Peak Hike: Easy hike with Ella Gap views.",
          "Spice Garden in Ella: Highland spice garden experience.",
        ],
      },
    ],
  },
  {
    title: "2-Day Private Tour to Kandy, Nuwara Eliya & Ella",
    price: "$180",
    duration: "2 Days",
    image: images.pinnawalaElephant,
    alt: "Pinnawala elephant route in Sri Lanka",
    summary: "A scenic hill country route with Kandy culture, Nuwara Eliya, train views, and Ella highlights.",
    places: ["Kandy", "Nuwara Eliya", "Ella", "Train Ride"],
    itinerary: [
      {
        day: "Day 1",
        title: "Scenic Journey to the Hills",
        stops: [
          "Pinnawala Elephant Orphanage: See rescued elephants.",
          "Ambuluwawa Tower: Panoramic mountain and river views.",
          "Temple of the Sacred Tooth Relic: Sacred Buddhist temple in Kandy.",
          "Tea Factory Tour: Ceylon tea experience.",
          "Peradeniya Botanical Gardens: Orchids, palms, and exotic plants.",
          "Nuwara Eliya Town: Colonial hill station known as Little England.",
          "Overnight Stay in Nuwara Eliya.",
        ],
      },
      {
        day: "Day 2",
        title: "Train Ride & Ella Highlights",
        stops: [
          "Scenic Train Ride to Ella: Famous mountain train journey.",
          "Little Adam's Peak Hike: Views of Ella Gap.",
          "Ravana Falls: Waterfall photo stop.",
          "Spice Garden in Ella: Highland spices.",
          "Nine Arch Bridge: Famous train bridge.",
        ],
      },
    ],
  },
  {
    title: "3-Day Private Tour to Sigiriya, Kandy, Nuwara Eliya & Ella",
    price: "$250",
    duration: "3 Days",
    image: images.sigiriya,
    alt: "Sigiriya Rock Fortress in Sri Lanka",
    summary: "Ancient sites, Kandy culture, tea country roads, train scenery, and Ella highlights in three days.",
    places: ["Sigiriya", "Dambulla", "Kandy", "Ella"],
    itinerary: [
      {
        day: "Day 1",
        title: "Ancient Wonders",
        stops: [
          "Sigiriya Rock Fortress: UNESCO site with frescoes, gardens, and summit views.",
          "Dambulla Cave Temple: Buddhist cave murals and statues.",
          "Overnight Stay in Dambulla / Sigiriya Area.",
        ],
      },
      {
        day: "Day 2",
        title: "Cultural & Scenic Highlands",
        stops: [
          "Pinnawala Elephant Orphanage.",
          "Ambuluwawa Tower.",
          "Temple of the Sacred Tooth Relic.",
          "Tea Factory Tour.",
          "Peradeniya Botanical Gardens.",
          "Nuwara Eliya Town.",
          "Overnight Stay in Nuwara Eliya.",
        ],
      },
      {
        day: "Day 3",
        title: "Train Ride & Ella Highlights",
        stops: [
          "Scenic Train Ride to Ella.",
          "Little Adam's Peak Hike.",
          "Ravana Falls.",
          "Spice Garden in Ella.",
          "Nine Arch Bridge.",
        ],
      },
    ],
  },
  {
    title: "5-Day Private Tour of Trincomalee, Cultural Triangle, Hill Country & Wildlife",
    price: "$368",
    duration: "5 Days",
    image: images.blueBeach,
    alt: "Blue beach in Sri Lanka",
    summary: "East coast temples, Sigiriya and Dambulla, Kandy, hill country, Ella, and a wildlife safari route.",
    places: ["Trincomalee", "Sigiriya", "Kandy", "Ella", "Safari"],
    itinerary: [
      {
        day: "Day 1",
        title: "Trincomalee Coastal & Cultural Highlights",
        stops: [
          "Fort Frederick.",
          "Koneswaram Temple.",
          "Dutch Bay.",
          "Sri Pathirakali Amman Temple.",
          "Overnight Stay in Trincomalee.",
        ],
      },
      {
        day: "Day 2",
        title: "Ancient Marvels of the Cultural Triangle",
        stops: ["Sigiriya Rock Fortress.", "Dambulla Cave Temple.", "Overnight Stay in Sigiriya / Dambulla."],
      },
      {
        day: "Day 3",
        title: "Kandy & the Central Highlands",
        stops: [
          "Pinnawala Elephant Orphanage.",
          "Ambuluwawa Tower.",
          "Temple of the Sacred Tooth Relic.",
          "Tea Factory Tour.",
          "Peradeniya Botanical Gardens.",
          "Nuwara Eliya Town.",
          "Overnight Stay in Nuwara Eliya.",
        ],
      },
      {
        day: "Day 4",
        title: "Scenic Train Ride & Ella Highlights",
        stops: [
          "Scenic Train Ride to Ella.",
          "Little Adam's Peak Hike.",
          "Ravana Falls.",
          "Spice Garden in Ella.",
          "Nine Arch Bridge.",
          "Overnight Stay in Ella.",
        ],
      },
      {
        day: "Day 5",
        title: "Southern Temples & Wildlife Adventure",
        stops: ["Tissamaharama Temple.", "Yala or Udawalawe National Park Safari.", "Kataragama Temple."],
      },
    ],
  },
  {
    title: "7-Day Private Tour of Sri Lanka's Cultural Heritage, Hill Country & Wildlife",
    displayTitle: "7-Day Cultural Heritage & Wildlife Tour",
    longTitle: true,
    price: "$514",
    duration: "7 Days",
    image: images.mihintaleBuddha,
    alt: "Mihintale Buddha statue in Sri Lanka",
    summary: "A deeper cultural heritage route through Trincomalee, Polonnaruwa, Anuradhapura, Sigiriya, Kandy, Ella, and safari country.",
    places: ["Trincomalee", "Polonnaruwa", "Anuradhapura", "Kandy", "Ella"],
    itinerary: [
      {
        day: "Day 1",
        title: "Trincomalee Coastal & Cultural Highlights",
        stops: [
          "Fort Frederick.",
          "Koneswaram Temple.",
          "Dutch Bay.",
          "Sri Pathirakali Amman Temple.",
          "Overnight Stay in Trincomalee.",
        ],
      },
      {
        day: "Day 2",
        title: "Ancient Ruins of Polonnaruwa",
        stops: [
          "Polonnaruwa Archaeological Museum.",
          "Royal Palace of King Parakramabahu.",
          "The Sacred Quadrangle.",
          "Lankatilaka Vihara.",
          "Gal Vihara.",
          "Rankoth Vehera.",
          "Parakrama Samudra.",
          "Overnight Stay in Polonnaruwa.",
        ],
      },
      {
        day: "Day 3",
        title: "Ancient Capital of Anuradhapura",
        stops: [
          "Jaya Sri Maha Bodhi.",
          "Ruwanwelisaya Stupa.",
          "Abhayagiri Stupa.",
          "Jetavanaramaya Stupa.",
          "Isurumuniya Temple.",
          "Kuttam Pokuna Twin Ponds.",
          "Mihintale.",
          "Overnight Stay in Anuradhapura.",
        ],
      },
      {
        day: "Day 4",
        title: "Cultural Triangle Wonders",
        stops: ["Sigiriya Rock Fortress.", "Dambulla Cave Temple.", "Overnight Stay in Sigiriya / Dambulla."],
      },
      {
        day: "Day 5",
        title: "Kandy & the Highlands",
        stops: [
          "Pinnawala Elephant Orphanage.",
          "Ambuluwawa Tower.",
          "Temple of the Sacred Tooth Relic.",
          "Tea Factory Tour.",
          "Peradeniya Botanical Gardens.",
          "Nuwara Eliya Town.",
          "Overnight Stay in Nuwara Eliya.",
        ],
      },
      {
        day: "Day 6",
        title: "Scenic Train Ride & Ella Highlights",
        stops: [
          "Scenic Train Ride to Ella.",
          "Little Adam's Peak.",
          "Ravana Falls.",
          "Spice Garden in Ella.",
          "Nine Arch Bridge.",
          "Overnight Stay in Ella.",
        ],
      },
      {
        day: "Day 7",
        title: "Southern Temples & Safari Adventure",
        stops: ["Tissamaharama Temple.", "Yala or Udawalawe National Park Safari.", "Kataragama Temple."],
      },
    ],
  },
  {
    title: "10-Day Private Tour of Sri Lanka's North, East, Cultural Heritage, Hill Country & Wildlife",
    displayTitle: "10-Day Ultimate Sri Lanka Explorer Tour",
    longTitle: true,
    price: "$734",
    duration: "10 Days",
    image: images.galle,
    alt: "Galle coastal route in Sri Lanka",
    summary: "A full island journey through Negombo, Jaffna, Trincomalee, ancient cities, Kandy, Ella, Yala, Galle, and airport transfer.",
    places: ["Negombo", "Jaffna", "Trincomalee", "Kandy", "Yala", "Galle"],
    itinerary: [
      {
        day: "Day 1",
        title: "Negombo Arrival & Coastal Charm",
        stops: ["Negombo Beach.", "Dutch Fort.", "Negombo Lagoon Boat Ride.", "Overnight Stay in Negombo."],
      },
      {
        day: "Day 2",
        title: "Journey to Jaffna",
        stops: ["Jaffna Fort.", "Nallur Kandaswamy Kovil.", "Jaffna Public Library.", "Jaffna Market.", "Overnight Stay in Jaffna."],
      },
      {
        day: "Day 3",
        title: "Northern Islands & Beaches",
        stops: ["Nagadeepa Purana Vihara.", "Nainativu Hindu Temple.", "Casuarina Beach.", "Point Pedro.", "Overnight Stay in Jaffna."],
      },
      {
        day: "Day 4",
        title: "Trincomalee East Coast Paradise",
        stops: ["Fort Frederick.", "Koneswaram Temple.", "Nilaveli Beach.", "Pigeon Island National Park Optional.", "Overnight Stay in Trincomalee."],
      },
      {
        day: "Day 5",
        title: "Ancient Polonnaruwa",
        stops: [
          "Polonnaruwa Archaeological Museum.",
          "Royal Palace of King Parakramabahu.",
          "Sacred Quadrangle.",
          "Gal Vihara.",
          "Parakrama Samudra.",
          "Overnight Stay in Polonnaruwa.",
        ],
      },
      {
        day: "Day 6",
        title: "Sigiriya & Dambulla",
        stops: ["Sigiriya Rock Fortress.", "Dambulla Cave Temple.", "Hiriwadunna Village Tour.", "Overnight Stay in Sigiriya / Dambulla."],
      },
      {
        day: "Day 7",
        title: "Kandy & Tea Country",
        stops: [
          "Pinnawala Elephant Orphanage.",
          "Temple of the Sacred Tooth Relic.",
          "Peradeniya Botanical Gardens.",
          "Tea Plantation & Factory Tour.",
          "Nuwara Eliya Town.",
          "Overnight Stay in Nuwara Eliya.",
        ],
      },
      {
        day: "Day 8",
        title: "Scenic Train Ride to Ella",
        stops: ["World-Famous Train Ride.", "Nine Arch Bridge.", "Little Adam's Peak.", "Ravana Falls.", "Overnight Stay in Ella."],
      },
      {
        day: "Day 9",
        title: "Yala National Park & Southern Coast",
        stops: ["Buduruwagala.", "Yala National Park Safari.", "Kataragama Temple.", "Overnight Stay in Tissamaharama / Yala area."],
      },
      {
        day: "Day 10",
        title: "Galle & Departure",
        stops: ["Galle Fort.", "Unawatuna Beach.", "Airport Transfer."],
      },
    ],
  },
];

const customRoundTourSteps = [
  "Share your travel dates and pickup location",
  "Choose places around Sri Lanka",
  "Tell us your hotel, vehicle, and budget needs",
  "Get a fair WhatsApp quote",
];

const customRoundTourIdeas = [
  "South Coast + Ella + Yala Safari",
  "Sigiriya + Kandy + Nuwara Eliya + Ella",
  "Jaffna + Trincomalee + Cultural Triangle",
  "Full Island Tour with airport pickup and drop-off",
];

function packageMessage(packageName) {
  return packageName;
}

function customRoundTourMessage() {
  return "custom";
}

function splitStop(stop) {
  const separatorIndex = stop.indexOf(":");

  if (separatorIndex === -1) {
    return { title: stop.replace(/\.$/, ""), description: "" };
  }

  return {
    title: stop.slice(0, separatorIndex),
    description: stop.slice(separatorIndex + 1).trim(),
  };
}

export default function RoundTours() {
  const { t } = useLanguage();
  const [activePackage, setActivePackage] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const closeTimerRef = useRef(null);
  const hasLongModalTitle = Boolean(activePackage?.longTitle);

  const openModal = (tourPackage) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }
    setIsModalClosing(false);
    setActivePackage(tourPackage);
  };

  const closeModal = useCallback(() => {
    if (!activePackage) return;

    setIsModalClosing(true);
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = window.setTimeout(() => {
      setActivePackage(null);
      setIsModalClosing(false);
    }, 180);
  }, [activePackage]);

  useEffect(() => {
    if (!activePackage) return undefined;

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
  }, [activePackage, closeModal]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const getPackageMessage = (packageName) => encodeURIComponent(t("messages.roundTour", undefined, { name: packageName }));
  const getCustomRoundTourMessage = () => encodeURIComponent(t("messages.roundCustom"));
  const getPackageTitle = (tourPackage) =>
    t(`round.packages.${tourPackage.index}.displayTitle`, tourPackage.displayTitle ?? tourPackage.title);
  const getPackageSummary = (tourPackage) => t(`round.packages.${tourPackage.index}.summary`, tourPackage.summary);
  const getPackageDuration = (tourPackage) => t(`round.packages.${tourPackage.index}.duration`, tourPackage.duration);
  const translatedIncludes = t("round.includes", tourIncludes);
  const translatedNotIncluded = t("round.notIncluded", notIncluded);

  return (
    <div className="page round-tours-page">
      <PageHero
        eyebrow={t("round.hero.eyebrow")}
        title={t("round.hero.title")}
        description={t("round.hero.description")}
        image={images.trainRide}
        alt="Sri Lanka scenic hill country train route"
      >
        <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
          <MessageCircle size={19} />
          {t("common.askOnWhatsApp")}
        </a>
      </PageHero>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("round.header.eyebrow")}
            title={t("round.header.title")}
            text={t("round.header.text")}
          />
          <div className="round-tour-grid">
            {roundTourPackages.map((item, index) => {
              const translatedPackage = { ...item, index };

              return (
              <Reveal className="round-tour-card" key={item.title}>
                <div className="round-tour-card__media">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span>{getPackageDuration(translatedPackage)}</span>
                </div>
                <div className="round-tour-card__body">
                  <h3>{getPackageTitle(translatedPackage)}</h3>
                  <div className="round-tour-card__price">
                    <Wallet size={18} />
                    <strong>{item.price}</strong>
                    <span>{t("common.startingPrice")}</span>
                  </div>
                  <p>{getPackageSummary(translatedPackage)}</p>
                  <div className="round-tour-card__places">
                    {item.places.slice(0, 4).map((place, placeIndex) => (
                      <span key={place}>
                        <MapPinned size={15} />
                        {t(`round.packages.${index}.places.${placeIndex}`, place)}
                      </span>
                    ))}
                  </div>
                  <div className="round-tour-card__actions">
                    <button className="button button--light" type="button" onClick={() => openModal(translatedPackage)}>
                      {t("common.viewFullDetails")}
                    </button>
                    <a
                      className="button button--primary"
                      href={`https://wa.me/${contactInfo.whatsapp}?text=${getPackageMessage(getPackageTitle(translatedPackage))}`}
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
              <span className="one-day-custom-tour__eyebrow">{t("round.custom.eyebrow")}</span>
              <h2>{t("round.custom.title")}</h2>
              <p>{t("round.custom.text")}</p>
              <a
                className="button button--primary one-day-custom-tour__button"
                href={`https://wa.me/${contactInfo.whatsapp}?text=${getCustomRoundTourMessage()}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                {t("round.custom.button")}
              </a>
            </div>

            <div className="one-day-custom-tour__planner" aria-label={t("round.custom.stepsAria")}>
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
                {customRoundTourSteps.map((step, index) => (
                  <li key={step} style={{ "--delay": `${index * 90}ms` }}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{t(`round.custom.steps.${index}`, step)}</p>
                  </li>
                ))}
              </ol>

              <div className="one-day-custom-tour__ideas">
                <h3>{t("round.custom.ideasTitle")}</h3>
                <div>
                  {customRoundTourIdeas.map((idea, index) => (
                    <span key={idea}>
                      <CheckCircle2 size={16} />
                      {t(`round.custom.ideas.${index}`, idea)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="package-price-note">
            <Wallet size={20} />
            <p>{t("round.priceNote")}</p>
          </Reveal>
        </div>
      </section>

      {activePackage &&
        createPortal(
          <div className={isModalClosing ? "one-day-modal round-modal one-day-modal--closing" : "one-day-modal round-modal"} role="dialog" aria-modal="true" aria-labelledby="round-tour-modal-title">
            <button className="one-day-modal__overlay" type="button" onClick={closeModal} aria-label={t("common.closeRoundTourDetails")} />
            <div className="one-day-modal__panel round-tour-modal__panel">
              <button className="one-day-modal__close" type="button" onClick={closeModal} aria-label={t("common.closeRoundTourDetails")}>
                <X size={22} />
              </button>

              <div className="one-day-modal__hero">
                <img src={activePackage.image} alt={activePackage.alt} />
                <div className="one-day-modal__hero-copy">
                  <div className="one-day-modal__badges">
                    <span>{getPackageDuration(activePackage)}</span>
                    <strong>{activePackage.price}</strong>
                  </div>
                  <h2
                    className={hasLongModalTitle ? "modal-hero-title round-tour-modal__title long-title" : "modal-hero-title round-tour-modal__title"}
                    id="round-tour-modal-title"
                  >
                    {getPackageTitle(activePackage)}
                  </h2>
                  <p>{getPackageSummary(activePackage)}</p>
                </div>
              </div>

              <div className="one-day-modal__content">
                <section className="one-day-modal__main round-tour-modal__main">
                  <div className="one-day-modal__section-tabs" aria-label={t("round.modalAria")}>
                    <span>{t("common.overview")}</span>
                    <span>{t("common.dayByDayItinerary")}</span>
                    <span>{t("common.includes")}</span>
                    <span>{t("common.price")}</span>
                  </div>

                  <div className="one-day-overview">
                    <h3>{t("common.overview")}</h3>
                    <p>{getPackageSummary(activePackage)}</p>
                    <div>
                      {activePackage.places.map((place, placeIndex) => (
                        <span key={place}>{t(`round.packages.${activePackage.index}.places.${placeIndex}`, place)}</span>
                      ))}
                    </div>
                  </div>

                  <div className="round-tour-day-list">
                    <h3>{t("common.dayByDayItinerary")}</h3>
                    {activePackage.itinerary.map((day, dayIndex) => (
                      <article className="round-tour-day" key={`${day.day}-${day.title}`} style={{ "--delay": `${dayIndex * 80}ms` }}>
                        <span>{day.day}</span>
                        <div>
                          <h4>{day.title}</h4>
                          <ul>
                            {day.stops.map((stop) => {
                              const parsedStop = splitStop(stop);

                              return (
                                <li key={stop}>
                                  <CheckCircle2 size={16} />
                                  <p>
                                    <strong>{parsedStop.title}</strong>
                                    {parsedStop.description ? ` ${parsedStop.description}` : ""}
                                  </p>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                <aside className="one-day-modal__summary-card">
                  <div className="one-day-modal__summary-price">
                    <h3>{t("common.price")}</h3>
                    <span>{t("common.privateCarStartingPrice")}</span>
                    <strong>{activePackage.price}</strong>
                    <p>{t("common.entireCarNotPerPerson")}</p>
                  </div>

                  <section>
                    <h3>{t("common.tourIncludes")}</h3>
                    <ul>
                      {translatedIncludes.map((item) => (
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
                      {translatedNotIncluded.map((item) => (
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
                    <p>{t("round.finalNote")}</p>
                  </section>

                  <a
                    className="button button--primary one-day-modal__side-action"
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${getPackageMessage(getPackageTitle(activePackage))}`}
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
                href={`https://wa.me/${contactInfo.whatsapp}?text=${getPackageMessage(getPackageTitle(activePackage))}`}
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
