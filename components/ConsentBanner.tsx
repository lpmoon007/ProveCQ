"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "provecq_consent";

/**
 * GA4 Consent Mode v2 gate. Analytics storage defaults to "denied" (set in the
 * layout's gtag init); this banner flips it to "granted" only on explicit
 * opt-in, and restores a returning visitor's prior choice on load.
 */
export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const prior = localStorage.getItem(CONSENT_KEY);
    if (prior === "granted") {
      updateConsent("granted");
      return; // choice already made — no banner
    }
    if (prior === "denied") return;
    setShow(true);
  }, []);

  function updateConsent(state: "granted" | "denied") {
    const w = window as unknown as { gtag?: (...a: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("consent", "update", {
        analytics_storage: state,
      });
    }
  }

  function decide(state: "granted" | "denied") {
    localStorage.setItem(CONSENT_KEY, state);
    updateConsent(state);
    setShow(false);
    window.dispatchEvent(new Event("provecq-consent-resolved"));
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#2A2619] bg-ink-2 px-4 py-3.5 text-paper on-dark sm:px-6">
      <div className="mx-auto flex max-w-content flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="m-0 text-center text-[13.5px] leading-[1.5] text-[#B8B4A6] sm:text-left">
          We use privacy-friendly analytics to understand what&rsquo;s useful and
          improve the site. Analytics stays off until you accept.{" "}
          <Link href="/privacy" className="font-semibold text-green-soft underline">
            Privacy
          </Link>
        </p>
        <div className="flex shrink-0 items-center gap-2.5">
          <button
            onClick={() => decide("denied")}
            className="cursor-pointer rounded-[10px] border-[1.5px] border-[#3A3629] px-4 py-2 text-[14px] font-bold text-paper transition-colors hover:border-paper"
          >
            Decline
          </button>
          <button
            onClick={() => decide("granted")}
            className="cursor-pointer rounded-[10px] bg-green px-5 py-2 text-[14px] font-bold text-white transition-colors hover:bg-green-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
