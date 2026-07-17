import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { Container, Eyebrow, Section, ButtonLink } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Problem Isn't Your People. It's the Metric.",
  description:
    "Only 21% of the workforce is 'engaged,' says Gallup. But engagement measures how people feel about their environment — not how they behave under pressure. Here's why engagement is the wrong metric, and what to measure instead: commitment behavior.",
  alternates: { canonical: "/guides/its-the-metric" },
};

const BEHAVIORS = [
  { name: "Initiative", body: "Do they act without waiting to be told?" },
  { name: "Applied Grit", body: "Do they own the outcome when it gets hard?" },
  { name: "Learnability", body: "Do they grow under pressure?" },
];

export default function ItsTheMetricPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › The metric is the problem"
        eyebrow="A point of view"
        title={
          <>
            The problem isn&rsquo;t your people. It&rsquo;s the metric.
          </>
        }
      >
        Only 21% of the global workforce is &ldquo;engaged,&rdquo; according to
        Gallup. If that were true, four out of five people you work with would be
        mentally checked out. Look around your team. You know that isn&rsquo;t
        right.
      </PageHero>

      <ArticleMeta
        headline="The problem isn't your people. It's the metric."
        description="Only 21% of the workforce is 'engaged,' says Gallup. But engagement measures how people feel about their environment — not how they behave under pressure. Here's why engagement is the wrong metric, and what to measure instead: commitment behavior."
        canonical="/guides/its-the-metric"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "The metric is the problem", url: "/guides/its-the-metric" },
        ]}
      />

      <Section tone="paper">
        <Container className="max-w-[720px]">
          <p className="m-0 mb-[22px] text-[19px] leading-[1.7] text-[#2A261D]">
            You know people who deliver consistently, take initiative when no one
            is watching, and learn fast without drama. They don&rsquo;t always
            smile in pulse surveys or say the &ldquo;right&rdquo; thing in a
            12-question vibe check. But they show up when it matters.
          </p>
          <p className="m-0 mb-[22px] text-[19px] leading-[1.7] text-[#2A261D]">
            So what are we actually measuring? Let&rsquo;s tear it down from first
            principles.
          </p>

          <h2 className="mb-4 mt-11 font-display text-[30px] font-bold tracking-[-.02em]">
            1. What is Gallup actually measuring?
          </h2>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            Engagement scores are built on sentiment (&ldquo;Do I have a best
            friend at work?&rdquo;) and context cues (&ldquo;Do I know what&rsquo;s
            expected of me?&rdquo;). What they don&rsquo;t measure: performance,
            applied grit, initiative, learning velocity, adaptive behavior, or
            real contribution. They measure how people <em>feel</em> about their
            environment &mdash; not how they <em>behave</em> under pressure.
          </p>

          <h2 className="mb-4 mt-11 font-display text-[30px] font-bold tracking-[-.02em]">
            2. What does a 21% engagement rate really say?
          </h2>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            It doesn&rsquo;t mean most of your team is failing. It means the metric
            is misaligned with how value is actually created. It rewards charisma
            over consistency, visibility over value, energy over execution &mdash;
            and it insults the quiet top performers solving real problems without
            broadcasting them.
          </p>

          <div className="my-9 rounded-[18px] bg-ink px-[34px] py-[30px] text-paper on-dark">
            <p className="m-0 text-[19px] leading-[1.6] text-[#E8E4D6]">
              Engagement is like Newtonian physics: useful and elegant &mdash; but
              only under ideal conditions. We now operate in relativistic systems:
              fast-moving, high-pressure, high-ambiguity. We need a way to see what
              people actually do{" "}
              <span className="text-green-soft">when gravity shifts.</span>
            </p>
          </div>

          <h2 className="mb-4 mt-11 font-display text-[30px] font-bold tracking-[-.02em]">
            3. So what should we measure instead?
          </h2>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            When things get hard, ambiguous, or messy &mdash; who still delivers?
            That&rsquo;s not engagement. That&rsquo;s{" "}
            <strong>commitment behavior</strong>:
          </p>
          <div className="mb-[22px] grid grid-cols-1 gap-3.5 md:grid-cols-3">
            {BEHAVIORS.map((b) => (
              <div
                key={b.name}
                className="rounded-[14px] border border-edge-light bg-white p-[22px]"
              >
                <div className="mb-1.5 font-display font-bold text-green">
                  {b.name}
                </div>
                <p className="m-0 text-[14.5px] leading-[1.5] text-[#615B4F]">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
          <p className="m-0 mb-[22px] text-[18px] leading-[1.7] text-[#3A362C]">
            That&rsquo;s what the <strong>Commitment Quotient</strong> is built to
            surface &mdash; and it&rsquo;s the lens most leaders are missing when
            they&rsquo;re about to overlook, mislabel, or cut a hidden gem.
          </p>

          <h2 className="mb-4 mt-11 font-display text-[30px] font-bold tracking-[-.02em]">
            The two hidden gems every leader misses
          </h2>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            American business culture says you must always climb: refuse a
            promotion and people assume something&rsquo;s wrong with you. But some
            of your best people just want to come in, do great work, go home, and
            be left alone &mdash; and they are a gift. You should not be dragging
            them up a ladder they never asked to climb. The trick is knowing who
            they are.
          </p>
          <p className="m-0 mb-4 text-[18px] leading-[1.7] text-[#3A362C]">
            The opposite gem is just as invisible: the entry-level hire taking
            classes at night, teaching themselves, hungry to grow &mdash; and
            getting no attention because of the seat they happen to sit in. Those
            are the people to train, stretch, and promote. Commitment behavior
            surfaces both &mdash; so you stop guessing and start growing the right
            people the way <em>they</em> want to grow.
          </p>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container className="max-w-[720px]">
          <div className="rounded-[14px] border-l-4 border-green bg-paper-2 px-[34px] py-[30px]">
            <div className="mb-2.5 text-[13px] font-bold uppercase tracking-[.12em] text-green">
              Where this goes next
            </div>
            <p className="m-0 text-[18px] leading-[1.65] text-[#2A261D]">
              Performance is a terrible predictor of leadership. So is
              &ldquo;potential&rdquo; &mdash; a gut feel that only pays off if the
              stars align and the coaching, mentoring, and support are all there,
              which in a small business they rarely are. There is no test for how
              someone leads until you put them in the role.{" "}
              <strong>
                That is exactly what a Prove Sprint does &mdash; before the title,
                not after.
              </strong>
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container className="max-w-[760px]">
          <div className="rounded-[22px] bg-ink px-10 py-11 text-paper on-dark">
            <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[.14em] text-green-soft">
              A 60-second case
            </div>
            <h2 className="m-0 mb-4 font-display text-[30px] font-bold tracking-[-.02em]">
              He looked like a leader&hellip; until we ran the Sprint.
            </h2>
            <p className="m-0 mb-3.5 text-[17px] leading-[1.65] text-[#B8B4A6]">
              A founder was stuck between two potential team leads. One looked
              perfect on paper. The other was quieter &mdash; but consistent.
              After six weeks of high-pressure, low-signal challenges, only one
              followed through.
            </p>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-[#E8E4D6]">
              The &ldquo;perfect&rdquo; one delegated everything. The quiet one
              built a process from scratch and led the team through it. They
              didn&rsquo;t need a title. They needed a challenge &mdash; and the
              Prove Sprint delivered it.
            </p>
            <ButtonLink href={site.bookingUrl} variant="primary">
              See who really leads &mdash; book a call
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <RelatedGuides current="/guides/its-the-metric" />
      <Footer />
    </>
  );
}
