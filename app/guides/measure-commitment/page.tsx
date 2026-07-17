import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";

export const metadata: Metadata = {
  title: "How to Measure Employee Commitment (For Real)",
  description:
    "Commitment is not a feeling you survey — it is a behavior you observe. Learn how to measure employee commitment with behavioral signals instead of self-report.",
  alternates: { canonical: "/guides/measure-commitment" },
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

// A concrete sequence for turning commitment into an observed, defensible number.
const STEPS = [
  {
    n: "01",
    h: "Define the behaviors, not the mood",
    b: "Name what commitment looks like in action — initiative taken, commitments honored, adaptability under pressure — so you are measuring behavior, not how people feel on survey day.",
  },
  {
    n: "02",
    h: "Observe real work over weeks",
    b: "Gather many datapoints from actual tasks across roughly six weeks. One good week or one bad week should not be able to swing the read.",
  },
  {
    n: "03",
    h: "Score under genuine demand",
    b: "Weight the moments that are hard — a deadline, an ambiguous problem, work nobody assigned — because that is where commitment is proven and self-report is easiest to fake.",
  },
  {
    n: "04",
    h: "Aggregate into one number",
    b: "Roll the datapoints up into the Commitment Quotient so the signal stabilizes into something you can compare, defend, and act on.",
  },
  {
    n: "05",
    h: "Re-run to catch drift",
    b: "Measure again on a cadence. Commitment moves — a re-run tells you who is rising and who is quietly checking out, while there is still time to respond.",
  },
];

// FAQ — the format AI answer engines extract and cite. Answers stay faithful to
// the article and to the CQ framing (behavior over time, not a feeling surveyed).
const FAQ = [
  {
    q: "How do you measure employee commitment?",
    a: "Measure it through observed behavior over time rather than a survey of how people feel. Track initiative taken, commitments honored, and adaptability under pressure across many datapoints, then aggregate them into a single, stable score. That is what turns commitment from a vibe into a number you can act on.",
  },
  {
    q: "Why aren't engagement surveys a good measure of commitment?",
    a: "Engagement surveys are self-reported and capture mood on the day someone answers. They are easy to game and quick to go stale. Commitment is what someone does repeatedly when the work is hard — a behavior you observe, not an opinion you collect.",
  },
  {
    q: "What is the Commitment Quotient?",
    a: "The Commitment Quotient (CQ) is a score built from three observed behaviors: Initiative, Applied Grit, and Learnability. It is calculated from real work over roughly six weeks, so it reflects what a person actually does under real demand rather than what they say about themselves.",
  },
  {
    q: "Can employee commitment be faked?",
    a: "A survey answer can be. Sustained behavior under genuine pressure is far harder to fake — you cannot fake following through on hard problems across dozens of datapoints and several weeks. That is precisely why a behavioral measure is more trustworthy than a self-report.",
  },
  {
    q: "How often should you measure commitment?",
    a: "On a cadence, not once. Commitment drifts as roles, managers, and workloads change, so a single reading goes stale. Re-running the measure surfaces who is rising and who is disengaging while you still have time to respond.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function MeasureCommitmentGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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

      <ArticleMeta
        headline="How to measure employee commitment — for real."
        description="Commitment is not a feeling you survey — it is a behavior you observe. Learn how to measure employee commitment with behavioral signals instead of self-report."
        canonical="/guides/measure-commitment"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Measuring commitment", url: "/guides/measure-commitment" },
        ]}
      />

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
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              What commitment actually is
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              Commitment is not enthusiasm and it is not tenure. It is a pattern of
              behavior: the tendency to take initiative without being told, to keep
              going when the work turns hard, and to keep adapting as the demands
              change. Because it lives in what people do rather than how they feel,
              it cannot be captured by asking &mdash; only by observing. That single
              distinction is why most measurement of commitment fails: it reaches
              for a survey when the thing it wants to know is behavioral.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              The mechanism that makes commitment measurable is repetition under
              pressure. Any one action can be a fluke or a performance for the
              manager. But when you gather many datapoints from real work over
              weeks &mdash; and weight the hard moments where faking is expensive
              &mdash; a stable signal emerges. Aggregate enough of it and the noise
              cancels out, leaving a number that reflects how someone actually
              operates rather than how they answered on a Tuesday.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              This matters because commitment is the strongest behavioral predictor
              of who will deliver, and it is exactly the thing gut feel gets wrong.
              A measured read lets you invest in the right people, catch quiet
              disengagement before it becomes attrition, and defend a promotion with
              evidence instead of a hunch. It is the same signal behind{" "}
              <Link href="/guides/high-potential-employees" className="font-semibold text-green underline-offset-2 hover:underline">
                identifying high-potential employees
              </Link>{" "}
              &mdash; measured, rather than guessed.
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

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to measure commitment in five steps
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Turning commitment into a number you can trust is a repeatable
              process, not a one-off survey. Here is the sequence:
            </p>
            <ol className="m-0 flex list-none flex-col gap-4 p-0">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="rounded-[16px] border border-edge-light bg-white p-[22px]"
                >
                  <div className="mb-1.5 font-display text-[15px] font-bold text-green">
                    {s.n}
                  </div>
                  <h3 className="mb-1.5 text-[17px] font-bold">{s.h}</h3>
                  <p className="m-0 text-[15px] leading-[1.55] text-[#615B4F]">
                    {s.b}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Measuring commitment: FAQ
            </h2>
            <div className="flex flex-col gap-3">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-[14px] border border-edge-light bg-white px-6 py-4"
                >
                  <summary className="cursor-pointer list-none text-[17px] font-bold marker:content-none">
                    {f.q}
                  </summary>
                  <p className="m-0 mt-3 text-[15.5px] leading-[1.6] text-content-muted">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection title="Turn behavior into a number.">
        Book a call to see the Commitment Quotient measured on a real team.
      </CTASection>

      <RelatedGuides current="/guides/measure-commitment" />
      <Footer />
    </>
  );
}
