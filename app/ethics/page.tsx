import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";

export const metadata: Metadata = {
  alternates: { canonical: "/ethics" },
  title: "What CQ Is & Isn't — Ethics & Fair Use",
  description:
    "The Commitment Quotient is a behavioral measurement, not a psychometric or personality test — and not a measure of a person's worth. A low CQ is not 'bad'; it just is. Our principles for using CQ fairly.",
};

const IS = [
  "A measure of behavior under pressure",
  "Role- and context-specific",
  "A signal to inform a decision",
  "A starting point for coaching",
  "Something that can change over time",
];

const IS_NOT = [
  "A personality or psychometric test",
  "A fixed trait or IQ-style measure",
  "A judgment of worth, skill, or character",
  "A hiring or firing gate",
  'A reason to treat anyone as "less than"',
];

const RULES = [
  {
    title: "1. Use it with everyone",
    body: "In any hiring or promotion process, assess everyone in that process the same way — not only the “iffy” ones. Consistency is fairness, and inconsistent use invites discrimination claims.",
    dark: false,
  },
  {
    title: "2. A signal, not the final word",
    body: "CQ is one input, paired with structured interviews, work samples, references, and real job requirements. You make the call — it's a conversation starter, never a gate.",
    dark: false,
  },
  {
    title: "3. Behavior, not identity",
    body: "Scoring is blind to race, gender, age, religion, disability, and every protected class. We don't collect or use identity data — and neither should you when reading a result.",
    dark: false,
  },
  {
    title: "4. Never a tool for firing",
    body: "CQ is for development, coaching, and investment decisions. It is not a basis for termination, demotion, or other adverse action. A low score means support may be needed — not that someone is unfit.",
    dark: false,
  },
  {
    title: "5. Be transparent",
    body: "Tell people what the assessment is, what it measures (Initiative, Applied Grit, Learnability), and how it will be used — as one part of the process. Transparency builds trust.",
    dark: false,
  },
  {
    title: "Human decisions, not automated ones",
    body: "Scoring follows human-defined, behavior-based rubrics and produces insights for a person to interpret. CQ never makes an employment decision on its own.",
    dark: true,
  },
];

const CHECKLIST = [
  "Am I giving everyone the same opportunity to take the assessment?",
  "Am I using it as one input, not the final decision-maker?",
  "Am I documenting my full hiring or promotion process?",
  "Could I explain how CQ fits the overall decision?",
  "Would I be comfortable defending this process if challenged?",
];

export default function EthicsPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="What CQ is & isn't"
        eyebrow="Ethics & fair use"
        title="What CQ is — and what it is not."
      >
        Because measuring people carries responsibility, we&rsquo;re explicit about
        it. CQ measures{" "}
        <strong className="text-paper">behavior in a work context</strong> — not
        personality, not identity, and not a person&rsquo;s worth.
      </PageHero>

      {/* Core distinction */}
      <Section tone="paper">
        <Container className="max-w-[860px]">
          <div className="rounded-[18px] bg-[#173A2A] p-8 text-paper on-dark sm:p-10">
            <Eyebrow tone="soft">The core distinction</Eyebrow>
            <h2 className="mb-4 mt-3.5 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
              CQ is a behavioral measurement — not a psychometric test.
            </h2>
            <p className="m-0 mb-4 text-[16.5px] leading-[1.65] text-[#DCEFE4]">
              A psychometric or personality test claims to measure a fixed,
              internal trait — who you <em>are</em>. CQ does not do that. CQ
              measures <strong className="text-white">commitment behavior</strong> —
              what a person actually does, in a specific work context, over time. It
              is a description of behavior in a situation, not a verdict on
              character, intelligence, or potential.
            </p>
            <p className="m-0 text-[16.5px] leading-[1.65] text-[#DCEFE4]">
              Behavior changes with role, clarity, season of life, and support.
              That&rsquo;s the point: a CQ read is a snapshot of behavior{" "}
              <em>now</em>, and it can move.
            </p>
          </div>
        </Container>
      </Section>

      {/* Low CQ is not bad */}
      <Section tone="paper" className="!pt-0">
        <Container className="max-w-[860px]">
          <h2 className="mb-4 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
            A low CQ is not &ldquo;bad.&rdquo; It just is.
          </h2>
          <p className="m-0 mb-8 text-[17px] leading-[1.7] text-content-muted">
            This is the most important thing to understand, and the easiest to get
            wrong. A score is information, not judgment. Some of your best, most
            valuable people will have lower CQ scores — and that is completely
            fine. It does not make them less skilled, less talented, or less
            worthy. It simply signals they may need more structure, clarity, or
            support before taking on a higher-scope or more ambiguous role. Many
            people do their best work, for years, in well-defined roles. Using a
            score to rank human worth is not just unhelpful — it&rsquo;s wrong.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-[18px] border border-edge-light bg-white p-7">
              <h3 className="mb-4 text-[15px] font-bold uppercase tracking-[.06em] text-green">
                CQ is
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px] text-content-muted">
                {IS.map((x) => (
                  <li key={x} className="flex gap-2.5">
                    <span className="text-green">✓</span> {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[18px] bg-ink p-7 text-paper on-dark">
              <h3 className="mb-4 text-[15px] font-bold uppercase tracking-[.06em] text-signal-red">
                CQ is not
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px] text-[#B8B4A6]">
                {IS_NOT.map((x) => (
                  <li key={x} className="flex gap-2.5">
                    <span className="text-signal-red">✕</span> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* How CQ must be used */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="mx-auto mb-8 max-w-[860px]">
            <h2 className="mb-3 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
              How CQ must be used
            </h2>
            <p className="m-0 text-[17px] leading-[1.6] text-content-muted">
              These aren&rsquo;t fine print — they&rsquo;re the conditions of using
              CQ at all.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RULES.map((r) => (
              <div
                key={r.title}
                className={`rounded-[18px] p-[26px] ${r.dark ? "bg-ink text-paper on-dark" : "border border-edge-light bg-white"}`}
              >
                <h3 className="mb-2 text-[17px] font-bold">{r.title}</h3>
                <p
                  className={`m-0 text-[14.5px] leading-[1.55] ${r.dark ? "text-[#B8B4A6]" : "text-[#615B4F]"}`}
                >
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Fairness check */}
      <Section tone="paper" className="!pt-0">
        <Container className="max-w-[860px]">
          <div className="rounded-[18px] border-l-4 border-green bg-paper-2 p-8 sm:p-10">
            <Eyebrow>A quick fairness check</Eyebrow>
            <ul className="m-0 mt-5 flex list-none flex-col gap-3 p-0 text-[16px] text-content">
              {CHECKLIST.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="text-green">□</span> {c}
                </li>
              ))}
            </ul>
            <p className="m-0 mt-6 text-[16px] font-semibold text-content">
              If yes to all — you&rsquo;re using CQ fairly.
            </p>
          </div>
          <p className="m-0 mt-10 text-center text-[14px] leading-[1.6] text-content-faint">
            This page summarizes our CQ Bias Mitigation Policy, Fair-Use guidance,
            and User Agreement. It is not legal advice; employers are responsible
            for compliant use within their own hiring and employment processes.
          </p>
        </Container>
      </Section>

      <CTASection title="Measurement done responsibly.">
        If that&rsquo;s how you want to make people decisions, let&rsquo;s talk
        about a Prove cycle.
      </CTASection>

      <Footer />
    </>
  );
}
