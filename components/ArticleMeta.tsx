import Link from "next/link";
import { Container } from "@/components/ui";
import {
  AUTHOR,
  DEFAULT_PUBLISHED,
  DEFAULT_UPDATED,
  articleJsonLd,
  breadcrumbJsonLd,
  formatDate,
} from "@/lib/seo";

/**
 * Emits Article + BreadcrumbList JSON-LD and renders a visible author byline.
 * Drop directly beneath the page hero on every editorial (guide / EOS) page.
 */
export function ArticleMeta({
  headline,
  description,
  canonical,
  crumbs,
  keywords,
  about,
  published = DEFAULT_PUBLISHED,
  updated = DEFAULT_UPDATED,
}: {
  headline: string;
  description: string;
  canonical: string;
  crumbs: { name: string; url: string }[];
  keywords?: string;
  about?: string;
  published?: string;
  updated?: string;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              headline,
              description,
              canonical,
              keywords,
              about,
              datePublished: published,
              dateModified: updated,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(crumbs)),
        }}
      />
      <div className="border-b border-edge-light bg-paper">
        <Container className="flex flex-wrap items-center gap-x-2 gap-y-1 py-3.5 text-[13.5px] text-content-muted">
          <span>
            By{" "}
            <Link
              href={AUTHOR.url}
              className="font-semibold text-content hover:text-green"
            >
              {AUTHOR.name}
            </Link>
          </span>
          <span aria-hidden="true">·</span>
          <span>Updated {formatDate(updated)}</span>
        </Container>
      </div>
    </>
  );
}
