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
  title: "Why Good Employees Fail After a Promotion",
  description:
    "When a strong performer flops after promotion, it is usually a capacity mismatch, not a character flaw. Learn why good employees fail after promotion and how to prevent it.",
  alternates: { canonical: "/guides/failed-promotion" },
};

const MISMATCHES = [
  {
    n: "01",
    h: <>IC skill &ne; leadership skill</>,
    b: "Being the best doer does not mean being able to get work done through others.",
  },
  {
    n: "02",
    h: "They did not want it",
    b: "Some accept a promotion out of loyalty or money, not desire — and it shows within months.",
  },
  {
    n: "03",
    h: "Higher demand, same habits",
    b: "The new role needs more initiative or adaptability than they have ever had to show.",
  },
];

const PREVENT = [
  {
    h: "Prove before you promote",
    b: "Run a scoped stretch that demands the exact behavior the new role needs — and watch what happens.",
  },
  {
    h: "Coach the gap first",
    b: "If one trait is weak, develop it deliberately before you hand over authority, not after.",
  },
];

// GEO checklist — how to de-risk a promotion before the title changes, built on
// proving the behavior the new role demands rather than betting on hope.
const DERISK_STEPS = [
  "Define the behavior the new role actually needs — more initiative, higher-altitude judgment, faster learnability — not just the seniority of the title.",
  "Design a scoped stretch that demands that exact behavior at lower stakes, with a real outcome the person has to own.",
  "Watch how they carry it: do they act before being told, push through the hard middle, and adapt when the plan breaks?",
  "Confirm they actually want the role. Rule out the person who is accepting out of loyalty or money rather than desire.",
  "Coach any single weak trait deliberately, before the title change — develop the gap first, hand over authority second.",
  "Promote on proof, not tenure or gut feel. Give the role to the person whose behavior already looks like the next altitude.",
];

// FAQ — the format AI answer engines extract and cite. Answers stay faithful to
// the article and to behavioral, decision-support framing.
const FAQ = [
  {
    q: "Why do good employees fail after a promotion?",
    a: "Usually because the new role demands a behavior they have not proven yet — most often initiative or learnability at a higher altitude — and the promotion was a bet on hope rather than evidence. Being excellent at the old job says little about capacity for a bigger one. It is typically a capacity mismatch, not a character flaw.",
  },
  {
    q: "Is failing after a promotion a sign of a bad hire?",
    a: "No. The person who struggles was often a genuinely strong performer in their previous role. What failed was the match between the behavior the old job rewarded and the behavior the new one demands. Treating it as a character problem misreads a predictable, preventable mismatch.",
  },
  {
    q: "How do you prevent a failed promotion?",
    a: "Prove the missing behavior before the title changes. Run a scoped stretch that demands the exact initiative, judgment, or learnability the new role needs, at lower stakes, and watch how the person carries it. Coach any weak trait deliberately first — then promote on the behavior you actually saw, not on tenure or gut feel.",
  },
  {
    q: "What is the difference between a high performer and someone ready for promotion?",
    a: "A high performer has mastered the current role; readiness is about capacity for the next one. The two often diverge. Some of your best people are most valuable exactly where they are. Promotion readiness shows up as initiative beyond the role, follow-through on hard problems, and the learnability to adapt as demands grow.",
  },
  {
    q: "Should you promote someone who does not want the role?",
    a: "Be careful. People sometimes accept a promotion out of loyalty, money, or a sense they should — not desire — and the mismatch tends to surface within months. Before changing the title, confirm the person genuinely wants the different work, because motivation is part of the capacity the new role requires.",
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

export default function FailedPromotionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Failed promotions"
        eyebrow="Promotion risk"
        title={<>Why good employees fail after a promotion.</>}
      >
        You promoted your best person and watched them struggle. It felt personal.
        It was not &mdash; it was a predictable mismatch between the behavior the
        old role rewarded and the behavior the new one demands.
      </PageHero>

      <ArticleMeta
        headline="Why good employees fail after a promotion."
        description="When a strong performer flops after promotion, it is usually a capacity mismatch, not a character flaw. Learn why good employees fail after promotion and how to prevent it."
        canonical="/guides/failed-promotion"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Failed promotions", url: "/guides/failed-promotion" },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Good employees fail after promotion when the new role needs a
              behavior they have not proven yet &mdash; usually initiative or
              learnability at a higher altitude. The mistake is betting on{" "}
              <em>hope</em>; the fix is proving the missing behavior in a
              lower-stakes stretch first.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Why a promotion is a change of job, not a reward
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              A promotion feels like recognition, but it is really a different
              job. The behaviors that made someone the best individual contributor
              &mdash; deep focus, personal output, mastery of the craft &mdash;
              are often not the behaviors the next role rewards, which lean on
              getting work done through others, operating with less certainty, and
              deciding at a higher altitude. When a strong performer struggles
              after promotion, it is usually this gap, not a sudden loss of talent.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              Treating the promotion as a reward for past performance is what
              creates the trap. Past results prove someone has mastered the role
              they are in; they say almost nothing about capacity for a bigger,
              more ambiguous one. The two can diverge sharply &mdash; some of your
              most valuable people are happiest and strongest exactly where they
              are, and moving them &ldquo;up&rdquo; costs you a great contributor
              to gain a struggling manager.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              The failure is also predictable, which means it is preventable. If
              the new role will demand more initiative, faster learnability, or
              judgment under ambiguity, those are behaviors you can look for &mdash;
              and prove &mdash; before the title changes rather than after. The
              mistake most leaders make is betting on hope and finding out in
              production; the alternative is testing the missing behavior in a
              lower-stakes stretch first.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The three common mismatches
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {MISMATCHES.map((c) => (
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

      <Section tone="paper2">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            How to prevent it
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {PREVENT.map((c) => (
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
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to de-risk a promotion before the title changes
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Preventing a failed promotion is mostly a matter of moving the test
              earlier &mdash; proving the behavior the new role needs while the
              stakes are still low. In practice it looks like a checklist:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {DERISK_STEPS.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="m-0 mt-6 text-[17px] leading-[1.65] text-content-muted">
              The same behavioral read that de-risks a promotion tells you who is
              ready to carry more in general. It is closely related to how you{" "}
              <Link
                href="/guides/high-potential-employees"
                className="font-semibold text-green underline underline-offset-2"
              >
                identify high-potential employees
              </Link>{" "}
              and how you{" "}
              <Link
                href="/guides/how-to-delegate"
                className="font-semibold text-green underline underline-offset-2"
              >
                delegate with confidence
              </Link>{" "}
              &mdash; all three rest on proving capacity before you hand over
              authority.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Failed promotions: FAQ
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
            De-risk the next promotion.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call and we will show you how to prove readiness before the
            title change.
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

      <RelatedGuides current="/guides/failed-promotion" />
      <Footer />
    </>
  );
}
