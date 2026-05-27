import { MessageCircle, Moon, Sun } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../context/LanguageContext";
import { contactInfo } from "../data/travelData";

export default function BottomActionBar({ darkMode, toggleTheme }) {
  const { t } = useLanguage();

  return (
    <aside className="bottom-action-shell" aria-label={t("common.quickActions")}>
      <div className="bottom-action-bar">
        <a
          className="icon-button bottom-action-button bottom-action-button--whatsapp"
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label={t("common.whatsapp")}
        >
          <MessageCircle size={20} />
        </a>

        <div className="bottom-action-language">
          <LanguageSelector />
        </div>

        <button
          className="icon-button bottom-action-button bottom-action-button--theme"
          type="button"
          onClick={toggleTheme}
          aria-label={darkMode ? t("common.switchToLightMode") : t("common.switchToDarkMode")}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </aside>
  );
}
