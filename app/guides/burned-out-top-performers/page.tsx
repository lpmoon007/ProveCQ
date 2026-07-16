import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Why Your Best People Are Burning Out (It is Not the Workload)",
  description:
    "Top performers rarely burn out from hours — they burn out from carrying passengers and watching drift go unaddressed. Learn the real cause and how to protect your best people.",
};

const DRIVERS = [
  {
    n: "01",
    title: "Carrying passengers",
    body: "Your best absorb the work others drop — and resent it long before they say so.",
  },
  {
    n: "02",
    title: "Unaddressed drift",
    body: "They watch coasting go unmanaged and conclude effort does not matter here.",
  },
  {
    n: "03",
    title: "No shared standard",
    body: "Without a visible commitment signal, the load falls on whoever cares most.",
  },
];

const KEEP = [
  {
    title: "Make commitment visible",
    body: "A behavioral signal shows who is really contributing — and who is not.",
  },
  {
    title: "Act on drift early",
    body: "Coach or clear passengers so your best are not silently subsidizing them.",
  },
];

export default function BurnedOutGuidePage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › Best people burning out"
        eyebrow="Retention"
        title="Why your best people are burning out."
      >
        It is tempting to blame the workload. But high performers rarely break
        from hours &mdash; they break from carrying people who coast, and from
        watching drift go unaddressed while they pick up the slack.
      </PageHero>

      <Section tone="paper" className="!pb-0">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink p-8 text-paper on-dark sm:p-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Your best people burn out surrounded by inaction: deadweight they
              compensate for, and a lack of accountability they can see but not
              fix. Protect them by making commitment visible &mdash; so the load
              is shared fairly and passengers get addressed, not ignored.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The real drivers of top-performer burnout
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {DRIVERS.map((c) => (
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
              How to keep them
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {KEEP.map((c) => (
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

      <CTASection title="Protect the people who carry you.">
        Book a call to see how Prove makes commitment visible and shares the load
        fairly.
      </CTASection>

      <Footer />
    </>
  );
}
