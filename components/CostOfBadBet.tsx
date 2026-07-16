"use client";

import { useState } from "react";
import { site } from "@/lib/site";

function fmt(n: number): string {
  if (n >= 1000) return "$" + Math.round(n / 1000) + "k";
  return "$" + Math.round(n);
}

const BACKFILL_OPTS: { key: "yes" | "no"; label: string }[] = [
  { key: "yes", label: "Yes" },
  { key: "no", label: "No" },
];

export default function CostOfBadBet() {
  const [salary, setSalary] = useState(120000);
  const [months, setMonths] = useState(9);
  const [team, setTeam] = useState(5);
  const [backfill, setBackfill] = useState<"yes" | "no">("yes");

  // lost productivity: assume ~50% effective in the seat for the months it drags
  const lost = salary * (months / 12) * 0.5;
  // team drag: each affected person loses ~15% productivity, salary-equivalent proxy at 70% of role salary
  const drag = team * (salary * 0.7) * (months / 12) * 0.15;
  // backfill: replacing = ~40% of salary if they leave/replaced, else minimal
  const backfillCost = backfill === "yes" ? salary * 0.4 : 0;
  const total = lost + drag + backfillCost;

  return (
    <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
      {/* inputs */}
      <div className="rounded-[20px] border border-edge-light bg-white p-[30px]">
        <div className="mb-[26px]">
          <div className="mb-2 flex items-baseline justify-between">
            <label className="text-[15px] font-bold">Role&rsquo;s annual salary</label>
            <span className="font-display font-bold text-green">{fmt(salary)}</span>
          </div>
          <input
            type="range"
            min={50000}
            max={300000}
            step={10000}
            value={salary}
            onChange={(e) => setSalary(+e.target.value)}
            className="w-full accent-green"
          />
        </div>

        <div className="mb-[26px]">
          <div className="mb-2 flex items-baseline justify-between">
            <label className="text-[15px] font-bold">Months before you act on it</label>
            <span className="font-display font-bold text-green">{months} mo</span>
          </div>
          <input
            type="range"
            min={1}
            max={18}
            step={1}
            value={months}
            onChange={(e) => setMonths(+e.target.value)}
            className="w-full accent-green"
          />
          <p className="mt-2 text-[12.5px] text-[#8A8474]">
            Most wrong bets aren&rsquo;t addressed for 6&ndash;12 months.
          </p>
        </div>

        <div className="mb-[26px]">
          <div className="mb-2 flex items-baseline justify-between">
            <label className="text-[15px] font-bold">People affected by this seat</label>
            <span className="font-display font-bold text-green">{team}</span>
          </div>
          <input
            type="range"
            min={0}
            max={20}
            step={1}
            value={team}
            onChange={(e) => setTeam(+e.target.value)}
            className="w-full accent-green"
          />
          <p className="mt-2 text-[12.5px] text-[#8A8474]">
            Direct reports or close collaborators who lose productivity.
          </p>
        </div>

        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <label className="text-[15px] font-bold">Do they leave or get replaced?</label>
          </div>
          <div className="flex gap-2">
            {BACKFILL_OPTS.map((o) => {
              const active = backfill === o.key;
              return (
                <button
                  key={o.key}
                  onClick={() => setBackfill(o.key)}
                  className={`flex-1 cursor-pointer rounded-[10px] p-[11px] text-[14px] font-semibold transition-colors ${
                    active ? "bg-green text-white" : "bg-paper-2 text-[#575249]"
                  }`}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* result */}
      <div className="sticky top-6 rounded-[20px] bg-ink p-[30px] text-paper on-dark">
        <div className="mb-2.5 text-[13px] font-bold uppercase tracking-[.1em] text-green-soft">
          Estimated cost of this bad bet
        </div>
        <div className="mb-1.5 font-display text-[52px] font-bold leading-none text-white">
          {fmt(total)}
        </div>
        <div className="mb-6 text-[13.5px] text-content-faint">
          A conservative, salary-anchored estimate.
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between border-b border-[#221F17] pb-2.5 text-[14.5px]">
            <span className="text-[#B8B4A6]">Lost productivity in seat</span>
            <span className="font-display font-semibold">{fmt(lost)}</span>
          </div>
          <div className="flex justify-between border-b border-[#221F17] pb-2.5 text-[14.5px]">
            <span className="text-[#B8B4A6]">Team drag</span>
            <span className="font-display font-semibold">{fmt(drag)}</span>
          </div>
          <div className="flex justify-between border-b border-[#221F17] pb-2.5 text-[14.5px]">
            <span className="text-[#B8B4A6]">Backfill &amp; rehire</span>
            <span className="font-display font-semibold">{fmt(backfillCost)}</span>
          </div>
        </div>

        <div className="mt-[22px] rounded-[12px] bg-[#173A2A] p-[18px]">
          <div className="mb-1 text-[13px] font-bold text-green-soft">
            A Prove cycle costs a fraction of this
          </div>
          <p className="m-0 text-[14px] leading-[1.5] text-[#D7ECDF]">
            Six weeks of behavioral proof before you commit — so you avoid the bill above, or catch
            it early.
          </p>
        </div>

        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block rounded-[11px] bg-green p-3.5 text-center text-[15px] font-bold text-white transition-colors hover:bg-green-700"
        >
          See what Prove would cost you
        </a>
      </div>
    </div>
  );
}
