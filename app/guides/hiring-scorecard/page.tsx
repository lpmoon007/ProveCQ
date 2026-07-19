import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArticleMeta } from "@/components/ArticleMeta";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

const CANONICAL = "/guides/hiring-scorecard";

const DESCRIPTION =
  "A free hiring scorecard for behavioral interviews. Rate candidates 1–5 on Initiative, Applied Grit, and Learnability with clear anchors — so you decide on evidence, not the last good impression.";

export const metadata: Metadata = {
  title: "The Hiring Scorecard: Score a Behavioral Interview",
  description: DESCRIPTION,
  keywords: [
    "hiring scorecard",
    "interview scorecard",
    "how to score an interview",
    "structured interview scoring",
    "candidate scorecard template",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The Hiring Scorecard: Score a Behavioral Interview",
    description:
      "Rate candidates 1–5 on Initiative, Applied Grit, and Learnability with clear anchors — free.",
    url: CANONICAL,
    type: "article",
  },
};

type Anchor = { level: string; band: string; tone: "green" | "amber" | "red"; body: string };
type Trait = { name: string; ask: string; anchors: Anchor[] };

const TRAITS: Trait[] = [
  {
    name: "Initiative",
    ask: "Did they act without being told?",
    anchors: [
      {
        level: "Strong",
        band: "4–5",
        tone: "green",
        body: "Specific examples of spotting a gap and moving on it; outcomes clearly tied to their action. “I noticed,” “I stepped in,” “took action.”",
      },
      {
        level: "Mixed",
        band: "3",
        tone: "amber",
        body: "Takes initiative in familiar situations or when nudged; one example, but thin on the outcome or the motivation behind it.",
      },
      {
        level: "Weak",
        band: "1–2",
        tone: "red",
        body: "Waits for direction; “that wasn't my responsibility”; hesitates; can't produce a concrete example.",
      },
    ],
  },
  {
    name: "Applied Grit",
    ask: "Did they follow through when it got hard?",
    anchors: [
      {
        level: "Strong",
        band: "4–5",
        tone: "green",
        body: "Owns mistakes fast without defensiveness; persisted through a real setback; sustained a long-game goal. “I own that,” “kept going,” “persevered.”",
      },
      {
        level: "Mixed",
        band: "3",
        tone: "amber",
        body: "Some persistence, but tied to reward or external push; owns the easy mistakes and softens the hard ones.",
      },
      {
        level: "Weak",
        band: "1–2",
        tone: "red",
        body: "Blames others; gives up when challenged; needs an external push; nothing genuinely hard was seen through.",
      },
    ],
  },
  {
    name: "Learnability",
    ask: "Do they adapt and grow from feedback?",
    anchors: [
      {
        level: "Strong",
        band: "4–5",
        tone: "green",
        body: "Sought out learning on their own; incorporated hard feedback with a concrete change; changed their mind on evidence. “Taught myself,” “reflected,” “pivoted.”",
      },
      {
        level: "Mixed",
        band: "3",
        tone: "amber",
        body: "Learns when required; accepts feedback, but the change is modest or slow.",
      },
      {
        level: "Weak",
        band: "1–2",
        tone: "red",
        body: "Defensive about feedback; “they misunderstood”; rigid; no recent self-directed learning.",
      },
    ],
  },
];

const TONE_CLASS: Record<Anchor["tone"], string> = {
  green: "border-l-[#1F8B57] bg-[#E7F3EC]",
  amber: "border-l-[#E0A73E] bg-[#FBF1DA]",
  red: "border-l-[#D0492E] bg-[#F7E4DE]",
};
const TONE_LABEL: Record<Anchor["tone"], string> = {
  green: "text-green",
  amber: "text-[#B07E1E]",
  red: "text-signal-red",
};

const DECISIONS = [
  { band: "13–15", rec: "Strong yes", note: "High signal across all three, and it matches your read. Move fast." },
  { band: "10–12", rec: "Yes", note: "Solid evidence with a soft spot or two — worth a confirming reference or work sample." },
  { band: "6–9", rec: "Hold / probe", note: "Mixed, or your score and your gut disagree. That gap is the signal — dig into it next round before deciding." },
  { band: "3–5", rec: "No", note: "Low signal with red flags. A polished interview won't change what the behavior is telling you." },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to score a behavioral interview",
  description:
    "Score a candidate on Initiative, Applied Grit, and Learnability from their behavioral interview answers to decide on evidence instead of impression.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Ask behavioral questions", text: "Ask for specific past examples across Initiative, Applied Grit, and Learnability." },
    { "@type": "HowToStep", position: 2, name: "Rate each trait 1–5", text: "Score each trait against the anchors, and write down the exact example behind the score." },
    { "@type": "HowToStep", position: 3, name: "Total the score out of 15", text: "Add the three trait scores for an overall read from 3 to 15." },
    { "@type": "HowToStep", position: 4, name: "Check it against your gut", text: "Compare the score to your overall impression. Where they disagree, probe that gap before deciding." },
    { "@type": "HowToStep", position: 5, name: "Choose the next step", text: "Map the total to a recommendation: strong yes, yes, hold and probe, or no." },
  ],
};

const FAQ = [
  {
    q: "What is a hiring scorecard?",
    a: "A hiring scorecard is a simple, structured way to rate every candidate against the same defined criteria — here, Initiative, Applied Grit, and Learnability, each scored 1–5. It replaces a vague overall impression with evidence you can compare across candidates and across interviewers.",
  },
  {
    q: "Why use a scorecard instead of going with your gut?",
    a: "Unstructured interviews are where bias and false positives live — the confident talker scores high, the quiet operator gets underrated. A scorecard forces you to tie each rating to a specific example, which makes candidates comparable and surfaces the gap between polish and performance.",
  },
  {
    q: "How do you score a behavioral interview?",
    a: "Ask for a specific past example for each trait, rate it 1–5 against the anchors, and note the evidence. Total the three scores out of 15, then check that total against your overall gut read. Where the number and your instinct disagree, that's exactly where to probe in the next round.",
  },
  {
    q: "Should a scorecard be the only thing you hire on?",
    a: "No. Use it alongside references, a real work sample, and — ideally — observed behavior in the first weeks. The scorecard sharpens the interview; it is a signal to guide better decisions, not a standalone gate or a legally validated assessment.",
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

export default function HiringScorecardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Hiring scorecard"
        eyebrow="Free resource · Hiring"
        title={<>Score the interview. Don&rsquo;t just &ldquo;feel&rdquo; it.</>}
      >
        The confident talker scores high in your head; the quiet operator gets
        underrated. A simple scorecard fixes that &mdash; rate every candidate
        1&ndash;5 on the three behaviors that predict who delivers, so you decide
        on evidence, not the last good impression. Free, no sign-up.
      </PageHero>

      <ArticleMeta
        headline="Score the interview. Don't just feel it."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Hiring scorecard", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container className="max-w-[760px]">
          <p className="m-0 text-[17px] leading-[1.7] text-content-muted">
            Pair this with the{" "}
            <Link href="/guides/behavioral-interview-questions" className="font-semibold text-green">
              behavioral interview questions
            </Link>{" "}
            &mdash; ask for a specific example, then score the answer against the
            anchors below. Rate each trait as you go, while the example is fresh.
          </p>
        </Container>
      </Section>

      {/* The scorecard */}
      {TRAITS.map((t) => (
        <Section key={t.name} tone="paper" className="!pt-0">
          <Container className="max-w-[900px]">
            <div className="rounded-[18px] border border-edge-light bg-white p-6 sm:p-7">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="m-0 font-display text-[22px] font-bold tracking-[-.01em]">
                  {t.name}
                </h2>
                <span className="text-[14px] font-semibold italic text-content-muted">
                  {t.ask} &nbsp;·&nbsp; Score 1&ndash;5
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {t.anchors.map((a) => (
                  <div
                    key={a.level}
                    className={`rounded-[12px] border-l-4 px-4 py-3 ${TONE_CLASS[a.tone]}`}
                  >
                    <div className={`mb-1 text-[12.5px] font-bold uppercase tracking-[.05em] ${TONE_LABEL[a.tone]}`}>
                      {a.level} &middot; {a.band}
                    </div>
                    <p className="m-0 text-[14px] leading-[1.5] text-[#3A362C]">
                      {a.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* Decision logic */}
      <Section tone="paper2">
        <Container className="max-w-[820px]">
          <h2 className="mb-4 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
            Add it up, then check it against your gut
          </h2>
          <p className="m-0 mb-6 text-[17px] leading-[1.7] text-content-muted">
            Total the three trait scores for a read out of 15. Then do the one
            step most interviewers skip: ask whether the number matches your
            overall impression. When they agree, trust it. When they don&rsquo;t,{" "}
            <strong>that disagreement is the most valuable signal in the room</strong>{" "}
            &mdash; it&rsquo;s where charm inflates a weak candidate, or where a
            quiet one is being underrated.
          </p>
          <div className="flex flex-col gap-2.5">
            {DECISIONS.map((d) => (
              <div
                key={d.band}
                className="grid grid-cols-1 gap-1 rounded-[12px] border border-edge-light bg-white px-5 py-3.5 sm:grid-cols-[90px_130px_1fr] sm:items-baseline sm:gap-3"
              >
                <span className="font-display text-[16px] font-bold text-content">
                  {d.band}
                </span>
                <span className="text-[14px] font-bold text-green">{d.rec}</span>
                <span className="text-[14px] leading-[1.5] text-content-muted">
                  {d.note}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Responsible use */}
      <Section tone="paper">
        <Container className="max-w-[820px]">
          <div className="rounded-[16px] border-l-4 border-green bg-paper-2 px-6 py-5">
            <div className="eyebrow mb-2 text-green">A signal, not a gate</div>
            <p className="m-0 text-[15px] leading-[1.6] text-content-muted">
              The scorecard sharpens your interview &mdash; it doesn&rsquo;t
              replace references, a work sample, or the first 90 days. Use it to
              ask better questions and catch the gap between polish and
              performance, not to auto-reject anyone. It is directional, and it is
              not a legally validated assessment.{" "}
              <Link href="/ethics" className="font-semibold text-green">
                What CQ is &amp; isn&rsquo;t &rarr;
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Hiring scorecard: FAQ
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
        <div className="mx-auto max-w-[760px]">
          <h2 className="m-0 mb-4 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[38px]">
            A scorecard sharpens the interview. Proof settles it.
          </h2>
          <p className="m-0 mb-8 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Even a well-scored interview only samples one hour. A Prove cycle
            scores the same three behaviors from six weeks of real work &mdash; so
            your final call rests on proof, not a good day in a conference room.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[17px]">
              Book a call
            </ButtonLink>
            <ButtonLink
              href="/free-tools/certainty-diagnostic"
              variant="ghost-dark"
              className="!border-white !text-white hover:!border-white"
            >
              Take the free diagnostic &rarr;
            </ButtonLink>
          </div>
        </div>
      </section>

      <RelatedGuides current="/guides/hiring-scorecard" />
      <Footer />
    </>
  );
}
