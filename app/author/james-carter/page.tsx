import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Section } from "@/components/ui";
import { PageHero, CTASection } from "@/components/PageParts";
import { AUTHOR } from "@/lib/seo";
import { site } from "@/lib/site";

const CANONICAL = "/author/james-carter";

export const metadata: Metadata = {
  title: "James Carter — Founder of Be Legendary, Creator of the CQ",
  description:
    "James Carter is the founder of Be Legendary and the creator of the Commitment Quotient — the behavioral method behind Prove. He writes for founders and CEOs on making people decisions on proof instead of gut feel.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "James Carter — Founder of Be Legendary",
    description:
      "Creator of the Commitment Quotient. Writes on people decisions for founders and CEOs.",
    url: CANONICAL,
    type: "profile",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: AUTHOR.name,
  jobTitle: AUTHOR.jobTitle,
  url: `${site.domain}${CANONICAL}`,
  sameAs: AUTHOR.sameAs,
  worksFor: {
    "@type": "Organization",
    name: "Be Legendary",
    url: site.parentUrl,
  },
  description:
    "Founder of Be Legendary and creator of the Commitment Quotient, the behavioral method behind Prove.",
  knowsAbout: [
    "employee commitment",
    "leadership readiness",
    "promotion decisions",
    "hiring",
    "employee retention",
    "EOS capacity",
    "people analytics",
  ],
};

const WRITES_ABOUT = [
  { title: "How to know who to promote", href: "/guides/who-to-promote" },
  {
    title: "How to identify high-potential employees",
    href: "/guides/high-potential-employees",
  },
  { title: "The real cost of a bad hire", href: "/guides/cost-of-a-bad-hire" },
  {
    title: "GWC: making the Capacity box measurable",
    href: "/for-eos/gwc",
  },
  {
    title: "The problem isn't your people. It's the metric.",
    href: "/guides/its-the-metric",
  },
  {
    title: "The 2026 State of Engagement",
    href: "/guides/state-of-engagement",
  },
];

export default function JamesCarterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Author &rsaquo; James Carter"
        eyebrow="Author"
        title={<>James Carter</>}
      >
        Founder of <strong className="text-paper">Be Legendary</strong> and the
        creator of the <strong className="text-paper">Commitment Quotient</strong>{" "}
        &mdash; the behavioral method behind Prove. He works with founders and
        CEOs on the hardest calls a leader makes: who to hire, who to promote,
        and who to bet on.
      </PageHero>

      <Section tone="paper">
        <Container className="max-w-[760px]">
          <div className="text-[18px] leading-[1.7] text-[#3A362C]">
            <p className="m-0 mb-5">
              James built Prove on a simple conviction: the highest-stakes
              decisions a leader makes are about people, yet most are still made
              on gut feel, a strong interview, or last quarter&rsquo;s numbers.
              The Commitment Quotient exists to replace that guesswork with{" "}
              <strong>behavioral proof</strong> &mdash; measuring Initiative,
              Applied Grit, and Learnability from what people actually do under
              pressure.
            </p>
            <p className="m-0 mb-5">
              Through <a href={site.parentUrl}>Be Legendary</a>, he has spent his
              career helping small and mid-sized companies build the people
              systems that larger firms take for granted &mdash; and turning the
              vague idea of &ldquo;capacity&rdquo; into something a founder can
              actually see and trust. His writing here is aimed squarely at
              operators: no jargon, no personality-test mysticism, just a clearer
              way to bet on the right people.
            </p>
            <p className="m-0">
              He writes about promotions, hiring, retention, and measuring
              commitment &mdash; and how each of those decisions gets better when
              it rests on evidence instead of a hunch.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container className="max-w-[760px]">
          <h2 className="mb-6 font-display text-[26px] font-bold tracking-[-.02em]">
            Selected writing
          </h2>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {WRITES_ABOUT.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="rounded-[14px] border border-edge-light bg-white p-5 transition-colors hover:border-green"
              >
                <span className="block text-[15px] font-bold leading-[1.4] text-content hover:text-green">
                  {a.title}
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-[15px] text-content-muted">
            More in the{" "}
            <Link href="/guides" className="font-semibold text-green">
              full guides library
            </Link>
            .
          </p>
        </Container>
      </Section>

      <CTASection title="Bring James your hardest people decision.">
        Book a 20-minute call and see how Prove measures commitment behavior on
        your own team.
      </CTASection>

      <Footer />
    </>
  );
}
