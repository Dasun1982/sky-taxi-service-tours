import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function PackageCard({ item, onBook }) {
  const { t } = useLanguage();

  return (
    <article className="package-card">
      <div className="package-card__media">
        <img src={item.image} alt={item.alt} loading="lazy" />
        <span>{item.label}</span>
      </div>
      <div className="package-card__body">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <ul>
          {item.points.map((point) => (
            <li key={point}>
              <CheckCircle2 size={16} />
              {point}
            </li>
          ))}
        </ul>
        <button className="text-button" type="button" onClick={onBook}>
          {t("common.askForPackageQuote")}
        </button>
      </div>
    </article>
  );
}
