import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const buttonSelector = [
  "a",
  "button",
  "[role='button']",
  ".button",
  ".service-detail-button",
  ".text-button",
  ".icon-button",
  ".navbar__link",
  ".mobile-nav__link",
  ".faq-item__button",
  ".dot",
].join(",");

const cardSelector = [
  ".home-service-card",
  ".home-tour-card",
  ".why-card-home",
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
  ".vehicle-rental-card",
].join(",");

const imageSelector = [
  "img",
  ".tour-card__media",
  ".package-card__media",
  ".home-service-card__image",
  ".home-tour-card",
  ".gallery-card",
  ".image-panel",
  ".package-slide",
].join(",");

export default function PremiumCursor() {
  const rootRef = useRef(null);
  const trailRefs = useRef([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateEnabled = () => setEnabled(finePointer.matches && !reducedMotion.matches);

    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);

    return () => {
      finePointer.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("has-premium-cursor");
      return undefined;
    }

    const root = rootRef.current;
    if (!root) {
      return undefined;
    }

    let rafId = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let dotX = targetX;
    let dotY = targetY;
    let followerX = targetX;
    let followerY = targetY;
    let glowX = targetX;
    let glowY = targetY;
    const trail = trailRefs.current.map(() => ({ x: targetX, y: targetY }));

    const setCursorState = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const isButton = target?.closest(buttonSelector);
      const isText = target?.closest("input, textarea, select");
      const isImage = target?.closest(imageSelector);
      const isCard = target?.closest(cardSelector);
      const isHero = target?.closest(".home-hero");

      if (isText) {
        root.dataset.cursor = "text";
      } else if (isButton) {
        root.dataset.cursor = "button";
      } else if (isImage) {
        root.dataset.cursor = "image";
      } else if (isCard) {
        root.dataset.cursor = "card";
      } else {
        root.dataset.cursor = "default";
      }

      root.classList.toggle("premium-cursor--hero", Boolean(isHero));
    };

    const moveCursor = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      root.classList.add("premium-cursor--visible");
      setCursorState(event);
    };

    const hideCursor = () => {
      root.classList.remove("premium-cursor--visible", "premium-cursor--down", "premium-cursor--hero");
      root.dataset.cursor = "default";
    };

    const pointerDown = () => root.classList.add("premium-cursor--down");
    const pointerUp = () => root.classList.remove("premium-cursor--down");

    const animate = () => {
      dotX += (targetX - dotX) * 0.42;
      dotY += (targetY - dotY) * 0.42;
      followerX += (targetX - followerX) * 0.16;
      followerY += (targetY - followerY) * 0.16;
      glowX += (targetX - glowX) * 0.09;
      glowY += (targetY - glowY) * 0.09;

      root.style.setProperty("--cursor-dot-x", `${dotX}px`);
      root.style.setProperty("--cursor-dot-y", `${dotY}px`);
      root.style.setProperty("--cursor-ring-x", `${followerX}px`);
      root.style.setProperty("--cursor-ring-y", `${followerY}px`);
      root.style.setProperty("--cursor-glow-x", `${glowX}px`);
      root.style.setProperty("--cursor-glow-y", `${glowY}px`);

      trailRefs.current.forEach((node, index) => {
        if (!node) return;
        const point = trail[index];
        const ease = Math.max(0.07, 0.18 - index * 0.025);
        point.x += (targetX - point.x) * ease;
        point.y += (targetY - point.y) * ease;
        node.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%) scale(${1 - index * 0.08})`;
      });

      rafId = window.requestAnimationFrame(animate);
    };

    document.documentElement.classList.add("has-premium-cursor");
    document.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("pointerdown", pointerDown, { passive: true });
    document.addEventListener("pointerup", pointerUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideCursor);
    window.addEventListener("blur", hideCursor);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("has-premium-cursor");
      document.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerdown", pointerDown);
      document.removeEventListener("pointerup", pointerUp);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  const cursorMarkup = (
    <div className="premium-cursor" data-cursor="default" ref={rootRef} aria-hidden="true">
      <span className="premium-cursor__glow" />
      <span className="premium-cursor__ring" />
      <span className="premium-cursor__dot" />
      <span className="premium-cursor__trail">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            ref={(node) => {
              trailRefs.current[index] = node;
            }}
          />
        ))}
      </span>
    </div>
  );

  return createPortal(cursorMarkup, document.body);
}
