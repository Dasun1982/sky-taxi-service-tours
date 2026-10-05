import { useId, useState } from "react";
import { Plus } from "lucide-react";

/**
 * Site-wide FAQ accordion (WAI-ARIA accordion pattern).
 *
 * Every answer is always rendered: collapsed panels are only visually
 * collapsed and `inert`, so the text stays in the DOM and in the
 * prerendered HTML. That keeps each FAQPage schema answer matching
 * crawler-visible copy (see scripts/w10-static-qa.mjs).
 */
export function FaqList({ children, className = "" }) {
  return <div className={`faq-list faq-accordion ${className}`.trim()}>{children}</div>;
}

export function FaqItem({ question, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const buttonId = `faq-q-${id}`;
  const panelId = `faq-a-${id}`;

  return (
    <article className={open ? "faq-item faq-item--open" : "faq-item"}>
      <h3 className="faq-item__heading">
        <button
          id={buttonId}
          className="faq-item__button"
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="faq-item__question">{question}</span>
          <span className="faq-item__icon" aria-hidden="true">
            <Plus size={18} strokeWidth={2.4} />
          </span>
        </button>
      </h3>
      <div id={panelId} className="faq-item__panel" role="region" aria-labelledby={buttonId} inert={!open}>
        <div className="faq-item__answer">{children}</div>
      </div>
    </article>
  );
}
