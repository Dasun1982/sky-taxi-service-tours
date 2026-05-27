import { ArrowRight, Car, Clock, Luggage, MapPinned, MessageCircle, Plane, ShieldCheck, Users } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { contactInfo, images } from "../data/travelData";

const airportVehiclePrices = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    alt: "Toyota Prius airport transfer vehicle",
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    unawatuna: "$49.99",
    weligama: "$54.99",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    alt: "Honda Shuttle airport transfer vehicle",
    passengers: "Best for 1-4 passengers",
    luggage: "3 medium bags",
    unawatuna: "$49.99",
    weligama: "$54.99",
  },
  {
    name: "Honda Insight",
    image: images.hondaInsight,
    alt: "Honda Insight airport transfer vehicle",
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    unawatuna: "$49.99",
    weligama: "$54.99",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    alt: "Honda Vezel airport transfer vehicle",
    passengers: "Best for 1-4 passengers",
    luggage: "3 medium bags",
    unawatuna: "$59.99",
    weligama: "$64.99",
  },
  {
    name: "Honda Freed",
    image: images.hondaFreed,
    alt: "Honda Freed airport transfer vehicle",
    passengers: "Best for 1-5 passengers",
    luggage: "Family luggage space",
    unawatuna: "$59.99",
    weligama: "$64.99",
  },
  {
    name: "Toyota KDH",
    image: images.toyotaKdh,
    alt: "Toyota KDH van airport transfer vehicle",
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    unawatuna: "$65.99",
    weligama: "$69.99",
  },
];

const customAirportDestinations = ["Ella", "Mirissa", "Galle", "Ahangama", "Hiriketiya", "Colombo", "Kandy", "Sigiriya", "Nuwara Eliya"];

const airportHeroBadges = [
  { label: "Flight-time checking", icon: Clock },
  { label: "Clean private vehicles", icon: Car },
  { label: "WhatsApp confirmation", icon: MessageCircle },
  { label: "Fair route-based prices", icon: ShieldCheck },
];

const airportBenefits = [
  {
    title: "Flight-time checking",
    text: "Share your flight details and we help plan the pickup time before you travel.",
    icon: Clock,
  },
  {
    title: "Fair route-based prices",
    text: "Clear starting prices for popular airport routes, with custom quotes by WhatsApp.",
    icon: ShieldCheck,
  },
  {
    title: "Clean private vehicles",
    text: "Choose a private car or van with comfortable space for passengers and luggage.",
    icon: Car,
  },
  {
    title: "Easy WhatsApp booking",
    text: "Send pickup place, date, time, passengers, and luggage for quick confirmation.",
    icon: MessageCircle,
  },
];

function transferMessage(vehicleName) {
  return vehicleName;
}

function customAirportMessage() {
  return "custom";
}

export default function AirportTransfers({ setPage }) {
  const { t } = useLanguage();
  const getTransferMessage = (vehicleName) => encodeURIComponent(t("messages.airportVehicle", undefined, { name: vehicleName }));
  const getCustomAirportMessage = () => encodeURIComponent(t("messages.airportCustom"));

  const handleHeroPointerMove = (event) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--airport-cursor-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--airport-cursor-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div className="page airport-page">
      <section className="airport-hero" onPointerMove={handleHeroPointerMove}>
        <span className="airport-hero__orb airport-hero__orb--pink" aria-hidden="true" />
        <span className="airport-hero__orb airport-hero__orb--peach" aria-hidden="true" />
        <span className="airport-hero__ring airport-hero__ring--left" aria-hidden="true" />
        <span className="airport-hero__ring airport-hero__ring--right" aria-hidden="true" />
        <span className="airport-hero__route-line" aria-hidden="true" />

        <div className="airport-hero__content">
          <span className="eyebrow">{t("airport.hero.eyebrow")}</span>
          <h1>{t("airport.hero.title")}</h1>
          <p>
            {t("airport.hero.description")}
          </p>
          <div className="airport-hero__badges">
            {airportHeroBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <span key={badge.label}>
                  <Icon size={16} />
                  {t(`airport.badges.${index}`, badge.label)}
                </span>
              );
            })}
          </div>
          <div className="airport-hero__actions">
            <button className="button button--primary" type="button" onClick={() => setPage("booking")}>
              {t("airport.hero.book")}
              <ArrowRight size={19} />
            </button>
            <a className="button button--light" href={`https://wa.me/${contactInfo.whatsapp}?text=${getCustomAirportMessage()}`} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              {t("airport.hero.ask")}
            </a>
          </div>
        </div>

        <div className="airport-hero__visual" aria-label={t("airport.hero.visualAria")}>
          <img src={images.airportWelcome} alt="Airport welcome pickup in Sri Lanka" />
          <div className="airport-hero__glass-card airport-hero__glass-card--top">
            <Plane size={18} />
            <span>{t("airport.hero.pickupReady")}</span>
          </div>
          <div className="airport-hero__glass-card airport-hero__glass-card--bottom">
            <Luggage size={18} />
            <span>{t("airport.hero.bags")}</span>
          </div>
        </div>
      </section>

      <section className="section airport-benefits-section">
        <div className="section__inner">
          <div className="airport-benefit-grid">
            {airportBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Reveal className="airport-benefit-card" key={benefit.title}>
                  <span className="airport-benefit-card__icon">
                    <Icon size={22} />
                  </span>
                  <h3>{t(`airport.benefits.${index}.title`, benefit.title)}</h3>
                  <p>{t(`airport.benefits.${index}.text`, benefit.text)}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section airport-pricing-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("airport.pricingHeader.eyebrow")}
            title={t("airport.pricingHeader.title")}
            text={t("airport.pricingHeader.text")}
          />
          <div className="airport-transfer-grid">
            {airportVehiclePrices.map((vehicle, vehicleIndex) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={vehicle.alt} loading="lazy" />
                  <span>{t("airport.labels.transfer")}</span>
                </div>
                <div className="airport-transfer-card__body">
                  <h3>{vehicle.name}</h3>
                  <div className="airport-transfer-card__meta">
                    <span>
                      <Users size={16} />
                      {t(`airport.vehicles.${vehicleIndex}.passengers`, vehicle.passengers)}
                    </span>
                    <span>
                      <Luggage size={16} />
                      {t(`airport.vehicles.${vehicleIndex}.luggage`, vehicle.luggage)}
                    </span>
                  </div>
                  <div className="airport-transfer-card__prices" aria-label={t("common.airportPrices", `${vehicle.name} airport prices`, { name: vehicle.name })}>
                    <div>
                      <span>{t("airport.labels.unawatuna")}</span>
                      <strong>{vehicle.unawatuna}</strong>
                    </div>
                    <div>
                      <span>{t("airport.labels.weligama")}</span>
                      <strong>{vehicle.weligama}</strong>
                    </div>
                  </div>
                  <a
                    className="button button--primary airport-transfer-card__button"
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${getTransferMessage(vehicle.name)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={18} />
                    {t("common.bookTransfer")}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="airport-custom-transfer">
            <span className="airport-custom-transfer__glow airport-custom-transfer__glow--pink" aria-hidden="true" />
            <span className="airport-custom-transfer__glow airport-custom-transfer__glow--peach" aria-hidden="true" />
            <div className="airport-custom-transfer__copy">
              <span className="airport-custom-transfer__eyebrow">{t("airport.labels.customEyebrow")}</span>
              <h2>{t("airport.labels.customTitle")}</h2>
              <p>
                {t("airport.labels.customText")}
              </p>
              <a
                className="button button--primary airport-custom-transfer__button"
                href={`https://wa.me/${contactInfo.whatsapp}?text=${getCustomAirportMessage()}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                {t("common.getCustomAirportPrice")}
              </a>
            </div>
            <div className="airport-custom-transfer__panel">
              <div className="airport-custom-transfer__float-icons" aria-hidden="true">
                <span>
                  <Plane size={18} />
                </span>
                <span>
                  <Car size={18} />
                </span>
                <span>
                  <MapPinned size={18} />
                </span>
              </div>
              <h3>{t("airport.labels.examples")}</h3>
              <div>
                {customAirportDestinations.map((destination) => (
                  <span key={destination}>
                    <MapPinned size={15} />
                    {destination}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
