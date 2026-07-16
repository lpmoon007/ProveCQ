"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

type Question = { cat: string; text: string };

const QUESTIONS: Question[] = [
  {
    cat: "High-potential development",
    text: "My best employees are actively growing, taking on more responsibility, and being challenged.",
  },
  {
    cat: "High-potential development",
    text: "I have a clear system to identify, coach, and retain my high-potential people.",
  },
  {
    cat: "Retention & growth",
    text: "My best employees feel seen, valued, and challenged in meaningful ways.",
  },
  {
    cat: "Retention & growth",
    text: "We have clear development opportunities that keep top talent engaged.",
  },
  {
    cat: "Knowing who to bet on",
    text: "I can tell — with evidence, not gut feel — who's truly ready for more scope.",
  },
  {
    cat: "Knowing who to bet on",
    text: "When I promote or hand off, the right person consistently steps up.",
  },
];

type Rating = {
  band: string;
  color: string;
  verdict: string;
  nextMove: string;
};

function rate(answered: number, total: number): Rating {
  let band = "—";
  let color = "#7C7767";
  let verdict = "Answer the six questions to see your rating.";
  let nextMove = "Rate each statement above from 1 to 5.";

  if (answered === 6) {
    if (total >= 25) {
      band = "Talent Builder";
      color = "#2E9E5B";
      verdict =
        "You're actively developing and keeping your best people, and you can back your bets with evidence. Keep sharpening the system.";
      nextMove =
        "Protect what's working — a light Better Every Day cadence keeps your proven players from plateauing.";
    } else if (total >= 19) {
      band = "On Track";
      color = "#8FD6AC";
      verdict =
        "Good instincts, real gaps. Some high-potentials are growing; others are probably being overlooked or under-challenged.";
      nextMove =
        "Run a Prove cycle on your next promotion or key project so your bets are proof-based, not hopeful.";
    } else if (total >= 12) {
      band = "At Risk";
      color = "#E0A73E";
      verdict =
        "Your best people aren't being seen or stretched systematically — the conditions where hidden gems quietly leave.";
      nextMove =
        "Start with the Hidden Gem Identifier, then prove who's ready before your next promotion.";
    } else {
      band = "Losing Them";
      color = "#D0492E";
      verdict =
        "Talent development is running on luck. Without a system, you'll keep promoting the wrong people and losing the right ones.";
      nextMove =
        "Book a call — a single Prove cycle will show you exactly who to invest in first.";
    }
  }

  return { band, color, verdict, nextMove };
}

export default function TalentScorecard() {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const values = Object.values(answers);
  const answered = values.length;
  const total = values.reduce((s, v) => s + v, 0);
  const { band, color, verdict, nextMove } = rate(answered, total);

  return (
    <div>
      {QUESTIONS.map((q, i) => (
        <div
          key={i}
          className="mb-3.5 rounded-2xl border border-edge-light bg-white p-6 sm:px-[26px]"
        >
          <div className="mb-2 text-[12px] font-bold uppercase tracking-[.08em] text-green">
            {q.cat}
          </div>
          <p className="m-0 mb-4 text-[16.5px] font-semibold leading-[1.45]">
            {q.text}
          </p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((n) => {
              const selected = answers[i] === n;
              return (
                <button
                  key={n}
                  onClick={() => setAnswers((a) => ({ ...a, [i]: n }))}
                  className={`flex-1 cursor-pointer rounded-[10px] border-none py-[13px] font-display text-[16px] font-bold transition-colors ${
                    selected
                      ? "bg-green text-white"
                      : "bg-paper-2 text-[#575249]"
                  }`}
                >
                  {n}
                </button>
              );
            })}
          </div>
          <div className="mt-2 flex justify-between text-[11.5px] text-[#8A8474]">
            <span>Not at all</span>
            <span>Absolutely</span>
          </div>
        </div>
      ))}

      {/* result */}
      <div className="mt-2 rounded-[20px] bg-ink p-8 text-paper on-dark">
        <div className="mb-2 flex items-baseline justify-between">
          <div className="text-[13px] font-bold uppercase tracking-[.1em] text-green-soft">
            Your talent-development rating
          </div>
          <div className="text-[13px] text-content-faint">
            {answered}/6 answered
          </div>
        </div>
        <div className="mb-1.5 flex items-baseline gap-3">
          <div
            className="font-display text-[52px] font-bold leading-none"
            style={{ color }}
          >
            {total}
            <span className="text-[22px] text-content-faint">/30</span>
          </div>
          <div className="font-display text-[22px] font-bold" style={{ color }}>
            {band}
          </div>
        </div>
        <p className="my-1.5 mb-5 text-[15.5px] leading-[1.6] text-[#B8B4A6]">
          {verdict}
        </p>
        <div className="mb-[18px] rounded-xl border border-[#2A2718] bg-[#1B1A12] p-5">
          <div className="mb-1.5 text-[12px] font-bold uppercase tracking-[.06em] text-green-soft">
            Your next move
          </div>
          <p className="m-0 text-[15px] leading-[1.6] text-[#D7D3C5]">
            {nextMove}
          </p>
        </div>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-[11px] bg-green py-[15px] text-center text-[16px] font-bold text-white transition-colors hover:bg-green-700"
        >
          Book a call to close the gap
        </a>
      </div>
      <p className="mx-0 mb-0 mt-[18px] text-center text-[13px] text-[#8A8474]">
        A reflective self-assessment, not a validated instrument. For your
        team&rsquo;s actual talent picture, a{" "}
        <Link href="/how-it-works" className="text-green hover:text-green-700">
          Prove cycle
        </Link>{" "}
        measures behavior directly.
      </p>
    </div>
  );
}
