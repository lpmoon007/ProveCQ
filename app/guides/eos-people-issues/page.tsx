import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/guides/eos-people-issues";

export const metadata: Metadata = {
  title: "EOS People Issues: Solving Them in IDS for Good",
  description:
    "People issues keep re-listing on your Level 10 because IDS runs on opinion not data. See how behavioral capacity evidence turns a circular Discuss into a Solve.",
  keywords: [
    "EOS people issues",
    "IDS people issues",
    "Level 10 people problems",
    "people issues in EOS",
    "solving people issues EOS",
    "IDS identify discuss solve",
    "Level 10 meeting issues list",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "EOS People Issues: Solving Them in IDS for Good",
    description:
      "Why the same people issue keeps getting re-listed on your Level 10 Issues List — and how behavioral capacity data turns a circular Discuss into a real Solve.",
    url: CANONICAL,
    type: "article",
  },
};

const WHY_RELIST = [
  {
    h: "It gets framed as a clash",
    b: "The issue lands as a personality problem — who annoys whom — instead of a capacity gap you can actually name and close.",
  },
  {
    h: "Discuss becomes dueling opinions",
    b: "“I think Sarah’s stretched too thin.” “No, she’s fine.” With no data, the loudest voice wins and nothing is settled.",
  },
  {
    h: "The Solve is unverifiable",
    b: "The team agrees to a vague commitment nobody can check next week — so the same issue is back on the list.",
  },
];

const IDS_STEPS = [
  {
    n: "I",
    h: "Identify",
    b: "Name the specific capacity gap — initiative, follow-through, or learnability — not “attitude.” Behavioral data makes the problem concrete instead of a label.",
  },
  {
    n: "D",
    h: "Discuss",
    b: "Compare observed behavior over weeks, not competing anecdotes. Evidence shortens the argument because there is less to argue about.",
  },
  {
    n: "S",
    h: "Solve",
    b: "Set a measurable behavioral change with one owner, and actually re-check it at the next Level 10 instead of re-litigating the whole thing.",
  },
];

const CHECKLIST = [
  "Separate a capacity gap from a values or fit problem — they need different solves.",
  "State the issue as an observable behavior, not a label like “not a team player.”",
  "Bring data, not the loudest anecdote, to the Discuss step.",
  "Assign one owner and a measurable follow-through — not a shared, vague commitment.",
  "Re-check it at the next Level 10 instead of re-litigating it from scratch.",
];

const FAQ = [
  {
    q: "What counts as a people issue in EOS?",
    a: "In EOS, a people issue is any Issues List item about a person rather than a process or a number — the wrong person in a seat, someone who isn't Getting it, Wanting it, or has the Capacity for the role, or a recurring performance or behavior gap. It gets worked in the Level 10 meeting with IDS: Identify, Discuss, Solve.",
  },
  {
    q: "Why do the same people issues keep coming back?",
    a: "Because the Discuss step runs on opinion, not evidence. The team argues who thinks what about a person, no one can settle it, and the Solve ends up being a vague commitment nobody can verify. Next week the issue is back on the Issues List because it was never actually solved — only re-described.",
  },
  {
    q: "How does IDS work for people issues?",
    a: "IDS stands for Identify, Discuss, Solve. Identify names the real problem, Discuss surfaces everything relevant, and Solve sets the action. For people issues, each step gets sharper with behavioral data: Identify names a specific capacity gap instead of “attitude,” Discuss compares observed behavior instead of anecdotes, and Solve sets a measurable behavioral change you can check.",
  },
  {
    q: "How do you solve a people issue for good?",
    a: "Separate a capacity gap from a values or fit problem, state the issue as an observable behavior rather than a label, bring data instead of the loudest anecdote, assign one owner and a measurable follow-through, and re-check it at the next Level 10 rather than re-litigating it. A solve that can't be verified next week isn't a solve.",
  },
  {
    q: "Can you measure the capacity behind a people issue?",
    a: "Yes. A Prove cycle scores Initiative, Applied Grit, and Learnability from roughly six weeks of real behavior, so the capacity question in a people issue becomes evidence instead of a hunch. That gives your Level 10 a shared read of what a person is actually doing over time — which is exactly what a circular Discuss is missing.",
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

export default function EosPeopleIssuesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides &rsaquo; EOS people issues"
        eyebrow="For EOS"
        title={<>Solving the people issue your Level 10 keeps re-listing.</>}
      >
        Every leadership team has that one people issue &mdash; the one that gets
        Identified, Discussed, and never really Solved. So it&rsquo;s back on the
        Issues List next week, and the week after that. The problem usually
        isn&rsquo;t the person. It&rsquo;s that IDS is running on opinion instead
        of evidence.
      </PageHero>

      <ArticleMeta
        headline="Solving the people issue your Level 10 keeps re-listing."
        description="People issues keep re-listing on your Level 10 because IDS runs on opinion not data. See how behavioral capacity evidence turns a circular Discuss into a Solve."
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "EOS people issues", url: "/guides/eos-people-issues" },
        ]}
      />

      {/* Short answer */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              People issues stall in IDS because the Discuss step runs on opinion,
              not evidence. When you can see a person&rsquo;s actual capacity
              behavior &mdash; initiative, follow-through, learnability &mdash;
              Identify gets specific, Discuss gets shorter, and Solve actually
              sticks.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why the same people issue keeps re-listing */}
      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Why the same people issue keeps re-listing
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {WHY_RELIST.map((c) => (
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

      {/* IDS, with evidence */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[860px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              IDS, with evidence
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              IDS &mdash; Identify, Discuss, Solve &mdash; is the right tool. It
              just struggles on people issues when every step runs on how the
              room feels rather than what a person is actually doing. Here is what
              behavioral capacity data adds to each step.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {IDS_STEPS.map((c) => (
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
            <p className="m-0 mt-6 text-[15.5px] leading-[1.65] text-content-muted">
              This is the same distinction the{" "}
              <Link href="/for-eos/gwc" className="font-semibold text-green underline decoration-green/30 underline-offset-2 hover:decoration-green">
                Capacity letter in GWC
              </Link>{" "}
              runs into: the moment the read stops being a hunch and starts being
              behavior over time, the argument gets a lot shorter.
            </p>
          </div>
        </Container>
      </Section>

      {/* How to actually solve a people issue — checklist */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to actually solve a people issue
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              A people issue is solved when it stays off the Issues List, not when
              the room stops talking about it. Work it as a checklist:
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

      {/* FAQ */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              EOS people issues: FAQ
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
            <p className="m-0 mt-6 text-[15.5px] leading-[1.65] text-content-muted">
              Want the mechanics? See{" "}
              <Link href="/guides/measure-capacity-in-eos" className="font-semibold text-green underline decoration-green/30 underline-offset-2 hover:decoration-green">
                how to measure capacity in EOS
              </Link>
              , or start from the{" "}
              <Link href="/for-eos" className="font-semibold text-green underline decoration-green/30 underline-offset-2 hover:decoration-green">
                For EOS hub
              </Link>{" "}
              to see where Prove fits alongside your toolset.
            </p>
          </div>
        </Container>
      </Section>

      {/* EOS disclaimer */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <p className="mx-auto max-w-[820px] text-[12.5px] leading-[1.6] text-[#8A8474]">
            Prove works <strong>alongside</strong> EOS&reg; and is independent of,
            and not affiliated with or endorsed by, EOS Worldwide. EOS&reg;, Level
            10&trade;, IDS&trade;, GWC&trade; and People Analyzer&trade; are
            trademarks of their respective owners. Prove complements the EOS
            toolset &mdash; it does not replace it.
          </p>
        </Container>
      </Section>

      {/* Closing CTA */}
      <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
        <div className="mx-auto max-w-[720px]">
          <h2 className="m-0 mb-4 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[38px]">
            Take the people issue off the list for good.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove gives your Level 10 the capacity
            evidence a real Solve needs.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[16px]">
              Book a call
            </ButtonLink>
            <Link
              href="/for-eos"
              className="inline-flex items-center justify-center rounded-[12px] border-[1.5px] border-[#7BCB9E] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              Explore Prove for EOS &rarr;
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuides current="/guides/eos-people-issues" />
      <Footer />
    </>
  );
}
