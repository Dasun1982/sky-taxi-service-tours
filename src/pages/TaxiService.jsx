import {
  ArrowRight,
  Briefcase,
  CalendarCheck,
  HeartHandshake,
  MessageCircle,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Wind,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { contactInfo, images } from "../data/travelData";

const vehicleFeatures = [
  { label: "AC", icon: Wind },
  { label: "Clean vehicle", icon: Sparkles },
  { label: "Luggage space", icon: Briefcase },
  { label: "Friendly driver", icon: HeartHandshake },
];

const vehicles = [
  {
    name: "Toyota Prius",
    capacity: "Best for 1-3 passengers",
    use: "Budget-friendly hybrid car for airport transfers, city rides, and short trips.",
    image: images.toyotaPrius,
  },
  {
    name: "Honda Shuttle",
    capacity: "Best for 1-4 passengers",
    use: "Comfortable wagon with good luggage space for airport pickups and day tours.",
    image: images.hondaShuttle,
  },
  {
    name: "Honda Insight",
    capacity: "Best for 1-3 passengers",
    use: "Clean hybrid car for smooth private taxi rides across Sri Lanka.",
    image: images.hondaInsight,
  },
  {
    name: "Honda Vezel",
    capacity: "Best for 1-4 passengers",
    use: "Comfortable SUV option for couples, families, and longer routes.",
    image: images.hondaVezel,
  },
  {
    name: "Honda Freed",
    capacity: "Best for 1-5 passengers",
    use: "Spacious family vehicle with luggage space for tours and transfers.",
    image: images.hondaFreed,
  },
  {
    name: "Toyota KDH Van",
    capacity: "Best for 1-8 passengers",
    use: "Large van for families, groups, airport transfers, and island-wide tours.",
    image: images.toyotaKdh,
  },
];

const taxiPriceVehicles = ["Toyota Prius", "Honda Insight"];

const bookingSteps = [
  {
    title: "Send route",
    text: "Share pickup, drop place, date, time, passengers, and luggage.",
    icon: Route,
  },
  {
    title: "Get fair quote",
    text: "We suggest a suitable clean vehicle and send a clear price.",
    icon: Wallet,
  },
  {
    title: "Confirm driver",
    text: "Confirm by WhatsApp and receive pickup details before travel.",
    icon: CalendarCheck,
  },
  {
    title: "Travel safely",
    text: "Meet your friendly local driver and enjoy a comfortable ride.",
    icon: ShieldCheck,
  },
];

function vehicleMessage(vehicleName) {
  return vehicleName;
}

export default function TaxiService() {
  const { t } = useLanguage();
  const getVehicleMessage = (vehicleName) => encodeURIComponent(t("messages.taxiVehicle", undefined, { name: vehicleName }));
  const priceQuoteMessage = encodeURIComponent(t("messages.taxiPrice"));

  return (
    <div className="page taxi-page">
      <PageHero
        eyebrow={t("taxi.hero.eyebrow")}
        title={t("taxi.hero.title")}
        description={t("taxi.hero.description")}
        image={images.toyotaKdh}
        alt="Toyota KDH van for Sri Lanka taxi service"
      >
        <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
          <MessageCircle size={19} />
          {t("common.bookOnWhatsApp")}
        </a>
      </PageHero>

      <section className="section taxi-vehicles-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("taxi.vehiclesHeader.eyebrow")}
            title={t("taxi.vehiclesHeader.title")}
            text={t("taxi.vehiclesHeader.text")}
          />

          <div className="taxi-vehicle-grid">
            {vehicles.map((vehicle, vehicleIndex) => (
              <Reveal className="feature-card taxi-vehicle-card" key={vehicle.name}>
                <div className="taxi-vehicle-media">
                  <img className="taxi-vehicle-image" src={vehicle.image} alt={vehicle.name} loading="lazy" />
                </div>

                <div className="taxi-vehicle-body">
                  <span className="taxi-vehicle-capacity">
                    <Users size={16} />
                    {t(`taxi.vehicles.${vehicleIndex}.capacity`, vehicle.capacity)}
                  </span>
                  <h3>{vehicle.name}</h3>
                  <p>{t(`taxi.vehicles.${vehicleIndex}.use`, vehicle.use)}</p>

                  <div className="taxi-vehicle-features" aria-label={t("common.vehicleFeatures", `${vehicle.name} features`, { name: vehicle.name })}>
                    {vehicleFeatures.map((feature) => {
                      const Icon = feature.icon;
                      return (
                        <span key={feature.label}>
                          <Icon size={16} />
                          {t(`taxi.features.${vehicleFeatures.indexOf(feature)}`, feature.label)}
                        </span>
                      );
                    })}
                  </div>

                  <a
                    className="button button--primary taxi-vehicle-button"
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${getVehicleMessage(vehicle.name)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={18} />
                    {t("common.bookThisVehicle")}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft taxi-pricing-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("taxi.pricingHeader.eyebrow")}
            title={t("taxi.pricingHeader.title")}
            text={t("taxi.pricingHeader.text")}
          />

          <div className="taxi-price-grid">
            {taxiPriceVehicles.map((vehicleName) => (
              <Reveal className="feature-card taxi-price-card" key={vehicleName}>
                <span className="taxi-price-badge">{t("taxi.bestBudget")}</span>
                <h3>{vehicleName}</h3>
                <p className="taxi-price-intro">
                  {t("taxi.priceIntro")}
                </p>

                <div className="taxi-price-list">
                  <div>
                    <span>{t("taxi.oneWay")}</span>
                    <strong>Rs. 150 / km</strong>
                  </div>
                  <div>
                    <span>{t("taxi.roundTrip")}</span>
                    <strong>Rs. 100 / km</strong>
                  </div>
                </div>

                <ul className="taxi-price-notes">
                  <li>{t("taxi.priceNotes.0")}</li>
                  <li>{t("taxi.priceNotes.1")}</li>
                  <li>{t("taxi.priceNotes.2")}</li>
                </ul>

                <a
                  className="button button--primary taxi-price-button"
                  href={`https://wa.me/${contactInfo.whatsapp}?text=${priceQuoteMessage}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} />
                  {t("common.askPriceOnWhatsApp")}
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="taxi-price-message">
            <Wallet size={22} />
            <p>
              {t("taxi.priceMessage")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("taxi.stepsHeader.eyebrow")}
            title={t("taxi.stepsHeader.title")}
            text={t("taxi.stepsHeader.text")}
          />

          <div className="taxi-booking-steps">
            {bookingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal className="feature-card taxi-step-card" key={step.title}>
                  <span className="taxi-step-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="feature-card__icon">
                    <Icon size={24} />
                  </span>
                  <h3>{t(`taxi.steps.${index}.title`, step.title)}</h3>
                  <p>{t(`taxi.steps.${index}.text`, step.text)}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <Reveal className="booking-cta-panel taxi-help-cta">
            <div>
              <span className="eyebrow">{t("taxi.cta.eyebrow")}</span>
              <h2>{t("taxi.cta.title")}</h2>
              <p>{t("taxi.cta.text")}</p>
            </div>
            <div className="cta-actions">
              <a
                className="button button--primary"
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
                  t("messages.taxiHelp"),
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={19} />
                {t("taxi.cta.button")}
              </a>
              <a className="button button--light" href="#/booking">
                {t("common.bookingForm")}
                <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
