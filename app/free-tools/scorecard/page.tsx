import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TalentScorecard from "@/components/TalentScorecard";

export const metadata: Metadata = {
  title:
    "Talent Development Scorecard — Are You Growing Your Best People?",
  description:
    "A 90-second self-check for founders and CEOs: are you actively developing and retaining your high-potential people, or quietly losing them? Six questions, an instant rating, and your next move.",
};

export default function ScorecardPage() {
  return (
    <div className="min-h-screen bg-paper text-content">
      <Nav />

      <section className="bg-ink px-5 py-16 text-paper sm:px-8 md:pb-[44px] md:pt-[60px] on-dark">
        <div className="mx-auto max-w-[760px]">
          <div className="mb-4 text-[13px] font-semibold text-content-faint">
            <Link href="/" className="text-content-faint hover:text-paper">
              Home
            </Link>{" "}
            &rsaquo;{" "}
            <Link
              href="/free-tools"
              className="text-content-faint hover:text-paper"
            >
              Free tools
            </Link>{" "}
            &rsaquo; Talent scorecard
          </div>
          <span className="text-[13px] font-bold uppercase tracking-[.14em] text-green-soft">
            90-second self-check
          </span>
          <h1 className="mb-3.5 mt-3.5 font-display text-[36px] font-bold leading-[1.05] tracking-[-.03em] sm:text-[46px]">
            Are you growing your best people &mdash; or quietly losing them?
          </h1>
          <p className="m-0 text-[18px] leading-[1.55] text-[#B8B4A6]">
            Six honest questions on how you develop and keep your high-potential
            talent. Rate each 1&ndash;5. Get an instant rating and your next
            move.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 pt-10 sm:px-8">
        <div className="mx-auto max-w-[760px]">
          <TalentScorecard />
        </div>
      </section>

      <Footer />
    </div>
  );
}
