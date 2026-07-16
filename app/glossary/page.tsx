import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Section, ButtonLink } from "@/components/ui";
import { PageHero } from "@/components/PageParts";

export const metadata: Metadata = {
  title:
    "People-Decision Glossary — Commitment, Capacity, Retention Terms",
  description:
    "Plain-English definitions of the terms behind better people decisions: Commitment Quotient, Initiative, Applied Grit, Learnability, capacity, regretted attrition, quiet quitting, span of control, quality of hire, GWC, and more.",
};

const GLOSSARY_JSONLD = `{
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "name": "ProveCQ People-Decision Glossary",
  "hasDefinedTerm": [
    {"@type":"DefinedTerm","name":"Commitment Quotient (CQ)","description":"A behavioral signal scoring Initiative, Applied Grit, and Learnability under pressure to indicate who is ready for more scope."},
    {"@type":"DefinedTerm","name":"Initiative","description":"The behavior of acting without being told — spotting what needs doing and moving before being directed."},
    {"@type":"DefinedTerm","name":"Applied Grit","description":"Follow-through under difficulty: staying with a commitment when it gets hard, distinct from general trait grit."},
    {"@type":"DefinedTerm","name":"Learnability","description":"The behavior of adapting and improving from feedback and new demands."},
    {"@type":"DefinedTerm","name":"Capacity","description":"In people decisions, the current ability to take on scope — time, energy, and behavioral readiness — as opposed to a fixed trait."},
    {"@type":"DefinedTerm","name":"Regretted attrition","description":"Turnover among people the company wanted to keep; a truer retention signal than overall turnover."},
    {"@type":"DefinedTerm","name":"Quiet quitting","description":"Doing the minimum required and no more; disengagement that looks like retention but withholds discretionary effort."},
    {"@type":"DefinedTerm","name":"Span of control","description":"The number of direct reports a manager oversees; too wide a span degrades coaching and engagement."},
    {"@type":"DefinedTerm","name":"Quality of hire","description":"A measure of how well a new hire performs and stays, ideally assessed by behavior in the first 90 days."},
    {"@type":"DefinedTerm","name":"GWC (Gets it, Wants it, Capacity)","description":"An EOS framework for evaluating whether a person fits a seat; Capacity is the component Prove makes measurable."}
  ]
}`;

const TERMS: { term: ReactNode; def: ReactNode }[] = [
  {
    term: <>Commitment Quotient (CQ)</>,
    def: (
      <>
        A behavioral signal that scores Initiative, Applied Grit, and Learnability
        under pressure to indicate who&apos;s ready for more scope — measured from
        behavior, not self-report.
      </>
    ),
  },
  {
    term: <>Initiative</>,
    def: (
      <>
        Acting without being told — spotting what needs doing and moving before
        being directed, especially when the situation is unclear.
      </>
    ),
  },
  {
    term: <>Applied Grit</>,
    def: (
      <>
        Follow-through under difficulty — staying with a commitment when it gets
        hard. Distinct from general &quot;grit&quot; as a personality trait; this
        is grit <em>demonstrated</em> in context.
      </>
    ),
  },
  {
    term: <>Learnability</>,
    def: (
      <>
        Adapting and improving from feedback and new demands — the behavior that
        predicts who grows into a role rather than plateauing.
      </>
    ),
  },
  {
    term: <>Capacity</>,
    def: (
      <>
        Current ability to take on scope — time, energy, and behavioral readiness
        — right now. A dynamic state, not a fixed trait, which is why it&apos;s
        better observed than assumed.
      </>
    ),
  },
  {
    term: <>GWC (Gets it, Wants it, Capacity)</>,
    def: (
      <>
        The EOS test for whether a person fits a seat. Capacity is the vaguest of
        the three — the component Prove makes measurable.{" "}
        <Link href="/for-eos/capacity">More &rarr;</Link>
      </>
    ),
  },
  {
    term: <>Regretted attrition</>,
    def: (
      <>
        Turnover among the people you wanted to keep. A far truer retention signal
        than headline turnover, which lumps in departures you didn&apos;t mind.
      </>
    ),
  },
  {
    term: <>Quiet quitting</>,
    def: (
      <>
        Doing the minimum and no more — disengagement that looks like retention on
        a headcount report but withholds discretionary effort.{" "}
        <Link href="/guides/quiet-quitting">More &rarr;</Link>
      </>
    ),
  },
  {
    term: <>Span of control</>,
    def: (
      <>
        How many direct reports a manager oversees. Stretch it too wide and
        coaching, feedback, and engagement all degrade — a common scaling failure.
      </>
    ),
  },
  {
    term: <>Quality of hire</>,
    def: (
      <>
        How well a new hire performs and stays. Best assessed by behavior in the
        first 90 days, not by resume or interview impression.{" "}
        <Link href="/guides/first-90-days">More &rarr;</Link>
      </>
    ),
  },
  {
    term: <>The Peter Principle</>,
    def: (
      <>
        The tendency to promote people to the level of their incompetence —
        rewarding past performance with a role that needs different behavior.{" "}
        <Link href="/guides/failed-promotion">More &rarr;</Link>
      </>
    ),
  },
  {
    term: <>Engagement paradox</>,
    def: (
      <>
        The pattern of engagement scores falling while business performance holds —
        evidence that engagement and results were never the same thing.{" "}
        <Link href="/guides/state-of-engagement">More &rarr;</Link>
      </>
    ),
  },
];

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: GLOSSARY_JSONLD }}
      />
      <Nav />
      <PageHero
        crumb="Glossary"
        eyebrow="Plain-English definitions"
        title={<>The people-decision glossary</>}
      >
        The language of betting on the right people — defined without the jargon.
      </PageHero>

      <Section tone="paper" className="!pb-10">
        <Container wide className="max-w-[1000px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {TERMS.map((t, i) => (
              <div
                key={i}
                className="rounded-[16px] border border-edge-light bg-white p-6"
              >
                <h2 className="m-0 mb-[7px] text-[18px] font-bold">{t.term}</h2>
                <p className="m-0 text-[14.5px] leading-[1.6] text-[#575249] [&_a]:text-green">
                  {t.def}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-5 text-center">
        <Container wide className="max-w-[1000px]">
          <ButtonLink href="/guides" variant="dark">
            Explore the full guides library &rarr;
          </ButtonLink>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
