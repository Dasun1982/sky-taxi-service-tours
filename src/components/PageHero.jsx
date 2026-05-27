export default function PageHero({ eyebrow, title, description, image, alt, children }) {
  return (
    <section className="page-hero">
      <img className="page-hero__image" src={image} alt={alt} loading="eager" />
      <div className="page-hero__shade" />
      <div className="page-hero__content reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}
