import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Know Who to Promote — Without Guessing",
  description:
    "Most promotions are bets on past performance, not future capacity. Learn how to know who to promote using behavioral proof — Initiative, Applied Grit, and Learnability — instead of gut feel.",
  alternates: { canonical: "/guides/who-to-promote" },
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

// A concrete, repeatable process for de-risking a promotion decision.
const STEPS = [
  "Define the next role by behavior, not by title — write down what a person in that seat must consistently do, not just what they must know.",
  "Look back across two or three quarters, not the last standout month, so a single recent win or a likeable personality cannot carry the decision.",
  "Score the candidate on the three predictive behaviors — Initiative, Applied Grit, and Learnability — against real examples you can point to.",
  "Give a small slice of the future role now — a stretch project or a lead-without-the-title assignment — and watch how they handle it.",
  "Separate performance from potential on paper, so you never promote a great contributor into a role that will make them miserable and mediocre.",
  "Decide from the evidence, then name the gap — every promotion has one, and the honest ones get coached instead of hidden.",
];

// FAQ — the format AI answer engines extract and cite. Answers stay faithful to
// the article: promote on proven behavior, not past performance alone.
const FAQ = [
  {
    q: "How do you decide who to promote?",
    a: "Promote the person who has already shown the behavior the new role demands — initiative, follow-through under pressure, and fast learning — rather than the person with the best results in their current job. Past results describe the old role. Behavioral proof, gathered across several months, is the only thing that speaks to the new one.",
  },
  {
    q: "Should you promote your best performer?",
    a: "Not automatically. Performance is role-bound: being the best individual contributor says little about capacity to lead, coordinate, or handle ambiguity. Some of your strongest performers are most valuable exactly where they are. Promote for capacity in the next role, and find other ways — pay, scope, recognition — to keep great contributors who should stay contributors.",
  },
  {
    q: "What is the Peter Principle?",
    a: "The Peter Principle is the observation that people tend to get promoted to the level of their incompetence — because the skills that won the last role are not the skills the next one needs. You avoid it by testing for the next role's behaviors before you hand over the authority, not after.",
  },
  {
    q: "How do you promote without bias?",
    a: "Gut feel is quietly biased — recency and the halo effect let one recent win or a likeable personality outweigh months of mixed signal. Reduce it by defining the role in behavioral terms, reviewing evidence across multiple quarters, and scoring every candidate on the same criteria before you compare names.",
  },
  {
    q: "How can you test someone before promoting them?",
    a: "Give a slice of the future role first: a stretch project, a temporary lead role, or ownership of a hard problem, then watch how they handle it. A Prove cycle formalizes this by scoring Initiative, Applied Grit, and Learnability from six weeks of real behavior, so you bet on evidence instead of hope.",
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

export default function WhoToPromotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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

      <ArticleMeta
        headline="How to know who to promote — without guessing."
        description="Most promotions are bets on past performance, not future capacity. Learn how to know who to promote using behavioral proof — Initiative, Applied Grit, and Learnability — instead of gut feel."
        canonical="/guides/who-to-promote"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Who to promote", url: "/guides/who-to-promote" },
        ]}
      />

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
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Promotion is a bet on the future, not a reward for the past
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              A promotion decision is really a prediction: you are betting that
              someone who delivered in one role will deliver in a bigger, more
              ambiguous one. The trouble is that most organizations make the bet
              with the wrong evidence. Past performance measures how well a person
              did the job they already have. It is a rearview mirror &mdash;
              accurate about where they have been, silent about where they are
              going. The next role almost always demands different behavior:
              setting direction instead of taking it, owning outcomes instead of
              tasks, and staying steady when the path is unclear.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              Knowing who to promote, then, means reading the behaviors that
              actually travel across roles. Three predict promotion success more
              reliably than any performance score: initiative &mdash; do they act
              before the title makes it their job; applied grit &mdash; do they
              finish the hard, unglamorous work; and learnability &mdash; do they
              adapt when the demands change instead of clinging to what worked
              before. These are visible in what a person already does, which means
              you can gather proof before you hand over the authority rather than
              after.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              This is also why the strongest individual contributor is not
              automatically the right promotion. Performance is role-bound, and
              some of your best people are most valuable exactly where they sit.
              Promoting them into a role that does not fit their behavior is how a
              great contributor becomes a struggling manager &mdash; and how you
              lose the output that made them stand out in the first place. The goal
              is not to reward the past. It is to find the person whose behavior
              already looks like the future.
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

      {/* Concrete process — a repeatable promotion decision */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to decide who to promote: a six-step process
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              A promotion you can defend follows the same order every time
              &mdash; define the role by behavior, gather proof, then decide. Run
              these steps before you name a candidate:
            </p>
            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {STEPS.map((s, i) => (
                <li
                  key={s}
                  className="flex gap-4 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-display text-[15px] font-bold text-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
            <p className="m-0 mt-6 text-[15.5px] leading-[1.6] text-content-muted">
              If you are not sure a candidate is ready, the honest move is to test
              before you bet. See{" "}
              <Link href="/guides/high-potential-employees" className="text-green">
                how to identify high-potential employees
              </Link>{" "}
              for the behavioral signals that predict who grows into a bigger role.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ — GEO citation block */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Who to promote: FAQ
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

      <RelatedGuides current="/guides/who-to-promote" />
      <Footer />
    </>
  );
}
