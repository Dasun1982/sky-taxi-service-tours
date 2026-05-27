import { CheckCircle2 } from "lucide-react";

export default function PricingCard({ item }) {
  return (
    <article className="pricing-card">
      <span className="pricing-card__label">{item.price}</span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <ul>
        {item.points.map((point) => (
          <li key={point}>
            <CheckCircle2 size={17} />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
