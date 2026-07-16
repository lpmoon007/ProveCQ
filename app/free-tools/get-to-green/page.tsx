import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GetToGreen from "@/components/GetToGreen";

export const metadata: Metadata = {
  title: "Get to Green — The 146-Point People-Systems Readiness Map",
  description:
    "Get to Green scores all 7 macro and 30+ micro people systems red, yellow, or green — a category-weighted readiness map that shows exactly where your company is exposed as you scale, and what to fix first.",
};

export default function GetToGreenPage() {
  return (
    <div className="min-h-screen bg-ink text-paper on-dark">
      <Nav minimal />

      <section className="mx-auto max-w-[1120px] px-5 pb-[18px] pt-12 sm:px-8">
        <div className="mb-3.5 text-[13px] font-semibold text-[#7C7767]">
          <Link href="/" className="text-[#7C7767] hover:text-paper">
            Home
          </Link>{" "}
          &rsaquo;{" "}
          <Link
            href="/free-tools/certainty-diagnostic"
            className="text-[#7C7767] hover:text-paper"
          >
            Diagnostic
          </Link>{" "}
          &rsaquo; Get to Green
        </div>
        <span className="text-[13px] font-bold uppercase tracking-[.14em] text-green-soft">
          The full readiness map
        </span>
        <h1 className="m-0 mb-3 mt-3 font-display text-[34px] font-bold leading-[1.05] tracking-[-.02em] sm:text-[44px]">
          Get to Green
        </h1>
        <p className="m-0 max-w-[720px] text-[18px] leading-[1.55] text-[#B8B4A6]">
          The diagnostic gave you a number. This is the whole picture: all 7
          macro and 30+ micro people systems, each scored red, yellow, or green,
          category-weighted into one readiness score &mdash; so you know exactly
          where you&rsquo;re exposed and what to fix first. Sample data shown; tap
          any status to explore.
        </p>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 pb-20 pt-[22px] sm:px-8">
        <GetToGreen />

        <div className="mt-7 rounded-[18px] border border-[#2A2718] bg-[#1B1A12] p-8 text-center">
          <div className="mb-2 text-[12px] font-bold uppercase tracking-[.12em] text-green-soft">
            Full demo &mdash; no signup needed
          </div>
          <h2 className="m-0 mb-2.5 font-display text-[26px] font-bold tracking-[-.02em]">
            Save your own map &mdash; free account.
          </h2>
          <p className="mx-auto m-0 mb-[22px] max-w-[560px] text-[16px] leading-[1.6] text-[#B8B4A6]">
            Explore this entire sample freely. To score and save your{" "}
            <em>own</em> company&rsquo;s 146-point map, create a free account
            &mdash; self-serve, instant, and yours to manage. Upgrade to a Prove
            Sprint whenever you&rsquo;re ready.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-green px-[30px] py-[15px] text-[16px] font-bold text-white transition-colors hover:bg-green-700"
            >
              Create your free account
            </Link>
            <Link
              href="/free-tools/certainty-diagnostic"
              className="inline-block rounded-xl border-[1.5px] border-[#3A3629] bg-transparent px-[30px] py-[15px] text-[16px] font-bold text-paper transition-colors hover:border-green-soft"
            >
              Start with the 2-min diagnostic
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
