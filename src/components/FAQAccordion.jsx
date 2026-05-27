import { useState } from "react";
import { HelpCircle } from "lucide-react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article className={isOpen ? "faq-item faq-item--open" : "faq-item"} key={item.question}>
            <button className="faq-item__button" type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)}>
              <span>
                <HelpCircle size={19} />
                {item.question}
              </span>
              <strong>{isOpen ? "-" : "+"}</strong>
            </button>
            <div className="faq-item__answer">
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
