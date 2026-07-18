import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/guides/work-on-vs-in-your-business";

export const metadata: Metadata = {
  title: "Working On vs In Your Business: How to Shift",
  description:
    "Working in your business is doing the work yourself. Working on it is building the systems and people so the work happens without you. How to make the shift.",
  keywords: [
    "working on vs in your business",
    "work on your business not in it",
    "on vs in the business",
    "founder in the weeds",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Working On vs In Your Business: How to Shift",
    description:
      "Working in your business is doing the work yourself. Working on it is building the systems and people so the work happens without you. How to make the shift.",
    url: CANONICAL,
    type: "article",
  },
};

const SIGNS = [
  {
    n: "01",
    h: "You are the approval",
    b: "Decisions stall in your inbox because nothing ships without your sign-off.",
  },
  {
    n: "02",
    h: "You are the fix",
    b: "When something breaks, the fastest path is you doing it yourself again.",
  },
  {
    n: "03",
    h: "You are the memory",
    b: "How the work gets done lives in your head, not in a system anyone can run.",
  },
  {
    n: "04",
    h: "You are the safety net",
    b: "You keep the plates spinning because you are not sure who else actually can.",
  },
];

const SHIFTS = [
  "Name one outcome you own today that someone else should own in ninety days.",
  "Write down what &ldquo;good&rdquo; looks like for it, so the standard lives outside your head.",
  "Hand the outcome to a person and watch how they carry it &mdash; not just whether they say yes.",
  "Look for proof of follow-through: initiative when it is not asked for, grit when it gets hard, learning when they get it wrong.",
  "Stop being the backstop for that outcome. Let the gap show so the real owner steps into it.",
  "Bank the time you just freed and spend it building the next system, not refilling the old one.",
];

const FAQ = [
  {
    q: "What does working on vs in your business mean?",
    a: "Working in your business means doing the work yourself — serving customers, closing deals, fixing what breaks. Working on your business means building the systems, standards, and people so that work happens reliably without you. In the business, you are a worker; on the business, you are the owner designing how the whole thing runs.",
  },
  {
    q: "Why do founders get stuck working in the business?",
    a: "Not because they lack discipline. They stay in because letting go feels reckless when they cannot see who is actually ready to carry the work. So they keep being the safety net — approving, fixing, remembering — and the business stays dependent on them. The block is rarely time management. It is a lack of proof about who can be trusted with the outcome.",
  },
  {
    q: "How do you start working on the business?",
    a: "Pick one outcome you own, define what good looks like so the standard is not trapped in your head, and hand it to a specific person. Then watch how they carry it. The goal is not to dump tasks — it is to transfer ownership to someone whose follow-through you can see, and to stop being their backstop once they prove they can hold it.",
  },
  {
    q: "How much time should a founder spend on vs in the business?",
    a: "There is no universal ratio, and chasing one misses the point. Early on you will spend most of your time in the work because there is no one else. The signal that matters is direction: is the share of time you spend building systems and people going up over time, or are you doing the same tasks you did a year ago? Trend beats target.",
  },
  {
    q: "What has to be true before you can step out of the work?",
    a: "You need evidence, not a hunch, that someone can hold the outcome. That means a clear standard for what good looks like, a named owner, and proof of how that person behaves under real conditions — do they take initiative, push through hard problems, and learn from mistakes? When the handoff is backed by behavior you have actually seen, stepping out is a bet on evidence, not a leap of faith.",
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

export default function WorkOnVsInYourBusinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Work on vs in your business"
        eyebrow="Founder"
        title={<>Working on vs in your business.</>}
      >
        Working <em>in</em> your business is doing the work yourself. Working{" "}
        <em>on</em> it is building the systems and people so the work happens
        without you. Most founders know the difference &mdash; and stay stuck in
        it anyway.
      </PageHero>

      <ArticleMeta
        headline="Working on vs in your business."
        description="Working in your business is doing the work yourself. Working on it is building the systems and people so the work happens without you. How to make the shift."
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          {
            name: "Work on vs in your business",
            url: CANONICAL,
          },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Working <em>in</em> the business means you are the one doing the
              work. Working <em>on</em> it means you are building the systems and
              people so the work runs without you. The reason founders stay in
              is not willpower &mdash; it is that they cannot yet see who is
              actually ready to carry the load, so they keep being the safety
              net.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Signs you are still working in it
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              The real difference between on and in
            </h2>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              In the business, you are a worker inside the machine &mdash;
              serving the customer, closing the deal, fixing what broke at 11pm.
              On the business, you are the owner designing the machine: the
              standards, the systems, and the people who run it. Both are real
              work. Only one of them makes the business less dependent on you
              over time.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              Almost every founder can recite this distinction. Knowing it has
              never been the problem. The problem is that stepping out feels
              reckless. When a customer is on the line or a number is at risk,
              handing it to someone else looks like a gamble &mdash; and you are
              the one who pays if the gamble loses. So you take it back. You stay
              the{" "}
              <Link
                href="/founder-bottleneck"
                className="font-semibold text-green hover:underline"
              >
                founder bottleneck
              </Link>{" "}
              not out of ego, but out of a rational fear of dropping the ball.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              Here is what makes that fear so sticky: you cannot see who is
              actually ready. You can see who is busy, who is loud, and who is
              agreeable. But readiness &mdash; the capacity to own an outcome and
              carry it when it gets hard &mdash; does not show up on a resume or
              in a one-on-one. So letting go feels like a leap of faith, and
              faith is exactly what a founder with a business on the line refuses
              to run on.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              That is why the shift from in to on is not a time-management hack
              or a burst of discipline. You do not think your way out of the
              weeds. You get out by replacing faith with evidence &mdash; by
              knowing, from behavior you have actually watched, who can be handed
              an outcome and trusted to hold it. When the handoff is backed by
              proof, stepping out stops being a leap and becomes a bet you can
              size.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to shift from in to on
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              You do not move from in to on in one heroic quarter. You move one
              outcome at a time, and each handoff earns you the room to make the
              next one:
            </p>
            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {SHIFTS.map((c, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: c }} />
                </li>
              ))}
            </ol>
            <p className="m-0 mt-6 text-[17px] leading-[1.65] text-content-muted">
              The mechanics of the handoff matter too. Our guides on{" "}
              <Link
                href="/guides/how-to-delegate"
                className="font-semibold text-green hover:underline"
              >
                how to delegate
              </Link>{" "}
              and{" "}
              <Link
                href="/guides/how-to-let-go-as-a-founder"
                className="font-semibold text-green hover:underline"
              >
                how to let go as a founder
              </Link>{" "}
              go deeper on transferring ownership without abandoning the
              standard &mdash; and building a{" "}
              <Link
                href="/guides/leadership-bench"
                className="font-semibold text-green hover:underline"
              >
                leadership bench
              </Link>{" "}
              you can actually hand the work to.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              On vs in your business: FAQ
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
            Get out of the weeds on evidence, not faith.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove shows you who is actually ready to carry
            the work &mdash; so handing it off is a bet you can size.
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

      <RelatedGuides current="/guides/work-on-vs-in-your-business" />
      <Footer />
    </>
  );
}
