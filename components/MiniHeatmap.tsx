import Link from "next/link";
import { SIGNAL_EMOJI, type Signal } from "@/lib/cq";

/** A curated static preview of the CQ Heatmap for the Home "proof" section. */
const ROWS: {
  name: string;
  init: Signal;
  grit: Signal;
  learn: Signal;
  cq: string;
  cqColor: string;
}[] = [
  { name: "Alexi M.", init: "green", grit: "green", learn: "green", cq: "9", cqColor: "#2E9E5B" },
  { name: "Curtis D.", init: "green", grit: "green", learn: "yellow", cq: "9", cqColor: "#2E9E5B" },
  { name: "Adrian B.", init: "green", grit: "yellow", learn: "green", cq: "7", cqColor: "#E0A73E" },
  { name: "Avery Z.", init: "yellow", grit: "yellow", learn: "red", cq: "5", cqColor: "#E0A73E" },
  { name: "Blake C.", init: "red", grit: "red", learn: "yellow", cq: "4", cqColor: "#D0492E" },
  { name: "Barry M.", init: "red", grit: "red", learn: "red", cq: "3", cqColor: "#D0492E" },
];

const GRID = "grid grid-cols-[1.4fr_repeat(3,1fr)_.7fr]";

export default function MiniHeatmap() {
  return (
    <div className="rounded-[18px] border border-edge-dark-2 bg-ink-2 p-[22px]">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-display text-[15px] font-bold text-paper">
          Your team, in black and white
        </span>
        <span className="text-[11.5px] text-[#6E6A5C]">CQ Heatmap</span>
      </div>

      <div
        className={`${GRID} px-2 pb-2.5 text-[11px] font-bold uppercase tracking-[.04em] text-[#6E6A5C]`}
      >
        <span>Person</span>
        <span className="text-center">Init.</span>
        <span className="text-center">A. Grit</span>
        <span className="text-center">Learn</span>
        <span className="text-center">CQ</span>
      </div>

      {ROWS.map((r) => (
        <div
          key={r.name}
          className={`${GRID} items-center border-t border-[#1E1B13] px-2 py-[11px] text-[13.5px] text-[#D8D4C6]`}
        >
          <span>{r.name}</span>
          <span className="text-center">{SIGNAL_EMOJI[r.init]}</span>
          <span className="text-center">{SIGNAL_EMOJI[r.grit]}</span>
          <span className="text-center">{SIGNAL_EMOJI[r.learn]}</span>
          <span
            className="text-center font-display font-bold"
            style={{ color: r.cqColor }}
          >
            {r.cq}
          </span>
        </div>
      ))}

      <div className="mt-4 border-t border-[#1E1B13] pt-3.5 text-[12.5px] text-[#6E6A5C]">
        Investment-ready. Coach. Or develop first. You see it, not sense it.{" "}
        <Link href="/heatmap" className="text-green-soft hover:text-green-soft">
          See the live demo &rarr;
        </Link>
      </div>
    </div>
  );
}
