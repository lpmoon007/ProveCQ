import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedEOS } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/for-eos/gwc";

export const metadata: Metadata = {
  title: "GWC in EOS: Gets It, Wants It, Capacity Explained",
  description:
    "GWC is the heart of the EOS People Analyzer. Gets it and Wants it reveal themselves over time; Capacity is the box most teams guess on. Learn to score GWC.",
  keywords: [
    "GWC",
    "GWC EOS",
    "gets it wants it capacity",
    "GWC people analyzer",
    "GWC meaning",
    "how to score GWC",
    "EOS People Analyzer",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "GWC in EOS: Gets It, Wants It, Capacity Explained",
    description:
      "Gets it and Wants it reveal themselves over time. Capacity is the box most teams guess on. Learn to score GWC on evidence, not a hunch.",
    url: CANONICAL,
    type: "article",
  },
};

const MEANING = [
  {
    n: "G",
    h: "Gets it",
    b: "They truly understand the role — the wiring of it, the judgment it takes, the way the pieces connect. Not just the tasks on the list.",
  },
  {
    n: "W",
    h: "Wants it",
    b: "They genuinely want the seat — the work itself, not just the title or the pay. You can tell because they lean into it, not around it.",
  },
  {
    n: "C",
    h: "Capacity",
    b: "They have the time, energy, and behavioral readiness to do it — now. Not someday, not in theory. In the actual conditions of the job.",
  },
];

const WHY_GUESS = [
  {
    h: "It’s self-reported",
    b: "“I’ve got it” often means “I want to please you.” A checkbox invites the answer the leader hopes to hear, not the one the work will prove.",
  },
  {
    h: "It’s dynamic",
    b: "Capacity shifts with life stage, bandwidth, and unseen stress. The person who had it last year may not this quarter — and the box never caught up.",
  },
  {
    h: "It absorbs the other two",
    b: "Leaders mark Capacity down when they really mean the person doesn’t Get it or Want it. The one honest-looking letter quietly hides two soft calls.",
  },
];

// Definitional checklist — the format AI answer engines extract, and the
// practical "how to score it" leaders actually want.
const HOW_TO_SCORE = [
  "Score Gets it and Wants it from an observed pattern over quarters — not from one meeting or one impression.",
  "Never let a single bad week move a letter. GWC reads the trend, not the mood.",
  "Separate Capacity from workload complaints — “I’m slammed” is a resourcing question, not a verdict on the person.",
  "Measure Capacity from behavior — initiative, follow-through, learnability — rather than a self-rating.",
  "Re-score at each Quarterly Conversation, because capacity genuinely changes and last quarter’s box goes stale.",
];

const FAQ = [
  {
    q: "What does GWC stand for in EOS?",
    a: "GWC stands for Gets it, Wants it, Capacity to do it. It’s the three-part test in the EOS People Analyzer for whether a person is right for a specific seat. A true fit is a yes on all three — Gets it, Wants it, and Capacity.",
  },
  {
    q: "What is GWC?",
    a: "GWC is the heart of the EOS People Analyzer: a check of whether someone Gets it (truly understands the role), Wants it (genuinely wants the seat, not just the title or pay), and has the Capacity to do it (the time, energy, and behavioral readiness, now). Gets it and Wants it tend to reveal themselves over time; Capacity is the one most teams guess on.",
  },
  {
    q: "How do you score GWC in the People Analyzer?",
    a: "Score each letter from an observed pattern over time, not a single week. Read Gets it and Wants it from how the person actually behaves across quarters, and separate Capacity from short-term workload complaints. The most honest reads come from watching behavior — initiative, follow-through, and learnability — rather than asking the person to rate themselves. Re-score at each Quarterly Conversation, because capacity changes.",
  },
  {
    q: "Which part of GWC is hardest to judge?",
    a: "Capacity. Gets it and Wants it surface over time as you watch someone work, but Capacity is usually a self-reported yes/no — and “I’ve got it” often means “I want to please you.” It’s also dynamic and tends to absorb the other two letters, which is why leaders most often get GWC wrong on the C.",
  },
  {
    q: "Can you measure Capacity objectively?",
    a: "You can measure the behavior that reveals it. A Prove cycle scores Initiative, Applied Grit, and Learnability from about six weeks of real behavior — voluntary action, follow-through under pressure, and how fast someone levels up. That gives the Capacity box evidence to rest on instead of a hunch.",
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

export default function EosGwcPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="For EOS &rsaquo; GWC"
        eyebrow="People Analyzer · the heart of it"
        title={<>GWC: Gets it, Wants it &mdash; and the box you guess on.</>}
      >
        GWC is the heart of the EOS People Analyzer. Two of the three letters
        reveal themselves over time as you watch someone work. The third
        &mdash; Capacity &mdash; gets a checkbox. This is the definitive read on
        what GWC means and how to score it on evidence, not a hunch.
      </PageHero>

      <ArticleMeta
        headline="GWC: Gets it, Wants it — and the box you guess on."
        description="GWC is the heart of the EOS People Analyzer. Gets it and Wants it reveal themselves over time; Capacity is the box most teams guess on. Learn to score GWC."
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "For EOS", url: "/for-eos" },
          { name: "GWC", url: "/for-eos/gwc" },
        ]}
      />

      {/* Short answer */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              GWC means <strong>Gets it, Wants it, Capacity</strong> &mdash; the
              three-part test for whether a person fits a seat. Gets it and Wants
              it surface over time as you watch someone work. Capacity is the one
              most teams guess on. Prove measures Capacity from behavior, so all
              three letters rest on evidence instead of a checkbox.
            </p>
          </div>
        </Container>
      </Section>

      {/* What GWC actually means */}
      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            What GWC actually means
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {MEANING.map((c) => (
              <div
                key={c.n}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <div className="mb-2.5 font-display text-[22px] font-bold text-green">
                  {c.n}
                </div>
                <h3 className="mb-2 text-[18px] font-bold">{c.h}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-[760px] text-[15.5px] leading-[1.65] text-content-muted">
            Get all three to a genuine yes and you have{" "}
            <Link href="/for-eos/right-person-right-seat" className="font-semibold text-green underline underline-offset-2">
              the right person in the right seat
            </Link>
            . Miss one and the seat wobbles &mdash; usually on the letter no one
            can see.
          </p>
        </Container>
      </Section>

      {/* Why Capacity is the letter you guess on */}
      <Section tone="paper" className="!pt-0">
        <Container wide>
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Why Capacity is the letter you guess on
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {WHY_GUESS.map((c) => (
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
            <p className="mx-auto mt-6 max-w-[760px] text-[15.5px] leading-[1.65] text-content-muted">
              We go deep on this in{" "}
              <Link href="/for-eos/capacity" className="font-semibold text-green underline underline-offset-2">
                the Capacity problem
              </Link>{" "}
              &mdash; why the third box is the weak link in GWC, and how
              behavioral proof fixes it alongside EOS.
            </p>
          </div>
        </Container>
      </Section>

      {/* How to score GWC honestly — definitional checklist */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to score GWC honestly
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              GWC is only as good as the honesty behind each letter. Scoring it
              well means reading a pattern over time and refusing to let one
              hard letter hide behind an easier one. In practice it looks like a
              checklist:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {HOW_TO_SCORE.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-6 text-[15.5px] leading-[1.65] text-content-muted">
              Do this consistently across the whole team and the{" "}
              <Link href="/for-eos/people-analyzer" className="font-semibold text-green underline underline-offset-2">
                People Analyzer
              </Link>{" "}
              stops being a wall of hopeful checkmarks and starts being a record
              you can bet on.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ — GEO citation block */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              GWC: FAQ
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
            Prove works <strong>alongside</strong> EOS&reg; and is independent
            of, and not affiliated with or endorsed by, EOS Worldwide. EOS&reg;,
            GWC&trade;, People Analyzer&trade; and Level 10&trade; are trademarks
            of their respective owners. Prove complements the EOS toolset &mdash;
            it does not replace it.
          </p>
        </Container>
      </Section>

      {/* Closing CTA */}
      <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
        <div className="mx-auto max-w-[760px]">
          <h2 className="m-0 mb-3.5 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[34px]">
            Put GWC on proof.
          </h2>
          <p className="m-0 mb-7 text-[17px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove gives every GWC read &mdash; especially
            the Capacity box &mdash; evidence you can stand behind. Bet on proof,
            not a hunch.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.bookingUrl} variant="dark">
              Book a call
            </ButtonLink>
            <ButtonLink
              href="/for-eos/people-analyzer"
              variant="ghost-dark"
              className="!border-white !text-white hover:!border-white"
            >
              People Analyzer fit &rarr;
            </ButtonLink>
          </div>
        </div>
      </section>

      <RelatedEOS current="/for-eos/gwc" />
      <Footer />
    </>
  );
}
