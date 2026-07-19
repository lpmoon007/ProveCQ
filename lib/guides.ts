/** Central list of guide articles — used by the Related Guides cross-links. */
export interface GuideRef {
  href: string;
  title: string;
}

export const GUIDE_ARTICLES: GuideRef[] = [
  { href: "/guides/who-to-promote", title: "How to know who to promote" },
  { href: "/guides/failed-promotion", title: "Why good employees fail after a promotion" },
  { href: "/guides/promote-vs-hire", title: "Promote from within, or hire outside?" },
  { href: "/guides/high-potential-employees", title: "How to identify high-potential employees" },
  { href: "/guides/leadership-bench", title: "Build a leadership bench before you need it" },
  { href: "/guides/succession-planning", title: "Succession planning for small business" },
  { href: "/guides/hire-for-follow-through", title: "Hire people who actually follow through" },
  { href: "/guides/cost-of-a-bad-hire", title: "The real cost of a bad hire" },
  { href: "/guides/first-90-days", title: "Use the first 90 days to prove a new hire" },
  { href: "/guides/measure-commitment", title: "How to measure employee commitment" },
  { href: "/guides/quiet-quitting", title: "Signs an employee is quietly checking out" },
  { href: "/guides/burned-out-top-performers", title: "Why your best people are burning out" },
  { href: "/guides/how-to-delegate", title: "How to delegate with confidence" },
  { href: "/guides/measure-capacity-in-eos", title: "How to measure capacity in EOS" },
  { href: "/guides/behavioral-vs-personality-tests", title: "Behavioral assessment vs. personality test" },
  { href: "/guides/cq-vs-engagement-surveys", title: "CQ vs. engagement surveys" },
  { href: "/guides/its-the-metric", title: "The problem isn't your people. It's the metric." },
  { href: "/guides/state-of-engagement", title: "The 2026 State of Engagement" },
  { href: "/guides/eos-people-issues", title: "Solving people issues in your Level 10 / IDS" },
  { href: "/guides/vs-9-box", title: "Prove vs. the 9-box grid" },
  { href: "/guides/vs-performance-reviews", title: "Prove vs. annual performance reviews" },
  { href: "/guides/vs-resumes-interviews", title: "Why resumes and interviews miss follow-through" },
  { href: "/guides/cost-of-turnover", title: "What employee turnover really costs" },
  { href: "/guides/regretted-attrition", title: "Regretted attrition: the number that matters" },
  { href: "/guides/reduce-turnover-small-business", title: "How to reduce turnover in a small business" },
  { href: "/guides/retain-top-performers", title: "How to keep your best people" },
  { href: "/guides/work-on-vs-in-your-business", title: "Working on vs. in your business" },
  { href: "/guides/how-to-let-go-as-a-founder", title: "How to let go as a founder" },
  { href: "/guides/when-to-hire-a-second-in-command", title: "When to hire a second-in-command" },
  { href: "/guides/founder-dependence", title: "Founder dependence & key-person risk" },
  { href: "/guides/leadership-style-clash", title: "Leadership styles & the CQ clash matrix" },
  { href: "/guides/behavioral-interview-questions", title: "Behavioral interview questions that predict follow-through" },
];

/** EOS spoke pages under /for-eos — used by the More on EOS + Prove cross-links. */
export const EOS_SPOKES: GuideRef[] = [
  { href: "/for-eos/gwc", title: "GWC: making the Capacity box measurable" },
  { href: "/for-eos/right-person-right-seat", title: "Right Person, Right Seat: how to actually tell" },
  { href: "/for-eos/accountability-chart", title: "The Accountability Chart: right people in the seats?" },
  { href: "/for-eos/delegate-and-elevate", title: "Delegate & Elevate without guessing who can catch it" },
  { href: "/for-eos/capacity", title: "The Capacity problem in GWC" },
  { href: "/for-eos/people-analyzer", title: "A real Capacity score for the People Analyzer" },
  { href: "/for-eos/quarterly-conversations", title: "Better Quarterly Conversations" },
  { href: "/for-eos/implementers", title: "For EOS Implementers" },
];

/** Free-tool pages — used by the More Free Tools cross-links. */
export const FREE_TOOLS: GuideRef[] = [
  { href: "/free-tools/certainty-diagnostic", title: "The Certainty Diagnostic" },
  { href: "/free-tools/4am-test", title: "The 4 AM Test" },
  { href: "/free-tools/hidden-gem-identifier", title: "Hidden Gem Identifier" },
  { href: "/free-tools/get-to-green", title: "Get to Green" },
  { href: "/free-tools/cost-of-a-bad-bet", title: "Cost of a Bad Bet" },
  { href: "/free-tools/scorecard", title: "Talent Development Scorecard" },
];

/** Case-study detail pages — used by the More Case Studies cross-links. */
export const CASE_STUDIES: GuideRef[] = [
  { href: "/case-studies/accountability", title: "From driving results to building accountability" },
  { href: "/case-studies/ownership", title: "From reliable executor to enterprise leader" },
  { href: "/case-studies/snapshot", title: "A sample CQ deliverable" },
];

/** Pick up to `count` refs after `current` (wrapping), excluding `current`. */
export function relatedTo(list: GuideRef[], current: string, count = 3): GuideRef[] {
  const i = list.findIndex((g) => g.href === current);
  const rest = i === -1 ? list : [...list.slice(i + 1), ...list.slice(0, i)];
  return rest.filter((g) => g.href !== current).slice(0, count);
}
