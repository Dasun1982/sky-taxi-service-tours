import { useState } from "react";
import { CalendarDays, Car, CheckCircle2, ChevronDown, CircleHelp, MapPinned, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { contactInfo, images } from "../data/travelData";

const rentalVehicles = [
  {
    name: "TVS Ntorq 125",
    image: images.tvsNtorq,
    alt: "TVS Ntorq 125 rental vehicle",
    text: "Sporty scooter, smooth ride, great for city travel.",
    oneDay: "Rs.2500",
    weekly: "Rs.2000",
  },
  {
    name: "Honda Dio",
    image: images.hondaDio,
    alt: "Honda Dio rental vehicle",
    text: "Lightweight scooter, easy handling, fuel efficient.",
    oneDay: "Rs.2000",
    weekly: "Rs.1500",
  },
  {
    name: "Yamaha ZR",
    image: images.yamahaRayZr,
    alt: "Yamaha ZR rental vehicle",
    text: "Comfortable scooter, ideal for daily local rides.",
    oneDay: "Rs.2000",
    weekly: "Rs.1500",
  },
  {
    name: "Hero Xoom",
    image: images.heroXoom,
    alt: "Hero Xoom rental vehicle",
    text: "Modern scooter, smooth performance, stylish design.",
    oneDay: "Rs.2500",
    weekly: "Rs.2000",
  },
  {
    name: "Honda Navi Bike",
    image: images.hondaNavi,
    alt: "Honda Navi Bike rental vehicle",
    text: "Compact bike, fun ride, easy to control.",
    oneDay: "Rs.2000",
    weekly: "Rs.1500",
  },
  {
    name: "Tuk-Tuk",
    image: images.tuktuk,
    alt: "Tuk-Tuk rental vehicle",
    text: "Local three-wheeler, perfect for groups and luggage.",
    oneDay: "Rs.5000",
    weekly: "Rs.4500",
  },
  {
    name: "Honda Freed",
    image: images.hondaFreed,
    alt: "Honda Freed family rental vehicle",
    text: "Family rental vehicle with comfortable seats and luggage space.",
    oneDay: "Ask price",
    weekly: "Custom plan",
  },
  {
    name: "Honda Insight",
    image: images.hondaInsight,
    alt: "Honda Insight economy sedan rental vehicle",
    text: "Economy sedan option for budget-friendly city rides and transfers.",
    oneDay: "Ask price",
    weekly: "Custom plan",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    alt: "Honda Vezel SUV rental vehicle",
    text: "Premium SUV rental option for private tours and longer routes.",
    oneDay: "Ask price",
    weekly: "Custom plan",
  },
];

const tripTypes = [
  "Airport transfer",
  "One-day tour",
  "Local city travel",
  "Beach area rides",
  "Family tuk-tuk rental",
  "Long-stay rental",
];

const rentalFaqs = [
  {
    question: "What documents are required to rent a vehicle?",
    answer: "A valid passport and driving license are required.",
  },
  {
    question: "Can foreigners rent vehicles from you?",
    answer: "Yes, foreign tourists are welcome to rent vehicles.",
  },
  {
    question: "Is fuel included in the rental price?",
    answer: "No, vehicles are provided without fuel.",
  },
  {
    question: "Do you provide helmets?",
    answer: "Yes, helmets are provided for bike rentals.",
  },
  {
    question: "How can I book a vehicle?",
    answer: "You can book easily via WhatsApp or our website.",
  },
];

function rentalMessage(vehicleName) {
  return vehicleName;
}

function customRentalMessage() {
  return "custom";
}

export default function VehicleRentals() {
  const { t } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const getRentalMessage = (vehicleName) => encodeURIComponent(t("messages.rentalVehicle", undefined, { name: vehicleName }));
  const getCustomRentalMessage = () => encodeURIComponent(t("messages.rentalCustom"));
  const faqItems = t("rentals.faq.items", rentalFaqs.map((item) => [item.question, item.answer]));

  return (
    <div className="page vehicle-rentals-page">
      <PageHero
        eyebrow={t("rentals.hero.eyebrow")}
        title={t("rentals.hero.title")}
        description={t("rentals.hero.description")}
        image={images.vehicleRentals}
        alt="Vehicle rental in Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${getCustomRentalMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            {t("common.askRentalPrice")}
          </a>
          <a className="button button--light" href="#rental-options">
            <Car size={18} />
            {t("common.viewVehicles")}
          </a>
        </div>
        <div className="premium-hero-badges" aria-label={t("common.rentalBenefits")}>
          <span>
            <CheckCircle2 size={16} />
            {t("rentals.badges.0")}
          </span>
          <span>
            <CalendarDays size={16} />
            {t("rentals.badges.1")}
          </span>
          <span>
            <MessageCircle size={16} />
            {t("rentals.badges.2")}
          </span>
        </div>
      </PageHero>

      <section className="section vehicle-rental-section" id="rental-options">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("rentals.header.eyebrow")}
            title={t("rentals.header.title")}
            text={t("rentals.header.text")}
          />
          <Reveal className="rental-overview-strip">
            <span>
              <CheckCircle2 size={17} />
              {t("rentals.features.0")}
            </span>
            <span>
              <CalendarDays size={17} />
              {t("rentals.features.1")}
            </span>
            <span>
              <MapPinned size={17} />
              {t("rentals.features.2")}
            </span>
            <span>
              <MessageCircle size={17} />
              {t("rentals.features.3")}
            </span>
          </Reveal>
          <div className="vehicle-rental-grid">
            {rentalVehicles.map((vehicle, vehicleIndex) => (
              <Reveal className="vehicle-rental-card" key={vehicle.name}>
                <div className="vehicle-rental-card__media">
                  <img src={vehicle.image} alt={vehicle.alt} loading="lazy" />
                  <span>{t("rentals.cardLabels.rental")}</span>
                </div>
                <div className="vehicle-rental-card__body">
                  <h3>{vehicle.name}</h3>
                  <p>{t(`rentals.vehicles.${vehicleIndex}.text`, vehicle.text)}</p>
                  <div className="vehicle-rental-card__prices" aria-label={t("common.rentalPrices", `${vehicle.name} rental prices`, { name: vehicle.name })}>
                    <div>
                      <span>{t("rentals.cardLabels.oneDay")}</span>
                      <strong>{vehicle.oneDay}</strong>
                    </div>
                    <div>
                      <span>{t("rentals.cardLabels.weekly")}</span>
                      <strong>{vehicle.weekly}</strong>
                    </div>
                  </div>
                  <a
                    className="button button--primary vehicle-rental-card__button"
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${getRentalMessage(vehicle.name)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={18} />
                    {t("common.bookVehicle")}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="vehicle-rental-custom">
            <span className="vehicle-rental-custom__glow vehicle-rental-custom__glow--pink" aria-hidden="true" />
            <span className="vehicle-rental-custom__glow vehicle-rental-custom__glow--peach" aria-hidden="true" />
            <div className="vehicle-rental-custom__copy">
              <span className="vehicle-rental-custom__eyebrow">{t("rentals.custom.eyebrow")}</span>
              <h2>{t("rentals.custom.title")}</h2>
              <p>
                {t("rentals.custom.text")}
              </p>
              <a
                className="button button--primary vehicle-rental-custom__button"
                href={`https://wa.me/${contactInfo.whatsapp}?text=${getCustomRentalMessage()}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                {t("common.getCustomRentalPrice")}
              </a>
            </div>
            <div className="vehicle-rental-custom__panel">
              <div className="vehicle-rental-custom__float-icons" aria-hidden="true">
                <span>
                  <Car size={18} />
                </span>
                <span>
                  <CalendarDays size={18} />
                </span>
                <span>
                  <MapPinned size={18} />
                </span>
              </div>
              <h3>{t("rentals.custom.tripTypesTitle")}</h3>
              <div>
                {tripTypes.map((type, typeIndex) => (
                  <span key={type}>
                    <CheckCircle2 size={16} />
                    {t(`rentals.tripTypes.${typeIndex}`, type)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="rental-faq-panel">
            <span className="rental-faq-panel__glow rental-faq-panel__glow--pink" aria-hidden="true" />
            <span className="rental-faq-panel__glow rental-faq-panel__glow--peach" aria-hidden="true" />
            <div className="rental-faq-panel__header">
              <span className="vehicle-rental-custom__eyebrow">{t("rentals.faq.eyebrow")}</span>
              <h2>{t("rentals.faq.title")}</h2>
              <p>{t("rentals.faq.text")}</p>
            </div>
            <div className="rental-faq-list">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;
                const [question, answer] = item;

                return (
                  <article className={isOpen ? "rental-faq-item rental-faq-item--open" : "rental-faq-item"} key={question}>
                    <button
                      className="rental-faq-item__button"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    >
                      <span className="rental-faq-item__icon">
                        <CircleHelp size={18} />
                      </span>
                      <span className="rental-faq-item__question">{question}</span>
                      <ChevronDown className="rental-faq-item__chevron" size={20} />
                    </button>
                    <div className="rental-faq-item__answer">
                      <p>{answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
