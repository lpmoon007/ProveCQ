import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Case Study: From Reliable Executor to Enterprise Leader",
  description:
    "A dependable operations leader rarely moved before consensus, returning unresolved issues to the executive team. How forming a position, sizing decisions by reversibility, and making ownership visible gave the organization speed without losing his collaborative style.",
};

const ARTICLE_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "From Reliable Executor to Enterprise Leader",
  author: { "@type": "Organization", name: "Be Legendary" },
  publisher: { "@type": "Organization", name: "Be Legendary" },
  about:
    "A leadership behavior-change case study: converting consensus-dependence into visible ownership and decisiveness.",
};

const SNAPSHOT = [
  { label: "Role", value: "Senior operations leader" },
  { label: "Constraint", value: "Wouldn't move before consensus" },
  { label: "Result", value: "Faster decisions, visible ownership" },
];

const CONSTRAINTS = [
  "Collaboration became dependence on external validation.",
  "Thoughtfulness became delayed decision-making.",
  "Emotional restraint made it hard for others to know what he believed.",
  "Strong analysis let him explain complexity without resolving it.",
  "Reliability made him valuable — but not yet trusted with ambiguity.",
];

const WORK = [
  {
    title: "1. Form a position before seeking input",
    body: "Before key conversations he documented what he believed, the supporting evidence, what was still uncertain, and what he'd decide if forced to decide alone. Input was still welcome — but no longer a substitute for judgment.",
  },
  {
    title: "2. Separate reversible and irreversible decisions",
    body: "Lower-risk, reversible calls were made faster and closer to the work; higher-risk, irreversible ones got more analysis and executive involvement. Not every decision needed complete certainty.",
  },
  {
    title: "3. Make ownership visible",
    body: "He ended discussions with a decision, a named owner, a deadline, and a follow-up point — and practiced stating disagreement directly, without excessive qualification.",
  },
];

const EVIDENCE = [
  "Decision turnaround time decreased.",
  "Fewer unresolved issues escalated to the executive team.",
  "Meetings ended with clearer ownership and deadlines.",
  "He initiated several improvements without being directed to.",
  "His manager expanded the scope of decisions he was authorized to make.",
  'Peer feedback shifted from "thoughtful and collaborative" to "clear, accountable, and willing to lead."',
];

export default function CaseStudyOwnershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }}
      />
      <Nav />
      <PageHero
        crumb="Case studies › From reliable executor to enterprise leader"
        eyebrow="Initiative, missing under ambiguity"
        title="From reliable executor to enterprise leader"
      >
        He could do almost anything he was assigned. What he wasn&rsquo;t yet
        doing was creating direction when none existed.
      </PageHero>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[720px]">
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
              A senior operations leader was dependable, intelligent, and highly
              collaborative. He consistently delivered what was assigned and kept
              good relationships across the org. The problem wasn&rsquo;t
              performance &mdash; it was that he rarely moved before alignment was
              complete.
            </p>
            <p className="m-0 text-[17px] leading-[1.7] text-[#3A362C]">
              As the company grew, his role required judgment calls, challenged
              assumptions, and direction without waiting for consensus. Instead he
              gathered more input, deferred hard decisions, and returned
              unresolved issues to the executive team. His manager described
              someone who could &ldquo;do almost anything&rdquo; but wasn&rsquo;t
              consistently showing the ownership expected at the next level.
            </p>

            <h2 className="mb-3 mt-9 font-display text-[26px] font-bold tracking-[-.02em]">
              The leadership constraint
            </h2>
            <p className="m-0 mb-3 text-[17px] leading-[1.7] text-[#3A362C]">
              His natural strengths had become limiting:
            </p>
            <ul className="m-0 mb-3.5 list-disc pl-5 text-[16.5px] leading-[1.7] text-[#3A362C]">
              {CONSTRAINTS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="m-0 text-[17px] leading-[1.7] text-[#3A362C]">
              He wasn&rsquo;t disengaged or resistant. He lacked a repeatable
              method for forming and expressing his own position when certainty
              wasn&rsquo;t available &mdash; a gap in demonstrated{" "}
              <strong>Initiative</strong> under ambiguity.
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
            <p className="m-0 text-[17px] leading-[1.7] text-[#3A362C]">
              The organization gained operating speed without sacrificing his
              collaborative style. He didn&rsquo;t become louder, more aggressive,
              or less analytical &mdash; he used those strengths in service of
              judgment rather than as protection from being wrong. The result: a
              leader who stayed measured and collaborative, but could now create
              direction when it didn&rsquo;t already exist.
            </p>

            <div className="mt-7 rounded-xl border-l-4 border-green bg-paper-2 p-[24px_28px]">
              <div className="mb-2 text-[13px] font-bold uppercase tracking-[.1em] text-green">
                The principle
              </div>
              <p className="m-0 text-[18px] leading-[1.6] text-[#2A261D]">
                Leadership development isn&rsquo;t primarily about increasing
                self-awareness. It&rsquo;s about converting awareness into
                observable behavior that changes how the organization operates.
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

      <CTASection title="Waiting on someone to finally step up?">
        See whether it&rsquo;s a capability gap or a behavior pattern &mdash;
        before you promote, or pass them over.
      </CTASection>

      <Section tone="paper" className="!py-10 text-center">
        <Container>
          <Link
            href="/case-studies/accountability"
            className="text-[14.5px] font-semibold text-green"
          >
            &larr; Previous case: from driving results to building accountability
          </Link>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
