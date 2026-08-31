import { ArrowRight, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images, wildSriLanka } from "../data/travelData";
import { buildWhatsAppLink } from "../utils/whatsapp";

const highlights = [
  { image: images.sriLankanLeopard, name: "Sri Lankan leopard", text: "One of the highest leopard sighting densities of any safari destination on earth." },
  { image: images.elephantWaterhole, name: "Asian elephant", text: "Herds gathering at waterholes, especially visible in the drier months." },
  { image: images.slothBear, name: "Sloth bear", text: "Shy, shaggy-coated foragers, harder to spot than leopards or elephants." },
  { image: images.muggerCrocodile, name: "Mugger crocodile", text: "Found resting along rivers, lakes, and mangrove-lined waterways." },
  { image: images.goldenJackal, name: "Golden jackal", text: "Common across open grassland and wetland edges, often seen at dusk." },
  { image: images.paintedStork, name: "Painted stork", text: "One of many wading birds working the shallows of Sri Lanka's wetlands." },
  { image: images.starTortoise, name: "Indian star tortoise", text: "Its radiating shell pattern makes it one of the island's most distinctive reptiles." },
  { image: images.toqueMacaque, name: "Toque macaque", text: "A primate found only in Sri Lanka, common in forest and temple grounds alike." },
  { image: images.ruddyMongoose, name: "Ruddy mongoose", text: "A quick, low-slung hunter often seen crossing forest tracks." },
  { image: images.gardenLizard, name: "Oriental garden lizard", text: "Common and colourful, often seen basking on branches near water." },
  { image: images.hawkEagleBranch, name: "Changeable hawk-eagle", text: "A powerful raptor of Sri Lanka's forests and open country." },
  { image: images.commonKingfisher, name: "Common kingfisher", text: "A flash of blue and orange along quiet streams and lagoons." },
  { image: images.greenBeeEater, name: "Green bee-eater", text: "Slender, acrobatic, and common near open scrub and farmland." },
  { image: images.cormorantColony, name: "Cormorants", text: "Often seen nesting and drying their wings together in waterside trees." },
  { image: images.purpleRumpedSunbird, name: "Purple-rumped sunbird", text: "A tiny, iridescent nectar-feeder found in gardens and forest edges." },
  { image: images.flapShellTurtle, name: "Indian flap-shell turtle", text: "A freshwater turtle regularly seen basking on rocks and logs." },
];

export default function Wildlife({ setPage }) {
  return (
    <div className="page wildlife-page">
      <PageHero
        eyebrow="Real Sri Lanka wildlife"
        title="Sri Lanka Wildlife & Safaris"
        description="From leopards in dry-zone grassland to elephants at a quiet waterhole, this is real wildlife photography from our own trips — not stock images, not invented locations."
        image={images.sriLankanLeopard}
        alt="Sri Lankan leopard resting in tall grass"
      >
        <a className="button button--primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
          <MessageCircle size={19} />
          Plan a Safari on WhatsApp
        </a>
      </PageHero>

      <section className="section">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Wildlife in Sri Lanka</span>
            <h2>An island with an unusual concentration of wildlife</h2>
            <p>
              Sri Lanka packs rainforest, dry-zone scrub, wetlands, and coastline into a small area — which is part of
              why its national parks hold such a wide range of animals within short private-driver reach of most
              major routes. Every photograph on this page is a genuine sighting, not a stock photo or an AI image.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.elephantWaterhole} alt="Asian elephant drinking at a waterhole in Sri Lanka" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft wild-sri-lanka-section">
        <div className="section__inner">
          <SectionHeader eyebrow={wildSriLanka.eyebrow} title="The safari experience" text={wildSriLanka.text} />
          <div className="wild-sri-lanka-layout">
            <Reveal className="wild-sri-lanka-feature">
              <img src={wildSriLanka.feature.image} alt={wildSriLanka.feature.alt} loading="lazy" />
              <div className="wild-sri-lanka-feature__caption">
                <h3>{wildSriLanka.feature.title}</h3>
                <p>{wildSriLanka.feature.text}</p>
              </div>
            </Reveal>
            <div className="wild-sri-lanka-grid">
              {wildSriLanka.supporting.map((item) => (
                <Reveal as="figure" className="wild-sri-lanka-grid__item" key={item.title}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <figcaption>{item.title}</figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Photography-led"
            title="Wildlife highlights"
            text="A closer look at what shares the island — from apex predators to the birdlife along every wetland edge."
          />
          <div className="wildlife-highlight-grid">
            {highlights.map((item) => (
              <Reveal className="wildlife-highlight-card" key={item.name}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Recommended safari route"
            title="Yala National Park"
            text="Sri Lanka's best-known safari destination, and the one route on this page we can confirm with a dedicated transfer service."
            align="left"
          />
          <Reveal className="destination-showcase-card wildlife-yala-card">
            <img src={images.safari} alt="Sri Lanka safari route" loading="lazy" />
            <div>
              <span>Southern dry zone</span>
              <h3>Yala Safari Transfer</h3>
              <p>Private transfer to the Yala safari gate, with early pickup planning built around park entry times.</p>
              <button className="text-button" type="button" onClick={() => setPage("yala-safari-transfer")}>
                View Yala safari transfer
                <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
          <Reveal className="destination-showcase-card wildlife-yala-card">
            <img src={images.monkey} alt="Monkey in Sri Lanka" loading="lazy" />
            <div>
              <span>Rainforest reserve</span>
              <h3>Sinharaja</h3>
              <p>Birdwatching, forest walks, and waterfalls in Sri Lanka's last major rainforest reserve — a real, priced one-day trip.</p>
              <button className="text-button" type="button" onClick={() => setPage("sinharaja")}>
                Explore Sinharaja
                <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <Reveal className="booking-cta-panel tour-whatsapp-cta">
            <div>
              <span className="eyebrow">Plan a private safari</span>
              <h2>Tell us your dates and we will plan the wildlife route</h2>
              <p>Send your travel dates, park preferences, and passenger count on WhatsApp for a private safari and driver plan.</p>
            </div>
            <div className="cta-actions">
              <a className="button button--primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                <MessageCircle size={19} />
                Plan on WhatsApp
              </a>
              <button className="button button--light" type="button" onClick={() => setPage("tours")}>
                Browse Tours
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
