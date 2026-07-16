import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Know Who to Promote — Without Guessing",
  description:
    "Most promotions are bets on past performance, not future capacity. Learn how to know who to promote using behavioral proof — Initiative, Applied Grit, and Learnability — instead of gut feel.",
};

const WHY = [
  {
    n: "01",
    h: "The Peter Principle",
    b: "People get promoted to the level of their incompetence — because the skills that won the last role are not the skills the next one needs.",
  },
  {
    n: "02",
    h: "Recency & halo bias",
    b: "One recent win or a likeable personality can outweigh months of mixed signal. Gut feel is quietly biased.",
  },
  {
    n: "03",
    h: "No test before the bet",
    b: "You hand over authority first and find out if they can handle it second. Prove reverses that order.",
  },
];

const PREDICTS = [
  {
    h: "Initiative",
    b: "Do they already act without being told — before the title makes it their job?",
  },
  {
    h: "Applied Grit",
    b: "Do they follow through when the work gets hard and unglamorous?",
  },
  {
    h: "Learnability",
    b: "Do they adapt when the demands change, instead of clinging to what worked before?",
  },
];

export default function WhoToPromotePage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › Who to promote"
        eyebrow="Promotion decisions"
        title={<>How to know who to promote &mdash; without guessing.</>}
      >
        The best individual contributor is not automatically your next great
        leader. Promoting on past performance is how a six-figure mistake starts.
        Here is how to bet on proof instead.
      </PageHero>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Promote the person who has already shown the behavior the new role
              demands &mdash; initiative, follow-through under pressure, and the
              ability to learn fast. Past results tell you what they did in the{" "}
              <em>old</em> job; behavioral proof tells you whether they will
              deliver in the new one.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Why most promotions go wrong
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {WHY.map((c) => (
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
            What actually predicts a great promotion
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PREDICTS.map((c) => (
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
            Prove your next promotion.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call and we will show you how a Prove cycle de-risks your next
            big promotion decision.
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
