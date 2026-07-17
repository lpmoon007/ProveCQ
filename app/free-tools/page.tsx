import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free People-Decision Tools for Founders & CEOs",
  description:
    "Free tools for founders and CEOs: the 2-minute Certainty Diagnostic, the 4 AM Test, the Hidden Gem Identifier, the Get to Green readiness map, the Cost of a Bad Bet calculator, and the Talent Development Scorecard.",
};

/**
 * The free-tool funnel ladder (handoff §6). Each card links to its live tool
 * page; the end-of-flow "Book a call" is the only HubSpot hop.
 */
const TOOLS: {
  label: string;
  title: string;
  body: string;
  cta: string;
  dark: boolean;
  href: string;
}[] = [
  {
    label: "2 minutes · instant",
    title: "The Certainty Diagnostic",
    body: "Ten quick questions, one honest number: how much proof (versus gut feel) is behind your hiring, promotion, and retention calls. Instant Certainty Score.",
    cta: "Take the diagnostic",
    dark: false,
    href: "/free-tools/certainty-diagnostic",
  },
  {
    label: "3 minutes · one person",
    title: "The 4 AM Test",
    body: "Handed someone a big responsibility and now lying awake wondering? Grade one person on ownership, initiative, growth, and courage — using the last 90 days.",
    cta: "Take the 4 AM Test",
    dark: false,
    href: "/free-tools/4am-test",
  },
  {
    label: "5 minutes · emailed",
    title: "Hidden Gem Identifier",
    body: "Find the two people every leader overlooks — the quiet performer who doesn't want the spotlight, and the striver stuck in the wrong seat.",
    cta: "Find your hidden gems",
    dark: false,
    href: "/free-tools/hidden-gem-identifier",
  },
  {
    label: "Interactive · 146 points",
    title: "Get to Green",
    body: "The full people-systems readiness map — 7 macro and 30+ micro systems scored red, yellow, or green. Play with the live sample, then unlock your own.",
    cta: "Open Get to Green",
    dark: false,
    href: "/free-tools/get-to-green",
  },
  {
    label: "Calculator · instant",
    title: "Cost of a Bad Bet",
    body: "Estimate what one wrong promotion or bad hire actually costs — salary, lost productivity, team drag, and backfill — and what proving it first could save.",
    cta: "Run the numbers",
    dark: true,
    href: "/free-tools/cost-of-a-bad-bet",
  },
  {
    label: "90 seconds · instant",
    title: "Talent Development Scorecard",
    body: "Six questions on whether you're growing and keeping your high-potential people — or quietly losing them. Instant rating and next move.",
    cta: "Take the scorecard",
    dark: false,
    href: "/free-tools/scorecard",
  },
];

export default function FreeToolsPage() {
  return (
    <>
      <Nav />
      <section className="bg-ink px-5 py-16 text-center text-paper sm:px-8 md:py-20 on-dark">
        <Container>
          <Eyebrow tone="soft">Free tools</Eyebrow>
          <h1 className="mx-auto mb-4 mt-3.5 max-w-[760px] font-display text-[36px] font-bold leading-[1.05] tracking-tightest sm:text-[52px]">
            See how much you&rsquo;re guessing — free.
          </h1>
          <p className="mx-auto m-0 max-w-[640px] text-[18px] leading-[1.6] text-[#B8B4A6]">
            Tools that turn a vague feeling about your team into something you can
            see. Start anywhere — each one shows you where you&rsquo;re exposed and
            what to do next.
          </p>
        </Container>
      </section>

      <Section tone="paper" className="!pb-0">
        <Container className="max-w-[760px]">
          <p className="m-0 text-[17px] leading-[1.75] text-content-muted">
            Not sure where to start? For a fast read on your whole approach, take
            the{" "}
            <Link
              href="/free-tools/certainty-diagnostic"
              className="font-semibold text-green"
            >
              2-minute Certainty Diagnostic
            </Link>
            . Lying awake about one person you just handed a big responsibility?
            Run the{" "}
            <Link
              href="/free-tools/4am-test"
              className="font-semibold text-green"
            >
              4&nbsp;AM Test
            </Link>
            . To surface the people you&rsquo;re overlooking, use the{" "}
            <Link
              href="/free-tools/hidden-gem-identifier"
              className="font-semibold text-green"
            >
              Hidden Gem Identifier
            </Link>
            . And to size the downside of getting it wrong, the{" "}
            <Link
              href="/free-tools/cost-of-a-bad-bet"
              className="font-semibold text-green"
            >
              Cost of a Bad Bet
            </Link>{" "}
            calculator puts a real number on one wrong hire or promotion.
          </p>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {TOOLS.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className={`flex flex-col rounded-[18px] p-7 transition-colors ${
                  t.dark
                    ? "bg-ink text-paper on-dark hover:bg-ink-2"
                    : "border border-edge-light bg-white hover:border-green"
                }`}
              >
                <div
                  className={`eyebrow ${t.dark ? "text-green-soft" : "text-content-faint"}`}
                >
                  {t.label}
                </div>
                <h2 className="mb-2 mt-3 font-display text-[22px] font-bold tracking-[-.02em]">
                  {t.title}
                </h2>
                <p
                  className={`m-0 mb-5 text-[15px] leading-[1.6] ${t.dark ? "text-[#B8B4A6]" : "text-[#615B4F]"}`}
                >
                  {t.body}
                </p>
                <span
                  className={`mt-auto font-bold ${t.dark ? "text-green-soft" : "text-green"}`}
                >
                  {t.cta} &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-[720px] text-center">
            <p className="m-0 mb-6 text-[17px] leading-[1.6] text-content-muted">
              Each tool tells you <em>where</em> you&rsquo;re exposed. A Prove
              Sprint tells you <em>who</em> to bet on — with six weeks of real
              behavior, not a hunch.
            </p>
            <ButtonLink href={site.bookingUrl}>Book a call</ButtonLink>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
