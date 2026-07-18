import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/guides/when-to-hire-a-second-in-command";

export const metadata: Metadata = {
  title: "When to Hire a Second-in-Command (COO / #2)",
  description:
    "Know when to hire a COO or second-in-command, what a #2 actually does, and why the wrong Integrator hire is worse than none — because they touch everything.",
  keywords: [
    "when to hire a coo",
    "second in command",
    "when to hire a number 2",
    "hire an integrator",
    "chief of staff vs coo",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "When to Hire a Second-in-Command (COO / #2)",
    description:
      "Know when to hire a COO or second-in-command, what a #2 actually does, and why the wrong Integrator hire is worse than none — because they touch everything.",
    url: CANONICAL,
    type: "article",
  },
};

const SIGNS = [
  {
    n: "01",
    h: "You are the execution bottleneck",
    b: <>Nothing ships without routing through you. Momentum stalls the moment your attention moves elsewhere.</>,
  },
  {
    n: "02",
    h: "Vision-versus-ops whiplash",
    b: <>You lose whole days switching between big-picture work and day-to-day firefighting &mdash; and do neither well.</>,
  },
  {
    n: "03",
    h: "Things slip when you step back",
    b: <>Take a week off and details fall through the cracks. There is no one whose job it is to make the plan real.</>,
  },
];

// paper2 checklist — how to know you've found the right #2 (proof, not resume).
const RIGHT_ONE = [
  "They have run day-to-day execution at real scale before — not just advised on it.",
  "They finish. You can point to hard things they carried across the line, not just started.",
  "They make the system run without you in the room, rather than becoming a second bottleneck.",
  "They get the work, want the work, and have the capacity to do the work — proven, not promised.",
  "You have seen their follow-through with your own eyes, not inferred it from a polished interview.",
];

const FAQ = [
  {
    q: "When should you hire a COO or second-in-command?",
    a: "Hire a second-in-command when you have become the bottleneck on execution — when work only moves if it routes through you, when you lose days switching between vision and operations, and when details slip the moment you step back. The trigger is not revenue or headcount alone; it is that day-to-day execution now needs a dedicated owner so you can work on the business instead of in it.",
  },
  {
    q: "What does a second-in-command do?",
    a: "A second-in-command runs day-to-day execution so the founder can focus on strategy, vision, and the few decisions only they can make. They own the operating rhythm — turning goals into plans, holding the team accountable to them, and closing the gaps between departments. A chief of staff typically amplifies the founder's time and coordinates; a COO owns operations and functions end to end; the #2 is the person the whole team runs on when the founder looks up.",
  },
  {
    q: "What is a Visionary and Integrator in EOS?",
    a: "In the EOS framework, the Visionary is the founder-type who generates ideas, direction, and big relationships, while the Integrator is the second-in-command who harmonizes the team and drives execution against the plan. Prove works alongside EOS: whatever you call the seat, the question is whether a specific person can actually run it — which is a matter of proven behavior, not a title on the accountability chart.",
  },
  {
    q: "Should you promote a #2 from within or hire externally?",
    a: "Both can work, and both fail for the same reason: assuming capacity instead of proving it. An internal promote already understands your business and has earned trust, but may never have run execution at the next level. An external hire brings scale experience but is unproven inside your context. Either way, the decision should rest on demonstrated follow-through in a role close to the one you are handing over — not on tenure or an impressive resume.",
  },
  {
    q: "Why do second-in-command hires fail?",
    a: "Because the #2 touches everything, a wrong hire does more damage than an empty seat — the whole operation absorbs their gaps. Most failures trace back to hiring on a great interview and a strong resume rather than proof of capacity and follow-through. The candidate looked the part, but had never actually run day-to-day execution at that level. The fix is to prove it before you hand over the keys.",
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

export default function WhenToHireSecondInCommandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › When to hire a second-in-command"
        eyebrow="Hiring"
        title={<>When to hire a second-in-command.</>}
      >
        A COO, a #2, an Integrator to your Visionary &mdash; the name changes, the
        job does not. A second-in-command runs day-to-day execution so you can work
        on the business. The hard part is knowing when you need one, and being
        certain you have found the right one.
      </PageHero>

      <ArticleMeta
        headline="When to hire a second-in-command."
        description="Know when to hire a COO or second-in-command, what a #2 actually does, and why the wrong Integrator hire is worse than none — because they touch everything."
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          {
            name: "When to hire a second-in-command",
            url: CANONICAL,
          },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Hire a second-in-command when you have become the bottleneck on
              execution &mdash; when work stalls without you and you keep whiplashing
              between vision and operations. But move carefully: a #2 touches
              everything, so the wrong hire is worse than none. Decide on proven
              capacity and follow-through, not on a strong interview.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Signs it&rsquo;s time for a #2
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {SIGNS.map((c) => (
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
          <p className="mx-auto mt-6 max-w-[760px] text-[16px] leading-[1.65] text-content-muted">
            If two or three of these sound familiar, you are likely living inside
            the{" "}
            <Link href="/founder-bottleneck" className="font-semibold text-green hover:underline">
              founder bottleneck
            </Link>
            . A second-in-command is the standard answer &mdash; but it is only the
            right answer if the person you put in the seat can actually run it.
          </p>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              What a second-in-command actually does
            </h2>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              A second-in-command exists to run day-to-day execution so the founder
              can spend time on the business rather than in it. They own the
              operating rhythm: they turn goals into plans, hold the team
              accountable to those plans, and close the gaps between departments
              that no single function owns. When they are working, the organization
              keeps moving whether or not you are in the room.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              The titles blur, so it helps to be precise. A{" "}
              <strong>chief of staff</strong> amplifies your time &mdash;
              coordinating, sequencing, and clearing the path in front of you. A{" "}
              <strong>COO</strong> owns operations and functions end to end. A
              general <strong>#2</strong> is simply the person the whole team runs
              on when you look up. Different scopes, one shared purpose: taking
              execution off the founder&rsquo;s plate.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              If you run on EOS, this is the <strong>Visionary and Integrator</strong>{" "}
              pairing. The Visionary generates ideas, direction, and big
              relationships; the Integrator harmonizes the team and drives
              relentless execution against the plan. Prove works alongside EOS
              &mdash; whatever you call the seat, the real question is whether one
              specific person can run it. That is a{" "}
              <Link href="/for-eos/right-person-right-seat" className="font-semibold text-green hover:underline">
                right person, right seat
              </Link>{" "}
              problem, and it is answered by behavior, not by a title on the
              accountability chart.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to know you&rsquo;ve found the right one
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Because a #2 touches everything, hiring the wrong one is worse than
              having no one at all &mdash; their gaps ripple through the entire
              operation. So the bar is not an impressive resume or a smooth
              interview. It is proof. The EOS test of{" "}
              <Link href="/for-eos/gwc" className="font-semibold text-green hover:underline">
                Gets it, Wants it, Capacity to do it (GWC)
              </Link>{" "}
              is the right frame &mdash; and each of these should be demonstrated,
              not assumed:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {RIGHT_ONE.map((c) => (
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
              This is also where the{" "}
              <Link href="/guides/promote-vs-hire" className="font-semibold text-green hover:underline">
                promote-versus-hire
              </Link>{" "}
              decision lives. An internal promote knows your business and has earned
              trust but may never have run execution at the next level. An external
              hire brings scale experience but is unproven inside your context.
              Either path fails the same way: assuming capacity instead of proving
              it. Prove it before you hand over the keys.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ — GEO citation block */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Hiring a second-in-command: FAQ
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
            Prove your #2 before you hand over the keys.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove measures capacity and follow-through from
            real behavior &mdash; so your most important hire rests on proof, not a
            good interview.
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

      <RelatedGuides current="/guides/when-to-hire-a-second-in-command" />
      <Footer />
    </>
  );
}
