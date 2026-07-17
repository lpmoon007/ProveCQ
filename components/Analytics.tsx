"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * Fires GA4 conversion events without per-CTA wiring:
 *  - book_a_call_click  — any click on a HubSpot meetings link
 *  - scroll_depth       — 25 / 50 / 75 / 100% milestones (once each)
 *  - generate_lead      — HubSpot form submit (postMessage callback)
 * Mounted once in the root layout.
 */
export default function Analytics() {
  useEffect(() => {
    // 1. Book-a-call clicks (event delegation, capture phase).
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.includes("meetings-na2.hubspot.com")) {
        track("book_a_call_click", {
          link_url: href,
          link_text: a.textContent?.trim().slice(0, 80) || "",
        });
      }
    };
    document.addEventListener("click", onClick, true);

    // 2. Scroll-depth milestones.
    const marks = [25, 50, 75, 100];
    const fired = new Set<number>();
    const onScroll = () => {
      const el = document.documentElement;
      const reach = el.scrollTop + window.innerHeight;
      const pct = el.scrollHeight > 0 ? (reach / el.scrollHeight) * 100 : 0;
      for (const m of marks) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          track("scroll_depth", { percent: m });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // 3. HubSpot form submission (embedded form posts a message on submit).
    const onMessage = (e: MessageEvent) => {
      const d = e.data as
        | { type?: string; eventName?: string; id?: string }
        | undefined;
      if (d && d.type === "hsFormCallback" && d.eventName === "onFormSubmitted") {
        track("generate_lead", { source: "hubspot", form_id: d.id || "" });
      }
    };
    window.addEventListener("message", onMessage);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return null;
}
