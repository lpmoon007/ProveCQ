import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Succession Planning for Small Business (Without a Big HR Team)",
  description:
    "Succession planning is not just for the corner office. Learn how small businesses can build a bench and plan succession for key roles using behavioral proof.",
  alternates: { canonical: "/guides/succession-planning" },
};

const GAP = [
  {
    n: "01",
    h: "Key-person risk",
    b: "Critical knowledge and relationships sit with one or two people, undocumented.",
  },
  {
    n: "02",
    h: "No visible bench",
    b: "You assume someone could step up — but you have never tested it.",
  },
  {
    n: "03",
    h: <>No time for L&amp;D</>,
    b: "There is no formal development function to prepare successors.",
  },
];

const PLAN = [
  {
    h: "Prove readiness",
    b: "Run a scoped stretch to see who actually rises when given more.",
  },
  {
    h: "Coach the specific gap",
    b: "Develop the one behavior a successor is missing, deliberately and measurably.",
  },
];

export default function SuccessionPlanningPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › Succession planning"
        eyebrow="Continuity"
        title={<>Succession planning for small business.</>}
      >
        If one person leaving would stall your company, you have a key-person risk
        &mdash; and no bench. Succession planning is not a corporate luxury; it is
        how a scaling business protects its own continuity.
      </PageHero>

      <ArticleMeta
        headline="Succession planning for small business."
        description="Succession planning is not just for the corner office. Learn how small businesses can build a bench and plan succession for key roles using behavioral proof."
        canonical="/guides/succession-planning"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Succession planning", url: "/guides/succession-planning" },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Start by naming the roles that would hurt most if vacated, then
              identify who has <em>proven</em> the behavior to step up &mdash; and
              coach the gaps deliberately. Behavioral proof turns succession from a
              wish list into a plan you can act on.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The small-business succession gap
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {GAP.map((c) => (
              <div
                key={c.n}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <div className="mb-2.5 font-display text-[15px] font-bold text-green">
                  {c.n}
                </div>
                <h3 className="mb-2 text-[18px] font-bold">{c.h}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            A lean way to plan
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {PLAN.map((c) => (
              <div
                key={c.h}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <h3 className="mb-2 text-[18px] font-bold">{c.h}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
        <div className="mx-auto max-w-[720px]">
          <h2 className="m-0 mb-4 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[38px]">
            Build your bench before you need it.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove maps readiness for your key roles.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[16px]">
              Book a call
            </ButtonLink>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-[12px] border-[1.5px] border-[#7BCB9E] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              See how Prove works &rarr;
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuides current="/guides/succession-planning" />
      <Footer />
    </>
  );
}
