import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArticleMeta } from "@/components/ArticleMeta";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

const CANONICAL = "/guides/leadership-styles";

const DESCRIPTION =
  "The 9 leadership styles explained with famous examples of each done well and badly — autocratic, servant, charismatic, laissez-faire, transactional, situational, transformational, democratic, and coaching — plus when to use each and how it fits your team's commitment behavior.";

export const metadata: Metadata = {
  title: "The 9 Leadership Styles: Examples, Strengths & When to Use Each",
  description: DESCRIPTION,
  keywords: [
    "leadership styles",
    "types of leadership styles",
    "9 leadership styles",
    "leadership style examples",
    "autocratic leadership",
    "transformational leadership",
    "situational leadership",
    "coaching leadership style",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The 9 Leadership Styles, With Examples",
    description:
      "Each of the nine leadership styles done well and badly — and when each one actually fits.",
    url: CANONICAL,
    type: "article",
  },
};

type Style = {
  slug: string;
  name: string;
  def: string;
  bestName: string;
  bestNote: string;
  worstName: string;
  worstNote: string;
  bestUse: string;
  risk: string;
  tell: string;
  lever: string;
  cqLens: string;
};

const STYLES: Style[] = [
  {
    slug: "autocratic",
    name: "Autocratic",
    def: "Decides alone, expects compliance, and leaves little room for input. Efficient in crises; corrosive over time.",
    bestName: "Steve Jobs (Apple)",
    bestNote: "vision and tight control drove groundbreaking innovation — often at the cost of team strain.",
    worstName: "Gen. George Patton (WWII)",
    worstNote: "brilliant in crisis but so abrasive and rigid it eventually ended his own career.",
    bestUse: "Short-term crises and compliance-heavy, safety-critical work.",
    risk: "Drives out your highest-commitment talent.",
    tell: "If your top performers have stopped offering ideas, you've crossed from clarity into suppression.",
    lever: "Add a weekly “why” behind decisions — keep meaning alive without giving up control.",
    cqLens: "Protects order but kills compounding commitment: high-CQ people disengage, low-CQ people stay comfortable but stagnant.",
  },
  {
    slug: "servant",
    name: "Servant",
    def: "Puts the team's growth and well-being first. Builds trust and loyalty — but can avoid conflict if overdone.",
    bestName: "Herb Kelleher (Southwest Airlines)",
    bestNote: "put employees first, and their performance fueled the company's.",
    worstName: "Neville Chamberlain",
    worstNote: "a servant-like instinct to avoid a tough fight carried an enormous cost.",
    bestUse: "Building trust and empowering already-capable talent.",
    risk: "Avoids the hard calls and quietly props up low-commitment people.",
    tell: "If everyone “feels good” but results lag, servant leadership has slipped into enablement.",
    lever: "Pair the support with firm performance standards and clear accountability.",
    cqLens: "Magnifies commitment for the strong; hides weakness in everyone else.",
  },
  {
    slug: "charismatic",
    name: "Charismatic",
    def: "Leads through personality and presence. Creates energy and loyalty, but risks overdependence on the leader.",
    bestName: "Barack Obama",
    bestNote: "energized people around a vision through sheer personal presence.",
    worstName: "Elizabeth Holmes (Theranos)",
    worstNote: "charisma masked weak systems until the whole thing collapsed.",
    bestUse: "Rallying teams and starting movements.",
    risk: "Dependency on you, and a shaky succession.",
    tell: "If performance crashes when you leave the room, you've built dependency, not commitment.",
    lever: "Rotate who presents ideas and runs meetings — shift the spotlight off yourself.",
    cqLens: "Reveals enthusiasm but hides true commitment depth: loyal followers can look like high-CQ players.",
  },
  {
    slug: "laissez-faire",
    name: "Laissez-Faire",
    def: "Maximum freedom, minimal guidance. Surfaces hidden gems — and exposes weak performers just as fast.",
    bestName: "Warren Buffett",
    bestNote: "barely interferes with managers who thrive under autonomy.",
    worstName: "Herbert Hoover",
    worstNote: "a hands-off posture read as failure in the depths of a crisis.",
    bestUse: "Highly skilled, high-commitment teams.",
    risk: "Collapses in a low-commitment environment.",
    tell: "If half the team is excelling while the other half flounders, laissez-faire is in play.",
    lever: "Add lightweight checkpoints to reintroduce just enough structure.",
    cqLens: "Filters the team sharply — you find out who's truly committed and who was coasting on the leader.",
  },
  {
    slug: "transactional",
    name: "Transactional",
    def: "Runs on rules, roles, and rewards. Ensures order and fairness — but caps growth.",
    bestName: "Bill Belichick",
    bestNote: "system-driven discipline produced consistent, repeatable wins.",
    worstName: "The factory-owner archetype",
    worstNote: "reward-and-rule oversight bred compliance without innovation, and eventual decline.",
    bestUse: "Process-driven, repeatable environments.",
    risk: "Near-zero adaptability the moment conditions change.",
    tell: "If people only push when the bonus is at stake, you're locked in transactional mode.",
    lever: "Tie rewards to growth behaviors, not just outputs.",
    cqLens: "Protects order but suppresses initiative and learning — grit shows up only for the carrot.",
  },
  {
    slug: "situational",
    name: "Situational",
    def: "Flexes the approach to the readiness of each person. Adaptive — but demands a skilled read.",
    bestName: "Dwight Eisenhower",
    bestNote: "shifted style to fit allies and generals as the moment required.",
    worstName: "Tony Hayward (BP, Deepwater Horizon)",
    worstNote: "misread the situation, and a tone-deaf style deepened the crisis.",
    bestUse: "Mixed-commitment teams and fast-changing environments.",
    risk: "It fails whenever the leader misreads readiness.",
    tell: "If your interventions feel “off” — too harsh or too soft — you're misreading readiness.",
    lever: "Ask people directly: “Do you need more structure or more space right now?”",
    cqLens: "The most commitment-aligned style there is — but only if your read of each person is accurate.",
  },
  {
    slug: "transformational",
    name: "Transformational",
    def: "Inspires with vision, values, and stretch. Can lift people to greatness — or burn them out.",
    bestName: "Nelson Mandela",
    bestNote: "drove profound transformation through vision and resilience.",
    worstName: "Travis Kalanick (Uber)",
    worstNote: "vision-driven, but burned out the culture and the people in it.",
    bestUse: "Change, innovation, and scaling phases.",
    risk: "Burnout and turnover when commitment is mismatched to the pace.",
    tell: "If turnover spikes among your steady performers, you're overdriving grit.",
    lever: "Build in rest and recovery rhythms — transformational doesn't mean relentless.",
    cqLens: "Amplifies commitment in the ready; strains everyone whose grit can't yet carry the pace.",
  },
  {
    slug: "democratic",
    name: "Democratic / Participative",
    def: "Invites input and shares decisions. Builds ownership and surfaces ideas — but can bog down in consensus.",
    bestName: "Abraham Lincoln",
    bestNote: "built a “Team of Rivals” through inclusion and hard debate.",
    worstName: "Theresa May",
    worstNote: "consensus-seeking hardened into indecision during Brexit.",
    bestUse: "When innovation and buy-in matter most.",
    risk: "Paralysis when the situation is moving fast.",
    tell: "If meetings are lively but execution is weak, collaboration has slipped into diffusion.",
    lever: "End every decision with an explicit “who owns what.”",
    cqLens: "Fertile ground for high-commitment players; low-commitment people can hide behind the group.",
  },
  {
    slug: "coaching",
    name: "Coaching",
    def: "Develops people through feedback and long-term growth. Compounds capability — but is time-intensive.",
    bestName: "Phil Jackson",
    bestNote: "built championship teams by developing players' mindset and long-term growth.",
    worstName: "Marissa Mayer (Yahoo)",
    worstNote: "a coaching-heavy style read as micromanagement and bred disengagement.",
    bestUse: "Talent development and long-horizon growth environments.",
    risk: "Fatigue and resistance from low-commitment people when the pace never lets up.",
    tell: "If direct reports treat feedback as punishment instead of growth, the coaching style is mismatched.",
    lever: "Celebrate progress, not just critique — and match feedback pace to readiness.",
    cqLens: "Unlocks high-commitment potential; exposes low commitment quickly.",
  },
];

const FAQ = [
  {
    q: "What are the 9 leadership styles?",
    a: "The nine most commonly recognized leadership styles are: autocratic (command and control), servant (support the team first), charismatic (lead through presence), laissez-faire (hands-off), transactional (rules and rewards), situational (flex to each person), transformational (inspire through vision), democratic or participative (decide by input), and coaching (develop through feedback). Each has real strengths and a distinct failure mode — none is universally best.",
  },
  {
    q: "What is the best leadership style?",
    a: "There isn't one in the abstract. A style is only as good as its fit with the people under it. The same autocratic approach that steadies a shaky team in a crisis will drive your most committed people to quit; the same hands-off freedom that unlocks your self-starters lets a low-commitment team drift into chaos. The most adaptive styles — situational and coaching — clash least precisely because they flex to the person in front of them.",
  },
  {
    q: "Which leadership style is most effective?",
    a: "For most teams over the long run, situational and coaching styles tend to produce the best results, because they adjust to each person's readiness rather than forcing everyone into one mold. But that only works if you can actually read where each person is — their initiative, follow-through, and ability to learn under pressure. Flexing your style to what you can't see is just guessing with extra steps.",
  },
  {
    q: "How do I know which leadership style to use with my team?",
    a: "Start by reading the people, not the theory. Once you can see who is high or low on the behaviors that make up commitment — initiative, applied grit, and learnability — the right style becomes clear: give high-commitment people autonomy and stretch, and give structure-preferring people clarity and guardrails. The clash almost always comes from applying one default style to everyone regardless of who they are.",
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

export default function LeadershipStylesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › The 9 leadership styles"
        eyebrow="Leadership"
        title={<>The 9 leadership styles &mdash; and when each one actually works.</>}
      >
        Every leadership style is a strength in the right hands and a liability in
        the wrong ones. Here&rsquo;s each of the nine &mdash; done brilliantly and
        done badly by names you&rsquo;ll recognize &mdash; with the tell that
        you&rsquo;ve tipped from strength into weakness, and how to correct it.
      </PageHero>

      <ArticleMeta
        headline="The 9 leadership styles — and when each one actually works."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "The 9 leadership styles", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container className="max-w-[760px]">
          <div className="rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              There is no single best leadership style. Each one fits some people
              and fights others. The leaders who look effortless aren&rsquo;t using
              a &ldquo;better&rdquo; style &mdash; they&rsquo;re reading the{" "}
              <Link href="/how-it-works" className="text-green-soft underline">
                commitment behavior
              </Link>{" "}
              of the people in front of them and flexing to fit it. Below, each
              style at its best and its worst.
            </p>
          </div>

          {/* jump nav */}
          <nav className="mt-6 flex flex-wrap gap-2" aria-label="Jump to a style">
            {STYLES.map((s, i) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-edge-light bg-white px-3.5 py-1.5 text-[13px] font-semibold text-content transition-colors hover:border-green hover:text-green"
              >
                {i + 1}. {s.name}
              </a>
            ))}
          </nav>
        </Container>
      </Section>

      {/* the nine styles */}
      <Section tone="paper2" className="!pt-2">
        <Container className="max-w-[860px]">
          <div className="flex flex-col gap-5">
            {STYLES.map((s, i) => (
              <article
                key={s.slug}
                id={s.slug}
                className="scroll-mt-24 rounded-[18px] border border-edge-light bg-white p-6 sm:p-8"
              >
                <div className="text-[13px] font-bold uppercase tracking-[.05em] text-green">
                  Style {i + 1}
                </div>
                <h2 className="m-0 mt-1 font-display text-[24px] font-bold tracking-[-.02em] sm:text-[28px]">
                  {s.name}
                </h2>
                <p className="m-0 mt-2 text-[16px] leading-[1.6] text-content-muted">
                  {s.def}
                </p>

                {/* best / worst exemplars */}
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-[13px] border border-[#CDE7D6] bg-[#EBF5EE] p-4">
                    <div className="mb-1 text-[12px] font-bold uppercase tracking-[.04em] text-green">
                      Done well
                    </div>
                    <p className="m-0 text-[14px] leading-[1.5] text-[#2A4A38]">
                      <strong>{s.bestName}</strong> &mdash; {s.bestNote}
                    </p>
                  </div>
                  <div className="rounded-[13px] border border-[#EAD2CB] bg-[#F8ECE8] p-4">
                    <div className="mb-1 text-[12px] font-bold uppercase tracking-[.04em] text-signal-red">
                      Done badly
                    </div>
                    <p className="m-0 text-[14px] leading-[1.5] text-[#7A4536]">
                      <strong>{s.worstName}</strong> &mdash; {s.worstNote}
                    </p>
                  </div>
                </div>

                {/* best use / biggest risk */}
                <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  <div>
                    <dt className="text-[12.5px] font-bold uppercase tracking-[.04em] text-content-faint">
                      Best used for
                    </dt>
                    <dd className="m-0 mt-0.5 text-[14.5px] leading-[1.5] text-content">
                      {s.bestUse}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[12.5px] font-bold uppercase tracking-[.04em] text-content-faint">
                      Biggest risk
                    </dt>
                    <dd className="m-0 mt-0.5 text-[14.5px] leading-[1.5] text-content">
                      {s.risk}
                    </dd>
                  </div>
                </dl>

                {/* the tell */}
                <div className="mt-4 rounded-[12px] bg-paper-2 px-4 py-3">
                  <span className="text-[12.5px] font-bold uppercase tracking-[.04em] text-content-faint">
                    The tell&nbsp;
                  </span>
                  <span className="text-[15px] italic leading-[1.55] text-content">
                    &ldquo;{s.tell}&rdquo;
                  </span>
                </div>

                {/* course-correct + cq lens */}
                <p className="m-0 mt-4 text-[14.5px] leading-[1.6] text-content-muted">
                  <strong className="text-content">Course-correct:</strong>{" "}
                  {s.lever}
                </p>
                <p className="m-0 mt-2 text-[14.5px] leading-[1.6] text-content-muted">
                  <strong className="text-green">Through the CQ lens:</strong>{" "}
                  {s.cqLens}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* synthesis */}
      <Section tone="paper">
        <Container className="max-w-[760px]">
          <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The pattern underneath all nine
          </h2>
          <p className="m-0 mb-4 text-[17px] leading-[1.7] text-content-muted">
            Read the nine back to back and the same lesson keeps surfacing: the
            style is never the whole story. Autocratic control saves a team in
            crisis and suffocates it in calm. Laissez-faire freedom makes your
            self-starters and breaks everyone else. What decides the outcome
            isn&rsquo;t the style &mdash; it&rsquo;s the{" "}
            <Link href="/guides/leadership-style-clash" className="font-semibold text-green">
              fit between the style and the people
            </Link>{" "}
            under it.
          </p>
          <p className="m-0 mb-4 text-[17px] leading-[1.7] text-content-muted">
            That&rsquo;s why situational and coaching styles clash least &mdash;
            they flex to the person. But you can only flex to what you can see.
            Most leaders can name their own default style in a sentence; far fewer
            can say, with evidence, who on their team takes initiative under
            pressure, who follows through when it&rsquo;s hard, and who actually
            learns from being wrong. That second read is the one that turns any of
            these styles from a gamble into a fit.
          </p>
          <p className="m-0 text-[17px] leading-[1.7] text-content-muted">
            It&rsquo;s also where a{" "}
            <Link href="/guides/who-to-promote" className="font-semibold text-green">
              promotion
            </Link>{" "}
            or a{" "}
            <Link href="/for-eos/delegate-and-elevate" className="font-semibold text-green">
              delegation
            </Link>{" "}
            quietly goes wrong &mdash; a leader hands work off in the style that
            suits <em>them</em>, not the person catching it.
          </p>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Leadership styles: FAQ
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
            Lead to fit &mdash; once you can see the fit.
          </h2>
          <p className="m-0 mb-8 text-[18px] leading-[1.6] text-[#E4F5EB]">
            See exactly how each style meets high and low commitment in the{" "}
            <Link href="/guides/leadership-style-clash" className="font-semibold text-white underline">
              CQ clash matrix
            </Link>{" "}
            &mdash; or let Prove show you the commitment behavior of your own team,
            so you can match your style to your people instead of guessing.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[17px]">
              Book a call
            </ButtonLink>
            <ButtonLink
              href="/free-tools/certainty-diagnostic"
              variant="ghost-dark"
              className="!border-white !text-white hover:!border-white"
            >
              Take the diagnostic &rarr;
            </ButtonLink>
          </div>
        </div>
      </section>

      <RelatedGuides current={CANONICAL} />
      <Footer />
    </>
  );
}
