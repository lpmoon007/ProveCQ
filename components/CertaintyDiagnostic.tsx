"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

type Question = { cat: string; q: string };
type Option = { label: string; v: number };

const QUESTIONS: Question[] = [
  {
    cat: "Hiring",
    q: "When you make a hire, how confident are you they'll follow through once the shine wears off?",
  },
  {
    cat: "Hiring",
    q: "How much of your last hiring decision came from the interview versus how they actually behaved?",
  },
  {
    cat: "Promotion",
    q: "Before you promote someone, how well can you predict they'll succeed in the new role?",
  },
  {
    cat: "Promotion",
    q: "How often does your best individual performer turn out to be the right person to lead?",
  },
  {
    cat: "Retention",
    q: "Do you know which of your best people are quietly disengaging right now?",
  },
  {
    cat: "Retention",
    q: "Can you tell who's truly committed versus who's just staying because leaving feels risky?",
  },
  {
    cat: "Potential",
    q: "How well can you spot the hungry striver stuck in an entry-level seat?",
  },
  {
    cat: "Bottleneck",
    q: "How confident are you handing over a real outcome without it routing back to you?",
  },
  {
    cat: "Signal",
    q: "When you make a big people call, is it backed by evidence or mostly gut feel?",
  },
  {
    cat: "Consistency",
    q: "Do you have a consistent way to measure who delivers when things get hard?",
  },
];

const OPTIONS: Option[] = [
  { label: "Very confident — I have real proof", v: 3 },
  { label: "Somewhat — informed guess", v: 2 },
  { label: "Not really — mostly gut feel", v: 1 },
  { label: "Honestly, I'm flying blind", v: 0 },
];

type Gap = { label: string; dot: string };

export default function CertaintyDiagnostic() {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const total = QUESTIONS.length;
  const done = i >= total;

  function choose(v: number) {
    const next = answers.slice(0, i);
    next[i] = v;
    setAnswers(next);
    setI(i + 1);
  }

  function back() {
    setI(Math.max(0, i - 1));
  }

  function restart() {
    setI(0);
    setAnswers([]);
  }

  if (!done) {
    const q = QUESTIONS[i];
    const progressPct = Math.round((i / total) * 100) + "%";
    const canGoBack = i > 0;

    return (
      <div className="rounded-[22px] border border-[#E7E0D2] bg-white px-6 py-8 sm:px-10 sm:py-[38px]">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[13px] font-bold uppercase tracking-[.06em] text-green">
            Question {i + 1} of {total}
          </span>
          <span className="text-[13px] font-semibold text-[#8A8474]">
            {q.cat}
          </span>
        </div>
        <div className="mb-[26px] h-1.5 overflow-hidden rounded-md bg-[#EDE7DA]">
          <div
            className="h-full bg-green"
            style={{ width: progressPct }}
          />
        </div>
        <h2 className="m-0 mb-6 font-display text-[26px] font-bold leading-[1.25] tracking-[-.01em] text-content">
          {q.q}
        </h2>
        <div className="flex flex-col gap-3">
          {OPTIONS.map((o) => (
            <button
              key={o.v}
              onClick={() => choose(o.v)}
              className="w-full cursor-pointer rounded-xl border-[1.5px] border-[#E4DCCB] bg-[#FBF8F2] px-[18px] py-4 text-left font-sans text-base font-semibold text-[#2A261D] transition-colors hover:border-green"
            >
              {o.label}
            </button>
          ))}
        </div>
        <div className="mt-6">
          {canGoBack && (
            <button
              onClick={back}
              className="cursor-pointer border-none bg-transparent p-0 font-sans text-sm font-semibold text-[#8A8474]"
            >
              &larr; Back
            </button>
          )}
        </div>
      </div>
    );
  }

  // score
  const max = total * 3;
  const raw = answers.reduce((a, b) => a + (b || 0), 0);
  const pct = Math.round((raw / max) * 100);
  const color =
    pct >= 67 ? "#2E9E5B" : pct >= 40 ? "#E0A73E" : "#E5674C";
  const tier =
    pct >= 67
      ? "Green — mostly proof"
      : pct >= 40
        ? "Amber — half guesswork"
        : "Red — flying blind";
  const blurb =
    pct >= 67
      ? "You have real signal behind most people decisions. Prove tightens the few areas still running on gut feel."
      : pct >= 40
        ? "You're guessing on roughly half your people calls. That's where the six-figure mistakes hide — and where Prove pays for itself fastest."
        : "Most of your people decisions are gut feel right now. The good news: that's the highest-return place to add proof, fast.";

  // three weakest categories
  const scored = QUESTIONS.map((q, idx) => ({
    cat: q.cat,
    v: answers[idx] || 0,
  }));
  scored.sort((a, b) => a.v - b.v);
  const seen: Record<string, boolean> = {};
  const gaps: Gap[] = [];
  for (const s of scored) {
    if (seen[s.cat]) continue;
    seen[s.cat] = true;
    gaps.push({
      label: s.cat + (s.v <= 1 ? " — high exposure" : " — some risk"),
      dot: s.v <= 1 ? "🔴" : "🟡",
    });
    if (gaps.length === 3) break;
  }

  const scorePct = pct + "%";

  return (
    <>
      <div className="mb-5 rounded-[22px] bg-[#14130E] px-6 py-10 text-center text-paper sm:px-10 sm:py-11">
        <span className="text-[13px] font-bold uppercase tracking-[.14em] text-[#8FD6AC]">
          Your Certainty Score
        </span>
        <div
          className="mx-0 mb-1.5 mt-3.5 font-display text-[88px] font-bold leading-none tracking-[-.03em]"
          style={{ color }}
        >
          {scorePct}
        </div>
        <div
          className="mb-3.5 font-display text-2xl font-bold"
          style={{ color }}
        >
          {tier}
        </div>
        <p className="mx-auto mb-2.5 max-w-[520px] text-[17px] leading-[1.6] text-[#B8B4A6]">
          {blurb}
        </p>
        <div className="mx-auto mt-6 h-2.5 max-w-[420px] overflow-hidden rounded-md bg-[#262319]">
          <div
            className="h-full"
            style={{ background: color, width: scorePct }}
          />
        </div>
      </div>

      <div className="rounded-[20px] border border-[#E7E0D2] bg-white p-6 sm:p-[34px]">
        <h3 className="m-0 mb-2 font-display text-[22px] font-bold tracking-[-.01em] text-content">
          Where you&apos;re most exposed
        </h3>
        <p className="m-0 mb-[18px] text-[15px] text-[#615B4F]">
          Your three lowest-certainty areas &mdash; the decisions where you&apos;re
          guessing most.
        </p>
        <div className="mb-[26px] flex flex-col gap-2.5">
          {gaps.map((g, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-xl border border-[#EEE7DA] bg-[#FBF8F2] px-4 py-3.5"
            >
              <span className="text-base">{g.dot}</span>
              <span className="text-[15px] font-semibold text-[#2A261D]">
                {g.label}
              </span>
            </div>
          ))}
        </div>
        <div className="rounded-[14px] bg-[#F0EADD] p-6 text-center">
          <div className="m-0 mb-1.5 font-display text-[19px] font-bold text-content">
            Get your full breakdown + the fix
          </div>
          <p className="m-0 mb-[18px] text-[14.5px] text-[#615B4F]">
            See all ten scores and a prioritized action plan &mdash; and how a
            Prove Sprint turns your reds green.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[11px] bg-green px-[26px] py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-green-700"
            >
              Book a call to review it
            </a>
            <Link
              href="/free-tools/get-to-green"
              className="rounded-[11px] bg-[#14130E] px-[26px] py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-ink-2"
            >
              See the full 146-point map &rarr;
            </Link>
          </div>
        </div>
        <div className="mt-5 text-center">
          <button
            onClick={restart}
            className="cursor-pointer border-none bg-transparent font-sans text-sm font-semibold text-[#8A8474]"
          >
            &#8635; Retake the diagnostic
          </button>
        </div>
      </div>
    </>
  );
}
