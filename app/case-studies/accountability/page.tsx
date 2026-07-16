import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Case Study: From Driving Results to Building Accountability",
  description:
    "A high-grit functional leader protected results by taking over — creating a dependency loop that capped her team's accountability. How exposing the pattern and changing a few behaviors distributed ownership and freed her for strategic work.",
};

const ARTICLE_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "From Driving Results to Building Accountability",
  author: { "@type": "Organization", name: "Be Legendary" },
  publisher: { "@type": "Organization", name: "Be Legendary" },
  about:
    "A leadership behavior-change case study: converting overextended Applied Grit into distributed accountability.",
};

const SNAPSHOT = [
  { label: "Role", value: "Functional leader, high standards" },
  { label: "Constraint", value: "Protected results by taking over" },
  { label: "Result", value: "Ownership distributed & measurable" },
];

const CONSTRAINTS = [
  "High standards became overcontrol.",
  "Urgency became constant escalation.",
  "Directness became correction without context.",
  "Personal responsibility became responsibility for everyone.",
  "A commitment to results reduced the team's chance to build judgment.",
];

const WORK = [
  {
    title: "1. Define outcomes before evaluating execution",
    body: "She specified the required result, the owner's decision authority, the non-negotiable standards, the constraints, the checkpoints, and the consequences of failure — instead of holding those expectations only in her head.",
  },
  {
    title: "2. Replace takeover with structured intervention",
    body: "When work went off track: ask the owner to diagnose, require a proposed fix, clarify what they could decide independently, set a follow-up, and take control only when business risk justified it.",
  },
  {
    title: "3. Distinguish discomfort from danger",
    body: "She let work proceed differently from how she'd do it — intervening when the result, risk, or standard was compromised, not merely when the approach felt uncomfortable.",
  },
  {
    title: "4. Measure leadership through team capability",
    body: "Her success measures expanded to: decisions made without her, problems resolved at the right level, recurring errors, missed commitments, strength of proposed solutions, and time spent correcting others' work.",
  },
];

const EVIDENCE = [
  "Less time spent reworking team deliverables.",
  "More decisions made at the correct organizational level.",
  "Team members presenting stronger recommendations, not raw problems.",
  "Missed commitments became visible and easier to address.",
  "A previously inconsistent manager began running a major weekly process without her.",
  "She redirected time to strategic work that had been repeatedly postponed.",
];

export default function CaseStudyAccountabilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }}
      />
      <Nav />
      <PageHero
        crumb="Case studies › From driving results to building accountability"
        eyebrow="Applied Grit, overextended"
        title="From driving results to building accountability"
      >
        Her greatest strength &mdash; the will to make the outcome happen
        &mdash; had quietly become the reason her team wouldn&rsquo;t own it.
      </PageHero>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[720px]">
            {/* snapshot band */}
            <div className="mb-11 grid grid-cols-1 gap-3 md:grid-cols-3">
              {SNAPSHOT.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[14px] border border-edge-light bg-white p-[18px]"
                >
                  <div className="mb-1.5 text-[12px] font-bold uppercase tracking-[.06em] text-[#8A8474]">
                    {s.label}
                  </div>
                  <div className="text-[14.5px] font-semibold text-[#2A261D]">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mb-3 font-display text-[26px] font-bold tracking-[-.02em]">
              The situation
            </h2>
            <p className="m-0 mb-3.5 text-[17px] leading-[1.7] text-[#3A362C]">
              A functional leader had produced strong results for years. She
              worked quickly, held high standards, and had a low tolerance for
              missed commitments. When execution slowed, she stepped in. When
              work didn&rsquo;t meet her standard, she corrected it. When a team
              member struggled, she often took over.
            </p>
            <p className="m-0 mb-3.5 text-[17px] leading-[1.7] text-[#3A362C]">
              Her willingness to intervene helped the organization hit deadlines
              &mdash; but it also created a dependency loop. Team members learned
              she would eventually solve the problem, revise the work, or make
              the final decision. She experienced the team as insufficiently
              accountable; the team experienced her as difficult to satisfy and
              risky to disappoint. Both were partly true.
            </p>

            <h2 className="mb-3 mt-9 font-display text-[26px] font-bold tracking-[-.02em]">
              The leadership constraint
            </h2>
            <p className="m-0 mb-3 text-[17px] leading-[1.7] text-[#3A362C]">
              Her strongest trait was <strong>Applied Grit</strong> &mdash; she
              would keep working until the outcome was achieved. Overextended,
              that strength inverted:
            </p>
            <ul className="m-0 mb-3.5 list-disc pl-5 text-[16.5px] leading-[1.7] text-[#3A362C]">
              {CONSTRAINTS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="m-0 text-[17px] leading-[1.7] text-[#3A362C]">
              The issue was not that she cared too much about results. It was
              that her method of protecting results prevented others from owning
              them.
            </p>

            <h2 className="mb-3 mt-9 font-display text-[26px] font-bold tracking-[-.02em]">
              The work
            </h2>
            <div className="flex flex-col gap-3.5">
              {WORK.map((w) => (
                <div
                  key={w.title}
                  className="rounded-[14px] border border-edge-light bg-white p-[22px_24px]"
                >
                  <h3 className="m-0 mb-1.5 text-[17px] font-bold">{w.title}</h3>
                  <p className="m-0 text-[15.5px] leading-[1.6] text-[#575249]">
                    {w.body}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mb-3 mt-9 font-display text-[26px] font-bold tracking-[-.02em]">
              Evidence of progress
            </h2>
            <div className="rounded-2xl bg-ink p-[26px_28px] text-paper on-dark">
              <ul className="m-0 list-disc pl-5 text-[16px] leading-[1.8] text-[#D7D3C5]">
                {EVIDENCE.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>

            <h2 className="mb-3 mt-9 font-display text-[26px] font-bold tracking-[-.02em]">
              Business impact
            </h2>
            <p className="m-0 mb-3.5 text-[17px] leading-[1.7] text-[#3A362C]">
              The function became less dependent on one person&rsquo;s effort and
              judgment. Results improved &mdash; not because she became less
              demanding, but because accountability became more explicit, more
              distributed, and more measurable. She kept her intensity and
              standards; she stopped using personal intervention as the primary
              way to achieve them.
            </p>

            <div className="mt-7 rounded-xl border-l-4 border-green bg-paper-2 p-[24px_28px]">
              <div className="mb-2 text-[13px] font-bold uppercase tracking-[.1em] text-green">
                The principle
              </div>
              <p className="m-0 text-[18px] leading-[1.6] text-[#2A261D]">
                A leader isn&rsquo;t creating accountability when everyone
                depends on the leader to ensure the work gets done. Accountability
                exists when people understand the outcome, hold the authority to
                act, and experience the consequences of their decisions.
              </p>
            </div>
            <p className="m-0 mt-[22px] text-[13px] text-[#8A8474]">
              Anonymized and generalized to protect client confidentiality. CQ
              informs development and investment decisions, not adverse
              employment actions.
            </p>
          </div>
        </Container>
      </Section>

      <CTASection title="Is a strength quietly capping your team?">
        A Prove cycle surfaces the pattern before it costs you a year of stalled
        ownership.
      </CTASection>

      <Section tone="paper" className="!py-10 text-center">
        <Container>
          <Link
            href="/case-studies/ownership"
            className="text-[14.5px] font-semibold text-green"
          >
            Next case: from reliable executor to enterprise leader &rarr;
          </Link>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
