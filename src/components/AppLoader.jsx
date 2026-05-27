import { images } from "../data/travelData";
import { useLanguage } from "../context/LanguageContext";

export default function AppLoader({ isLoading }) {
  const { t } = useLanguage();

  return (
    <div className={isLoading ? "app-loader" : "app-loader app-loader--hidden"} aria-hidden={!isLoading}>
      <div className="app-loader__inner">
        <div className="app-loader__mark">
          <img src={images.logo} alt="" />
        </div>
        <p className="app-loader__text">{t("loader.text")}</p>
        <div className="app-loader__progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
