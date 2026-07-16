import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const ROUTES = [
  "",
  "/how-it-works",
  "/eos",
  "/certainty-gap",
  "/better-every-day",
  "/work-with-us",
  "/about",
  "/contact",
  "/heatmap",
  "/free-tools",
  "/free-tools/hidden-gem",
  "/guides",
  "/ethics",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${site.domain}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
