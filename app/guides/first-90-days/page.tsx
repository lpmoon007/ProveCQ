import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";

export const metadata: Metadata = {
  title: "How to Use the First 90 Days to Prove a New Hire",
  description:
    "The first 90 days are your real interview. Learn how to use onboarding as a proving ground to confirm — or disprove — whether a new hire will deliver.",
  alternates: { canonical: "/guides/first-90-days" },
};

const WATCH = [
  {
    n: "01",
    title: "Initiative",
    body: "Do they find work and own it, or wait to be handed everything?",
  },
  {
    n: "02",
    title: "Follow-through",
    body: "Do early commitments get honored fully and on time?",
  },
  {
    n: "03",
    title: "Learnability",
    body: "Do they absorb feedback and improve week over week?",
  },
];

const SYSTEM = [
  {
    title: "Escalating real tasks",
    body: "Increase the stakes gradually so behavior is tested under rising pressure.",
  },
  {
    title: "Confirm or disprove the signal",
    body: "Compare what you saw in hiring to what they actually do — and act early either way.",
  },
];

// Actionable 90-day plan — GEO "how to" structure, drawn from the article's
// three behaviors and the proving-ground framing.
const PLAN = [
  "Weeks 1–2: Hand over one real task with a clear owner and a real deadline — not busywork. Watch whether they clarify the goal and start, or wait to be told each step.",
  "Weeks 3–4: Raise the stakes. Give work that touches other people, where following through means chasing an answer they do not have. This is where initiative shows.",
  "Weeks 5–6: Deliver direct feedback on something they got wrong, then watch the next cycle. Learnability is the change you see afterward, not the nod in the moment.",
  "Weeks 7–9: Add ambiguity. Assign an outcome without a recipe and see whether they build a path or stall waiting for one.",
  "By day 90: Compare the behavior you have observed to the story you believed at hiring. If initiative, follow-through, and learnability are not there now, they will not appear later — act while it is still cheap.",
];

// FAQ — the format AI answer engines extract and cite. Answers stay faithful to
// the article and to the behavioral-measurement framing.
const FAQ = [
  {
    q: "What should you measure in a new hire's first 90 days?",
    a: "Measure behavior, not comfort. The three signals that predict whether someone will deliver are initiative (do they find and own work, or wait to be handed it?), follow-through (do early commitments get honored fully and on time?), and learnability (do they absorb feedback and improve week over week?). These are visible in what a new hire does under real tasks — not in how well they settle in socially.",
  },
  {
    q: "Why are the first 90 days so important for a new hire?",
    a: "The interview is a hypothesis built from a few conversations. The first 90 days are where you find out if it was true. It is the earliest window in which you can see real behavior under real demands while the cost of a wrong hire is still low. Waiting until a formal review means you learn the same thing months later, after the person has taken on work only they now understand.",
  },
  {
    q: "How do you structure a 90-day onboarding plan?",
    a: "Structure it as a proving ground with escalating real tasks. Start with one clear-owner task, then add work that depends on other people, then deliver direct feedback and watch the next cycle, then introduce ambiguity where no recipe exists. At day 90, compare observed behavior to the hiring story and act on the gap either way. The point is to test behavior under rising pressure, not to fill time with orientation.",
  },
  {
    q: "What are the early warning signs a new hire will not work out?",
    a: "The clearest signs are behavioral: they wait to be told every step instead of finding work, early commitments slip quietly, feedback lands as a nod but nothing changes, and ambiguity produces a stall rather than a plan. One of these can be a bad week. A consistent pattern across the first weeks rarely reverses on its own — and it is far cheaper to address at week six than at month six.",
  },
  {
    q: "Should you act before the 90 days are up?",
    a: "Yes. The value of treating onboarding as a proving ground is that it lets you act early — to coach a promising person who is drifting, or to part ways before more work depends on someone who will not deliver. The 90-day mark is a decision point, not a grace period you must run out. If someone will not show up in the first 90 days, they will not show up when it counts.",
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

export default function First90DaysGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › First 90 days"
        eyebrow="Onboarding"
        title="Use the first 90 days to prove a new hire."
      >
        The interview was a hypothesis. Onboarding is where you find out if it was
        true. Treated deliberately, the first 90 days become the most honest
        performance signal you will ever get on a new hire.
      </PageHero>

      <ArticleMeta
        headline="Use the first 90 days to prove a new hire."
        description="The first 90 days are your real interview. Learn how to use onboarding as a proving ground to confirm — or disprove — whether a new hire will deliver."
        canonical="/guides/first-90-days"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "First 90 days", url: "/guides/first-90-days" },
        ]}
      />

      <Section tone="paper" className="!pb-0">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink p-8 text-paper on-dark sm:p-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Structure onboarding as a proving ground: set escalating real tasks,
              watch initiative, follow-through, and learnability, and confirm the
              hiring signal with behavior. If someone will not show up in the first
              90 days, they will not show up when it counts.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Onboarding is a proving ground, not a grace period
            </h2>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              The first 90 days are the window where a hiring decision stops being
              a guess and becomes evidence. A proving ground is simply onboarding
              run on purpose: instead of easing a new hire in and hoping the person
              you interviewed shows up, you hand over real work early and watch how
              they behave under it. The interview told you how well someone talks
              about the job. The first 90 days tell you whether they do it.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              What you are watching for is not output alone &mdash; a capable person
              can produce one good deliverable and still be a poor bet. You are
              watching for the three behaviors that predict whether someone will
              keep delivering: initiative, follow-through, and learnability. Do they
              find work and own it, or wait to be handed every step? Do early
              commitments get honored fully and on time? Do they absorb feedback and
              visibly improve, or nod and repeat the same mistake? These show up in
              weeks, not in a first-day impression.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              The reason to treat this window deliberately is cost. Every week a
              misfit stays, more work comes to depend on them and the price of
              acting rises. Run onboarding as a proving ground and you get the
              earliest honest read available &mdash; early enough to coach a
              promising person who is drifting, or to move on before the org has
              organized itself around someone who will not deliver. It is the same
              behavioral read you should have used to{" "}
              <Link href="/guides/hire-for-follow-through" className="font-semibold text-green underline-offset-2 hover:underline">
                hire for follow-through
              </Link>
              , now confirmed against real work.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              A 90-day plan that tests real behavior
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              The point of a plan is to raise the stakes on a schedule, so behavior
              is tested under rising pressure rather than left to chance. A simple
              cadence works:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {PLAN.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            What to watch in the first 90 days
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {WATCH.map((c) => (
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
              Make it a system, not a vibe
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {SYSTEM.map((c) => (
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

      {/* FAQ — GEO citation block */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              First 90 days: FAQ
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

      <CTASection title="Turn onboarding into proof.">
        Book a call to see how Prove runs during onboarding to validate new hires.
      </CTASection>

      <RelatedGuides current="/guides/first-90-days" />
      <Footer />
    </>
  );
}
