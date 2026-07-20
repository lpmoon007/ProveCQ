import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArticleMeta } from "@/components/ArticleMeta";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

const CANONICAL = "/guides/founder-people-decisions";

const DESCRIPTION =
  "The five people decisions that keep founders up at night — promoting the wrong person, not knowing who's coasting, coaching blind, being the backstop, and betting on people you're unsure of. What's really going on in each, and how to make the call on proof instead of a gut feel.";

export const metadata: Metadata = {
  title: "The 5 People Decisions That Keep Founders Up at Night",
  description: DESCRIPTION,
  keywords: [
    "people problems in business",
    "founder people decisions",
    "who to promote",
    "confidence in people decisions",
    "small business leadership decisions",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The 5 People Decisions That Keep Founders Up at Night",
    description:
      "You've got smart, likable people — and you still don't know who you can trust when it gets hard. Here's what's really going on.",
    url: CANONICAL,
    type: "article",
  },
};

type Pain = {
  n: string;
  title: string;
  quote: string;
  happening: string;
  helps: React.ReactNode;
};

const PAINS: Pain[] = [
  {
    n: "01",
    title: "You promoted the wrong person",
    quote:
      "I gave them a shot. They looked ready. But now I'm carrying their weight — and losing my best people because of it.",
    happening:
      "You're re-doing work you delegated and smoothing over friction the promotion created. Worse, the team is watching: “if that's what leadership looks like here, I'm out.” The next promotion gets second-guessed by everyone, including you.",
    helps: (
      <>
        You needed to see the real readiness <em>before</em> the title changed —
        the behaviors the new role demands, proven in lower-stakes work first.
        Start with{" "}
        <Link href="/guides/who-to-promote" className="font-semibold text-green">
          how to know who to promote
        </Link>{" "}
        and the difference between{" "}
        <Link href="/guides/high-performer-vs-high-potential" className="font-semibold text-green">
          a high performer, a high potential, and a high-commitment player
        </Link>
        .
      </>
    ),
  },
  {
    n: "02",
    title: "You can't tell who's coasting and who's compounding",
    quote:
      "Everyone seems busy. But I don't know who's actually growing — and who's just staying out of trouble.",
    happening:
      "High performers stall quietly. Steady-but-static players blend in. The drift stays invisible until it surfaces as a resignation or a missed quarter — and meanwhile your development budget gets spread evenly across people who aren't all moving.",
    helps: (
      <>
        The fix isn&rsquo;t a harder engagement survey; it&rsquo;s a behavioral
        read that makes growth visible &mdash; who&rsquo;s compounding, who&rsquo;s
        coasting. See{" "}
        <Link href="/guides/its-the-metric" className="font-semibold text-green">
          why the usual metric misses it
        </Link>{" "}
        and{" "}
        <Link href="/guides/measure-commitment" className="font-semibold text-green">
          how to measure commitment instead
        </Link>
        .
      </>
    ),
  },
  {
    n: "03",
    title: "Coaching feels like a shot in the dark",
    quote:
      "I'm coaching hard. But I'm not sure it's helping — or if I'm even coaching the right people.",
    happening:
      "You fund development and spend your own 1:1 hours without seeing measurable change. And because there's no transparency about who gets the investment or why, the rest of the team reads it as favoritism.",
    helps: (
      <>
        Coaching pays when it&rsquo;s targeted &mdash; aimed at the people whose
        behavior says they&rsquo;ll use it. Find the ones you&rsquo;re about to
        overlook with the free{" "}
        <Link href="/free-tools/hidden-gem-identifier" className="font-semibold text-green">
          Hidden Gem Identifier
        </Link>
        , then read{" "}
        <Link href="/guides/retain-top-performers" className="font-semibold text-green">
          how to keep your best people
        </Link>
        .
      </>
    ),
  },
  {
    n: "04",
    title: "You don't have the energy to manage all this anymore",
    quote:
      "Every leadership problem lands on my desk. I'm still the backstop. I'm burned out from overfunctioning.",
    happening:
      "Even with “leaders” in place, execution still depends on your effort, presence, or rework. Take the pressure off and meetings stall, priorities slip, culture drifts — because you're still the only real engine of accountability.",
    helps: (
      <>
        The way out isn&rsquo;t working harder at letting go &mdash; it&rsquo;s
        handing outcomes to people whose follow-through you&rsquo;ve actually
        seen. That&rsquo;s how you{" "}
        <Link href="/founder-bottleneck" className="font-semibold text-green">
          stop being the bottleneck
        </Link>{" "}
        and{" "}
        <Link href="/guides/how-to-delegate" className="font-semibold text-green">
          delegate with confidence
        </Link>
        .
      </>
    ),
  },
  {
    n: "05",
    title: "You're not confident in your people bets",
    quote:
      "I'm flying blind. I've got smart, likable people — but I don't know who I can actually trust when things get hard.",
    happening:
      "You're unsure whether to promote, exit, or invest in a key player — and that hesitation bleeds into the org's performance. A wrong call costs money, morale, and your own credibility. But doing nothing is a slow failure too.",
    helps: (
      <>
        What resolves it is proof, not potential &mdash; behavior observed under
        real pressure, so the call is one you can defend. See{" "}
        <Link href="/guides/people-decisions-by-the-numbers" className="font-semibold text-green">
          what the research says these decisions cost
        </Link>{" "}
        and{" "}
        <Link href="/how-it-works" className="font-semibold text-green">
          how Prove measures it
        </Link>
        .
      </>
    ),
  },
];

const ZONES = [
  {
    zone: "Green",
    dot: "🟢",
    line: "Ready for more scope. Promote or stretch — with support so they don't burn out.",
  },
  {
    zone: "Yellow",
    dot: "🟡",
    line: "Growth potential. Coach with role clarity before a leadership move.",
  },
  {
    zone: "Red",
    dot: "🔴",
    line: "Needs structure first. Thrives in clear lanes; ambiguity-heavy roles would strain them.",
  },
];

const FAQ = [
  {
    q: "Why are people decisions so much harder for founders?",
    a: "Because they're non-delegable and consequence-loaded, and they're usually made under pressure without full data. Promotions, retention calls, and manager selection can't be outsourced the way a marketing task can — they route back to the founder, who often has smart, likable people but no reliable read on who will follow through when the work gets hard.",
  },
  {
    q: "What do founders actually want from a people-decision tool?",
    a: "Confidence, not more data. Founders don't want another dashboard or training library — they want a trustworthy answer to “should I promote them or not?” and “who can I actually bet on?” The most valuable system is one that surfaces behavior under pressure and preserves the founder's time instead of demanding more of it.",
  },
  {
    q: "Isn't this just another personality test?",
    a: "No. A personality test asks people to describe themselves; it's a paper exam. What predicts who delivers is observed behavior over time — initiative when no one is watching, follow-through when it's hard, and learning from being wrong. That's what the Commitment Quotient measures, and it's why the read holds up when the stakes are real.",
  },
  {
    q: "Can a low score be used to fire someone?",
    a: "No — and it shouldn't be. A CQ read is a behavioral snapshot for development and investment decisions, not a performance review or a termination tool. Low CQ does not mean low performance or low worth; many excellent people do their best work in clear, well-structured roles. It's a fit map, not a ranking.",
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

export default function FounderPeopleDecisionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › The people decisions that keep founders up"
        eyebrow="For founders"
        title={<>The five people decisions that keep founders up at night.</>}
      >
        You&rsquo;ve got smart, likable people &mdash; and you still lie awake
        unsure who you can trust when it gets hard. You&rsquo;re not imagining it,
        and you&rsquo;re not bad at this. You&rsquo;re making the highest-stakes
        calls in the company on the thinnest evidence. Here&rsquo;s what&rsquo;s
        really going on in each &mdash; and what actually resolves it.
      </PageHero>

      <ArticleMeta
        headline="The five people decisions that keep founders up at night."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "The people decisions that keep founders up", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container className="max-w-[760px]">
          <div className="rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The thread through all five</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              None of these is a people problem. Each one is what happens when a
              high-stakes bet gets placed on the wrong evidence &mdash; past
              performance, a good interview, a gut feel. The fix isn&rsquo;t
              sharper instincts or more effort. It&rsquo;s a{" "}
              <span className="text-green-soft">
                signal you can actually see: how someone behaves under pressure
              </span>
              , before the decision, not after.
            </p>
          </div>
        </Container>
      </Section>

      {/* the five pains */}
      <Section tone="paper2" className="!pt-2">
        <Container className="max-w-[820px]">
          <div className="flex flex-col gap-5">
            {PAINS.map((p) => (
              <article
                key={p.n}
                className="rounded-[18px] border border-edge-light bg-white p-6 sm:p-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[15px] font-bold text-green">
                    {p.n}
                  </span>
                  <h2 className="m-0 font-display text-[22px] font-bold tracking-[-.02em] sm:text-[26px]">
                    {p.title}
                  </h2>
                </div>

                <blockquote className="mt-4 border-l-[3px] border-green pl-4 text-[18px] italic leading-[1.55] text-content">
                  &ldquo;{p.quote}&rdquo;
                </blockquote>

                <p className="m-0 mt-4 text-[15.5px] leading-[1.65] text-content-muted">
                  <strong className="text-content">What&rsquo;s really going on:</strong>{" "}
                  {p.happening}
                </p>
                <p className="m-0 mt-3 text-[15.5px] leading-[1.65] text-content-muted">
                  <strong className="text-green">What actually helps:</strong>{" "}
                  {p.helps}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* what you actually need */}
      <Section tone="paper">
        <Container className="max-w-[760px]">
          <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            What you&rsquo;re really asking for
          </h2>
          <p className="m-0 mb-5 text-[17px] leading-[1.7] text-content-muted">
            Founders rarely say these out loud, but underneath all five decisions
            it&rsquo;s the same short list:
          </p>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {[
              "I don't need more data — I need clarity.",
              "I don't need another training library — I need signal.",
              "I don't need to develop everyone — I need to bet on the right ones.",
              "I don't want another vendor — I want something that protects my time and momentum.",
            ].map((line) => (
              <li
                key={line}
                className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[16px] leading-[1.5] text-content"
              >
                <span className="mt-0.5 shrink-0 font-bold text-green">&rarr;</span>
                {line}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* clarity looks like this — bridge to the sample report */}
      <Section tone="paper2">
        <Container className="max-w-[820px]">
          <div className="rounded-[20px] border border-edge-light bg-white p-6 sm:p-9">
            <Eyebrow>Clarity looks like this</Eyebrow>
            <h2 className="mb-3 mt-3 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[30px]">
              A behavioral read, not a hunch
            </h2>
            <p className="m-0 mb-6 max-w-[620px] text-[16px] leading-[1.65] text-content-muted">
              A CQ Snapshot scores each person 1&ndash;10 on the three behaviors a
              bigger role actually needs &mdash; Initiative, Applied Grit, and
              Learnability &mdash; and sorts the read into three plain zones with a
              recommended move for each person:
            </p>
            <div className="flex flex-col gap-3">
              {ZONES.map((z) => (
                <div
                  key={z.zone}
                  className="flex items-start gap-3 rounded-[13px] border border-edge-light bg-paper px-4 py-3"
                >
                  <span className="text-[17px] leading-none" aria-hidden>
                    {z.dot}
                  </span>
                  <p className="m-0 text-[14.5px] leading-[1.5] text-content">
                    <strong>{z.zone} &mdash;</strong> {z.line}
                  </p>
                </div>
              ))}
            </div>
            <p className="m-0 mt-6 text-[15px] leading-[1.6] text-content-muted">
              It&rsquo;s a snapshot for development and investment decisions
              &mdash; never a termination tool, and never a judgment of worth.{" "}
              <Link href="/case-studies/snapshot" className="font-semibold text-green">
                See the full sample report, exactly as you&rsquo;d receive it
                &rarr;
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Founder people decisions: FAQ
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
        <div className="mx-auto max-w-[760px]">
          <h2 className="m-0 mb-4 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[38px]">
            Sleep on proof, not on a guess.
          </h2>
          <p className="m-0 mb-8 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Bring the people decision that&rsquo;s keeping you up. In a 20-minute
            call we&rsquo;ll show you how Prove turns it into a call you can
            defend &mdash; or start free with the 2-minute Certainty Diagnostic.
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
              Take the diagnostic &rarr;
            </ButtonLink>
          </div>
        </div>
      </section>

      <RelatedGuides current={CANONICAL} />
      <Footer />
    </>
  );
}
