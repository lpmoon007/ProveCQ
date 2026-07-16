import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Capacity Problem in EOS: Why GWC's Third Letter Is a Guess",
  description:
    'In EOS, Gets it and Wants it get judged over time — but Capacity is a yes/no checkbox, often self-reported. "I have capacity" usually means "I want to please you." Learn why capacity is the weak link in GWC and how behavioral proof fixes it, alongside EOS.',
};

const WHY_FAILS = [
  {
    title: "It’s self-reported",
    body: "People say yes to please you, to seem capable, or because they genuinely believe it — none of which means they can deliver.",
  },
  {
    title: "It’s a single moment",
    body: "A checkbox is a snapshot. Capacity is dynamic — it shifts with life stage, bandwidth, and unseen stress.",
  },
  {
    title: "It absorbs the other letters",
    body: "Leaders mark Capacity down when they really mean the person doesn’t Get it or Want it — muddying the whole People Analyzer.",
  },
];

const HOW_REVEALS = [
  {
    title: "Voluntary action",
    body: "Does the person take action without being told? Initiative is capacity showing itself.",
  },
  {
    title: "Follow-through over time",
    body: "Do they finish the hard parts, repeatedly? Sustained follow-through is capacity you can trust.",
  },
  {
    title: "Hard to fake",
    body: "One good week is easy to stage. Weeks of demonstrated commitment behavior are not. That’s the signal.",
  },
];

export default function EosCapacityPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="For EOS &rsaquo; The Capacity problem"
        eyebrow="GWC · the weak link"
        title={<>Capacity is the one GWC box you&rsquo;re guessing on.</>}
      >
        EOS is a great operating system, and Prove is not a replacement for it.
        But there&rsquo;s one spot where even disciplined teams run on a hunch:
        the Capacity in GWC. It gets treated as a checkbox &mdash; and that&rsquo;s
        where good people get mis-placed.
      </PageHero>

      {/* Short answer */}
      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[14px] border-l-4 border-green bg-paper-2 p-7 sm:p-8">
            <div className="eyebrow mb-2.5 text-green">The short answer</div>
            <p className="m-0 text-[18px] leading-[1.65] text-[#2A261D]">
              Gets it and Wants it reveal themselves over time.{" "}
              <strong>Capacity</strong> gets a yes/no checkbox, and it&rsquo;s
              often self-reported &mdash; and &ldquo;I have capacity&rdquo;
              frequently means &ldquo;I want to please my boss,&rdquo; not
              &ldquo;I can actually carry this.&rdquo; Prove fills that gap{" "}
              <em>for</em> EOS by measuring behavior over time, which is much
              harder to fake than a checkbox.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why the Capacity box fails */}
      <Section tone="paper" className="!pt-0">
        <Container wide>
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-6 font-display text-[32px] font-bold tracking-[-.02em]">
              Why the Capacity box fails
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {WHY_FAILS.map((c) => (
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

      {/* How behavior reveals capacity */}
      <Section tone="paper" className="!pt-0">
        <Container wide>
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-6 font-display text-[32px] font-bold tracking-[-.02em]">
              How behavior reveals capacity
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {HOW_REVEALS.map((c) => (
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

      {/* Dark nuance box */}
      <Section tone="paper" className="!pt-0 !pb-10">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[18px] bg-ink p-8 text-paper on-dark sm:p-[34px]">
            <p className="m-0 text-[17px] leading-[1.65] text-[#E8E4D6]">
              Important nuance: if someone <em>doesn&rsquo;t</em> show the
              behavior, it doesn&rsquo;t prove they lack capacity. But if they{" "}
              <em>do</em> &mdash; consistently, under pressure &mdash; that&rsquo;s
              a strong, hard-to-fake indication the capacity is real. Prove turns
              the Capacity checkbox into evidence.
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
            Make the Capacity box real.
          </h2>
          <p className="m-0 mb-7 text-[17px] leading-[1.6] text-[#E4F5EB]">
            See how Prove gives your People Analyzer a capacity score you can
            actually trust.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.bookingUrl} variant="dark">
              Book a call
            </ButtonLink>
            <ButtonLink
              href="/for-eos/people-analyzer"
              variant="ghost-dark"
              className="!border-white !text-white hover:!border-white"
            >
              People Analyzer fit &rarr;
            </ButtonLink>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
