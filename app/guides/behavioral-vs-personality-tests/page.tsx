import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";

export const metadata: Metadata = {
  title:
    "Behavioral Assessment vs. Personality Test: What is the Difference?",
  description:
    "Personality tests measure who someone says they are; behavioral assessment measures what they actually do. Learn the difference and why behavior predicts performance.",
  alternates: { canonical: "/guides/behavioral-vs-personality-tests" },
};

const PERSONALITY = [
  "Self-reported",
  "Easy to game or second-guess",
  "One moment in time",
  "Describes traits, not results",
  "No follow-through signal",
];

const BEHAVIORAL = [
  "Observed behavior",
  "Hard to fake under real demand",
  "40+ datapoints over six weeks",
  "Measures action and follow-through",
  "Re-run to catch drift",
];

export default function BehavioralVsPersonalityGuidePage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › Behavioral vs. personality"
        eyebrow="How it works"
        title="Behavioral assessment vs. personality test."
      >
        They get lumped together, but they are opposites. One asks people to
        describe themselves. The other watches what they do. Only one of those
        predicts whether someone will deliver.
      </PageHero>

      <ArticleMeta
        headline="Behavioral assessment vs. personality test."
        description="Personality tests measure who someone says they are; behavioral assessment measures what they actually do. Learn the difference and why behavior predicts performance."
        canonical="/guides/behavioral-vs-personality-tests"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          {
            name: "Behavioral vs. personality",
            url: "/guides/behavioral-vs-personality-tests",
          },
        ]}
      />

      <Section tone="paper" className="!pb-0">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink p-8 text-paper on-dark sm:p-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              A personality test is self-reported and easy to game &mdash; a paper
              exam for driving. A behavioral assessment scores observed action
              under real conditions &mdash; the test drive. For high-stakes people
              decisions, you want behavior, not a self-portrait.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[860px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Side by side
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-[16px] border border-edge-light bg-white p-[26px]">
                <div className="mb-3 font-display text-[14px] font-bold text-signal-red">
                  Personality test
                </div>
                <ul className="m-0 list-disc pl-[18px] text-[14.5px] leading-[1.75] text-[#615B4F]">
                  {PERSONALITY.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[16px] bg-ink p-[26px] text-paper on-dark">
                <div className="mb-3 font-display text-[14px] font-bold text-green-soft">
                  Behavioral assessment (Prove)
                </div>
                <ul className="m-0 list-disc pl-[18px] text-[14.5px] leading-[1.75] text-[#B8B4A6]">
                  {BEHAVIORAL.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection title="Bet on the test drive, not the paper exam.">
        Book a call to see behavioral proof on your own team.
      </CTASection>

      <RelatedGuides current="/guides/behavioral-vs-personality-tests" />
      <Footer />
    </>
  );
}
