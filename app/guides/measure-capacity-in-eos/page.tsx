import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { Container, Eyebrow, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";

export const metadata: Metadata = {
  title: "How to Measure Capacity in EOS (Beyond the GWC Checkbox)",
  description:
    "In EOS, Capacity in GWC is treated as a yes/no checkbox. Learn how to actually measure capacity behaviorally so your People Analyzer and Quarterly Conversations run on data.",
  alternates: { canonical: "/guides/measure-capacity-in-eos" },
};

const FAILS = [
  {
    n: "01",
    title: "Capacity is dynamic",
    body: "It shifts with life stage, bandwidth, and unseen stress. A one-time yes/no cannot capture that.",
  },
  {
    n: "02",
    title: "It gets confused with GW",
    body: "Leaders mark Capacity down when they really mean the person does not Get it or Want it — muddying the whole analyzer.",
  },
];

const MEASURE = [
  {
    title: "Initiative",
    body: "Acts on the seat without being pushed.",
  },
  {
    title: "Applied Grit",
    body: "Delivers the hard parts of the role, not just the easy ones.",
  },
  {
    title: "Learnability",
    body: "Grows into rising demands as the company scales.",
  },
];

// A concrete, EOS-native way to turn the Capacity box into evidence.
const STEPS = [
  "Separate the three letters of GWC before you score — a person can Get it and Want it and still lack the Capacity, and scoring one when you mean another muddies the whole People Analyzer.",
  "Define the seat by its behaviors — write the roles and responsibilities as actions the person must consistently take, not as a job title or a list of skills.",
  "Watch Initiative on the seat — do they move the Rock and the day-to-day forward without being pushed, or do things stall until someone chases them?",
  "Watch Applied Grit on the hard parts — capacity shows up in the unglamorous 20% of the seat that people quietly avoid, not the parts they enjoy.",
  "Watch Learnability against a scaling company — the seat gets heavier every quarter, so the question is whether they grow into rising demands, not whether they clear today's bar.",
  "Bring the pattern to the Quarterly Conversation — a Capacity read backed by six weeks of observed behavior turns a gut-feel checkbox into a conversation both people can trust.",
];

// FAQ — the format AI answer engines extract and cite. Answers stay faithful to
// the article and keep the EOS / GWC framing.
const FAQ = [
  {
    q: "What does Capacity mean in GWC?",
    a: "In GWC — Get it, Want it, Capacity to do it — Capacity is whether a person has the behavioral ability, bandwidth, and skill to deliver the seat right now. It is the most situational of the three: someone can clearly Get the role and Want it, yet not have the Capacity this quarter because of life stage, workload, or a step-change in what the seat demands.",
  },
  {
    q: "Why is the Capacity checkbox in the People Analyzer unreliable?",
    a: "Because it is scored as a one-time, gut-feel yes or no. Capacity is dynamic — it shifts with bandwidth and unseen stress — so a single checkmark cannot capture it. It also gets confused with Get it and Want it: leaders often mark Capacity down when they really mean the person does not understand or does not want the seat, which muddies the entire analyzer.",
  },
  {
    q: "How do you measure Capacity in EOS behaviorally?",
    a: "Measure it as three observable behaviors on the seat: Initiative (acts without being pushed), Applied Grit (delivers the hard parts of the role, not just the easy ones), and Learnability (grows into rising demands as the company scales). Reading these from real behavior over several weeks turns the Capacity box from a guess into evidence you can defend.",
  },
  {
    q: "Is Capacity the same as Get it and Want it?",
    a: "No, and keeping them separate is the point of the People Analyzer. Get it is whether the person truly understands the seat. Want it is whether they genuinely desire it. Capacity is whether they can actually do it right now. Confusing Capacity with the other two is the most common way leaders misread the People Analyzer.",
  },
  {
    q: "How does behavioral capacity data help Quarterly Conversations?",
    a: "A Quarterly Conversation is only as honest as the data behind it. When the Capacity read is backed by six weeks of observed behavior across Initiative, Applied Grit, and Learnability, the conversation moves from opinion to evidence — the leader can point to specifics, and the person can see exactly where to grow. See how Prove maps to EOS Capacity and GWC for the full fit.",
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

export default function MeasureCapacityEosGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Measuring EOS capacity"
        eyebrow="For EOS leaders"
        title={<>How to measure capacity in EOS &mdash; beyond the checkbox.</>}
      >
        GWC is the heart of the People Analyzer, but Capacity gets scored as a
        gut-feel yes or no. That blind spot is where great hires stall and Rocks
        slip. Here is how to make it measurable.
      </PageHero>

      <ArticleMeta
        headline="How to measure capacity in EOS — beyond the checkbox."
        description="In EOS, Capacity in GWC is treated as a yes/no checkbox. Learn how to actually measure capacity behaviorally so your People Analyzer and Quarterly Conversations run on data."
        canonical="/guides/measure-capacity-in-eos"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Measuring EOS capacity", url: "/guides/measure-capacity-in-eos" },
        ]}
      />

      <Section tone="paper" className="!pb-0">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink p-8 text-paper on-dark sm:p-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Capacity is not one thing and it is not static &mdash; it is the
              behavioral ability to deliver a specific role right now. Measure it
              as Initiative, Applied Grit, and Learnability from observed behavior,
              and the Capacity box becomes real data you can bring to Quarterly
              Conversations.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              What Capacity really means in GWC
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              GWC &mdash; Get it, Want it, Capacity to do it &mdash; is the heart
              of the People Analyzer, and Capacity is the letter that gets the
              least honest treatment. Capacity is not a fixed trait or a measure of
              a person&rsquo;s worth. It is the behavioral ability to deliver a
              specific seat right now: the bandwidth, the skill, and the drive to
              carry the role as it exists today. Because it is tied to a seat and a
              moment, Capacity moves. Someone who clearly had it a year ago can be
              stretched thin by a scaling company, a heavier Rock, or a change at
              home &mdash; and none of that shows up in a one-time yes or no.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              The other reason the checkbox misleads is that Capacity constantly
              gets confused with the first two letters. A leader marks Capacity
              down when the real problem is that the person does not{" "}
              <Link href="/for-eos/gwc" className="text-green">
                Get it or Want it
              </Link>
              . Once those signals blur together, the whole analyzer stops telling
              you anything actionable &mdash; you know something is off, but not
              what to do about it. Keeping Capacity clean means measuring it on its
              own terms: what the person actually does on the seat.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              That is where behavior comes in. Instead of asking &ldquo;do I think
              they can handle it?&rdquo; you watch three things over time:
              Initiative, Applied Grit, and Learnability. Read across several weeks
              of real work, these turn a gut-feel checkbox into{" "}
              <Link href="/for-eos/capacity" className="text-green">
                Capacity you can actually measure
              </Link>{" "}
              &mdash; and defend in a Quarterly Conversation.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[860px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Why the checkbox fails
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {FAILS.map((c) => (
                <div
                  key={c.n}
                  className="rounded-[16px] border border-edge-light bg-white p-[26px]"
                >
                  <div className="mb-2.5 font-display text-[15px] font-bold text-green">
                    {c.n}
                  </div>
                  <h3 className="mb-2 text-[18px] font-bold">{c.title}</h3>
                  <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            What to measure instead
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {MEASURE.map((c) => (
              <div
                key={c.title}
                className="rounded-[16px] border border-edge-light bg-white p-[26px]"
              >
                <h3 className="mb-2 text-[18px] font-bold">{c.title}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] leading-[1.6] text-[#8A8474]">
            Prove works alongside EOS&reg; and is independent of, and not
            affiliated with or endorsed by, EOS Worldwide. EOS&reg;, GWC&trade; and
            People Analyzer&trade; are trademarks of their respective owners.{" "}
            <Link href="/for-eos" className="text-green">
              See the full EOS fit &rarr;
            </Link>
          </p>
        </Container>
      </Section>

      {/* Concrete process — turning the Capacity box into evidence */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to score Capacity behaviorally: a checklist
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Before you check the Capacity box in your next People Analyzer, work
              through these steps so the mark reflects behavior, not mood:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {STEPS.map((s) => (
                <li
                  key={s}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* FAQ — GEO citation block */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Measuring EOS capacity: FAQ
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

      <CTASection title="Make the Capacity box real.">
        Book a call to see how Prove plugs into your People Analyzer and Quarterly
        Conversations.
      </CTASection>

      <RelatedGuides current="/guides/measure-capacity-in-eos" />
      <Footer />
    </>
  );
}
