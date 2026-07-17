import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";
import CQDiagram from "@/components/CQDiagram";

export const metadata: Metadata = {
  title: "How Prove Works — Behavioral Proof in Six Weeks",
  description:
    "Prove turns guesswork into behavioral proof: a 15-minute Snapshot, a six-week Validation under real pressure (40+ datapoints), and a clear Decision on who to promote, coach, or wait on. Proof over paper tests.",
};

const STAGES = [
  {
    n: "01",
    title: "Snapshot — 15 minutes",
    body: (
      <>
        A quick behavioral read produces an initial score on Initiative, Applied
        Grit, and Learnability. Treat it as a hypothesis, never a verdict — the
        starting signal, not the proof.
      </>
    ),
    foot: <>Output: an initial CQ read per person.</>,
  },
  {
    n: "02",
    title: "Validation — six weeks",
    body: (
      <>
        Real follow-through is measured under escalating pressure —
        micro-commitments, pre-work, attendance, and self-ratings across 7-, 14-,
        and 21-day challenges. That&rsquo;s <strong>40+ datapoints</strong> in six
        weeks. The law of large numbers stabilizes the signal, and the gap between
        what someone <em>says</em> and what they <em>do</em> becomes as diagnostic
        as the behavior itself.
      </>
    ),
    foot: <>If they don&rsquo;t show up here, they won&rsquo;t show up when it matters.</>,
  },
  {
    n: "03",
    title: "Decision — in black and white",
    body: (
      <>
        You get a Commitment Map and a blunt leader debrief that cuts through
        excuses. You see who&rsquo;s investment-ready, who to coach and in which
        trait, and who to wait on — so you invest fast and without regret.
      </>
    ),
    foot: (
      <>
        Output: the CQ Heatmap + a decision on every person.{" "}
        <Link href="/heatmap" className="text-green">
          See the demo &rarr;
        </Link>
      </>
    ),
  },
];

const PAPER = [
  "Self-reported, easy to game",
  "One moment in time",
  "Backward-looking or theoretical",
  "No follow-through signal",
];
const DRIVE = [
  "Observed behavior under pressure",
  "40+ datapoints over six weeks",
  "Intent-vs-execution gap analysis",
  "Re-run every 6–12 months to prevent drift",
];

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <PageHero crumb="How it works" eyebrow="How Prove works" title="Guesswork in. Proof out.">
        Prove converts a first impression into validated behavioral proof over six
        weeks — so your next promotion, project handoff, or hire is a bet on
        evidence, not a feeling.
      </PageHero>

      {/* Three stages */}
      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
            {STAGES.map((s) => (
              <div
                key={s.n}
                className="flex flex-col rounded-[18px] border border-edge-light bg-white p-8"
              >
                <div className="font-display text-[38px] font-bold text-green">
                  {s.n}
                </div>
                <h2 className="mb-2 mt-3 text-[20px] font-bold">{s.title}</h2>
                <p className="m-0 text-[15px] leading-[1.6] text-[#615B4F]">
                  {s.body}
                </p>
                <p className="mb-0 mt-4 border-t border-edge-light pt-3 text-[13.5px] font-semibold text-content-faint">
                  {s.foot}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What the score is made of */}
      <Section tone="paper2">
        <Container className="max-w-[900px]">
          <div className="mb-8 text-center">
            <Eyebrow>The score</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-[620px] font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              What the Commitment Quotient is made of
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[16px] leading-[1.6] text-content-muted">
              Three observable behaviors, weighted into a single score you can act
              on &mdash; measured from what people do, not what they say.
            </p>
          </div>
          <CQDiagram />
        </Container>
      </Section>

      {/* Paper test vs test drive */}
      <Section tone="ink">
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow tone="soft">Why not just use an assessment?</Eyebrow>
            <h2 className="mb-4 mt-3.5 font-display text-[28px] font-bold leading-[1.1] tracking-[-.02em] sm:text-[38px]">
              A personality test is a paper exam for driving. Prove is the test
              drive.
            </h2>
            <p className="m-0 text-[17px] leading-[1.65] text-[#B8B4A6]">
              Most tools rely on self-report, which is easy to game — you can pass
              without ever touching the wheel. Prove treats self-report as a
              hypothesis and then pressure-tests it against observed behavior. When
              you decide who to hand the keys to, you don&rsquo;t bet on a paper
              exam. You bet on how they actually handle the road when it gets
              rough.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-edge-dark bg-panel p-7">
              <h3 className="mb-4 text-[18px] font-bold text-signal-red">
                The paper exam
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px] text-[#B8B4A6]">
                {PAPER.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#1F5A3D] bg-[#173A2A] p-7">
              <h3 className="mb-4 text-[18px] font-bold text-green-soft">
                The test drive (Prove)
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px] text-[#DCEFE4]">
                {DRIVE.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-[760px] text-center text-[14.5px] leading-[1.6] text-content-faint">
            Prove is a behavioral signal system, transparently presented as one
            input in a larger decision — paired with your judgment and
            role-relevant data, never a psychometric verdict on its own.
          </p>
        </Container>
      </Section>

      <CTASection title="See it on your own team.">
        Book a call and we&rsquo;ll walk you through a real Heatmap and how a Prove
        cycle would run for your next big people decision.
      </CTASection>

      <Footer />
    </>
  );
}
