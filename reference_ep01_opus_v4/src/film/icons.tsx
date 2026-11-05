import React from "react";

export interface IconProps {
  x?: number;
  y?: number;
  size?: number;
  color?: string;
  strokeWidth?: number;
  fill?: string;
  opacity?: number;
}

const wrap = (
  { x = 0, y = 0, size = 36, color = "currentColor", strokeWidth = 2.2, fill = "none", opacity = 1 }: IconProps,
  children: React.ReactNode,
) => {
  const s = size / 24;
  return (
    <g
      transform={`translate(${(x - size / 2).toFixed(2)} ${(y - size / 2).toFixed(2)}) scale(${s.toFixed(4)})`}
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={opacity}
    >
      {children}
    </g>
  );
};

/** Lucide: code-2 */
export const CodeIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </>,
  );

/** Lucide: palette */
export const PaletteIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <circle cx="13.5" cy="6.5" r="1.2" fill={p.color ?? "currentColor"} />
      <circle cx="17.5" cy="10.5" r="1.2" fill={p.color ?? "currentColor"} />
      <circle cx="8.5" cy="7.5" r="1.2" fill={p.color ?? "currentColor"} />
      <circle cx="6.5" cy="12.5" r="1.2" fill={p.color ?? "currentColor"} />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </>,
  );

/** Lucide: clapperboard / video */
export const VideoIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </>,
  );

/** Lucide: headset */
export const HeadsetIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
    </>,
  );

/** Lucide: star */
export const StarIcon: React.FC<IconProps> = (p) =>
  wrap(
    { ...p, fill: p.fill ?? p.color ?? "currentColor" },
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  );

/** Lucide: alert-triangle */
export const AlertTriangleIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </>,
  );

/** Lucide: shield-check */
export const ShieldCheckIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>,
  );

/** Lucide: shield-off */
export const ShieldOffIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <path d="m2 2 20 20" />
      <path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" />
      <path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" />
    </>,
  );

/** Lucide: scale */
export const ScaleIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </>,
  );

/** Lucide: file-text */
export const FileTextIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </>,
  );

/** Lucide: trending-up */
export const TrendingUpIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </>,
  );

/** Lucide: trending-down */
export const TrendingDownIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </>,
  );

/** Lucide: clock */
export const ClockIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>,
  );

/** Lucide: flame */
export const FlameIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />,
  );

/** Lucide: coins */
export const CoinsIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </>,
  );

/** Lucide: x-circle */
export const XCircleIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </>,
  );

/** Lucide: check-circle-2 */
export const CheckCircleIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </>,
  );

/** Lucide: graduation-cap */
export const GraduationCapIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </>,
  );

/** Lucide: lock */
export const LockVectorIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>,
  );

/** Lucide: sparkles */
export const SparklesIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </>,
  );

/** Lucide: calendar-check */
export const CalendarCheckIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </>,
  );

/** Lucide: award */
export const AwardIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </>,
  );

/** Lucide: terminal */
export const TerminalIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </>,
  );

/** Lucide: credit-card */
export const CreditCardIcon: React.FC<IconProps> = (p) =>
  wrap(
    p,
    <>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </>,
  );

/** Solid Upvote Triangle (Zhihu / ProductHunt style) */
export const UpvoteTriangleIcon: React.FC<IconProps> = ({ x = 0, y = 0, size = 24, color = "#3B82F6", opacity = 1 }) => {
  const h = size * 0.86;
  return (
    <polygon
      points={`${x},${y - h * 0.55} ${x - size * 0.52},${y + h * 0.45} ${x + size * 0.52},${y + h * 0.45}`}
      fill={color}
      opacity={opacity}
    />
  );
};
