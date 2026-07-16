import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Section, ButtonLink } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "The 2026 State of Engagement — Why the Metric Is Broken (and What to Measure Instead)",
  description:
    "Engagement scores have barely moved in a decade while disengagement costs trillions. The 2026 State of Engagement report explains why the metric itself is broken for small and mid-sized companies — and makes the case for measuring commitment behavior instead.",
};

const STATS = [
  {
    n: "20%",
    color: "text-[#8FD6AC]",
    body: (
      <>
        of employees worldwide were engaged in 2025 &mdash; down from the 23%
        peak in 2022. <span className="text-[#6E6A5C]">(Gallup, 2026)</span>
      </>
    ),
  },
  {
    n: "$10T",
    color: "text-[#8FD6AC]",
    body: (
      <>
        estimated annual cost of low engagement &mdash; about 9% of global GDP.{" "}
        <span className="text-[#6E6A5C]">(Gallup, 2026)</span>
      </>
    ),
  },
  {
    n: "60%",
    color: "text-[#E5674C]",
    body: (
      <>
        of new managers fail within 24 months.{" "}
        <span className="text-[#6E6A5C]">(DDI)</span>
      </>
    ),
  },
  {
    n: "68%",
    color: "text-[#E5674C]",
    body: (
      <>
        of SMBs promote on past performance alone.{" "}
        <span className="text-[#6E6A5C]">(SHRM)</span>
      </>
    ),
  },
];

const BEHAVIORS = [
  { name: "Initiative", body: "Acts without being told." },
  { name: "Applied Grit", body: "Follows through when it’s hard." },
  { name: "Learnability", body: "Adapts and grows under new demands." },
];

export default function StateOfEngagementPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › 2026 State of Engagement"
        eyebrow="The 2026 report"
        title={<>The 2026 State of Engagement</>}
      >
        For a decade, companies have measured engagement harder than ever &mdash;
        and it has barely moved. The problem isn&rsquo;t effort. It&rsquo;s the
        metric. This report makes the case for what to measure instead:{" "}
        <strong className="text-paper">commitment behavior.</strong>
      </PageHero>

      {/* headline stats */}
      <Section tone="paper" className="!pb-5">
        <Container wide className="max-w-[1000px]">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.n}
                className="rounded-[16px] bg-ink p-[26px] text-paper on-dark"
              >
                <div
                  className={`font-display text-[38px] font-bold ${s.color}`}
                >
                  {s.n}
                </div>
                <p className="mt-2 text-[13.5px] leading-[1.5] text-[#B8B4A6]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-3 max-w-[1000px] text-[12.5px] text-[#8A8474]">
            Figures compiled from publicly published research (see References
            below). This report is Be Legendary&rsquo;s synthesis and field
            perspective on that data &mdash; not a proprietary survey. Statistics
            belong to their respective publishers.
          </p>
        </Container>
      </Section>

      <Section tone="paper" id="read" className="!py-11">
        <Container className="max-w-[720px]">
          <h2 className="mb-4 mt-0 font-display text-[32px] font-bold tracking-[-.02em]">
            1. The metric hasn&rsquo;t moved &mdash; because it measures the wrong
            thing.
          </h2>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            Global engagement peaked at 23% in 2022 and has slid to 20% &mdash;
            while companies have invested more in measuring it than ever.
            Engagement scores are built on sentiment (&ldquo;Do I have a best
            friend at work?&rdquo;) and context (&ldquo;Do I know what&rsquo;s
            expected of me?&rdquo;). Those are worth knowing. But they measure how
            people <em>feel</em> about their environment &mdash; not how they{" "}
            <em>behave</em> under pressure. A team can score well on engagement and
            still miss deadlines, dodge ownership, and stall when it gets hard. And
            it can score poorly while the quiet operators carry the company.
          </p>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            There&rsquo;s a tell most people miss: engagement has fallen for three
            years while the global economy kept growing. Analysts have started
            calling it the &ldquo;engagement paradox.&rdquo; If the metric were
            capturing what actually drives results, that gap couldn&rsquo;t
            persist. It can &mdash; because the metric and the outcome were never
            the same thing.
          </p>

          <h2 className="mb-4 mt-10 font-display text-[32px] font-bold tracking-[-.02em]">
            2. For SMBs, the stakes are sharper.
          </h2>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            Large companies can absorb a mis-hire or a stalled team. A
            75&ndash;200-person company cannot. When most SMBs hand over
            responsibility based on past performance, and a majority of new
            managers fail inside two years, the cost isn&rsquo;t a lower survey
            score &mdash; it&rsquo;s a six-figure mistake, a lost quiet-performer,
            and a founder pulled back into the weeds. Engagement dashboards
            don&rsquo;t catch any of that in time.
          </p>

          <div className="my-9 rounded-[18px] bg-ink px-[34px] py-[30px] text-paper on-dark">
            <p className="m-0 text-[19px] leading-[1.6] text-[#E8E4D6]">
              Engagement is like Newtonian physics: useful under ideal
              conditions. But teams now operate in relativistic systems &mdash;
              fast, high-pressure, ambiguous. We need to see what people do{" "}
              <span className="text-green-soft">when gravity shifts.</span>
            </p>
          </div>

          <h2 className="mb-4 mt-10 font-display text-[32px] font-bold tracking-[-.02em]">
            3. What to measure instead: commitment behavior.
          </h2>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            When it gets hard, ambiguous, or messy &mdash; who still delivers?
            That&rsquo;s not engagement; it&rsquo;s commitment, and it shows up in
            three observable behaviors:
          </p>
          <div className="mb-5 grid grid-cols-1 gap-3.5 md:grid-cols-3">
            {BEHAVIORS.map((b) => (
              <div
                key={b.name}
                className="rounded-[14px] border border-edge-light bg-white p-[22px]"
              >
                <div className="mb-1.5 font-display font-bold text-green">
                  {b.name}
                </div>
                <p className="m-0 text-[14px] leading-[1.5] text-[#615B4F]">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            Behavior is harder to fake than a survey response, and it&rsquo;s the
            thing that actually predicts who you can bet on. Measuring it &mdash;
            over time, under real pressure &mdash; is what the Commitment Quotient
            does.
          </p>

          <h2 className="mb-4 mt-10 font-display text-[32px] font-bold tracking-[-.02em]">
            4. The 2026 call to action.
          </h2>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            Keep running your engagement survey &mdash; it has its place. But stop
            making high-stakes people decisions on it. Before you hire, promote, or
            hand over the keys, add one behavioral signal you can trust. That
            single change is the difference between guessing and knowing &mdash;
            and in a tight market, certainty per dollar is the metric that matters.
          </p>
        </Container>
      </Section>

      {/* References */}
      <Section tone="paper" className="!py-5">
        <Container className="max-w-[720px]">
          <h2 className="m-0 mb-3.5 font-display text-[24px] font-bold tracking-[-.02em]">
            References
          </h2>
          <ol className="m-0 list-decimal pl-5 text-[13.5px] leading-[1.7] text-[#575249]">
            <li>
              Gallup. <em>State of the Global Workplace: 2026 Report.</em> Global
              engagement 20% in 2025 (down from 23% in 2022); low engagement costs
              ~$10 trillion, about 9% of global GDP; manager engagement fell from
              27% to 22%.
            </li>
            <li>
              Gallup. <em>State of the Global Workplace: 2025 Report.</em>{" "}
              Engagement fell from 23% to 21% in 2024 ($438B lost productivity that
              year); manager engagement 30%&rarr;27%; individual-contributor
              engagement flat at 18%; ~70% of the variance in team engagement is
              attributable to the manager.
            </li>
            <li>
              DDI, <em>Leadership Transitions Report.</em> ~60% of new managers
              underperform or fail within their first 24 months.
            </li>
            <li>
              SHRM (2022). ~68% of small businesses assign responsibility based
              primarily on past performance.
            </li>
            <li>
              Founder Institute (2022). Founders cite &ldquo;knowing who to
              trust&rdquo; as a top barrier to leadership decisions.
            </li>
            <li>
              Simpplr / industry analysis (2025). The &ldquo;engagement
              paradox&rdquo;: engagement declining while business performance holds
              &mdash; evidence that traditional engagement metrics are losing
              explanatory power.
            </li>
          </ol>
          <p className="mt-3.5 text-[12px] text-[#8A8474]">
            Third-party statistics are the property of their respective publishers
            and are cited here for commentary. Figures reflect the most recent
            editions available at publication and will be updated as new data is
            released.
          </p>
        </Container>
      </Section>

      {/* closing CTA */}
      <Section tone="paper" className="!pt-5">
        <Container className="max-w-[760px]">
          <div className="rounded-[22px] bg-green px-10 py-12 text-center text-white on-dark">
            <h2 className="m-0 mb-3.5 font-display text-[34px] font-bold tracking-[-.02em]">
              See it on your own team.
            </h2>
            <p className="m-0 mb-[26px] text-[17px] leading-[1.6] text-[#E4F5EB]">
              Take the free 2-minute Certainty Diagnostic, or book a call to see
              how Prove measures commitment behavior where it counts.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink
                href="/free-tools/certainty-diagnostic"
                variant="dark"
              >
                Take the diagnostic
              </ButtonLink>
              <ButtonLink
                href={site.bookingUrl}
                variant="on-green"
                className="!bg-transparent border-[1.5px] border-white !text-white hover:!bg-white/10"
              >
                Book a call
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
