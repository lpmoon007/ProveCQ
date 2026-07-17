import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/guides/vs-performance-reviews";

const DESCRIPTION =
  "Performance reviews look backward at the current role — a weak predictor of readiness for a bigger one. See where reviews help, where they fail, and how to make a promotion call they cannot.";

export const metadata: Metadata = {
  title: "Prove vs. Performance Reviews",
  description: DESCRIPTION,
  keywords: [
    "performance review alternatives",
    "annual performance review",
    "performance vs potential",
    "promotion decisions",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Prove vs. Performance Reviews",
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
};

// Side-by-side comparison — the core of the page and a Tier-1 GEO structure.
const COMPARISON = [
  {
    row: "Time direction",
    review: "Backward — rates what already happened.",
    prove: "Forward — measures behavior that predicts what comes next.",
  },
  {
    row: "Cadence",
    review: "Annual or quarterly — an infrequent snapshot.",
    prove: "Continuous — scored over weeks of real work.",
  },
  {
    row: "Main bias",
    review: "Recency and halo — the last quarter and the loudest voice.",
    prove: "Observed behavior under pressure, not a single impression.",
  },
  {
    row: "What it predicts",
    review: "Mastery of the current role.",
    prove: "Readiness to carry more — initiative, applied grit, learnability.",
  },
  {
    row: "Decision it supports",
    review: "Compensation and the HR record.",
    prove: "Promotion, hand-off, and “can they carry more?”",
  },
];

const GOOD_FOR = [
  {
    h: "Compensation and calibration",
    b: "A documented rating cycle is how most organizations justify raises, bonuses, and merit bands fairly across a team.",
  },
  {
    h: "The HR record",
    b: <>They create the paper trail that protects both the company and the employee &mdash; a defensible history of expectations and results.</>,
  },
  {
    h: "Current-role feedback",
    b: "Done well, a review tells someone how they are doing at the job they hold today, and where to sharpen.",
  },
];

const CANT_TELL = [
  {
    h: "Whether they can carry more",
    b: <>Being excellent at today&rsquo;s job says little about capacity for a bigger one. Performance is role-bound; potential is not.</>,
  },
  {
    h: "Behavior under real pressure",
    b: "A once-a-year rating averages away the moments that actually reveal commitment — the hard week, the ambiguous hand-off, the unglamorous problem.",
  },
  {
    h: "What happens between reviews",
    b: "Recency and halo bias mean the score often reflects the last few weeks and the manager's overall impression, not the full period.",
  },
];

// paper2 checklist — how to make a promotion call a review can't.
const PROMOTION_CALL = [
  "Watch behavior over weeks, not a single end-of-period rating.",
  "Score the three forward-looking signals: initiative, applied grit, and learnability.",
  "Look at conduct under pressure — the hard problem, not the easy quarter.",
  "Separate the promotion decision from the compensation cycle so recency bias doesn't drive it.",
  "Use the review for the record and the raise; use the proof for who carries more.",
];

const FAQ = [
  {
    q: "Do performance reviews predict promotion success?",
    a: "Weakly. A performance review rates mastery of the current role, and current-role performance is a poor predictor of readiness for a bigger one. Some of your strongest performers are most valuable exactly where they are. Promotion success depends on forward-looking behaviors — initiative, applied grit, and learnability — that a backward-looking rating is not designed to capture.",
  },
  {
    q: "Why do annual reviews fail?",
    a: "Annual (and even quarterly) reviews look backward, happen infrequently, and are prone to recency and halo bias — the score tends to reflect the last few weeks and the manager's overall impression rather than the full period. They also measure the current role, so they answer 'how did they do?' rather than the question a promotion actually asks: 'can they carry more?'",
  },
  {
    q: "What's the alternative to performance reviews?",
    a: "You don't have to replace them. Reviews are genuinely good for compensation, calibration, and the HR record. The alternative is to add a forward-looking, continuous measure for the decisions reviews can't support — a Prove cycle scores commitment behavior (initiative, applied grit, learnability) from weeks of real work, under pressure, so the promotion call rests on proof rather than the last quarter.",
  },
  {
    q: "Prove vs performance reviews?",
    a: "A performance review is a backward-looking, infrequent rating of the current role that supports pay and the record. Prove is a forward-looking, continuous measure of commitment behavior that supports the promotion, hand-off, and 'can they carry more?' decision. They answer different questions, so the strongest teams run both.",
  },
  {
    q: "Should you replace reviews with Prove?",
    a: "No. Keep performance reviews for what they do well — compensation and the HR record — and use Prove where reviews are weak: the forward-looking promotion, hand-off, and readiness decisions. Using them together gives you both a defensible record of past performance and real proof of who will deliver next.",
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

export default function VsPerformanceReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Prove vs. performance reviews"
        eyebrow="Compare"
        title={<>Prove vs. performance reviews.</>}
      >
        A performance review looks backward at how someone did in the role they
        already have. A promotion asks a different question &mdash; can they carry
        more? &mdash; and that is a forward-looking bet a backward-looking rating
        was never built to make.
      </PageHero>

      <ArticleMeta
        headline="Prove vs. performance reviews."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Prove vs. performance reviews", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Performance reviews are backward-looking, infrequent, and biased
              toward the last quarter &mdash; and they rate the current role,
              which is a weak predictor of readiness for a bigger one. Prove
              measures forward-looking commitment behavior continuously and under
              pressure. Keep reviews for pay and the record; use Prove for the
              promotion.
            </p>
          </div>
        </Container>
      </Section>

      {/* Side-by-side comparison table — Tier-1 GEO structure */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[860px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Performance review vs. Prove, side by side
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className="border-b border-edge-light px-4 py-3 text-[13px] font-bold uppercase tracking-wide text-content-muted" />
                    <th className="border-b border-edge-light px-4 py-3 text-[15px] font-bold">
                      Performance review
                    </th>
                    <th className="border-b border-edge-light px-4 py-3 text-[15px] font-bold text-green">
                      Prove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((r) => (
                    <tr key={r.row} className="align-top">
                      <th
                        scope="row"
                        className="border-b border-edge-light px-4 py-4 text-[14.5px] font-bold text-content"
                      >
                        {r.row}
                      </th>
                      <td className="border-b border-edge-light px-4 py-4 text-[14.5px] leading-[1.5] text-[#615B4F]">
                        {r.review}
                      </td>
                      <td className="border-b border-edge-light px-4 py-4 text-[14.5px] leading-[1.5] text-content">
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

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            What reviews are genuinely good for
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {GOOD_FOR.map((c) => (
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

      <Section tone="paper2">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            What a review can&rsquo;t tell you
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {CANT_TELL.map((c) => (
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
            This is the gap behind most{" "}
            <Link href="/guides/failed-promotion" className="font-semibold text-green hover:underline">
              failed promotions
            </Link>{" "}
            &mdash; a great review is read as a promotion signal it was never
            meant to be.
          </p>
        </Container>
      </Section>

      {/* Use both */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Use both &mdash; they answer different questions
            </h2>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              This is not a case for scrapping reviews. Keep them for
              compensation and the HR record, where a documented rating cycle
              does real work. Then bring forward-looking proof to the moments a
              rating can&rsquo;t reach: deciding{" "}
              <Link href="/guides/who-to-promote" className="font-semibold text-green hover:underline">
                who to promote
              </Link>
              , handing off scope, and asking whether someone can carry more. One
              measure defends the past; the other predicts the next role.
            </p>
          </div>
        </Container>
      </Section>

      {/* paper2 checklist */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to make a promotion call a review can&rsquo;t
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              A promotion is a forward-looking bet. To make one a backward-looking
              rating can&rsquo;t, change what you look at and how often:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {PROMOTION_CALL.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="m-0 mt-6 text-[15.5px] leading-[1.6] text-content-muted">
              For the full method, see{" "}
              <Link href="/guides/measure-commitment" className="font-semibold text-green hover:underline">
                how to measure commitment
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ — GEO citation block */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Prove vs. performance reviews: FAQ
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
            Promote on proof, not the last quarter.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove measures the forward-looking behavior a
            review can&rsquo;t &mdash; so your next promotion is a bet you can
            defend.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[16px]">
              Book a call
            </ButtonLink>
            <Link
              href="/free-tools/certainty-diagnostic"
              className="inline-flex items-center justify-center rounded-[12px] border-[1.5px] border-[#7BCB9E] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              Take the free diagnostic &rarr;
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuides current="/guides/vs-performance-reviews" />
      <Footer />
    </>
  );
}
