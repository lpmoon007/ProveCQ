import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ButtonLink, Container, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Better EOS Quarterly Conversations, Backed by Behavior",
  description:
    "Quarterly Conversations work best with objective data. Prove brings a behavioral capacity signal to the discussion so leaders and team members talk about what someone actually did — not gut feel — making the conversation fairer and more useful. Alongside EOS.",
  alternates: { canonical: "/for-eos/quarterly-conversations" },
};

const ADDS = [
  {
    title: "Objective language",
    body: "Talk about observed behavior, not personality or vibe — easier to hear and act on.",
  },
  {
    title: "Capacity before accountability",
    body: "See whether the capacity is really there before you hold someone to a bigger commitment.",
  },
  {
    title: "A development path",
    body: "Pinpoint the one trait to grow — initiative, applied grit, or learnability — and coach it deliberately.",
  },
];

export default function EosQuarterlyConversationsPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="For EOS &rsaquo; Quarterly Conversations"
        eyebrow="Discipline, meet data"
        title={<>Quarterly Conversations, backed by behavior.</>}
      >
        The Quarterly Conversation is one of the best rituals in EOS. It gets
        even better when both sides can point to what someone actually did
        &mdash; initiative taken, follow-through under pressure, growth pursued
        &mdash; instead of trading impressions.
      </PageHero>

      <ArticleMeta
        headline="Quarterly Conversations, backed by behavior."
        description="Quarterly Conversations work best with objective data. Prove brings a behavioral capacity signal to the discussion so leaders and team members talk about what someone actually did — not gut feel — making the conversation fairer and more useful. Alongside EOS."
        canonical="/for-eos/quarterly-conversations"
        crumbs={[
          { name: "Home", url: "" },
          { name: "For EOS", url: "/for-eos" },
          { name: "Quarterly Conversations", url: "/for-eos/quarterly-conversations" },
        ]}
      />

      {/* Short answer */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[14px] border-l-4 border-green bg-paper-2 p-7 sm:p-8">
            <div className="eyebrow mb-2.5 text-green">The short answer</div>
            <p className="m-0 text-[18px] leading-[1.65] text-[#2A261D]">
              Prove gives the Quarterly Conversation an objective, behavior-based
              reference point for capacity and growth. It makes the discussion
              fairer (evidence, not impressions), more forward-looking (what to
              develop next), and less political &mdash; all while keeping the EOS
              structure exactly as it is.
            </p>
          </div>
        </Container>
      </Section>

      {/* What behavioral data adds */}
      <Section tone="paper" className="!pt-0">
        <Container wide>
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-6 font-display text-[32px] font-bold tracking-[-.02em]">
              What behavioral data adds
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {ADDS.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-edge-light bg-white p-[26px]"
                >
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

      {/* Fake it, make it callout */}
      <Section tone="paper" className="!pt-0 !pb-10">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-2xl bg-paper-2 p-7 sm:p-8">
            <p className="m-0 text-[17px] leading-[1.65] text-[#2A261D]">
              A useful truth: some people start a Prove cycle trying to
              &ldquo;perform&rdquo; for the score. That&rsquo;s fine &mdash; by
              the end of six weeks of real commitments, they&rsquo;ve built the
              habits anyway. Fake it, and you tend to make it. Either way, the
              team gets a more committed person and you get a clearer
              conversation.
            </p>
          </div>
        </Container>
      </Section>

      {/* EOS disclaimer */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <p className="mx-auto max-w-[820px] text-[12.5px] leading-[1.6] text-[#8A8474]">
            Prove works <strong>alongside</strong> EOS&reg; and is independent
            of, and not affiliated with or endorsed by, EOS Worldwide. EOS&reg;,
            GWC&trade;, People Analyzer&trade; and Level 10&trade; are trademarks
            of their respective owners. Prove complements the EOS toolset &mdash;
            it does not replace it.
          </p>
        </Container>
      </Section>

      {/* Closing CTA */}
      <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
        <div className="mx-auto max-w-[760px]">
          <h2 className="m-0 mb-3.5 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[34px]">
            Bring evidence to your next quarter.
          </h2>
          <p className="m-0 mb-7 text-[17px] leading-[1.6] text-[#E4F5EB]">
            See how Prove strengthens your Quarterly Conversations without
            changing your EOS cadence.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.bookingUrl} variant="dark">
              Book a call
            </ButtonLink>
            <ButtonLink
              href="/for-eos/implementers"
              variant="ghost-dark"
              className="!border-white !text-white hover:!border-white"
            >
              For Implementers &rarr;
            </ButtonLink>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
