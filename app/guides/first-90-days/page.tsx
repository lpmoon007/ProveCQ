import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";

export const metadata: Metadata = {
  title: "How to Use the First 90 Days to Prove a New Hire",
  description:
    "The first 90 days are your real interview. Learn how to use onboarding as a proving ground to confirm — or disprove — whether a new hire will deliver.",
  alternates: { canonical: "/guides/first-90-days" },
};

const WATCH = [
  {
    n: "01",
    title: "Initiative",
    body: "Do they find work and own it, or wait to be handed everything?",
  },
  {
    n: "02",
    title: "Follow-through",
    body: "Do early commitments get honored fully and on time?",
  },
  {
    n: "03",
    title: "Learnability",
    body: "Do they absorb feedback and improve week over week?",
  },
];

const SYSTEM = [
  {
    title: "Escalating real tasks",
    body: "Increase the stakes gradually so behavior is tested under rising pressure.",
  },
  {
    title: "Confirm or disprove the signal",
    body: "Compare what you saw in hiring to what they actually do — and act early either way.",
  },
];

export default function First90DaysGuidePage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › First 90 days"
        eyebrow="Onboarding"
        title="Use the first 90 days to prove a new hire."
      >
        The interview was a hypothesis. Onboarding is where you find out if it was
        true. Treated deliberately, the first 90 days become the most honest
        performance signal you will ever get on a new hire.
      </PageHero>

      <ArticleMeta
        headline="Use the first 90 days to prove a new hire."
        description="The first 90 days are your real interview. Learn how to use onboarding as a proving ground to confirm — or disprove — whether a new hire will deliver."
        canonical="/guides/first-90-days"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "First 90 days", url: "/guides/first-90-days" },
        ]}
      />

      <Section tone="paper" className="!pb-0">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink p-8 text-paper on-dark sm:p-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Structure onboarding as a proving ground: set escalating real tasks,
              watch initiative, follow-through, and learnability, and confirm the
              hiring signal with behavior. If someone will not show up in the first
              90 days, they will not show up when it counts.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            What to watch in the first 90 days
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {WATCH.map((c) => (
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
              Make it a system, not a vibe
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {SYSTEM.map((c) => (
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

      <CTASection title="Turn onboarding into proof.">
        Book a call to see how Prove runs during onboarding to validate new hires.
      </CTASection>

      <RelatedGuides current="/guides/first-90-days" />
      <Footer />
    </>
  );
}
