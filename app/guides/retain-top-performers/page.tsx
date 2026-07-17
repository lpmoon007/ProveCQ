import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/guides/retain-top-performers";

const META_DESCRIPTION =
  "Your best people rarely leave over pay first. Learn how to retain top performers with a real growth path, fairness, recognition, and less daily friction.";

export const metadata: Metadata = {
  title: "How to Retain Top Performers and Keep Your Best People",
  description: META_DESCRIPTION,
  keywords: [
    "retain top performers",
    "keep your best employees",
    "employee retention strategies",
    "retain high performers",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How to Retain Top Performers and Keep Your Best People",
    description: META_DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
};

const REASONS = [
  {
    n: "01",
    h: "They stopped growing",
    b: "The work went flat. No new challenge, no bigger problem, no reason to stretch — so they went looking for one somewhere else.",
  },
  {
    n: "02",
    h: "The system feels unfair",
    b: "They carry the weight while dead weight coasts. When nothing changes, they stop believing effort is rewarded here.",
  },
  {
    n: "03",
    h: "The recognition dried up",
    b: "Their good work became the baseline. When strong results stop being noticed, the person delivering them starts to feel invisible.",
  },
  {
    n: "04",
    h: "They burned out on follow-through",
    b: "They became the fallback for everything — the person who quietly closes every loop. That is not a reward. It is a slow exit.",
  },
];

// paper2 checklist — the practical retention playbook drawn from the article.
const KEEP = [
  "Give them a visible growth path — a bigger problem to own, not just a title change next year.",
  "Fix the fairness problem — address the dead weight instead of routing more work to your best people.",
  "Recognize specific work in real terms, not once-a-year — name what they did and why it mattered.",
  "Remove the friction that eats their week, so their time goes to the work only they can do.",
  "Stop making them the fallback for everyone else's follow-through — protect their focus on purpose.",
  "Watch the early behavioral drift, so you have the conversation before they have already decided.",
];

const FAQ = [
  {
    q: "Why do top performers quit?",
    a: "Top performers usually leave for different reasons than average performers. They rarely quit over pay first. They quit when they stop growing, when the system feels unfair — they carry the load while nothing is done about the people who coast — when their good work stops being recognized, or when they burn out being the person who closes everyone else's loops. By the time they raise it, most have already decided.",
  },
  {
    q: "How do you retain high performers?",
    a: "Give them a real growth path, fix the fairness problems they can see, recognize specific work in real time rather than once a year, and remove the friction that wastes their week. Above all, stop making your most reliable person the fallback for everything. Retention of your best people is less about perks and more about whether the day-to-day system respects their effort.",
  },
  {
    q: "Do top performers leave over money?",
    a: "Money is usually the reason they give, not the reason they go. Pay has to be fair, and a low offer will lose people. But your best people rarely leave a role where they are growing, recognized, and treated fairly for a marginally higher number. When they do leave over money, it is often because the money is the only thing left that the job is offering them.",
  },
  {
    q: "How do you know a top performer is about to quit?",
    a: "The signal is drift, not a dramatic announcement. Initiative fades — they stop volunteering for the hard problems they used to grab. They pull back to the edges of their role. Their follow-through gets narrower and more transactional. These behavioral shifts show up weeks before a resignation, which is exactly why watching behavior over time gives you a chance to act while it still matters.",
  },
  {
    q: "What's the best retention strategy for your best people?",
    a: "Know who your proven people actually are, then protect the conditions that keep them. That means an honest read of who delivers — based on behavior, not just this quarter's output — a growth path for those people, a fair system around them, and early warning when someone starts to drift. You cannot retain the right people if you are not sure who they are.",
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

export default function RetainTopPerformersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Retain top performers"
        eyebrow="Retention"
        title={<>How to retain your top performers.</>}
      >
        Your best people leave for different reasons than everyone else. They
        rarely go over pay first &mdash; they go when they stop growing, when the
        system stops being fair, and when the follow-through for everything quietly
        lands on them.
      </PageHero>

      <ArticleMeta
        headline="How to retain your top performers."
        description={META_DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Retain top performers", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              You keep top performers by giving them a growth path, fixing the
              unfairness they can see, recognizing their work in real terms, and
              removing the friction that eats their week &mdash; while making sure
              they never become the fallback for everyone else&rsquo;s
              follow-through. Pay matters, but it is rarely why your best people go.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Why top performers actually leave
          </h2>
          <p className="m-0 mb-6 max-w-[720px] text-[17px] leading-[1.65] text-content-muted">
            Average performers often leave over money or a better commute. Your
            best people are different. When you look at the reasons they name on the
            way out, four patterns keep showing up &mdash; and none of them are
            about the paycheck alone.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {REASONS.map((c) => (
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

      {/* paper2 checklist — the retention playbook */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to keep your best people
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Retention of top performers is not a single perk or a counteroffer at
              the exit interview. It is a set of conditions you either protect or
              erode over months. If you want to keep your best employees, these are
              the levers that move first:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {KEEP.map((c) => (
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

      {/* Definition-first prose Section */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              What actually makes someone worth retaining
            </h2>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              Before you build a retention plan, it is worth being precise about who
              it is for. A top performer worth keeping is not simply the person with
              the best numbers this quarter. Output is real, but it is also noisy
              &mdash; a good territory, a lucky account, or a single strong project
              can flatter someone for months. The people who genuinely hold your team
              together are defined by behavior, not by a snapshot of results.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              In practice, they show three things consistently. They take initiative
              beyond their role &mdash; they see the problem no one owns and pick it
              up. They apply grit to hard, unglamorous work instead of stalling when
              it gets difficult. And they keep learning as the demands change rather
              than clinging to what used to work. That combination is what makes them
              hard to replace, and it is exactly what you are trying to protect. If
              you want the fuller version of this, our guide on{" "}
              <Link href="/guides/high-potential-employees" className="font-semibold text-green hover:underline">
                identifying high-potential employees
              </Link>{" "}
              breaks down the same behaviors.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              This matters for retention because those same behaviors are the first
              to fade when a top performer starts to check out. The initiative goes
              quiet. The grit narrows to the minimum. The person who used to close
              every loop starts letting a few slip. You will often see the drift in
              what they do weeks before you hear a word about it &mdash; which is the
              whole case for watching behavior over time instead of waiting for the
              resignation. It is also how you avoid{" "}
              <Link href="/guides/regretted-attrition" className="font-semibold text-green hover:underline">
                regretted attrition
              </Link>
              : losing the people you least wanted to lose because no one saw it
              coming.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              And keeping them is not only about defense. Your best people stay where
              they are still getting better. A steady rhythm of feedback and stretch
              &mdash; the idea behind{" "}
              <Link href="/better-every-day" className="font-semibold text-green hover:underline">
                getting a little better every day
              </Link>{" "}
              &mdash; does more for retention than any one-off perk, precisely
              because it speaks to the reason top performers leave in the first place.
              Just as importantly, watch the ones already carrying too much. A{" "}
              <Link href="/guides/burned-out-top-performers" className="font-semibold text-green hover:underline">
                burned-out top performer
              </Link>{" "}
              is one of the most preventable losses on any team, and one of the most
              expensive to ignore.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ — GEO citation block */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Retaining top performers: FAQ
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
            Keep the people you cannot afford to lose.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove shows you who your proven people are
            &mdash; and catches the drift before they check out.
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

      <RelatedGuides current="/guides/retain-top-performers" />
      <Footer />
    </>
  );
}
