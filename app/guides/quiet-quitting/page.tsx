import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";

export const metadata: Metadata = {
  title: "Signs an Employee Is Quietly Checking Out (Before They Leave)",
  description:
    "Quiet quitting and disengagement are behavioral, not verbal. Learn the early signs an employee is coasting or checking out — and how to catch drift before it costs you.",
  alternates: { canonical: "/guides/quiet-quitting" },
};

const TELLS = [
  {
    n: "01",
    title: "Initiative flatlines",
    body: "They do exactly what is asked and nothing more. The extra mile disappears quietly.",
  },
  {
    n: "02",
    title: "Follow-through slips",
    body: "Commitments are met later, partially, or with more reminders than before.",
  },
  {
    n: "03",
    title: "Curiosity fades",
    body: "They stop asking questions, proposing ideas, or engaging with what is changing.",
  },
];

const SURVEYS = [
  {
    title: "Self-report lags reality",
    body: "People answer engagement surveys the way they think they should — the behavior tells the truth sooner.",
  },
  {
    title: "Averages hide individuals",
    body: "A healthy team score can mask two or three quietly checked-out players who matter most.",
  },
];

export default function QuietQuittingGuidePage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › Quiet quitting"
        eyebrow="Disengagement"
        title="The signs an employee is quietly checking out."
      >
        Your retention numbers can look fine while your team quietly disengages.
        People stay for security and coast &mdash; and by the time it shows up in
        results, momentum is already gone.
      </PageHero>

      <ArticleMeta
        headline="The signs an employee is quietly checking out."
        description="Quiet quitting and disengagement are behavioral, not verbal. Learn the early signs an employee is coasting or checking out — and how to catch drift before it costs you."
        canonical="/guides/quiet-quitting"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Quiet quitting", url: "/guides/quiet-quitting" },
        ]}
      />

      <Section tone="paper" className="!pb-0">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink p-8 text-paper on-dark sm:p-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Disengagement shows up in behavior long before it shows up in a
              resignation: initiative drops, follow-through slips, and curiosity
              fades. The fix is not another survey &mdash; it is a behavioral
              signal you track over time, so drift is visible early enough to
              coach or act.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The early behavioral tells
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {TELLS.map((c) => (
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
              Why surveys miss it
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {SURVEYS.map((c) => (
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

      <CTASection title="See who is really committed.">
        Book a call and we will show you how Prove surfaces drift before it
        becomes turnover.
      </CTASection>

      <RelatedGuides current="/guides/quiet-quitting" />
      <Footer />
    </>
  );
}
