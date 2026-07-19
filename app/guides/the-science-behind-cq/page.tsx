import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArticleMeta } from "@/components/ArticleMeta";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

const CANONICAL = "/guides/the-science-behind-cq";

const DESCRIPTION =
  "Engagement measures how people feel — it was never built to predict who delivers. The five first-principles behavioral traits behind the Commitment Quotient, and how they resolve into the score.";

export const metadata: Metadata = {
  title: "The 5 Behavioral Traits That Predict Value at Work",
  description: DESCRIPTION,
  keywords: [
    "behavioral traits that predict performance",
    "what predicts job performance",
    "traits that predict success at work",
    "commitment quotient methodology",
    "first principles hiring",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The 5 Behavioral Traits That Predict Value at Work",
    description:
      "The first-principles method behind the Commitment Quotient — five foundational, observable behaviors that predict who delivers.",
    url: CANONICAL,
    type: "article",
  },
};

const FOUNDATIONAL = [
  {
    n: "01",
    name: "Action Orientation",
    q: "Do they move?",
    markers: [
      "Proactive initiation",
      "Task follow-through",
      "Responds to ambiguity without being prompted",
    ],
    fail: "Drift, paralysis, analysis over action.",
  },
  {
    n: "02",
    name: "Stress Adaptability",
    q: "Do they hold under pressure?",
    markers: [
      "Resilience after setbacks",
      "Drive under uncertainty",
      "Emotional self-regulation in high-stakes moments",
    ],
    fail: "Volatility, breakdown under pressure, fragility.",
  },
  {
    n: "03",
    name: "Learnability",
    q: "Do they evolve?",
    markers: [
      "Openness to feedback",
      "Pattern recognition across time and domains",
      "Growth velocity over static competence",
    ],
    fail: "Stagnation, skill decay, obsolescence.",
  },
  {
    n: "04",
    name: "Ownership Instinct",
    q: "Do they own outcomes?",
    markers: [
      "Psychological responsibility for results",
      "Bias toward the solution, not blame",
      "Internal locus of control in team settings",
    ],
    fail: "Finger-pointing, dependency, managerial overhead.",
  },
  {
    n: "05",
    name: "Relational Reliability",
    q: "Do they coordinate with others?",
    markers: [
      "Clarity in communication",
      "Reliability on shared commitments",
      "Contextual awareness with people",
    ],
    fail: "Misalignment, trust decay, coordination friction.",
  },
];

const CRITERIA = [
  {
    h: "Observable",
    b: "Grounded in behavior you can actually see — not sentiment, personality type, or self-report.",
  },
  {
    h: "Predictive across roles",
    b: "Correlates with execution, growth, and resilience in almost any role and industry — not one narrow context.",
  },
  {
    h: "Distinct & influenceable",
    b: "Non-redundant with the others, and it can be developed or selected for — not a fixed, unchangeable trait.",
  },
];

const MAPPING = [
  {
    dim: "Initiative",
    from: "Action Orientation",
    sub: "Proactive Start · Follow-Through · Resourcefulness",
  },
  {
    dim: "Applied Grit",
    from: "Stress Adaptability + Ownership Instinct",
    sub: "Resilience · Ownership · Long-Game Drive",
  },
  {
    dim: "Learnability",
    from: "Learnability",
    sub: "Openness to Feedback · Self-Awareness · Growth Orientation",
  },
];

const FAQ = [
  {
    q: "What behavioral traits actually predict performance at work?",
    a: "Working from first principles, five foundational, observable behaviors predict value across almost any role: Action Orientation (do they move?), Stress Adaptability (do they hold under pressure?), Learnability (do they evolve?), Ownership Instinct (do they own outcomes?), and Relational Reliability (do they coordinate with others?). Each is behavior-based, predictive across contexts, distinct, and developable.",
  },
  {
    q: "Why not just measure engagement?",
    a: "Engagement measures how people feel about their work — it was designed to read emotional investment and retention risk, not to predict who delivers under pressure. It is worth keeping, but it was never built for high-stakes people decisions. The Commitment Quotient measures behavior instead of sentiment.",
  },
  {
    q: "How do the five traits become the Commitment Quotient?",
    a: "For most decisions, CQ Core measures three dimensions built from those foundations: Initiative (from Action Orientation), Applied Grit (from Stress Adaptability and Ownership Instinct), and Learnability. A fourth dimension, Relational Reliability, is used in leadership-specific tools. So the score you see rests on the same first-principles behaviors.",
  },
  {
    q: "Is a high CQ always better than a low CQ?",
    a: "No. CQ is role-sensitive, not universal. Some roles thrive on structure and consistency, where too much initiative or deviation adds risk rather than value. High CQ is not automatically good, and low CQ is not bad — the real problem is a mismatch between a person's CQ and what their role actually needs. CQ is a fit map, not a ranking.",
  },
  {
    q: "Is CQ a personality test?",
    a: "No. Personality tests measure stable traits and preferences; CQ measures behavior under pressure and ambiguity — what someone does, observed over time. It is designed to be developed and selected for, and it is explicitly not a measure of a person's worth, intelligence, or value.",
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

const definedTermSet = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "The Five Foundational Behavioral Traits",
  hasDefinedTerm: FOUNDATIONAL.map((t) => ({
    "@type": "DefinedTerm",
    name: t.name,
    description: `${t.q} ${t.markers.join("; ")}.`,
  })),
};

export default function ScienceBehindCQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSet) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › The science behind CQ"
        eyebrow="Methodology"
        title={<>The 5 behavioral traits that actually predict value at work.</>}
      >
        Engagement tells you how people <em>feel</em> about work. It was never
        built to tell you who will <em>deliver</em> when it gets hard. So we
        didn&rsquo;t patch it &mdash; we rebuilt from first principles. Here are
        the foundations the Commitment Quotient is made of.
      </PageHero>

      <ArticleMeta
        headline="The 5 behavioral traits that actually predict value at work."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "The science behind CQ", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container className="max-w-[760px]">
          <div className="rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Instead of patching engagement, we stripped the question down to a
              fundamental one &mdash; <em>what behaviors actually create value at
              work?</em> &mdash; and rebuilt from there. Five observable,
              role-agnostic traits survived the cut. The Commitment Quotient
              measures them.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container className="max-w-[760px]">
          <h2 className="mb-4 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
            Why we started over
          </h2>
          <p className="m-0 mb-4 text-[17px] leading-[1.7] text-content-muted">
            For a decade, companies have measured engagement harder than ever
            &mdash; and Gallup still reports only about one in five employees
            worldwide is engaged. The instinct is to read that as a performance
            crisis. It isn&rsquo;t. Engagement was designed to capture how people
            feel about their role, manager, and team &mdash; useful for reading
            the emotional weather, but never built to predict who moves when the
            storm hits.{" "}
            <Link href="/guides/its-the-metric" className="font-semibold text-green">
              The metric was the problem
            </Link>
            , not the people.
          </p>
          <p className="m-0 text-[17px] leading-[1.7] text-content-muted">
            You can&rsquo;t start with culture, engagement, or &ldquo;potential&rdquo;
            &mdash; those are outputs, not inputs. You have to begin with
            observable, repeatable behaviors that affect outcomes, vary
            meaningfully between people, and can be developed or selected for. So
            that&rsquo;s where we started.
          </p>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container className="max-w-[900px]">
          <h2 className="mb-6 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
            What makes a trait &ldquo;foundational&rdquo;
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {CRITERIA.map((c) => (
              <div
                key={c.h}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <h3 className="mb-2 text-[17px] font-bold">{c.h}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container className="max-w-[1000px]">
          <h2 className="mb-2 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The five foundational traits
          </h2>
          <p className="m-0 mb-8 max-w-[640px] text-[16px] leading-[1.6] text-content-muted">
            Each answers a plain functional question, shows up as specific
            behavior, and has a clear failure mode when it&rsquo;s missing.
          </p>
          <div className="flex flex-col gap-4">
            {FOUNDATIONAL.map((t) => (
              <div
                key={t.name}
                className="grid grid-cols-1 gap-4 rounded-[18px] border border-edge-light bg-white p-6 sm:grid-cols-[240px_1fr] sm:p-7"
              >
                <div>
                  <div className="mb-1 font-display text-[14px] font-bold text-green">
                    {t.n}
                  </div>
                  <h3 className="m-0 text-[20px] font-bold tracking-[-.01em]">
                    {t.name}
                  </h3>
                  <p className="m-0 mt-1 text-[15px] font-semibold italic text-content-muted">
                    {t.q}
                  </p>
                </div>
                <div>
                  <ul className="m-0 mb-3 flex list-none flex-col gap-1.5 p-0">
                    {t.markers.map((m) => (
                      <li
                        key={m}
                        className="flex gap-2 text-[14.5px] leading-[1.5] text-content-muted"
                      >
                        <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                  <p className="m-0 text-[13.5px] leading-[1.5] text-signal-red">
                    <span className="font-bold">Missing it looks like:</span>{" "}
                    <span className="text-[#7A4536]">{t.fail}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container className="max-w-[820px]">
          <h2 className="mb-4 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
            How five foundations become the CQ score
          </h2>
          <p className="m-0 mb-6 text-[17px] leading-[1.7] text-content-muted">
            You don&rsquo;t score five separate numbers in a hiring or promotion
            call &mdash; that&rsquo;s too much to act on. For most decisions,{" "}
            <strong>CQ Core</strong> resolves the foundations into three
            measured dimensions:
          </p>
          <div className="flex flex-col gap-3">
            {MAPPING.map((m) => (
              <div
                key={m.dim}
                className="rounded-[14px] border border-edge-light bg-white p-5"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-[18px] font-bold text-green">
                    {m.dim}
                  </span>
                  <span className="text-[13px] font-semibold text-content-faint">
                    from {m.from}
                  </span>
                </div>
                <p className="m-0 mt-1 text-[14px] text-content-muted">{m.sub}</p>
              </div>
            ))}
          </div>
          <p className="m-0 mt-6 text-[15px] leading-[1.65] text-content-muted">
            A fourth dimension &mdash; <strong>Relational Reliability</strong>{" "}
            &mdash; is used in leadership-specific tools, where how someone
            coordinates a team matters as much as how they perform alone. So the
            three numbers you act on in{" "}
            <Link href="/how-it-works" className="font-semibold text-green">
              a Prove cycle
            </Link>{" "}
            rest on the same first-principles behaviors.
          </p>
        </Container>
      </Section>

      <Section tone="paper">
        <Container className="max-w-[760px]">
          <h2 className="mb-4 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
            CQ is a fit map, not a ranking
          </h2>
          <p className="m-0 mb-4 text-[17px] leading-[1.7] text-content-muted">
            Here&rsquo;s the part most measurement systems get wrong: chasing a
            high score across the board is a mistake. Some roles thrive on
            structure, routine, and predictability &mdash; and there, high-CQ
            behaviors like reshaping ambiguous situations can create noise, not
            value. Plenty of excellent people score low on CQ because they do
            their best work inside clear, well-defined lanes. That&rsquo;s not a
            failure. It&rsquo;s alignment.
          </p>
          <div className="my-6 rounded-[16px] bg-ink px-7 py-6 text-paper on-dark">
            <p className="m-0 text-[18px] leading-[1.5]">
              High CQ is not always good. Low CQ is not always bad.{" "}
              <span className="text-green-soft">Misaligned CQ is the real problem.</span>
            </p>
          </div>
          <p className="m-0 text-[17px] leading-[1.7] text-content-muted">
            The goal isn&rsquo;t to maximize CQ everywhere &mdash; it&rsquo;s to
            surface it where it matters and match people to the roles that fit
            them. That&rsquo;s also why a low score is never a judgment of a
            person&rsquo;s worth.{" "}
            <Link href="/ethics" className="font-semibold text-green">
              What CQ is &amp; isn&rsquo;t &rarr;
            </Link>
          </p>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              The science behind CQ: FAQ
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
            See the method on your own team.
          </h2>
          <p className="m-0 mb-8 text-[18px] leading-[1.6] text-[#E4F5EB]">
            These traits aren&rsquo;t theory &mdash; they&rsquo;re measurable. Book
            a call to see how Prove scores Initiative, Applied Grit, and
            Learnability from real behavior, or start with the free diagnostic.
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

      <RelatedGuides current="/guides/the-science-behind-cq" />
      <Footer />
    </>
  );
}
