import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/guides/regretted-attrition";

const DESCRIPTION =
  "Regretted attrition counts only the people you wanted to keep. Track it to see why healthy turnover can hide a talent leak, and spot at-risk keepers early.";

export const metadata: Metadata = {
  title: "Regretted Attrition: The Turnover Number That Matters",
  description: DESCRIPTION,
  keywords: [
    "regretted attrition",
    "regrettable attrition",
    "regretted turnover",
    "regrettable turnover",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Regretted Attrition: The Turnover Number That Matters",
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
};

const CONTRAST = [
  {
    h: "Total turnover",
    b: "Every departure, counted the same — the low performer you were ready to let go and the top performer you would have fought to keep. It tells you how many people left, not whether losing them hurt.",
    tone: "muted" as const,
  },
  {
    h: "Regretted attrition",
    b: "Only the departures you did not want — the people you would have kept if you could. It isolates the exits that actually cost you, which makes it the retention number worth managing.",
    tone: "green" as const,
  },
];

const CHECKLIST = [
  "Flag every departure at exit as either regretted or not regretted — a simple yes or no from the manager and one other leader.",
  "Set the bar before you know who is leaving: would you have re-hired this person for the same role today?",
  "Track regretted exits as their own rate, separate from total turnover, so a clean headline number cannot hide a talent leak.",
  "Segment the flags by team, manager, and tenure to see where your keepers are actually walking out.",
  "Review the reasons behind regretted exits, not just the count — the pattern tells you what to fix.",
  "Watch behavioral commitment signals on your keepers so the flag is a confirmation, not a surprise.",
];

const FAQ = [
  {
    q: "What is regretted attrition?",
    a: "Regretted attrition is the share of departures made up of people you wanted to keep. Instead of counting everyone who leaves, it isolates the exits you would have prevented if you could — your strong performers and hard-to-replace contributors. Because it strips out the departures you did not mind, it is a truer measure of whether you are holding on to your best people.",
  },
  {
    q: "How do you calculate regretted attrition?",
    a: "At each exit, flag the departure as regretted or not regretted — would you have re-hired this person for the same role today? Then divide the number of regretted departures over a period by your average headcount for that period. Keep it as its own rate, separate from total turnover, so the two numbers can be compared rather than blended.",
  },
  {
    q: "Why does regretted attrition matter more than total turnover?",
    a: "Total turnover lumps together the exits you welcomed and the ones that hurt, so it can look healthy while you are losing exactly the people you most needed. Regretted attrition counts only the keepers, so it moves when your real retention problem moves. It is the number that tells you whether your talent base is getting stronger or quietly draining away.",
  },
  {
    q: "What is a good regretted attrition rate?",
    a: "There is no universal benchmark, and any single figure treated as a hard target tends to mislead. As a general rule of thumb, you want regretted attrition to be a small and shrinking share of your total turnover — most of the people leaving should be departures you were fine with. The direction of the number over time matters more than hitting a specific percentage.",
  },
  {
    q: "How do you catch regretted attrition before it happens?",
    a: "The exit flag is a lagging signal — by the time you record it, the person is already gone. To get ahead of it, watch behavioral commitment signals on the people you most want to keep: fading initiative, grit that used to show up on hard problems going quiet, curiosity narrowing. Those shifts surface at-risk keepers weeks before they resign, while you can still act.",
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

export default function RegrettedAttritionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Regretted attrition"
        eyebrow="Retention"
        title={<>Regretted attrition: the only turnover number worth managing.</>}
      >
        Headline turnover blends the departures you did not mind with the ones
        that actually hurt. Regretted attrition isolates the people you wanted to
        keep &mdash; which makes it the truer read on whether you are holding your
        best.
      </PageHero>

      <ArticleMeta
        headline="Regretted attrition: the only turnover number worth managing."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Regretted attrition", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Regretted attrition counts only the departures you wanted to
              prevent &mdash; the people you would have kept if you could. Total
              turnover can look perfectly healthy while your best people quietly
              leave. Track the regretted number separately and you are measuring
              the loss that actually costs you.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Total turnover vs regretted attrition
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {CONTRAST.map((c) => (
              <div
                key={c.h}
                className={`rounded-2xl border p-[26px] ${
                  c.tone === "green"
                    ? "border-green bg-white"
                    : "border-edge-light bg-white"
                }`}
              >
                <h3
                  className={`mb-2 text-[18px] font-bold ${
                    c.tone === "green" ? "text-green" : ""
                  }`}
                >
                  {c.h}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Why the headline number lies
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              Regretted attrition is the portion of your turnover made up of
              people you wanted to keep. Everything else &mdash; the low
              performer you were ready to part with, the bad-fit hire who was
              never going to work out, the person who left a role you were about
              to redesign anyway &mdash; is not regretted. Both kinds of exit
              show up in the same headline turnover figure, and that is exactly
              the problem. One number is being asked to describe two completely
              different events.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              This is how a company ends up with &ldquo;healthy&rdquo; total
              turnover while it bleeds its best people. If a chunk of your
              departures are exits you did not mind, your overall rate can sit
              comfortably in a normal range while the regretted slice climbs
              underneath it. The average looks fine. The reality is that the
              people carrying your hardest work are the ones walking out, and the
              blended number gives you no way to see it. You cannot manage what
              you refuse to separate &mdash; and{" "}
              <Link href="/guides/people-decisions-by-the-numbers" className="font-semibold text-green hover:underline">
                the research says as much as 75% of that loss is preventable
              </Link>
              .
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              Splitting the two changes what you pay attention to. A rising
              regretted rate is a signal that something in the work, the manager,
              or the path forward is pushing out the people you most need &mdash;
              often the same people who show up in guides on{" "}
              <Link href="/guides/quiet-quitting" className="font-semibold text-green hover:underline">
                quiet quitting
              </Link>{" "}
              and{" "}
              <Link href="/guides/burned-out-top-performers" className="font-semibold text-green hover:underline">
                burned-out top performers
              </Link>{" "}
              before they resign. A flat or falling regretted rate, even
              alongside ordinary total turnover, means your retention is
              working where it counts.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to track regretted attrition
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Tracking regretted attrition does not need a new system &mdash; it
              needs one honest flag at every exit and the discipline to report it
              on its own. The practice looks like a checklist:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {CHECKLIST.map((c) => (
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
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              From lagging count to early warning
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              The exit flag is honest, but it is late. By the time you mark a
              departure &ldquo;regretted,&rdquo; the decision is already made and
              the person is already gone. That makes the metric a good scoreboard
              and a poor alarm. To act instead of tally, you have to see the shift
              before the resignation.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              Behavioral commitment signals are what surface an at-risk keeper
              early. When someone who used to take initiative stops reaching
              beyond their role, when the grit that showed up on hard problems
              goes quiet, when curiosity narrows to just getting through the day
              &mdash; those are the changes that precede a regretted exit by
              weeks. Reading them is the difference between{" "}
              <Link href="/guides/measure-commitment" className="font-semibold text-green hover:underline">
                measuring commitment
              </Link>{" "}
              as it moves and finding out at the exit interview. It is also the
              groundwork for a real plan to{" "}
              <Link href="/guides/retain-top-performers" className="font-semibold text-green hover:underline">
                retain your top performers
              </Link>{" "}
              while there is still time to act.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Regretted attrition: FAQ
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
            Manage the turnover that actually costs you.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove surfaces at-risk keepers from real
            behavior &mdash; before the regretted exit, not after.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[16px]">
              Book a call
            </ButtonLink>
            <Link
              href="/free-tools/certainty-diagnostic"
              className="inline-flex items-center justify-center rounded-[12px] border-[1.5px] border-[#7BCB9E] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              Try the Certainty Diagnostic &rarr;
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuides current="/guides/regretted-attrition" />
      <Footer />
    </>
  );
}
