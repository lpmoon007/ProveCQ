import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { Container, Section, ButtonLink } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/guides/people-decisions-by-the-numbers";

const DESCRIPTION =
  "The research on why high-stakes people decisions fail and what it costs: managers drive 70% of engagement variance (Gallup), replacing an employee runs 20–213% of salary (CAP), up to 75% of turnover is preventable (Work Institute), and only 11% of leaders say their development programs work (McKinsey).";

export const metadata: Metadata = {
  title: "People Decisions by the Numbers: What the Research Says",
  description: DESCRIPTION,
  keywords: [
    "cost of replacing an employee",
    "how much turnover is preventable",
    "do leadership development programs work",
    "why promotions fail",
    "manager impact on engagement",
    "people decision statistics",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "People Decisions by the Numbers",
    description:
      "What the research actually says about the cost of getting a hire, a promotion, or a retention call wrong.",
    url: CANONICAL,
    type: "article",
  },
};

/** Verified, primary-sourced statistics. Every figure below was checked against
 * its original publisher before publication (see the References section). */
const STATS: { n: string; color: string; body: React.ReactNode }[] = [
  {
    n: "70%",
    color: "text-[#8FD6AC]",
    body: (
      <>
        of the variance in a team&rsquo;s engagement traces to a single factor:
        its manager. <span className="text-[#6E6A5C]">(Gallup)</span>
      </>
    ),
  },
  {
    n: "20–213%",
    color: "text-[#E5674C]",
    body: (
      <>
        of annual salary to replace one employee &mdash; ~20% for most roles, up
        to 213% for senior or specialized ones.{" "}
        <span className="text-[#6E6A5C]">(Center for American Progress)</span>
      </>
    ),
  },
  {
    n: "75%",
    color: "text-[#E5674C]",
    body: (
      <>
        of voluntary turnover is preventable &mdash; most people leave for
        reasons an employer could have seen.{" "}
        <span className="text-[#6E6A5C]">(Work Institute)</span>
      </>
    ),
  },
  {
    n: "11%",
    color: "text-[#8FD6AC]",
    body: (
      <>
        of executives strongly agree their leadership-development programs
        achieve lasting results.{" "}
        <span className="text-[#6E6A5C]">(McKinsey)</span>
      </>
    ),
  },
];

const FAQ = [
  {
    q: "How much does it cost to replace an employee?",
    a: "Research from the Center for American Progress puts the typical cost of turnover at about 20% of the departing employee's annual salary for most roles. For senior leaders and highly specialized positions — the ones hardest to replace — it climbs to as much as 213% of salary once you count lost productivity, hiring, and the ramp time before the replacement is fully effective.",
  },
  {
    q: "How much employee turnover is actually preventable?",
    a: "The Work Institute, drawing on well over 100,000 exit interviews, has found that as much as 75% of voluntary turnover is preventable — people leave for reasons an employer could have addressed, most often a lack of visible growth or development. (Estimates vary by methodology; Gallup, using a different approach, puts the preventable share closer to half. Either way, the majority of departures are not inevitable.)",
  },
  {
    q: "Do leadership development programs actually work?",
    a: "Often not as intended. McKinsey found that only 11% of executives strongly agree their leadership-development interventions achieve and sustain the desired results — even though U.S. companies spend roughly $14 billion a year on them. The common failure isn't the training itself; it's spending it on the wrong people, or without a way to tell who's actually growing.",
  },
  {
    q: "Why do so many promotions fail?",
    a: "Because past performance in one role is a weak predictor of success in a different one — the classic Peter Principle. The behaviors that make someone excellent as an individual contributor aren't the behaviors a bigger, more ambiguous role demands. Without a way to observe those behaviors first, a promotion is a bet placed on the wrong evidence.",
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

export default function PeopleDecisionsByTheNumbersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › People decisions by the numbers"
        eyebrow="The research"
        title={<>People decisions by the numbers.</>}
      >
        Hiring, promoting, and holding on to the right people are the
        highest-consequence calls a leader makes &mdash; and most are made on a
        gut feel. Here&rsquo;s what the research actually says about how often
        those bets go wrong, and what it costs when they do.
      </PageHero>

      <ArticleMeta
        headline="People decisions by the numbers."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "People decisions by the numbers", url: CANONICAL },
        ]}
      />

      {/* headline stats */}
      <Section tone="paper" className="!pb-5">
        <Container wide className="max-w-[1000px]">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.n}
                className="rounded-[16px] bg-ink p-[26px] text-paper on-dark"
              >
                <div className={`font-display text-[34px] font-bold ${s.color}`}>
                  {s.n}
                </div>
                <p className="mt-2 text-[13.5px] leading-[1.5] text-[#B8B4A6]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-3 max-w-[1000px] text-[12.5px] text-[#8A8474]">
            Every figure here was checked against its original publisher before
            publication (see References below). This page is Be Legendary&rsquo;s
            synthesis of publicly available research &mdash; not a proprietary
            survey. Statistics belong to their respective publishers.
          </p>
        </Container>
      </Section>

      <Section tone="paper" className="!py-11">
        <Container className="max-w-[720px]">
          <h2 className="mb-4 mt-0 font-display text-[30px] font-bold tracking-[-.02em] sm:text-[32px]">
            1. The person you promote is the lever &mdash; for better or worse.
          </h2>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            Gallup&rsquo;s analysis of millions of teams found that roughly{" "}
            <strong>70% of the variance</strong> in a team&rsquo;s engagement is
            attributable to one factor: its manager. Put plainly, if you know
            nothing about a group except who leads it, you can predict a
            surprising amount about how it performs. That makes the decision of{" "}
            <em>who</em> gets to lead the single most leveraged people call you
            make &mdash; and the one most often made on the thinnest evidence.
          </p>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            The usual evidence is past performance. But strong performance in one
            role is a notoriously weak predictor of success in a different one
            &mdash; the{" "}
            <Link href="/guides/failed-promotion" className="font-semibold text-green">
              Peter Principle
            </Link>{" "}
            in action. The behaviors that made someone a great individual
            contributor aren&rsquo;t the behaviors a larger, more ambiguous role
            demands.{" "}
            <Link href="/guides/who-to-promote" className="font-semibold text-green">
              Knowing who to promote
            </Link>{" "}
            means reading behavior the current role never tested.
          </p>

          <h2 className="mb-4 mt-10 font-display text-[30px] font-bold tracking-[-.02em] sm:text-[32px]">
            2. When the bet is wrong, the bill is bigger than it looks.
          </h2>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            The Center for American Progress, synthesizing decades of studies,
            estimated the typical cost of replacing an employee at about{" "}
            <strong>20% of their annual salary</strong> &mdash; and as much as{" "}
            <strong>213%</strong> for senior leaders and hard-to-replace
            specialists. That&rsquo;s lost productivity while the seat is empty,
            the cost of hiring and onboarding, and the slow ramp before a
            replacement is fully effective. For a lean company, one wrong bet on a
            key role can{" "}
            <Link href="/guides/cost-of-turnover" className="font-semibold text-green">
              erase a quarter of progress
            </Link>
            .
          </p>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            Most of that cost is avoidable. The Work Institute, drawing on more
            than 100,000 exit interviews, has found that as much as{" "}
            <strong>75% of voluntary turnover is preventable</strong> &mdash;
            people leave for reasons an employer could have seen and addressed,
            most often a lack of visible growth. The departures that hurt most are
            the ones you&rsquo;d have taken back:{" "}
            <Link href="/guides/regretted-attrition" className="font-semibold text-green">
              regretted attrition
            </Link>
            .
          </p>

          <h2 className="mb-4 mt-10 font-display text-[30px] font-bold tracking-[-.02em] sm:text-[32px]">
            3. Spending more on development isn&rsquo;t fixing it.
          </h2>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            U.S. companies pour roughly <strong>$14 billion a year</strong> into
            leadership development. Yet McKinsey found that only{" "}
            <strong>11% of executives</strong> strongly agree those programs
            achieve and sustain the results they&rsquo;re meant to. The problem
            usually isn&rsquo;t the curriculum. It&rsquo;s aiming it blind &mdash;
            investing in everyone equally, with no way to tell who is actually
            compounding and who is coasting, and no signal for who was worth the
            bet in the first place.
          </p>

          <div className="my-9 rounded-[18px] bg-ink px-[34px] py-[30px] text-paper on-dark">
            <p className="m-0 text-[19px] leading-[1.6] text-[#E8E4D6]">
              Read together, these numbers point to one thing. They aren&rsquo;t
              a people problem &mdash; they&rsquo;re a{" "}
              <span className="text-green-soft">measurement problem.</span> Every
              one of them is what happens when a high-stakes bet gets placed on
              the wrong evidence.
            </p>
          </div>

          <h2 className="mb-4 mt-10 font-display text-[30px] font-bold tracking-[-.02em] sm:text-[32px]">
            4. What the evidence points to: measure the behavior first.
          </h2>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            Performance tells you what someone has already done. Engagement tells
            you how they feel. Neither tells you what they&rsquo;ll do when the
            work gets hard, ambiguous, or unglamorous &mdash; which is exactly
            what a bigger role, or a retained key player, is a bet on. That&rsquo;s{" "}
            <Link href="/guides/measure-commitment" className="font-semibold text-green">
              commitment behavior
            </Link>
            , and unlike a survey score it&rsquo;s observable: initiative when
            no one&rsquo;s watching, follow-through under pressure, and learning
            from being wrong.
          </p>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            Measuring that &mdash; over time, in real conditions &mdash; before
            you promote, hire, or hand over the keys is the one change that moves
            a people decision from a guess to a bet you can defend. It&rsquo;s
            what the{" "}
            <Link href="/how-it-works" className="font-semibold text-green">
              Commitment Quotient
            </Link>{" "}
            is built to do.
          </p>
        </Container>
      </Section>

      {/* References */}
      <Section tone="paper" className="!py-5">
        <Container className="max-w-[720px]">
          <h2 className="m-0 mb-3.5 font-display text-[24px] font-bold tracking-[-.02em]">
            References
          </h2>
          <ol className="m-0 list-decimal pl-5 text-[13.5px] leading-[1.7] text-[#575249] [&_a]:text-green">
            <li>
              Gallup. <em>State of the American Manager</em> (analysis of 2.5M+
              work units). Managers account for ~70% of the variance in team
              engagement.{" "}
              <a
                href="https://www.gallup.com/services/182138/state-american-manager.aspx"
                target="_blank"
                rel="noopener nofollow"
              >
                gallup.com
              </a>
            </li>
            <li>
              Boushey, H. &amp; Glynn, S.J. (2012). <em>There Are Significant
              Business Costs to Replacing Employees.</em> Center for American
              Progress. Typical turnover cost ~20% of salary; up to 213% for
              executive and highly specialized roles.{" "}
              <a
                href="https://www.americanprogress.org/article/there-are-significant-business-costs-to-replacing-employees/"
                target="_blank"
                rel="noopener nofollow"
              >
                americanprogress.org
              </a>
            </li>
            <li>
              Work Institute. <em>Retention Report</em> (100,000+ exit
              interviews). As much as ~75% of voluntary turnover is preventable.{" "}
              <a
                href="https://workinstitute.com/retention-reports/"
                target="_blank"
                rel="noopener nofollow"
              >
                workinstitute.com
              </a>
            </li>
            <li>
              Gurdjian, P., Halbeisen, T. &amp; Lane, K. (2014). <em>Why
              leadership-development programs fail.</em> McKinsey &amp; Company.
              Only 11% of executives strongly agree their programs achieve lasting
              results; U.S. spend ~$14B/year.{" "}
              <a
                href="https://www.mckinsey.com/featured-insights/leadership/why-leadership-development-programs-fail"
                target="_blank"
                rel="noopener nofollow"
              >
                mckinsey.com
              </a>
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
          <div className="rounded-[22px] bg-green px-8 py-12 text-center text-white on-dark sm:px-10">
            <h2 className="m-0 mb-3.5 font-display text-[30px] font-bold tracking-[-.02em] sm:text-[34px]">
              Stop betting on the wrong evidence.
            </h2>
            <p className="m-0 mb-[26px] text-[17px] leading-[1.6] text-[#E4F5EB]">
              Take the free 2-minute Certainty Diagnostic to see how much
              you&rsquo;re guessing &mdash; or book a call to see how Prove
              measures commitment behavior where it counts.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink href="/free-tools/certainty-diagnostic" variant="dark">
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

      <RelatedGuides current={CANONICAL} />
      <Footer />
    </>
  );
}
