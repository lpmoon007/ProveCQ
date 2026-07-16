import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "How to Delegate With Confidence (Stop Being the Bottleneck)",
  description:
    "Founders stay the bottleneck because they do not trust who to hand work to. Learn how to delegate with confidence by proving who can actually own the outcome.",
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

      <CTASection title="Get out of the bottleneck.">
        Book a call to see how Prove tells you exactly who is ready to own more.
      </CTASection>

      <Footer />
    </>
  );
}
