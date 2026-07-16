import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ButtonLink, Container, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Give Your EOS People Analyzer a Real Capacity Score",
  description:
    "The EOS People Analyzer scores everyone on GWC and core values — but Capacity stays a guess. Prove adds a behavioral capacity signal (initiative, applied grit, learnability) so your People Analyzer runs on evidence, alongside EOS, not instead of it.",
};

const FIT = [
  {
    title: "Gets it",
    body: "Still your call — does the person understand the seat? Prove doesn’t touch this.",
  },
  {
    title: "Wants it",
    body: "Still your call — do they genuinely want it? Prove doesn’t touch this.",
  },
  {
    title: "Capacity → Prove",
    body: "The behavioral signal fills the box that used to be a checkbox, with data you can bring to the table.",
  },
];

const CHANGES = [
  {
    title: "Fewer stalled ratings",
    body: "No more circular debates about whether someone “has the capacity.” You have a read grounded in behavior.",
  },
  {
    title: "A transparent process",
    body: "Because it’s based on observed action, the rating feels fair — which protects trust as you make hard calls.",
  },
];

export default function EosPeopleAnalyzerPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="For EOS &rsaquo; People Analyzer"
        eyebrow="Plug into the analyzer"
        title={<>Give your People Analyzer a real Capacity score.</>}
      >
        Keep GWC. Keep your core values ratings. Prove simply replaces the
        Capacity guess with a behavioral signal &mdash; so the People Analyzer
        conversation stops stalling on the one box no one can defend.
      </PageHero>

      {/* Short answer */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[14px] border-l-4 border-green bg-paper-2 p-7 sm:p-8">
            <div className="eyebrow mb-2.5 text-green">The short answer</div>
            <p className="m-0 text-[18px] leading-[1.65] text-[#2A261D]">
              Prove maps a behavioral capacity read &mdash; initiative, applied
              grit, and learnability, measured over time &mdash; directly onto
              the Capacity column of your People Analyzer. Gets it and Wants it
              stay yours to judge; Capacity becomes evidence instead of a hunch.
              It runs alongside EOS, never in place of it.
            </p>
          </div>
        </Container>
      </Section>

      {/* How it fits the analyzer */}
      <Section tone="paper" className="!pt-0">
        <Container wide>
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-6 font-display text-[32px] font-bold tracking-[-.02em]">
              How it fits the analyzer
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {FIT.map((c) => (
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

      {/* What it changes */}
      <Section tone="paper" className="!pt-0 !pb-10">
        <Container wide>
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-6 font-display text-[32px] font-bold tracking-[-.02em]">
              What it changes
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {CHANGES.map((c) => (
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
            Add capacity clarity to your analyzer.
          </h2>
          <p className="m-0 mb-7 text-[17px] leading-[1.6] text-[#E4F5EB]">
            Book a call and we&rsquo;ll show you how Prove slots into your next
            People Analyzer review.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.bookingUrl} variant="dark">
              Book a call
            </ButtonLink>
            <ButtonLink
              href="/for-eos/quarterly-conversations"
              variant="ghost-dark"
              className="!border-white !text-white hover:!border-white"
            >
              Better Quarterly Conversations &rarr;
            </ButtonLink>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
