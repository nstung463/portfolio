import type { ProjectArtVariant } from "../types/portfolio";

export function ProjectArt({ variant }: { variant: ProjectArtVariant }) {
  const dot = (cx: number, cy: number, dur: number, color = "#22d3ee") => (
    <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={1.4} fill={color}>
      <animate attributeName="opacity" values=".35;1;.35" dur={`${dur}s`} repeatCount="indefinite" />
    </circle>
  );
  const flowLine = (x1: number, y1: number, x2: number, y2: number) => (
    <line
      key={`${x1}-${y1}-${x2}-${y2}`}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#f97316"
      strokeWidth={0.6}
      strokeDasharray="2 2"
      opacity={0.6}
    >
      <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="1.2s" repeatCount="indefinite" />
    </line>
  );

  let content: React.ReactNode;
  let label = "";

  if (variant === "rag") {
    label = "RETRIEVE";
    const docs = [40, 75, 110].map((x, i) => (
      <g key={x}>
        <rect x={x} y={35} width={22} height={28} rx={2} fill="none" stroke="#f97316" strokeWidth={1} opacity={0.7} />
        <line x1={x + 4} y1={42} x2={x + 18} y2={42} stroke="#22d3ee" strokeWidth={0.8} opacity={0.7} />
        <line x1={x + 4} y1={47} x2={x + 18} y2={47} stroke="#22d3ee" strokeWidth={0.8} opacity={0.5} />
        <line x1={x + 4} y1={52} x2={x + 14} y2={52} stroke="#22d3ee" strokeWidth={0.8} opacity={0.5} />
        {dot(x + 11, 46, 1.4 + i * 0.2)}
      </g>
    ));
    content = (
      <>
        {docs}
        {flowLine(132, 48, 165, 48)}
        <circle cx="175" cy="48" r="14" fill="none" stroke="#22d3ee" strokeWidth={1.2} />
        <circle cx="175" cy="48" r="5" fill="#f97316" opacity={0.8}>
          <animate attributeName="r" values="3;6;3" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </>
    );
  } else if (variant === "chat") {
    label = "MULTI-TURN";
    content = (
      <>
        <rect x="35" y="30" width="60" height="20" rx="10" fill="none" stroke="#22d3ee" strokeWidth={1} opacity={0.8} />
        <rect x="105" y="55" width="60" height="20" rx="10" fill="none" stroke="#f97316" strokeWidth={1} opacity={0.8} />
        <rect x="35" y="80" width="60" height="20" rx="10" fill="none" stroke="#22d3ee" strokeWidth={1} opacity={0.6} />
        {[45, 55, 65].map((x, i) => dot(x, 40, 1.4 + i * 0.2))}
        {[115, 125, 135].map((x, i) => dot(x, 65, 1.5 + i * 0.2, "#f97316"))}
      </>
    );
  } else if (variant === "radar") {
    label = "SCAN";
    content = (
      <>
        <circle cx="100" cy="60" r="45" fill="none" stroke="#f97316" strokeWidth={0.6} opacity={0.4} />
        <circle cx="100" cy="60" r="28" fill="none" stroke="#f97316" strokeWidth={0.6} opacity={0.4} />
        <line x1="100" y1="60" x2="100" y2="15" stroke="#22d3ee" strokeWidth={1.2} opacity={0.8}>
          <animateTransform attributeName="transform" type="rotate" from="0 100 60" to="360 100 60" dur="3s" repeatCount="indefinite" />
        </line>
        {[[70, 40], [130, 75], [85, 85], [120, 35]].map(([x, y], i) => dot(x, y, 1.4 + i * 0.2))}
      </>
    );
  } else if (variant === "vision") {
    label = "DETECT";
    content = (
      <>
        <rect x="55" y="20" width="90" height="70" rx="3" fill="none" stroke="#f97316" strokeWidth={1} opacity={0.7} />
        <rect x="70" y="35" width="35" height="40" rx="2" fill="none" stroke="#22d3ee" strokeWidth={1.2}>
          <animate attributeName="opacity" values=".4;1;.4" dur="1.6s" repeatCount="indefinite" />
        </rect>
        <rect x="70" y="35" width="35" height="40" rx="2" fill="#0d1218" opacity={0.85} />
        <text x="87" y="58" fill="#f97316" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity={0.8}>MASK</text>
      </>
    );
  } else if (variant === "camera") {
    label = "LIVE FEED";
    content = (
      <>
        <rect x="45" y="30" width="70" height="50" rx="3" fill="none" stroke="#f97316" strokeWidth={1} opacity={0.7} />
        <circle cx="80" cy="55" r="12" fill="none" stroke="#22d3ee" strokeWidth={1.2} />
        <circle cx="80" cy="55" r="4" fill="#22d3ee"><animate attributeName="opacity" values=".3;1;.3" dur="1.2s" repeatCount="indefinite" /></circle>
        <circle cx="125" cy="30" r="3" fill="#ef4444"><animate attributeName="opacity" values="1;.2;1" dur="1s" repeatCount="indefinite" /></circle>
        <text x="150" y="34" fill="#ef4444" fontSize="7" fontFamily="monospace" opacity={0.85}>REC</text>
        {flowLine(118, 55, 160, 55)}
        <text x="185" y="58" fill="#22d3ee" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity={0.8}>Q&amp;A</text>
      </>
    );
  } else if (variant === "hand") {
    label = "GESTURE";
    const pts = [[70, 25], [80, 35], [90, 30], [100, 40], [110, 32], [75, 55], [95, 60], [105, 55]];
    content = (
      <>
        {pts.map(([x, y], i) => dot(x, y, 1.3 + i * 0.15))}
        <line x1="70" y1="25" x2="80" y2="35" stroke="#f97316" strokeWidth={0.7} opacity={0.6} />
        <line x1="80" y1="35" x2="90" y2="30" stroke="#f97316" strokeWidth={0.7} opacity={0.6} />
        <line x1="90" y1="30" x2="100" y2="40" stroke="#f97316" strokeWidth={0.7} opacity={0.6} />
        <line x1="100" y1="40" x2="110" y2="32" stroke="#f97316" strokeWidth={0.7} opacity={0.6} />
        <line x1="80" y1="35" x2="75" y2="55" stroke="#f97316" strokeWidth={0.7} opacity={0.6} />
        <line x1="95" y1="60" x2="105" y2="55" stroke="#f97316" strokeWidth={0.7} opacity={0.6} />
      </>
    );
  } else {
    label = "TRACK";
    content = (
      <>
        <rect x="120" y="25" width="26" height="26" rx="3" fill="none" stroke="#ef4444" strokeWidth={1.2} opacity={0.85}><animate attributeName="opacity" values=".4;1;.4" dur="1.4s" repeatCount="indefinite" /></rect>
        <path d="M 55 90 L 65 55 L 90 45 L 90 90 Z" fill="none" stroke="#22d3ee" strokeWidth={1} opacity={0.8} />
        <circle cx="76" cy="35" r="10" fill="none" stroke="#22d3ee" strokeWidth={1} opacity={0.8} />
        {dot(76, 35, 1.5)}
        {flowLine(90, 60, 118, 40)}
      </>
    );
  }

  return (
    <svg className="project-art h-full w-full" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="200" height="120" fill="#0d1218" />
      {content}
      <text x="10" y="112" fill="#ffffff" fontSize="7" fontFamily="monospace" opacity={0.5}>{label}</text>
    </svg>
  );
}
