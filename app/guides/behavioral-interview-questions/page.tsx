import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArticleMeta } from "@/components/ArticleMeta";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

const CANONICAL = "/guides/behavioral-interview-questions";

const DESCRIPTION =
  "17 free behavioral interview questions that predict follow-through — grouped by Initiative, Applied Grit, and Learnability, with the strong signals and red flags to listen for in each answer.";

export const metadata: Metadata = {
  title: "Behavioral Interview Questions That Predict Follow-Through",
  description: DESCRIPTION,
  keywords: [
    "behavioral interview questions",
    "interview questions for hiring",
    "behavioral interview questions and answers",
    "hiring for follow-through",
    "interview questions to test initiative",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Behavioral Interview Questions That Predict Follow-Through",
    description:
      "A free, ready-to-use set of 17 behavioral interview questions — with the signals and red flags to listen for.",
    url: CANONICAL,
    type: "article",
  },
};

type Q = { q: string; strong: string; words: string; red: string };
type Group = { trait: string; facet?: string; tagline: string; questions: Q[] };

const GROUPS: Group[] = [
  {
    trait: "Initiative",
    tagline: "Do they act without being told?",
    questions: [
      {
        q: "Describe a time you noticed something important that wasn't being addressed at work. What did you do, and what was the outcome?",
        strong: "Acted without prompting, spotted the gap and moved, and the action clearly changed the outcome.",
        words: "“I noticed,” “I stepped in,” “took action,” “gap,” “opportunity”",
        red: "“I waited.” “It wasn't my responsibility.” “Someone else usually handles that.”",
      },
      {
        q: "When did you proactively take on responsibility outside your job description? What motivated you?",
        strong: "Genuine eagerness to contribute, self-driven motivation, and real impact from the extra work.",
        words: "“volunteered,” “curious,” “wanted to grow,” “proactive”",
        red: "“I had to,” “was asked,” “required” — no personal motivation.",
      },
      {
        q: "Tell me about a recent time you took action without waiting for direction. What prompted your decision?",
        strong: "Quick decision, read the urgency, and an outcome tied directly to their move.",
        words: "“didn't wait,” “recognized urgency,” “stepped up”",
        red: "“Didn't know what to do,” “hesitated,” overly reliant on approval.",
      },
      {
        q: "Have you ever pursued an idea or project despite not having clear approval? How did you move forward?",
        strong: "A calculated risk, brought stakeholders along, and persisted through uncertainty.",
        words: "“calculated risk,” “advocated,” “piloted,” “experimented”",
        red: "“Never done that,” “wouldn't without explicit permission” — passive or overly risk-averse.",
      },
    ],
  },
  {
    trait: "Applied Grit",
    facet: "Ownership",
    tagline: "Do they own outcomes — good and bad?",
    questions: [
      {
        q: "Tell me about a time something you were responsible for went wrong. How did you respond and correct it?",
        strong: "Owns it fast, accountable without defensiveness, and drove the fix.",
        words: "“I own that,” “my responsibility,” “took immediate action,” “corrected”",
        red: "Blaming others, defensiveness, excuses, avoidance.",
      },
      {
        q: "When did you recognize you'd made a mistake at work? How did you handle admitting it, and what did you do next?",
        strong: "Humility and transparency, told the people affected, and learned from it.",
        words: "“apologized,” “transparent,” “reflected,” “improved”",
        red: "Hesitates to admit mistakes, defensive, rationalizes.",
      },
      {
        q: "Describe a time you took responsibility for something that wasn't explicitly your fault. Why did you own it?",
        strong: "Sees broader accountability, high personal standards, and it lifted team trust.",
        words: "“felt responsible,” “team impact,” “stepped in,” “set the example”",
        red: "“Not my problem,” rigid boundaries, unwilling to help teammates.",
      },
    ],
  },
  {
    trait: "Applied Grit",
    facet: "Resilience",
    tagline: "Do they hold up under pressure?",
    questions: [
      {
        q: "Describe a particularly challenging professional setback. How did you manage your emotions and stay productive?",
        strong: "Emotional self-awareness, a real coping strategy, and kept delivering through it.",
        words: "“managed the stress,” “stayed focused,” “kept perspective”",
        red: "Avoids emotion entirely, or big reactions with no recovery.",
      },
      {
        q: "When did you face ongoing obstacles on a project? How did you sustain your energy and commitment?",
        strong: "Persistent effort over time, strategies to stay motivated, drive without quick wins.",
        words: "“persevered,” “kept going,” “stayed committed”",
        red: "Gives up quickly, loses interest when challenged, needs an external push.",
      },
      {
        q: "When was feedback or criticism especially hard to hear? How did you handle it, and what changed after?",
        strong: "Sat with the tough feedback, no defensiveness, and a concrete behavior change.",
        words: "“reflected,” “took it in,” “changed my approach”",
        red: "Defensive, “it wasn't fair,” and nothing actually changed.",
      },
    ],
  },
  {
    trait: "Applied Grit",
    facet: "Long-game drive",
    tagline: "Do they persist when the payoff is far off?",
    questions: [
      {
        q: "Tell me about a long-term professional goal you set. What did you do to stay disciplined over time?",
        strong: "Clear vision and plan, self-driven habits, follow-through when motivation dipped.",
        words: "“disciplined,” “long-term,” “habits,” “routine”",
        red: "No concrete strategy, vague answers, easily distracted from goals.",
      },
      {
        q: "When did you persist though immediate results weren't visible? How did you know it was worth continuing?",
        strong: "Patience without a quick payoff, a sense of the bigger purpose, intrinsic motivation.",
        words: "“trusted the process,” “invested,” “persistent”",
        red: "Constantly changes direction, impatient, dependent on immediate results.",
      },
      {
        q: "Describe an achievement that took a long time. What kept you going when progress felt slow or uncertain?",
        strong: "Sustained effort over months or years, specific perseverance strategies, a clear objective.",
        words: "“kept going,” “determined,” “purpose”",
        red: "Frustration, lack of perseverance, frequent quitting of hard tasks.",
      },
    ],
  },
  {
    trait: "Learnability",
    tagline: "Do they adapt and grow?",
    questions: [
      {
        q: "Tell me about a time you had to quickly acquire new knowledge or skills. What steps did you take?",
        strong: "A structured approach, sought out resources or mentors, and measured their own progress.",
        words: "“taught myself,” “researched,” “tracked progress,” “adapted”",
        red: "“Waited until someone trained me,” or “just figured it out” with no specifics.",
      },
      {
        q: "When did critical feedback require a significant change in your approach? How did you incorporate it?",
        strong: "Open, not defensive, with concrete changes and visible growth afterward.",
        words: "“reflected,” “applied it,” “shifted my approach”",
        red: "“They misunderstood,” superficial change, resistance to feedback.",
      },
      {
        q: "Describe a time you changed your mind or approach significantly based on new information. What convinced you?",
        strong: "Flexible thinking, clear reasoning, and a pivot without ego getting in the way.",
        words: "“new evidence,” “re-evaluated,” “pivoted”",
        red: "Rigidity, ego-driven reasons, a weak explanation of what triggered the change.",
      },
      {
        q: "What's something you've recently learned on your own initiative? How did you go about it?",
        strong: "Curiosity-driven self-learning, a structured approach, and they actually applied it.",
        words: "“self-study,” “curious,” “deep dive,” “experimented”",
        red: "Nothing recent, no self-directed learning, can't name specifics.",
      },
    ],
  },
];

const RUN_STEPS = [
  "Ask for a specific past example — not a hypothetical. “Tell me about a time…” beats “What would you do if…” every time.",
  "Probe once: “What was the outcome?” and “What would you do differently?” The follow-up separates a real story from a rehearsed one.",
  "Score right after, before impressions fade — rate each trait 1–5 from the evidence, and note the exact example.",
  "Check the score against your gut. Where they disagree, that gap is your signal to dig deeper in the next round.",
];

const FAQ = [
  {
    q: "What are behavioral interview questions?",
    a: "Behavioral interview questions ask a candidate about specific past situations — “tell me about a time you…” — rather than hypotheticals. The logic is simple: how someone actually behaved under real conditions predicts future behavior far better than what they say they would do.",
  },
  {
    q: "Do behavioral interview questions actually predict job performance?",
    a: "Better than unstructured interviews or gut feel, yes — they surface what a person did when it counted, which is harder to fake than a polished answer. But even a great 45-minute interview only samples behavior. The strongest read comes from watching behavior over time, under real pressure.",
  },
  {
    q: "How do you score a behavioral interview?",
    a: "Rate each trait — Initiative, Applied Grit, and Learnability — 1 to 5 from the examples the candidate gives, and write down the specific evidence. Then check whether your scores match your overall impression. Where they diverge, that's exactly where to probe in the next round.",
  },
  {
    q: "What are red flags in a behavioral interview?",
    a: "Answers that stay hypothetical, deflect blame, wait to be told, or can't produce a specific example. Rehearsed charm with no concrete outcome is what we call commitment theater — it interviews well and disappears when the work gets hard.",
  },
  {
    q: "Can you rely on a behavioral interview alone to hire?",
    a: "No. Use these questions alongside references, a real work sample, and — ideally — observed behavior in the first weeks. Treat CQ as a signal that prompts better questions and surfaces gaps, not a standalone hiring gate or a legally validated assessment.",
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

export default function BehavioralInterviewQuestionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Behavioral interview questions"
        eyebrow="Free resource · Hiring"
        title={<>Behavioral interview questions that predict follow-through.</>}
      >
        A great interview rewards a great talker. These 17 questions reward the
        opposite &mdash; evidence of what a candidate actually did. They probe the
        three behaviors that predict who delivers: Initiative, Applied Grit, and
        Learnability. Free to use, no sign-up.
      </PageHero>

      <ArticleMeta
        headline="Behavioral interview questions that predict follow-through."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Behavioral interview questions", url: CANONICAL },
        ]}
      />

      {/* How to run them */}
      <Section tone="paper">
        <Container className="max-w-[820px]">
          <h2 className="mb-4 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
            How to run them
          </h2>
          <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
            Behavioral questions only work if you push past the first answer.
            Four rules make the difference between a real read and a rehearsed
            one:
          </p>
          <ol className="m-0 flex list-none flex-col gap-3 p-0">
            {RUN_STEPS.map((s, i) => (
              <li
                key={i}
                className="flex gap-3.5 rounded-[14px] border border-edge-light bg-white px-5 py-4"
              >
                <span className="font-display text-[18px] font-bold text-green">
                  {i + 1}
                </span>
                <span className="text-[15.5px] leading-[1.55] text-content-muted">
                  {s}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Responsible use */}
      <Section tone="paper" className="!pt-0">
        <Container className="max-w-[820px]">
          <div className="rounded-[16px] border-l-4 border-green bg-paper-2 px-6 py-5">
            <div className="eyebrow mb-2 text-green">Use it as a signal, not a verdict</div>
            <p className="m-0 text-[15px] leading-[1.6] text-content-muted">
              These questions are here to help you ask better questions and spot
              gaps between polish and performance &mdash; not to auto-eliminate
              anyone. Pair them with references, a work sample, and structured
              scoring. CQ is directional; it is not a legally validated assessment
              or a standalone hiring gate.{" "}
              <Link href="/ethics" className="font-semibold text-green">
                What CQ is &amp; isn&rsquo;t &rarr;
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* The questions */}
      {GROUPS.map((g, gi) => (
        <Section
          key={`${g.trait}-${g.facet ?? ""}`}
          tone={gi % 2 === 0 ? "paper2" : "paper"}
        >
          <Container className="max-w-[900px]">
            <div className="mb-6">
              <Eyebrow>
                {g.facet ? `${g.trait} · ${g.facet}` : g.trait}
              </Eyebrow>
              <h2 className="mt-3 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
                {g.tagline}
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {g.questions.map((item, qi) => (
                <div
                  key={qi}
                  className="rounded-[18px] border border-edge-light bg-white p-6 sm:p-7"
                >
                  <p className="m-0 mb-4 text-[17px] font-semibold leading-[1.5] text-content">
                    &ldquo;{item.q}&rdquo;
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-[12px] bg-[#E7F3EC] px-4 py-3">
                      <div className="mb-1 text-[12px] font-bold uppercase tracking-[.06em] text-green">
                        Strong signal
                      </div>
                      <p className="m-0 text-[14px] leading-[1.5] text-[#2A4A38]">
                        {item.strong}
                      </p>
                    </div>
                    <div className="rounded-[12px] bg-[#F7E4DE] px-4 py-3">
                      <div className="mb-1 text-[12px] font-bold uppercase tracking-[.06em] text-signal-red">
                        Red flag (low CQ)
                      </div>
                      <p className="m-0 text-[14px] leading-[1.5] text-[#7A4536]">
                        {item.red}
                      </p>
                    </div>
                  </div>
                  <p className="m-0 mt-3 text-[13px] leading-[1.5] text-content-faint">
                    <span className="font-semibold text-content-muted">
                      Listen for:
                    </span>{" "}
                    {item.words}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      {/* FAQ */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Behavioral interview questions: FAQ
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

      {/* CTA — ungated; the call is the offer, not a wall */}
      <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
        <div className="mx-auto max-w-[760px]">
          <h2 className="m-0 mb-4 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[38px]">
            Run these free. Then close the gap the interview can&rsquo;t.
          </h2>
          <p className="m-0 mb-8 text-[18px] leading-[1.6] text-[#E4F5EB]">
            A 45-minute interview only samples behavior. A Prove cycle scores
            Initiative, Applied Grit, and Learnability from six weeks of it &mdash;
            so you hire on proof, not a good first impression.
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

      <RelatedGuides current="/guides/behavioral-interview-questions" />
      <Footer />
    </>
  );
}
