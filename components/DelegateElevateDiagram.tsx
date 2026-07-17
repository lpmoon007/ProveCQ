const CELLS = [
  {
    x: 0,
    y: 0,
    bg: "#E7F3EC",
    stroke: "#BFE3CD",
    kicker: "LOVE IT · GREAT AT IT",
    kColor: "#1F8B57",
    title: "Your zone",
    lines: ["Spend more time here as you", "hand the rest off."],
    lineColor: "#4A5A50",
    action: "ELEVATE INTO THIS →",
    aColor: "#1F8B57",
  },
  {
    x: 370,
    y: 0,
    bg: "#F0EADD",
    stroke: "#E3DCCB",
    kicker: "LIKE IT · GOOD AT IT",
    kColor: "#8A7B53",
    title: "Keep for now",
    lines: ["Fine to hold — but the next to", "go as you grow."],
    lineColor: "#615B4F",
    action: null,
    aColor: "",
  },
  {
    x: 0,
    y: 220,
    bg: "#FBF1DA",
    stroke: "#EAD9AE",
    kicker: "DON’T LIKE IT · GOOD AT IT",
    kColor: "#B07E1E",
    title: "Delegate soon",
    lines: ["You can do it — but it drains", "you and blocks your growth."],
    lineColor: "#6B5A38",
    action: "→ WHO CAN CATCH IT?",
    aColor: "#B07E1E",
  },
  {
    x: 370,
    y: 220,
    bg: "#F7E4DE",
    stroke: "#ECC7BC",
    kicker: "DON’T LIKE IT · NOT GOOD AT IT",
    kColor: "#C0492E",
    title: "Delegate first",
    lines: ["Every hour here is a tax on", "you and the business."],
    lineColor: "#7A4536",
    action: "→ HAND OFF NOW",
    aColor: "#C0492E",
  },
];

/**
 * The Delegate and Elevate quadrant: activities sorted by whether you enjoy
 * them and whether you're good at them, with the action each quadrant implies.
 */
export default function DelegateElevateDiagram({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 700 420"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="The Delegate and Elevate quadrant: Love it and great at it is your zone to elevate into; like it and good at it, keep for now; don't like it but good at it, delegate soon; don't like it and not good at it, delegate first."
      fontFamily="var(--font-figtree), ui-sans-serif, system-ui, sans-serif"
    >
      <title>The Delegate and Elevate quadrant</title>
      {CELLS.map((c) => (
        <g key={c.title} transform={`translate(${c.x} ${c.y})`}>
          <rect width="330" height="200" rx="16" fill={c.bg} stroke={c.stroke} />
          <text x="24" y="38" fontSize="13" fontWeight="700" fill={c.kColor} letterSpacing="1">
            {c.kicker}
          </text>
          <text x="24" y="76" fontSize="22" fontWeight="700" fill="#14130E">
            {c.title}
          </text>
          <text x="24" y="108" fontSize="15" fill={c.lineColor}>
            {c.lines[0]}
          </text>
          <text x="24" y="130" fontSize="15" fill={c.lineColor}>
            {c.lines[1]}
          </text>
          {c.action && (
            <text x="24" y="176" fontSize="13" fontWeight="700" fill={c.aColor}>
              {c.action}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
