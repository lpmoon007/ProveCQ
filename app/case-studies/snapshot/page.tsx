import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Sample Deliverable: A CQ Snapshot Report",
  description:
    "See the actual deliverable: a sample CQ Snapshot scoring a team of HVAC technicians on Initiative, Applied Grit, and Learnability — with zones, profiles, and a recommended leadership move for each person. A behavioral read for development and investment decisions.",
};

const ARTICLE_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sample Deliverable: A CQ Snapshot Report",
  author: { "@type": "Organization", name: "Be Legendary" },
  publisher: { "@type": "Organization", name: "Be Legendary" },
  about:
    "An example of the CQ Snapshot deliverable, scoring team members on Initiative, Applied Grit, and Learnability with recommended leadership moves.",
};

const ROWS = [
  {
    name: "Dana P.",
    init: "9.0",
    grit: "8.0",
    learn: "8.0",
    cq: "8.3",
    cqColor: "#2E9E5B",
    zone: "Green",
    zoneBg: "#173A2A",
    zoneColor: "#8FD6AC",
  },
  {
    name: "Chris L.",
    init: "5.5",
    grit: "7.5",
    learn: "7.0",
    cq: "6.7",
    cqColor: "#E0A73E",
    zone: "Yellow",
    zoneBg: "#3A310F",
    zoneColor: "#E8C878",
  },
  {
    name: "Mark R.",
    init: "3.5",
    grit: "5.0",
    learn: "4.0",
    cq: "4.2",
    cqColor: "#D0492E",
    zone: "Red",
    zoneBg: "#3A1712",
    zoneColor: "#E9A08C",
  },
];

const PROFILES = [
  {
    name: "Dana P.",
    badge: "Green · 8.3",
    badgeBg: "#E3F0E7",
    badgeColor: "#1F8B57",
    profile:
      "High across all traits. Consistently steps in without prompting, even when things are unclear. Strong investment signal.",
    move: "Promote or stretch into a high-autonomy role with continued support.",
    caution: "Avoid burnout — grow scope at a sustainable pace.",
  },
  {
    name: "Chris L.",
    badge: "Yellow · 6.7",
    badgeBg: "#FBF0DA",
    badgeColor: "#B5822A",
    profile:
      "Good Applied Grit, but Initiative drops under pressure. May need role clarity and coaching before a leadership promotion.",
    move: "Coach with targeted role clarity and short-cycle stretch projects.",
    caution: "Without coaching, risks stalling in mid-range performance.",
  },
  {
    name: "Mark R.",
    badge: "Red · 4.2",
    badgeBg: "#FBE3DC",
    badgeColor: "#C0492F",
    profile:
      "Low Initiative and Learnability. Often waits for direction when situations are unclear.",
    move: "Best suited to structured roles with clear, predictable workflows.",
    caution:
      "Promotion into ambiguity-heavy roles would likely fail without significant scaffolding.",
  },
];

const COLS = "1.3fr .8fr .8fr .8fr .7fr .9fr";

export default function CaseStudySnapshotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }}
      />
      <Nav />
      <PageHero
        crumb="Case studies › A CQ Snapshot, exactly as you'd receive it"
        eyebrow="The deliverable, in full"
        title="A CQ Snapshot, exactly as you'd receive it"
      >
        This is a sample report for a team of HVAC technicians facing a promotion
        decision. Three people, three behaviors, one clear read on who&rsquo;s
        ready for more scope &mdash; and who needs structure first.
      </PageHero>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[820px]">
            {/* how to read */}
            <div className="rounded-xl border-l-4 border-green bg-paper-2 p-[24px_28px]">
              <div className="mb-2 text-[13px] font-bold uppercase tracking-[.1em] text-green">
                How to read it
              </div>
              <p className="m-0 mb-2.5 text-[16px] leading-[1.6] text-[#2A261D]">
                CQ scores three behaviors under pressure, each 1&ndash;10 &mdash;{" "}
                <strong>Initiative</strong> (who acts without being told),{" "}
                <strong>Applied Grit</strong> (who stays with it when it&rsquo;s
                hard), and <strong>Learnability</strong> (who adapts and grows).
                The CQ Score is the average.
              </p>
              <div className="flex flex-wrap gap-[18px] text-[14.5px] font-semibold text-[#2A261D]">
                <span>&#128994; Green &mdash; ready for more scope</span>
                <span>&#128993; Yellow &mdash; growth potential with coaching</span>
                <span>&#128308; Red &mdash; needs structure before a stretch</span>
              </div>
            </div>

            {/* scoreboard */}
            <div className="mt-10 overflow-x-auto">
              <div className="min-w-[560px] overflow-hidden rounded-2xl border border-[#262319] bg-[#0E0D09]">
                <div className="border-b border-[#1E1B13] p-[18px_22px]">
                  <span className="font-display text-[16px] font-bold text-paper">
                    CQ Snapshot &mdash; HVAC Technicians
                  </span>
                </div>
                <div
                  className="grid p-[14px_22px] text-[11px] font-bold uppercase tracking-[.04em] text-[#6E6A5C]"
                  style={{ gridTemplateColumns: COLS }}
                >
                  <span>Technician</span>
                  <span className="text-center">Init.</span>
                  <span className="text-center">A. Grit</span>
                  <span className="text-center">Learn</span>
                  <span className="text-center">CQ</span>
                  <span className="text-center">Zone</span>
                </div>
                {ROWS.map((r) => (
                  <div
                    key={r.name}
                    className="grid items-center border-t border-[#1E1B13] p-[15px_22px] text-[14.5px] text-[#E8E4D6]"
                    style={{ gridTemplateColumns: COLS }}
                  >
                    <span className="font-semibold">{r.name}</span>
                    <span className="text-center">{r.init}</span>
                    <span className="text-center">{r.grit}</span>
                    <span className="text-center">{r.learn}</span>
                    <span
                      className="text-center font-display font-bold"
                      style={{ color: r.cqColor }}
                    >
                      {r.cq}
                    </span>
                    <span className="text-center">
                      <span
                        className="rounded-full px-[9px] py-[3px] text-[11.5px] font-bold"
                        style={{ background: r.zoneBg, color: r.zoneColor }}
                      >
                        {r.zone}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* profiles */}
            <div className="mt-9 flex flex-col gap-4">
              {PROFILES.map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl border border-edge-light bg-white p-[26px_28px]"
                >
                  <div className="mb-2.5 flex items-center gap-3">
                    <span className="font-display text-[19px] font-bold">
                      {p.name}
                    </span>
                    <span
                      className="rounded-full px-2.5 py-[3px] text-[12px] font-bold"
                      style={{ background: p.badgeBg, color: p.badgeColor }}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <p className="m-0 mb-2.5 text-[15.5px] leading-[1.6] text-[#575249]">
                    <strong>Profile:</strong> {p.profile}
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-[10px] bg-[#F3F8F5] p-[14px_16px]">
                      <div className="mb-1 text-[12px] font-bold uppercase tracking-[.05em] text-green">
                        Leadership move
                      </div>
                      <div className="text-[14px] leading-[1.5] text-[#3A362C]">
                        {p.move}
                      </div>
                    </div>
                    <div className="rounded-[10px] bg-[#FBF6EE] p-[14px_16px]">
                      <div className="mb-1 text-[12px] font-bold uppercase tracking-[.05em] text-[#B5822A]">
                        Caution
                      </div>
                      <div className="text-[14px] leading-[1.5] text-[#3A362C]">
                        {p.caution}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* fair use */}
            <div className="mt-5 rounded-2xl bg-ink p-[26px_28px] text-[#B8B4A6] on-dark">
              <div className="mb-2.5 font-display text-[15px] font-bold text-green-soft">
                Low CQ &ne; low performance
              </div>
              <p className="m-0 mb-2.5 text-[14.5px] leading-[1.65]">
                Some of your best people will score lower on CQ. It measures
                behavioral readiness under pressure &mdash; not talent, skill, or
                worth. A low score simply signals someone may need more structure,
                clarity, or support before stepping into a higher-scope or
                leadership role; many thrive in well-defined roles.
              </p>
              <p className="m-0 text-[13px] leading-[1.6] text-[#7C7767]">
                This report is a confidential behavioral snapshot for leadership
                development, coaching focus, and investment decisions only. It is{" "}
                <strong>not</strong> a performance review and is not to be used as
                the sole basis for termination, demotion, or other adverse
                employment actions.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection title="Get this read on your team.">
        A Prove cycle turns a promotion you&rsquo;re unsure about into a decision
        you can defend.
      </CTASection>

      <Section tone="paper" className="!py-10 text-center">
        <Container>
          <Link
            href="/case-studies"
            className="text-[14.5px] font-semibold text-green"
          >
            &larr; All case studies
          </Link>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
