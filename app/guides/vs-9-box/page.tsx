import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/guides/vs-9-box";

const DESCRIPTION =
  "The 9-box grid plots performance against potential, but the potential axis is a boardroom guess. See how Prove scores it with measured behavior instead.";

export const metadata: Metadata = {
  title: "Prove vs. the 9-box grid: measure potential",
  description: DESCRIPTION,
  keywords: [
    "9-box grid",
    "nine box",
    "performance vs potential",
    "9 box talent review",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Prove vs. the 9-box grid: measure potential",
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
};

// Side-by-side comparison — the head-to-head an evaluator wants at a glance.
const COMPARE: { row: string; nineBox: string; prove: string }[] = [
  {
    row: "What it measures",
    nineBox: "Performance on one axis, potential on the other, plotted into nine cells.",
    prove: "Three observed behaviors: Initiative, Applied Grit, and Learnability.",
  },
  {
    row: "How “potential” is judged",
    nineBox: "A subjective read — the manager or the room forms an opinion.",
    prove: "Scored from real behavior over a defined window, not a show of hands.",
  },
  {
    row: "Bias exposure",
    nineBox: "Open to recency and halo bias; the loudest voice often anchors the cell.",
    prove: "Anchored to what a person actually did, which narrows the room for bias.",
  },
  {
    row: "Cadence",
    nineBox: "Typically a once-a-year snapshot at a talent review.",
    prove: "A repeatable cycle you can run whenever you need a fresh read.",
  },
  {
    row: "Output",
    nineBox: "A position on a grid and a shared label for the conversation.",
    prove: "A behavioral score you can point to and defend with evidence.",
  },
];

const HELPS: { h: string; b: string }[] = [
  {
    h: "It creates a shared language",
    b: "Nine named cells give a leadership team one vocabulary for talent, so the conversation is about the same thing.",
  },
  {
    h: "It forces a portfolio view",
    b: "Plotting the whole team at once surfaces gaps, over-reliance, and bench depth you would miss person by person.",
  },
  {
    h: "It gets people talking",
    b: "The grid is a structured prompt for a discussion that might otherwise never happen — and structure beats no structure.",
  },
];

const FALLS_SHORT: { h: string; b: string }[] = [
  {
    h: "The potential axis is a guess",
    b: "Performance is observable, but “potential” is usually a boardroom opinion — prone to recency and halo bias, and to whoever speaks with the most confidence.",
  },
  {
    h: "It is a static snapshot",
    b: "A once-a-year placement freezes a person in a cell, long after the behavior that put them there has changed.",
  },
  {
    h: "It is hard to defend",
    b: "When someone asks why they landed in a given box, “we felt so” is a weak answer — and a risky one to act on.",
  },
];

// Definitional checklist — Tier-1 GEO structure for "how to run a 9-box".
const CHECKLIST = [
  "Define the potential axis before the meeting — decide which behaviors count as potential, in writing.",
  "Score that axis from evidence, not adjectives — point to what each person actually did.",
  "Separate performance from potential deliberately, so a strong quarter does not inflate the potential read.",
  "Name the bias out loud — check each placement for recency and halo effects before it is locked.",
  "Revisit more than once a year, so a cell reflects current behavior rather than a stale snapshot.",
  "Write down why each person sits where they do, so the placement can be defended and revised.",
];

const FAQ = [
  {
    q: "What is the 9-box grid?",
    a: "The 9-box grid is a talent-review tool that plots employees on two axes — performance (usually the x-axis) against potential (the y-axis) — sorting people into nine cells, from low performance and low potential up to high on both. Its strength is a shared language and a portfolio view of the whole team; its weakness is that the potential axis is a subjective judgment.",
  },
  {
    q: "How is potential measured in the 9-box?",
    a: "In most 9-box reviews, potential is not measured at all — it is judged. A manager or a leadership group forms an opinion and places the person in a cell, often by a show of hands. That makes the axis vulnerable to recency bias, halo effects, and the most confident voice in the room. Scoring the axis from observed behavior instead is what turns the guess into evidence.",
  },
  {
    q: "Is the 9-box accurate and reliable?",
    a: "The performance axis is as reliable as your performance data. The potential axis is only as reliable as the judgment behind it — and unstructured judgment is prone to bias and drift, especially in a once-a-year snapshot. The 9-box is a genuinely useful discussion framework; it becomes more reliable when the potential axis is anchored to behavioral evidence rather than opinion.",
  },
  {
    q: "Prove vs the 9-box — what's the difference?",
    a: "The 9-box is a framework for sorting talent into a grid; the placement on the potential axis is a subjective read. Prove is a measurement — it scores Initiative, Applied Grit, and Learnability from real behavior over a defined window. Put simply, the 9-box gives you the grid and the shared language; Prove gives you a defensible number for the axis the grid guesses at.",
  },
  {
    q: "Can you use Prove and the 9-box together?",
    a: "Yes — that is the recommended way. Keep the 9-box for its shared language and portfolio view, but score the potential axis with Prove's behavioral evidence instead of a show of hands. You run the same talent review, but each placement is backed by what people actually did, so the conversation moves from opinion to proof.",
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

export default function Vs9BoxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Prove vs. the 9-box"
        eyebrow="Comparison"
        title={<>Prove vs. the 9-box grid.</>}
      >
        The 9-box sorts your team by performance and potential &mdash; but
        &ldquo;potential&rdquo; is usually a boardroom opinion. Prove replaces the
        guess with measured behavior, so the axis you act on is backed by evidence.
      </PageHero>

      <ArticleMeta
        headline="Prove vs. the 9-box grid."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Prove vs. the 9-box", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              The 9-box grid plots performance against potential to give a
              leadership team a shared, portfolio-level view of talent. Its weak
              spot is the potential axis &mdash; a subjective, once-a-year opinion.
              Prove keeps the grid but scores that axis from measured behavior
              &mdash; Initiative, Applied Grit, and Learnability &mdash; so each
              placement rests on proof, not a show of hands.
            </p>
          </div>
        </Container>
      </Section>

      {/* Head-to-head comparison table */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[860px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              The 9-box grid vs. Prove, side by side
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-edge-light bg-white">
              <table className="w-full border-collapse text-left text-[14.5px]">
                <thead>
                  <tr className="border-b border-edge-light">
                    <th className="px-5 py-4 font-bold text-content" />
                    <th className="px-5 py-4 font-bold text-content">
                      The 9-box grid
                    </th>
                    <th className="px-5 py-4 font-bold text-green">Prove</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr
                      key={r.row}
                      className="border-b border-edge-light last:border-b-0 align-top"
                    >
                      <th className="px-5 py-4 text-left font-bold text-content">
                        {r.row}
                      </th>
                      <td className="px-5 py-4 leading-[1.5] text-[#615B4F]">
                        {r.nineBox}
                      </td>
                      <td className="px-5 py-4 leading-[1.5] text-content">
                        {r.prove}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Where the 9-box helps
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {HELPS.map((c) => (
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

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Where it falls short
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {FALLS_SHORT.map((c) => (
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
          <p className="mx-auto mt-6 max-w-[760px] text-[15.5px] leading-[1.6] text-content-muted">
            This is the same trap that shows up whenever the read is a judgment
            rather than a measurement &mdash; the theme of{" "}
            <Link href="/guides/its-the-metric" className="font-semibold text-green hover:underline">
              it&rsquo;s the metric
            </Link>
            . And it is why we prefer scoring behavior over inferring it from a
            questionnaire, as covered in{" "}
            <Link
              href="/guides/behavioral-vs-personality-tests"
              className="font-semibold text-green hover:underline"
            >
              behavioral vs. personality tests
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* Use them together */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Use them together
            </h2>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              This is not either-or. Keep the 9-box for what it does well &mdash;
              the shared language and the portfolio view of your whole team. Then,
              instead of judging the potential axis by a show of hands, score it
              with behavioral evidence. You run the same talent review, but every
              placement is backed by what people actually did. The grid stays; the
              guesswork goes. If you want to know how much of your current read is
              proof versus gut feel, the{" "}
              <Link
                href="/free-tools/certainty-diagnostic"
                className="font-semibold text-green hover:underline"
              >
                Certainty Diagnostic
              </Link>{" "}
              is a fast place to start &mdash; and{" "}
              <Link
                href="/guides/high-potential-employees"
                className="font-semibold text-green hover:underline"
              >
                identifying high-potential employees
              </Link>{" "}
              breaks down the behaviors that belong on that axis.
            </p>
          </div>
        </Container>
      </Section>

      {/* Definitional checklist — Tier-1 GEO structure */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to run a 9-box that isn&rsquo;t just opinion
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              The 9-box is only as good as the judgment behind its potential axis.
              To keep a talent review honest, anchor that axis to evidence rather
              than adjectives. In practice, that means working through a checklist:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {CHECKLIST.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* FAQ — GEO citation block */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Prove vs. the 9-box: FAQ
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

      <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
        <div className="mx-auto max-w-[720px]">
          <h2 className="m-0 mb-4 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[38px]">
            Score the potential axis with proof.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove turns the guess on your 9-box into
            measured behavior.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[16px]">
              Book a call
            </ButtonLink>
            <Link
              href="/free-tools/certainty-diagnostic"
              className="inline-flex items-center justify-center rounded-[12px] border-[1.5px] border-[#7BCB9E] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              Take the Certainty Diagnostic &rarr;
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuides current="/guides/vs-9-box" />
      <Footer />
    </>
  );
}
