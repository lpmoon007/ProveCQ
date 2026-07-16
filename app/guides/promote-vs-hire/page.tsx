import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Promote From Within or Hire Outside? How to Decide",
  description:
    "Promoting from within builds loyalty but risks the Peter Principle; hiring outside brings skills but risks culture and cost. Learn how to decide with behavioral proof.",
};

const WITHIN = [
  {
    h: "An insider has proven the behavior",
    b: "They already show the initiative, applied grit, and learnability the new role demands.",
  },
  {
    h: "Culture & context matter most",
    b: "The role needs deep institutional knowledge more than a new skill set.",
  },
];

const OUTSIDE = [
  {
    h: "No proven internal candidate",
    b: "Nobody has shown the behavior, and the cost of a failed promotion is too high to gamble.",
  },
  {
    h: "You need a capability you lack",
    b: "The gap is a genuine skill the team cannot coach into someone in time.",
  },
];

export default function PromoteVsHirePage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › Promote vs. hire"
        eyebrow="People decisions"
        title={<>Promote from within, or hire outside?</>}
      >
        Both paths have a failure mode. Promote the wrong insider and you lose a
        great doer and gain a struggling manager. Hire the wrong outsider and you
        pay a premium for a culture misfit. Proof breaks the tie.
      </PageHero>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Promote from within when an internal candidate has already{" "}
              <em>proven</em> the behavior the new role needs; hire outside when
              no one has and the gap is too costly to coach. The decision should
              hinge on demonstrated capacity, not tenure or convenience.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            When to promote from within
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {WITHIN.map((c) => (
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

      <Section tone="paper2">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            When to hire outside
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {OUTSIDE.map((c) => (
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
            Make the call on proof.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove compares internal and external candidates
            on behavior.
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

      <Footer />
    </>
  );
}
