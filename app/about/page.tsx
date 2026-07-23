import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About — Prove & the Commitment Quotient",
  description:
    "Prove is built by James Carter, creator of the Flag Model and author of the forthcoming Lost Disciplines of Leadership, featured in CNN and Business Insider. The Commitment Quotient turns behavior into proof for the people decisions that matter most.",
};

const PILLS = [
  "Creator of the Flag Model",
  "Featured: CNN & Business Insider",
  "Co-author w/ Covey, Blanchard, Chopra & Tracy",
];

const TEAM = [
  { name: "Chris McIntyre", img: "/team/chris-mcintyre.jpg", desc: "Productivity, executive coaching, accountability, emotional intelligence, small-business leadership." },
  { name: "Elena Kalova", img: "/team/elena-kalova.jpg", desc: "HR, organizational development, executive coaching, team culture, scaling small businesses." },
  { name: "Seth Santoro", img: "/team/seth-santoro.jpg", desc: "Talent strategy, multi-site workforce leadership, bilingual HR ops, culture, scaling consumer brands." },
  { name: "Jean Oplinger", img: "/team/jean-oplinger.jpeg", desc: "Executive coaching, personal branding, strengths- and values-based teaming." },
  { name: "Amanda Brown", img: "/team/amanda-brown.jpeg", desc: "Total rewards & culture, employee experience & engagement, holistic well-being, accountability coaching." },
  { name: "Karen Pfeffer", img: "/team/karen-pfeffer.jpeg", desc: "Small-business coach, NLP practitioner, marketing, empowering women, high-impact experiences." },
  { name: "Kristie McLean", img: "/team/kristie-mclean.jpeg", desc: "Transformation, restorative practices, facilitation, nonviolent communication, social leadership." },
  { name: "Colin Brine", img: "/team/colin-brine.jpg", desc: "Clarity consulting, strategic planning, facilitation, large-scale problem solving, CPA." },
];

const TESTIMONIALS = [
  {
    quote:
      "James has a great way of capturing your attention with thought-provoking activities and messages. You walk away inspired to grow yourself, help others, and — as James would say — Be Legendary.",
    who: "Mark Williams · Coakley & Williams Hotel Management",
  },
  {
    quote:
      "A very creative, talented and trustworthy man… a sincere desire to help others. I strongly recommend him to anyone seeking an original, innovative approach.",
    who: "David Gerard · Owner, Gerard & Associates",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="About"
        eyebrow="Why believe this"
        title="Proof over comfort. Behavior over guesswork."
      >
        Prove is the people-decision system from Be Legendary. After twenty-five
        years inside hundreds of small and mid-sized companies, we saw the same
        thing break in every industry — the wrong people hired, the wrong people
        promoted, the right people lost. Prove is what we built to solve it.
      </PageHero>

      {/* Founder */}
      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[280px_1fr]">
            <Image
              src="/james-carter.jpeg"
              alt="James Carter, creator of the Flag Model and the Commitment Quotient"
              width={560}
              height={640}
              className="w-full rounded-[18px] border border-edge-light object-cover"
              priority
            />
            <div>
              <Eyebrow>Founder</Eyebrow>
              <h2 className="mb-4 mt-3 font-display text-[30px] font-bold tracking-[-.02em]">
                James Carter
              </h2>
              <p className="m-0 mb-4 text-[17px] leading-[1.7] text-content-muted">
                James is the creator of the Flag Model and sole author of the
                forthcoming <em>Lost Disciplines of Leadership</em>™, and
                co-authored <em>Discover Your Inner Strength</em> alongside Stephen
                Covey, Ken Blanchard, Deepak Chopra and Brian Tracy. He built his
                frameworks across twenty-five years inside hundreds of leadership
                teams — work featured in CNN, CNN Money and Business Insider, and
                delivered to 80% of the Fortune 500 through Be Legendary&rsquo;s
                team-building practice.
              </p>
              <p className="m-0 mb-6 text-[17px] leading-[1.7] text-content-muted">
                The results are measurable: one $3B client&rsquo;s leadership team
                improved its daily mindset scores{" "}
                <strong className="text-content">209% in the thirty days</strong>{" "}
                after working with him. He created the Commitment Quotient for a
                simple reason — leaders kept betting on the wrong people, not
                because they lacked judgment, but because they lacked a signal they
                could trust. Prove is that signal.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {PILLS.map((p) => (
                  <span
                    key={p}
                    className="rounded-pill border border-edge-light bg-white px-4 py-2 text-[13px] font-semibold text-content-muted"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The bench */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="mb-9 max-w-[720px]">
            <Eyebrow>The bench behind Prove</Eyebrow>
            <h2 className="mb-4 mt-3.5 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Senior operators, not theorists.
            </h2>
            <p className="m-0 text-[17px] leading-[1.6] text-content-muted">
              Prove is backed by a full bench of people leaders — the same experts
              who ran the fractional engagements that revealed the pattern CQ now
              measures.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="flex gap-4 rounded-[18px] border border-edge-light bg-white p-5"
              >
                <Image
                  src={m.img}
                  alt={m.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 shrink-0 rounded-full object-cover"
                />
                <div>
                  <h3 className="mb-1 text-[16px] font-bold">{m.name}</h3>
                  <p className="m-0 text-[13.5px] leading-[1.5] text-[#615B4F]">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-[18px] bg-ink p-5 text-paper on-dark">
              <h3 className="mb-1 text-[16px] font-bold">+ more</h3>
              <p className="m-0 mb-2 text-[13.5px] leading-[1.5] text-[#B8B4A6]">
                A full bench across culture, comp, coaching, and org design.
              </p>
              <a href={site.bookingUrl} className="text-[14px] font-bold text-green-soft">
                Meet them on a call &rarr;
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.who}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <div className="mb-2 text-sm text-signal-yellow">★★★★★</div>
                <p className="m-0 mb-3 text-[15.5px] leading-[1.6] text-content">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="text-[13px] text-content-faint">{t.who}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Part of Be Legendary */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-8 rounded-[18px] border border-edge-light bg-white p-8 sm:p-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 font-display text-[26px] font-bold tracking-[-.02em] sm:text-[30px]">
                Part of Be Legendary
              </h2>
              <p className="m-0 mb-5 text-[16px] leading-[1.65] text-content-muted">
                Be Legendary helps executive teams find where they break first and
                rebuild the disciplines that broke. Prove answers the companion
                question — <em>who</em> on the team has the behavioral capacity to
                carry the load. Two doors, one house: truth over comfort, paid
                daily.
              </p>
              <a href={site.parentUrl} className="font-bold text-green">
                Visit Be Legendary ↗
              </a>
            </div>
            <div className="rounded-2xl bg-ink p-7 text-paper on-dark">
              <div className="eyebrow mb-3 text-green-soft">The through-line</div>
              <p className="m-0 text-[16px] leading-[1.65] text-[#B8B4A6]">
                Lost Disciplines diagnoses <strong className="text-paper">what</strong>{" "}
                is broken on a team. The Commitment Quotient proves{" "}
                <strong className="text-paper">who</strong> can fix it. Together
                they turn leadership from guesswork into evidence.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-0 text-center">
        <Container>
          <ButtonLink href={site.bookingUrl}>Book a call with the team</ButtonLink>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
