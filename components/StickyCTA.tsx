"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const DISMISS_KEY = "provecq_cta_dismissed";

/**
 * A slim, dismissible persistent CTA bar. Appears after the reader is ~45%
 * down a page, offering the low-commitment path (free diagnostic) alongside
 * the high-commitment one (book a call). Stays dismissed via localStorage.
 */
export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY) === "1") return;
    // Hold until the cookie-consent choice is made, so the two bottom bars
    // never stack on top of each other.
    const consentResolved = () => !!localStorage.getItem("provecq_consent");
    if (consentResolved()) setReady(true);
    const onResolved = () => setReady(true);
    window.addEventListener("provecq-consent-resolved", onResolved);
    const onScroll = () => {
      const el = document.documentElement;
      const frac =
        el.scrollHeight > 0
          ? (el.scrollTop + window.innerHeight) / el.scrollHeight
          : 0;
      setShow(frac > 0.45);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("provecq-consent-resolved", onResolved);
    };
  }, []);

  if (!ready || !show) return null;

  function dismiss() {
    localStorage.setItem(DISMISS_KEY, "1");
    setShow(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#2A2619] bg-ink/95 px-4 py-3 text-paper backdrop-blur on-dark sm:px-6">
      <div className="mx-auto flex max-w-content flex-col items-center gap-2.5 sm:flex-row sm:justify-between">
        <p className="m-0 text-center text-[14.5px] leading-[1.4] text-[#D8D4C6] sm:text-left">
          Stop guessing on your people calls.{" "}
          <span className="text-[#8FD6AC]">
            See your Certainty Score in 2 minutes.
          </span>
        </p>
        <div className="flex shrink-0 items-center gap-2.5">
          <Link
            href="/free-tools/certainty-diagnostic"
            className="rounded-[10px] bg-white px-4 py-2.5 text-[14px] font-bold text-green transition-colors hover:bg-paper"
          >
            Take the free diagnostic
          </Link>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] border-[1.5px] border-[#3A3629] px-4 py-2.5 text-[14px] font-bold text-paper transition-colors hover:border-green-soft"
          >
            Book a call
          </a>
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="ml-0.5 cursor-pointer border-none bg-transparent px-1 text-[20px] leading-none text-[#8C877A] transition-colors hover:text-paper"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}
