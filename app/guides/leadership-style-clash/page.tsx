import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArticleMeta } from "@/components/ArticleMeta";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

const CANONICAL = "/guides/leadership-style-clash";

const DESCRIPTION =
  "Your leadership style isn't good or bad in a vacuum — it fits or clashes with your team's commitment behavior. See how 9 leadership styles interact with high and low CQ.";

export const metadata: Metadata = {
  title: "Leadership Styles & the CQ Clash Matrix",
  description: DESCRIPTION,
  keywords: [
    "leadership styles",
    "leadership style and team performance",
    "autocratic vs democratic leadership",
    "situational leadership",
    "leadership style clash",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Leadership Styles & the CQ Clash Matrix",
    description:
      "How 9 leadership styles fit or clash with your team's commitment behavior (Initiative, Applied Grit, Learnability).",
    url: CANONICAL,
    type: "article",
  },
};

type Row = { high: string; low: string; clash: string };
type Style = {
  name: string;
  def: string;
  fit: "low" | "medium" | "high";
  fitNote: string;
  traits: { Initiative: Row; "Applied Grit": Row; Learnability: Row };
};

const STYLES: Style[] = [
  {
    name: "Autocratic",
    def: "Decides alone, expects compliance, leaves little room for input.",
    fit: "high",
    fitNote: "High clash",
    traits: {
      Initiative: {
        high: "Frustrated, stifled, disengage or quit.",
        low: "Comfortable with direction, but dependent.",
        clash: "Rebellion or disengagement; innovation blocked.",
      },
      "Applied Grit": {
        high: "Grit wasted on compliance survival.",
        low: "Crumbles under pressure, seen as weak.",
        clash: "Misapplied effort; burnout without progress.",
      },
      Learnability: {
        high: "Curiosity suppressed, adapts less.",
        low: "Fine short-term but stagnates.",
        clash: "Both high and low underperform; innovation dies.",
      },
    },
  },
  {
    name: "Transactional",
    def: "Runs on clear rules and rewards — do the work, get the payoff.",
    fit: "high",
    fitNote: "High clash",
    traits: {
      Initiative: {
        high: "Frustrated by rigid systems.",
        low: "Thrives with clear rewards.",
        clash: "Disengagement when creativity is blocked.",
      },
      "Applied Grit": {
        high: "Drives hard, but only for the reward.",
        low: "Gives up without an external push.",
        clash: "Resilience tied to extrinsic factors.",
      },
      Learnability: {
        high: "Finds growth limited.",
        low: "Works fine but plateaus.",
        clash: "Innovation sacrificed for predictability.",
      },
    },
  },
  {
    name: "Charismatic",
    def: "Leads on personal magnetism and inspiration; the leader is the center.",
    fit: "high",
    fitNote: "Dependency risk",
    traits: {
      Initiative: {
        high: "Inspired, but may feel overshadowed.",
        low: "Relies too much on the leader.",
        clash: "Dependency vs. independence tension.",
      },
      "Applied Grit": {
        high: "Loyal, but misdirected if the vision is unclear.",
        low: "Fades when the enthusiasm dips.",
        clash: "Sustainability tied to the leader's presence.",
      },
      Learnability: {
        high: "Adapts, but risks mimicry over growth.",
        low: "Follows blindly.",
        clash: "Over-reliance on leader charisma.",
      },
    },
  },
  {
    name: "Transformational",
    def: "Rallies people around a big vision and stretch goals.",
    fit: "medium",
    fitNote: "Fits high-CQ",
    traits: {
      Initiative: {
        high: "Energized by the vision.",
        low: "Overwhelmed by expectations.",
        clash: "Low-initiative people dragged into the stretch zone.",
      },
      "Applied Grit": {
        high: "Stays resilient under pressure.",
        low: "Burns out quickly.",
        clash: "Mismatch creates turnover risk.",
      },
      Learnability: {
        high: "Thrives in innovation.",
        low: "Struggles with the change pace.",
        clash: "Growth gaps widen over time.",
      },
    },
  },
  {
    name: "Democratic",
    def: "Decides by input and consensus; everyone has a voice.",
    fit: "medium",
    fitNote: "Fits high-CQ",
    traits: {
      Initiative: {
        high: "Flourishes with a voice.",
        low: "May stall in indecision.",
        clash: "Low-initiative people drag the consensus.",
      },
      "Applied Grit": {
        high: "Carries shared outcomes.",
        low: "Over-relies on others.",
        clash: "Uneven workload distribution.",
      },
      Learnability: {
        high: "Gains from diverse input.",
        low: "Struggles to adapt in group learning.",
        clash: "Slow decisions frustrate high-learners.",
      },
    },
  },
  {
    name: "Servant",
    def: "Leads by supporting and removing obstacles for the team.",
    fit: "medium",
    fitNote: "Needs discipline",
    traits: {
      Initiative: {
        high: "Thrives with autonomy and support.",
        low: "Needs direction, may coast.",
        clash: "Clashes if the leader avoids tough calls.",
      },
      "Applied Grit": {
        high: "Sustains effort with support.",
        low: "Coddled, avoids hard challenges.",
        clash: "Risk of enabling low performers.",
      },
      Learnability: {
        high: "Growth explodes.",
        low: "Learns slowly, but supported.",
        clash: "Requires discipline to balance support and standards.",
      },
    },
  },
  {
    name: "Laissez-Faire",
    def: "Hands-off; sets direction, then leaves people to it.",
    fit: "high",
    fitNote: "Polarizing",
    traits: {
      Initiative: {
        high: "Steps up and self-directs.",
        low: "Stalls and drifts.",
        clash: "Polarizes team outcomes.",
      },
      "Applied Grit": {
        high: "Persists independently.",
        low: "Gives up without structure.",
        clash: "High performers shine; low performers collapse.",
      },
      Learnability: {
        high: "Self-learns rapidly.",
        low: "Becomes stagnant.",
        clash: "Reveals hidden gems, but risks chaos.",
      },
    },
  },
  {
    name: "Situational",
    def: "Reads each person and flexes the approach to match them.",
    fit: "low",
    fitNote: "Low clash",
    traits: {
      Initiative: {
        high: "Gets stretched appropriately.",
        low: "Supported until ready.",
        clash: "Low clash — the style adapts.",
      },
      "Applied Grit": {
        high: "Pushed further with resilience.",
        low: "Coached to build stamina.",
        clash: "Minimal clash if the leader is skilled.",
      },
      Learnability: {
        high: "Grows fast with adaptation.",
        low: "Gradual learning pace, matched.",
        clash: "Depends on the leader reading CQ accurately.",
      },
    },
  },
  {
    name: "Coaching",
    def: "Develops people over time through feedback and stretch.",
    fit: "low",
    fitNote: "Low clash",
    traits: {
      Initiative: {
        high: "Develops leadership capacity.",
        low: "Slowly builds ownership.",
        clash: "Clashes if low-initiative resists responsibility.",
      },
      "Applied Grit": {
        high: "Refines resilience through feedback.",
        low: "May struggle with constant stretch.",
        clash: "Risk of overwhelm without balance.",
      },
      Learnability: {
        high: "Accelerates growth.",
        low: "Needs more repetition and patience.",
        clash: "Mismatch if the growth pace differs.",
      },
    },
  },
];

const FIT_BADGE: Record<Style["fit"], string> = {
  low: "bg-[#E7F3EC] text-green",
  medium: "bg-[#FBF1DA] text-[#B07E1E]",
  high: "bg-[#F7E4DE] text-signal-red",
};

const TRAITS: (keyof Style["traits"])[] = [
  "Initiative",
  "Applied Grit",
  "Learnability",
];

const FAQ = [
  {
    q: "What is the best leadership style?",
    a: "There isn't one. A style is only as good as its fit with the people under it. The same autocratic approach that steadies a low-CQ team in a crisis will drive your high-initiative people to quit. The useful question isn't which style is best in the abstract — it's which style fits the commitment behavior of the specific people you're leading.",
  },
  {
    q: "How does leadership style affect employee performance?",
    a: "Style sets the conditions your people operate in. A high-CQ person — someone who takes initiative, follows through, and adapts — needs room to move, and withers under tight control. A person who thrives on structure drifts under a hands-off leader. Performance suffers most when the style and the person are mismatched, not because either is wrong.",
  },
  {
    q: "What is a leadership style clash?",
    a: "A clash is when your default way of leading works against the behavior of the person you're leading. Laissez-faire leadership reveals your self-starters but lets your low-CQ people drift into chaos. Autocratic leadership keeps a shaky team in line but wastes the grit of your best people on mere compliance. The clash — not the style — is what costs you.",
  },
  {
    q: "How do I choose the right leadership style for my team?",
    a: "Start by seeing your team clearly. Once you know who is high or low on Initiative, Applied Grit, and Learnability, you can flex: give your high-CQ people autonomy and stretch, and give your structure-preferring people clarity and guardrails. Situational and coaching styles clash least precisely because they adapt to the person in front of them.",
  },
  {
    q: "Is a low-CQ employee a bad employee?",
    a: "No. CQ measures behavioral readiness under pressure and ambiguity — not talent, skill, or worth. Plenty of excellent people score low on CQ because they do their best work inside clear, well-structured lanes. CQ is a fit map, not a ranking. The goal is to match your style and your roles to the person, not to push everyone toward high CQ.",
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

export default function LeadershipStyleClashPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Leadership style & CQ"
        eyebrow="Leadership"
        title={<>Your leadership style isn&rsquo;t the problem. The clash is.</>}
      >
        No leadership style is good or bad in a vacuum. Each one fits some people
        and fights others &mdash; depending on their commitment behavior. Here&rsquo;s
        how nine styles collide with high and low{" "}
        <Link href="/how-it-works" className="text-green-soft underline">
          CQ
        </Link>{" "}
        &mdash; and what to do about it.
      </PageHero>

      <ArticleMeta
        headline="Your leadership style isn't the problem. The clash is."
        description={DESCRIPTION}
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Leadership style & CQ", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              The same style that steadies one team quietly sabotages another. An
              autocratic leader keeps a shaky group in line but wastes the grit of
              their best people; a hands-off leader frees the self-starters but
              lets everyone else drift. The fix isn&rsquo;t a &ldquo;better&rdquo;
              style &mdash; it&rsquo;s knowing the commitment behavior of the people
              you&rsquo;re leading, then flexing to fit it.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container className="max-w-[760px]">
          <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            CQ is a fit map, not a ranking
          </h2>
          <p className="m-0 mb-4 text-[17px] leading-[1.7] text-content-muted">
            The Commitment Quotient scores three behaviors under pressure:{" "}
            <strong>Initiative</strong> (acting without being told),{" "}
            <strong>Applied Grit</strong> (following through when it&rsquo;s hard),
            and <strong>Learnability</strong> (adapting and growing). High CQ
            isn&rsquo;t automatically &ldquo;good,&rdquo; and low CQ isn&rsquo;t
            &ldquo;bad.&rdquo; Some of your most valuable people score low because
            they do excellent work inside clear, structured lanes.
          </p>
          <p className="m-0 text-[17px] leading-[1.7] text-content-muted">
            That&rsquo;s why the matrix below reads high <em>and</em> low for every
            trait &mdash; the risk is almost never the style or the person alone.
            It&rsquo;s the <strong>mismatch</strong> between them. Read your own
            default style, then read your people.
          </p>
        </Container>
      </Section>

      <Section tone="paper">
        <Container wide className="max-w-[1080px]">
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The leadership-style × CQ clash matrix
          </h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {STYLES.map((s) => (
              <div
                key={s.name}
                className="rounded-[18px] border border-edge-light bg-white p-6"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="m-0 font-display text-[21px] font-bold tracking-[-.01em]">
                      {s.name}
                    </h3>
                    <p className="m-0 mt-1 text-[13.5px] leading-[1.45] text-content-faint">
                      {s.def}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[11.5px] font-bold ${FIT_BADGE[s.fit]}`}
                  >
                    {s.fitNote}
                  </span>
                </div>
                <div className="flex flex-col divide-y divide-edge-light border-t border-edge-light">
                  {TRAITS.map((t) => (
                    <div key={t} className="py-3">
                      <div className="mb-1.5 text-[13px] font-bold text-green">
                        {t}
                      </div>
                      <dl className="m-0 grid grid-cols-1 gap-1 text-[13px] leading-[1.45] sm:grid-cols-[64px_1fr]">
                        <dt className="font-semibold text-content-faint">High</dt>
                        <dd className="m-0 text-[#4A5A50]">{s.traits[t].high}</dd>
                        <dt className="font-semibold text-content-faint">Low</dt>
                        <dd className="m-0 text-[#7A6E58]">{s.traits[t].low}</dd>
                        <dt className="font-semibold text-signal-red">Clash</dt>
                        <dd className="m-0 text-[#615B4F]">{s.traits[t].clash}</dd>
                      </dl>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] text-content-faint">
            Read each cell as: how a person <strong>high</strong> on that trait
            fares under this style, how a <strong>low</strong> person fares, and
            the resulting <strong>clash</strong> to watch for.
          </p>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container className="max-w-[760px]">
          <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            What to do about it
          </h2>
          <p className="m-0 mb-4 text-[17px] leading-[1.7] text-content-muted">
            Two facts sit under every row above: your default leadership style,
            and the commitment behavior of each person you lead. You already know
            the first. The second is the one most leaders are guessing at &mdash;
            and it&rsquo;s the one that decides whether your style lands as support
            or friction.
          </p>
          <p className="m-0 mb-4 text-[17px] leading-[1.7] text-content-muted">
            The most adaptive styles &mdash; <strong>situational</strong> and{" "}
            <strong>coaching</strong> &mdash; clash least precisely because they
            flex to the person. But you can only flex to what you can see. Give
            your high-CQ people autonomy and stretch; give your structure-preferring
            people clarity and guardrails. Same leader, different setting, far less
            friction.
          </p>
          <p className="m-0 text-[17px] leading-[1.7] text-content-muted">
            This is also where a{" "}
            <Link href="/for-eos/delegate-and-elevate" className="font-semibold text-green">
              delegation
            </Link>{" "}
            or a{" "}
            <Link href="/guides/who-to-promote" className="font-semibold text-green">
              promotion
            </Link>{" "}
            call quietly goes wrong: a leader hands off in the style that suits{" "}
            <em>them</em>, not the person catching it. See who can carry what, and
            the clash disappears.
          </p>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Leadership style &amp; CQ: FAQ
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
            Prove shows you the commitment behavior of your team &mdash; so you can
            match your style to your people instead of guessing.
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

      <RelatedGuides current="/guides/leadership-style-clash" />
      <Footer />
    </>
  );
}
