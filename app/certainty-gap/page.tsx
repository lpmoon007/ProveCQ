import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ButtonLink, Container, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/certainty-gap" },
  title: "The Leadership Certainty Gap — Why Most Leaders Are Guessing",
  description:
    "The Certainty Gap is the distance between the people decisions you have to make and the proof you actually have. It taxes speed, clarity, and confidence. Here's what it costs — and how behavioral proof closes it.",
};

const COSTS = [
  {
    title: "1. Wasted time",
    body: "You chase, check, and compensate for unclear signals — extra meetings, over-communication, and second-guessed decisions.",
  },
  {
    title: "2. Misdirected resources",
    body: "Without clear commitment signals, high-potential people get overlooked while low-signal performers get stretched, promoted, or retained too long.",
  },
  {
    title: "3. Missed growth moments",
    body: "You delay stretch assignments, promotions, and product moves because you're unsure who can handle them.",
  },
  {
    title: "4. Leadership drift",
    body: "You slide into over-functioning — doing the thinking, driving, and follow-up your team should own — and burn out everyone in the process.",
  },
];

export default function CertaintyGapPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="The Certainty Gap"
        eyebrow="The idea behind Prove"
        title="The Leadership Certainty Gap"
      >
        Every founder wakes up to the same questions: Who can I trust to take this
        and run? Who&rsquo;s leaning in versus just showing up? Who&rsquo;s ready
        to grow — and who&rsquo;s coasting? The honest answer, most days, is:{" "}
        <strong className="text-paper">I&rsquo;m guessing.</strong>
      </PageHero>

      <Section tone="paper">
        <Container className="max-w-[820px]">
          <p className="m-0 mb-10 text-[18px] leading-[1.7] text-content-muted">
            Even the best leaders operate off gut instinct, inconsistent feedback,
            and reactive check-ins. In a volatile world, that guesswork becomes a
            tax — a drag on speed, clarity, and confidence. The distance
            between the decisions you must make and the proof you actually have
            is{" "}
            <strong className="text-content">the Certainty Gap</strong>. And it
            costs more than you think.
          </p>

          <h2 className="mb-6 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
            The four costs of the gap
          </h2>
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {COSTS.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <h3 className="mb-2 text-[17px] font-bold">{c.title}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <p className="m-0 mb-10 text-[18px] leading-[1.7] text-content-muted">
            The result? You start solving for clarity with <em>control</em>.
            Traditional fixes don&rsquo;t help: 360s are slow and vague,
            performance reviews look backward, engagement surveys don&rsquo;t
            measure behavior, and gut feel works — until it doesn&rsquo;t. Leaders
            don&rsquo;t need more feedback.{" "}
            <strong className="text-content">
              They need behavioral signals they can trust.
            </strong>
          </p>

          <div className="rounded-[18px] bg-ink p-8 text-paper on-dark sm:p-10">
            <h2 className="mb-4 font-display text-[24px] font-bold tracking-[-.02em] sm:text-[30px]">
              Certainty per dollar
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-[#B8B4A6]">
              In uncertain markets, budget is precious and mistakes are expensive.
              What if you could invest only in people showing real signal, promote
              on proven stretch-readiness, and retain on proof rather than promise?
            </p>
            <p className="m-0 text-[17px] font-semibold leading-[1.65] text-paper">
              That&rsquo;s what Prove gives you: assumptions become visibility,
              and visibility becomes velocity. When you know who&rsquo;s
              committed, you stop guessing and start building.
            </p>
          </div>

          <p className="m-0 mt-10 text-[20px] font-bold leading-[1.5]">
            This isn&rsquo;t a people problem. It&rsquo;s a signal problem.{" "}
            <span className="text-green">One you can finally close.</span>
          </p>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0 text-center">
        <Container>
          <ButtonLink href={site.bookingUrl}>
            Close your certainty gap — book a call
          </ButtonLink>
          <div className="mt-5">
            <Link href="/how-it-works" className="font-semibold text-green">
              Or see how Prove works &rarr;
            </Link>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
