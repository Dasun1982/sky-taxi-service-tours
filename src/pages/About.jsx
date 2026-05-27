import { BadgeCheck, Globe2, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { heroStats, images } from "../data/travelData";

export default function About() {
  const { t } = useLanguage();
  const values = [
    {
      title: "Local knowledge",
      text: "Routes are planned with practical travel times, useful photo stops, food options, and seasonal awareness.",
      icon: Globe2,
    },
    {
      title: "Comfortable travel",
      text: "Private transport keeps the day flexible for families, couples, groups, and travelers with luggage.",
      icon: ShieldCheck,
    },
    {
      title: "Fast communication",
      text: "WhatsApp booking keeps pickup details, route changes, and trip questions easy to manage.",
      icon: BadgeCheck,
    },
  ];

  return (
    <div className="page">
      <PageHero
        eyebrow={t("about.hero.eyebrow")}
        title={t("about.hero.title")}
        description={t("about.hero.description")}
        image={images.kandyTemple}
        alt="Kandy temple route in Sri Lanka"
      />

      <section className="section">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">{t("about.approach.eyebrow")}</span>
            <h2>{t("about.approach.title")}</h2>
            <p>
              {t("about.approach.text")}
            </p>
            <div className="stat-strip">
              {heroStats.map((stat, index) => (
                <div key={stat.label}>
                  <strong>{t(`about.stats.${index}.value`, stat.value)}</strong>
                  <span>{t(`about.stats.${index}.label`, stat.label)}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.trainRide} alt="Scenic Sri Lanka train route" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("about.valuesHeader.eyebrow")}
            title={t("about.valuesHeader.title")}
            text={t("about.valuesHeader.text")}
          />
          <div className="feature-grid">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal className="feature-card" key={item.title}>
                  <span className="feature-card__icon">
                    <Icon size={24} />
                  </span>
                  <h3>{t(`about.values.${index}.title`, item.title)}</h3>
                  <p>{t(`about.values.${index}.text`, item.text)}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <Users size={42} />
          <h2>{t("about.cta.title")}</h2>
          <p>
            {t("about.cta.text")}
          </p>
        </div>
      </section>
    </div>
  );
}
