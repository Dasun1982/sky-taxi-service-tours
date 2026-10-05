import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * Manual horizontal browse rail for many equivalent route cards.
 * No auto-motion: visitors move it with the arrow buttons, touch/trackpad
 * swipe, or the keyboard (the rail itself is focusable). Every card is a
 * real route page; all of them are in the DOM for crawlers.
 */
export default function RouteRail({ label, items, summary, footer }) {
  const railRef = useRef(null);
  const railId = useId();
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const offset = Math.abs(rail.scrollLeft);
    setEdges({ start: offset <= 2, end: offset + rail.clientWidth >= rail.scrollWidth - 2 });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const move = (direction) => {
    const rail = railRef.current;
    if (!rail) return;
    const rtl = getComputedStyle(rail).direction === "rtl" ? -1 : 1;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    rail.scrollBy({ left: direction * rtl * Math.max(rail.clientWidth * 0.85, 280), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="route-rail">
      <div className="route-rail__bar">
        {summary && <p className="route-rail__summary">{summary}</p>}
        <div className="route-rail__controls">
          <button className="icon-button" type="button" onClick={() => move(-1)} disabled={edges.start} aria-controls={railId} aria-label="Previous routes">
            <ArrowLeft size={19} />
          </button>
          <button className="icon-button" type="button" onClick={() => move(1)} disabled={edges.end} aria-controls={railId} aria-label="More routes">
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
      <div
        className="home-seo-route-grid route-rail__scroller"
        id={railId}
        ref={railRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        onScroll={updateEdges}
      >
        <ul className="home-seo-route-group route-rail__list">
          {items.map((route) => (
            <li className="home-seo-route-card" key={route.href}>
              <a className="home-seo-route-card__media" href={route.href} aria-label={route.title} tabIndex={-1}>
                <img src={route.image} alt="" loading="lazy" />
              </a>
              <div className="home-seo-route-card__body">
                {route.meta && <span className="route-rail__meta">{route.meta}</span>}
                <h3>
                  <a href={route.href}>{route.title}</a>
                </h3>
                <p>{route.description}</p>
                <a className="home-seo-route-card__button" href={route.href} aria-label={`View Route — ${route.title}`}>
                  View Route
                  <ArrowRight size={16} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {footer}
    </div>
  );
}
