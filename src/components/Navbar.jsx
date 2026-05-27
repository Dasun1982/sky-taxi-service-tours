import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { brand, images, navItems } from "../data/travelData";

export default function Navbar({ activePage, setPage }) {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = Math.max(window.scrollY, 0);
    let animationFrame = 0;
    let scrollIntent = 0;
    let touchStartY = 0;

    const updateNavigation = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollDelta = currentScrollY - lastScrollY;
      const directionDelta = scrollIntent || scrollDelta;

      setScrolled(currentScrollY > 16);

      if (currentScrollY < 92) {
        setNavHidden(false);
        lastScrollY = currentScrollY;
      } else if (Math.abs(directionDelta) > 8) {
        setNavHidden(directionDelta > 0);
        lastScrollY = currentScrollY;
      }

      scrollIntent = 0;
      animationFrame = 0;
    };

    const onScroll = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateNavigation);
      }
    };

    const onWheel = (event) => {
      scrollIntent = event.deltaY;
    };

    const onKeyDown = (event) => {
      const downKeys = ["ArrowDown", "PageDown", " ", "End"];
      const upKeys = ["ArrowUp", "PageUp", "Home"];

      if (downKeys.includes(event.key)) {
        scrollIntent = 16;
      }

      if (upKeys.includes(event.key)) {
        scrollIntent = -16;
      }
    };

    const onTouchStart = (event) => {
      touchStartY = event.touches[0]?.clientY || 0;
    };

    const onTouchMove = (event) => {
      const currentTouchY = event.touches[0]?.clientY || touchStartY;
      scrollIntent = touchStartY - currentTouchY;
      touchStartY = currentTouchY;
    };

    updateNavigation();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setNavHidden(false);
    }
  }, [menuOpen]);

  const goToPage = (event, page) => {
    event.preventDefault();
    setMenuOpen(false);
    setNavHidden(false);
    setPage(page);
  };

  const navShellClassName = [
    "nav-shell",
    scrolled ? "nav-shell--scrolled" : "",
    navHidden && !menuOpen ? "nav-shell--hidden" : "",
    menuOpen ? "nav-shell--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={navShellClassName}>
      <nav className="navbar" aria-label={t("common.mainNavigation")}>
        <a className="brand" href="#/" onClick={(event) => goToPage(event, "home")}>
          <span className="brand-mark">
            <img src={images.logo} alt="SKY Taxi Service & Tours logo" />
          </span>
          <span className="brand-copy">
            <span className="brand-name">{brand.name}</span>
          </span>
        </a>

        <div className="navbar__links">
          {navItems.map((item) => (
            <a
              className={activePage === item.page ? "navbar__link navbar__link--active" : "navbar__link"}
              href={item.page === "home" ? "#/" : `#/${item.page}`}
              key={item.page}
              onClick={(event) => goToPage(event, item.page)}
            >
              {t(`nav.${item.page}`, item.label)}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <a className="button button--primary navbar__booking" href="#/booking" onClick={(event) => goToPage(event, "booking")}>
            {t("common.bookNow")}
          </a>
          <button
            className="icon-button navbar__menu"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t("common.closeMenu") : t("common.openMenu")}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <a
              className={activePage === item.page ? "mobile-nav__link mobile-nav__link--active" : "mobile-nav__link"}
              href={item.page === "home" ? "#/" : `#/${item.page}`}
              key={item.page}
              onClick={(event) => goToPage(event, item.page)}
            >
              {t(`nav.${item.page}`, item.label)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
