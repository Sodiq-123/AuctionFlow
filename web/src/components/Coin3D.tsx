import { useId } from "react";

const COLORS = {
  blue: { face: ["#C4D5FF", "#2E6BFF", "#0036A8"], edge: ["#001A5C", "#0A45C9"] },
  mint: { face: ["#D9FBEA", "#3FBF86", "#0A7A4B"], edge: ["#05462B", "#159E63"] },
  sun: { face: ["#FFF1C7", "#FFB020", "#C97A00"], edge: ["#6E4300", "#E08F00"] },
  violet: { face: ["#E4DBFF", "#7B5CFF", "#4B2FD1"], edge: ["#22137A", "#5B3FE6"] },
};

/**
 * A tilted coin with a visible edge, for decoration. `mark` puts the price
 * curve (the logo) on its face; `plus` a plus sign.
 */
export function Coin3D({
  size,
  color = "blue",
  mark,
  className = "",
  style,
}: {
  size: number;
  color?: keyof typeof COLORS;
  mark?: "curve" | "plus";
  className?: string;
  style?: React.CSSProperties;
}) {
  const id = useId();
  const c = COLORS[color];
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true" className={className} style={style}>
      <defs>
        <radialGradient id={`${id}f`} cx="32%" cy="26%" r="85%">
          <stop offset="0" stopColor={c.face[0]} />
          <stop offset=".42" stopColor={c.face[1]} />
          <stop offset="1" stopColor={c.face[2]} />
        </radialGradient>
        <linearGradient id={`${id}e`} x1="0" x2="1">
          <stop offset="0" stopColor={c.edge[0]} />
          <stop offset=".5" stopColor={c.edge[1]} />
          <stop offset="1" stopColor={c.edge[0]} />
        </linearGradient>
      </defs>
      <rect x="20" y="90" width="160" height="24" fill={`url(#${id}e)`} />
      <ellipse cx="100" cy="114" rx="80" ry="62" fill={`url(#${id}e)`} />
      <ellipse cx="100" cy="90" rx="80" ry="62" fill={`url(#${id}f)`} />
      <ellipse cx="100" cy="90" rx="64" ry="49" fill="none" stroke="#fff" strokeOpacity=".3" strokeWidth="3" />
      {mark === "curve" && (
        <>
          <path d="M61 121 C82 121 90 108 100 90 S121 62 139 59" fill="none" stroke="#fff" strokeWidth="14" strokeLinecap="round" />
          <circle cx="139" cy="59" r="10" fill="#5BE3A6" stroke="#fff" strokeWidth="4" />
        </>
      )}
      {mark === "plus" && <path d="M100 62v56M72 90h56" stroke="#fff" strokeWidth="16" strokeLinecap="round" />}
      <ellipse cx="66" cy="56" rx="26" ry="9" fill="#fff" opacity=".42" transform="rotate(-24 66 56)" />
    </svg>
  );
}
