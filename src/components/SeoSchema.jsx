import { useEffect, useMemo } from "react";
import { brand, contactInfo, pageMeta } from "../data/travelData";
import { schemaEnabledPages, schemaFaqs, schemaPageLabels } from "../data/schemaData";

const SITE_URL = "https://skytaxisrilanka.com";
const SCRIPT_PREFIX = "sky-jsonld-";

function pagePath(page) {
  return page === "home" ? "/" : `/${page}`;
}

function pageUrl(page) {
  return `${SITE_URL}${pagePath(page)}`;
}

function makeLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: brand.name,
    url: SITE_URL,
    image: `${SITE_URL}/logo.sky.png`,
    logo: `${SITE_URL}/logo.sky.png`,
    description: "Sri Lanka taxi service, airport transfers, private tours, and island-wide travel support.",
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address,
      addressCountry: "Sri Lanka",
    },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    priceRange: "$$",
  };
}

function makeTaxiServiceSchema(page, meta) {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${pageUrl(page)}#taxi-service`,
    name: meta.title,
    url: pageUrl(page),
    description: meta.description,
    serviceType: ["Taxi Service", "Airport Transfers", "Private Tours"],
    provider: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
  };
}

function makeBreadcrumbSchema(page) {
  const label = schemaPageLabels[page] || pageMeta[page]?.title?.split("|")[0]?.trim() || "Page";
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ];

  if (page !== "home") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: label,
      item: pageUrl(page),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl(page)}#breadcrumb`,
    itemListElement: items,
  };
}

function makeFaqSchema(page) {
  const faqs = schemaFaqs[page];
  if (!faqs?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl(page)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function clearSchemaScripts() {
  document.querySelectorAll(`script[id^="${SCRIPT_PREFIX}"]`).forEach((script) => script.remove());
}

function appendSchemaScript(id, schema) {
  const script = document.createElement("script");
  script.id = `${SCRIPT_PREFIX}${id}`;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export default function SeoSchema({ activePage }) {
  const schemas = useMemo(() => {
    if (!schemaEnabledPages.includes(activePage)) return [];

    const meta = pageMeta[activePage] || pageMeta.home;
    return [makeLocalBusinessSchema(), makeTaxiServiceSchema(activePage, meta), makeBreadcrumbSchema(activePage), makeFaqSchema(activePage)].filter(Boolean);
  }, [activePage]);

  useEffect(() => {
    clearSchemaScripts();

    schemas.forEach((schema, index) => {
      appendSchemaScript(`${index + 1}`, schema);
    });

    return clearSchemaScripts;
  }, [schemas]);

  return null;
}
