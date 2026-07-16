"use client";

import { useEffect, useRef } from "react";

/**
 * Hidden Gem Identifier — HubSpot-gated form (handoff §6).
 * Portal 20276071, form 7f180c70-7e33-4570-8d3e-b37de009dfd3, region na2.
 *
 * The HubSpot v2 embed loader scans the DOM for `.hs-form-frame` elements and
 * mounts each form into them, managing that subtree itself. We therefore append
 * the frame imperatively into a ref'd host that React owns but never fills — so
 * React's reconciler and HubSpot's DOM writes never fight over the same nodes.
 */
const HS = {
  region: "na2",
  portalId: "20276071",
  formId: "7f180c70-7e33-4570-8d3e-b37de009dfd3",
  src: "https://js-na2.hsforms.net/forms/embed/20276071.js",
} as const;

export default function HiddenGemForm() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || host.querySelector(".hs-form-frame")) return;

    // Build HubSpot's target imperatively — outside React's reconciliation.
    const frame = document.createElement("div");
    frame.className = "hs-form-frame";
    frame.setAttribute("data-region", HS.region);
    frame.setAttribute("data-form-id", HS.formId);
    frame.setAttribute("data-portal-id", HS.portalId);
    host.appendChild(frame);

    // Ensure the loader is present; it auto-mounts into `.hs-form-frame`.
    if (!document.querySelector(`script[src="${HS.src}"]`)) {
      const s = document.createElement("script");
      s.src = HS.src;
      s.defer = true;
      document.body.appendChild(s);
    }

    return () => {
      frame.remove();
    };
  }, []);

  return (
    <div className="rounded-[20px] border border-edge-light bg-white p-8">
      <div className="mb-1.5 font-display text-[20px] font-bold">
        Get your Hidden Gem shortlist
      </div>
      <p className="m-0 mb-5 text-[14.5px] leading-[1.5] text-content-muted">
        Tell us a little about your team and where to send your results. No spam
        &mdash; just your shortlist and how to act on it.
      </p>
      {/* HubSpot injects the form here; React never touches this subtree. */}
      <div ref={hostRef} />
      <noscript>
        <p className="m-0 text-[14px] text-content-muted">
          This form needs JavaScript. Prefer to talk?{" "}
          <a href="https://meetings-na2.hubspot.com/jcarter28" className="text-green">
            Book a call
          </a>
          .
        </p>
      </noscript>
    </div>
  );
}
