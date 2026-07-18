import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

const CANONICAL = "/guides/founder-dependence";

export const metadata: Metadata = {
  title: "Founder Dependence: Fix Owner-Dependent Business Risk",
  description:
    "Founder dependence is when your business stalls — or is worth far less — without you. Learn how to spot key-person risk and reduce owner dependence for good.",
  keywords: [
    "founder dependence",
    "owner dependent business",
    "key person risk",
    "key man risk",
    "reduce owner dependence",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Founder Dependence: Fix Owner-Dependent Business Risk",
    description:
      "Founder dependence is when your business stalls — or is worth far less — without you. Learn how to spot key-person risk and reduce owner dependence for good.",
    url: CANONICAL,
    type: "article",
  },
};

const SIGNALS = [
  {
    n: "01",
    h: "Decisions wait on you",
    b: <>Work stops moving until you weigh in &mdash; approvals, judgment calls, and priorities all route through one desk.</>,
  },
  {
    n: "02",
    h: "The relationships are yours alone",
    b: <>Your biggest clients, partners, and suppliers trust you personally. No one else holds those threads.</>,
  },
  {
    n: "03",
    h: "No one else can close or deliver",
    b: <>The hard sale, the delicate delivery, the fire that has to be put out &mdash; it always comes back to you.</>,
  },
  {
    n: "04",
    h: "Growth stalls when you step back",
    b: <>Take a real week off and output dips. The business runs at the speed of your attention.</>,
  },
];

// GEO structure: a definitional checklist of the concrete moves that reduce
// founder dependence — transfer of judgment and relationships to proven people.
const REDUCERS = [
  "Name the critical work only you do today — the decisions, relationships, and deliveries the business cannot lose.",
  "Pick a bench of people to carry each one, and prove they can before you hand it over for good.",
  "Transfer your judgment, not just your tasks — let them make the calls while you can still coach the misses.",
  "Introduce your key relationships early, so clients and partners trust the team, not only the founder.",
  "Document the how, but invest more in the who — a proven person adapts where a document cannot.",
  "Step back on purpose, in stages, and watch what holds — the gaps that surface are your real risk map.",
];

const FAQ = [
  {
    q: "What is founder or owner dependence?",
    a: "Founder dependence — also called owner dependence — is when a business cannot run well, or is worth far less, without one specific person. Decisions wait on the founder, key relationships live only with them, and critical work cannot be closed or delivered by anyone else. It is both an operational fragility and a valuation problem.",
  },
  {
    q: "Why is an owner-dependent business worth less?",
    a: "Because the value walks out the door with the owner. Buyers and investors discount an owner-dependent business heavily: if the relationships, judgment, and delivery all depend on one person, then what they are buying is fragile the moment that person leaves. A business that keeps performing without the founder is simply worth more than one that does not.",
  },
  {
    q: "What is key-person risk?",
    a: "Key-person risk — sometimes called key-man risk — is the exposure a business carries when its performance depends on one individual whose absence would stall operations or destroy value. Founder dependence is the most common form of it. Reducing key-person risk means proving that other people can carry the work that person does today.",
  },
  {
    q: "How do you reduce founder dependence?",
    a: "Not with heroics or a longer to-do list. You reduce founder dependence by systematically transferring the founder's judgment and relationships to a bench of proven people. Name the critical work, pick people to carry it, prove they can before you hand it over, introduce your relationships early, and step back in stages so the gaps surface while you can still fix them.",
  },
  {
    q: "How do you know if your business is too dependent on you?",
    a: "Take a real week off and watch what happens. If decisions pile up waiting for you, if clients ask for you by name and accept no substitute, and if output dips the moment you disengage, the business is too dependent on you. The clearest test is whether it keeps delivering when you step back — not whether it can survive a long weekend.",
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

export default function FounderDependencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Founder dependence"
        eyebrow="Ownership"
        title={<>Founder dependence: when the business can&rsquo;t run without you.</>}
      >
        If the work stalls when you step back &mdash; or the business is worth far
        less the moment you leave &mdash; you have founder dependence. It is
        fixable, but not with heroics.
      </PageHero>

      <ArticleMeta
        headline="Founder dependence: when the business can't run without you."
        description="Founder dependence is when your business stalls — or is worth far less — without you. Learn how to spot key-person risk and reduce owner dependence for good."
        canonical={CANONICAL}
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Founder dependence", url: CANONICAL },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Founder dependence is when a business cannot run well &mdash; or is
              worth far less &mdash; without one person. It is an operational
              fragility and a valuation problem at once. The cure is not working
              harder; it is transferring your judgment and relationships to a
              bench of proven people, so the business keeps delivering when you
              step back.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            How founder dependence shows up
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {SIGNALS.map((c) => (
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

      {/* Definition-first prose Section */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              What founder dependence really is
            </h2>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              Founder dependence &mdash; often called owner dependence &mdash; is
              the condition where a business relies on one specific person to
              function or to hold its value. In the early days that is normal, and
              even a strength: the founder&rsquo;s energy, taste, and relationships
              are what got the business off the ground. The problem is that the same
              dependence quietly becomes a ceiling. Every decision that has to route
              through you is a decision the business cannot make at scale. Every
              relationship that lives only with you is a relationship the business
              does not truly own.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              This is where the{" "}
              <Link href="/founder-bottleneck" className="font-semibold text-green hover:underline">
                founder bottleneck
              </Link>{" "}
              turns from a workload complaint into a growth cap. When the business
              runs at the speed of one person&rsquo;s attention, growth stalls the
              moment that attention is spent elsewhere &mdash; on a new market, a big
              hire, or simply a week of rest. You are not lazy and you are not
              disorganized. You are the single point of failure, and single points of
              failure do not scale.
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.65] text-content-muted">
              It is also a valuation problem, and this is the part founders tend to
              discover late. When it comes time to raise, to sell, or to bring in a
              partner, an owner-dependent business is discounted &mdash; sometimes
              severely. The reason is simple: if the judgment, the relationships, and
              the delivery all depend on you, then the value walks out the door the
              day you do. Buyers and investors are not paying for what the business
              did while you were driving it; they are paying for what it will keep
              doing after. A business that keeps performing without its founder is
              worth more than one that does not, full stop.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              The cure is not heroics, and it is not a thicker binder of processes. It
              is transferring your judgment and relationships to people who have proven
              they can carry them. That is the real work behind{" "}
              <Link href="/guides/succession-planning" className="font-semibold text-green hover:underline">
                succession planning
              </Link>
              , behind building a{" "}
              <Link href="/guides/leadership-bench" className="font-semibold text-green hover:underline">
                leadership bench
              </Link>
              , and behind learning{" "}
              <Link href="/guides/how-to-delegate" className="font-semibold text-green hover:underline">
                how to delegate
              </Link>{" "}
              in a way that actually sticks. The question is never whether someone
              could take the work; it is whether you have proof they will deliver it
              when you step back.
            </p>
          </div>
        </Container>
      </Section>

      {/* paper2 checklist */}
      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              How to reduce founder dependence
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              Reducing founder dependence is a transfer, not a sacrifice. You are
              moving critical work off one desk and onto a bench of people who have
              earned it. In practice it looks like a checklist:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {REDUCERS.map((c) => (
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

      {/* FAQ — GEO citation block */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Founder dependence: FAQ
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
            Build a business that runs without you.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove shows you who can carry the critical work
            &mdash; before you step back.
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

      <RelatedGuides current="/guides/founder-dependence" />
      <Footer />
    </>
  );
}
