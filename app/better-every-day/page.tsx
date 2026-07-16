import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";

export const metadata: Metadata = {
  title:
    "Better Every Day — A High-Potential Development Program for Proven Players",
  description:
    "Better Every Day is a high-potential development program that keeps your high-CQ, proven players growing and in motion — so your best people don't burn out next to passengers. Weekly tracking, monthly commitments, drift alerts.",
  keywords: [
    "high potential development program",
    "high potential leadership program",
    "leadership development for SMBs",
    "employee retention program",
  ],
  alternates: { canonical: "/better-every-day" },
  openGraph: {
    title: "Better Every Day — High-Potential Development Program",
    description:
      "Keep your proven, high-potential players growing with weekly tracking, monthly commitments, and drift alerts.",
    url: "/better-every-day",
    type: "website",
  },
};

const PILLARS = [
  {
    title: "Gated entry",
    body: "Only proven high-CQ players — or those who challenge their way in — get access. Proof, not promise.",
  },
  {
    title: "Weekly participation tracking",
    body: "Actions taken, behaviors demonstrated, commitments honored. Engagement becomes a signal, not a vibe.",
  },
  {
    title: "Monthly behavioral checkpoints",
    body: "Participants declare commitments and are scored on follow-through. Development that compounds proof.",
  },
  {
    title: "Drift alerts",
    body: "If someone slips into maintenance mode, you see it early — and coach or clear with objective signal, not politics.",
  },
];

const RESULTS = [
  "A durable, no-drift leadership core",
  "Promotions based on proof, not promise",
  "Cultural reinforcement without bloat",
  "A team that keeps compounding — or self-clears",
];

export default function BetterEveryDayPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Better Every Day"
        eyebrow="After they prove it"
        title="Keep your best players in motion — or watch them burn out."
      >
        High performers don&rsquo;t burn out because they&rsquo;re overworked.
        They burn out surrounded by drift, deadweight, and inaction.{" "}
        <strong className="text-paper">Better Every Day</strong> keeps your
        proven, high-CQ people growing and accountable — and quietly clears the
        passengers.
      </PageHero>

      <Section tone="paper">
        <Container>
          <div className="mb-11 max-w-[720px]">
            <Eyebrow>Not a training program</Eyebrow>
            <h2 className="mb-4 mt-3.5 font-display text-[30px] font-bold leading-[1.1] tracking-[-.02em] sm:text-[38px]">
              It&rsquo;s a behavior contract for people who&rsquo;ve earned it.
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-content-muted">
              You can&rsquo;t teach commitment — you can only track it. BED is
              gated: only people who&rsquo;ve passed Prove get in. From there, they
              either keep showing up or they&rsquo;re out. No potential bets. No
              coast mode. No passengers.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <h3 className="mb-2 text-[17px] font-bold">{p.title}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Result */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-8 rounded-[18px] bg-ink p-8 text-paper on-dark sm:p-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em]">
                The result
              </h2>
              <p className="mb-5 text-[15px] font-semibold leading-[1.5] text-green-soft">
                $500/mo base + $150/mo per active seat · signal tracking, drift
                alerts, commitment logs &amp; quarterly reports
              </p>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[16px] text-[#B8B4A6]">
                {RESULTS.map((r) => (
                  <li key={r} className="flex gap-2.5">
                    <span className="text-green-soft">✓</span> {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-edge-dark bg-panel p-7">
              <div className="eyebrow mb-3 text-green-soft">
                Especially for SMBs with no L&amp;D
              </div>
              <p className="m-0 text-[16px] leading-[1.6] text-[#B8B4A6]">
                Your hidden gems disengage when they stop growing. BED gives them a
                self-directed way to keep growing in measurable ways — the
                development function you never had the headcount to build.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection title="Protect the people who've earned it.">
        Better Every Day activates once your team runs Prove. Book a call to see
        how it fits your stage.
      </CTASection>

      <Footer />
    </>
  );
}
