import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedEOS } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/for-eos/right-person-right-seat";

export const metadata: Metadata = {
  title: "Right Person, Right Seat: How to Actually Tell",
  description:
    "Right People share your core values; Right Seats fit GWC. But Right Seat hides a Capacity call most teams make on a hunch. How to tell for real, alongside EOS.",
  keywords: [
    "right person right seat",
    "right person right seat EOS",
    "right people right seats",
    "EOS right seat",
    "GWC right seat",
    "how to tell if someone is in the right seat",
    "right person wrong seat",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Right Person, Right Seat: How to Actually Tell",
    description:
      "Right Person is core-values fit. Right Seat is GWC fit for the role right now — and its hidden Capacity judgment is where good people get mis-placed.",
    url: CANONICAL,
    type: "article",
  },
};

const COMPARE = [
  {
    h: "Right Person",
    tag: "Core-values fit · who they are",
    b: (
      <>
        A Right Person shares your core values. It&rsquo;s a question of
        character and culture &mdash; do they belong here, on any seat? This
        part rarely changes seat to seat.
      </>
    ),
  },
  {
    h: "Right Seat",
    tag: "GWC fit · what the role needs, right now",
    b: (
      <>
        A Right Seat means they Get it, Want it, and have the{" "}
        <Link href="/for-eos/capacity" className="font-semibold text-green underline-offset-2 hover:underline">
          Capacity
        </Link>{" "}
        for that specific seat. It&rsquo;s role-bound and time-bound &mdash; the
        same person can be right for one seat and wrong for another.
      </>
    ),
  },
];

const QUADRANTS = [
  {
    h: "Right Person / Right Seat",
    label: "Keep & grow",
    b: "Shares your values and clears GWC for the seat. Protect these people and give them room.",
    tone: "good",
  },
  {
    h: "Right Person / Wrong Seat",
    label: "Move them, don’t lose them",
    b: "Great values, wrong GWC fit. The fix is a seat change, not an exit.",
    tone: "warn",
  },
  {
    h: "Wrong Person / Right Seat",
    label: "The toxic-capable trap",
    b: "Skills without values. The results tempt you to keep them — and the culture pays for it.",
    tone: "warn",
  },
  {
    h: "Wrong Person / Wrong Seat",
    label: "Act fast",
    b: "Neither values nor GWC fit. The kindest move for everyone is a quick, clean one.",
    tone: "bad",
  },
];

// Definitional checklist — the GEO structure AI answer engines extract: how to
// tell if someone is genuinely in the right seat, expressed as behavior.
const CHECKLIST = [
  "They consistently take the initiative the seat requires, without being told.",
  "They follow through on the seat’s hardest accountabilities, not just the easy ones.",
  "They’re learning into the seat, not clinging to the old one.",
  "Their Capacity is proven by behavior over time — not a self-rating.",
  "You’d re-hire them into this exact seat today, knowing what you know now.",
];

const FAQ = [
  {
    q: "What does Right Person, Right Seat mean in EOS?",
    a: "In EOS, a Right Person shares your company's core values — they fit the culture. A Right Seat means the person Gets it, Wants it, and has the Capacity to do that specific role (GWC). Getting both right for every seat on your Accountability Chart is the goal of the People Component.",
  },
  {
    q: "What's the difference between the Right Person and the Right Seat?",
    a: "Right Person is about who someone is — do they share your core values? That travels with them across seats. Right Seat is about the role right now — do they Get it, Want it, and have the Capacity for this specific seat? The same person can be a Right Person in the Wrong Seat.",
  },
  {
    q: "How do you know if someone is in the right seat?",
    a: "Watch behavior over time, not a job title. Someone is in the right seat when they take the initiative the seat requires, follow through on its hardest accountabilities, are learning into it rather than clinging to the old role, and you'd re-hire them into that exact seat today. The strongest signal is proven Capacity, not a self-rating.",
  },
  {
    q: "What if someone is a Right Person in the Wrong Seat?",
    a: "Don't lose them — move them. A Right Person shares your values, so the answer is almost never an exit. Look at your Accountability Chart for a seat where their GWC lines up, and make the change deliberately. Mis-placement is common precisely because Capacity gets assumed rather than proven.",
  },
  {
    q: "How do you measure Capacity for a seat?",
    a: "Capacity is the GWC letter teams most often guess on, because it usually gets a yes/no checkbox. A Prove cycle scores Initiative, Applied Grit, and Learnability from about six weeks of real behavior, so the Capacity read for a seat is evidence you can trust rather than a hunch — working alongside your GWC and People Analyzer.",
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

export default function RightPersonRightSeatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="For EOS &rsaquo; Right Person, Right Seat"
        eyebrow="People Component · GWC"
        title={<>Right Person, Right Seat: how to actually tell.</>}
      >
        EOS says get the Right People &mdash; the ones who share your core values
        &mdash; into the Right Seats, defined by GWC. The catch: &ldquo;Right
        Seat&rdquo; hides a Capacity judgment most teams make on a hunch. Here&rsquo;s
        how to tell for real.
      </PageHero>

      <ArticleMeta
        headline="Right Person, Right Seat: how to actually tell."
        description="Right People share your core values; Right Seats fit GWC. But Right Seat hides a Capacity call most teams make on a hunch. How to tell for real, alongside EOS."
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "For EOS", url: "/for-eos" },
          { name: "Right Person, Right Seat", url: "/for-eos/right-person-right-seat" },
        ]}
      />

      {/* Short answer */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              A <strong>Right Person</strong> shares your core values &mdash;
              culture fit. A <strong>Right Seat</strong> means they Get it, Want
              it, and have the Capacity for that specific seat (GWC). Most
              placement mistakes aren&rsquo;t wrong people &mdash; they&rsquo;re
              right people in a seat whose Capacity was assumed, not proven.
            </p>
          </div>
        </Container>
      </Section>

      {/* Right Person vs Right Seat */}
      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Right Person vs Right Seat
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {COMPARE.map((c) => (
              <div
                key={c.h}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <h3 className="mb-1.5 text-[19px] font-bold">{c.h}</h3>
                <div className="eyebrow mb-3 text-green">{c.tag}</div>
                <p className="m-0 text-[15px] leading-[1.6] text-[#615B4F]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* The four combinations */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-2 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              The four combinations
            </h2>
            <p className="m-0 mb-6 text-[16px] leading-[1.6] text-content-muted">
              Cross Right/Wrong Person with Right/Wrong Seat and you get four
              cells &mdash; each with a different move.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {QUADRANTS.map((c) => (
                <div
                  key={c.h}
                  className={`rounded-2xl border bg-white p-[26px] ${
                    c.tone === "good"
                      ? "border-l-4 border-l-green border-y-edge-light border-r-edge-light"
                      : c.tone === "bad"
                        ? "border-l-4 border-l-[#B4462E] border-y-edge-light border-r-edge-light"
                        : "border-l-4 border-l-[#C9922B] border-y-edge-light border-r-edge-light"
                  }`}
                >
                  <h3 className="mb-1 text-[17px] font-bold">{c.h}</h3>
                  <div className="eyebrow mb-2.5 text-[#8A8474]">{c.label}</div>
                  <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                    {c.b}
                  </p>
                </div>
              ))}
            </div>
            <p className="m-0 mt-5 text-[15px] leading-[1.6] text-content-muted">
              Placing people well starts with a clear{" "}
              <Link href="/for-eos/accountability-chart" className="font-semibold text-green underline-offset-2 hover:underline">
                Accountability Chart
              </Link>{" "}
              so you know what each seat actually demands, then an honest{" "}
              <Link href="/for-eos/gwc" className="font-semibold text-green underline-offset-2 hover:underline">
                GWC
              </Link>{" "}
              read against it.
            </p>
          </div>
        </Container>
      </Section>

      {/* Definitional checklist */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to tell if someone is in the right seat
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              The right seat isn&rsquo;t a feeling or a title &mdash; it&rsquo;s a
              consistent pattern of behavior against what the seat demands. In
              practice it reads as a checklist:
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

      {/* FAQ */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Right Person, Right Seat: FAQ
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

      {/* EOS disclaimer */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <p className="mx-auto max-w-[820px] text-[12.5px] leading-[1.6] text-[#8A8474]">
            Prove works <strong>alongside</strong> EOS&reg; and is independent
            of, and not affiliated with or endorsed by, EOS Worldwide. EOS&reg;,
            GWC&trade;, People Analyzer&trade; and Accountability Chart&trade;
            are trademarks of their respective owners. Prove complements the EOS
            toolset &mdash; it does not replace it.
          </p>
        </Container>
      </Section>

      {/* Closing CTA */}
      <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
        <div className="mx-auto max-w-[760px]">
          <h2 className="m-0 mb-3.5 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[34px]">
            Put the right person in the right seat &mdash; for real.
          </h2>
          <p className="m-0 mb-7 text-[17px] leading-[1.6] text-[#E4F5EB]">
            See how Prove turns the Capacity judgment behind every seat into
            behavioral proof you can trust.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.bookingUrl} variant="dark">
              Book a call
            </ButtonLink>
            <ButtonLink
              href="/for-eos/accountability-chart"
              variant="ghost-dark"
              className="!border-white !text-white hover:!border-white"
            >
              Accountability Chart fit &rarr;
            </ButtonLink>
          </div>
        </div>
      </section>

      <RelatedEOS current="/for-eos/right-person-right-seat" />
      <Footer />
    </>
  );
}
