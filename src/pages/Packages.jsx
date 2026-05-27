import { MessageCircle } from "lucide-react";
import PackageCard from "../components/PackageCard";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { contactInfo, images, packages } from "../data/travelData";

export default function Packages({ setPage }) {
  const { t } = useLanguage();

  return (
    <div className="page">
      <PageHero
        eyebrow={t("packagesPage.hero.eyebrow")}
        title={t("packagesPage.hero.title")}
        description={t("packagesPage.hero.description")}
        image={images.pidurangala}
        alt="Pidurangala viewpoint near Sigiriya"
      >
        <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
          <MessageCircle size={19} />
          {t("common.bookOnWhatsApp")}
        </a>
      </PageHero>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("packagesPage.header.eyebrow")}
            title={t("packagesPage.header.title")}
            text={t("packagesPage.header.text")}
          />
          <div className="package-grid">
            {packages.map((item, index) => {
              const translatedItem = {
                ...item,
                title: t(`packagesPage.items.${index}.title`, item.title),
                label: t(`packagesPage.items.${index}.label`, item.label),
                text: t(`packagesPage.items.${index}.text`, item.text),
                points: item.points.map((point, pointIndex) => t(`packagesPage.items.${index}.points.${pointIndex}`, point)),
              };

              return (
              <Reveal key={item.title}>
                <PackageCard item={translatedItem} onBook={() => setPage("booking")} />
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
