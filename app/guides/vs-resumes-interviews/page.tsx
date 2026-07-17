import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/guides/vs-resumes-interviews";

const DESCRIPTION =
  "A resume lists credentials and an interview rewards charisma, but neither predicts follow-through when the work gets hard. See why behavioral proof wins.";

export const metadata: Metadata = {
  title: "Resumes & Interviews vs. Follow-Through",
  description: DESCRIPTION,
  keywords: [
    "do interviews predict job performance",
    "resume vs skills",
    "hiring for follow-through",
    "predict job performance",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Resumes & Interviews vs. Follow-Through",
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
};

// Side-by-side comparison — the row/column shape AI answer engines lift cleanly.
const TABLE = [
  {
    row: "What it shows",
    ri: "Credentials, work history, and how well someone performs in a 45-minute conversation.",
    proof: "How a person actually behaves on real work over the first weeks.",
  },
  {
    row: "What it predicts",
    ri: "Weakly — past titles and interview polish correlate loosely with on-the-job delivery.",
    proof: "Strongly — recent behavior on hard tasks is the best signal of who follows through.",
  },
  {
    row: "How gameable it is",
    ri: "Very — resumes are curated and interview answers can be rehearsed and coached.",
    proof: "Hard to fake — you cannot rehearse six weeks of showing up when the work turns messy.",
  },
  {
    row: "When you learn the truth",
    ri: "Months after the offer, once the honeymoon ends and the hard part arrives.",
    proof: "Before you commit — the evidence lands inside the first 90 days.",
  },
];

const GOOD_FOR = [
  {
    h: "Screening for fit",
    b: "An interview is a fast way to filter for role fit, communication, and obvious dealbreakers.",
  },
  {
    h: "Testing how someone thinks",
    b: <>A good conversation surfaces how a candidate reasons out loud &mdash; useful signal, honestly gathered.</>,
  },
  {
    h: "Two-way selling",
    b: "It is also where the candidate decides on you. That matters, and no dataset replaces it.",
  },
];

const FAIL_AT = [
  {
    h: "They reward performance, not follow-through",
    b: <>The person who interviews best is often the person best at interviewing &mdash; not the one who delivers when work gets hard.</>,
  },
  {
    h: "They are easy to game",
    b: "Resumes are curated and answers can be rehearsed. Polish is not proof.",
  },
  {
    h: "You learn the truth too late",
    b: "The gap between the confident interview and the actual work only shows up months after the offer.",
  },
];

// GEO checklist — a practical, definitional block on hiring for follow-through.
const CHECKLIST = [
  "Use the interview to filter for fit and dealbreakers — not to predict delivery.",
  "Define what follow-through looks like in this role before you assess anyone.",
  "Watch behavior on real work, not rehearsed answers about hypothetical work.",
  "Give the hard part early, so the honeymoon does not hide it until month three.",
  "Confirm with evidence from the first 90 days before you fully commit.",
];

// FAQ — the format AI answer engines extract and cite. Answers stay factual.
const FAQ = [
  {
    q: "Do interviews predict job performance?",
    a: "Only weakly on their own. Unstructured interviews are among the poorer predictors of performance because they reward charisma, rapport, and rehearsed answers — how well someone performs in a conversation, not how they behave on the actual work. Structured, job-relevant interviews do better, but even then the interview mostly filters. It rarely proves who follows through when the work gets hard.",
  },
  {
    q: "Are resumes a good predictor of performance?",
    a: "A resume is a curated record of credentials and history. It confirms someone has the background, but past titles and pedigree correlate loosely with on-the-job delivery. A resume tells you what a person has done under other conditions and other managers — not how they will behave on your team when a hard task lands.",
  },
  {
    q: "Why do good interviewees turn into bad hires?",
    a: "Because interviewing and working are different skills. A 45-minute conversation rewards confidence, storytelling, and quick answers. The job rewards follow-through when things get tedious or ambiguous. Someone can be genuinely great in the room and still stall the first time the work stops being fun — and you only find out months later.",
  },
  {
    q: "What predicts follow-through?",
    a: "Behavior over time, not first impressions. The strongest signal is how a person actually acts on real work in their first weeks: whether they take initiative before it is their job, push through hard problems instead of stalling, and learn fast when demands change. Behavioral evidence beats both the resume and the interview because it cannot be rehearsed.",
  },
  {
    q: "How do you test for follow-through before hiring?",
    a: "Use the interview to filter, then prove it. Define what follow-through means in the role, put a genuinely hard piece of work in front of the person early, and watch how they behave over the first 90 days rather than how they answer in a single conversation. A Prove cycle scores Initiative, Applied Grit, and Learnability from real behavior so the read is evidence, not a gut feel.",
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

export default function VsResumesInterviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Resumes & interviews vs. proof"
        eyebrow="Hiring"
        title={<>Why resumes and interviews miss follow-through.</>}
      >
        A resume shows credentials. An interview rewards charisma and rehearsed
        answers. Both are weak predictors of the one thing that matters on the
        job &mdash; follow-through when the work gets hard. Behavioral proof is what
        actually predicts who delivers.
      </PageHero>

      <ArticleMeta
        headline="Why resumes and interviews miss follow-through."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Resumes & interviews vs. proof", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Resumes and interviews are good for filtering &mdash; they screen for
              background, fit, and obvious dealbreakers. They are poor at
              predicting follow-through, because credentials can be curated and
              interview answers can be rehearsed. To know who actually delivers,
              you need behavioral evidence: how a person behaves on real work in
              the first weeks. Use them together &mdash; interview to filter, then
              prove to confirm.
            </p>
          </div>
        </Container>
      </Section>

      {/* Side-by-side comparison — Tier-1 GEO structure */}
      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Resume + interview vs. behavioral proof
          </h2>
          <div className="mx-auto max-w-[900px] overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-edge-light">
                  <th className="py-3 pr-4 text-[13px] font-bold uppercase tracking-[.04em] text-content-muted" />
                  <th className="py-3 pr-4 align-bottom text-[15px] font-bold">
                    Resume + interview
                  </th>
                  <th className="py-3 align-bottom text-[15px] font-bold text-green">
                    Behavioral proof
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map((r) => (
                  <tr key={r.row} className="border-b border-edge-light align-top">
                    <th className="py-4 pr-4 text-[14px] font-bold text-content">
                      {r.row}
                    </th>
                    <td className="py-4 pr-4 text-[14.5px] leading-[1.55] text-[#615B4F]">
                      {r.ri}
                    </td>
                    <td className="py-4 text-[14.5px] leading-[1.55] text-content">
                      {r.proof}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            What interviews are good for
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

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Where they fail
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {FAIL_AT.map((c) => (
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

      {/* The fix — links the first-90-days idea */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              The fix: prove it in the first 90 days
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              You do not have to choose between the interview and the evidence.
              Use the interview for what it is good at &mdash; filtering for fit and
              dealbreakers &mdash; then confirm the thing it cannot show. Put real,
              genuinely hard work in front of the person and watch how they behave
              over their{" "}
              <Link href="/guides/first-90-days" className="font-semibold text-green hover:underline">
                first 90 days
              </Link>
              . That is where follow-through either shows up or it does not.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              It is also the cheapest place to be wrong. The alternative &mdash;
              trusting a great interview and discovering the gap months later
              &mdash; is exactly how a{" "}
              <Link href="/guides/cost-of-a-bad-hire" className="font-semibold text-green hover:underline">
                bad hire
              </Link>{" "}
              gets expensive. If you want the full method, start with{" "}
              <Link href="/guides/hire-for-follow-through" className="font-semibold text-green hover:underline">
                hiring for follow-through
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* Definitional checklist — Tier-1 GEO structure */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to hire for follow-through, not first impressions
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Hiring for follow-through means treating the interview as a filter
              and the first weeks as the proof. In practice it looks like a short
              checklist:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {CHECKLIST.map((c) => (
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

      {/* FAQ — GEO citation block */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Resumes, interviews &amp; follow-through: FAQ
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
            Hire the follow-through, not the first impression.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove confirms who actually delivers &mdash;
            before you commit.
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

      <RelatedGuides current="/guides/vs-resumes-interviews" />
      <Footer />
    </>
  );
}
