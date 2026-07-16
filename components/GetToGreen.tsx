"use client";

import { useMemo, useState } from "react";
import {
  GTG_DATA,
  MACRO_ORDER,
  type GtgCategory,
  type GtgItem,
  type GtgMacro,
  type GtgStatus,
} from "@/lib/gtg-data";

/* --- Scoring engine (ported verbatim from the prototype) --------------- */

const WEIGHTS: Record<GtgCategory, number> = {
  Critical: 4,
  Necessary: 3,
  Important: 2,
  Optional: 1,
};

const STATUS_VAL: Record<GtgStatus, number> = { G: 1, Y: 0.5, R: 0, U: 0 };

function weightFor(cat: GtgCategory) {
  return WEIGHTS[cat] ?? 2;
}
function statusVal(s: GtgStatus) {
  return STATUS_VAL[s] ?? 0;
}
function score(items: GtgItem[]) {
  if (!items || !items.length) return 0;
  let num = 0;
  let den = 0;
  for (const i of items) {
    const w = weightFor(i.category);
    num += w * statusVal(i.status);
    den += w;
  }
  return den ? Math.round((num / den) * 100) : 0;
}
function dotFor(items: GtgItem[]) {
  const r = score(items);
  return r >= 80 ? "#2E9E5B" : r >= 50 ? "#E0A73E" : "#E5674C";
}

const CYCLE_NEXT: Record<GtgStatus, GtgStatus> = {
  U: "R",
  R: "Y",
  Y: "G",
  G: "R",
};

const PILL: Record<GtgStatus, { bg: string; fg: string; label: string }> = {
  R: { bg: "#3A211B", fg: "#F0A594", label: "Red" },
  Y: { bg: "#3A331B", fg: "#E8C27A", label: "Yellow" },
  G: { bg: "#153A2A", fg: "#8FD6AC", label: "Green" },
  U: { bg: "#262319", fg: "#8C877A", label: "Blank" },
};

const CAT_STYLE: Record<GtgCategory, { bg: string; fg: string }> = {
  Critical: { bg: "#3A211B", fg: "#F0A594" },
  Necessary: { bg: "#3A331B", fg: "#E8C27A" },
  Important: { bg: "#1E2A38", fg: "#9CC2E8" },
  Optional: { bg: "#262319", fg: "#8C877A" },
};

/* --- Component --------------------------------------------------------- */

type Data = Record<GtgMacro, GtgItem[]>;

function cloneData(): Data {
  return JSON.parse(JSON.stringify(GTG_DATA)) as Data;
}

export default function GetToGreen() {
  const [activeMacro, setActiveMacro] = useState<GtgMacro>("Protect");
  const [data, setData] = useState<Data>(cloneData);

  const all = useMemo(() => MACRO_ORDER.flatMap((m) => data[m]), [data]);
  const total = all.length;
  const greenCount = all.filter((i) => i.status === "G").length;
  const yellowCount = all.filter((i) => i.status === "Y").length;
  const redCount = all.filter((i) => i.status === "R").length;
  const blankCount = all.filter((i) => i.status === "U").length;
  const readinessPct = score(all);

  const activeList = data[activeMacro];
  const activeReadiness = score(activeList);

  const activeGroups = useMemo(() => {
    const groupsMap = new Map<string, { it: GtgItem; idx: number }[]>();
    activeList.forEach((it, idx) => {
      if (!groupsMap.has(it.micro)) groupsMap.set(it.micro, []);
      groupsMap.get(it.micro)!.push({ it, idx });
    });
    return [...groupsMap.entries()].map(([micro, entries]) => ({
      micro,
      readiness: score(entries.map((e) => e.it)),
      items: entries,
    }));
  }, [activeList]);

  function cycle(idx: number) {
    setData((prev) => {
      const copy = JSON.parse(JSON.stringify(prev)) as Data;
      copy[activeMacro][idx].status = CYCLE_NEXT[copy[activeMacro][idx].status];
      return copy;
    });
  }

  void total; // dataset is fixed at 146

  return (
    <div>
      {/* KPIs */}
      <div className="mb-[22px] grid grid-cols-1 gap-3.5 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="rounded-2xl border border-[#2A2718] bg-[#1B1A12] px-6 py-[22px]">
          <div className="mb-2.5 text-[12px] font-bold uppercase tracking-[.1em] text-green-soft">
            Weighted readiness
          </div>
          <div className="flex items-end gap-2.5">
            <div className="font-display text-[46px] font-bold leading-none">
              {readinessPct}
              <span className="text-[22px]">%</span>
            </div>
            <div className="pb-[7px] text-[12px] text-[#6E6A5C]">
              category-weighted
            </div>
          </div>
          <div className="mt-3.5 h-[9px] overflow-hidden rounded-md bg-[#0E0D09]">
            <div
              className="h-full"
              style={{
                width: `${readinessPct}%`,
                background: "linear-gradient(90deg,#1F8B57,#5FBF83)",
              }}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-[#2A2718] bg-[#1B1A12] px-[22px] py-5">
          <div className="mb-2 text-[12px] font-bold uppercase tracking-[.08em] text-[#7C7767]">
            Green
          </div>
          <div className="font-display text-[34px] font-bold text-[#2E9E5B]">
            {greenCount}
          </div>
          <div className="text-[12.5px] text-[#7C7767]">on track</div>
        </div>

        <div className="rounded-2xl border border-[#2A2718] bg-[#1B1A12] px-[22px] py-5">
          <div className="mb-2 text-[12px] font-bold uppercase tracking-[.08em] text-[#7C7767]">
            Yellow
          </div>
          <div className="font-display text-[34px] font-bold text-[#E0A73E]">
            {yellowCount}
          </div>
          <div className="text-[12.5px] text-[#7C7767]">needs work</div>
        </div>

        <div className="rounded-2xl border border-[#2A2718] bg-[#1B1A12] px-[22px] py-5">
          <div className="mb-2 text-[12px] font-bold uppercase tracking-[.08em] text-[#7C7767]">
            Red
          </div>
          <div className="font-display text-[34px] font-bold text-[#E5674C]">
            {redCount}
          </div>
          <div className="text-[12.5px] text-[#7C7767]">
            at risk &middot; {blankCount} unscored
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-[18px] md:grid-cols-[1fr_1.25fr]">
        {/* macro list */}
        <div className="rounded-2xl border border-[#2A2718] bg-[#1B1A12] p-5">
          <div className="mb-0.5 text-[15px] font-bold">Macro systems</div>
          <div className="mb-3.5 text-[12.5px] text-[#7C7767]">
            Select a system to review its checklist
          </div>
          <div className="flex flex-col gap-2">
            {MACRO_ORDER.map((name) => {
              const items = data[name];
              const isActive = name === activeMacro;
              const micros = new Set(items.map((i) => i.micro)).size;
              return (
                <div
                  key={name}
                  onClick={() => setActiveMacro(name)}
                  className="flex cursor-pointer items-center justify-between rounded-[11px] px-[13px] py-3"
                  style={{
                    border: `1px solid ${isActive ? "#1F8B57" : "#262319"}`,
                    background: isActive ? "#173A2A" : "#14130E",
                  }}
                >
                  <div className="flex items-center gap-[11px]">
                    <span
                      className="h-[11px] w-[11px] flex-[0_0_11px] rounded-full"
                      style={{ background: dotFor(items) }}
                    />
                    <div className="leading-[1.35]">
                      <div className="text-[14px] font-semibold text-[#E8E4D6]">
                        {name}
                      </div>
                      <div className="text-[11.5px] text-[#6E6A5C]">
                        {items.length} items &middot; {micros} micro-systems
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[9px]">
                    <span className="text-[12px] font-semibold text-[#7C7767]">
                      {score(items)}%
                    </span>
                    <span className="text-[15px] text-[#4A463B]">&rsaquo;</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* detail */}
        <div className="max-h-[720px] overflow-y-auto rounded-2xl border border-[#2A2718] bg-[#1B1A12] p-[22px]">
          <div className="sticky top-0 mb-0.5 flex items-center justify-between bg-[#1B1A12] pb-1.5">
            <div className="font-display text-[22px] font-bold">
              {activeMacro}
            </div>
            <div className="text-[12px] font-semibold text-[#6E6A5C]">
              Tap a status: R &rarr; Y &rarr; G
            </div>
          </div>
          <div className="mb-4 text-[13px] text-[#7C7767]">
            {activeList.length} items &middot; {activeReadiness}% ready
          </div>
          <div className="flex flex-col gap-5">
            {activeGroups.map((grp) => (
              <div key={grp.micro}>
                <div className="mb-2.5 flex items-center justify-between">
                  <div className="text-[13px] font-extrabold text-green-soft">
                    {grp.micro}
                  </div>
                  <div className="text-[11.5px] font-semibold text-[#6E6A5C]">
                    {grp.readiness}%
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {grp.items.map(({ it, idx }) => {
                    const pill = PILL[it.status];
                    const cat = CAT_STYLE[it.category];
                    return (
                      <div
                        key={idx}
                        className="grid grid-cols-[1fr_auto] items-center gap-3.5 rounded-[11px] border border-[#262319] bg-[#14130E] px-3.5 py-3"
                      >
                        <div>
                          <div className="text-[14px] font-semibold leading-[1.4] text-[#E8E4D6]">
                            {it.item}
                          </div>
                          <div className="mt-[5px] flex items-center gap-2">
                            <span className="text-[12px] text-[#6E6A5C]">
                              {it.owner}
                            </span>
                            <span
                              className="rounded-full px-2 py-0.5 text-[11px] font-bold"
                              style={{ background: cat.bg, color: cat.fg }}
                            >
                              {it.category}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => cycle(idx)}
                          className="min-w-[78px] cursor-pointer rounded-full border-none px-4 py-[9px] text-[13px] font-bold"
                          style={{ background: pill.bg, color: pill.fg }}
                        >
                          {pill.label}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
