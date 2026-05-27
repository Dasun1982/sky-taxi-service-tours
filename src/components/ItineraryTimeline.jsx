export default function ItineraryTimeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline__item" key={`${item.time}-${item.title}`}>
          <span>{item.time}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
