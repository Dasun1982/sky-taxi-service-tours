import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe2, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSelector() {
  const { activeLanguage, language, languages, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const selectorRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!selectorRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const chooseLanguage = (code) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div className={open ? "language-selector language-selector--open" : "language-selector"} ref={selectorRef}>
      <button
        className="language-selector__trigger"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={t("language.button")}
      >
        <Globe2 size={18} />
        <span>{activeLanguage.shortLabel}</span>
        <ChevronDown className="language-selector__chevron" size={16} />
      </button>

      {open && (
        <button
          className="language-selector__backdrop"
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t("common.closeLanguageMenu")}
        />
      )}

      {open && (
        <div className="language-selector__panel" role="dialog" aria-label={t("language.choose")}>
          <div className="language-selector__header">
            <div>
              <strong>{t("language.choose")}</strong>
              <span>{t("language.subtitle")}</span>
            </div>
            <button className="language-selector__close" type="button" onClick={() => setOpen(false)} aria-label={t("common.closeLanguageMenu")}>
              <X size={18} />
            </button>
          </div>

          <div className="language-selector__list">
            {languages.map((option) => {
              const selected = option.code === language;

              return (
                <button
                  className={selected ? "language-selector__option language-selector__option--active" : "language-selector__option"}
                  type="button"
                  key={option.code}
                  onClick={() => chooseLanguage(option.code)}
                >
                  <span className="language-selector__option-code">{option.shortLabel}</span>
                  <span>
                    <strong>{option.nativeLabel}</strong>
                    <small>{option.label}</small>
                  </span>
                  {selected && <Check size={18} />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
