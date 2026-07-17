import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { RelatedGuides } from "@/components/RelatedLinks";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { ArticleMeta } from "@/components/ArticleMeta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Good Employees Fail After a Promotion",
  description:
    "When a strong performer flops after promotion, it is usually a capacity mismatch, not a character flaw. Learn why good employees fail after promotion and how to prevent it.",
  alternates: { canonical: "/guides/failed-promotion" },
};

const MISMATCHES = [
  {
    n: "01",
    h: <>IC skill &ne; leadership skill</>,
    b: "Being the best doer does not mean being able to get work done through others.",
  },
  {
    n: "02",
    h: "They did not want it",
    b: "Some accept a promotion out of loyalty or money, not desire — and it shows within months.",
  },
  {
    n: "03",
    h: "Higher demand, same habits",
    b: "The new role needs more initiative or adaptability than they have ever had to show.",
  },
];

const PREVENT = [
  {
    h: "Prove before you promote",
    b: "Run a scoped stretch that demands the exact behavior the new role needs — and watch what happens.",
  },
  {
    h: "Coach the gap first",
    b: "If one trait is weak, develop it deliberately before you hand over authority, not after.",
  },
];

export default function FailedPromotionPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › Failed promotions"
        eyebrow="Promotion risk"
        title={<>Why good employees fail after a promotion.</>}
      >
        You promoted your best person and watched them struggle. It felt personal.
        It was not &mdash; it was a predictable mismatch between the behavior the
        old role rewarded and the behavior the new one demands.
      </PageHero>

      <ArticleMeta
        headline="Why good employees fail after a promotion."
        description="When a strong performer flops after promotion, it is usually a capacity mismatch, not a character flaw. Learn why good employees fail after promotion and how to prevent it."
        canonical="/guides/failed-promotion"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Failed promotions", url: "/guides/failed-promotion" },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Good employees fail after promotion when the new role needs a
              behavior they have not proven yet &mdash; usually initiative or
              learnability at a higher altitude. The mistake is betting on{" "}
              <em>hope</em>; the fix is proving the missing behavior in a
              lower-stakes stretch first.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The three common mismatches
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {MISMATCHES.map((c) => (
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

      <Section tone="paper2">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            How to prevent it
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {PREVENT.map((c) => (
              <div
                key={c.h}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <h3 className="mb-2 text-[18px] font-bold">{c.h}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
        <div className="mx-auto max-w-[720px]">
          <h2 className="m-0 mb-4 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[38px]">
            De-risk the next promotion.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call and we will show you how to prove readiness before the
            title change.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[16px]">
              Book a call
            </ButtonLink>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-[12px] border-[1.5px] border-[#7BCB9E] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              See how Prove works &rarr;
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuides current="/guides/failed-promotion" />
      <Footer />
    </>
  );
}
