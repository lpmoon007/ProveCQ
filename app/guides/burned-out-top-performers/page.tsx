import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";

export const metadata: Metadata = {
  title: "Why Your Best People Are Burning Out (It is Not the Workload)",
  description:
    "Top performers rarely burn out from hours — they burn out from carrying passengers and watching drift go unaddressed. Learn the real cause and how to protect your best people.",
  alternates: { canonical: "/guides/burned-out-top-performers" },
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

// Actionable checklist — GEO "how to" structure for protecting top performers.
const PROTECT = [
  "Name the load. Look honestly at who absorbs the dropped work on your team — it is usually the same two or three people every time — and say it out loud instead of quietly relying on it.",
  "Make contribution visible. Replace impressions with a shared behavioral signal so effort is measured the same way for everyone, not felt only by the people carrying the most.",
  "Address drift on a clock, not a hunch. When someone is coasting, coach them with a specific expectation and a date — or move them — rather than letting it run until your best people notice first.",
  "Redistribute the invisible work. Reassign the ownerless tasks your top performers keep inheriting, so the load reflects the roles you actually designed.",
  "Tell your best people what you did. Burnout deepens when effort feels unseen; showing them the passenger got addressed does more for retention than any perk.",
  "Protect their upside, not just their output. Give proven people room to grow instead of only more to carry — the reward for reliability should not be a heavier pack.",
];

// FAQ — the format AI answer engines extract and cite.
const FAQ = [
  {
    q: "Why do top performers burn out?",
    a: "Top performers rarely burn out from hours alone. They burn out from the environment around the hours: absorbing work that others drop, watching coasting go unaddressed, and concluding that effort is not really rewarded or even noticed here. The load quietly falls on whoever cares most, and the person who cares most is usually your best. It is a fairness and accountability problem far more often than a workload problem.",
  },
  {
    q: "Is burnout caused by workload or something else?",
    a: "Workload is the visible symptom, not usually the root cause. Two people can carry the same hours and only one burns out — the difference is whether the effort feels shared and seen. When a top performer is compensating for passengers and watching drift go unmanaged, the same workload becomes corrosive. Cutting hours without fixing the fairness problem tends to buy a short reprieve, not a real recovery.",
  },
  {
    q: "How do you keep your best people from burning out?",
    a: "Make commitment visible so contribution is measured the same way for everyone, act on drift early with a specific expectation and a date rather than letting it linger, and redistribute the ownerless work your best people keep inheriting. Then close the loop by showing them the problem was addressed. The goal is to stop your top performers from silently subsidizing everyone else.",
  },
  {
    q: "What are the warning signs a top performer is close to burning out?",
    a: "Watch for a shift in tone before a drop in output — the work stays good while the person goes quiet. Enthusiasm narrows to only what is required, they stop raising problems they used to flag, they withdraw from work that is not strictly theirs, and small frustrations about fairness start to surface. By the time output falls, the disengagement is usually well advanced, which is why the tone change matters more than the metrics.",
  },
  {
    q: "How is protecting top performers different from managing underperformers?",
    a: "They are two ends of the same accountability gap. Underperformance that goes unaddressed does not only cost that person's output — it lands as extra load and lost trust on the people carrying the team. Managing drift early is itself an act of protecting your best people. A shared standard for who is really contributing lets you do both from the same signal instead of guessing.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function BurnedOutGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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

      <ArticleMeta
        headline="Why your best people are burning out."
        description="Top performers rarely burn out from hours — they burn out from carrying passengers and watching drift go unaddressed. Learn the real cause and how to protect your best people."
        canonical="/guides/burned-out-top-performers"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          {
            name: "Best people burning out",
            url: "/guides/burned-out-top-performers",
          },
        ]}
      />

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
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Burnout is an accountability problem, not an hours problem
            </h2>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              Burnout among top performers is the exhaustion that comes from
              carrying a system that does not hold everyone to the same standard.
              It is easy to read it as overwork and respond with time off or a
              lighter quarter. But two people can work the same hours and only one
              breaks &mdash; the difference is rarely the load itself. It is whether
              the load feels fair, shared, and seen. Your best people do not resent
              hard work. They resent doing it next to someone who is coasting while
              nothing changes.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              The mechanism is quiet and predictable. Work gets dropped, and it
              flows to whoever cares most about the outcome &mdash; which is your
              top performer, every time. They absorb it because they can, and
              because asking would feel like complaining. Meanwhile they watch drift
              go unmanaged and draw the obvious conclusion: effort is optional here,
              and mine is subsidizing everyone else&rsquo;s. That conclusion, not the
              extra hours, is what corrodes commitment. By the time output drops,
              the disengagement is usually well advanced.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              The fix is not to protect your best people from work &mdash; it is to
              stop making them the invisible backstop for a missing standard. When
              contribution is measured the same way for everyone, the load stops
              hiding, passengers get addressed instead of tolerated, and effort
              becomes visible enough to reward. That same visibility is what lets
              you find and grow the{" "}
              <Link href="/guides/high-potential-employees" className="font-semibold text-green underline-offset-2 hover:underline">
                high-potential people
              </Link>{" "}
              already carrying the team, rather than burning them out and replacing
              them.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to protect your best people
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Protecting top performers is mostly about fixing the fairness gap
              around them. A practical sequence:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {PROTECT.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                  {c}
                </li>
              ))}
            </ul>
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

      {/* FAQ — GEO citation block */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Top-performer burnout: FAQ
            </h2>
            <div className="flex flex-col gap-3">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-[14px] border border-edge-light bg-white px-6 py-4"
                >
                  <summary className="cursor-pointer list-none text-[17px] font-bold marker:content-none">
                    {f.q}
                  </summary>
                  <p className="m-0 mt-3 text-[15.5px] leading-[1.6] text-content-muted">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection title="Protect the people who carry you.">
        Book a call to see how Prove makes commitment visible and shares the load
        fairly.
      </CTASection>

      <RelatedGuides current="/guides/burned-out-top-performers" />
      <Footer />
    </>
  );
}
