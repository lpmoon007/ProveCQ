import Link from "next/link";
import { Container, Section } from "@/components/ui";
import {
  CASE_STUDIES,
  EOS_SPOKES,
  FREE_TOOLS,
  GUIDE_ARTICLES,
  relatedTo,
  type GuideRef,
} from "@/lib/guides";

function LinkGrid({ items }: { items: GuideRef[] }) {
  return (
    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
      {items.map((g) => (
        <Link
          key={g.href}
          href={g.href}
          className="group rounded-2xl border border-edge-light bg-white p-5 transition-colors hover:border-green"
        >
          <span className="block text-[15px] font-bold leading-[1.4] text-content group-hover:text-green">
            {g.title}
          </span>
        </Link>
      ))}
    </div>
  );
}

/** Cross-links to sibling guide articles. Renders nothing if none apply. */
export function RelatedGuides({ current }: { current: string }) {
  const items = relatedTo(GUIDE_ARTICLES, current, 3);
  if (items.length === 0) return null;
  return (
    <Section tone="paper2" className="!py-12">
      <Container className="max-w-[1000px]">
        <h2 className="mb-4 font-display text-[22px] font-bold tracking-[-.02em]">
          Keep reading
        </h2>
        <LinkGrid items={items} />
      </Container>
    </Section>
  );
}

/** Cross-links to sibling free-tool pages. Renders nothing if none apply. */
export function MoreFreeTools({ current }: { current: string }) {
  const items = relatedTo(FREE_TOOLS, current, 3);
  if (items.length === 0) return null;
  return (
    <Section tone="paper2" className="!py-12">
      <Container className="max-w-[1000px]">
        <h2 className="mb-4 font-display text-[22px] font-bold tracking-[-.02em]">
          More free tools
        </h2>
        <LinkGrid items={items} />
      </Container>
    </Section>
  );
}

/** Cross-links to sibling case-study pages. Renders nothing if none apply. */
export function MoreCaseStudies({ current }: { current: string }) {
  const items = relatedTo(CASE_STUDIES, current, 2);
  if (items.length === 0) return null;
  return (
    <Section tone="paper2" className="!py-12">
      <Container className="max-w-[1000px]">
        <h2 className="mb-4 font-display text-[22px] font-bold tracking-[-.02em]">
          More case studies
        </h2>
        <LinkGrid items={items} />
      </Container>
    </Section>
  );
}

/** Cross-links to sibling EOS spoke pages. Renders nothing if none apply. */
export function RelatedEOS({ current }: { current: string }) {
  const items = relatedTo(EOS_SPOKES, current, 3);
  if (items.length === 0) return null;
  return (
    <Section tone="paper2" className="!py-12">
      <Container className="max-w-[1000px]">
        <h2 className="mb-4 font-display text-[22px] font-bold tracking-[-.02em]">
          More on EOS + Prove
        </h2>
        <LinkGrid items={items} />
      </Container>
    </Section>
  );
}
