import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArticleMeta } from "@/components/ArticleMeta";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

const CANONICAL = "/guides/high-performer-vs-high-potential";

const DESCRIPTION =
  "High performer, high potential, high commitment — leaders confuse all three, and it costs them. See the difference across 12 behaviors, and why commitment is the one that predicts who to bet on.";

export const metadata: Metadata = {
  title: "High Performer vs. High Potential vs. High Commitment",
  description: DESCRIPTION,
  keywords: [
    "high performer vs high potential",
    "high potential vs high performer",
    "high commitment employee",
    "difference between high performer and high potential",
    "high potential employees",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "High Performer vs. High Potential vs. High Commitment",
    description:
      "The three 'highs' leaders confuse — and the one that actually predicts who to bet on.",
    url: CANONICAL,
    type: "article",
  },
};

const THREE = [
  {
    name: "High Performer",
    sub: "Delivers now",
    body: "Excellent at today's job. Real, present value — but strong current performance says little about capacity for a bigger, different role.",
  },
  {
    name: "High Potential",
    sub: "Might grow",
    body: "Shows promise for future roles. The problem: “potential” is usually a judgment call — a guess about the future that's easy to inflate with polish.",
  },
  {
    name: "High Commitment",
    sub: "Grows under pressure",
    body: "Takes initiative to get better no matter what, and delivers when it's hard. The one behavior you can actually measure — and the one that predicts.",
    hero: true,
  },
];

const ROWS: { dim: string; a: string; b: string; c: string }[] = [
  { dim: "What they do now", a: "Deliver results", b: "Show promise for future roles", c: "Take initiative to grow and improve" },
  { dim: "How they think", a: "“How do I win today?”", b: "“How do I look good for the next step?”", c: "“How do I get better, no matter what?”" },
  { dim: "Motivation", a: "External rewards, status", b: "Career advancement", c: "Internal drive to grow" },
  { dim: "Response to a challenge", a: "Executes well in known lanes", b: "May hesitate without clear structure", c: "Seeks out hard problems and learns through them" },
  { dim: "Coachability", a: "May resist feedback that threatens performance", b: "Open to feedback that fits their plan", c: "Craves feedback to grow faster" },
  { dim: "Learning behavior", a: "Learns when necessary", b: "Learns when guided", c: "Actively learns without permission" },
  { dim: "Risk tolerance", a: "Avoids failure; protects the track record", b: "Selective — tries when the payoff is high", c: "Leans into growth even when it's messy" },
  { dim: "Initiative", a: "Executes tasks assigned", b: "Waits to be recognized", c: "Creates opportunities and acts without waiting" },
  { dim: "Ownership", a: "Delivers when expected", b: "Takes credit when successful", c: "Owns outcomes, even when messy or shared" },
  { dim: "Loyalty", a: "Loyal to outcomes", b: "Loyal to their career trajectory", c: "Loyal to growth — of self, team, and mission" },
  { dim: "What they need", a: "Clear goals and rewards", b: "Mentorship and a development plan", c: "A mission and the space to grow" },
  { dim: "Risk to the company", a: "May plateau or burn out", b: "May never realize the potential", c: "Will find a way to grow — here or elsewhere" },
];

const FAQ = [
  {
    q: "What's the difference between a high performer and a high-potential employee?",
    a: "A high performer delivers results in their current role — real, present value. A high-potential employee shows promise for a future, bigger role. The catch is that performance is role-bound (being great at today's job says little about a different one), and “potential” is usually a subjective judgment that's easy to inflate with confidence and polish.",
  },
  {
    q: "What is a high-commitment (high-CQ) employee?",
    a: "A high-commitment employee actively takes initiative to grow, seeks out hard problems, and follows through when it gets difficult. Unlike performance (present) or potential (a guess about the future), commitment shows up as observable behavior under pressure — which makes it both measurable and predictive of who can carry more.",
  },
  {
    q: "Why do leaders confuse the three?",
    a: "Because in a calm interview or a good quarter, all three look similar — capable and impressive. The differences only appear under pressure and over time: who keeps growing, who follows through, and who was mostly performing for the audience. Confusing them is how a great individual contributor gets promoted into a role they don't want, and a quiet high-commitment person gets overlooked.",
  },
  {
    q: "Which one should you bet on for a promotion?",
    a: "For a bigger, more ambiguous role, bet on commitment. A high performer may plateau or burn out; a “high potential” may never realize it. The person who actively grows, owns messy outcomes, and pushes into hard problems is the one most likely to succeed when the job changes shape — and it's the signal you can actually verify.",
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

export default function HighsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Performer vs. potential vs. commitment"
        eyebrow="Talent"
        title={<>High performer, high potential, high commitment.</>}
      >
        Three labels leaders throw around as if they&rsquo;re the same thing.
        They&rsquo;re not &mdash; and mixing them up is how the wrong person gets
        promoted and the right one gets overlooked. Here&rsquo;s the difference
        across twelve behaviors, and the one that actually predicts who to bet on.
      </PageHero>

      <ArticleMeta
        headline="High performer, high potential, high commitment."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Performer vs. potential vs. commitment", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container className="max-w-[760px]">
          <div className="rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              A <strong>high performer</strong> delivers now. A{" "}
              <strong>high potential</strong> might grow &mdash; but that&rsquo;s a
              guess. A <strong className="text-green-soft">high-commitment</strong>{" "}
              person actively grows and shows up when it&rsquo;s hard &mdash; the
              one behavior you can measure, and the one that predicts who can
              carry more.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container className="max-w-[1000px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {THREE.map((t) => (
              <div
                key={t.name}
                className={`rounded-[18px] p-6 ${
                  t.hero
                    ? "bg-ink text-paper on-dark"
                    : "border border-edge-light bg-white"
                }`}
              >
                <h2 className={`m-0 font-display text-[20px] font-bold ${t.hero ? "text-paper" : ""}`}>
                  {t.name}
                </h2>
                <div className={`mb-2 mt-1 text-[13px] font-bold uppercase tracking-[.05em] ${t.hero ? "text-green-soft" : "text-green"}`}>
                  {t.sub}
                </div>
                <p className={`m-0 text-[14.5px] leading-[1.55] ${t.hero ? "text-[#B8B4A6]" : "text-[#615B4F]"}`}>
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Comparison table */}
      <Section tone="paper2">
        <Container className="max-w-[1000px]">
          <h2 className="mb-6 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
            The difference, behavior by behavior
          </h2>
          <div className="overflow-x-auto rounded-[16px] border border-edge-light bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-edge-light">
                  <th className="p-4 text-[13px] font-bold uppercase tracking-[.04em] text-content-faint"></th>
                  <th className="p-4 text-[14px] font-bold text-content">High Performer</th>
                  <th className="p-4 text-[14px] font-bold text-content">High Potential</th>
                  <th className="bg-[#E7F3EC] p-4 text-[14px] font-bold text-green">
                    High Commitment
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={r.dim} className={i % 2 ? "bg-paper/40" : ""}>
                    <td className="border-t border-edge-light p-4 align-top text-[13.5px] font-bold text-content">
                      {r.dim}
                    </td>
                    <td className="border-t border-edge-light p-4 align-top text-[13.5px] leading-[1.45] text-[#615B4F]">
                      {r.a}
                    </td>
                    <td className="border-t border-edge-light p-4 align-top text-[13.5px] leading-[1.45] text-[#615B4F]">
                      {r.b}
                    </td>
                    <td className="border-t border-edge-light bg-[#E7F3EC]/60 p-4 align-top text-[13.5px] font-medium leading-[1.45] text-[#2A4A38]">
                      {r.c}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[12.5px] text-content-faint">
            Read across each row. The three look alike on a good day; the
            differences only show up under pressure and over time.
          </p>
        </Container>
      </Section>

      <Section tone="paper">
        <Container className="max-w-[760px]">
          <h2 className="mb-4 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[32px]">
            Why the mix-up is so expensive
          </h2>
          <p className="m-0 mb-4 text-[17px] leading-[1.7] text-content-muted">
            Confusing performance for readiness is how a brilliant individual
            contributor gets promoted into a manager&rsquo;s seat they never
            wanted &mdash; the{" "}
            <Link href="/guides/failed-promotion" className="font-semibold text-green">
              Peter Principle
            </Link>{" "}
            in action. Confusing polish for potential is how a confident
            self-promoter gets the stretch role while a quieter, hungrier person{" "}
            &mdash; often your real{" "}
            <Link href="/guides/high-potential-employees" className="font-semibold text-green">
              high-potential
            </Link>{" "}
            &mdash; gets passed over.
          </p>
          <p className="m-0 text-[17px] leading-[1.7] text-content-muted">
            The way out isn&rsquo;t sharper instincts &mdash; it&rsquo;s a better
            signal. Performance you can already see. Potential is a guess.
            Commitment is the one that shows up in{" "}
            <Link href="/guides/its-the-metric" className="font-semibold text-green">
              behavior you can measure
            </Link>{" "}
            &mdash; which is exactly what makes it the safest thing to bet a
            promotion on.
          </p>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Performer vs. potential vs. commitment: FAQ
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

      <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
        <div className="mx-auto max-w-[760px]">
          <h2 className="m-0 mb-4 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[38px]">
            Bet on the one you can measure.
          </h2>
          <p className="m-0 mb-8 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Prove scores commitment behavior &mdash; Initiative, Applied Grit, and
            Learnability &mdash; from real work, so your next promotion rests on
            proof, not a label. Book a call, or start with the free diagnostic.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[17px]">
              Book a call
            </ButtonLink>
            <ButtonLink
              href="/free-tools/hidden-gem-identifier"
              variant="ghost-dark"
              className="!border-white !text-white hover:!border-white"
            >
              Find your hidden gems &rarr;
            </ButtonLink>
          </div>
        </div>
      </section>

      <RelatedGuides current="/guides/high-performer-vs-high-potential" />
      <Footer />
    </>
  );
}
