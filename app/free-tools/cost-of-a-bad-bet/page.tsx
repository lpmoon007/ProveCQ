import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CostOfBadBet from "@/components/CostOfBadBet";

export const metadata: Metadata = {
  title: "Cost of a Bad Bet — People Decision ROI Calculator",
  description:
    "Estimate what one wrong promotion or bad hire actually costs your company — salary, lost productivity, backfill, and team drag — and what proving the decision first could save. Free interactive calculator.",
};

export default function CostOfABadBetPage() {
  return (
    <div className="min-h-screen bg-paper text-content">
      <Nav />

      {/* hero */}
      <section className="bg-ink px-5 py-16 text-paper on-dark sm:px-8 md:pb-[52px] md:pt-16">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-4 text-[13px] font-semibold text-content-faint">
            <Link href="/" className="text-content-faint hover:text-paper">
              Home
            </Link>{" "}
            &rsaquo;{" "}
            <Link href="/free-tools" className="text-content-faint hover:text-paper">
              Free tools
            </Link>{" "}
            &rsaquo; Cost of a bad bet
          </div>
          <span className="text-[13px] font-bold uppercase tracking-[.14em] text-green-soft">
            Free calculator
          </span>
          <h1 className="mb-4 mt-3.5 font-display text-[36px] font-bold leading-[1.04] tracking-[-.03em] sm:text-[50px]">
            What does one wrong bet cost you?
          </h1>
          <p className="m-0 max-w-[640px] text-[19px] leading-[1.55] text-[#B8B4A6]">
            Promote the wrong person or make a bad senior hire, and the bill runs far past their
            salary. Move the sliders to size it for your company.
          </p>
        </div>
      </section>

      {/* calculator */}
      <section className="px-5 pb-20 pt-11 sm:px-8">
        <div className="mx-auto max-w-[1000px]">
          <CostOfBadBet />
        </div>
        <p className="mx-auto mt-[22px] max-w-[1000px] text-center text-[12.5px] text-[#8A8474]">
          Illustrative estimate for planning only, anchored to widely cited ranges (a bad hire
          commonly costs 30%&ndash;200%+ of salary; senior mis-promotions run higher). Your actual
          cost varies. Not financial advice.
        </p>
      </section>

      <Footer />
    </div>
  );
}
