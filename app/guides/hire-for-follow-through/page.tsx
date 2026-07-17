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
  title: "How to Hire People Who Actually Follow Through",
  description:
    "Interviews reward people who talk well, not people who follow through. Learn how to hire for behavior — initiative, applied grit, and learnability — so your next hire delivers.",
  alternates: { canonical: "/guides/hire-for-follow-through" },
};

const MISLEAD = [
  {
    n: "01",
    h: <>Charisma &ne; commitment</>,
    b: "Confidence and polish are easy to fake in a 45-minute conversation.",
  },
  {
    n: "02",
    h: <>Past titles &ne; future effort</>,
    b: "A great resume tells you where someone has been, not how hard they will work for you.",
  },
  {
    n: "03",
    h: "One moment, not a pattern",
    b: "Interviews are a single snapshot. Follow-through is a pattern you can only see over time.",
  },
];

const MEASURE = [
  {
    h: "Initiative",
    b: "Did they do more than the minimum in the application and trial task?",
  },
  {
    h: "Applied Grit",
    b: "Did they push through friction, or fade when it got tedious?",
  },
  {
    h: "Learnability",
    b: "Did they absorb feedback and improve inside the process?",
  },
];

export default function HireFollowThroughPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › Hiring for follow-through"
        eyebrow="Hiring"
        title={<>How to hire people who actually follow through.</>}
      >
        The candidate who interviews best is often the one who performs worst.
        Interviews test how well someone talks about work &mdash; not whether they
        do it when no one is watching.
      </PageHero>

      <ArticleMeta
        headline="How to hire people who actually follow through."
        description="Interviews reward people who talk well, not people who follow through. Learn how to hire for behavior — initiative, applied grit, and learnability — so your next hire delivers."
        canonical="/guides/hire-for-follow-through"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Hiring for follow-through", url: "/guides/hire-for-follow-through" },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Stop hiring on the interview alone. Score candidates on observed
              behavior &mdash; through work samples, trial tasks, and a structured
              behavioral read &mdash; so you hire the doer, not the charmer. What
              someone <em>does</em> under a small real demand predicts what they
              will do under a big one.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Why interviews mislead you
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {MISLEAD.map((c) => (
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
            What to measure instead
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {MEASURE.map((c) => (
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
            Hire the doers.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove screens candidates on behavior from day
            one.
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

      <RelatedGuides current="/guides/hire-for-follow-through" />
      <Footer />
    </>
  );
}
