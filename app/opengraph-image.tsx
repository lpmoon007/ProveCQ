import { ImageResponse } from "next/og";

// Required for the static export build to prerender this to a PNG.
export const dynamic = "force-static";

export const alt = "Prove — behavioral proof of who will deliver";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social/LLM card. Rendered to a static PNG at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14130E",
          color: "#F6F3EC",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#1F8B57",
              color: "#fff",
              fontSize: 40,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            P
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>Prove</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "1000px",
            }}
          >
            Stop betting on the wrong people.
          </div>
          <div style={{ fontSize: 30, color: "#B8B4A6", maxWidth: "920px" }}>
            Behavioral proof of who will deliver — before you promote, hire, or
            hand over the keys.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              fontSize: 24,
              color: "#8FD6AC",
              fontWeight: 600,
            }}
          >
            Powered by the Commitment Quotient™
          </div>
          <div style={{ fontSize: 24, color: "#6E6A5C" }}>· provecq.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
