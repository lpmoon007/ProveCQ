import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Emit /robots.txt as a static file for the export build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.domain}/sitemap.xml`,
  };
}
