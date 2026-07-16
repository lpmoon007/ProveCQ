import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Guides — People Decisions, Promotions, Hiring & Retention",
  description:
    "Practical guides for founders and CEOs on the hardest people decisions: who to promote, who to hire, how to measure commitment and capacity, and how to keep your best people. Behavioral proof over guesswork.",
};

/**
 * SEO/GEO top-of-funnel index (handoff §6). Each card links to its live article,
 * tool, or reference page.
 */
const GUIDES: { label: string; title: string; body: string; href: string; dark?: boolean }[] = [
  { label: "Promotions", title: "How to know who to promote", body: "Bet on proven behavior, not past performance.", href: "/guides/who-to-promote" },
  { label: "Promotions", title: "Why good employees fail after a promotion", body: "It is a capacity mismatch, not a character flaw.", href: "/guides/failed-promotion" },
  { label: "People decisions", title: "Promote from within, or hire outside?", body: "Let proof break the tie.", href: "/guides/promote-vs-hire" },
  { label: "Talent", title: "How to identify high-potential employees", body: "Potential is behavior, not this quarter's numbers.", href: "/guides/high-potential-employees" },
  { label: "Scaling", title: "Build a leadership bench before you need it", body: "Grow your next layer ahead of the crunch.", href: "/guides/leadership-bench" },
  { label: "Continuity", title: "Succession planning for small business", body: "Protect against key-person risk without a big HR team.", href: "/guides/succession-planning" },
  { label: "Hiring", title: "Hire people who actually follow through", body: "Screen for behavior, not charisma.", href: "/guides/hire-for-follow-through" },
  { label: "Hiring", title: "The real cost of a bad hire", body: "40–200% of salary — and how to avoid it.", href: "/guides/cost-of-a-bad-hire" },
  { label: "Onboarding", title: "Use the first 90 days to prove a new hire", body: "Onboarding is your real interview.", href: "/guides/first-90-days" },
  { label: "Measurement", title: "How to measure employee commitment", body: "Behavior over self-report.", href: "/guides/measure-commitment" },
  { label: "Retention", title: "Signs an employee is quietly checking out", body: "Catch drift before it becomes turnover.", href: "/guides/quiet-quitting" },
  { label: "Retention", title: "Why your best people are burning out", body: "It is not the workload — it is the passengers.", href: "/guides/burned-out-top-performers" },
  { label: "Founder leverage", title: "How to delegate with confidence", body: "Stop being the bottleneck.", href: "/guides/how-to-delegate" },
  { label: "For EOS", title: "How to measure capacity in EOS", body: "Beyond the GWC yes/no checkbox.", href: "/guides/measure-capacity-in-eos" },
  { label: "How it works", title: "Behavioral assessment vs. personality test", body: "The test drive beats the paper exam.", href: "/guides/behavioral-vs-personality-tests" },
  { label: "Point of view", title: "The problem isn't your people. It's the metric.", body: "Why engagement is the wrong measure — and what to track instead.", href: "/guides/its-the-metric", dark: true },
  { label: "2026 report", title: "The 2026 State of Engagement", body: "The metric is broken. Here's the case for measuring commitment.", href: "/guides/state-of-engagement", dark: true },
  { label: "Free tool", title: "The Certainty Diagnostic", body: "2 minutes: how much are you guessing about your people?", href: "/free-tools/certainty-diagnostic" },
  { label: "Free tool", title: "The 4 AM Test", body: "Will they deliver — or will you wake up wondering?", href: "/free-tools/4am-test" },
  { label: "Free tool", title: "Get to Green", body: "The full 146-point people-systems readiness map.", href: "/free-tools/get-to-green" },
  { label: "Calculator", title: "Cost of a bad bet", body: "Size what one wrong promotion or hire really costs you.", href: "/free-tools/cost-of-a-bad-bet" },
  { label: "Comparison", title: "CQ vs. engagement surveys", body: "Why feelings don't predict who delivers.", href: "/guides/cq-vs-engagement-surveys" },
  { label: "Reference", title: "Glossary", body: "Plain-English definitions of the key terms.", href: "/glossary" },
  { label: "Reference", title: "FAQ", body: "Straight answers to the most common questions.", href: "/faq" },
  { label: "Ethics", title: "What CQ is & isn't", body: "Behavioral, not psychometric — and never a judgment of worth.", href: "/ethics", dark: true },
];

export default function GuidesPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides"
        eyebrow="Guides"
        title="The hardest calls a leader makes are about people."
      >
        Practical, no-fluff guides on promotions, hiring, capacity, and retention —
        and how to make every one of them on proof instead of a gut feel.
      </PageHero>

      <Section tone="paper">
        <Container>
          {/* Featured banner */}
          <Link
            href="/free-tools/hidden-gem-identifier"
            className="mb-8 flex flex-col gap-2 rounded-[18px] bg-ink p-8 text-paper transition-colors on-dark hover:bg-ink-2 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div className="eyebrow mb-2 text-green-soft">Free tool</div>
              <h2 className="m-0 font-display text-[24px] font-bold tracking-[-.02em]">
                The Hidden Gem Identifier
              </h2>
              <p className="m-0 mt-1.5 text-[15px] text-[#B8B4A6]">
                Find the people you&rsquo;re about to overlook — the quiet
                performer and the overlooked striver. Free, 5 minutes.
              </p>
            </div>
            <span className="shrink-0 font-bold text-green-soft">
              Find your hidden gems &rarr;
            </span>
          </Link>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((g) => (
              <Link
                key={g.title}
                href={g.href}
                className={`rounded-[18px] p-6 transition-colors ${
                  g.dark
                    ? "bg-ink text-paper on-dark hover:bg-ink-2"
                    : "border border-edge-light bg-white hover:border-green"
                }`}
              >
                <div
                  className={`eyebrow mb-2.5 ${g.dark ? "text-green-soft" : "text-green"}`}
                >
                  {g.label}
                </div>
                <h3 className="mb-1.5 text-[17px] font-bold leading-[1.25]">
                  {g.title}
                </h3>
                <p
                  className={`m-0 text-[14px] leading-[1.5] ${g.dark ? "text-[#B8B4A6]" : "text-[#615B4F]"}`}
                >
                  {g.body}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection title="Stop guessing. Start betting on proof.">
        Book a 20-minute call and bring your hardest people decision.
      </CTASection>

      <Footer />
    </>
  );
}
