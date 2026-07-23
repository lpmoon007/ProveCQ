/**
 * Commitment Quotient scoring engine.
 *
 * PRODUCTION model per the CQ Technical Specification is a 0–100 trait +
 * composite scale governed by a *versioned scoring profile*. The prototype
 * Heatmap/ROI use a simplified 0–10 display scale — cosmetic only. This module
 * reproduces the prototype's 0–10 demo while keeping the weights and thresholds
 * in one named profile so nothing is hard-coded at the call site.
 *
 * IMPORTANT (handoff §4): weights/thresholds live in a versioned profile;
 * published profiles are immutable. "Applied Grit" is the data-model trait name;
 * "Grit" is display-only. Archetypes / percentile / norm-referenced claims stay
 * DISABLED until the source item bank + archetype rules are recovered.
 */

export type Trait = "initiative" | "applied_grit" | "learnability";

export interface ScoringProfile {
  id: string;
  version: string;
  status: "provisional" | "published";
  /** Weights sum to 1.0. */
  weights: Record<Trait, number>;
  /** Composite tier bands on the demo 0–10 scale. */
  tierBands: { investmentReady: number; coach: number };
}

/**
 * Provisional demo profile — NOT permanent doctrine. Client to confirm final
 * weights + tier bands (handoff §7). Weights match the prototype: 40/35/25.
 */
export const DEMO_PROFILE: ScoringProfile = {
  id: "cq-core-2026-demo",
  version: "0.1.0",
  status: "provisional",
  weights: { initiative: 0.4, applied_grit: 0.35, learnability: 0.25 },
  tierBands: { investmentReady: 7, coach: 5 },
};

export type Tier = "Investment-ready" | "Coach" | "Develop first";
export type Signal = "green" | "yellow" | "red";

export interface Person {
  id: number;
  name: string;
  title: string;
  /** Demo 0–10 trait scores. */
  initiative: number;
  applied_grit: number;
  learnability: number;
}

export interface ScoredPerson extends Person {
  cq: number;
  tier: Tier;
  founderAction: string;
  riskNote: string;
}

/** Weighted composite on the demo scale, full precision (round on display). */
export function composite(p: Person, profile = DEMO_PROFILE): number {
  const w = profile.weights;
  return (
    p.initiative * w.initiative +
    p.applied_grit * w.applied_grit +
    p.learnability * w.learnability
  );
}

/** Per-trait signal dot on the demo scale. */
export function signalFor(score: number): Signal {
  if (score >= 8) return "green";
  if (score >= 5) return "yellow";
  return "red";
}

export const SIGNAL_HEX: Record<Signal, string> = {
  green: "#2E9E5B",
  yellow: "#E0A73E",
  red: "#D0492E",
};

export const SIGNAL_EMOJI: Record<Signal, string> = {
  green: "🟢",
  yellow: "🟡",
  red: "🔴",
};

export function tierFor(cq: number, profile = DEMO_PROFILE): Tier {
  if (cq >= profile.tierBands.investmentReady) return "Investment-ready";
  if (cq >= profile.tierBands.coach) return "Coach";
  return "Develop first";
}

/** Composite color follows the tier bands. */
export function cqColor(cq: number, profile = DEMO_PROFILE): string {
  if (cq >= profile.tierBands.investmentReady) return SIGNAL_HEX.green;
  if (cq >= profile.tierBands.coach) return SIGNAL_HEX.yellow;
  return SIGNAL_HEX.red;
}

function founderAction(cq: number, profile = DEMO_PROFILE): string {
  if (cq >= profile.tierBands.investmentReady)
    return "Assign a high-autonomy lead role or stretch project. Double down.";
  if (cq >= profile.tierBands.coach)
    return "Give a scoped challenge and coach the weakest trait before you invest further.";
  return "Hold investment. Clarify expectations and watch for a signal before any bet.";
}

function riskNote(p: Person): string {
  if (p.initiative < p.applied_grit && p.initiative < p.learnability)
    return "Low initiative — may wait for direction instead of acting.";
  if (p.learnability < 5)
    return "Low learnability — can stall when demands change.";
  if (p.applied_grit < 5)
    return "Low applied grit — follow-through fades when it gets hard.";
  return "Watch for burnout if scaled without a support system.";
}

export function score(p: Person, profile = DEMO_PROFILE): ScoredPerson {
  const cq = composite(p, profile);
  return {
    ...p,
    cq,
    tier: tierFor(cq, profile),
    founderAction: founderAction(cq, profile),
    riskNote: riskNote(p),
  };
}

/**
 * Sample roster for the interactive Heatmap demo (handoff: "Sample data — your
 * real Heatmap comes out of a Prove cycle"). Mirrors the prototype seed.
 */
export const SAMPLE_ROSTER: Person[] = [
  { id: 0, name: "Adrian B.", title: "Customer Ops", initiative: 8, applied_grit: 7, learnability: 8 },
  { id: 1, name: "Alex G.", title: "Onboarding Coach", initiative: 6, applied_grit: 6, learnability: 8 },
  { id: 2, name: "Alexi M.", title: "Ops Lead", initiative: 9, applied_grit: 8, learnability: 9 },
  { id: 3, name: "Avery Z.", title: "Recruiter", initiative: 5, applied_grit: 5, learnability: 4 },
  { id: 4, name: "Bailey R.", title: "UX Lead", initiative: 9, applied_grit: 7, learnability: 8 },
  { id: 5, name: "Barry M.", title: "Field Tech", initiative: 3, applied_grit: 2, learnability: 3 },
  { id: 6, name: "Blake C.", title: "Sales Rep", initiative: 4, applied_grit: 3, learnability: 6 },
  { id: 7, name: "Cameron J.", title: "Field Ops Mgr", initiative: 9, applied_grit: 8, learnability: 6 },
  { id: 8, name: "Curtis D.", title: "AI Strategist", initiative: 10, applied_grit: 9, learnability: 7 },
  { id: 9, name: "Dahlia Y.", title: "SDR", initiative: 3, applied_grit: 3, learnability: 6 },
  { id: 10, name: "Devon H.", title: "Tech Writer", initiative: 9, applied_grit: 7, learnability: 7 },
  { id: 11, name: "Donna E.", title: "DevOps Tech", initiative: 10, applied_grit: 7, learnability: 7 },
];
