import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Section, ButtonLink } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Prove & Commitment Quotient — Frequently Asked Questions",
  description:
    "Answers to common questions about Prove and the Commitment Quotient (CQ): what it measures, how it differs from personality tests and engagement surveys, whether it can be used for firing, how it works with EOS, timing, and pricing.",
};

const FAQ_JSONLD = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What is the Commitment Quotient (CQ)?","acceptedAnswer":{"@type":"Answer","text":"CQ is a behavioral signal that scores three observable behaviors under pressure — Initiative, Applied Grit, and Learnability — to show who is ready for more scope. It is measured from what people actually do over time, not from a self-report questionnaire."}},
    {"@type":"Question","name":"Is CQ a personality test?","acceptedAnswer":{"@type":"Answer","text":"No. Personality tests rely on self-report and describe stable traits. CQ measures observed behavior under real pressure across a six-week window, so it captures follow-through and the gap between what someone says and what they do."}},
    {"@type":"Question","name":"Can CQ be used to fire someone?","acceptedAnswer":{"@type":"Answer","text":"No. CQ is decision-support for leadership development, coaching, and investment decisions only. It is explicitly not a performance review or a basis for termination, demotion, or other adverse employment actions. A low CQ does not mean low performance."}},
    {"@type":"Question","name":"How is CQ different from an engagement survey?","acceptedAnswer":{"@type":"Answer","text":"Engagement surveys measure how people feel about their environment. CQ measures how people behave under pressure. A team can score high on engagement and still miss deadlines and dodge ownership; CQ surfaces the behavior that actually predicts who delivers."}},
    {"@type":"Question","name":"How long does a Prove cycle take?","acceptedAnswer":{"@type":"Answer","text":"A Prove cycle runs about six weeks: a 15-minute Snapshot to form an initial read, a multi-week Validation phase that gathers 40+ behavioral datapoints under escalating challenges, and a Decision debrief with the CQ Heatmap."}},
    {"@type":"Question","name":"Does Prove work with EOS?","acceptedAnswer":{"@type":"Answer","text":"Yes. Prove works alongside EOS by making the Capacity component of GWC measurable. It gives the People Analyzer and Quarterly Conversations behavioral data instead of a yes/no guess. Prove is independent of and not endorsed by EOS Worldwide."}},
    {"@type":"Question","name":"Does a low CQ score mean someone is a bad employee?","acceptedAnswer":{"@type":"Answer","text":"No. Many strong performers score lower on CQ; it measures behavioral readiness for higher-scope or ambiguous roles, not talent, skill, or worth. A low score signals the person needs more structure or clarity before a stretch — not that they should be removed."}},
    {"@type":"Question","name":"Who is Prove for?","acceptedAnswer":{"@type":"Answer","text":"Founders and CEOs of scaling small and mid-sized companies who make high-stakes people decisions — promotions, key hires, and project handoffs — and want behavioral proof before they invest. It is especially useful for companies running on EOS."}},
    {"@type":"Question","name":"Is CQ a psychometric test?","acceptedAnswer":{"@type":"Answer","text":"No. A psychometric or personality test claims to measure a fixed internal trait. CQ measures commitment behavior — what a person actually does in a work context over time. It is a description of behavior in a situation, not a verdict on character or a fixed trait, and it can change with role, clarity, and support."}},
    {"@type":"Question","name":"Does a low CQ score mean someone is a bad employee or person?","acceptedAnswer":{"@type":"Answer","text":"No. A low CQ is not 'bad' — it just is. A score is information, not judgment. Many valuable people score lower and do excellent work for years in well-defined roles. A low score only signals a person may need more structure, clarity, or support before a higher-scope or more ambiguous role. It is never a measure of worth."}},
    {"@type":"Question","name":"What does CQ not measure?","acceptedAnswer":{"@type":"Answer","text":"CQ does not measure personality, intelligence, character, worth, or any protected characteristic such as race, gender, age, religion, or disability. Scoring is blind to identity data. It measures only observable work behavior across Initiative, Applied Grit, and Learnability."}},
    {"@type":"Question","name":"How does CQ prevent bias?","acceptedAnswer":{"@type":"Answer","text":"CQ does not collect or use protected-class information; scoring is blind to identity and based on human-defined, behavior-based rubrics that are reviewed for fairness. Everyone in a process receives the same assessment, and CQ generates insights for a human to interpret — it does not make automated employment decisions."}}
  ]
}`;

const FAQS: { q: ReactNode; a: ReactNode }[] = [
  {
    q: <>What is the Commitment Quotient (CQ)?</>,
    a: (
      <>
        CQ is a behavioral signal that scores three observable behaviors under
        pressure — <strong>Initiative</strong> (who acts without being told),{" "}
        <strong>Applied Grit</strong> (who stays with it when it&apos;s hard), and{" "}
        <strong>Learnability</strong> (who adapts and grows). It&apos;s measured
        from what people actually do over time, not from a self-report
        questionnaire.
      </>
    ),
  },
  {
    q: <>Is CQ a personality test?</>,
    a: (
      <>
        No. Personality tests rely on self-report and describe stable traits. CQ
        measures observed behavior under real pressure across a six-week window —
        so it captures follow-through, and the gap between what someone{" "}
        <em>says</em> and what they <em>do</em>.{" "}
        <Link href="/guides/behavioral-vs-personality-tests">
          More on behavioral vs. personality &rarr;
        </Link>
      </>
    ),
  },
  {
    q: <>Can CQ be used to fire someone?</>,
    a: (
      <>
        No. CQ is decision-support for leadership development, coaching, and
        investment decisions only. It is explicitly <strong>not</strong> a
        performance review or a basis for termination, demotion, or other adverse
        employment actions. A low CQ does not mean low performance.
      </>
    ),
  },
  {
    q: <>How is CQ different from an engagement survey?</>,
    a: (
      <>
        Engagement surveys measure how people <em>feel</em> about their
        environment. CQ measures how people <em>behave</em> under pressure. A team
        can score high on engagement and still miss deadlines and dodge ownership.{" "}
        <Link href="/guides/cq-vs-engagement-surveys">
          CQ vs. engagement surveys &rarr;
        </Link>
      </>
    ),
  },
  {
    q: <>How long does a Prove cycle take?</>,
    a: (
      <>
        About six weeks: a 15-minute <strong>Snapshot</strong> to form an initial
        read, a multi-week <strong>Validation</strong> phase that gathers 40+
        behavioral datapoints under escalating challenges, and a{" "}
        <strong>Decision</strong> debrief with the CQ Heatmap.{" "}
        <Link href="/how-it-works">See how it works &rarr;</Link>
      </>
    ),
  },
  {
    q: <>Does Prove work with EOS?</>,
    a: (
      <>
        Yes. Prove works alongside EOS by making the <strong>Capacity</strong>{" "}
        part of GWC measurable — giving the People Analyzer and Quarterly
        Conversations behavioral data instead of a yes/no guess. Prove is
        independent of and not endorsed by EOS Worldwide.{" "}
        <Link href="/for-eos">For EOS &rarr;</Link>
      </>
    ),
  },
  {
    q: <>Does a low CQ score mean someone is a bad employee?</>,
    a: (
      <>
        No. Many strong performers score lower on CQ; it measures behavioral
        readiness for higher-scope or ambiguous roles — not talent, skill, or
        worth. A low score signals the person needs more structure or clarity
        before a stretch, and often thrives in a well-defined role.
      </>
    ),
  },
  {
    q: <>Who is Prove for?</>,
    a: (
      <>
        Founders and CEOs of scaling small and mid-sized companies who make
        high-stakes people decisions — promotions, key hires, project handoffs —
        and want behavioral proof before they invest. Especially useful for
        companies running on EOS.
      </>
    ),
  },
  {
    q: <>Is CQ a psychometric test?</>,
    a: (
      <>
        No &mdash; and this matters. A psychometric or personality test claims to
        measure a fixed internal trait. CQ measures{" "}
        <strong>commitment behavior</strong> &mdash; what a person actually does in
        a work context, over time. It describes behavior in a situation; it is not
        a verdict on who someone is, and it can change.{" "}
        <Link href="/ethics">What CQ is &amp; isn&apos;t &rarr;</Link>
      </>
    ),
  },
  {
    q: (
      <>
        Does a low CQ score mean someone is a bad employee &mdash; or a bad
        person?
      </>
    ),
    a: (
      <>
        No. A low CQ is not &ldquo;bad&rdquo; &mdash; it just is. A score is
        information, not judgment. Many of your most valuable people will score
        lower and do excellent work for years in well-defined roles. A low score
        only signals someone may need more structure, clarity, or support before a
        higher-scope role. Using it to rank human worth is wrong.
      </>
    ),
  },
  {
    q: (
      <>
        What does CQ <em>not</em> measure?
      </>
    ),
    a: (
      <>
        Not personality, intelligence, character, worth, or any protected
        characteristic (race, gender, age, religion, disability, and so on).
        Scoring is blind to identity data. It measures only observable work
        behavior across Initiative, Applied Grit, and Learnability.
      </>
    ),
  },
  {
    q: <>How do you prevent bias, and can CQ be used in hiring?</>,
    a: (
      <>
        CQ collects no protected-class data; scoring is blind to identity and uses
        human-defined, behavior-based rubrics reviewed for fairness. Used in
        hiring or promotion, it must be given to everyone in that process as one
        input alongside interviews, references, and job requirements &mdash; never
        as the sole decision-maker.{" "}
        <Link href="/ethics">See our fair-use principles &rarr;</Link>
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FAQ_JSONLD }}
      />
      <Nav />
      <PageHero
        crumb="FAQ"
        eyebrow="Questions, answered straight"
        title={<>Frequently asked questions</>}
      >
        <></>
      </PageHero>

      <Section tone="paper" className="!pb-10">
        <Container className="max-w-[820px]">
          <div className="flex flex-col gap-4">
            {FAQS.map((f, i) => (
              <div
                key={i}
                className="rounded-[16px] border border-edge-light bg-white px-7 py-[26px]"
              >
                <h2 className="m-0 mb-2 text-[19px] font-bold">{f.q}</h2>
                <p className="m-0 text-[15.5px] leading-[1.6] text-[#575249] [&_a]:text-green">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-5 text-center">
        <Container className="max-w-[820px]">
          <ButtonLink href={site.bookingUrl} variant="primary">
            Still have a question? Book a call
          </ButtonLink>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
