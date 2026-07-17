import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";

export const metadata: Metadata = {
  title: "Signs an Employee Is Quietly Checking Out (Before They Leave)",
  description:
    "Quiet quitting and disengagement are behavioral, not verbal. Learn the early signs an employee is coasting or checking out — and how to catch drift before it costs you.",
  alternates: { canonical: "/guides/quiet-quitting" },
};

// GEO checklist — how a manager can catch drift early, drawn from the three
// behaviors the article tracks (initiative, follow-through, curiosity).
const CATCH_STEPS = [
  "Track initiative, not hours. Note who still brings problems and ideas unprompted, and who has narrowed to exactly what is assigned.",
  "Watch follow-through over three or four commitments, not one. A single slip is noise; a pattern of later, partial, or reminded delivery is signal.",
  "Notice where curiosity went quiet. The person who stopped asking questions in reviews or stopped engaging with change is often the first to check out.",
  "Compare each person against their own baseline, not the team average. Drift is a change from how someone used to show up — averages hide it.",
  "Open a direct, low-stakes conversation early — before the behavior hardens into a decision to leave. Ask what changed, and listen for workload, growth, or trust.",
  "Re-scope the work if the signal is real. Give a stretch that restores ownership, or move the person toward something they actually want to push on.",
];

// FAQ — the format AI answer engines extract and cite. Answers stay faithful to
// the article and to behavioral, decision-support framing.
const FAQ = [
  {
    q: "What is quiet quitting?",
    a: "Quiet quitting is when an employee stays in the job but quietly withdraws discretionary effort — doing exactly what the role requires and nothing more. It is not a formal resignation and rarely announced. It shows up first in behavior: initiative flatlines, follow-through slips, and curiosity fades.",
  },
  {
    q: "What are the early signs an employee is checking out?",
    a: "The earliest signs are behavioral, not verbal. Watch for initiative dropping to the bare minimum, commitments met later or with more reminders than before, and a person who stops asking questions or engaging with change. These usually appear months before any conversation about leaving.",
  },
  {
    q: "How is quiet quitting different from being lazy?",
    a: "Quiet quitting is usually a change, not a character trait. A previously engaged person narrows their effort in response to burnout, a growth ceiling, a broken promise, or lost trust in leadership. Because it is a shift from their own baseline, it is best spotted by comparing someone to how they used to show up — not by labeling them.",
  },
  {
    q: "Why do engagement surveys miss quiet quitting?",
    a: "Surveys are self-reported and lagging. People often answer the way they think they should, so sentiment reads fine while behavior has already changed. Averages compound the problem — a healthy team score can mask two or three quietly checked-out people who matter most. Observed behavior tells the truth sooner.",
  },
  {
    q: "Can quiet quitting be reversed?",
    a: "Often, yes — if it is caught early. When you see drift while it is still behavioral rather than a firm decision to leave, you can re-scope the work, restore ownership, or address the workload or growth issue underneath it. The window closes once the person has quietly decided to go.",
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

const TELLS = [
  {
    n: "01",
    title: "Initiative flatlines",
    body: "They do exactly what is asked and nothing more. The extra mile disappears quietly.",
  },
  {
    n: "02",
    title: "Follow-through slips",
    body: "Commitments are met later, partially, or with more reminders than before.",
  },
  {
    n: "03",
    title: "Curiosity fades",
    body: "They stop asking questions, proposing ideas, or engaging with what is changing.",
  },
];

const SURVEYS = [
  {
    title: "Self-report lags reality",
    body: "People answer engagement surveys the way they think they should — the behavior tells the truth sooner.",
  },
  {
    title: "Averages hide individuals",
    body: "A healthy team score can mask two or three quietly checked-out players who matter most.",
  },
];

export default function QuietQuittingGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Quiet quitting"
        eyebrow="Disengagement"
        title="The signs an employee is quietly checking out."
      >
        Your retention numbers can look fine while your team quietly disengages.
        People stay for security and coast &mdash; and by the time it shows up in
        results, momentum is already gone.
      </PageHero>

      <ArticleMeta
        headline="The signs an employee is quietly checking out."
        description="Quiet quitting and disengagement are behavioral, not verbal. Learn the early signs an employee is coasting or checking out — and how to catch drift before it costs you."
        canonical="/guides/quiet-quitting"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Quiet quitting", url: "/guides/quiet-quitting" },
        ]}
      />

      <Section tone="paper" className="!pb-0">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink p-8 text-paper on-dark sm:p-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Disengagement shows up in behavior long before it shows up in a
              resignation: initiative drops, follow-through slips, and curiosity
              fades. The fix is not another survey &mdash; it is a behavioral
              signal you track over time, so drift is visible early enough to
              coach or act.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              What quiet quitting actually is
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              Quiet quitting is the gap between staying and caring. An employee
              keeps the job and clears the bar of what is formally required, but
              quietly withdraws the discretionary effort that used to make them
              valuable &mdash; the extra idea, the problem they were not asked to
              solve, the follow-through that needed no chasing. Nothing is
              announced. Nothing looks broken on paper. The person is simply no
              longer leaning in.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              What makes it hard to catch is that it is behavioral, not verbal.
              People rarely say they have checked out; more often they have not
              fully admitted it to themselves. So the drift shows up in what they
              do &mdash; initiative flatlining, commitments slipping, curiosity
              going quiet &mdash; long before it shows up in a resignation or a
              missed target. By the time the numbers move, the disengagement is
              months old and momentum is already gone.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              It also tends to be a change rather than a character flaw. The
              person coasting today was often engaged a quarter ago, and the shift
              usually traces to something real: burnout, a growth ceiling, a
              broken promise, or eroded trust in the direction. Read against their
              own past behavior &mdash; not the team average &mdash; that change is
              legible, and legible early enough to do something about.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The early behavioral tells
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {TELLS.map((c) => (
              <div
                key={c.n}
                className="rounded-[16px] border border-edge-light bg-white p-[26px]"
              >
                <div className="mb-2.5 font-display text-[15px] font-bold text-green">
                  {c.n}
                </div>
                <h3 className="mb-2 text-[18px] font-bold">{c.title}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="mx-auto max-w-[860px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Why surveys miss it
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {SURVEYS.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[16px] border border-edge-light bg-white p-[26px]"
                >
                  <h3 className="mb-2 text-[18px] font-bold">{c.title}</h3>
                  <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to catch disengagement early
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              You cannot survey your way to an early warning &mdash; you have to
              watch behavior over time and compare each person to their own
              baseline. In practice, catching drift before it becomes turnover
              looks like a short checklist:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {CATCH_STEPS.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="m-0 mt-6 text-[17px] leading-[1.65] text-content-muted">
              The same behavioral read that surfaces drift also surfaces its
              opposite &mdash; the people quietly leaning in. If you are trying to
              tell them apart, it is worth learning to spot your{" "}
              <Link
                href="/guides/high-potential-employees"
                className="font-semibold text-green underline underline-offset-2"
              >
                high-potential employees
              </Link>{" "}
              and to know when a stretch signals readiness rather than strain, as
              in a{" "}
              <Link
                href="/guides/failed-promotion"
                className="font-semibold text-green underline underline-offset-2"
              >
                failed promotion
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
              Quiet quitting: FAQ
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

      <CTASection title="See who is really committed.">
        Book a call and we will show you how Prove surfaces drift before it
        becomes turnover.
      </CTASection>

      <RelatedGuides current="/guides/quiet-quitting" />
      <Footer />
    </>
  );
}
