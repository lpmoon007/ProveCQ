import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { MoreFreeTools } from "@/components/RelatedLinks";
import InterviewKit from "@/components/InterviewKit";
import { Container, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";

const CANONICAL = "/free-tools/interview-kit";

const DESCRIPTION =
  "A free interactive interview kit: 18 behavioral questions grouped by Initiative, Applied Grit, and Learnability — with what to listen for and the red flags — plus live 1–5 scoring that gives you a CQ read on the candidate. Nothing leaves your browser.";

export const metadata: Metadata = {
  title: "The CQ Interview Kit — Score a Behavioral Interview Live",
  description: DESCRIPTION,
  keywords: [
    "behavioral interview scorecard",
    "interview scoring tool",
    "how to score a behavioral interview",
    "behavioral interview questions",
    "candidate evaluation tool",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The CQ Interview Kit",
    description:
      "Run the interview, listen for the signals, and score it live — a free behavioral interview kit.",
    url: CANONICAL,
    type: "website",
  },
};

// A WebApplication/SoftwareApplication rich result requires aggregateRating or
// review — which we won't fabricate for a free tool — so validators flag it as an
// error. Describe it as a free WebPage instead: valid, honest, no rating gate.
const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The CQ Interview Kit",
  description: DESCRIPTION,
  url: "https://provecq.com/free-tools/interview-kit",
  isAccessibleForFree: true,
  isPartOf: { "@type": "WebSite", name: "Prove", url: "https://provecq.com" },
};

export default function InterviewKitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Free tools › The CQ Interview Kit"
        eyebrow="Free tool"
        title={<>Run the interview. Score it live.</>}
      >
        Eighteen behavioral questions that predict follow-through &mdash; grouped
        by the three behaviors that matter, with what to listen for and the red
        flags in each answer. Rate each dimension as you go and get an instant CQ
        read. Free, no sign-up, and nothing you type leaves your browser.
      </PageHero>

      <Section tone="paper" className="!pb-0">
        <Container className="max-w-[760px]">
          <p className="m-0 text-[16px] leading-[1.7] text-content-muted">
            This is the interactive version of our{" "}
            <Link href="/guides/behavioral-interview-questions" className="font-semibold text-green">
              behavioral interview questions
            </Link>{" "}
            and{" "}
            <Link href="/guides/hiring-scorecard" className="font-semibold text-green">
              hiring scorecard
            </Link>{" "}
            &mdash; combined into one place so you can ask, listen, and score in a
            single pass. It&rsquo;s built to help you{" "}
            <Link href="/guides/hire-for-follow-through" className="font-semibold text-green">
              hire for follow-through
            </Link>{" "}
            instead of a good first impression, because{" "}
            <Link href="/guides/vs-resumes-interviews" className="font-semibold text-green">
              resumes and interviews miss it
            </Link>{" "}
            and{" "}
            <Link href="/guides/cost-of-a-bad-hire" className="font-semibold text-green">
              a bad hire is expensive
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="paper">
        <Container className="max-w-[820px]">
          <InterviewKit />
        </Container>
      </Section>

      {/* what it can and can't do — honest framing */}
      <Section tone="paper2" className="!pt-0">
        <Container className="max-w-[760px]">
          <div className="rounded-[16px] border-l-4 border-green bg-white p-6 sm:p-7">
            <h2 className="m-0 mb-2 font-display text-[19px] font-bold tracking-[-.01em]">
              A word on what this can and can&rsquo;t tell you
            </h2>
            <p className="m-0 text-[15px] leading-[1.65] text-content-muted">
              A structured behavioral interview beats a gut-feel chat &mdash; it
              is the single best thing you can do in the room. But even the best
              interview is a rehearsed conversation: you&rsquo;re scoring what
              someone <em>says</em> they did. The behaviors that predict who
              delivers &mdash; initiative when no one&rsquo;s watching,
              follow-through when it&rsquo;s hard &mdash; show up most clearly{" "}
              <em>over time, in real work</em>. That&rsquo;s the gap between a
              great interview and a{" "}
              <Link href="/case-studies/snapshot" className="font-semibold text-green">
                behavioral read of who actually delivers
              </Link>
              , and it&rsquo;s exactly what a{" "}
              <Link href="/how-it-works" className="font-semibold text-green">
                Prove cycle
              </Link>{" "}
              is built to close. Use this to interview far better; use Prove when
              the decision is big enough to want proof.
            </p>
          </div>
        </Container>
      </Section>

      <MoreFreeTools current={CANONICAL} />
      <Footer />
    </>
  );
}
