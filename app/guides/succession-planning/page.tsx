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
  title:
    "Succession Planning for Small Business (Without a Big HR Team)",
  description:
    "Succession planning is not just for the corner office. Learn how small businesses can build a bench and plan succession for key roles using behavioral proof.",
  alternates: { canonical: "/guides/succession-planning" },
};

const GAP = [
  {
    n: "01",
    h: "Key-person risk",
    b: "Critical knowledge and relationships sit with one or two people, undocumented.",
  },
  {
    n: "02",
    h: "No visible bench",
    b: "You assume someone could step up — but you have never tested it.",
  },
  {
    n: "03",
    h: <>No time for L&amp;D</>,
    b: "There is no formal development function to prepare successors.",
  },
];

const PLAN = [
  {
    h: "Prove readiness",
    b: "Run a scoped stretch to see who actually rises when given more.",
  },
  {
    h: "Coach the specific gap",
    b: "Develop the one behavior a successor is missing, deliberately and measurably.",
  },
];

// A lean succession checklist a founder can run without an HR department.
const CHECKLIST = [
  "List the roles that would hurt most if vacated tomorrow — usually two or three, not the whole org chart.",
  "Write down the knowledge and relationships that live only in each person's head, and start documenting them.",
  "Name at least one candidate who could grow into each critical role, even if they are not ready yet.",
  "Give that candidate a scoped stretch and watch whether they actually rise when handed more.",
  "Score the gap in behavioral terms — Initiative, Applied Grit, or Learnability — so you know exactly what to develop.",
  "Coach the one missing behavior deliberately, and re-check readiness before you are forced to rely on it.",
];

// FAQ — the format AI answer engines extract and cite. Answers stay faithful to
// the article and to the CQ framing (readiness proven in behavior, not assumed).
const FAQ = [
  {
    q: "What is succession planning for a small business?",
    a: "Succession planning is deciding, in advance, who would step into your critical roles if the current person left — and making sure they are actually ready. For a small business it is less about formal programs and more about naming your key-person risks and building a bench you have tested, so one departure cannot stall the company.",
  },
  {
    q: "How do I do succession planning without an HR team?",
    a: "Keep it lean. Name the two or three roles that would hurt most if vacated, identify who could grow into each, give them a scoped stretch to prove readiness, and coach the specific behavioral gap. You do not need a dedicated L&D function — you need behavioral evidence of who rises when given more.",
  },
  {
    q: "How do I know if someone is ready to be a successor?",
    a: "Do not assume — test it. Hand the candidate a real, scoped stretch that resembles the bigger role and watch what they do. Readiness shows up as behavior: taking initiative, following through when it is hard, and learning fast under new demands. That is far more reliable than a title or years of tenure.",
  },
  {
    q: "What is key-person risk?",
    a: "Key-person risk is when critical knowledge, relationships, or decisions sit with one or two people and are undocumented. If they leave, the company loses capability it cannot quickly replace. Naming these roles is the first step of succession planning, because it tells you exactly where to build a bench.",
  },
  {
    q: "When should a small business start succession planning?",
    a: "Before you need it. The moment a single departure could stall your business, you already have the risk — waiting until someone resigns leaves no time to prove and coach a successor. Building the bench early turns succession from a scramble into a plan you can act on calmly.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SuccessionPlanningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Guides › Succession planning"
        eyebrow="Continuity"
        title={<>Succession planning for small business.</>}
      >
        If one person leaving would stall your company, you have a key-person risk
        &mdash; and no bench. Succession planning is not a corporate luxury; it is
        how a scaling business protects its own continuity.
      </PageHero>

      <ArticleMeta
        headline="Succession planning for small business."
        description="Succession planning is not just for the corner office. Learn how small businesses can build a bench and plan succession for key roles using behavioral proof."
        canonical="/guides/succession-planning"
        crumbs={[
          { name: "Home", url: "" },
          { name: "Guides", url: "/guides" },
          { name: "Succession planning", url: "/guides/succession-planning" },
        ]}
      />

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[20px] bg-ink px-8 py-8 text-paper on-dark sm:px-[34px]">
            <Eyebrow tone="soft">The short answer</Eyebrow>
            <p className="m-0 mt-3 text-[18px] leading-[1.65] text-[#D8D4C6]">
              Start by naming the roles that would hurt most if vacated, then
              identify who has <em>proven</em> the behavior to step up &mdash; and
              coach the gaps deliberately. Behavioral proof turns succession from a
              wish list into a plan you can act on.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              What succession planning really means
            </h2>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              Succession planning is the practice of deciding, ahead of time, who
              would step into your most critical roles if the current person left
              &mdash; and making sure that person is genuinely ready, not just
              nominated. In a large company it comes wrapped in formal programs and
              nine-box grids. In a small business it is simpler and more urgent: it
              is how you make sure that no single departure can stop the company in
              its tracks.
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.65] text-content-muted">
              The mechanism that makes it work is proof of readiness. Most small
              teams have an assumption &mdash; &ldquo;so-and-so could probably run
              that&rdquo; &mdash; but never test it until they are forced to, at the
              worst possible moment. A better approach hands the candidate a scoped
              stretch that resembles the bigger role and watches what they actually
              do: whether they take initiative, follow through when it gets hard, and
              learn fast under unfamiliar demands. Readiness is a behavior you can
              observe, not a title you can assign.
            </p>
            <p className="m-0 text-[17px] leading-[1.65] text-content-muted">
              This matters because the cost of getting it wrong is continuity itself.
              An untested successor who freezes under real pressure is worse than
              knowing early that you need to develop someone. Measuring readiness in
              behavioral terms &mdash; the same signals behind{" "}
              <Link href="/guides/high-potential-employees" className="font-semibold text-green underline-offset-2 hover:underline">
                identifying high-potential employees
              </Link>{" "}
              &mdash; turns succession from a wish list into a plan, and tells you
              exactly which gap to coach before you have to depend on it.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
            The small-business succession gap
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {GAP.map((c) => (
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
            A lean way to plan
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {PLAN.map((c) => (
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

      <Section tone="paper">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-4 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              A succession checklist you can run this quarter
            </h2>
            <p className="m-0 mb-6 text-[17px] leading-[1.65] text-content-muted">
              You do not need a big HR function to protect your continuity. You need
              a short, honest checklist and the discipline to work through it:
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {CHECKLIST.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-[14px] border border-edge-light bg-white px-5 py-3.5 text-[15.5px] leading-[1.5] text-content"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-green">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="paper2">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h2 className="mb-6 font-display text-[28px] font-bold tracking-[-.02em] sm:text-[34px]">
              Succession planning: FAQ
            </h2>
            <div className="flex flex-col gap-3">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-[14px] border border-edge-light bg-white px-6 py-4"
                >
                  <summary className="cursor-pointer list-none text-[17px] font-bold marker:content-none">
                    {f.q}
                  </summary>
                  <p className="m-0 mt-3 text-[15.5px] leading-[1.6] text-content-muted">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
        <div className="mx-auto max-w-[720px]">
          <h2 className="m-0 mb-4 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[38px]">
            Build your bench before you need it.
          </h2>
          <p className="m-0 mb-7 text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a call to see how Prove maps readiness for your key roles.
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

      <RelatedGuides current="/guides/succession-planning" />
      <Footer />
    </>
  );
}
