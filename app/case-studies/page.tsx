import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Case Studies — Behavior Change That Moved the Business",
  description:
    "Real leadership patterns that created measurable operating constraints — and what changed when the behavior did. How the Commitment Quotient exposes why capable people underdeliver, and how targeted behavior change shows up in decisions, accountability, and execution.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Case studies"
        eyebrow="Behavior change that moved the business"
        title={
          <>
            When a capable person still underdelivers, it&rsquo;s a pattern
            &mdash; not a mystery.
          </>
        }
      >
        Each of these shows the same arc: a specific leadership behavior created
        a measurable operating constraint, we exposed the pattern, changed a
        limited set of behaviors, and the organization felt the difference in
        decisions, accountability, and execution.
      </PageHero>

      <Section tone="paper">
        <Container wide>
          <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-[18px] md:grid-cols-2">
            <Link
              href="/case-studies/accountability"
              className="block rounded-[20px] border border-edge-light bg-white p-8 text-content"
            >
              <div className="mb-3 text-[12px] font-bold uppercase tracking-[.12em] text-green">
                Applied Grit, overextended
              </div>
              <h2 className="mb-2.5 font-display text-[24px] font-bold leading-[1.15] tracking-[-.01em]">
                From driving results to building accountability
              </h2>
              <p className="m-0 mb-4 text-[15px] leading-[1.6] text-[#575249]">
                A high-grit functional leader who protected results by taking
                over &mdash; and unintentionally taught her team not to own the
                work.
              </p>
              <span className="text-[14px] font-bold text-green">
                Read the case &rarr;
              </span>
            </Link>

            <Link
              href="/case-studies/ownership"
              className="block rounded-[20px] border border-edge-light bg-white p-8 text-content"
            >
              <div className="mb-3 text-[12px] font-bold uppercase tracking-[.12em] text-green">
                Initiative, missing under ambiguity
              </div>
              <h2 className="mb-2.5 font-display text-[24px] font-bold leading-[1.15] tracking-[-.01em]">
                From reliable executor to enterprise leader
              </h2>
              <p className="m-0 mb-4 text-[15px] leading-[1.6] text-[#575249]">
                A dependable operations leader who rarely moved before consensus
                &mdash; and how visible ownership changed how fast the
                organization ran.
              </p>
              <span className="text-[14px] font-bold text-green">
                Read the case &rarr;
              </span>
            </Link>

            <Link
              href="/case-studies/snapshot"
              className="block rounded-[20px] border border-edge-dark bg-ink p-8 text-paper on-dark"
            >
              <div className="mb-3 text-[12px] font-bold uppercase tracking-[.12em] text-green-soft">
                The deliverable itself
              </div>
              <h2 className="mb-2.5 font-display text-[24px] font-bold leading-[1.15] tracking-[-.01em]">
                A sample CQ Snapshot report
              </h2>
              <p className="m-0 mb-4 text-[15px] leading-[1.6] text-[#B8B4A6]">
                See exactly what you receive: three HVAC technicians scored on
                Initiative, Applied Grit, and Learnability &mdash; with zones and
                a leadership move for each.
              </p>
              <span className="text-[14px] font-bold text-green-soft">
                See the report &rarr;
              </span>
            </Link>
          </div>
          <p className="mx-auto mt-[22px] max-w-[1000px] text-center text-[12.5px] text-[#8A8474]">
            Cases are anonymized and generalized to protect client
            confidentiality. CQ is used for development and investment decisions,
            not as a basis for adverse employment action.
          </p>
        </Container>
      </Section>

      <CTASection title="Find the pattern on your team.">
        A Prove cycle exposes why a capable person isn&rsquo;t delivering the
        ownership you need &mdash; before it costs you.
      </CTASection>

      <Footer />
    </>
  );
}
