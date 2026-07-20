import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArticleMeta } from "@/components/ArticleMeta";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

const CANONICAL = "/founder-bottleneck";

const DESCRIPTION =
  "If every decision waits on you and the work stalls when you step back, you're the bottleneck. Here's how to get out — by proving who can carry the load, not just hoping.";

export const metadata: Metadata = {
  title: "The Founder Bottleneck: How to Stop Being the Blocker",
  description: DESCRIPTION,
  keywords: [
    "founder bottleneck",
    "how to stop being the bottleneck",
    "founder is the bottleneck",
    "owner dependent business",
    "founder can't let go",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The Founder Bottleneck: How to Stop Being the Blocker",
    description:
      "Every decision waits on you and growth stalls when you step back. The way out of the founder bottleneck — built on proof of who can carry the load.",
    url: CANONICAL,
    type: "article",
  },
};

const SIGNS = [
  {
    h: "Everything routes through you",
    b: "Decisions, approvals, and the hard calls all wait for your sign-off — so the pace of the business is capped at your bandwidth.",
  },
  {
    h: "It stalls when you step back",
    b: "A week off and things slip. The business runs on your presence, not on systems and people who can carry it.",
  },
  {
    h: "You're the safety net",
    b: "When something is important, you do it yourself — because you can't quite see who else will actually follow through.",
  },
  {
    h: "Growth has plateaued",
    b: "You've hit the ceiling of what one person can personally touch. More effort from you no longer moves the number.",
  },
];

const SPOKES = [
  {
    h: "Working on vs. in your business",
    b: "Shift from doing the work to building the systems and people that do it without you.",
    href: "/guides/work-on-vs-in-your-business",
  },
  {
    h: "How to let go as a founder",
    b: "Letting go is a confidence problem, not a control problem. Earn the confidence to hand off.",
    href: "/guides/how-to-let-go-as-a-founder",
  },
  {
    h: "When to hire a second-in-command",
    b: "The signs you need a #2 or COO — and why the wrong one is worse than none.",
    href: "/guides/when-to-hire-a-second-in-command",
  },
  {
    h: "Founder dependence & key-person risk",
    b: "The quiet tax on your growth and your valuation — and how to reduce it.",
    href: "/guides/founder-dependence",
  },
  {
    h: "How to delegate with confidence",
    b: "Hand off whole outcomes, not tasks — and stop being the fallback.",
    href: "/guides/how-to-delegate",
  },
  {
    h: "Build a leadership bench",
    b: "Grow the next layer of proven people before the crunch forces your hand.",
    href: "/guides/leadership-bench",
  },
];

const FAQ = [
  {
    q: "What does it mean to be the bottleneck in your business?",
    a: "You're the bottleneck when the business can't move faster than you personally can — decisions wait on your approval, important work routes back to you, and progress stalls the moment you step back. The company's growth is capped at the limit of one person's time and attention.",
  },
  {
    q: "Why do founders become the bottleneck?",
    a: "Usually because it started as a strength: in the early days, the founder doing everything is exactly what the business needs. The habit outlives its usefulness. Founders keep being the safety net because they can't clearly see who else will follow through — so holding on feels safer than betting wrong. The fix is proof of who can carry the load, which turns delegation from a gamble into a decision.",
  },
  {
    q: "How do I stop being the bottleneck?",
    a: "Move from working in the business to working on it: hand off whole outcomes rather than tasks, build a bench of people you've seen deliver under pressure, and — when the time is right — bring in a second-in-command to run day-to-day execution. Each step depends on the same thing: being able to see who actually follows through, so you hand off on evidence instead of hope.",
  },
  {
    q: "How do I know if my business is too dependent on me?",
    a: "Ask what breaks if you're unreachable for two weeks. If key decisions pile up, relationships only you hold go cold, and nothing important closes without you, the business is founder-dependent. That's both an operational fragility and a drag on what the company is worth.",
  },
  {
    q: "How does Prove help a founder get out of the bottleneck?",
    a: "Prove measures who on your team actually delivers when it's hard — Initiative, Applied Grit, and Learnability from real behavior over time. That gives you the one thing that makes letting go feel safe: evidence of who can carry more, so you can delegate, promote, and hand over the keys on proof instead of a hunch.",
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

export default function FounderBottleneckPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Founder bottleneck"
        eyebrow="Founder leverage"
        title={<>You&rsquo;re the bottleneck. Here&rsquo;s how to get out.</>}
      >
        The thing that built your company &mdash; you, in everything &mdash; is
        now the thing capping it. Growing past yourself isn&rsquo;t about working
        harder or managing your calendar better. It&rsquo;s about being able to
        see who can actually carry the load, so you can finally hand it off.
      </PageHero>

      <ArticleMeta
        headline="You're the bottleneck. Here's how to get out."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Founder bottleneck", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              You&rsquo;re the bottleneck when the business can&rsquo;t move faster
              than you can. The way out isn&rsquo;t doing more &mdash; it&rsquo;s
              building systems and a bench of proven people you can hand real work
              to. And the only reason founders don&rsquo;t is that they can&rsquo;t
              see who&rsquo;ll follow through. Fix that, and letting go stops being
              a leap of faith.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Signs you&rsquo;re the bottleneck
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SIGNS.map((c) => (
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
              Why founders get stuck here
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.7] text-content-muted">
              Being the bottleneck usually starts as a strength. Early on, a
              founder who does everything &mdash; sells, ships, hires, firefights
              &mdash; is exactly what the business needs. The problem is that the
              habit outlives its usefulness. What made the first few years work
              quietly becomes the thing that caps the next few.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.7] text-content-muted">
              The usual advice &mdash; &ldquo;just delegate,&rdquo; &ldquo;work on
              the business, not in it&rdquo; &mdash; is right, and useless on its
              own. It skips the reason you haven&rsquo;t already: you can&rsquo;t
              clearly see who will actually follow through when it gets hard. So
              you stay the safety net, because being the safety net feels less
              risky than betting on the wrong person and finding out too late.
              It&rsquo;s one of{" "}
              <Link href="/guides/founder-people-decisions" className="font-semibold text-green">
                the five people decisions that keep founders up at night
              </Link>
              .
            </p>
            <p className="m-0 text-[17px] leading-[1.7] text-content-muted">
              That&rsquo;s the real unlock. When you can see &mdash; from real
              behavior, not a good interview &mdash; who takes initiative, who
              follows through, and who grows into more, handing off stops feeling
              like a gamble. It becomes a bet on evidence. Everything below is how
              you get there.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-2 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The way out
          </h2>
          <p className="m-0 mb-8 max-w-[640px] text-[16px] leading-[1.6] text-content-muted">
            Five moves, each one a smaller version of the same skill: handing off
            on proof instead of hope.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPOKES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex flex-col rounded-[18px] border border-edge-light bg-white p-6 transition-colors hover:border-green"
              >
                <h3 className="mb-1.5 text-[17px] font-bold leading-[1.3]">
                  {s.h}
                </h3>
                <p className="m-0 text-[14px] leading-[1.5] text-[#615B4F]">
                  {s.b}
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-[15px] text-content-muted">
            Running on EOS? The same problem shows up as the{" "}
            <Link href="/for-eos/delegate-and-elevate" className="font-semibold text-green">
              Delegate &amp; Elevate
            </Link>{" "}
            handoff and the{" "}
            <Link href="/guides/when-to-hire-a-second-in-command" className="font-semibold text-green">
              Visionary / Integrator
            </Link>{" "}
            split.
          </p>
        </Container>
      </Section>

      {/* Start here */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <Eyebrow>Start here</Eyebrow>
            <h2 className="mx-auto mb-3 mt-3 max-w-[560px] font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
              See how much of your business runs on you
            </h2>
            <p className="mx-auto mb-7 max-w-[560px] text-[16px] leading-[1.6] text-content-muted">
              Two free minutes to see how much of your people decisions rest on
              proof versus gut feel &mdash; the exact gap that keeps you in the
              weeds.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink href="/free-tools/certainty-diagnostic">
                Take the Certainty Diagnostic
              </ButtonLink>
              <ButtonLink href="/free-tools/4am-test" variant="ghost-light">
                Try the 4 AM Test &rarr;
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Founder bottleneck: FAQ
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
            Get out of the weeds &mdash; for good.
          </h2>
          <p className="m-0 mb-8 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call and we&rsquo;ll show you how Prove reveals who on your team
            can carry more &mdash; so you can finally hand it off.
          </p>
          <ButtonLink href={site.bookingUrl} variant="dark" className="text-[17px]">
            Book a call
          </ButtonLink>
        </div>
      </section>

      <Footer />
    </>
  );
}
