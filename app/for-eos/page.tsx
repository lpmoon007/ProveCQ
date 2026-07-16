import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Prove for EOS — Make the Capacity Box Real",
  description:
    "EOS scores every seat on GWC — but Capacity is treated as a yes/no checkbox. Prove measures the behavioral truth of capacity (Initiative, Applied Grit, Learnability) so EOS leaders and Implementers stop mis-placing people.",
};

const GWC = [
  { k: "G", label: "Gets it", desc: "— understands the seat.", red: false },
  { k: "W", label: "Wants it", desc: "— motivated to do it.", red: false },
  { k: "C", label: "Capacity", desc: "— time, energy, skills… scored as a checkbox.", red: true },
];

const CQ_ROWS = [
  { label: "Initiative", desc: "Acts without being told." },
  { label: "Applied Grit", desc: "Follows through when it's hard." },
  { label: "Learnability", desc: "Adapts and grows." },
];

const LEADER_POINTS = [
  "Fewer misfires on promotions & Rocks",
  "Objective language for Quarterly Conversations",
  "A transparent process that avoids resentment",
  "Capacity made visible — before accountability is enforced",
];

const DEEPER = [
  {
    title: "The Capacity problem in GWC",
    body: "Why the third letter is a guess — and how behavior fixes it.",
    href: "/for-eos/capacity",
  },
  {
    title: "A real Capacity score for the People Analyzer",
    body: "Keep GWC; replace the Capacity guess with evidence.",
    href: "/for-eos/people-analyzer",
  },
  {
    title: "Better Quarterly Conversations",
    body: "Objective behavioral data for a fairer conversation.",
    href: "/for-eos/quarterly-conversations",
  },
  {
    title: "For EOS Implementers",
    body: "The capacity tool you've never had — a complement to your practice.",
    href: "/for-eos/implementers",
  },
];

export default function EosPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="For EOS"
        eyebrow="For companies running on EOS"
        title={<>Make the &ldquo;Capacity&rdquo; box real.</>}
      >
        GWC is the heart of your People Analyzer. But{" "}
        <strong className="text-paper">
          Capacity gets treated as a yes/no checkbox
        </strong>{" "}
        — and that blind spot is where great hires fail, Rocks slip, and growth
        stalls. Prove measures the behavioral truth of capacity, so you place
        people on evidence, not a hunch.
      </PageHero>

      {/* EOS asks / Prove answers */}
      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-[18px] border border-edge-light bg-white p-8">
              <div className="eyebrow text-content-faint">EOS asks</div>
              <h2 className="mb-5 mt-3 font-display text-[26px] font-bold tracking-[-.02em]">
                Do they have capacity?
              </h2>
              <div className="flex flex-col gap-3.5">
                {GWC.map((r) => (
                  <div key={r.k} className="flex gap-3.5">
                    <span
                      className={`font-display text-[17px] font-bold ${r.red ? "text-signal-red" : "text-green"}`}
                    >
                      {r.k}
                    </span>
                    <span className="text-[15px] text-content-muted">
                      <strong>{r.label}</strong> {r.desc}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mb-0 mt-5 text-[14px] leading-[1.55] text-content-faint">
                Capacity is dynamic — it shifts with life stage, bandwidth, and
                unseen stress. A checkbox can&rsquo;t see that.
              </p>
            </div>

            <div className="rounded-[18px] bg-ink p-8 text-paper on-dark">
              <div className="eyebrow text-green-soft">Prove answers</div>
              <h2 className="mb-5 mt-3 font-display text-[26px] font-bold tracking-[-.02em]">
                Capacity for what — right now?
              </h2>
              <div className="flex flex-col gap-3.5">
                {CQ_ROWS.map((r) => (
                  <div key={r.label} className="flex items-baseline gap-3.5">
                    <span className="min-w-[110px] font-display text-[15px] font-bold text-green-soft">
                      {r.label}
                    </span>
                    <span className="text-[15px] text-[#B8B4A6]">{r.desc}</span>
                  </div>
                ))}
              </div>
              <p className="mb-0 mt-5 text-[14px] leading-[1.55] text-content-faint">
                Measured from real behavior — so you see if someone can actually
                deliver now, not just in theory.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Real quarterly conversation quote */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="rounded-[18px] border-l-4 border-green bg-paper-2 p-8 sm:p-10">
            <div className="eyebrow mb-4 text-green">
              From a real Quarterly Conversation
            </div>
            <p className="m-0 font-display text-[20px] font-medium italic leading-[1.5] sm:text-[24px]">
              &ldquo;We were about to promote a technician who looked perfect. His
              CQ showed high applied grit and learnability, but low initiative. In
              the conversation, he admitted he didn&rsquo;t want the added
              responsibility right now. We avoided a costly mis-promotion — and
              kept him engaged in the right seat.&rdquo;
            </p>
          </div>
        </Container>
      </Section>

      {/* Leaders + implementers */}
      <Section tone="ink">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            <div>
              <Eyebrow tone="soft">For EOS leaders</Eyebrow>
              <h2 className="mb-5 mt-3.5 font-display text-[28px] font-bold tracking-[-.02em]">
                Discipline, meet data.
              </h2>
              <ul className="m-0 flex list-none flex-col gap-3 p-0 text-[16px] text-[#B8B4A6]">
                {LEADER_POINTS.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="text-green-soft">✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow tone="soft">For EOS Implementers</Eyebrow>
              <h2 className="mb-5 mt-3.5 font-display text-[28px] font-bold tracking-[-.02em]">
                The capacity tool you&rsquo;ve never had.
              </h2>
              <p className="m-0 mb-5 text-[16px] leading-[1.6] text-[#B8B4A6]">
                You hit &ldquo;capacity issues&rdquo; in every session with no way
                to measure them. Prove plugs directly into the People Analyzer
                conversation — hard behavioral data to pair with your EOS
                discipline.
              </p>
              <Link href="/work-with-us" className="font-bold text-green-soft">
                Partner with us &rarr;
              </Link>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-[820px] text-center text-[13.5px] leading-[1.6] text-content-faint">
            Prove works alongside EOS® and is independent of, and not affiliated
            with or endorsed by, EOS Worldwide. EOS®, GWC™ and People Analyzer™
            are trademarks of their respective owners.
          </p>
        </Container>
      </Section>

      {/* Go deeper */}
      <Section tone="paper">
        <Container>
          <h2 className="mb-8 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Go deeper on EOS + Prove
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {DEEPER.map((d) => (
              <Link
                key={d.title}
                href={d.href}
                className="rounded-[18px] border border-edge-light bg-white p-7 transition-colors hover:border-green"
              >
                <h3 className="mb-2 text-[18px] font-bold">{d.title}</h3>
                <p className="m-0 text-[15px] leading-[1.55] text-[#615B4F]">
                  {d.body}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection title="Add capacity clarity to your EOS system.">
        Book a call — we&rsquo;ll show you how Prove slots into your next People
        Analyzer and Quarterly Conversation.
      </CTASection>

      <Footer />
    </>
  );
}
