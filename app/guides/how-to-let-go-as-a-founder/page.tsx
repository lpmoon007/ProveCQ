import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/guides/how-to-let-go-as-a-founder";

export const metadata: Metadata = {
  title: "How to Let Go as a Founder",
  description:
    "Founders can't let go because they can't see who will follow through. Learn to hand off whole outcomes, tolerate B+ work, and earn the confidence to delegate.",
  keywords: [
    "how to let go as a founder",
    "founder can't let go",
    "letting go of control",
    "delegating as a founder",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How to Let Go as a Founder",
    description:
      "Founders can't let go because they can't see who will follow through. Learn to hand off whole outcomes, tolerate B+ work, and earn the confidence to delegate.",
    url: CANONICAL,
    type: "article",
  },
};

// Card grid — why founders actually hold on. Framed as a confidence problem,
// not a character flaw.
const REASONS = [
  {
    h: "You can&rsquo;t see who&rsquo;s ready",
    b: <>You have no clear read on who will actually follow through, so holding on feels safer than betting wrong.</>,
  },
  {
    h: "Everything feels high-stakes",
    b: <>When every call seems load-bearing, handing any of it off feels like handing off the whole company.</>,
  },
  {
    h: "It&rsquo;s faster to do it myself",
    b: <>In the moment, doing it yourself always wins. The cost shows up later, as a business that can&rsquo;t run without you.</>,
  },
  {
    h: "Your identity is tied to the work",
    b: <>You built this by being the person who does it. Letting go can feel like losing the thing that makes you, you.</>,
  },
];

// paper2 checklist — the actual mechanics of letting go.
const STEPS = [
  "Hand off a whole outcome, not a pile of tasks &mdash; give someone the result to own, not a checklist to run.",
  "Tolerate B+ execution &mdash; if it clears the bar and the outcome lands, resist rebuilding it your way.",
  "Verify with behavior over time, not one result &mdash; watch whether they follow through when it&rsquo;s hard, again and again.",
  "Start with lower-stakes handoffs &mdash; build trust on things you can afford to get a little wrong.",
  "Say what &ldquo;done&rdquo; looks like up front &mdash; define the target so you&rsquo;re judging the outcome, not your own process.",
  "Let them do it their way &mdash; you own the what and the why; hand off the how.",
];

const FAQ = [
  {
    q: "Why can't I let go of my business?",
    a: "Usually not because you're a control freak — because you can't see who will actually follow through. Holding on feels safer than betting wrong. It's a confidence problem, not a personality problem, and the fix is earning enough certainty about who delivers that handing off stops feeling like a gamble.",
  },
  {
    q: "Is it bad to be a control freak founder?",
    a: "The instinct that built the company — high standards, owning the details — is not a flaw. It becomes a problem only when it makes you the ceiling on everything the business can do. The goal isn't to care less. It's to earn the confidence to hand off, so your standards live in more people than just you.",
  },
  {
    q: "How do you delegate when you don't trust anyone to do it right?",
    a: "Trust isn't a feeling you talk yourself into — it's evidence you accumulate. Start with lower-stakes handoffs, define what a good outcome looks like, and watch how people behave over time. Someone who follows through on the small things, repeatedly, is showing you they can be trusted with bigger ones.",
  },
  {
    q: "What should a founder delegate first?",
    a: "Start with whole outcomes that are lower-stakes and recurring — work you can afford to get a little wrong while you build trust. Avoid handing off single one-off tasks, which just makes you a bottleneck for the next one. Give someone something to own end to end, then verify with behavior before you raise the stakes.",
  },
  {
    q: "How do you know someone is ready to take something over?",
    a: "You watch what they do, not what they say. Readiness shows up as initiative (acting before it's their job), applied grit (staying with hard problems), and learnability (leveling up without hand-holding) — and it shows up repeatedly, over weeks, not in one good moment. When you can see that pattern, letting go stops being a bet.",
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

export default function HowToLetGoAsAFounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › How to let go as a founder"
        eyebrow="Founders"
        title={<>How to let go as a founder.</>}
      >
        Letting go usually gets framed as a personality flaw &mdash; you&rsquo;re a
        control freak, you need to relax. It&rsquo;s really a confidence problem.
        You hold on because you can&rsquo;t see who will actually follow through,
        and hanging on feels safer than betting wrong.
      </PageHero>

      <ArticleMeta
        headline="How to let go as a founder."
        description="Founders can't let go because they can't see who will follow through. Learn to hand off whole outcomes, tolerate B+ work, and earn the confidence to delegate."
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "How to let go as a founder", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              You can&rsquo;t let go because you can&rsquo;t see who will deliver, so
              holding on feels safer than betting wrong. The fix isn&rsquo;t forcing
              yourself to care less. It&rsquo;s earning the confidence to hand off
              &mdash; give away whole outcomes, tolerate B+ execution, and verify
              with behavior over time. Once you can see who follows through, letting
              go stops feeling like a gamble.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Why founders can&rsquo;t let go
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {REASONS.map((c) => (
              <div
                key={c.h}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <h3
                  className="mb-2 text-[18px] font-bold"
                  dangerouslySetInnerHTML={{ __html: c.h }}
                />
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Definition-first prose — reframe letting go as a confidence problem */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Letting go is a confidence problem, not a character flaw
            </h2>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              Letting go, for a founder, means handing real responsibility to
              someone else and living with how they carry it. Most advice treats
              the reason you struggle as a defect &mdash; you&rsquo;re too
              controlling, too attached, too unwilling to trust. So the prescribed
              cure is to care less: relax your standards, step back, get out of the
              way.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              That framing misses what&rsquo;s actually happening. You&rsquo;re not
              holding on because you love control. You&rsquo;re holding on because
              you can&rsquo;t see who will follow through. When you can&rsquo;t
              predict whether a handoff will land, doing it yourself is the rational
              move &mdash; you know exactly what you&rsquo;ll get. Every founder who
              becomes the{" "}
              <Link href="/founder-bottleneck" className="font-semibold text-green underline-offset-2 hover:underline">
                bottleneck in their own business
              </Link>{" "}
              got there the same way: one reasonable decision at a time to keep the
              thing they couldn&rsquo;t yet trust to anyone else.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              So the answer isn&rsquo;t to force yourself to care less. It&rsquo;s to
              earn the confidence that makes handing off feel safe. And confidence
              isn&rsquo;t a mood you talk yourself into &mdash; it&rsquo;s evidence.
              When you can actually see that a person takes initiative, pushes
              through hard problems, and learns fast, betting on them stops being a
              gamble and starts being a read. That shift &mdash; from hoping to
              knowing &mdash; is what makes letting go possible.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              This is the difference between{" "}
              <Link href="/guides/work-on-vs-in-your-business" className="font-semibold text-green underline-offset-2 hover:underline">
                working on your business versus in it
              </Link>
              . You can&rsquo;t work on the thing while you&rsquo;re still the person
              running every part of it &mdash; and you won&rsquo;t stop running every
              part of it until you can see who&rsquo;s ready to take pieces off your
              plate for good.
            </p>
          </div>
        </Container>
      </Section>

      {/* paper2 checklist — the mechanics of letting go */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to actually let go
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              You don&rsquo;t let go all at once, and you don&rsquo;t let go by
              deciding to trust harder. You build the evidence in a specific order:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {STEPS.map((s) => (
                <li
                  key={s}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: s }} />
                </li>
              ))}
            </ul>
            <p className="m-0 mt-6 text-[17px] leading-[1.65] text-content-muted">
              The mechanics of the handoff itself &mdash; how to scope an outcome,
              set the bar, and check in without hovering &mdash; are worth getting
              right. Our guide on{" "}
              <Link href="/guides/how-to-delegate" className="font-semibold text-green underline-offset-2 hover:underline">
                how to delegate
              </Link>{" "}
              walks through it step by step.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ — GEO citation block */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Letting go as a founder: FAQ
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
            See who&rsquo;s ready to take it off your plate.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove shows you who follows through &mdash; so
            letting go stops feeling like a bet.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[16px]">
              Book a call
            </ButtonLink>
            <Link
              href="/free-tools/4am-test"
              className="inline-flex items-center justify-center rounded-[12px] border-[1.5px] border-[#7BCB9E] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              Try the 4am Test &rarr;
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuides current="/guides/how-to-let-go-as-a-founder" />
      <Footer />
    </>
  );
}
