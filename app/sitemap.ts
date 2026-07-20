import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Emit /sitemap.xml as a static file for the export build.
export const dynamic = "force-static";

const ROUTES = [
  // Core
  "",
  "/how-it-works",
  "/for-eos",
  "/founder-bottleneck",
  "/certainty-gap",
  "/better-every-day",
  "/work-with-us",
  "/about",
  "/contact",
  "/heatmap",
  "/ethics",
  "/faq",
  "/glossary",
  "/author/james-carter",
  "/privacy",
  // Free tools
  "/free-tools",
  "/free-tools/certainty-diagnostic",
  "/free-tools/4am-test",
  "/free-tools/hidden-gem-identifier",
  "/free-tools/scorecard",
  "/free-tools/cost-of-a-bad-bet",
  "/free-tools/get-to-green",
  // EOS spokes
  "/for-eos/capacity",
  "/for-eos/gwc",
  "/for-eos/right-person-right-seat",
  "/for-eos/accountability-chart",
  "/for-eos/delegate-and-elevate",
  "/for-eos/people-analyzer",
  "/for-eos/quarterly-conversations",
  "/for-eos/implementers",
  // Case studies
  "/case-studies",
  "/case-studies/accountability",
  "/case-studies/ownership",
  "/case-studies/snapshot",
  // Guides
  "/guides",
  "/guides/who-to-promote",
  "/guides/promote-vs-hire",
  "/guides/failed-promotion",
  "/guides/hire-for-follow-through",
  "/guides/cost-of-a-bad-hire",
  "/guides/high-potential-employees",
  "/guides/leadership-bench",
  "/guides/succession-planning",
  "/guides/quiet-quitting",
  "/guides/burned-out-top-performers",
  "/guides/how-to-delegate",
  "/guides/first-90-days",
  "/guides/measure-commitment",
  "/guides/measure-capacity-in-eos",
  "/guides/behavioral-vs-personality-tests",
  "/guides/cq-vs-engagement-surveys",
  "/guides/its-the-metric",
  "/guides/state-of-engagement",
  "/guides/eos-people-issues",
  "/guides/vs-9-box",
  "/guides/vs-performance-reviews",
  "/guides/vs-resumes-interviews",
  "/guides/cost-of-turnover",
  "/guides/regretted-attrition",
  "/guides/reduce-turnover-small-business",
  "/guides/retain-top-performers",
  "/guides/work-on-vs-in-your-business",
  "/guides/how-to-let-go-as-a-founder",
  "/guides/when-to-hire-a-second-in-command",
  "/guides/founder-dependence",
  "/guides/leadership-styles",
  "/guides/leadership-style-clash",
  "/guides/behavioral-interview-questions",
  "/guides/the-science-behind-cq",
  "/guides/hiring-scorecard",
  "/guides/high-performer-vs-high-potential",
  "/guides/people-decisions-by-the-numbers",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${site.domain}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
