import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedEOS } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/for-eos/delegate-and-elevate";

export const metadata: Metadata = {
  title: "Delegate and Elevate in EOS: Who Can Actually Catch It?",
  description:
    "The Delegate and Elevate tool frees a leader's time by handing off the bottom two quadrants. It only works if someone below has the proven capacity to catch it.",
  keywords: [
    "delegate and elevate",
    "delegate and elevate tool",
    "delegate and elevate EOS",
    "delegate and elevate quadrants",
    "EOS delegation",
    "how to delegate",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Delegate and Elevate in EOS: Who Can Actually Catch It?",
    description:
      "The Delegate and Elevate tool only works if the person you hand off to has the proven capacity to catch it — otherwise you just moved the bottleneck.",
    url: CANONICAL,
    type: "article",
  },
};

const QUADRANTS = [
  {
    h: "Love / Great at it",
    b: "Your unique gifts. The point of the whole exercise is to spend more of your time here.",
  },
  {
    h: "Like / Good at it",
    b: "Energizing and solid. Keep these for now — they are not what is holding you back.",
  },
  {
    h: "Don’t like / Good at it",
    b: "You can do it, but it drains you. Delegate these soon to free up real time.",
  },
  {
    h: "Don’t like / Not good at it",
    b: "The drag on your week. Delegate these first — to someone who can actually carry them.",
  },
];

const CATCH = [
  {
    h: "Delegation moves the bottleneck",
    b: (
      <>
        Handing an accountability to someone without the capacity to hold it
        doesn&rsquo;t remove the bottleneck &mdash; it just relocates it one seat
        down. See the{" "}
        <Link href="/for-eos/capacity" className="font-semibold text-green underline">
          Capacity problem
        </Link>
        .
      </>
    ),
  },
  {
    h: "The catcher needs proven behavior",
    b: (
      <>
        Availability is not capacity. The person catching the handoff needs
        demonstrated initiative and follow-through &mdash; the same signal{" "}
        <Link href="/for-eos/gwc" className="font-semibold text-green underline">
          GWC
        </Link>{" "}
        is trying to read, proven over time rather than guessed.
      </>
    ),
  },
  {
    h: "A bad handoff burns your best people",
    b: "Delegate to someone who can't hold it and you don't just fail the handoff — you overload a good person, erode their trust, and often lose them. The wrong catch costs more than no catch.",
  },
];

const CHECKLIST = [
  "Name the accountability you are handing off — the outcome, not just the task list.",
  "Identify who has the proven capacity to catch it — read behavior, not title or availability.",
  "Hand off the whole thing, not just the tasks — the decisions and the outcome go with it.",
  "Verify follow-through over a few weeks before you fully let go.",
  "Re-elevate your own time only once it holds — not the moment it changes hands.",
];

const FAQ = [
  {
    q: "What is Delegate and Elevate in EOS?",
    a: "Delegate and Elevate is an EOS tool that helps a leader free up time by sorting their activities into four quadrants and delegating the ones that drain them or that others can do better. The goal is to spend more time in your area of greatest strength and value.",
  },
  {
    q: "What are the four quadrants of Delegate and Elevate?",
    a: "The four quadrants are: things you Love and are Great at, things you Like and are Good at, things you Don't like but are Good at, and things you Don't like and are Not good at. You elevate by delegating the bottom two — the ones that drain you — starting with the last.",
  },
  {
    q: "How do you know who to delegate to?",
    a: "Look at proven behavior, not title or who happens to be free. The right catcher has shown initiative and follow-through on hard work over time. Availability is not the same as capacity — delegating to someone who can't hold the accountability just moves the bottleneck down a seat.",
  },
  {
    q: "Why do delegation handoffs fail?",
    a: "Most fail because the leader hands off the tasks but not the accountability, or hands off to someone without the proven capacity to catch it. The result is a relocated bottleneck and a burned-out good person — so the leader takes the work back and never actually elevates.",
  },
  {
    q: "How does Prove help with Delegate and Elevate?",
    a: "Prove measures the behaviors that tell you who can actually catch a handoff — initiative, applied grit, and learnability — from real behavior over time rather than a gut call. It gives you evidence of capacity before you delegate, so the handoff holds and your elevated time stays elevated.",
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

export default function EosDelegateAndElevatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="For EOS &rsaquo; Delegate and Elevate"
        eyebrow="Delegation · the handoff"
        title={<>Delegate and Elevate &mdash; but who can actually catch it?</>}
      >
        The Delegate and Elevate tool frees a leader&rsquo;s time by handing off
        the bottom two quadrants of work. It only works if someone below has the
        capacity to catch the handoff &mdash; otherwise you&rsquo;ve just moved
        the bottleneck.
      </PageHero>

      <ArticleMeta
        headline="Delegate and Elevate — but who can actually catch it?"
        description="The Delegate and Elevate tool frees a leader's time by handing off the bottom two quadrants. It only works if someone below has the proven capacity to catch it."
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "For EOS", url: "/for-eos" },
          { name: "Delegate and Elevate", url: "/for-eos/delegate-and-elevate" },
        ]}
      />

      {/* Short answer */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Delegate and Elevate sorts your activities into four quadrants, and
              you elevate by delegating the bottom two. The unspoken prerequisite:
              the person you delegate to must have the <strong>capacity</strong> to
              catch it &mdash; or you&rsquo;ve just moved the bottleneck and burned
              out a good person.
            </p>
          </div>
        </Container>
      </Section>

      {/* The four quadrants */}
      <Section tone="paper" className="!pt-0">
        <Container wide>
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[32px]">
              The four quadrants
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {QUADRANTS.map((c) => (
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
          </div>
        </Container>
      </Section>

      {/* The missing question */}
      <Section tone="paper" className="!pt-0">
        <Container wide>
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-3 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[32px]">
              The missing question: who can catch it?
            </h2>
            <p className="m-0 mb-6 max-w-[720px] text-[17px] leading-[1.65] text-content-muted">
              The quadrants tell you what to hand off. They say nothing about
              whether anyone below you can hold it. That&rsquo;s where most
              delegation quietly fails.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {CATCH.map((c) => (
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
          </div>
        </Container>
      </Section>

      {/* Checklist */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to delegate and elevate without dropping the ball
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Delegation holds when you hand off the accountability to someone who
              has proven they can carry it &mdash; and verify before you let go.
              For the full playbook, see{" "}
              <Link
                href="/guides/how-to-delegate"
                className="font-semibold text-green underline"
              >
                how to delegate
              </Link>
              .
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
              Delegate and Elevate: FAQ
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

      {/* EOS disclaimer */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <p className="mx-auto max-w-[820px] text-[12.5px] leading-[1.6] text-[#8A8474]">
            Prove works <strong>alongside</strong> EOS&reg; and is independent of,
            and not affiliated with or endorsed by, EOS Worldwide. EOS&reg;,
            GWC&trade; and Delegate and Elevate&trade; are trademarks of their
            respective owners. Prove complements the EOS toolset &mdash; it does
            not replace it.
          </p>
        </Container>
      </Section>

      {/* Closing CTA */}
      <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
        <div className="mx-auto max-w-[760px]">
          <h2 className="m-0 mb-3.5 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[34px]">
            Make sure the handoff holds.
          </h2>
          <p className="m-0 mb-7 text-[17px] leading-[1.6] text-[#E4F5EB]">
            See how Prove shows you who can actually catch what you delegate
            &mdash; before you hand it over.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.bookingUrl} variant="dark">
              Book a call
            </ButtonLink>
            <Link
              href="/guides/how-to-delegate"
              className="inline-flex items-center justify-center rounded-[12px] border-[1.5px] border-[#7BCB9E] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              How to delegate &rarr;
            </Link>
          </div>
        </div>
      </section>

      <RelatedEOS current="/for-eos/delegate-and-elevate" />
      <Footer />
    </>
  );
}
