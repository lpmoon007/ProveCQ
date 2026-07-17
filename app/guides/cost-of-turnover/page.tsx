import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ArticleMeta } from "@/components/ArticleMeta";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

const CANONICAL = "/guides/cost-of-turnover";

const DESCRIPTION =
  "The cost of employee turnover is far more than the recruiter fee. See the full price — replacement, lost productivity, knowledge, and team drag — and how to size it.";

export const metadata: Metadata = {
  title: "The Real Cost of Employee Turnover",
  description: DESCRIPTION,
  keywords: [
    "cost of employee turnover",
    "employee turnover cost",
    "turnover cost",
    "cost of losing an employee",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The Real Cost of Employee Turnover",
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
};

const HIDDEN_COSTS = [
  {
    n: "01",
    h: "Replacement cost",
    b: "Recruiting, interviewing, onboarding, and ramp time — you pay to fill the seat, then pay again while the new hire gets up to speed.",
  },
  {
    n: "02",
    h: "The productivity gap",
    b: "The work still has to get done while the seat sits empty or half-filled. Output drops long before it recovers.",
  },
  {
    n: "03",
    h: "Lost knowledge",
    b: "Context, judgment, and customer relationships walk out the door. Some of it was never written down anywhere.",
  },
  {
    n: "04",
    h: "Team drag and morale",
    b: "The teammates covering the gap carry more, move slower on their own work, and start eyeing the exit themselves.",
  },
];

const SIZING = [
  "Add up the hard replacement spend — job ads, recruiter or agency fees, referral bonuses, and the hours your team spends screening and interviewing.",
  "Count the ramp: estimate how many weeks a replacement takes to reach full output, and value the gap between a half-productive seat and a full one.",
  "Price the empty seat — the days or weeks the role sits vacant while the work piles up or gets pushed onto others.",
  "Add the coverage drag: the hours teammates lose covering the gap instead of doing their own highest-value work.",
  "Flag continuity risk with customers — any account, project, or relationship that leaned on the person who left.",
  "Weight it for your size: at a small or mid-sized company, one departure is a bigger share of the whole than the same loss at a large firm.",
];

const FAQ = [
  {
    q: "How much does employee turnover cost?",
    a: "A widely-cited estimate puts the cost of replacing an employee at roughly one-half to two times their annual salary, depending on the role — higher for specialized, senior, or hard-to-fill positions. Treat it as a range for sizing the problem, not a precise figure. The full cost includes recruiting and onboarding, lost productivity while the seat is empty or ramping, lost knowledge and relationships, and the drag on the teammates who cover.",
  },
  {
    q: "What's included in the cost of turnover?",
    a: "More than the recruiter fee. Employee turnover cost includes replacement cost (recruiting, interviewing, onboarding, and ramp time), the productivity gap while the role is unfilled or half-filled, lost knowledge and customer relationships, the morale and workload drag on the people covering, and continuity risk with customers. The salary you stop paying is not a saving — the work still has to get done.",
  },
  {
    q: "Why is turnover more expensive for small businesses?",
    a: "Proportionally, each departure hits a small or mid-sized company harder than a large one. One person is a bigger share of the team's total output, often owns knowledge that lives nowhere else, and is harder to cover because there is less bench. A single regretted loss can stall a project or put a key customer relationship at risk in a way a large firm can absorb.",
  },
  {
    q: "How do you calculate the cost of losing an employee?",
    a: "Add the hard replacement spend (ads, recruiter fees, interview hours), the value of the ramp gap until a replacement reaches full output, the cost of the seat sitting empty, and the hours teammates lose covering. Then weight it for the role's seniority and for your company's size. The point is not a perfect number — it is realizing the total is far bigger than the invoice from a recruiter.",
  },
  {
    q: "What's the cheapest way to cut turnover cost?",
    a: "Keep the people you would regret losing. Retention is almost always cheaper than replacement, and the highest-leverage move is knowing early who is worth keeping and acting before they leave. That means hiring for behavioral proof of who will actually deliver, and paying attention to your best people rather than reacting once notice is already in.",
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

export default function CostOfTurnoverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Cost of turnover"
        eyebrow="Retention"
        title={<>The real cost of employee turnover.</>}
      >
        The cost of turnover is far more than the recruiter&rsquo;s invoice. When
        someone leaves, you pay to replace them, you pay while the seat sits empty,
        and you pay in the work your best people drop to cover &mdash; long after
        the goodbye email goes out.
      </PageHero>

      <ArticleMeta
        headline="The real cost of employee turnover."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Cost of turnover", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              A single departure typically costs somewhere between half and twice
              the person&rsquo;s annual salary once you count everything &mdash;
              replacement, lost productivity, lost knowledge, and the drag on the
              team that covers. The salary you stop paying is not a saving. The work
              still has to get done, and the cheapest lever is keeping the people
              you would regret losing.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The cost you can&rsquo;t see on an invoice
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {HIDDEN_COSTS.map((c) => (
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

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Why the number is bigger than it looks
            </h2>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              Employee turnover cost is the total price a business pays when a
              person leaves and has to be replaced. It is not one line item. It is
              the sum of the money you spend finding and onboarding a replacement,
              the output you lose while the role is empty or half-filled, the
              knowledge and relationships that leave with the person, and the drag on
              everyone who picks up the slack. Most of that never shows up on a
              recruiter&rsquo;s invoice, which is exactly why leaders under-count it.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              A widely-cited estimate puts the cost of replacing an employee at
              roughly one-half to two times their annual salary, depending on the
              role &mdash; higher for senior, specialized, or hard-to-fill jobs.
              Take it as a range for sizing the problem, not a precise fact. The
              instinct that a departure &ldquo;saves&rdquo; a salary is the
              expensive mistake. You stop paying one person, but the work they did
              does not disappear. It gets deferred, dropped, or dumped on teammates
              who were already full &mdash; and every one of those outcomes has a
              price. Add the weeks a new hire needs to reach full output, and you are
              paying for that seat twice: once to hire, once to wait.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              For a small or mid-sized company, each departure is proportionally
              more painful than at a large firm. One person is a bigger share of the
              total, often owns context that lives nowhere else, and is harder to
              cover because there is no bench waiting. That is why turnover deserves
              the same scrutiny as any large expense &mdash; and why{" "}
              <Link href="/guides/regretted-attrition" className="font-semibold text-green hover:underline">
                regretted attrition
              </Link>{" "}
              (losing someone you wanted to keep) is the version that actually
              hurts. Some turnover is healthy. The cost that bleeds you is the good
              person walking out the door. You can put real numbers on it with the{" "}
              <Link href="/free-tools/cost-of-a-bad-bet" className="font-semibold text-green hover:underline">
                cost-of-a-bad-bet calculator
              </Link>
              , and the same logic drives the{" "}
              <Link href="/guides/cost-of-a-bad-hire" className="font-semibold text-green hover:underline">
                cost of a bad hire
              </Link>{" "}
              &mdash; a departure and a mis-hire are two sides of the same
              expensive coin.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to size your real turnover cost
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              You do not need a perfect figure. You need an honest one &mdash; big
              enough to change how you act. Work through it in order:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {SIZING.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="m-0 mt-6 text-[16px] leading-[1.6] text-content-muted">
              Once the number is in front of you, the priority shifts from filling
              seats to keeping the people you would regret losing. If you run a
              smaller team, the practical playbook is in{" "}
              <Link href="/guides/reduce-turnover-small-business" className="font-semibold text-green hover:underline">
                how to reduce turnover in a small business
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Cost of turnover: FAQ
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
            Stop paying for turnover you could prevent.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how behavioral proof helps you hire people who stay
            and keep the ones you&rsquo;d regret losing.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[16px]">
              Book a call
            </ButtonLink>
            <Link
              href="/free-tools/certainty-diagnostic"
              className="inline-flex items-center justify-center rounded-[12px] border-[1.5px] border-[#7BCB9E] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              Try the Certainty Diagnostic &rarr;
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuides current="/guides/cost-of-turnover" />
      <Footer />
    </>
  );
}
