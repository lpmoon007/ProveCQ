import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "How to Measure Capacity in EOS (Beyond the GWC Checkbox)",
  description:
    "In EOS, Capacity in GWC is treated as a yes/no checkbox. Learn how to actually measure capacity behaviorally so your People Analyzer and Quarterly Conversations run on data.",
};

const FAILS = [
  {
    n: "01",
    title: "Capacity is dynamic",
    body: "It shifts with life stage, bandwidth, and unseen stress. A one-time yes/no cannot capture that.",
  },
  {
    n: "02",
    title: "It gets confused with GW",
    body: "Leaders mark Capacity down when they really mean the person does not Get it or Want it — muddying the whole analyzer.",
  },
];

const MEASURE = [
  {
    title: "Initiative",
    body: "Acts on the seat without being pushed.",
  },
  {
    title: "Applied Grit",
    body: "Delivers the hard parts of the role, not just the easy ones.",
  },
  {
    title: "Learnability",
    body: "Grows into rising demands as the company scales.",
  },
];

export default function MeasureCapacityEosGuidePage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › Measuring EOS capacity"
        eyebrow="For EOS leaders"
        title={<>How to measure capacity in EOS &mdash; beyond the checkbox.</>}
      >
        GWC is the heart of the People Analyzer, but Capacity gets scored as a
        gut-feel yes or no. That blind spot is where great hires stall and Rocks
        slip. Here is how to make it measurable.
      </PageHero>

      <Section tone="paper" className="!pb-0">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink p-8 text-paper on-dark sm:p-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Capacity is not one thing and it is not static &mdash; it is the
              behavioral ability to deliver a specific role right now. Measure it
              as Initiative, Applied Grit, and Learnability from observed behavior,
              and the Capacity box becomes real data you can bring to Quarterly
              Conversations.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[860px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Why the checkbox fails
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {FAILS.map((c) => (
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
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            What to measure instead
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {MEASURE.map((c) => (
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
          <p className="mt-6 text-[13px] leading-[1.6] text-[#8A8474]">
            Prove works alongside EOS&reg; and is independent of, and not
            affiliated with or endorsed by, EOS Worldwide. EOS&reg;, GWC&trade; and
            People Analyzer&trade; are trademarks of their respective owners.{" "}
            <Link href="/for-eos" className="text-green">
              See the full EOS fit &rarr;
            </Link>
          </p>
        </Container>
      </Section>

      <CTASection title="Make the Capacity box real.">
        Book a call to see how Prove plugs into your People Analyzer and Quarterly
        Conversations.
      </CTASection>

      <Footer />
    </>
  );
}
