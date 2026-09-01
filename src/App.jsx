import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import "./App.css";
import AppLoader from "./components/AppLoader";
import BottomActionBar from "./components/BottomActionBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PremiumCursor from "./components/PremiumCursor";
// PHASE 4 — lazy, not eager: SeoSchema's only dependency is schemaData.js,
// which now carries ~80KB of FAQ/label text across 100+ pages (real
// content, not bloat — but none of it is needed for first paint, and
// SeoSchema renders nothing visible, only <head> script tags via
// useEffect). Eagerly importing it pulled that whole file into the main
// bundle on every route, including ones with a handful of FAQs. Loading it
// behind Suspense moves it to its own chunk, fetched after first paint —
// no visual change, since there's nothing to show while it loads.
const SeoSchema = lazy(() => import("./components/SeoSchema"));
import Breadcrumbs from "./components/Breadcrumbs";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { pageMeta } from "./data/travelData";
import { website as SITE_URL } from "./data/business";
import Home from "./pages/Home";

// Home loads eagerly (it's the page almost every visitor lands on first —
// no reason to add a chunk-fetch round trip to the most common case).
// Every other route is route-split via lazy(): visiting the homepage no
// longer downloads the code for ~60 taxi-route landing pages it will never
// render. See the <Suspense> boundary below for the loading fallback.
const Acquire = lazy(() => import("./pages/Acquire"));
const AcquisitionOverview = lazy(() => import("./pages/AcquisitionOverview"));
const AiSystem = lazy(() => import("./pages/AiSystem"));
const AirportTransfers = lazy(() => import("./pages/AirportTransfers"));
const Booking = lazy(() => import("./pages/Booking"));
const Contact = lazy(() => import("./pages/Contact"));
const Destinations = lazy(() => import("./pages/Destinations"));
const Experiences = lazy(() => import("./pages/Experiences"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Packages = lazy(() => import("./pages/Packages"));
const OneDayTours = lazy(() => import("./pages/OneDayTours"));
const RoundTours = lazy(() => import("./pages/RoundTours"));
const TaxiService = lazy(() => import("./pages/TaxiService"));
const Tours = lazy(() => import("./pages/Tours"));
const TravelGuide = lazy(() => import("./pages/TravelGuide"));
const About = lazy(() => import("./pages/About"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const VehicleRentals = lazy(() => import("./pages/VehicleRentals"));
const Valuation = lazy(() => import("./pages/Valuation"));
const Wildlife = lazy(() => import("./pages/Wildlife"));
const ColomboAirportTaxi = lazy(() => import("./pages/ColomboAirportTaxi"));
const AirportToEllaTaxi = lazy(() => import("./pages/AirportToEllaTaxi"));
const AirportToGalleTaxi = lazy(() => import("./pages/AirportToGalleTaxi"));
const AirportToHiriketiyaTaxi = lazy(() => import("./pages/AirportToHiriketiyaTaxi"));
const AirportToKandyTaxi = lazy(() => import("./pages/AirportToKandyTaxi"));
const AirportToMirissaTaxi = lazy(() => import("./pages/AirportToMirissaTaxi"));
const AirportToSigiriyaTaxi = lazy(() => import("./pages/AirportToSigiriyaTaxi"));
const AirportToUnawatunaTaxi = lazy(() => import("./pages/AirportToUnawatunaTaxi"));
const AirportToWeligamaTaxi = lazy(() => import("./pages/AirportToWeligamaTaxi"));
const AirportTransferSriLanka = lazy(() => import("./pages/AirportTransferSriLanka"));
const EllaTaxiService = lazy(() => import("./pages/EllaTaxiService"));
const KandyTaxiService = lazy(() => import("./pages/KandyTaxiService"));
const GalleTaxiService = lazy(() => import("./pages/GalleTaxiService"));
const SigiriyaTaxiService = lazy(() => import("./pages/SigiriyaTaxiService"));
const MirissaTaxiService = lazy(() => import("./pages/MirissaTaxiService"));
const PrivateDriverSriLanka = lazy(() => import("./pages/PrivateDriverSriLanka"));
const BudgetTaxiSriLanka = lazy(() => import("./pages/BudgetTaxiSriLanka"));
const SriLankaTourDriver = lazy(() => import("./pages/SriLankaTourDriver"));
const SriLankaTaxiService = lazy(() => import("./pages/SriLankaTaxiService"));
const SriLankaPrivateTours = lazy(() => import("./pages/SriLankaPrivateTours"));
const SriLankaRoundTours = lazy(() => import("./pages/SriLankaRoundTours"));
const DayToursSriLanka = lazy(() => import("./pages/DayToursSriLanka"));
const YalaSafariTransfer = lazy(() => import("./pages/YalaSafariTransfer"));
const UnawatunaTaxiService = lazy(() => import("./pages/UnawatunaTaxiService"));
const WeligamaTaxiService = lazy(() => import("./pages/WeligamaTaxiService"));
const HiriketiyaTaxiService = lazy(() => import("./pages/HiriketiyaTaxiService"));
const NuwaraEliyaTaxiService = lazy(() => import("./pages/NuwaraEliyaTaxiService"));
const BentotaTaxiService = lazy(() => import("./pages/BentotaTaxiService"));
const NegomboTaxiService = lazy(() => import("./pages/NegomboTaxiService"));
const ArugamBayTaxiService = lazy(() => import("./pages/ArugamBayTaxiService"));
const DambullaTaxiService = lazy(() => import("./pages/DambullaTaxiService"));
const AirportToNegomboTaxi = lazy(() => import("./pages/AirportToNegomboTaxi"));
const AirportToBentotaTaxi = lazy(() => import("./pages/AirportToBentotaTaxi"));
const AirportToNuwaraEliyaTaxi = lazy(() => import("./pages/AirportToNuwaraEliyaTaxi"));
const AirportToArugamBayTaxi = lazy(() => import("./pages/AirportToArugamBayTaxi"));
const AirportToDambullaTaxi = lazy(() => import("./pages/AirportToDambullaTaxi"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AiTripPlanner = lazy(() => import("./pages/AiTripPlanner"));
const Transport = lazy(() => import("./pages/Transport"));
const DriverGuideSriLanka = lazy(() => import("./pages/DriverGuideSriLanka"));
const FiveDaySriLankaTour = lazy(() => import("./pages/FiveDaySriLankaTour"));
const HowManyDaysInSriLanka = lazy(() => import("./pages/HowManyDaysInSriLanka"));
const IsAPrivateDriverWorthIt = lazy(() => import("./pages/IsAPrivateDriverWorthIt"));
const EllaVsNuwaraEliya = lazy(() => import("./pages/EllaVsNuwaraEliya"));
const BestBeachesNearGalle = lazy(() => import("./pages/BestBeachesNearGalle"));
const GalleToElla = lazy(() => import("./pages/GalleToElla"));
const ColomboDestination = lazy(() => import("./pages/ColomboDestination"));
const SinharajaDestination = lazy(() => import("./pages/SinharajaDestination"));
const ThingsToDoInGalle = lazy(() => import("./pages/ThingsToDoInGalle"));
const ThingsToDoInUnawatuna = lazy(() => import("./pages/ThingsToDoInUnawatuna"));
const ThingsToDoInElla = lazy(() => import("./pages/ThingsToDoInElla"));
const ThingsToDoInKandy = lazy(() => import("./pages/ThingsToDoInKandy"));
const ThingsToDoInSigiriya = lazy(() => import("./pages/ThingsToDoInSigiriya"));
const TwoDaysInSriLanka = lazy(() => import("./pages/TwoDaysInSriLanka"));
const ThreeDaysInSriLanka = lazy(() => import("./pages/ThreeDaysInSriLanka"));
const SevenDaysInSriLanka = lazy(() => import("./pages/SevenDaysInSriLanka"));
const TenDaysInSriLanka = lazy(() => import("./pages/TenDaysInSriLanka"));
const UnawatunaVsMirissa = lazy(() => import("./pages/UnawatunaVsMirissa"));
const GalleVsColombo = lazy(() => import("./pages/GalleVsColombo"));
const SigiriyaVsElla = lazy(() => import("./pages/SigiriyaVsElla"));
const EllaToKandy = lazy(() => import("./pages/EllaToKandy"));
const KandyToSigiriya = lazy(() => import("./pages/KandyToSigiriya"));
const SigiriyaToYala = lazy(() => import("./pages/SigiriyaToYala"));
const GalleToMirissa = lazy(() => import("./pages/GalleToMirissa"));
const MirissaToElla = lazy(() => import("./pages/MirissaToElla"));
const BestPlacesToVisitFromElla = lazy(() => import("./pages/BestPlacesToVisitFromElla"));
const BestPlacesToVisitFromKandy = lazy(() => import("./pages/BestPlacesToVisitFromKandy"));
const SriLankaBeaches = lazy(() => import("./pages/SriLankaBeaches"));
const SriLankaHillCountry = lazy(() => import("./pages/SriLankaHillCountry"));
const SriLankaCultureAncientCities = lazy(() => import("./pages/SriLankaCultureAncientCities"));
const SriLankaSurfing = lazy(() => import("./pages/SriLankaSurfing"));
const SouthCoastVsEastCoast = lazy(() => import("./pages/SouthCoastVsEastCoast"));
const PrivateDriverVsRentalCar = lazy(() => import("./pages/PrivateDriverVsRentalCar"));
const SriLankaHoneymoon = lazy(() => import("./pages/SriLankaHoneymoon"));
const SriLankaFamilyTravel = lazy(() => import("./pages/SriLankaFamilyTravel"));
const SriLankaBudgetTravel = lazy(() => import("./pages/SriLankaBudgetTravel"));
const HowToTravelAroundSriLanka = lazy(() => import("./pages/HowToTravelAroundSriLanka"));
const HowMuchDoesASriLankaTripCost = lazy(() => import("./pages/HowMuchDoesASriLankaTripCost"));
const BestPlacesToVisitInSriLanka = lazy(() => import("./pages/BestPlacesToVisitInSriLanka"));
const BestTimeToVisitSriLanka = lazy(() => import("./pages/BestTimeToVisitSriLanka"));
const FirstTimeVisitorSriLanka = lazy(() => import("./pages/FirstTimeVisitorSriLanka"));
const TrainVsPrivateCarSriLanka = lazy(() => import("./pages/TrainVsPrivateCarSriLanka"));
const EllaVsKandy = lazy(() => import("./pages/EllaVsKandy"));
const GalleToYala = lazy(() => import("./pages/GalleToYala"));
const UnawatunaToElla = lazy(() => import("./pages/UnawatunaToElla"));
const IsSriLankaSafeForTourists = lazy(() => import("./pages/IsSriLankaSafeForTourists"));
const TravelSriLankaWithoutACar = lazy(() => import("./pages/TravelSriLankaWithoutACar"));

const pages = {
  home: Home,
  acquire: Acquire,
  "acquisition-overview": AcquisitionOverview,
  "ai-system": AiSystem,
  valuation: Valuation,
  tours: Tours,
  destinations: Destinations,
  experiences: Experiences,
  wildlife: Wildlife,
  "travel-guide": TravelGuide,
  "one-day-tours": OneDayTours,
  "round-tours": RoundTours,
  taxi: TaxiService,
  airport: AirportTransfers,
  packages: Packages,
  gallery: Gallery,
  booking: Booking,
  about: About,
  testimonials: Testimonials,
  contact: Contact,
  rentals: VehicleRentals,
  "vehicle-rentals": VehicleRentals,
  "colombo-airport-taxi": ColomboAirportTaxi,
  "airport-to-ella": AirportToEllaTaxi,
  "airport-to-galle": AirportToGalleTaxi,
  "airport-to-hiriketiya": AirportToHiriketiyaTaxi,
  "airport-to-kandy": AirportToKandyTaxi,
  "airport-to-mirissa": AirportToMirissaTaxi,
  "airport-to-sigiriya": AirportToSigiriyaTaxi,
  "airport-to-unawatuna": AirportToUnawatunaTaxi,
  "airport-to-weligama": AirportToWeligamaTaxi,
  "airport-transfer-sri-lanka": AirportTransferSriLanka,
  "ella-taxi-service": EllaTaxiService,
  "kandy-taxi-service": KandyTaxiService,
  "galle-taxi-service": GalleTaxiService,
  "sigiriya-taxi-service": SigiriyaTaxiService,
  "mirissa-taxi-service": MirissaTaxiService,
  "private-driver-sri-lanka": PrivateDriverSriLanka,
  "budget-taxi-sri-lanka": BudgetTaxiSriLanka,
  "sri-lanka-tour-driver": SriLankaTourDriver,
  "sri-lanka-taxi-service": SriLankaTaxiService,
  "sri-lanka-private-tours": SriLankaPrivateTours,
  "sri-lanka-round-tours": SriLankaRoundTours,
  "day-tours-sri-lanka": DayToursSriLanka,
  "yala-safari-transfer": YalaSafariTransfer,
  "unawatuna-taxi-service": UnawatunaTaxiService,
  "weligama-taxi-service": WeligamaTaxiService,
  "hiriketiya-taxi-service": HiriketiyaTaxiService,
  "nuwara-eliya-taxi-service": NuwaraEliyaTaxiService,
  "bentota-taxi-service": BentotaTaxiService,
  "negombo-taxi-service": NegomboTaxiService,
  "arugam-bay-taxi-service": ArugamBayTaxiService,
  "dambulla-taxi-service": DambullaTaxiService,
  "airport-to-negombo": AirportToNegomboTaxi,
  "airport-to-bentota": AirportToBentotaTaxi,
  "airport-to-nuwara-eliya": AirportToNuwaraEliyaTaxi,
  "airport-to-arugam-bay": AirportToArugamBayTaxi,
  "airport-to-dambulla": AirportToDambullaTaxi,
  "not-found": NotFound,
  "ai-trip-planner": AiTripPlanner,
  transport: Transport,
  "driver-guide-sri-lanka": DriverGuideSriLanka,
  "5-day-sri-lanka-tour": FiveDaySriLankaTour,
  "how-many-days-in-sri-lanka": HowManyDaysInSriLanka,
  "is-a-private-driver-worth-it": IsAPrivateDriverWorthIt,
  "ella-vs-nuwara-eliya": EllaVsNuwaraEliya,
  "best-beaches-near-galle": BestBeachesNearGalle,
  "galle-to-ella": GalleToElla,
  colombo: ColomboDestination,
  sinharaja: SinharajaDestination,
  "things-to-do-in-galle": ThingsToDoInGalle,
  "things-to-do-in-unawatuna": ThingsToDoInUnawatuna,
  "things-to-do-in-ella": ThingsToDoInElla,
  "things-to-do-in-kandy": ThingsToDoInKandy,
  "things-to-do-in-sigiriya": ThingsToDoInSigiriya,
  "2-days-in-sri-lanka": TwoDaysInSriLanka,
  "3-days-in-sri-lanka": ThreeDaysInSriLanka,
  "7-days-in-sri-lanka": SevenDaysInSriLanka,
  "10-days-in-sri-lanka": TenDaysInSriLanka,
  "unawatuna-vs-mirissa": UnawatunaVsMirissa,
  "galle-vs-colombo": GalleVsColombo,
  "sigiriya-vs-ella": SigiriyaVsElla,
  "ella-to-kandy": EllaToKandy,
  "kandy-to-sigiriya": KandyToSigiriya,
  "sigiriya-to-yala": SigiriyaToYala,
  "galle-to-mirissa": GalleToMirissa,
  "mirissa-to-ella": MirissaToElla,
  "best-places-to-visit-from-ella": BestPlacesToVisitFromElla,
  "best-places-to-visit-from-kandy": BestPlacesToVisitFromKandy,
  "sri-lanka-beaches": SriLankaBeaches,
  "sri-lanka-hill-country": SriLankaHillCountry,
  "sri-lanka-culture-ancient-cities": SriLankaCultureAncientCities,
  "sri-lanka-surfing": SriLankaSurfing,
  "south-coast-vs-east-coast": SouthCoastVsEastCoast,
  "private-driver-vs-rental-car": PrivateDriverVsRentalCar,
  "sri-lanka-honeymoon": SriLankaHoneymoon,
  "sri-lanka-family-travel": SriLankaFamilyTravel,
  "sri-lanka-budget-travel": SriLankaBudgetTravel,
  "how-to-travel-around-sri-lanka": HowToTravelAroundSriLanka,
  "how-much-does-a-sri-lanka-trip-cost": HowMuchDoesASriLankaTripCost,
  "best-places-to-visit-in-sri-lanka": BestPlacesToVisitInSriLanka,
  "best-time-to-visit-sri-lanka": BestTimeToVisitSriLanka,
  "first-time-visitor-sri-lanka": FirstTimeVisitorSriLanka,
  "train-vs-private-car-sri-lanka": TrainVsPrivateCarSriLanka,
  "ella-vs-kandy": EllaVsKandy,
  "galle-to-yala": GalleToYala,
  "unawatuna-to-ella": UnawatunaToElla,
  "is-sri-lanka-safe-for-tourists": IsSriLankaSafeForTourists,
  "can-i-travel-sri-lanka-without-a-car": TravelSriLankaWithoutACar,
};

// Cannibalization fix (see the SEO audit): each of these pages targets a
// search intent that's a near-duplicate of an existing, stronger page
// (nav-linked, or with more real product signal like pricing). Rather than
// deleting or redirecting them — real content that still serves direct
// visitors and existing backlinks — their canonical tag points at the
// stronger page, telling search engines which one to actually index.
// `/private-driver-sri-lanka` and `/sri-lanka-tour-driver` are deliberately
// NOT included here (Phase 7 audit): both were rewritten with genuinely
// different intent — flexible/short-term hire vs. one continuous multi-day
// chauffeur — rather than canonicalized away. `/sri-lanka-private-tours` IS
// included: it carries no real pricing anywhere on the page (unlike /tours,
// which pulls real prices from pricing.js/tours.js for every listed tour),
// so it can't offer anything /tours doesn't already do better.
const canonicalOverrides = {
  "sri-lanka-taxi-service": "taxi",
  "sri-lanka-round-tours": "round-tours",
  "day-tours-sri-lanka": "one-day-tours",
  "sri-lanka-private-tours": "tours",
  "airport-transfer-sri-lanka": "airport",
};

function getPageFromHash() {
  const hashPage = window.location.hash.replace("#/", "").replace("#", "");
  const pathPage = window.location.pathname.replace(/^\/+|\/+$/g, "");
  const page = hashPage || pathPage || "home";
  if (page === "rentals") return "vehicle-rentals";
  return pages[page] ? page : "not-found";
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

// Open Graph/Twitter tags use `property`/`name` attributes that index.html
// only ever set once, statically, for the home page — a page shared on
// WhatsApp/Facebook/Twitter/etc. always showed the SAME title/description
// regardless of which page was actually open. This mirrors ensureMetaTag's
// pattern but for `property="og:...”`, so every page gets its own.
function ensurePropertyMetaTag(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function ensureCanonicalLink(href) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
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
    // MOBILE PERFORMANCE — this was 550ms with no technical justification
    // (not gated on fonts, images, or any real readiness signal), directly
    // adding ~550ms of dead time to LCP/FCP on every single page load
    // before the real content became visible under the full-viewport
    // loader overlay. Shortened, not removed: the branded loading screen
    // and its fade-out animation (App.css `.app-loader`) are unchanged —
    // only the artificial minimum wait is reduced.
    const timer = window.setTimeout(() => setIsLoading(false), 150);
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
    const title = t(`meta.${activePage}.title`, meta.title);
    const description = t(`meta.${activePage}.description`, meta.description);
    // canonicalOverrides: pages whose search intent is a near-duplicate of an
    // existing, stronger primary page (see the cannibalization audit). The
    // secondary page stays fully live and crawlable — this only tells search
    // engines which of the two to actually index, the standard non-destructive
    // fix (no delete, no redirect, fully reversible).
    const canonicalTarget = canonicalOverrides[activePage] || activePage;
    const canonicalUrl = `${SITE_URL}${canonicalTarget === "home" ? "/" : `/${canonicalTarget}`}`;
    // og:url stays the page actually being viewed — a WhatsApp/social share
    // of the secondary page should link back to that page, not silently to
    // the canonical target.
    const actualUrl = `${SITE_URL}${activePage === "home" ? "/" : `/${activePage}`}`;

    document.title = title;
    ensureMetaTag("description", description);
    // The router falls back to a client-rendered not-found page for any
    // unmatched path, but the static-hosting rewrite still serves index.html
    // (HTTP 200) for it — noindex is the standard mitigation so this
    // soft-404 state never gets indexed as real content.
    // /vehicle-rentals was already removed from the sitemap, nav, and
    // schema (see seoPages.js SOFT_DEINDEXED) with a note that it should
    // also stop claiming index,follow — closing that gap here. Unlike
    // not-found (a soft-404, not real content — nofollow too), this is a
    // real page with real outbound links, so it keeps "follow" to still
    // pass link equity; it just no longer asks to be indexed on its own.
    const robotsValue =
      activePage === "not-found"
        ? "noindex, nofollow"
        : activePage === "vehicle-rentals"
          ? "noindex, follow"
          : "index, follow";
    ensureMetaTag("robots", robotsValue);
    // Previously static in index.html (always the home page's own
    // title/description/URL) — a link to any other page shared on
    // WhatsApp/Facebook/Twitter showed the wrong preview. Now kept in
    // sync with the same per-page data driving the <title>/description
    // above.
    ensurePropertyMetaTag("og:title", title);
    ensurePropertyMetaTag("og:description", description);
    ensurePropertyMetaTag("og:url", actualUrl);
    ensureMetaTag("twitter:card", "summary_large_image");
    ensureMetaTag("twitter:title", title);
    ensureMetaTag("twitter:description", description);
    ensureCanonicalLink(canonicalUrl);
  }, [activePage, t]);

  useEffect(() => {
    document.documentElement.classList.remove("sky-scroll-lock");
    document.body.classList.remove("sky-scroll-lock");
    document.body.style.overflow = "";
  }, [activePage]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
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

    const observeReveal = (node) => {
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      if (node.classList.contains("reveal")) observer.observe(node);
      node.querySelectorAll?.(".reveal").forEach((item) => observer.observe(item));
    };

    // Route pages load via React.lazy/Suspense (every page except Home,
    // which is imported eagerly) — when this effect first runs after an
    // activePage change, a lazy page's real DOM (and its .reveal elements)
    // may not exist yet; only the Suspense fallback is mounted. Querying
    // once here misses every .reveal element added after the lazy chunk
    // resolves, so those elements never get observed and stay permanently
    // at their pre-reveal opacity:0 state. The MutationObserver below
    // catches .reveal elements as React inserts them, whenever that
    // happens, so lazy pages reveal correctly the same as Home does.
    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

    const main = document.querySelector("main");
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => observeReveal(node));
      });
    });
    if (main) mutationObserver.observe(main, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
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
      ".tour-type-card",
      ".tour-idea-card",
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
      <Suspense fallback={null}>
        <SeoSchema activePage={activePage} />
      </Suspense>
      <Navbar activePage={activePage} setPage={setPage} />
      <Breadcrumbs activePage={activePage} />
      <main>
        <Suspense fallback={<div className="route-loading" aria-hidden="true" />}>
          <ActivePage setPage={setPage} />
        </Suspense>
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
