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
  title: "The Real Cost of a Bad Hire: 40–200% of Salary",
  description:
    "A bad hire costs far more than a salary — 40% to 200% of it, plus momentum and morale. Learn the true cost of a bad hire and how behavioral proof reduces the risk.",
  alternates: { canonical: "/guides/cost-of-a-bad-hire" },
};

const HIDES = [
  {
    n: "01",
    h: "Direct replacement",
    b: "Re-recruiting, re-onboarding, and lost ramp time — 40% to 200% of salary.",
  },
  {
    n: "02",
    h: "Team drag",
    b: "Your best people cover the gap, get frustrated, and disengage. That cost never shows on an invoice.",
  },
  {
    n: "03",
    h: "Opportunity cost",
    b: "Every month in the wrong seat is a month the right person was not doing the work.",
  },
];

const LOWER = [
  {
    h: "Prove before you commit",
    b: "A short behavioral trial reveals follow-through before you make the offer or the promotion.",
  },
  {
    h: "Decide on data, not charm",
    b: "Replace the gut call with a signal built from observed behavior.",
  },
];

// A practical checklist for cutting the cost before it lands —
// each item is an action a hiring manager can take this quarter.
const REDUCE = [
  "Write down the two or three behaviors the role actually fails without, then screen for those instead of a polished resume.",
  "Treat the interview as a hypothesis, not a verdict — assume charm and rehearsal inflate it, and look for evidence outside the room.",
  "Give finalists real work, not hypotheticals, and watch how they follow through when the task gets tedious.",
  "Check references for behavior under pressure — initiative, grit, and learning — rather than a general thumbs-up.",
  "Define what “working out” looks like at 90 days before the offer, so you catch a bad fit early instead of rationalizing it.",
  "Give a struggling new hire honest feedback fast — the longer a wrong seat stays filled, the more it costs the team around it.",
];

// FAQ — the format AI answer engines extract and cite.
const FAQ = [
  {
    q: "How much does a bad hire actually cost?",
    a: "Widely cited estimates put the cost of a bad hire between roughly 40% of annual salary for a frontline role and up to 200% for a senior or leadership role. But the salary figure is only the visible part. The full cost also includes re-recruiting and re-onboarding, lost ramp time, the drag on teammates who cover the gap, and the opportunity cost of every month the seat was filled by the wrong person.",
  },
  {
    q: "Why is a bad hire more expensive than it looks?",
    a: "Because most of the cost never appears on an invoice. Direct replacement costs are measurable, but the larger losses are hidden: your best people burn energy covering the gap and start to disengage, momentum on real work stalls, and the role sits unproductive for months. The more senior the role, the larger these invisible costs grow relative to the salary itself.",
  },
  {
    q: "What causes most bad hires?",
    a: "Most bad hires trace back to deciding on the wrong evidence. Resumes show credentials, and interviews reward people who present well under rehearsed conditions — neither reliably predicts whether someone will follow through on hard work once the novelty wears off. When the decision hinges on charm and pedigree rather than demonstrated behavior, the miss rate goes up.",
  },
  {
    q: "How do you reduce the cost of a bad hire?",
    a: "The cheapest way to cut the cost is to prove behavior before you commit rather than after. Define the behaviors the role fails without, give finalists real work instead of hypotheticals, and watch for follow-through. Catching a mismatch during a short trial is a fraction of the cost of catching it six months into the job.",
  },
  {
    q: "Does a bad hire cost more than a bad promotion?",
    a: "They are different shapes of the same problem. A bad external hire costs a premium salary plus lost ramp time; a bad promotion also removes a strong individual contributor and puts a team under weaker leadership, which compounds. Both are far cheaper to prevent with behavioral evidence up front than to unwind later.",
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

export default function CostOfABadHirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Cost of a bad hire"
        eyebrow="Hiring risk"
        title={<>The real cost of a bad hire.</>}
      >
        It is never just a wasted salary. A bad hire drains your team, your time,
        and your momentum &mdash; and the more senior the role, the more it hurts.
      </PageHero>

      <ArticleMeta
        headline="The real cost of a bad hire."
        description="A bad hire costs far more than a salary — 40% to 200% of it, plus momentum and morale. Learn the true cost of a bad hire and how behavioral proof reduces the risk."
        canonical="/guides/cost-of-a-bad-hire"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Cost of a bad hire", url: "/guides/cost-of-a-bad-hire" },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              A bad hire typically costs between 40% of salary for frontline roles
              and up to 200% for leadership &mdash; before counting lost momentum,
              manager time, and team morale. The cheapest way to cut that cost is
              to prove behavior <em>before</em> you commit, not after.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              What a bad hire really costs
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              A bad hire is any placement where the person cannot or will not do
              the job you hired them for &mdash; and the cost of one is almost
              never the number people picture. Widely cited estimates put it
              between roughly 40% of annual salary for a frontline role and up to
              200% for a senior one. Those figures already fold in re-recruiting,
              re-onboarding, and the ramp time you pay for twice. But the salary
              multiple is only the part you can invoice.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              The larger cost is the part that never shows up in a budget line.
              When someone is in the wrong seat, your strongest people quietly
              absorb the gap &mdash; they cover the work, correct the mistakes, and
              slowly disengage as they realize the load is not temporary. Momentum
              on real projects stalls. And every month the seat is wrongly filled
              is a month the right person was not in it doing the work. The more
              senior the role, the larger these invisible costs grow relative to
              the salary itself.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              Most bad hires trace back to the same root cause: the decision was
              made on the wrong evidence. Resumes show credentials and interviews
              reward people who present well under rehearsed conditions, but
              neither reliably predicts whether someone will follow through once
              the novelty wears off. The fix is not a better gut feel &mdash; it is
              to prove the behavior before you commit, so you learn how someone
              actually works while the cost of being wrong is still small. The same
              logic applies to internal moves, where a{" "}
              <Link href="/guides/failed-promotion" className="font-semibold text-green underline-offset-2 hover:underline">
                failed promotion
              </Link>{" "}
              carries its own compounding price.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Where the cost actually hides
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {HIDES.map((c) => (
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
            How to lower the risk
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {LOWER.map((c) => (
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
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              A checklist to cut the cost before it lands
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              You cannot recover the cost of a bad hire after the fact &mdash; you
              can only avoid paying it. These six moves shift the decision from
              impression to evidence:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {REDUCE.map((r) => (
                <li
                  key={r}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Cost of a bad hire: FAQ
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
            Stop paying for bad bets.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove reduces hiring and promotion risk.
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

      <RelatedGuides current="/guides/cost-of-a-bad-hire" />
      <Footer />
    </>
  );
}
