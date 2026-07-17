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
  title: "How to Build a Leadership Bench Before You Need It",
  description:
    "Scaling stalls when leadership cannot keep up. Learn how to build a leadership bench early by proving and developing your highest-capacity people before the need is urgent.",
  alternates: { canonical: "/guides/leadership-bench" },
};

const WHY = [
  {
    n: "01",
    h: "Urgency beats readiness",
    b: "You promote whoever is available when a gap opens — not who is ready.",
  },
  {
    n: "02",
    h: "Potential is invisible",
    b: "Without a signal, high-capacity people get overlooked for louder ones.",
  },
  {
    n: "03",
    h: "No development runway",
    b: "By the time you need a leader, there is no time left to grow one.",
  },
];

const AHEAD = [
  {
    h: "Prove capacity early",
    b: "Identify who shows leadership behavior before a role is on the line.",
  },
  {
    h: "Develop deliberately",
    b: "Give proven people stretch and coaching so the bench is ready when growth calls.",
  },
];

export default function LeadershipBenchPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Guides › Leadership bench"
        eyebrow="Scaling"
        title={<>Build a leadership bench before you need it.</>}
      >
        Growth does not wait for your org chart. The companies that scale cleanly
        built their next layer of leaders <em>before</em> the crunch &mdash; not
        in a panic after a key person left or a new team appeared.
      </PageHero>

      <ArticleMeta
        headline="Build a leadership bench before you need it."
        description="Scaling stalls when leadership cannot keep up. Learn how to build a leadership bench early by proving and developing your highest-capacity people before the need is urgent."
        canonical="/guides/leadership-bench"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Leadership bench", url: "/guides/leadership-bench" },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Build a bench by proving which people have leadership-grade behavior
              now, then developing them deliberately ahead of the need. When you
              can see initiative, applied grit, and learnability across your team,
              you know exactly who to grow &mdash; before the seat opens.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            Why benches do not build themselves
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {WHY.map((c) => (
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
            How to build ahead of the need
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {AHEAD.map((c) => (
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
            Grow leaders on purpose.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove identifies and develops your next leaders.
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

      <RelatedGuides current="/guides/leadership-bench" />
      <Footer />
    </>
  );
}
