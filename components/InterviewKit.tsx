"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { site } from "@/lib/site";
import { track } from "@/lib/analytics";

type Q = { q: string; listen: string; red: string };
type Facet = { facet: string | null; questions: Q[] };
type Dimension = { key: DimKey; tagline: string; facets: Facet[] };
type DimKey = "Initiative" | "Applied Grit" | "Learnability";

const DIMENSIONS: Dimension[] = [
  {
    key: "Initiative",
    tagline: "Do they act without being told?",
    facets: [
      {
        facet: null,
        questions: [
          {
            q: "Describe a time you noticed something important that wasn't being addressed at work. What did you do, and what was the outcome?",
            listen: "Spotted and closed a gap on their own; the action clearly moved the outcome.",
            red: "“I waited.” “It wasn't my responsibility.” “Someone else handles that.”",
          },
          {
            q: "When did you proactively take on responsibilities outside your job description? What motivated you?",
            listen: "Self-driven eagerness to contribute; real impact from the extra work.",
            red: "“I had to,” “was asked,” “was required” — no personal motivation.",
          },
          {
            q: "Tell me about a recent time you took action without waiting for direction. What prompted it?",
            listen: "Reads the urgency, decides, and acts; outcome tied to their move.",
            red: "“Didn't know what to do,” hesitated, over-reliant on approval.",
          },
          {
            q: "Have you pursued an idea or project without clear approval? How did you move forward, and what happened?",
            listen: "Calculated risk, advocated to stakeholders, persisted through uncertainty.",
            red: "“Wouldn't do it without explicit permission” — passive, risk-averse.",
          },
        ],
      },
    ],
  },
  {
    key: "Applied Grit",
    tagline: "Do they own it and hold when it gets hard?",
    facets: [
      {
        facet: "Ownership",
        questions: [
          {
            q: "Tell me about a time something you were responsible for went wrong. How did you respond?",
            listen: "Owns it fast, no defensiveness, moves straight to correcting it.",
            red: "Blame, excuses, avoidance.",
          },
          {
            q: "When did you recognize you'd made a mistake at work? How did you handle admitting it?",
            listen: "Humility and transparency; active learning after the mistake.",
            red: "Hesitates to admit it, rationalizes, gets defensive.",
          },
          {
            q: "Describe taking responsibility for something that wasn't explicitly your fault. Why did you?",
            listen: "Broad sense of accountability and high standards; lifts team trust.",
            red: "“Not my problem,” rigid boundaries, won't help teammates.",
          },
        ],
      },
      {
        facet: "Resilience",
        questions: [
          {
            q: "Describe a challenging setback. How did you manage your emotions and stay productive?",
            listen: "Self-aware, has a coping strategy, keeps producing through it.",
            red: "Avoids the emotion entirely, or spins out with no recovery.",
          },
          {
            q: "Tell me about ongoing obstacles on a project. How did you sustain energy and commitment?",
            listen: "Persistent effort and internal drive without an immediate reward.",
            red: "Gives up quickly; depends on external motivation.",
          },
          {
            q: "When was feedback especially hard to hear? How did you handle it, and what changed after?",
            listen: "Takes tough feedback without defensiveness; concrete change afterward.",
            red: "Rejects the feedback, blames others, little self-awareness.",
          },
        ],
      },
      {
        facet: "Long-Game Drive",
        questions: [
          {
            q: "Tell me about a long-term goal you set yourself. How did you stay disciplined over time?",
            listen: "Clear vision, self-driven habits, follow-through when motivation dipped.",
            red: "No real strategy, vague answer, easily distracted from goals.",
          },
          {
            q: "When were immediate results invisible but you persisted? How did you know it was worth continuing?",
            listen: "Patience and intrinsic motivation; sense of the longer payoff.",
            red: "Impatient, changes direction, over-dependent on immediate results.",
          },
          {
            q: "Describe an achievement that took a long time. What kept you going when progress felt slow?",
            listen: "Sustained effort over months or years toward a clear purpose.",
            red: "Frustration, frequent quitting of the hard parts.",
          },
        ],
      },
    ],
  },
  {
    key: "Learnability",
    tagline: "Do they adapt and grow?",
    facets: [
      {
        facet: null,
        questions: [
          {
            q: "When did you have to quickly acquire new knowledge or skills? What steps did you take?",
            listen: "Structured approach, sought resources, tracked their own progress.",
            red: "“Waited until someone trained me,” “just figured it out somehow.”",
          },
          {
            q: "Give an example of critical feedback that required a real change in approach. How did you incorporate it?",
            listen: "Open and non-defensive; concrete changes; visible growth after.",
            red: "“They misunderstood,” “it wasn't fair,” minimal actual change.",
          },
          {
            q: "When did you significantly change your mind based on new information? What convinced you?",
            listen: "Flexible thinking, clear reasoning, pivots without ego getting in the way.",
            red: "Rigidity, ego-driven reasons, weak account of what triggered the change.",
          },
          {
            q: "What have you recently learned on your own initiative? How did you go about it?",
            listen: "Genuine curiosity, self-directed, actually applied what they learned.",
            red: "Can't recall anything; passive language; superficial example.",
          },
        ],
      },
    ],
  },
];

const RATING_LABELS: Record<number, string> = {
  1: "Clear red flags",
  2: "Leaning weak",
  3: "Mixed signal",
  4: "Leaning strong",
  5: "Strong across answers",
};

const ZONES = {
  green: {
    label: "Green",
    dot: "🟢",
    move: "Ready for more scope. Promote or stretch — with support so they don't burn out.",
  },
  yellow: {
    label: "Yellow",
    dot: "🟡",
    move: "Growth potential. Coach with role clarity before a leadership move.",
  },
  red: {
    label: "Red",
    dot: "🔴",
    move: "Needs structure first. Strong in clear lanes; ambiguity-heavy roles would strain them.",
  },
} as const;

function zoneFor(total: number) {
  if (total >= 12) return ZONES.green;
  if (total >= 8) return ZONES.yellow;
  return ZONES.red;
}

export default function InterviewKit() {
  const [name, setName] = useState("");
  const [ratings, setRatings] = useState<Partial<Record<DimKey, number>>>({});
  const [notes, setNotes] = useState<Partial<Record<DimKey, string>>>({});
  const [copied, setCopied] = useState(false);
  const firedRef = useRef(false);

  const rated = Object.keys(ratings).length;
  const complete = rated === DIMENSIONS.length;
  const total = useMemo(
    () => DIMENSIONS.reduce((sum, d) => sum + (ratings[d.key] || 0), 0),
    [ratings],
  );

  useEffect(() => {
    if (complete && !firedRef.current) {
      firedRef.current = true;
      track("interview_kit_complete", { score: total });
    }
    if (!complete) firedRef.current = false;
  }, [complete, total]);

  function setRating(key: DimKey, v: number) {
    setRatings((r) => ({ ...r, [key]: v }));
    setCopied(false);
  }

  function reset() {
    setName("");
    setRatings({});
    setNotes({});
    setCopied(false);
  }

  const zone = complete ? zoneFor(total) : null;

  function copySummary() {
    const lines = [
      `CQ Interview Read${name ? ` — ${name}` : ""}`,
      `Overall CQ: ${total}/15${zone ? ` (${zone.label} zone)` : ""}`,
      "",
      ...DIMENSIONS.map(
        (d) =>
          `${d.key}: ${ratings[d.key] ?? "—"}/5${
            notes[d.key] ? `\n  Notes: ${notes[d.key]}` : ""
          }`,
      ),
      "",
      zone ? `Recommended move: ${zone.move}` : "",
      "",
      "A CQ read is a behavioral snapshot for development and investment decisions — not a termination tool, and not a judgment of worth.",
    ];
    const text = lines.join("\n");
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(
        () => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        },
        () => setCopied(false),
      );
    }
  }

  return (
    <div className="flex flex-col gap-5">
      {/* candidate + how to use */}
      <div className="rounded-[18px] border border-[#E7E0D2] bg-white p-6 sm:p-7">
        <label
          htmlFor="cand"
          className="mb-1.5 block text-[13px] font-bold uppercase tracking-[.05em] text-green"
        >
          Candidate (optional)
        </label>
        <input
          id="cand"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name or initials"
          className="w-full max-w-[360px] rounded-[11px] border-[1.5px] border-[#E4DCCB] bg-[#FBF8F2] px-4 py-2.5 text-[15px] text-content outline-none transition-colors focus:border-green"
        />
        <p className="m-0 mt-3 text-[13.5px] leading-[1.6] text-[#8A8474]">
          Ask the questions in each dimension, jot what you hear, then rate the
          dimension 1&ndash;5. Nothing you type here leaves your browser &mdash;
          there&rsquo;s no account and nothing is sent anywhere.
        </p>
      </div>

      {/* dimensions */}
      {DIMENSIONS.map((d) => (
        <div
          key={d.key}
          className="rounded-[18px] border border-[#E7E0D2] bg-white p-6 sm:p-8"
        >
          <div className="mb-1 text-[13px] font-bold uppercase tracking-[.05em] text-green">
            CQ dimension
          </div>
          <h2 className="m-0 font-display text-[24px] font-bold tracking-[-.02em] sm:text-[27px]">
            {d.key}
          </h2>
          <p className="m-0 mt-1 text-[15px] text-content-muted">{d.tagline}</p>

          <div className="mt-5 flex flex-col gap-4">
            {d.facets.map((f) => (
              <div key={f.facet ?? d.key}>
                {f.facet && (
                  <div className="mb-2 text-[12.5px] font-bold uppercase tracking-[.06em] text-content-faint">
                    {f.facet}
                  </div>
                )}
                <div className="flex flex-col gap-3">
                  {f.questions.map((qq) => (
                    <div
                      key={qq.q}
                      className="rounded-[13px] border border-edge-light bg-paper px-4 py-3.5"
                    >
                      <p className="m-0 text-[15px] font-semibold leading-[1.45] text-content">
                        {qq.q}
                      </p>
                      <p className="m-0 mt-2 text-[13.5px] leading-[1.5] text-[#3F6B50]">
                        <span className="font-bold">Listen for:</span>{" "}
                        {qq.listen}
                      </p>
                      <p className="m-0 mt-1 text-[13.5px] leading-[1.5] text-[#9B4A34]">
                        <span className="font-bold">Red flag:</span> {qq.red}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* notes + rating */}
          <div className="mt-5 border-t border-edge-light pt-5">
            <label
              htmlFor={`notes-${d.key}`}
              className="mb-1.5 block text-[13px] font-bold text-content"
            >
              Your notes on {d.key}
            </label>
            <textarea
              id={`notes-${d.key}`}
              value={notes[d.key] ?? ""}
              onChange={(e) =>
                setNotes((n) => ({ ...n, [d.key]: e.target.value }))
              }
              rows={2}
              placeholder="What did you actually hear across the answers?"
              className="w-full resize-y rounded-[11px] border-[1.5px] border-[#E4DCCB] bg-[#FBF8F2] px-4 py-2.5 text-[14.5px] leading-[1.5] text-content outline-none transition-colors focus:border-green"
            />
            <div className="mt-3.5">
              <div className="mb-2 text-[13px] font-bold text-content">
                Rate {d.key}
              </div>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((v) => {
                  const active = ratings[d.key] === v;
                  return (
                    <button
                      key={v}
                      onClick={() => setRating(d.key, v)}
                      aria-pressed={active}
                      className={`flex min-w-[46px] cursor-pointer flex-col items-center rounded-[11px] border-[1.5px] px-3 py-2 text-center transition-colors ${
                        active
                          ? "border-green bg-green text-white"
                          : "border-[#E4DCCB] bg-[#FBF8F2] text-content hover:border-green"
                      }`}
                    >
                      <span className="font-display text-[17px] font-bold leading-none">
                        {v}
                      </span>
                    </button>
                  );
                })}
              </div>
              {ratings[d.key] && (
                <p className="m-0 mt-2 text-[13px] font-semibold text-[#8A8474]">
                  {ratings[d.key]} &mdash; {RATING_LABELS[ratings[d.key]!]}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* live result */}
      <div className="rounded-[20px] bg-[#14130E] px-6 py-8 text-paper on-dark sm:px-9">
        {!complete ? (
          <p className="m-0 text-center text-[15px] leading-[1.6] text-[#B8B4A6]">
            Rate all three dimensions to see the CQ read.{" "}
            <span className="text-green-soft">
              {rated}/3 rated.
            </span>
          </p>
        ) : (
          <>
            <div className="text-center">
              <span className="text-[13px] font-bold uppercase tracking-[.14em] text-[#8FD6AC]">
                {name ? `${name} — ` : ""}CQ interview read
              </span>
              <div
                className="mx-0 mb-1 mt-3 font-display text-[64px] font-bold leading-none tracking-[-.03em]"
                style={{
                  color:
                    zone!.label === "Green"
                      ? "#8FD6AC"
                      : zone!.label === "Yellow"
                        ? "#E8C878"
                        : "#E9A08C",
                }}
              >
                {total}
                <span className="text-[28px] text-[#6E6A5C]">/15</span>
              </div>
              <div className="mb-3 text-[19px] font-bold">
                {zone!.dot} {zone!.label} zone
              </div>
              <p className="mx-auto mb-0 max-w-[520px] text-[15px] leading-[1.6] text-[#D8D4C6]">
                {zone!.move}
              </p>
            </div>

            <div className="mx-auto mt-6 flex max-w-[420px] flex-col gap-2">
              {DIMENSIONS.map((d) => (
                <div
                  key={d.key}
                  className="flex items-center justify-between rounded-[10px] bg-[#1E1B13] px-4 py-2.5 text-[14px]"
                >
                  <span className="text-[#B8B4A6]">{d.key}</span>
                  <span className="font-display font-bold text-paper">
                    {ratings[d.key]}/5
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={copySummary}
                className="cursor-pointer rounded-[11px] bg-green px-5 py-3 text-[14.5px] font-bold text-white transition-colors hover:bg-green-700"
              >
                {copied ? "Copied ✓" : "Copy summary"}
              </button>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[11px] border-[1.5px] border-[#3A3629] px-5 py-3 text-[14.5px] font-bold text-paper transition-colors hover:border-paper"
              >
                Pressure-test this hire on a call
              </a>
            </div>
            <p className="mx-auto mt-5 max-w-[540px] text-center text-[12.5px] leading-[1.6] text-[#7C7767]">
              An interview read is a strong start &mdash; but answers are
              rehearsed. It&rsquo;s a snapshot for development and hiring
              decisions, never a termination tool or a judgment of worth. The
              surest signal is behavior over time:{" "}
              <Link href="/how-it-works" className="font-semibold text-green-soft underline">
                see how Prove measures it
              </Link>
              .
            </p>
          </>
        )}
      </div>

      <div className="text-center">
        <button
          onClick={reset}
          className="cursor-pointer border-none bg-transparent font-sans text-[13.5px] font-semibold text-[#8A8474]"
        >
          &#8635; Reset the kit
        </button>
      </div>
    </div>
  );
}
