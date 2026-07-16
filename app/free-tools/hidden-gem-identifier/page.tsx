import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import HiddenGemForm from "@/components/HiddenGemForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Hidden Gem Identifier — A Free Tool to Identify High-Potential Employees",
  description:
    "A free high-potential assessment for founders and CEOs. The Hidden Gem Identifier is a tool to identify high-potential employees every leader overlooks — the quiet consistent performer and the hungry striver in the wrong seat — so you know who to protect, stretch, and stop overlooking.",
  keywords: [
    "high potential assessment",
    "tools to identify high potential employees",
    "identify high-potential employees",
    "hidden gem identifier",
  ],
  alternates: { canonical: "/free-tools/hidden-gem-identifier" },
  openGraph: {
    title: "Hidden Gem Identifier — Identify High-Potential Employees",
    description:
      "A free tool to identify the high-potential people every leader overlooks.",
    url: "/free-tools/hidden-gem-identifier",
    type: "website",
  },
};

const GEMS = [
  {
    title: "The quiet performer",
    body: "Delivers every time, wants no spotlight, and would rather do great work than climb. Do not drag them up a ladder they never asked for — protect them.",
  },
  {
    title: "The overlooked striver",
    body: "Entry-level seat, learning on their own time, hungry to grow — and getting no attention because of where they sit. These are the people to stretch and promote.",
  },
];

export default function HiddenGemPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-ink px-5 py-16 text-paper sm:px-8 md:py-20 on-dark">
        <Container className="max-w-[820px]">
          <div className="mb-4 text-[13px] font-semibold text-content-faint">
            <Link href="/" className="text-content-faint hover:text-paper">
              Home
            </Link>{" "}
            &rsaquo;{" "}
            <Link href="/free-tools" className="text-content-faint hover:text-paper">
              Free tools
            </Link>{" "}
            &rsaquo; Hidden Gem Identifier
          </div>
          <Eyebrow tone="soft">Free tool</Eyebrow>
          <h1 className="mb-5 mt-3.5 font-display text-[40px] font-bold leading-[1.03] tracking-tightest sm:text-[54px]">
            Find the people you&rsquo;re about to overlook.
          </h1>
          <p className="m-0 max-w-[660px] text-[20px] leading-[1.55] text-[#B8B4A6]">
            Your best people rarely raise their hand. The Hidden Gem Identifier is
            a free 5-minute tool that surfaces the two people every leader
            overlooks &mdash; the quiet, consistent performer who doesn&rsquo;t
            want the spotlight, and the hungry striver stuck in the wrong seat.
          </p>
        </Container>
      </section>

      {/* Two gems + form */}
      <Section tone="paper">
        <Container className="max-w-[1000px]">
          <div className="grid grid-cols-1 items-start gap-11 md:grid-cols-2">
            <div>
              <h2 className="mb-[18px] font-display text-[30px] font-bold tracking-[-.02em]">
                Two gems, both invisible.
              </h2>
              <div className="mb-[26px] flex flex-col gap-3.5">
                {GEMS.map((g) => (
                  <div
                    key={g.title}
                    className="rounded-2xl border border-edge-light bg-white p-6"
                  >
                    <h3 className="mb-1.5 text-[17px] font-bold">{g.title}</h3>
                    <p className="m-0 text-[15px] leading-[1.55] text-[#615B4F]">
                      {g.body}
                    </p>
                  </div>
                ))}
              </div>
              <p className="m-0 text-[15px] leading-[1.6] text-[#615B4F]">
                Answer a few questions about your team and get a shortlist of who
                to protect, who to stretch, and who to stop overlooking. Then see
                how a <Link href="/how-it-works">Prove Sprint</Link> confirms it.
              </p>
            </div>

            <HiddenGemForm />
          </div>
        </Container>
      </Section>

      {/* Closing CTA card */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[22px] bg-ink px-8 py-11 text-center text-paper on-dark">
            <h2 className="m-0 mb-3.5 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[32px]">
              A shortlist is a start. Proof is the finish.
            </h2>
            <p className="m-0 mb-[26px] text-[17px] leading-[1.6] text-[#B8B4A6]">
              The tool tells you who to look at. A Prove Sprint tells you &mdash; in
              six weeks of real behavior &mdash; who to bet on.
            </p>
            <ButtonLink href={site.bookingUrl}>Book a call</ButtonLink>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
