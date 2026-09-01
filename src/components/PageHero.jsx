export default function PageHero({ eyebrow, title, description, image, alt, children }) {
  return (
    <section className="page-hero">
      <img className="page-hero__image" src={image} alt={alt} loading="eager" />
      <div className="page-hero__shade" />
      {/* MOBILE PERFORMANCE: not "reveal" (the site-wide scroll-fade-in
          class) — this is the hero on every page using PageHero, visible
          immediately on load with nothing to scroll past first. The
          opacity:0 -> 1 animation only delayed the H1 reaching its final
          paint by ~560ms for zero visual benefit; every other .reveal
          usage across the site is untouched. */}
      <div className="page-hero__content">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}
