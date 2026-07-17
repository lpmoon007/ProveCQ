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
  title: "The Real Cost of a Bad Hire (and How to Avoid It)",
  description:
    "A bad hire costs far more than a salary — 40% to 200% of it, plus momentum and morale. Learn the true cost of a bad hire and how behavioral proof reduces the risk.",
  alternates: { canonical: "/guides/cost-of-a-bad-hire" },
};

const HIDES = [
  {
    n: "01",
    h: "Direct replacement",
    b: "Re-recruiting, re-onboarding, and lost ramp time — 40% to 200% of salary.",
  },
  {
    n: "02",
    h: "Team drag",
    b: "Your best people cover the gap, get frustrated, and disengage. That cost never shows on an invoice.",
  },
  {
    n: "03",
    h: "Opportunity cost",
    b: "Every month in the wrong seat is a month the right person was not doing the work.",
  },
];

const LOWER = [
  {
    h: "Prove before you commit",
    b: "A short behavioral trial reveals follow-through before you make the offer or the promotion.",
  },
  {
    h: "Decide on data, not charm",
    b: "Replace the gut call with a signal built from observed behavior.",
  },
];

export default function CostOfABadHirePage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › Cost of a bad hire"
        eyebrow="Hiring risk"
        title={<>The real cost of a bad hire.</>}
      >
        It is never just a wasted salary. A bad hire drains your team, your time,
        and your momentum &mdash; and the more senior the role, the more it hurts.
      </PageHero>

      <ArticleMeta
        headline="The real cost of a bad hire."
        description="A bad hire costs far more than a salary — 40% to 200% of it, plus momentum and morale. Learn the true cost of a bad hire and how behavioral proof reduces the risk."
        canonical="/guides/cost-of-a-bad-hire"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Cost of a bad hire", url: "/guides/cost-of-a-bad-hire" },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              A bad hire typically costs between 40% of salary for frontline roles
              and up to 200% for leadership &mdash; before counting lost momentum,
              manager time, and team morale. The cheapest way to cut that cost is
              to prove behavior <em>before</em> you commit, not after.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Where the cost actually hides
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {HIDES.map((c) => (
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
            How to lower the risk
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {LOWER.map((c) => (
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
            Stop paying for bad bets.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove reduces hiring and promotion risk.
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

      <RelatedGuides current="/guides/cost-of-a-bad-hire" />
      <Footer />
    </>
  );
}
