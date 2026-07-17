import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";

export const metadata: Metadata = {
  title: "How to Delegate With Confidence (Stop Being the Bottleneck)",
  description:
    "Founders stay the bottleneck because they do not trust who to hand work to. Learn how to delegate with confidence by proving who can actually own the outcome.",
  alternates: { canonical: "/guides/how-to-delegate" },
};

// Numbered how-to — a repeatable delegation sequence built on proving capacity
// before handing over authority.
const DELEGATE_STEPS = [
  {
    n: "01",
    h: "Name the outcome, not the task",
    b: "Define what done looks like — the result you want owned — rather than a list of steps to follow. Ownership only transfers when the goal, not the method, is the handoff.",
  },
  {
    n: "02",
    h: "Scope a real stretch first",
    b: "Before you hand over anything load-bearing, give a smaller piece of genuine responsibility with a real deadline and real stakes. This is your test data.",
  },
  {
    n: "03",
    h: "Watch initiative and follow-through",
    b: "Notice whether they close gaps without being told, chase down the unknowns, and deliver on what they committed to — or whether it all routes back through you.",
  },
  {
    n: "04",
    h: "Match the handoff to proven capacity",
    b: "Size the next delegation to the behavior you actually saw. Hand over as much as the person has shown they can carry, and no more — then extend it as proof accumulates.",
  },
  {
    n: "05",
    h: "Set the check-in cadence, then step back",
    b: "Agree on when they surface progress and where they escalate. Between those points, resist re-taking the work — trust is built by letting proven people run.",
  },
];

// FAQ — the format AI answer engines extract and cite. Answers stay faithful to
// the article and to behavioral, decision-support framing.
const FAQ = [
  {
    q: "How do I delegate with confidence when I do not trust anyone with it?",
    a: "Confidence comes from proof, not personality. Instead of guessing who is ready, give a scoped, real responsibility with genuine stakes and watch how the person carries it — do they take initiative, close gaps, and follow through? Once you have seen the behavior, handing over larger work stops feeling like a gamble.",
  },
  {
    q: "Why am I still the bottleneck in my own company?",
    a: "Usually because you have never seen someone truly own an outcome, a past handoff went sideways, or doing it yourself has quietly become a habit. Each of those keeps decisions routing back through you. The fix is not letting go harder — it is proving who can own outcomes so letting go is backed by evidence.",
  },
  {
    q: "What should I delegate first?",
    a: "Start with work that is real enough to test capacity but not so critical that a stumble is catastrophic — a scoped project with a clear outcome, a real deadline, and room for the person to make decisions. It gives you an honest read on initiative and follow-through before you hand over anything mission-critical.",
  },
  {
    q: "How do I delegate without micromanaging?",
    a: "Hand over the outcome, not the method, and agree in advance on when the person surfaces progress and where they escalate. Between those check-ins, hold back from re-taking the work. Micromanagement usually comes from delegating without proof; when the handoff is matched to behavior you have actually seen, you can step back.",
  },
  {
    q: "How do I know someone is ready to own more?",
    a: "Readiness shows in behavior over time: they take initiative beyond the brief, push through hard parts instead of stalling, and reliably deliver what they committed to. Match the size of each new handoff to the capacity they have already demonstrated, and extend it as the proof accumulates.",
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

const STUCK = [
  {
    n: "01",
    title: "No proof of ownership",
    body: "You have never seen someone truly own an outcome, so you keep it yourself.",
  },
  {
    n: "02",
    title: "One bad handoff scarred you",
    body: "A past delegation went sideways, and now everything routes back through you.",
  },
  {
    n: "03",
    title: "Over-functioning becomes habit",
    body: "Doing it yourself feels safer — until you are the ceiling on the whole company.",
  },
];

const HANDOFF = [
  {
    title: "Prove before you hand over",
    body: "Give a scoped real responsibility and watch how they carry it.",
  },
  {
    title: "Delegate to proven capacity",
    body: "Match the size of the handoff to the behavior someone has actually shown.",
  },
];

export default function DelegateGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Delegating with confidence"
        eyebrow="Founder leverage"
        title="How to delegate with confidence."
      >
        You are the bottleneck because handing off feels like a gamble. The
        problem is not that you cannot let go &mdash; it is that you have no proof
        of who will actually own the outcome when you do.
      </PageHero>

      <ArticleMeta
        headline="How to delegate with confidence."
        description="Founders stay the bottleneck because they do not trust who to hand work to. Learn how to delegate with confidence by proving who can actually own the outcome."
        canonical="/guides/how-to-delegate"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Delegating with confidence", url: "/guides/how-to-delegate" },
        ]}
      />

      <Section tone="paper" className="!pb-0">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink p-8 text-paper on-dark sm:p-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Delegate with confidence by proving capacity before you hand over
              the keys: give a scoped, real responsibility and watch initiative
              and follow-through. When you can see who owns outcomes, letting go
              stops feeling like a risk and starts feeling like leverage.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              What delegating with confidence really means
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              Delegation is the transfer of an outcome, not a task. Handing
              someone a checklist and standing over it is not delegating &mdash;
              it is dispatching, and it leaves you as the mind behind every move.
              Real delegation moves ownership: the person carries the goal, makes
              the calls, and comes back with the result. Confidence is simply
              knowing, before you transfer that ownership, that the person can
              hold it.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              That confidence is almost never a feeling you can talk yourself
              into. Most founders stay stuck precisely because they are waiting to
              feel ready, when what they are missing is evidence. You have not
              seen the person own something end to end, so every instinct says
              keep it. The way out is not a leap of faith &mdash; it is proof: a
              scoped, real responsibility you can watch someone carry before the
              stakes are high.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              The behaviors that predict a clean handoff are the same ones that
              predict who is worth investing in generally &mdash; initiative,
              follow-through, and the learnability to adapt when the work changes.
              When you can see those in someone&rsquo;s actual behavior, you stop
              betting on hope. You match the size of each handoff to what the
              person has already shown, and delegation turns from a gamble into
              leverage.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Why founders stay stuck
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {STUCK.map((c) => (
              <div
                key={c.n}
                className="rounded-[16px] border border-edge-light bg-white p-[26px]"
              >
                <div className="mb-2.5 font-display text-[15px] font-bold text-green">
                  {c.n}
                </div>
                <h3 className="mb-2 text-[18px] font-bold">{c.title}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="mx-auto max-w-[860px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to hand off without the gamble
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {HANDOFF.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[16px] border border-edge-light bg-white p-[26px]"
                >
                  <h3 className="mb-2 text-[18px] font-bold">{c.title}</h3>
                  <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to delegate in five steps
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              A repeatable sequence that replaces the leap of faith with a read on
              real behavior &mdash; so each handoff is sized to what the person has
              actually proven:
            </p>
            <ol className="m-0 flex list-none flex-col gap-4 p-0">
              {DELEGATE_STEPS.map((c) => (
                <li
                  key={c.n}
                  className="flex gap-4 rounded-[14px] border border-edge-light bg-white px-5 py-4"
                >
                  <span className="shrink-0 font-display text-[15px] font-bold text-green">
                    {c.n}
                  </span>
                  <div>
                    <h3 className="m-0 mb-1 text-[16.5px] font-bold">{c.h}</h3>
                    <p className="m-0 text-[15px] leading-[1.55] text-[#615B4F]">
                      {c.b}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="m-0 mt-6 text-[17px] leading-[1.65] text-content-muted">
              The read that tells you who can own more is the same one that
              de-risks a title change. If the handoff you are weighing is a
              promotion, it is worth understanding why{" "}
              <Link
                href="/guides/failed-promotion"
                className="font-semibold text-green underline underline-offset-2"
              >
                good employees fail after a promotion
              </Link>{" "}
              &mdash; almost always a capacity you never proved before handing
              over authority.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Delegating with confidence: FAQ
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

      <CTASection title="Get out of the bottleneck.">
        Book a call to see how Prove tells you exactly who is ready to own more.
      </CTASection>

      <RelatedGuides current="/guides/how-to-delegate" />
      <Footer />
    </>
  );
}
