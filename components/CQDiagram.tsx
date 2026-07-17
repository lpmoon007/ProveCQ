/**
 * The Commitment Quotient model: three behavioral inputs (weighted) resolving
 * into one CQ score. Pure SVG, responsive, no client JS.
 */
export default function CQDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 880 336"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="The Commitment Quotient is built from three weighted behaviors: Initiative (40%), Applied Grit (35%), and Learnability (25%)."
      fontFamily="var(--font-figtree), ui-sans-serif, system-ui, sans-serif"
    >
      <title>How the Commitment Quotient is calculated</title>
      {/* inputs */}
      {[
        { y: 24, name: "Initiative", desc: "Acts without being told", w: "40%" },
        { y: 124, name: "Applied Grit", desc: "Follows through when it’s hard", w: "35%" },
        { y: 224, name: "Learnability", desc: "Adapts and grows", w: "25%" },
      ].map((r) => (
        <g key={r.name}>
          <rect x="4" y={r.y} width="340" height="84" rx="16" fill="#ffffff" stroke="#E3DCCB" />
          <circle cx="44" cy={r.y + 42} r="6" fill="#1F8B57" />
          <text x="66" y={r.y + 36} fontSize="20" fontWeight="700" fill="#14130E">
            {r.name}
          </text>
          <text x="66" y={r.y + 60} fontSize="14" fill="#6E6A5C">
            {r.desc}
          </text>
          <text x="322" y={r.y + 48} fontSize="24" fontWeight="700" textAnchor="end" fill="#1F8B57">
            {r.w}
          </text>
        </g>
      ))}
      {/* connectors */}
      <path d="M344 66 C 440 66, 470 150, 545 163" fill="none" stroke="#C9C1AE" strokeWidth="2" />
      <path d="M344 166 C 450 166, 470 166, 545 166" fill="none" stroke="#C9C1AE" strokeWidth="2" />
      <path d="M344 266 C 440 266, 470 184, 545 169" fill="none" stroke="#C9C1AE" strokeWidth="2" />
      {/* output */}
      <circle cx="680" cy="166" r="116" fill="#14130E" />
      <text x="680" y="150" fontSize="30" fontWeight="700" textAnchor="middle" fill="#F6F3EC">
        CQ
      </text>
      <text x="680" y="180" fontSize="15" textAnchor="middle" fill="#8FD6AC">
        Commitment
      </text>
      <text x="680" y="200" fontSize="15" textAnchor="middle" fill="#8FD6AC">
        Quotient
      </text>
    </svg>
  );
}
