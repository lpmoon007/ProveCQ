"use client";

import { useState } from "react";

type Grade = "A" | "B" | "C" | "D" | "F";

type Question = {
  num: string;
  title: string;
  detail: string;
  gradeA: string;
  gradeF: string;
};

const QUESTIONS: Question[] = [
  {
    num: "1",
    title: "If you stepped away for a week, what would they do?",
    detail: "What happens when you're not available and the script disappears?",
    gradeA: "They lead without permission",
    gradeF: "They wait, stall, or ping you for every move",
  },
  {
    num: "2",
    title: "What's the last high-friction moment they owned?",
    detail:
      "When things went sideways, did they take full responsibility and bring solutions?",
    gradeA: "They turn friction into clarity",
    gradeF: "They disappear or escalate drama",
  },
  {
    num: "3",
    title: "What have they voluntarily pursued to grow in the last 90 days?",
    detail: "Not assigned, not required. What did they seek out on their own?",
    gradeA: "Growth is visible and self-driven",
    gradeF: "Nothing changed without pressure",
  },
  {
    num: "4",
    title: "When did they last challenge a decision — constructively?",
    detail: "Readiness requires courage, not compliance.",
    gradeA: "They resist when it matters",
    gradeF: "They stay silent — or blow things up",
  },
];

const LETTERS: Grade[] = ["A", "B", "C", "D", "F"];
const VALS: Record<Grade, number> = { A: 4, B: 3, C: 2, D: 1, F: 0 };

type Verdict = { label: string; blurb: string; bg: string; ink: string };

function computeVerdict(grades: (Grade | null)[]): Verdict | null {
  const done = grades.every((x) => x !== null);
  if (!done) return null;
  const g = grades as Grade[];
  const anyDF = g.some((x) => x === "D" || x === "F");
  const avg = g.reduce((a, b) => a + VALS[b], 0) / 4;
  if (anyDF) {
    return {
      label: "Don't hand it off — yet.",
      ink: "#B23A20",
      bg: "#FBE9E3",
      blurb:
        "At least one answer is a D or F. Coach, test, and observe before you give them the keys — the risk is real and the fallout is expensive.",
    };
  }
  if (avg >= 3) {
    return {
      label: "Green light — delegate with confidence.",
      ink: "#1F6B45",
      bg: "#E3F0E7",
      blurb:
        "Mostly A's and B's. The behavior is there. Hand it over — and use a Prove Sprint if the stakes are high enough to want certainty, not just confidence.",
    };
  }
  return {
    label: "Assign a stretch — with support.",
    ink: "#8A6A1E",
    bg: "#FBF0DA",
    blurb:
      "A C average. Promising, but not proven. Give them a scoped challenge with support and watch what they do before you fully hand off.",
  };
}

export default function FourAMTest() {
  const [grades, setGrades] = useState<(Grade | null)[]>([
    null,
    null,
    null,
    null,
  ]);

  const pick = (qi: number, g: Grade) => {
    setGrades((prev) => {
      const next = prev.slice();
      next[qi] = g;
      return next;
    });
  };

  const verdict = computeVerdict(grades);

  return (
    <div className="rounded-[20px] border border-edge-light bg-white p-6 sm:px-9 sm:py-[34px]">
      {QUESTIONS.map((q, qi) => (
        <div
          key={q.num}
          className="mb-[22px] border-b border-[#EEE7DA] pb-[22px]"
        >
          <div className="mb-1.5 flex items-baseline gap-3">
            <span className="font-display text-[18px] font-bold text-green">
              {q.num}
            </span>
            <h3 className="m-0 text-[18px] font-bold leading-[1.3]">
              {q.title}
            </h3>
          </div>
          <p className="m-0 mb-1.5 text-[14.5px] leading-[1.55] text-[#615B4F]">
            {q.detail}
          </p>
          <p className="m-0 mb-3.5 text-[13px] text-[#8A8474]">
            <strong className="text-[#2E9E5B]">A:</strong> {q.gradeA}{" "}
            &nbsp;&middot;&nbsp; <strong className="text-[#E5674C]">F:</strong>{" "}
            {q.gradeF}
          </p>
          <div className="flex gap-2">
            {LETTERS.map((L) => {
              const active = grades[qi] === L;
              return (
                <button
                  key={L}
                  onClick={() => pick(qi, L)}
                  className="h-[46px] w-[52px] cursor-pointer rounded-[11px] border-[1.5px] font-display text-[16px] font-bold"
                  style={{
                    borderColor: active ? "#1F8B57" : "#E4DCCB",
                    background: active ? "#1F8B57" : "#FBF8F2",
                    color: active ? "#fff" : "#2A261D",
                  }}
                >
                  {L}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {verdict ? (
        <div
          className="rounded-2xl p-7 text-center"
          style={{ background: verdict.bg }}
        >
          <div
            className="mb-2 text-[12px] font-bold uppercase tracking-[.12em]"
            style={{ color: verdict.ink }}
          >
            Your read
          </div>
          <div
            className="mb-2.5 font-display text-[26px] font-bold tracking-[-.01em]"
            style={{ color: verdict.ink }}
          >
            {verdict.label}
          </div>
          <p className="mx-auto m-0 max-w-[520px] text-[16px] leading-[1.6] text-[#3A362C]">
            {verdict.blurb}
          </p>
        </div>
      ) : (
        <p className="m-0 mt-1.5 text-center text-[14.5px] text-[#8A8474]">
          Grade all four to see your read.
        </p>
      )}
    </div>
  );
}
