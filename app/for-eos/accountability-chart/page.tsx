import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedEOS } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/for-eos/accountability-chart";

export const metadata: Metadata = {
  title: "The Accountability Chart: Right People in the Seats?",
  description:
    "The EOS Accountability Chart maps the seats your business needs and one owner per seat. Learn how it differs from an org chart — and how to prove each seat's Capacity.",
  keywords: [
    "accountability chart",
    "accountability chart vs org chart",
    "EOS accountability chart",
    "one person per seat",
    "right person right seat",
    "GWC accountability chart",
    "accountability chart seats",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The Accountability Chart: Right People in the Seats?",
    description:
      "How the EOS Accountability Chart maps seats and owners — and how to prove the person in each seat actually has the capacity for it.",
    url: CANONICAL,
    type: "article",
  },
};

const VS_CARDS = [
  {
    h: "Org chart",
    b: "Shows reporting lines and titles — who reports to whom. It maps the hierarchy, not the work.",
  },
  {
    h: "Accountability Chart",
    b: "Shows the functions the business needs and who’s accountable for each. It’s built around the work, not the hierarchy.",
  },
];

const SEAT_CARDS = [
  {
    h: "One name per seat",
    b: "Shared accountability is no accountability. Every seat gets exactly one owner — or nobody truly owns it.",
  },
  {
    h: "The seat comes first",
    b: "You define what the seat must own before you decide who sits in it. The work sets the bar, not the person.",
  },
  {
    h: "Capacity is the assumed requirement",
    b: "Get it and Want it get discussed. Capacity — can this person actually carry the seat — is the one most often assumed.",
  },
];

const CHECKLIST = [
  "Design the seats the business needs 12–18 months out — not around the people you have today.",
  "Give every seat one accountable owner, so there’s no shared, and therefore no real, accountability.",
  "List the 5 roles each seat truly owns, so the accountability is concrete rather than a title.",
  "Check each owner on GWC — and prove the Capacity behaviorally, not with a self-reported yes.",
  "Leave a seat visibly open rather than fill it with someone who lacks the capacity for it.",
];

const FAQ = [
  {
    q: "What is an Accountability Chart in EOS?",
    a: "An Accountability Chart is the EOS tool that structures a company by roles and accountabilities rather than people or titles. It defines the seats the business needs, assigns one accountable owner to each, and lists the handful of roles that seat truly owns. It answers a structural question: what seats do we need, and who owns each?",
  },
  {
    q: "What's the difference between an Accountability Chart and an org chart?",
    a: "An org chart shows reporting lines and titles — who reports to whom. An Accountability Chart shows the functions the business needs and who is accountable for each. One maps the hierarchy; the other is built around the work. That’s why a business can have a clean org chart and still have unclear accountability.",
  },
  {
    q: "Why one person per seat?",
    a: "Because shared accountability is no accountability. When two names share a seat, each can assume the other has it, and the work falls between them. One name per seat makes ownership unambiguous — there is always a single person accountable for the outcome.",
  },
  {
    q: "How do you know the right person is in a seat?",
    a: "EOS evaluates each owner on GWC — do they Get it, Want it, and have the Capacity for it. Get it and Want it reveal themselves over time, but Capacity is usually assumed or self-reported. The reliable way to know is to look at behavior: does the person consistently show the initiative, follow-through, and learnability the seat demands?",
  },
  {
    q: "How does Prove strengthen the Accountability Chart?",
    a: "Prove works alongside EOS by turning the Capacity question into evidence. Instead of assuming the person in a seat can carry it, Prove measures behavior over six weeks — Initiative, Applied Grit, and Learnability — so you can confirm the right person is in the right seat, or see clearly when a seat should stay open.",
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

export default function EosAccountabilityChartPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="For EOS &rsaquo; Accountability Chart"
        eyebrow="Structure · the seats"
        title={
          <>
            The Accountability Chart: are the right people in the seats?
          </>
        }
      >
        The Accountability Chart maps the seats your business needs and one
        owner per seat. But a name in a seat is only as good as that
        person&rsquo;s proven capacity for it &mdash; and that&rsquo;s the part the
        chart can&rsquo;t answer on its own.
      </PageHero>

      <ArticleMeta
        headline="The Accountability Chart: are the right people in the seats?"
        description="The EOS Accountability Chart maps the seats your business needs and one owner per seat. Learn how it differs from an org chart — and how to prove each seat's Capacity."
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "For EOS", url: "/for-eos" },
          { name: "Accountability Chart", url: "/for-eos/accountability-chart" },
        ]}
      />

      {/* Short answer */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              An Accountability Chart structures the company by roles and
              accountabilities &mdash; not people or titles. One name per seat,
              each seat evaluated on GWC. It answers &ldquo;what seats do we need
              and who owns each?&rdquo; The hard part it can&rsquo;t answer alone:
              does the person in each seat actually have the{" "}
              <strong>capacity</strong> for it?
            </p>
          </div>
        </Container>
      </Section>

      {/* Accountability Chart vs org chart */}
      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Accountability Chart vs org chart
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {VS_CARDS.map((c) => (
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
          <p className="mx-auto mt-6 max-w-[820px] text-[15.5px] leading-[1.65] text-content-muted">
            The two look similar on a whiteboard, but they answer different
            questions. A clean org chart can still hide unclear accountability.
            The Accountability Chart forces the harder question of{" "}
            <Link href="/for-eos/right-person-right-seat" className="font-semibold text-green underline-offset-2 hover:underline">
              right person, right seat
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* Every seat asks the same question */}
      <Section tone="paper">
        <Container>
          <h2 className="mb-3 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Every seat asks the same question
          </h2>
          <p className="mx-auto mb-6 max-w-[820px] text-[16px] leading-[1.65] text-content-muted">
            EOS evaluates each seat on{" "}
            <Link href="/for-eos/gwc" className="font-semibold text-green underline-offset-2 hover:underline">
              GWC
            </Link>{" "}
            &mdash; does the owner Get it, Want it, and have the Capacity for it?
            The first two surface over time. The third is the one that gets
            assumed.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {SEAT_CARDS.map((c) => (
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

      {/* How to build an accountability chart that holds */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to build an accountability chart that holds
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              A chart holds when the seats reflect the work the business needs
              and every owner is proven, not assumed. Work through it as a
              checklist:
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
            <p className="m-0 mt-6 text-[15.5px] leading-[1.65] text-content-muted">
              The last two steps are where the{" "}
              <Link href="/for-eos/people-analyzer" className="font-semibold text-green underline-offset-2 hover:underline">
                People Analyzer
              </Link>{" "}
              and behavioral proof do their work &mdash; turning &ldquo;I think
              they can carry it&rdquo; into evidence you can trust.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Accountability Chart: FAQ
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
            Put a proven owner in every seat.
          </h2>
          <p className="m-0 mb-7 text-[17px] leading-[1.6] text-[#E4F5EB]">
            See how Prove confirms the person in each seat has the capacity for
            it &mdash; before you commit the chart.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.bookingUrl} variant="dark">
              Book a call
            </ButtonLink>
            <ButtonLink
              href="/for-eos/right-person-right-seat"
              variant="ghost-dark"
              className="!border-white !text-white hover:!border-white"
            >
              Right person, right seat &rarr;
            </ButtonLink>
          </div>
        </div>
      </section>

      <RelatedEOS current="/for-eos/accountability-chart" />
      <Footer />
    </>
  );
}
