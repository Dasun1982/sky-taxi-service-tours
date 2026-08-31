import { ChevronRight } from "lucide-react";
import { schemaPageLabels } from "../data/schemaLabels";

/**
 * Visual counterpart to SeoSchema.jsx's BreadcrumbList JSON-LD — deliberately
 * reuses the same schemaPageLabels map so the trail a visitor sees always
 * matches what search engines are told, rather than maintaining two label
 * lists that can drift apart. Home → current page only, matching the depth
 * the existing JSON-LD already models; a deeper regional hierarchy (e.g.
 * Sri Lanka → Southern Coast → Galle) would need new region-grouping data
 * that doesn't exist yet, so it isn't invented here.
 */
export default function Breadcrumbs({ activePage }) {
  if (!activePage || activePage === "home" || activePage === "not-found") return null;

  const label = schemaPageLabels[activePage];
  if (!label) return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <a href="/">Home</a>
        </li>
        <li aria-current="page">
          <ChevronRight size={14} aria-hidden="true" />
          <span>{label}</span>
        </li>
      </ol>
    </nav>
  );
}
