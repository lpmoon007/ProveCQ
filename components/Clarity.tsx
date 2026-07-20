"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

const CONSENT_KEY = "provecq_consent";

/**
 * Microsoft Clarity, gated behind the same consent choice as GA4.
 *
 * Clarity records sessions and sets cookies, so we do NOT load its tag until
 * the visitor explicitly accepts analytics — matching the banner's promise
 * that "analytics stays off until you accept." The tag is injected once, on
 * prior-granted load or when the consent banner resolves to "granted".
 */
export default function Clarity() {
  useEffect(() => {
    let injected = false;

    function loadClarity() {
      if (injected) return;
      const w = window as unknown as { clarity?: unknown };
      if (w.clarity) return; // already present
      injected = true;
      // Official Clarity bootstrap snippet, project ID from site config.
      (function (c: any, l: Document, a: string, r: string, i: string) {
        c[a] =
          c[a] ||
          function (...args: unknown[]) {
            (c[a].q = c[a].q || []).push(args);
          };
        const t = l.createElement(r) as HTMLScriptElement;
        t.async = true;
        t.src = "https://www.clarity.ms/tag/" + i;
        const y = l.getElementsByTagName(r)[0];
        y.parentNode?.insertBefore(t, y);
      })(window, document, "clarity", "script", site.clarityProjectId);
    }

    if (localStorage.getItem(CONSENT_KEY) === "granted") {
      loadClarity();
      return;
    }

    function onResolved() {
      if (localStorage.getItem(CONSENT_KEY) === "granted") loadClarity();
    }
    window.addEventListener("provecq-consent-resolved", onResolved);
    return () =>
      window.removeEventListener("provecq-consent-resolved", onResolved);
  }, []);

  return null;
}
