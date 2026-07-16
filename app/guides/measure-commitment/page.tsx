import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "How to Measure Employee Commitment (For Real)",
  description:
    "Commitment is not a feeling you survey — it is a behavior you observe. Learn how to measure employee commitment with behavioral signals instead of self-report.",
};

const TOOLS = [
  {
    n: "01",
    title: "Engagement surveys",
    body: "Self-reported, gameable, and a snapshot of mood — not a measure of behavior.",
  },
  {
    n: "02",
    title: "Performance reviews",
    body: "Backward-looking, infrequent, and colored by recency and politics.",
  },
  {
    n: "03",
    title: "Gut feel",
    body: "Works until it does not — and it is quietly biased toward the people you like.",
  },
];

const BEHAVIORS = [
  { title: "Initiative", body: "Acting without being told." },
  { title: "Applied Grit", body: "Following through when it is hard." },
  { title: "Learnability", body: "Adapting and growing under new demands." },
];

export default function MeasureCommitmentGuidePage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › Measuring commitment"
        eyebrow="Measurement"
        title={<>How to measure employee commitment &mdash; for real.</>}
      >
        Engagement surveys measure how people feel on the day they answer.
        Commitment is different: it is what they do, repeatedly, when it is hard.
        That is measurable &mdash; if you measure behavior, not opinion.
      </PageHero>

      <Section tone="paper" className="!pb-0">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink p-8 text-paper on-dark sm:p-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Measure commitment through observed behavior over time: initiative
              taken, commitments honored, and adaptability under pressure.
              Aggregate enough datapoints and the signal stabilizes into the
              Commitment Quotient &mdash; a number you can actually trust to make a
              decision.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Why the usual tools fall short
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {TOOLS.map((c) => (
              <div
                key={c.n}
                className="rounded-[16px] border border-edge-light bg-white p-[26px]"
              >
                <div className="mb-2.5 font-display text-[15px] font-bold text-green">
                  {c.n}
                </div>
                <h3 className="mb-2 text-[18px] font-bold">{c.title}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The three behaviors that add up to commitment
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {BEHAVIORS.map((c) => (
              <div
                key={c.title}
                className="rounded-[16px] border border-edge-light bg-white p-[26px]"
              >
                <h3 className="mb-2 text-[18px] font-bold">{c.title}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection title="Turn behavior into a number.">
        Book a call to see the Commitment Quotient measured on a real team.
      </CTASection>

      <Footer />
    </>
  );
}
