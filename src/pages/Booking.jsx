import { BadgeCheck, CalendarDays, Clock3, Luggage, MapPinned, MessageCircle, ShieldCheck, Users } from "lucide-react";
import BookingForm from "../components/BookingForm";
import PageHero from "../components/PageHero";
import PricingCard from "../components/PricingCard";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { bookingVisuals, contactInfo, images, pricingCards } from "../data/travelData";

export default function Booking() {
  const { t } = useLanguage();

  return (
    <div className="page booking-page">
      <PageHero
        eyebrow={t("booking.hero.eyebrow")}
        title={t("booking.hero.title")}
        description={t("booking.hero.description")}
        image={images.trainRide}
        alt="Sri Lanka scenic train ride and hill country route"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            {t("common.bookOnWhatsApp")}
          </a>
          <a className="button button--light" href="#booking-form">
            <CalendarDays size={18} />
            {t("booking.hero.useForm")}
          </a>
        </div>
        <div className="premium-hero-badges" aria-label={t("common.bookingBenefits")}>
          <span>
            <BadgeCheck size={16} />
            {t("common.fairPrice")}
          </span>
          <span>
            <Clock3 size={16} />
            {t("common.fastReply")}
          </span>
          <span>
            <ShieldCheck size={16} />
            {t("common.friendlyDriver")}
          </span>
          <span>
            <MapPinned size={16} />
            {t("common.islandWide")}
          </span>
        </div>
      </PageHero>

      <section className="section booking-flow-section" id="booking-form">
        <div className="section__inner split-layout split-layout--form booking-planner-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">{t("booking.formIntro.eyebrow")}</span>
            <h2>{t("booking.formIntro.title")}</h2>
            <p>
              {t("booking.formIntro.text")}
            </p>
            <div className="booking-form-highlights">
              <span>
                <CalendarDays size={17} />
                {t("booking.highlights.0")}
              </span>
              <span>
                <MapPinned size={17} />
                {t("booking.highlights.1")}
              </span>
              <span>
                <Users size={17} />
                {t("booking.highlights.2")}
              </span>
              <span>
                <Luggage size={17} />
                {t("booking.highlights.3")}
              </span>
            </div>
            <div className="booking-visual-stack" aria-label={t("common.sriLankaTravelVisuals")}>
              {bookingVisuals.map((item, index) => (
                <figure key={item.title}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <figcaption>{t(`booking.visuals.${index}.title`, item.title)}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <BookingForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft booking-service-options">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("booking.serviceHeader.eyebrow")}
            title={t("booking.serviceHeader.title")}
            text={t("booking.serviceHeader.text")}
          />
          <div className="pricing-grid">
            {pricingCards.map((item, index) => (
              <Reveal key={item.title}>
                <PricingCard
                  item={{
                    ...item,
                    title: t(`booking.pricing.${index}.title`, item.title),
                    price: t(`booking.pricing.${index}.price`, item.price),
                    text: t(`booking.pricing.${index}.text`, item.text),
                    points: item.points.map((point, pointIndex) => t(`booking.pricing.${index}.points.${pointIndex}`, point)),
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
