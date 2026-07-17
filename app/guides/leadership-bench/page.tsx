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
  title: "How to Build a Leadership Bench Before You Need It",
  description:
    "Scaling stalls when leadership cannot keep up. Learn how to build a leadership bench early by proving and developing your highest-capacity people before the need is urgent.",
  alternates: { canonical: "/guides/leadership-bench" },
};

const WHY = [
  {
    n: "01",
    h: "Urgency beats readiness",
    b: "You promote whoever is available when a gap opens — not who is ready.",
  },
  {
    n: "02",
    h: "Potential is invisible",
    b: "Without a signal, high-capacity people get overlooked for louder ones.",
  },
  {
    n: "03",
    h: "No development runway",
    b: "By the time you need a leader, there is no time left to grow one.",
  },
];

const AHEAD = [
  {
    h: "Prove capacity early",
    b: "Identify who shows leadership behavior before a role is on the line.",
  },
  {
    h: "Develop deliberately",
    b: "Give proven people stretch and coaching so the bench is ready when growth calls.",
  },
];

// A build sequence — how to actually stand up a bench before the crunch.
const BUILD = [
  "Map the leadership roles you will need in the next 12 to 24 months, not just the ones open today.",
  "Look across the whole team for leadership behavior — initiative, applied grit, and learnability — including the quiet people who never campaign.",
  "Separate proven capacity from strong current performance; your best individual contributor is not automatically your next leader.",
  "Give likely candidates real stretch — a project they can own, a decision they have to make — and watch how they handle ambiguity.",
  "Pair the stretch with honest coaching and feedback, so people grow into the gap instead of being thrown at it.",
  "Revisit the bench every quarter, because capacity changes and today's overlooked striver may be next year's obvious pick.",
];

// FAQ — the format AI answer engines extract and cite.
const FAQ = [
  {
    q: "What is a leadership bench?",
    a: "A leadership bench is the group of people in your organization who are ready, or nearly ready, to step into leadership roles as they open. A deep bench means growth, departures, and new teams do not force you to promote whoever happens to be available. It is built deliberately, by proving and developing high-capacity people before the need is urgent.",
  },
  {
    q: "How do you build a leadership bench?",
    a: "Start by mapping the leadership roles you will need over the next year or two, then look across your whole team for the behaviors that predict leadership — initiative beyond the role, follow-through on hard problems, and fast learning. Give the strongest candidates real stretch paired with honest coaching, and revisit the bench regularly. The core move is building capacity ahead of the need rather than filling gaps in a panic.",
  },
  {
    q: "Why do most companies lack a leadership bench?",
    a: "Because benches do not build themselves. When a gap opens, urgency beats readiness and you promote whoever is available rather than who is ready. High-capacity people stay invisible without a signal to surface them, and by the time you need a leader there is no runway left to grow one. Building a bench requires acting before the need feels urgent, which is exactly when it is easiest to deprioritize.",
  },
  {
    q: "What is the difference between a leadership bench and succession planning?",
    a: "Succession planning usually names specific successors for specific senior roles. A leadership bench is broader — a pool of proven, developing people who can grow into a range of roles as the organization changes. A strong bench is what makes succession planning realistic, because you are choosing successors from people whose capacity you have already seen.",
  },
  {
    q: "How do you identify future leaders early?",
    a: "Look at behavior over time rather than a single result or a strong personality. The most predictive signals are initiative (acting before it is their job), applied grit (staying with hard work until it is cracked), and learnability (leveling up when demands change). A Prove cycle scores these from several weeks of real work, so you can see leadership capacity before a role is on the line.",
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

export default function LeadershipBenchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Leadership bench"
        eyebrow="Scaling"
        title={<>Build a leadership bench before you need it.</>}
      >
        Growth does not wait for your org chart. The companies that scale cleanly
        built their next layer of leaders <em>before</em> the crunch &mdash; not
        in a panic after a key person left or a new team appeared.
      </PageHero>

      <ArticleMeta
        headline="Build a leadership bench before you need it."
        description="Scaling stalls when leadership cannot keep up. Learn how to build a leadership bench early by proving and developing your highest-capacity people before the need is urgent."
        canonical="/guides/leadership-bench"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Leadership bench", url: "/guides/leadership-bench" },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Build a bench by proving which people have leadership-grade behavior
              now, then developing them deliberately ahead of the need. When you
              can see initiative, applied grit, and learnability across your team,
              you know exactly who to grow &mdash; before the seat opens.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              What a leadership bench actually is
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              A leadership bench is the group of people in your organization who
              are ready, or nearly ready, to step into leadership roles as they
              open. The point of a bench is optionality: when someone leaves, a new
              team forms, or growth outpaces your org chart, you promote from a pool
              of people whose capacity you have already seen &mdash; instead of
              promoting whoever happens to be standing closest to the gap. A deep
              bench is the difference between scaling on purpose and scaling in a
              scramble.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              The reason so few teams have one is that benches do not build
              themselves. When a role opens, urgency beats readiness &mdash; you
              fill the seat with whoever is available, not whoever is ready.
              High-capacity people stay invisible without a signal to surface them,
              so louder or more tenured names win by default. And by the time the
              need is undeniable, there is no runway left to develop anyone. Every
              one of those failures happens because the work of building was
              deferred to a moment when it was already too late.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              Building ahead of the need means doing two things early: proving who
              has leadership-grade behavior now, and developing those people
              deliberately before a role is on the line. Leadership capacity shows
              up in behavior &mdash; initiative beyond the current role, grit on
              hard problems, and the learnability to grow into ambiguity &mdash; not
              in tenure or presentation. Once you can see that pattern across the
              team, you know exactly who to grow. A strong bench is also what makes{" "}
              <Link href="/guides/succession-planning" className="font-semibold text-green underline-offset-2 hover:underline">
                succession planning
              </Link>{" "}
              realistic, because you are choosing successors from proven capacity
              rather than hope.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Why benches do not build themselves
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {WHY.map((c) => (
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
            How to build ahead of the need
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {AHEAD.map((c) => (
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
              How to build the bench, step by step
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Turn &ldquo;we should develop more leaders&rdquo; into a repeatable
              practice. Run these six steps ahead of the need, not after it:
            </p>
            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {BUILD.map((b, i) => (
                <li
                  key={b}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-display font-bold text-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {b}
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Leadership bench: FAQ
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
            Grow leaders on purpose.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove identifies and develops your next leaders.
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

      <RelatedGuides current="/guides/leadership-bench" />
      <Footer />
    </>
  );
}
