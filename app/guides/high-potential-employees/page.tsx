import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/guides/high-potential-employees";

export const metadata: Metadata = {
  title: "How to Identify High-Potential Employees",
  description:
    "High potential is not high performance. Learn how to identify high-potential employees from behavioral signals — initiative, applied grit, and learnability — the characteristics that separate real potential from this quarter's numbers.",
  keywords: [
    "high-potential employees",
    "how to identify high-potential employees",
    "identifying high potential employees",
    "high potential characteristics",
    "high potential identification",
    "high potential assessment",
    "HiPo employees",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How to Identify High-Potential Employees",
    description:
      "The behavioral signals and characteristics that separate high-potential employees from high performers — and how to spot them early.",
    url: CANONICAL,
    type: "article",
  },
};

const SIGNALS = [
  {
    n: "01",
    h: "Initiative beyond the role",
    b: "They solve problems that are not technically theirs to solve.",
  },
  {
    n: "02",
    h: "Grit on hard problems",
    b: "They stay with difficult work long enough to crack it.",
  },
  {
    n: "03",
    h: "Fast learnability",
    b: "They absorb new demands and level up without hand-holding.",
  },
];

const MISLEADS = [
  {
    h: "Performance is role-bound",
    b: <>Being great at today&rsquo;s job says little about capacity for a bigger one.</>,
  },
  {
    h: "Potential compounds",
    b: "Investing early in a high-learnability person pays back for years — if you can spot them.",
  },
];

// GEO structure (per the keyword map): a definitional checklist of the
// characteristics of high-potential employees, drawn from the article's own
// three behaviors + the Prove ethics framing (behavior, not a judgment of worth).
const CHARACTERISTICS = [
  "They act before it is their job — taking initiative beyond their defined role.",
  "They push through hard, unglamorous problems instead of stalling.",
  "They learn fast when demands change, without needing hand-holding.",
  "They stay coachable as scope grows, rather than clinging to what worked before.",
  "Their potential shows up in behavior over time — not in one quarter's numbers.",
];

// FAQ — the format AI answer engines extract and cite. Answers stay faithful to
// the article and to the Ethics page (behavioral measurement, decision-support).
const FAQ = [
  {
    q: "What is a high-potential employee?",
    a: "A high-potential employee — often shortened to “HiPo” — is someone with the capacity to grow into a larger or more ambiguous role. Unlike a high performer, whose value is proven in their current job, a high-potential employee shows the behaviors that predict success in a bigger one: initiative beyond their role, follow-through on hard problems, and fast learnability.",
  },
  {
    q: "How do you identify high-potential employees?",
    a: "Look at behavior over time, not a single result. The three most predictive signals are initiative (acting before it is their job), applied grit (staying with hard work until it is cracked), and learnability (leveling up when demands change). Because these show up in what people do rather than what they say, they are best measured from observed behavior — not a personality test.",
  },
  {
    q: "What are the characteristics of high-potential employees?",
    a: "They take initiative beyond their defined role, push through difficult problems instead of stalling, learn fast without hand-holding, and stay coachable as their scope grows. Strong current performance is common but not sufficient — potential is about capacity for the next role, not mastery of the current one.",
  },
  {
    q: "Is a high performer the same as a high-potential employee?",
    a: "No. Performance is role-bound — being excellent at today's job says little about capacity for a bigger one. Some of your best performers are happiest and most valuable exactly where they are. High potential is specifically the ability to grow into greater demands.",
  },
  {
    q: "What tools help identify high-potential employees?",
    a: "Free starting points are the Hidden Gem Identifier, which surfaces overlooked performers and strivers, and the Certainty Diagnostic, which shows how much of your talent read is proof versus gut feel. For a measured read, a Prove cycle scores Initiative, Applied Grit, and Learnability from six weeks of real behavior.",
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

export default function HighPotentialEmployeesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › High-potential employees"
        eyebrow="Talent"
        title={<>How to identify high-potential employees.</>}
      >
        Your highest performer today is not always your highest potential for
        tomorrow. Potential is about the capacity to grow into bigger demands
        &mdash; and that shows up in behavior, not in this quarter&rsquo;s numbers.
      </PageHero>

      <ArticleMeta
        headline="How to identify high-potential employees."
        description="High potential is not high performance. Learn how to identify high-potential employees from behavioral signals — initiative, applied grit, and learnability — the characteristics that separate real potential from this quarter's numbers."
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          {
            name: "High-potential employees",
            url: "/guides/high-potential-employees",
          },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              High-potential employees consistently show three behaviors: they
              take initiative beyond their role, they push through hard problems,
              and they learn fast when demands change. Spot those and you find the
              people worth investing in &mdash; before a competitor does.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The signals of real potential
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {SIGNALS.map((c) => (
              <div
                key={c.n}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <div className="mb-2.5 font-display text-[15px] font-bold text-green">
                  {c.n}
                </div>
                <h3 className="mb-2 text-[18px] font-bold">{c.h}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Definitional "characteristics" block — Tier-1 GEO structure */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Characteristics of high-potential employees
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              A high-potential employee is someone with the capacity to grow into a
              larger or more ambiguous role. In practice, identifying
              high-potential people means watching for a consistent pattern of
              behavior rather than a single strong quarter. The characteristics
              show up as a checklist:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {CHARACTERISTICS.map((c) => (
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
            Why performance alone misleads
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {MISLEADS.map((c) => (
              <div
                key={c.h}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <h3 className="mb-2 text-[18px] font-bold">{c.h}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Put it into practice — distributes the cluster to the tools/dev program */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to measure it on your team
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Two free tools help you turn this into a high-potential assessment,
              and a subscription keeps your proven people growing:
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Link
                href="/free-tools/hidden-gem-identifier"
                className="rounded-[16px] border border-edge-light bg-white p-5 transition-colors hover:border-green"
              >
                <h3 className="mb-1.5 text-[16px] font-bold">Hidden Gem Identifier</h3>
                <p className="m-0 text-[14px] leading-[1.5] text-[#615B4F]">
                  A free tool to identify high-potential people every leader
                  overlooks.
                </p>
              </Link>
              <Link
                href="/free-tools/certainty-diagnostic"
                className="rounded-[16px] border border-edge-light bg-white p-5 transition-colors hover:border-green"
              >
                <h3 className="mb-1.5 text-[16px] font-bold">Certainty Diagnostic</h3>
                <p className="m-0 text-[14px] leading-[1.5] text-[#615B4F]">
                  See how much of your talent read is proof versus gut feel.
                </p>
              </Link>
              <Link
                href="/better-every-day"
                className="rounded-[16px] border border-edge-light bg-white p-5 transition-colors hover:border-green"
              >
                <h3 className="mb-1.5 text-[16px] font-bold">Better Every Day</h3>
                <p className="m-0 text-[14px] leading-[1.5] text-[#615B4F]">
                  A high-potential development program for your proven players.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ — GEO citation block */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              High-potential employees: FAQ
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
        <div className="mx-auto max-w-[720px]">
          <h2 className="m-0 mb-4 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[38px]">
            Find your future leaders early.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove surfaces high-potential people on your
            team.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[16px]">
              Book a call
            </ButtonLink>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-[12px] border-[1.5px] border-[#7BCB9E] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              See how Prove works &rarr;
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuides current="/guides/high-potential-employees" />
      <Footer />
    </>
  );
}
