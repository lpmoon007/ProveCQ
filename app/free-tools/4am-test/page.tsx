import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FourAMTest from "@/components/FourAMTest";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "The 4 AM Test — Will They Deliver, or Will You Wake Up Wondering?",
  description:
    "You handed them the project. Now it's 4 AM and you're wondering if you picked the wrong person. The free 4 AM Test grades one person on ownership, initiative, growth, and courage — using the last 90 days — so you know before the fallout.",
};

const STATS = [
  {
    stat: "#1",
    accent: "text-green",
    body: (
      <>
        Founders cite &ldquo;knowing who to trust&rdquo; as the top barrier to
        leadership decisions.{" "}
        <span className="text-[#8A8474]">(Founder Institute, 2022)</span>
      </>
    ),
  },
  {
    stat: "68%",
    accent: "text-green",
    body: (
      <>
        of small businesses hand over responsibility based on past performance.{" "}
        <span className="text-[#8A8474]">(SHRM, 2022)</span>
      </>
    ),
  },
  {
    stat: "60%",
    accent: "text-[#E5674C]",
    body: (
      <>
        of new managers fail within 24 months. High performance &ne; readiness.{" "}
        <span className="text-[#8A8474]">(DDI)</span>
      </>
    ),
  },
];

export default function FourAMTestPage() {
  return (
    <div className="min-h-screen bg-paper text-content">
      <Nav />

      <PageHero
        crumb="Free tools › The 4 AM Test"
        eyebrow="Free tool · 3 minutes"
        title="The 4 AM Test"
      >
        You handed them the project &mdash; the launch, the offsite, the
        promotion. Now it&rsquo;s 4:00 AM and you&rsquo;re lying awake
        wondering:{" "}
        <strong className="text-paper">
          did I just put the wrong person in charge?
        </strong>{" "}
        This isn&rsquo;t about promotions. It&rsquo;s about ownership and
        follow-through &mdash; and if you wait for the fallout to find out,
        you&rsquo;ll lose more than sleep.
      </PageHero>

      <section className="bg-paper px-5 pb-5 pt-14 sm:px-8">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-4 md:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.stat}
              className="rounded-2xl border border-edge-light bg-white p-6"
            >
              <div
                className={`font-display text-[30px] font-bold ${s.accent}`}
              >
                {s.stat}
              </div>
              <p className="m-0 mt-2 text-[14.5px] leading-[1.55] text-[#615B4F]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper px-5 pb-[84px] pt-9 sm:px-8">
        <div className="mx-auto max-w-[820px]">
          <div className="mb-[22px] rounded-2xl bg-paper-2 px-[26px] py-[22px] text-[15px] leading-[1.6] text-[#575249]">
            <strong>Pick ONE person</strong> you&rsquo;re considering for a key
            responsibility. Use the <strong>last 90 days</strong> as your window
            &mdash; not their potential, not your hopes, just what they&rsquo;ve
            actually done. Grade each question A&ndash;F. It&rsquo;s about
            patterns, not perfection.
          </div>
          <FourAMTest />
        </div>
      </section>

      <section className="bg-paper px-5 pb-[88px] sm:px-8">
        <div className="mx-auto max-w-[760px] rounded-[22px] bg-ink px-10 py-11 text-center text-paper on-dark">
          <div className="mb-3 text-[13px] font-bold uppercase tracking-[.14em] text-green-soft">
            Still not sure?
          </div>
          <h2 className="m-0 mb-3.5 font-display text-[30px] font-bold tracking-[-.02em]">
            Get proof, not a gut check.
          </h2>
          <p className="m-0 mb-3 text-[17px] leading-[1.6] text-[#B8B4A6]">
            The Readiness Snapshot&trade; has 3&ndash;5 peers weigh in
            anonymously on initiative, applied grit, and growth. You get a
            signal map and founder-ready action steps in 72 hours. No coaching,
            no fluff &mdash; just proof.
          </p>
          <p className="m-0 mb-6 text-[15px] font-bold text-green-soft">
            $500 &mdash; as inexpensive as we can make it.
          </p>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-green px-8 py-[15px] text-base font-bold text-white transition-colors hover:bg-green-700"
          >
            Get the Readiness Snapshot
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
