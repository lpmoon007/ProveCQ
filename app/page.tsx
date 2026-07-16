import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MiniHeatmap from "@/components/MiniHeatmap";
import { site } from "@/lib/site";

const CERTAINTY_COSTS = [
  {
    n: "01",
    title: "Wasted time",
    body: "Extra meetings, over-communicating, second-guessing — all to compensate for signals you don't trust.",
  },
  {
    n: "02",
    title: "Misdirected resources",
    body: "High-potential people get overlooked while low-signal performers get promoted and retained too long.",
  },
  {
    n: "03",
    title: "Missed growth moments",
    body: "You delay stretch assignments and promotions because you're unsure who can actually handle them.",
  },
  {
    n: "04",
    title: "Leadership drift",
    body: "You slide into over-functioning — doing the thinking and follow-up your team should own. Everyone burns out.",
  },
];

const TRAITS = [
  { name: "Initiative", desc: "Acts without being told." },
  { name: "Applied Grit", desc: "Follows through when it's hard." },
  { name: "Learnability", desc: "Adapts and grows under new demands." },
];

const STEPS = [
  {
    n: "01",
    title: "Snapshot",
    body: "A 15-minute behavioral read scores Initiative, Applied Grit, and Learnability — a hypothesis, not a verdict.",
  },
  {
    n: "02",
    title: "Validation",
    body: "Over six weeks, real follow-through is measured through micro-commitments and escalating challenges. 40+ datapoints. If they don't show up here, they won't show up when it matters.",
  },
  {
    n: "03",
    title: "Decision",
    body: "You see — in black and white — who's ready to promote, coach, or wait on. Bet fast, without regret.",
  },
];

const FLYWHEEL = [
  {
    tag: "HIRE",
    title: "Screen for commitment",
    body: "Score candidates on behavior from day one — no resumes, no charmers. Hire the doers.",
  },
  {
    tag: "PROVE",
    title: "Validate under pressure",
    body: "Confirm or disprove the signal during onboarding and before every big bet — a promotion, a project, the keys.",
  },
  {
    tag: "KEEP",
    title: "Better Every Day",
    body: "Keep your proven players growing and in motion — so your best don't burn out next to passengers.",
    link: { href: "/better-every-day", label: "More →" },
  },
];

const CERTAINTY_STATS = [
  { big: "6-figure", body: "mis-promotion, avoided — the cost of betting wrong on one leader." },
  { big: "40+", body: "behavioral datapoints in six weeks — the law of large numbers, not one gut call." },
  { big: "Promote fast", body: "— and without regret. Proof replaces the second-guessing." },
];

const CRED_STATS = [
  { big: "209%", body: "improvement in daily mindset scores in 30 days at one $3B client's leadership team." },
  { big: "Hundreds", body: "of leadership teams over 25 years — including work with 80% of the Fortune 500." },
  { big: "CNN", body: "CNN Money & Business Insider — and co-author with Covey, Blanchard, Chopra & Tracy." },
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

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="bg-ink px-5 py-20 text-paper sm:px-8 md:pb-24 md:pt-[88px] on-dark">
        <Container>
          <div className="mb-7 inline-block rounded-pill border border-[#33302595] px-[15px] py-[7px] text-[13px] font-bold tracking-[.02em] text-green-soft">
            For founders and CEOs who are done guessing about their people
          </div>
          <h1 className="m-0 mb-[26px] max-w-[900px] font-display text-[44px] font-bold leading-[1.0] tracking-tightest sm:text-[56px] md:text-[72px]">
            Stop betting on the wrong people.
          </h1>
          <p className="m-0 mb-[38px] max-w-[600px] text-[19px] leading-[1.55] text-[#B8B4A6] sm:text-[22px]">
            That promotion that went sideways? The hire who talked a great game
            and then vanished when it got hard? You didn&rsquo;t miss a signal.
            You never had one.{" "}
            <strong className="text-paper">
              Prove gives you behavioral proof of who will actually deliver
            </strong>{" "}
            — before you invest in them.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <ButtonLink href={site.bookingUrl}>Book a call</ButtonLink>
            <ButtonLink href="/how-it-works" variant="ghost-dark">
              See how Prove works &rarr;
            </ButtonLink>
          </div>
          <div className="mt-[34px] text-sm font-semibold text-content-faint">
            Behavioral proof, not another personality test · From the team behind
            Be Legendary
          </div>
        </Container>
      </section>

      {/* THE CERTAINTY GAP */}
      <Section tone="paper">
        <Container>
          <div className="mb-11 max-w-[720px]">
            <Eyebrow>The Certainty Gap</Eyebrow>
            <h2 className="mb-4 mt-3.5 font-display text-[32px] font-bold leading-[1.08] tracking-[-.02em] sm:text-[44px]">
              Every leader is guessing. It&rsquo;s quietly taxing your whole
              company.
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-content-muted">
              Who can you trust to take this and run? Who&rsquo;s leaning in
              versus just showing up? Who&rsquo;s ready to grow — and who&rsquo;s
              coasting? Most leaders answer on gut feel, stale reviews, and
              reactive check-ins. That guesswork has four costs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CERTAINTY_COSTS.map((c) => (
              <div
                key={c.n}
                className="rounded-2xl border border-edge-light bg-white p-[26px]"
              >
                <div className="mb-2.5 font-display text-[15px] font-bold text-signal-red">
                  {c.n}
                </div>
                <h3 className="mb-2 text-[17px] font-bold">{c.title}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#615B4F]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <p className="m-0 mt-8 max-w-[720px] text-[18px] font-semibold leading-[1.6] text-content">
            You start solving for clarity with control — and that&rsquo;s the
            beginning of the end. This isn&rsquo;t a people problem. It&rsquo;s a{" "}
            <span className="text-green">signal problem</span>.
          </p>
        </Container>
      </Section>

      {/* THE REVEAL: behavioral proof */}
      <Section tone="ink">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            <div>
              <Eyebrow tone="soft">Proof, not another test</Eyebrow>
              <h2 className="mb-[18px] mt-3.5 font-display text-[32px] font-bold leading-[1.08] tracking-[-.02em] sm:text-[42px]">
                We measure what people <span className="text-green-soft">do</span>{" "}
                — under pressure. Not what they say.
              </h2>
              <p className="m-0 mb-[22px] text-[17px] leading-[1.65] text-[#B8B4A6]">
                360s are slow and vague. Performance reviews look backward.
                Engagement surveys don&rsquo;t measure behavior. Personality tests
                are a paper exam for driving — you can pass without ever touching
                the wheel. Prove is the test drive. It scores three behaviors that
                actually predict who delivers:
              </p>
              <div className="flex flex-col gap-3">
                {TRAITS.map((t) => (
                  <div key={t.name} className="flex items-baseline gap-3.5">
                    <span className="min-w-[96px] font-display text-[15px] font-bold text-green-soft">
                      {t.name}
                    </span>
                    <span className="text-[15.5px] text-[#B8B4A6]">{t.desc}</span>
                  </div>
                ))}
              </div>
              <p className="mb-0 mt-[22px] text-[14.5px] text-content-faint">
                Together they form the{" "}
                <strong className="text-[#B8B4A6]">Commitment Quotient™</strong> —
                a behavioral signal you can trust, built from observed action, not
                self-report. It measures <em>behavior</em>, not personality — and a
                low score isn&rsquo;t &ldquo;bad,&rdquo; it just means someone may
                need more structure before a stretch.{" "}
                <a href="/ethics" className="text-green-soft">
                  What CQ is &amp; isn&rsquo;t &rarr;
                </a>
              </p>
            </div>
            <MiniHeatmap />
          </div>
        </Container>
      </Section>

      {/* START FREE */}
      <section className="bg-paper-2 px-5 py-[70px] sm:px-8">
        <Container className="grid grid-cols-1 items-center gap-7 md:grid-cols-[1fr_auto]">
          <div>
            <Eyebrow>Start free</Eyebrow>
            <h2 className="mb-2 mt-3 font-display text-[26px] font-bold leading-[1.1] tracking-[-.02em] sm:text-[32px]">
              See how much you&rsquo;re guessing &mdash; in 2 minutes.
            </h2>
            <p className="m-0 max-w-[560px] text-[16px] leading-[1.6] text-content-muted">
              Take the free Certainty Diagnostic, find your hidden gems, or
              explore the full Get to Green readiness map. No pitch &mdash; just a
              clear read on where you&rsquo;re exposed.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <ButtonLink href="/free-tools" className="whitespace-nowrap px-[26px] py-3.5 text-[15px]">
              Take the diagnostic
            </ButtonLink>
            <ButtonLink
              href="/free-tools"
              variant="ghost-light"
              className="whitespace-nowrap bg-white px-[26px] py-3.5 text-[15px] text-green"
            >
              See all free tools
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* WHY WE BUILT PROVE */}
      <section className="bg-paper-2 px-5 py-16 sm:px-8 md:py-[84px]">
        <Container className="max-w-[900px] text-center">
          <Eyebrow>Why we built Prove</Eyebrow>
          <h2 className="mb-5 mt-3.5 font-display text-[30px] font-bold leading-[1.1] tracking-[-.02em] sm:text-[40px]">
            We didn&rsquo;t theorize this. We lived it &mdash; hundreds of times.
          </h2>
          <p className="mx-auto mb-4 max-w-[720px] text-[18px] leading-[1.65] text-[#3A362C]">
            For twenty-five years we worked inside small and mid-sized companies
            across every industry. And we watched the same thing break, over and
            over: the wrong people hired, the wrong people promoted, and the right
            people quietly lost. Not because leaders lacked judgment &mdash;
            because they had no signal they could trust.
          </p>
          <p className="mx-auto m-0 max-w-[720px] text-[18px] leading-[1.65] text-[#3A362C]">
            Prove is what we built to fix it: a way to give SMB leaders real
            certainty in the people decisions that make or break them.
          </p>
        </Container>
      </section>

      {/* HOW PROVE WORKS */}
      <Section tone="paper">
        <Container>
          <div className="mb-11 text-center">
            <Eyebrow>How Prove works</Eyebrow>
            <h2 className="mt-3.5 font-display text-[32px] font-bold tracking-[-.02em] sm:text-[44px]">
              Guesswork in. Proof out. Six weeks.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-[18px] border border-edge-light bg-white p-8"
              >
                <div className="font-display text-[38px] font-bold text-green">
                  {s.n}
                </div>
                <h3 className="mb-2 mt-3 text-[20px] font-bold">{s.title}</h3>
                <p className="m-0 text-[15px] leading-[1.55] text-[#615B4F]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FLYWHEEL */}
      <Section tone="ink">
        <Container>
          <div className="mb-11 text-center">
            <Eyebrow tone="soft">The system</Eyebrow>
            <h2 className="mb-3 mt-3.5 font-display text-[32px] font-bold tracking-[-.02em] sm:text-[44px]">
              Bet on proof at every stage.
            </h2>
            <p className="mx-auto m-0 max-w-[600px] text-[17px] text-[#B8B4A6]">
              Prove isn&rsquo;t a one-off. It becomes how you hire, promote, and
              keep your best people in motion.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
            {FLYWHEEL.map((f) => (
              <div
                key={f.tag}
                className="rounded-[18px] border border-edge-dark bg-panel p-[30px]"
              >
                <div className="mb-2.5 font-display text-[13px] font-bold tracking-[.06em] text-green-soft">
                  {f.tag}
                </div>
                <h3 className="mb-2 text-[19px] font-bold">{f.title}</h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-[#B8B4A6]">
                  {f.body}
                  {f.link && (
                    <>
                      {" "}
                      <a href={f.link.href} className="text-green-soft">
                        {f.link.label}
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* EOS CALLOUT */}
      <section className="bg-green px-5 py-[70px] text-white sm:px-8 on-dark">
        <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <span className="eyebrow text-[#BFEBD0]">Run on EOS?</span>
            <h2 className="mb-3.5 mt-3 font-display text-[30px] font-bold leading-[1.08] tracking-[-.02em] sm:text-[38px]">
              Make the &ldquo;Capacity&rdquo; box real.
            </h2>
            <p className="m-0 text-[17px] leading-[1.6] text-[#E4F5EB]">
              GWC treats Capacity as a yes/no checkbox. It isn&rsquo;t. Prove
              gives your People Analyzer and Quarterly Conversations hard
              behavioral data — so you stop mis-placing people on gut feel.
            </p>
          </div>
          <div>
            <ButtonLink href="/for-eos" variant="on-green">
              Where EOS stops, Prove goes deeper &rarr;
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* CERTAINTY PER DOLLAR */}
      <Section tone="paper">
        <Container className="text-center">
          <Eyebrow>Certainty per dollar</Eyebrow>
          <h2 className="mx-auto mb-9 mt-3.5 max-w-[720px] font-display text-[30px] font-bold leading-[1.1] tracking-[-.02em] sm:text-[42px]">
            In tight markets, invest only in people showing real signal.
          </h2>
          <div className="grid grid-cols-1 gap-[18px] text-left md:grid-cols-3">
            {CERTAINTY_STATS.map((s) => (
              <div key={s.big} className="rounded-[18px] bg-ink p-[30px] text-paper">
                <div className="font-display text-[34px] font-bold text-green-soft">
                  {s.big}
                </div>
                <p className="mb-0 mt-2 text-[15px] leading-[1.5] text-[#B8B4A6]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* PROOF / CREDIBILITY */}
      <Section tone="ink">
        <Container>
          <div className="mb-10 text-center">
            <Eyebrow tone="soft">Why believe this</Eyebrow>
            <h2 className="mt-3.5 font-display text-[30px] font-bold tracking-[-.02em] sm:text-[40px]">
              A 25-year track record of changing how people show up.
            </h2>
          </div>
          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {CRED_STATS.map((s) => (
              <div
                key={s.big}
                className="rounded-2xl border border-edge-dark bg-panel p-7"
              >
                <div className="font-display text-[36px] font-bold text-green-soft">
                  {s.big}
                </div>
                <p className="mb-0 mt-2 text-[14.5px] leading-[1.55] text-[#B8B4A6]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mb-9 grid grid-cols-1 gap-4 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.who}
                className="rounded-2xl border border-edge-dark bg-panel p-[26px]"
              >
                <div className="mb-2 text-sm text-signal-yellow">★★★★★</div>
                <p className="m-0 mb-3 text-[15.5px] leading-[1.6] text-[#E4E0D2]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="text-[13px] text-content-faint">{t.who}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 border-t border-edge-dark pt-6">
            <span className="text-sm text-content-faint">
              Prove is built by James Carter, creator of the Flag Model, from the
              team behind Be Legendary.
            </span>
            <a href="/about" className="text-sm font-bold text-green-soft">
              About James &rarr;
            </a>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-green px-5 py-[88px] text-center text-white sm:px-8 on-dark">
        <div className="mx-auto max-w-[760px]">
          <h2 className="m-0 mb-4 font-display text-[34px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[46px]">
            Stop guessing. Start betting on proof.
          </h2>
          <p className="m-0 mb-[30px] text-[18px] leading-[1.6] text-[#E4F5EB]">
            Book a 20-minute call. We&rsquo;ll show you exactly where your
            certainty gap is costing you — and how Prove closes it.
          </p>
          <ButtonLink href={site.bookingUrl} variant="dark" className="text-[17px]">
            Book a call
          </ButtonLink>
        </div>
      </section>

      <Footer />
    </>
  );
}
