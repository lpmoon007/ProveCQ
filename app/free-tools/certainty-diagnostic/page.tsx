import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CertaintyDiagnostic from "@/components/CertaintyDiagnostic";

export const metadata: Metadata = {
  title:
    "Are Your People Decisions Ready to Scale? Free 2-Minute Diagnostic",
  description:
    "A free 2-minute diagnostic for founders and CEOs: answer 10 quick questions and get an instant read on how much you're guessing about your people — hiring, promoting, and identifying high-potential employees. See your Certainty Score.",
  keywords: [
    "high potential assessment",
    "leadership readiness assessment",
    "people decision diagnostic",
    "certainty score",
  ],
  alternates: { canonical: "/free-tools/certainty-diagnostic" },
  openGraph: {
    title: "The Certainty Diagnostic — Free 2-Minute People-Decision Read",
    description:
      "How much of your hiring, promotion, and high-potential read is proof versus gut feel?",
    url: "/free-tools/certainty-diagnostic",
    type: "website",
  },
};

export default function CertaintyDiagnosticPage() {
  return (
    <div className="min-h-screen bg-paper text-content">
      <Nav />

      <section className="bg-ink px-5 pb-10 pt-[70px] text-paper on-dark sm:px-8">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="text-[13px] font-bold uppercase tracking-[.14em] text-[#8FD6AC]">
            Free 2-minute diagnostic
          </span>
          <h1 className="mx-0 mb-4 mt-3.5 font-display text-[34px] font-bold leading-[1.05] tracking-[-.03em] sm:text-[46px]">
            How much are you guessing about your people?
          </h1>
          <p className="m-0 text-[19px] leading-[1.55] text-[#B8B4A6]">
            Ten quick questions. One honest number: your{" "}
            <strong className="text-paper">Certainty Score</strong> &mdash; how
            much proof (versus gut feel) is behind your hiring, promotion, and
            retention decisions.
          </p>
        </div>
      </section>

      <section className="px-5 pb-[84px] pt-10 sm:px-8">
        <div className="mx-auto max-w-[760px]">
          <CertaintyDiagnostic />
        </div>
      </section>

      <Footer />
    </div>
  );
}
