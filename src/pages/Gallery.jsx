import { useMemo, useState } from "react";
import { Camera } from "lucide-react";
import GalleryGrid from "../components/GalleryGrid";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { galleryImages, images } from "../data/travelData";

// Categories are derived from each image's existing `location` field rather
// than a new field on every one of the 64 galleryImages entries — that field
// already carries this grouping (e.g. "Wildlife safari", "Wetland birdlife",
// "Rentals"), so this just reads intent that's already there.
const CATEGORY_RULES = [
  { key: "wildlife", label: "Wildlife", match: (loc) => /wildlife safari|wetland birdlife/i.test(loc) },
  { key: "coast", label: "Coast", match: (loc) => /beach|coast|mirissa|hiriketiya|galle coastal|surf/i.test(loc) },
  {
    key: "culture",
    label: "Culture",
    match: (loc) => /cultural heritage|sigiriya|galle fort|dambulla|kandy|colombo|mihintale|ambuluwawa/i.test(loc),
  },
  { key: "landscapes", label: "Landscapes", match: (loc) => /ella|hill country|pidurangala|nilwella/i.test(loc) },
  { key: "rentals", label: "Vehicles", match: (loc) => /rentals|taxi service|airport/i.test(loc) },
];

function categorize(item) {
  const found = CATEGORY_RULES.find((rule) => rule.match(item.location || ""));
  return found?.key || "more";
}

export default function Gallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const translatedImages = useMemo(
    () =>
      galleryImages.map((item, index) => ({
        ...item,
        category: categorize(item),
        title: t(`galleryPage.items.${index}.title`, item.title),
        location: t(`galleryPage.items.${index}.location`, item.location),
      })),
    [t],
  );

  const categories = useMemo(() => {
    const counts = new Map();
    translatedImages.forEach((item) => counts.set(item.category, (counts.get(item.category) || 0) + 1));
    return [
      { key: "all", label: "All", count: translatedImages.length },
      ...CATEGORY_RULES.filter((rule) => counts.has(rule.key)).map((rule) => ({ key: rule.key, label: rule.label, count: counts.get(rule.key) })),
      ...(counts.has("more") ? [{ key: "more", label: "More of Sri Lanka", count: counts.get("more") }] : []),
    ];
  }, [translatedImages]);

  const visibleImages =
    activeCategory === "all" ? translatedImages : translatedImages.filter((item) => item.category === activeCategory);

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
          <Reveal className="gallery-filter-bar" role="tablist" aria-label="Filter gallery by category">
            {categories.map((category) => (
              <button
                key={category.key}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.key}
                className={activeCategory === category.key ? "gallery-filter-pill gallery-filter-pill--active" : "gallery-filter-pill"}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.label}
                <span>{category.count}</span>
              </button>
            ))}
          </Reveal>
          <Reveal>
            <GalleryGrid items={visibleImages} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
