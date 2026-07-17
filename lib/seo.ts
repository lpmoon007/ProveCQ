import { site } from "./site";

/**
 * Canonical author entity for the site's editorial content.
 * `sameAs` should list James Carter's public profiles (e.g. LinkedIn) once
 * confirmed — it strengthens the Person entity for E-E-A-T / knowledge graph.
 */
export const AUTHOR = {
  name: "James Carter",
  jobTitle: "Founder, Be Legendary",
  url: `${site.domain}/author/james-carter`,
  sameAs: [site.parentUrl] as string[],
};

/** Content was published together at launch; updated as pages are revised. */
export const DEFAULT_PUBLISHED = "2026-07-16";
export const DEFAULT_UPDATED = "2026-07-17";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Format an ISO date (YYYY-MM-DD) as e.g. "July 17, 2026" without Date/TZ. */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map((n) => parseInt(n, 10));
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

/** Build Article JSON-LD with a Person author + publish/modify dates. */
export function articleJsonLd(opts: {
  headline: string;
  description: string;
  canonical: string;
  keywords?: string;
  about?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished ?? DEFAULT_PUBLISHED,
    dateModified: opts.dateModified ?? DEFAULT_UPDATED,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      url: AUTHOR.url,
      jobTitle: AUTHOR.jobTitle,
    },
    publisher: {
      "@type": "Organization",
      name: "Be Legendary",
      url: site.parentUrl,
    },
    mainEntityOfPage: `${site.domain}${opts.canonical}`,
    ...(opts.about ? { about: opts.about } : {}),
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
  };
}

/** Build BreadcrumbList JSON-LD from ordered {name, url} crumbs. */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.domain}${it.url}`,
    })),
  };
}
