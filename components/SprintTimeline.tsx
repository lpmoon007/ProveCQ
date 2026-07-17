const NODES = [
  {
    x: 130,
    fill: "#1F8B57",
    kicker: "DAY 0",
    kColor: "#1F8B57",
    title: "Snapshot",
    sub: "15-min behavioral read",
  },
  {
    x: 450,
    fill: "#14130E",
    kicker: "WEEKS 1–6",
    kColor: "#14130E",
    title: "Validation",
    sub: "40+ datapoints under pressure",
  },
  {
    x: 770,
    fill: "#1F8B57",
    kicker: "WEEK 6",
    kColor: "#1F8B57",
    title: "Decision",
    sub: "Commitment Map + Heatmap",
  },
];

/** The six-week Prove sprint: snapshot → validation → decision. */
export default function SprintTimeline({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 900 210"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="The six-week Prove sprint: a 15-minute snapshot on day 0, validation across weeks 1 to 6 with 40+ datapoints under pressure, and a decision at week 6 with a Commitment Map and Heatmap."
      fontFamily="var(--font-figtree), ui-sans-serif, system-ui, sans-serif"
    >
      <title>The six-week Prove sprint</title>
      <line x1="90" y1="110" x2="810" y2="110" stroke="#D6CDB8" strokeWidth="3" />
      {NODES.map((n) => (
        <g key={n.title}>
          <text x={n.x} y="66" fontSize="14" fontWeight="700" fill={n.kColor} textAnchor="middle" letterSpacing="1">
            {n.kicker}
          </text>
          <circle cx={n.x} cy="110" r="14" fill={n.fill} />
          <text x={n.x} y="158" fontSize="17" fontWeight="700" fill="#14130E" textAnchor="middle">
            {n.title}
          </text>
          <text x={n.x} y="182" fontSize="13" fill="#6E6A5C" textAnchor="middle">
            {n.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}
