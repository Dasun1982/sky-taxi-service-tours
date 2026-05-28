import { useEffect, useMemo, useState } from "react";
import "./App.css";
import AppLoader from "./components/AppLoader";
import BottomActionBar from "./components/BottomActionBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PremiumCursor from "./components/PremiumCursor";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { pageMeta } from "./data/travelData";
import AirportTransfers from "./pages/AirportTransfers";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import OneDayTours from "./pages/OneDayTours";
import RoundTours from "./pages/RoundTours";
import TaxiService from "./pages/TaxiService";
import Tours from "./pages/Tours";
import About from "./pages/About";
import VehicleRentals from "./pages/VehicleRentals";
import ColomboAirportTaxi from "./pages/ColomboAirportTaxi";

const pages = {
  home: Home,
  tours: Tours,
  "one-day-tours": OneDayTours,
  "round-tours": RoundTours,
  taxi: TaxiService,
  airport: AirportTransfers,
  packages: Packages,
  gallery: Gallery,
  booking: Booking,
  about: About,
  contact: Contact,
  rentals: VehicleRentals,
  "vehicle-rentals": VehicleRentals,
  "colombo-airport-taxi": ColomboAirportTaxi,
};

function getPageFromHash() {
  const hashPage = window.location.hash.replace("#/", "").replace("#", "");
  const pathPage = window.location.pathname.replace(/^\/+|\/+$/g, "");
  const page = hashPage || pathPage || "home";
  if (page === "rentals") return "vehicle-rentals";
  return pages[page] ? page : "home";
}

function ensureMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function routeHash(page) {
  return page === "home" ? "#/" : `#/${page}`;
}

function AppShell() {
  const { direction, language, t } = useLanguage();
  const [activePage, setActivePage] = useState(getPageFromHash);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("sky-theme") === "dark");

  const ActivePage = useMemo(() => pages[activePage] || Home, [activePage]);

  useEffect(() => {
    const routeFromHash = () => setActivePage(getPageFromHash());
    window.addEventListener("hashchange", routeFromHash);
    window.addEventListener("popstate", routeFromHash);
    return () => {
      window.removeEventListener("hashchange", routeFromHash);
      window.removeEventListener("popstate", routeFromHash);
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 550);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      return undefined;
    }

    let rafId = 0;
    const updateParallax = () => {
      document.documentElement.style.setProperty("--sky-scroll-soft", `${window.scrollY * -0.018}px`);
      document.documentElement.style.setProperty("--sky-scroll-deep", `${window.scrollY * 0.012}px`);
      rafId = 0;
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
      document.documentElement.style.removeProperty("--sky-scroll-soft");
      document.documentElement.style.removeProperty("--sky-scroll-deep");
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("sky-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const meta = pageMeta[activePage] || pageMeta.home;
    document.title = t(`meta.${activePage}.title`, meta.title);
    ensureMetaTag("description", t(`meta.${activePage}.description`, meta.description));
  }, [activePage, t]);

  useEffect(() => {
    document.documentElement.classList.remove("sky-scroll-lock");
    document.body.classList.remove("sky-scroll-lock");
    document.body.style.overflow = "";
  }, [activePage]);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      reveals.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    reveals.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activePage]);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) {
      return undefined;
    }

    const tiltSelector = [
      ".home-service-card",
      ".home-tour-card",
      ".destination-showcase-card",
      ".home-experience-card",
      ".why-card-home",
      ".tour-category-card",
      ".tour-type-card",
      ".tour-idea-card",
      ".starter-package-card",
      ".airport-visual-card",
      ".airport-transfer-card",
      ".airport-benefit-card",
      ".vehicle-rental-card",
      ".feature-card",
      ".pricing-card",
      ".tour-card",
      ".package-card",
      ".review-card",
      ".contact-card",
      ".form-panel",
      ".faq-item",
      ".timeline",
      ".image-panel",
      ".package-slide",
      ".simple-tour-card",
      ".gallery-card",
      ".testimonial-slider__card",
      ".booking-cta-panel",
      ".contact-cta-panel",
      ".home-contact-card",
      ".home-map-card",
      ".map-panel",
      ".booking-visual-stack figure",
    ].join(",");

    const magneticSelector = [
      ".button",
      ".service-detail-button",
      ".text-button",
      ".icon-button",
      ".navbar__link",
      ".mobile-nav__link",
      ".dot",
    ].join(",");

    const tiltItems = Array.from(document.querySelectorAll(tiltSelector));
    const magneticItems = Array.from(document.querySelectorAll(magneticSelector));
    const hero = document.querySelector(".home-hero");

    const moveTilt = (event) => {
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      element.classList.add("is-tilting");
      element.style.setProperty("--tilt-x", `${(-y * 5.5).toFixed(2)}deg`);
      element.style.setProperty("--tilt-y", `${(x * 6.5).toFixed(2)}deg`);
      element.style.setProperty("--shine-x", `${((x + 0.5) * 100).toFixed(1)}%`);
      element.style.setProperty("--shine-y", `${((y + 0.5) * 100).toFixed(1)}%`);
    };

    const resetTilt = (event) => {
      const element = event.currentTarget;
      element.classList.remove("is-tilting");
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
      element.style.removeProperty("--shine-x");
      element.style.removeProperty("--shine-y");
    };

    const moveMagnet = (event) => {
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      const strength = element.classList.contains("icon-button") ? 6 : 10;

      element.style.setProperty("--magnet-x", `${((x / rect.width) * strength).toFixed(2)}px`);
      element.style.setProperty("--magnet-y", `${((y / rect.height) * strength).toFixed(2)}px`);
    };

    const resetMagnet = (event) => {
      event.currentTarget.style.setProperty("--magnet-x", "0px");
      event.currentTarget.style.setProperty("--magnet-y", "0px");
    };

    const moveHeroGlow = (event) => {
      const rect = hero.getBoundingClientRect();
      hero.classList.add("home-hero--cursor-active");
      hero.style.setProperty("--cursor-x", `${(((event.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`);
      hero.style.setProperty("--cursor-y", `${(((event.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`);
    };

    const resetHeroGlow = () => {
      hero?.classList.remove("home-hero--cursor-active");
    };

    tiltItems.forEach((item) => {
      item.addEventListener("pointermove", moveTilt);
      item.addEventListener("pointerleave", resetTilt);
    });

    magneticItems.forEach((item) => {
      item.addEventListener("pointermove", moveMagnet);
      item.addEventListener("pointerleave", resetMagnet);
    });

    hero?.addEventListener("pointermove", moveHeroGlow);
    hero?.addEventListener("pointerleave", resetHeroGlow);

    return () => {
      tiltItems.forEach((item) => {
        item.removeEventListener("pointermove", moveTilt);
        item.removeEventListener("pointerleave", resetTilt);
      });

      magneticItems.forEach((item) => {
        item.removeEventListener("pointermove", moveMagnet);
        item.removeEventListener("pointerleave", resetMagnet);
      });

      hero?.removeEventListener("pointermove", moveHeroGlow);
      hero?.removeEventListener("pointerleave", resetHeroGlow);
    };
  }, [activePage]);

  const setPage = (page) => {
    setActivePage(page);
    const nextHash = routeHash(page);
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, "", nextHash);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"} data-language={language} dir={direction}>
      <AppLoader isLoading={isLoading} />
      <Navbar activePage={activePage} setPage={setPage} />
      <main>
        <ActivePage setPage={setPage} />
      </main>
      <Footer setPage={setPage} />
      <BottomActionBar darkMode={darkMode} toggleTheme={() => setDarkMode((current) => !current)} />
      <PremiumCursor />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}
