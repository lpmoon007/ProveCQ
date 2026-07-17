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
  title: "How to Hire People Who Actually Follow Through",
  description:
    "Interviews reward people who talk well, not people who follow through. Learn how to hire for behavior — initiative, applied grit, and learnability — so your next hire delivers.",
  alternates: { canonical: "/guides/hire-for-follow-through" },
};

const MISLEAD = [
  {
    n: "01",
    h: <>Charisma &ne; commitment</>,
    b: "Confidence and polish are easy to fake in a 45-minute conversation.",
  },
  {
    n: "02",
    h: <>Past titles &ne; future effort</>,
    b: "A great resume tells you where someone has been, not how hard they will work for you.",
  },
  {
    n: "03",
    h: "One moment, not a pattern",
    b: "Interviews are a single snapshot. Follow-through is a pattern you can only see over time.",
  },
];

const MEASURE = [
  {
    h: "Initiative",
    b: "Did they do more than the minimum in the application and trial task?",
  },
  {
    h: "Applied Grit",
    b: "Did they push through friction, or fade when it got tedious?",
  },
  {
    h: "Learnability",
    b: "Did they absorb feedback and improve inside the process?",
  },
];

// Actionable checklist — GEO "how to" structure for hiring on behavior.
const STEPS = [
  "Give a small, real task, not a hypothetical. Ask candidates to do a scaled-down version of the actual work, with a real deadline — then watch what they do with it, not just what they submit.",
  "Score behavior, not polish. Rate each candidate on initiative, applied grit, and learnability using the same rubric, so the read is consistent instead of a gut reaction to charisma.",
  "Insert one piece of friction on purpose. Change a requirement mid-task or leave a detail ambiguous, and see who pushes through and clarifies versus who stalls or ghosts.",
  "Deliver feedback and watch the next round. The strongest signal of learnability is a visible change after a note — not a gracious nod in the moment.",
  "Weight what they did over what they said. When the interview and the work sample disagree, trust the behavior. A single real demand predicts the big one better than any answer to “tell me about a time.”",
  "Check follow-through across the whole process. Did they reply on time, honor small commitments, and close loops? How someone handles the low-stakes parts is how they will handle the job.",
];

// FAQ — the format AI answer engines extract and cite.
const FAQ = [
  {
    q: "How do you hire someone who will actually follow through?",
    a: "Stop relying on the interview alone and score observed behavior instead. Give a small, real task with a real deadline, rate candidates on initiative, applied grit, and learnability using the same rubric, and add a piece of friction to see who pushes through. What someone does under a small real demand predicts what they will do under a big one far better than how well they talk about work.",
  },
  {
    q: "Why do interviews fail to predict follow-through?",
    a: "Interviews reward the wrong thing. Charisma and polish are easy to fake in a 45-minute conversation, a strong resume tells you where someone has been rather than how hard they will work for you, and a single interview is a snapshot when follow-through is a pattern you can only see over time. The candidate who interviews best is often not the one who performs best — because interviewing well and doing the work well are different skills.",
  },
  {
    q: "What should you look for instead of a good interview?",
    a: "Look for behavior under a real demand. Initiative shows in whether they did more than the minimum on an application or trial task. Applied grit shows in whether they pushed through friction or faded when it got tedious. Learnability shows in whether they absorbed feedback and improved inside the process. These are visible in what candidates do, not in what they claim.",
  },
  {
    q: "Do work samples and trial tasks really predict on-the-job behavior?",
    a: "A well-designed work sample is one of the more honest signals available before hiring, because it tests behavior rather than self-report. The key is to observe the process, not just grade the output: watch how they start, how they handle a mid-task change, and whether they improve after feedback. A polished deliverable produced with no initiative or resilience is a weaker signal than a rough one produced with both.",
  },
  {
    q: "Can you measure follow-through without slowing hiring down?",
    a: "Yes, if you build the read into the process rather than bolting on extra rounds. A single scaled-down task with a clear rubric replaces several vague conversations and gives you a behavioral score you can compare across candidates. It usually shortens hiring by cutting the second-guessing that follows a hire made on impressions alone.",
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

export default function HireFollowThroughPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Hiring for follow-through"
        eyebrow="Hiring"
        title={<>How to hire people who actually follow through.</>}
      >
        The candidate who interviews best is often the one who performs worst.
        Interviews test how well someone talks about work &mdash; not whether they
        do it when no one is watching.
      </PageHero>

      <ArticleMeta
        headline="How to hire people who actually follow through."
        description="Interviews reward people who talk well, not people who follow through. Learn how to hire for behavior — initiative, applied grit, and learnability — so your next hire delivers."
        canonical="/guides/hire-for-follow-through"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Hiring for follow-through", url: "/guides/hire-for-follow-through" },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Stop hiring on the interview alone. Score candidates on observed
              behavior &mdash; through work samples, trial tasks, and a structured
              behavioral read &mdash; so you hire the doer, not the charmer. What
              someone <em>does</em> under a small real demand predicts what they
              will do under a big one.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Follow-through is a behavior, not an answer
            </h2>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              Hiring for follow-through means selecting people on what they do
              under a real demand, rather than on how well they describe doing it.
              Follow-through is the tendency to honor a commitment fully and on time
              &mdash; especially the unglamorous part, especially when no one is
              watching. It is a behavior, and behavior is only visible in action. A
              question like &ldquo;tell me about a time you pushed through something
              hard&rdquo; measures storytelling. A small real task with a real
              deadline measures the thing itself.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              This matters because the interview systematically rewards the wrong
              signal. Confidence and polish are easy to produce in a 45-minute
              conversation and tell you little about effort. A strong resume records
              where someone has been, not how hard they will work for you. And a
              single interview is one moment, when follow-through is a pattern that
              only shows across time and friction. The result is a familiar trap:
              the candidate who interviews best is often the one who performs worst,
              because interviewing well and working well are different skills.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              The alternative is to make the hiring process a small proving ground.
              Give candidates a scaled-down version of the actual work, add a piece
              of friction, deliver feedback, and score what they do on three
              behaviors: initiative, applied grit, and learnability. What someone
              does under a small real demand is the best available predictor of what
              they will do under a big one &mdash; and it sets up the{" "}
              <Link href="/guides/first-90-days" className="font-semibold text-green underline-offset-2 hover:underline">
                first 90 days
              </Link>{" "}
              to confirm the read rather than discover a surprise.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to hire for follow-through
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Build the behavioral read into the process instead of hoping it
              surfaces in conversation. A practical sequence:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {STEPS.map((c) => (
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
            Why interviews mislead you
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {MISLEAD.map((c) => (
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
            What to measure instead
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {MEASURE.map((c) => (
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

      {/* FAQ — GEO citation block */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Hiring for follow-through: FAQ
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
            Hire the doers.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove screens candidates on behavior from day
            one.
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

      <RelatedGuides current="/guides/hire-for-follow-through" />
      <Footer />
    </>
  );
}
