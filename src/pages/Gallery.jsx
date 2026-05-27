import { Camera } from "lucide-react";
import GalleryGrid from "../components/GalleryGrid";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { galleryImages, images } from "../data/travelData";

export default function Gallery() {
  const { t } = useLanguage();
  const translatedImages = galleryImages.map((item, index) => ({
    ...item,
    title: t(`galleryPage.items.${index}.title`, item.title),
    location: t(`galleryPage.items.${index}.location`, item.location),
  }));

  return (
    <div className="page">
      <PageHero
        eyebrow={t("galleryPage.hero.eyebrow")}
        title={t("galleryPage.hero.title")}
        description={t("galleryPage.hero.description")}
        image={images.blueBeach}
        alt="Blue Beach in Sri Lanka"
      >
        <span className="hero-pill">
          <Camera size={18} />
          {t("galleryPage.localImagesOnly")}
        </span>
      </PageHero>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t("galleryPage.header.eyebrow")}
            title={t("galleryPage.header.title")}
            text={t("galleryPage.header.text")}
          />
          <Reveal>
            <GalleryGrid items={translatedImages} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
