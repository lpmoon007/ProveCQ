import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ButtonLink, Container, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "For EOS Implementers: The Capacity Tool You've Never Had",
  description:
    "EOS Implementers hit 'capacity issues' in nearly every session with no way to measure them. Prove is a behavioral capacity tool that plugs into the People Analyzer and Quarterly Conversations — a complement to your EOS practice you can bring to clients.",
};

const WHY_HELPS = [
  {
    title: "Answers the recurring question",
    body: "“Do they have the capacity?” comes up every session. Now you have a real way to answer it.",
  },
  {
    title: "Keeps you in the EOS lane",
    body: "Prove reinforces GWC and the People Analyzer — it doesn’t compete with the tools you’re certified in.",
  },
  {
    title: "A reason to re-engage clients",
    body: "A behavioral capacity read is a fresh, concrete deliverable between quarterly sessions.",
  },
];

const HOW_WE_WORK = [
  {
    title: "Referral or co-delivery",
    body: "Bring Prove to a client where capacity is the sticking point — as a referral or run alongside your session.",
  },
  {
    title: "Straightforward & honest",
    body: "We’re explicit that Prove complements EOS and is independent of EOS Worldwide. No overclaiming, no brand confusion.",
  },
];

export default function EosImplementersPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="For EOS &rsaquo; For Implementers"
        eyebrow="A tool for your practice"
        title={<>The Capacity tool you&rsquo;ve never had.</>}
      >
        You believe in the EOS toolset &mdash; so do we. But you hit
        &ldquo;capacity issues&rdquo; in session after session with nothing to
        measure them. Prove is that missing instrument, built to sit inside the
        EOS conversations you already run.
      </PageHero>

      {/* Short answer */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[14px] border-l-4 border-green bg-paper-2 p-7 sm:p-8">
            <div className="eyebrow mb-2.5 text-green">The short answer</div>
            <p className="m-0 text-[18px] leading-[1.65] text-[#2A261D]">
              Prove gives EOS Implementers a behavioral capacity signal to pair
              with the People Analyzer and Quarterly Conversations. It&rsquo;s a
              complement to your practice, not a competing framework &mdash;
              something concrete to offer clients when GWC&rsquo;s Capacity box
              turns into a debate.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why it helps your practice */}
      <Section tone="paper" className="!pt-0">
        <Container wide>
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-6 font-display text-[32px] font-bold tracking-[-.02em]">
              Why it helps your practice
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {WHY_HELPS.map((c) => (
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

      {/* How we work with you */}
      <Section tone="paper" className="!pt-0 !pb-10">
        <Container wide>
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-6 font-display text-[32px] font-bold tracking-[-.02em]">
              How we work with you
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {HOW_WE_WORK.map((c) => (
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
            Add capacity measurement to your toolkit.
          </h2>
          <p className="m-0 mb-7 text-[17px] leading-[1.6] text-[#E4F5EB]">
            Let&rsquo;s talk about bringing Prove to the clients where capacity
            keeps stalling the conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.bookingUrl} variant="dark">
              Book a call
            </ButtonLink>
            <ButtonLink
              href="/for-eos"
              variant="ghost-dark"
              className="!border-white !text-white hover:!border-white"
            >
              Back to the EOS overview &rarr;
            </ButtonLink>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
