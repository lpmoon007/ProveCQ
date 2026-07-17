import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Promote From Within or Hire Outside? How to Decide",
  description:
    "Promoting from within builds loyalty but risks the Peter Principle; hiring outside brings skills but risks culture and cost. Learn how to decide with behavioral proof.",
  alternates: { canonical: "/guides/promote-vs-hire" },
};

const WITHIN = [
  {
    h: "An insider has proven the behavior",
    b: "They already show the initiative, applied grit, and learnability the new role demands.",
  },
  {
    h: "Culture & context matter most",
    b: "The role needs deep institutional knowledge more than a new skill set.",
  },
];

const OUTSIDE = [
  {
    h: "No proven internal candidate",
    b: "Nobody has shown the behavior, and the cost of a failed promotion is too high to gamble.",
  },
  {
    h: "You need a capability you lack",
    b: "The gap is a genuine skill the team cannot coach into someone in time.",
  },
];

// A decision sequence — how to actually run the promote-vs-hire call
// on behavior rather than tenure, budget, or who asked first.
const DECIDE = [
  "Define the role by behavior, not title — write down the two or three things the person will actually have to do that the last person did not.",
  "Name every internal candidate who could plausibly grow into it, including the quiet ones who never lobby for themselves.",
  "Ask what each internal candidate has already proven versus what you are hoping they will become — separate evidence from optimism.",
  "Price the downside of a failed promotion: a lost individual contributor plus a struggling manager plus the team that reports to them.",
  "Only open an external search when no internal candidate has proven the behavior and the gap is a real skill you cannot coach in time.",
  "If you do hire outside, treat the first weeks as proof, not celebration — watch behavior before you hand over scope.",
];

// FAQ — the format AI answer engines extract and cite.
const FAQ = [
  {
    q: "Is it better to promote from within or hire externally?",
    a: "Neither is better in the abstract — it depends on proof. Promote from within when an internal candidate has already demonstrated the behavior the new role demands: initiative beyond their current job, follow-through on hard problems, and fast learning. Hire externally when no internal candidate has shown that behavior and the missing capability is a genuine skill you cannot coach into someone in the time you have.",
  },
  {
    q: "What is the Peter Principle and how do you avoid it?",
    a: "The Peter Principle is the tendency to promote people until they reach a role they cannot do — rewarding excellence at one job with a different job they were never shown to be good at. You avoid it by promoting on demonstrated capacity for the next role rather than mastery of the current one. Your best individual contributor is not automatically your best manager; the two roles require different behavior.",
  },
  {
    q: "How do you decide who to promote?",
    a: "Define the target role by the behaviors it actually requires, list everyone who could grow into it, and separate what each person has proven from what you are hoping they will become. The strongest candidate is the one who has already shown initiative, applied grit, and learnability under real conditions — not the one with the longest tenure or the loudest case for themselves.",
  },
  {
    q: "What is the real cost of a wrong promotion?",
    a: "A failed promotion costs more than a hiring miss because it compounds. You lose a strong individual contributor, gain a struggling manager, and put the team reporting to that person under weaker leadership. Reversing it is slow and politically expensive. That downside is exactly why the decision should hinge on demonstrated behavior rather than convenience.",
  },
  {
    q: "How does behavioral proof help with the promote-versus-hire decision?",
    a: "Behavioral proof replaces the gut call with a signal built from observed behavior. A Prove cycle scores Initiative, Applied Grit, and Learnability from several weeks of real work, so you can compare an internal candidate and an external one on the same evidence — capacity to do the next job — rather than on charm, tenure, or a strong interview.",
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

export default function PromoteVsHirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Promote vs. hire"
        eyebrow="People decisions"
        title={<>Promote from within, or hire outside?</>}
      >
        Both paths have a failure mode. Promote the wrong insider and you lose a
        great doer and gain a struggling manager. Hire the wrong outsider and you
        pay a premium for a culture misfit. Proof breaks the tie.
      </PageHero>

      <ArticleMeta
        headline="Promote from within, or hire outside?"
        description="Promoting from within builds loyalty but risks the Peter Principle; hiring outside brings skills but risks culture and cost. Learn how to decide with behavioral proof."
        canonical="/guides/promote-vs-hire"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Promote vs. hire", url: "/guides/promote-vs-hire" },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Promote from within when an internal candidate has already{" "}
              <em>proven</em> the behavior the new role needs; hire outside when
              no one has and the gap is too costly to coach. The decision should
              hinge on demonstrated capacity, not tenure or convenience.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              The decision is about proof, not preference
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              &ldquo;Promote from within or hire outside&rdquo; is usually framed
              as a values question &mdash; loyalty versus fresh blood, culture
              versus capability. That framing is where the mistake starts. The
              decision is not about which path you prefer in general; it is about
              which candidate, internal or external, has already shown the behavior
              the open role actually needs. Every role has a small number of things
              the person must be able to do that the previous holder did not, and
              the right call is the one backed by evidence that someone can do
              them.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              Promoting from within has a real edge when it works: an insider has
              context, relationships, and institutional memory that an outsider
              spends months rebuilding. But tenure is not proof. The most common
              internal-promotion failure is rewarding someone&rsquo;s excellence at
              their current job with a different job they were never shown to be
              good at &mdash; the Peter Principle in action. Your strongest
              individual contributor is not automatically your strongest manager,
              because the two roles reward different behavior.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              Hiring outside is the right move when no internal candidate has
              proven the behavior and the gap is a genuine skill you cannot coach
              into someone in time. But an external hire trades known behavior for
              an unknown, at a premium, with a real risk of culture misfit. That is
              why the honest version of this decision compares the two options on
              the same evidence &mdash; demonstrated capacity for the next role
              &mdash; rather than on tenure, budget, or who happened to ask first.
              When the tie is close, the cost of a{" "}
              <Link href="/guides/failed-promotion" className="font-semibold text-green underline-offset-2 hover:underline">
                failed promotion
              </Link>{" "}
              should push you toward whichever candidate has the most proof, not
              the most seniority.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to make the call
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Run the decision as a sequence, not a debate. Each step moves the
              choice from preference toward evidence:
            </p>
            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {DECIDE.map((d, i) => (
                <li
                  key={d}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-display font-bold text-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {d}
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            When to promote from within
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {WITHIN.map((c) => (
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

      <Section tone="paper2">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            When to hire outside
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {OUTSIDE.map((c) => (
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

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Promote vs. hire: FAQ
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
            Make the call on proof.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove compares internal and external candidates
            on behavior.
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

      <RelatedGuides current="/guides/promote-vs-hire" />
      <Footer />
    </>
  );
}
