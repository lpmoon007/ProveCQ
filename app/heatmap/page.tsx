import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Heatmap from "@/components/Heatmap";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The CQ Heatmap — See Your Whole Team in Black and White",
  description:
    "An interactive CQ Heatmap: a team roster scored on Initiative, Applied Grit, and Learnability, with a per-person CQ score, tier, recommended founder action, and risk note.",
};

export default function HeatmapPage() {
  return (
    <div className="min-h-screen bg-ink text-paper on-dark">
      <Nav minimal />

      <main>
      <section className="mx-auto max-w-[1120px] px-5 pb-5 pt-12 sm:px-8">
        <div className="mb-3.5 text-[13px] font-semibold text-content-faint">
          <Link href="/" className="text-content-faint hover:text-paper">
            Home
          </Link>{" "}
          &rsaquo; The Heatmap · interactive demo
        </div>
        <h1 className="m-0 mb-3 font-display text-[34px] font-bold leading-[1.05] tracking-[-.02em] sm:text-[44px]">
          See your whole team in black and white.
        </h1>
        <p className="m-0 max-w-[680px] text-[18px] leading-[1.55] text-[#B8B4A6]">
          This is a sample CQ Heatmap. Filter by tier, sort by trait, and click
          any person to see their read, the recommended founder action, and the
          risk to watch. Sample data — your real Heatmap comes out of a Prove
          cycle.
        </p>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 pb-20 pt-6 sm:px-8">
        <Heatmap />
        <div className="mt-7 text-center">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-green px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-green-700"
          >
            Get your team&rsquo;s Heatmap &rarr;
          </a>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
