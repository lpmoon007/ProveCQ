import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/guides/reduce-turnover-small-business";

export const metadata: Metadata = {
  title: "How to Reduce Turnover in a Small Business",
  description:
    "A small business can't out-pay big firms, so retention comes from what you control: hiring for follow-through, growth paths, fairness, and managers who manage.",
  keywords: [
    "reduce employee turnover",
    "how to reduce turnover small business",
    "lower employee turnover",
    "employee turnover solutions",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How to Reduce Turnover in a Small Business",
    description:
      "A small business can't out-pay big firms, so retention comes from what you control: hiring for follow-through, growth paths, fairness, and managers who manage.",
    url: CANONICAL,
    type: "article",
  },
};

const SOURCES = [
  {
    h: "Bad-fit hires",
    b: "People brought on for a résumé or a good interview, not for follow-through — and they leave, or get pushed out, within the first year.",
  },
  {
    h: "No growth path",
    b: "Your best people can't see a next step. A bigger company down the road can, so they take the conversation and then the job.",
  },
  {
    h: "Unfairness and dead weight",
    b: "Strong performers watch passengers coast while nothing changes. Nothing burns out a good employee faster than carrying someone who isn't pulling.",
  },
  {
    h: "Weak management",
    b: "People don't quit companies so much as managers who never give feedback, never notice effort, and never have the hard conversation until it's an exit interview.",
  },
];

const PLAYBOOK = [
  {
    h: "Hire for follow-through, not polish",
    b: (
      <>
        Most turnover is a hiring decision catching up with you. Screen for people
        who finish what they start and take ownership without being chased. Our{" "}
        <Link href="/guides/hire-for-follow-through" className="font-semibold text-green underline-offset-2 hover:underline">
          guide to hiring for follow-through
        </Link>{" "}
        walks through how to test for it instead of hoping for it.
      </>
    ),
  },
  {
    h: "Make the first 90 days count",
    b: (
      <>
        Early turnover is expensive and usually preventable. A structured start &mdash;
        clear expectations, real check-ins, quick wins &mdash; decides whether a new hire
        digs in or drifts. See{" "}
        <Link href="/guides/first-90-days" className="font-semibold text-green underline-offset-2 hover:underline">
          the first-90-days playbook
        </Link>
        .
      </>
    ),
  },
  {
    h: "Give every keeper a visible next step",
    b: "You can't promise the ladder a Fortune 500 can, but you can name what growth looks like here — new scope, a skill, a lead role on a project. People stay when they can see themselves getting better where they are.",
  },
  {
    h: "Protect your best people from dead weight",
    b: "Fairness is a retention strategy. When you let passengers coast, you tax your strongest performers and they eventually leave to escape it. Address underperformance directly instead of quietly loading the slack onto whoever will carry it.",
  },
  {
    h: "Catch disengagement while it's still fixable",
    b: (
      <>
        Nobody resigns out of nowhere. The signs show up weeks earlier &mdash; effort
        pulling back, initiative going quiet. Notice it and have the conversation
        before it hardens. If a top performer is already fading, our guide on{" "}
        <Link href="/guides/burned-out-top-performers" className="font-semibold text-green underline-offset-2 hover:underline">
          burned-out top performers
        </Link>{" "}
        covers what to do.
      </>
    ),
  },
  {
    h: "Make your managers actually manage",
    b: (
      <>
        In a small business, one weak manager can churn a whole team. Give the
        people who lead others the basics &mdash; regular feedback, real one-on-ones,
        recognition that lands &mdash; and hold them to it. Start with{" "}
        <Link href="/guides/retain-top-performers" className="font-semibold text-green underline-offset-2 hover:underline">
          how to retain top performers
        </Link>
        .
      </>
    ),
  },
];

const FAQ = [
  {
    q: "Why do small businesses have high turnover?",
    a: "Small businesses rarely lose people on pay alone. They lose them to bad-fit hires that were never going to last, to a lack of any visible growth path, to unfairness when strong performers carry passengers, and to managers who never give feedback until it's too late. Those are the levers a small business actually controls.",
  },
  {
    q: "How can a small business reduce turnover without raising pay?",
    a: "You compete on the things money can't buy quickly: a manager who notices your work, a clear next step in your growth, fairness so your best people aren't taxed by dead weight, and a hiring process that puts the right people in the right seats to begin with. Most retention is built there, not in the pay band.",
  },
  {
    q: "What's the fastest way to cut turnover?",
    a: "Fix your hiring and your first 90 days. A large share of turnover is early turnover — people who were the wrong fit, or who never got a real onboarding. Hiring for follow-through and running a structured start stops the churn before it becomes a pattern.",
  },
  {
    q: "How much turnover is normal for a small business?",
    a: "Some turnover is healthy — people retire, relocate, or move on for reasons you can't control, and occasionally a departure is the right outcome. As a rule of thumb, worry less about a headline number and more about who is leaving. Losing your strongest people, or losing new hires inside their first year, is the signal worth acting on.",
  },
  {
    q: "Does hiring better reduce turnover?",
    a: "Yes — it's the highest-leverage fix most small businesses have. When you hire for follow-through instead of a good interview, you stop bringing in people who were always going to leave or be managed out. Better hiring quietly removes most of the turnover you'd otherwise spend the year fighting.",
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

export default function ReduceTurnoverSmallBusinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Reduce turnover (SMB)"
        eyebrow="Retention"
        title={<>How to reduce turnover in a small business.</>}
      >
        You can&rsquo;t out-pay, out-perk, or out-brand the big firms &mdash; so retention
        has to come from what a small business can actually control. The good news:
        those are the things that matter most anyway.
      </PageHero>

      <ArticleMeta
        headline="How to reduce turnover in a small business."
        description="A small business can't out-pay big firms, so retention comes from what you control: hiring for follow-through, growth paths, fairness, and managers who manage."
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Reduce turnover (SMB)", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              A small business reduces turnover by fixing the things it controls:
              hire for follow-through, give people a real growth path, keep the team
              fair so your best don&rsquo;t carry passengers, catch disengagement early,
              and make your managers actually manage. Pay matters &mdash; but it&rsquo;s rarely
              the reason your good people leave.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Where small-business turnover really comes from
          </h2>
          <p className="mb-6 max-w-[760px] text-[17px] leading-[1.65] text-content-muted">
            It&rsquo;s tempting to blame the paycheck, because that&rsquo;s the one thing a big
            competitor can obviously beat you on. But most of the turnover you feel
            traces back to four causes &mdash; and none of them is money.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {SOURCES.map((c) => (
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
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              A turnover-reduction playbook you can run
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              You don&rsquo;t need an HR department to do this. Six concrete steps, in the
              order that pays back fastest:
            </p>
            <ol className="m-0 flex list-none flex-col gap-4 p-0">
              {PLAYBOOK.map((c, i) => (
                <li
                  key={c.h}
                  className="flex gap-4 rounded-[16px] border border-edge-light bg-white px-6 py-5"
                >
                  <span className="shrink-0 font-display text-[18px] font-bold text-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-[17px] font-bold">{c.h}</h3>
                    <p className="m-0 text-[15px] leading-[1.6] text-content-muted">
                      {c.b}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              First, know which turnover is worth fixing
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              Turnover is simply the rate at which people leave and have to be
              replaced. But not all of it is a problem. Some departures are healthy
              &mdash; a person retires, relocates, or moves on to something you were never
              going to offer. And now and then, someone leaving is the right outcome
              for everyone.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              The turnover worth losing sleep over is the kind that hurts: your
              strongest people walking out, and new hires quitting inside their
              first year. That&rsquo;s regretted, preventable turnover &mdash; and it&rsquo;s exactly
              the kind a small business can do something about. Chasing a headline
              percentage misses the point; chasing the right departures doesn&rsquo;t.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Reducing turnover in a small business: FAQ
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
            Keep the people you can&rsquo;t afford to lose.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove helps a small business hire for
            follow-through and hold onto its best people.
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

      <RelatedGuides current="/guides/reduce-turnover-small-business" />
      <Footer />
    </>
  );
}
