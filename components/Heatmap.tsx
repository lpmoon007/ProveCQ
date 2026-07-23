"use client";

import { useMemo, useState } from "react";
import {
  SAMPLE_ROSTER,
  SIGNAL_EMOJI,
  cqColor,
  score,
  signalFor,
  type ScoredPerson,
  type Tier,
} from "@/lib/cq";

type SortKey = "cq" | "initiative" | "applied_grit" | "learnability";

const TIERS: (Tier | "All")[] = ["All", "Investment-ready", "Coach", "Develop first"];
const SORTS: { key: SortKey; label: string }[] = [
  { key: "cq", label: "CQ" },
  { key: "initiative", label: "Init" },
  { key: "applied_grit", label: "A. Grit" },
  { key: "learnability", label: "Learn" },
];

const ROW_GRID = "grid grid-cols-[1.5fr_.8fr_.8fr_.8fr_.7fr]";

export default function Heatmap() {
  const [tier, setTier] = useState<Tier | "All">("All");
  const [sort, setSort] = useState<SortKey>("cq");
  const [selId, setSelId] = useState<number>(2);

  const scored = useMemo<ScoredPerson[]>(
    () => SAMPLE_ROSTER.map((p) => score(p)),
    [],
  );

  const rows = useMemo(() => {
    const filtered = scored.filter((p) => tier === "All" || p.tier === tier);
    return [...filtered].sort((a, b) => b[sort] - a[sort]);
  }, [scored, tier, sort]);

  const sel = scored.find((p) => p.id === selId) ?? scored[0];

  return (
    <>
      {/* controls */}
      <div className="mb-4 flex flex-wrap items-center gap-5">
        <div className="flex flex-wrap gap-2">
          {TIERS.map((t) => (
            <button
              key={t}
              onClick={() => setTier(t)}
              className={`cursor-pointer rounded-pill px-[15px] py-[9px] text-[13px] font-semibold transition-colors ${
                tier === t ? "bg-green text-white" : "bg-panel text-[#B8B4A6]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-[13px] text-content-faint">Sort:</span>
          {SORTS.map((s) => (
            <button
              key={s.key}
              onClick={() => setSort(s.key)}
              className={`cursor-pointer rounded-pill px-[13px] py-[7px] text-[12.5px] font-semibold transition-colors ${
                sort === s.key ? "bg-edge-dark text-paper" : "bg-transparent text-content-faint"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-[1.5fr_1fr]">
        {/* table */}
        <div className="overflow-hidden rounded-2xl border border-edge-dark-2 bg-ink-2">
          <div
            className={`${ROW_GRID} border-b border-[#1E1B13] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[.05em] text-[#6E6A5C]`}
          >
            <span>Person</span>
            <span className="text-center">Init.</span>
            <span className="text-center">A. Grit</span>
            <span className="text-center">Learn</span>
            <span className="text-center">CQ</span>
          </div>
          {rows.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelId(p.id)}
              className={`${ROW_GRID} w-full items-center border-b border-[#1E1B13] px-4 py-[13px] text-left transition-colors ${
                p.id === selId ? "bg-panel-2" : "bg-transparent hover:bg-[#141309]"
              }`}
            >
              <span>
                <span className="block text-[14.5px] font-semibold text-[#E8E4D6]">
                  {p.name}
                </span>
                <span className="block text-[12px] text-[#6E6A5C]">{p.title}</span>
              </span>
              <span className="text-center text-[15px]">{SIGNAL_EMOJI[signalFor(p.initiative)]}</span>
              <span className="text-center text-[15px]">{SIGNAL_EMOJI[signalFor(p.applied_grit)]}</span>
              <span className="text-center text-[15px]">{SIGNAL_EMOJI[signalFor(p.learnability)]}</span>
              <span
                className="text-center font-display text-[15px] font-bold"
                style={{ color: cqColor(p.cq) }}
              >
                {Math.round(p.cq)}
              </span>
            </button>
          ))}
        </div>

        {/* detail */}
        <div className="sticky top-6 rounded-2xl border border-edge-dark bg-panel p-[26px]">
          <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[.06em] text-green-soft">
            {sel.tier}
          </div>
          <div className="font-display text-[26px] font-bold">{sel.name}</div>
          <div className="mb-5 text-[13.5px] text-content-faint">{sel.title}</div>

          <div className="mb-5 flex gap-2.5">
            {[
              { label: "Initiative", val: sel.initiative, accent: false },
              { label: "A. Grit", val: sel.applied_grit, accent: false },
              { label: "Learn", val: sel.learnability, accent: false },
              { label: "CQ", val: Math.round(sel.cq), accent: true },
            ].map((cell) => (
              <div
                key={cell.label}
                className={`flex-1 rounded-[10px] p-3 text-center ${
                  cell.accent ? "bg-[#173A2A]" : "bg-ink"
                }`}
              >
                <div
                  className={`mb-1 text-[11px] ${cell.accent ? "text-green-soft" : "text-content-faint"}`}
                >
                  {cell.label}
                </div>
                <div
                  className={`font-display text-[20px] font-bold ${cell.accent ? "text-green-soft" : ""}`}
                >
                  {cell.val}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <div className="mb-1.5 text-[12px] font-bold uppercase tracking-[.05em] text-content-faint">
              Founder action
            </div>
            <div className="text-[15px] leading-[1.5] text-[#E8E4D6]">
              {sel.founderAction}
            </div>
          </div>
          <div>
            <div className="mb-1.5 text-[12px] font-bold uppercase tracking-[.05em] text-content-faint">
              Risk to watch
            </div>
            <div className="text-[15px] leading-[1.5] text-[#B8B4A6]">
              {sel.riskNote}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
