import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { languageOptions, translations } from "../data/translations";

const LanguageContext = createContext(null);
const fallbackLanguage = "en";

function getSavedLanguage() {
  const saved = localStorage.getItem("sky-language");
  return translations[saved] ? saved : fallbackLanguage;
}

function readPath(source, path) {
  return path.split(".").reduce((value, key) => (value == null ? undefined : value[key]), source);
}

function formatValue(value, params) {
  if (typeof value !== "string" || !params) {
    return value;
  }

  return Object.entries(params).reduce((text, [key, replacement]) => text.replaceAll(`{${key}}`, replacement), value);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getSavedLanguage);
  const activeLanguage = languageOptions.find((option) => option.code === language) || languageOptions[0];
  const direction = activeLanguage.dir || "ltr";

  useEffect(() => {
    localStorage.setItem("sky-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.body.dir = direction;
  }, [direction, language]);

  const value = useMemo(() => {
    const t = (path, fallback, params) => {
      const translated = readPath(translations[language], path);
      const english = readPath(translations[fallbackLanguage], path);
      return formatValue(translated ?? english ?? fallback ?? path, params);
    };

    return {
      activeLanguage,
      direction,
      isRtl: direction === "rtl",
      language,
      languages: languageOptions,
      setLanguage,
      t,
    };
  }, [activeLanguage, direction, language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
