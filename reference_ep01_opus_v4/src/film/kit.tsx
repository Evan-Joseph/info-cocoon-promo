import React from "react";
import { FONT_MONO, FONT_SANS, clamp } from "./core";

/** Industrial leader-line callout: anchor dot → elbow → label welded to data. */
export const Leader: React.FC<{
  x: number;
  y: number;
  dx: number;
  dy: number;
  run?: number;
  label: string;
  sub?: string;
  color: string;
  textColor?: string;
  p?: number; // draw progress 0..1
  size?: number;
  weight?: number;
  font?: string;
}> = ({ x, y, dx, dy, run = 60, label, sub, color, textColor, p = 1, size = 32, weight = 700, font = FONT_SANS }) => {
  const ex = x + dx;
  const ey = y + dy;
  const dir = dx >= 0 ? 1 : -1;
  const fx = ex + dir * run;
  const total = Math.hypot(dx, dy) + run;
  const draw = clamp(p * 1.4);
  const tp = clamp((p - 0.45) / 0.55);
  return (
    <g>
      <circle cx={x} cy={y} r={6} fill={color} opacity={clamp(p * 4)} />
      <circle cx={x} cy={y} r={12} fill="none" stroke={color} strokeWidth={2} opacity={clamp(p * 4) * 0.5} />
      <polyline
        points={`${x},${y} ${ex},${ey} ${fx},${ey}`}
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeDasharray={total}
        strokeDashoffset={total * (1 - draw)}
      />
      <g opacity={tp} transform={`translate(${(1 - tp) * dir * -10} 0)`}>
        <text
          x={fx + dir * 14}
          y={ey + size * 0.35}
          textAnchor={dir > 0 ? "start" : "end"}
          fontFamily={font}
          fontWeight={weight}
          fontSize={size}
          fill={textColor ?? color}
        >
          {label}
        </text>
        {sub && (
          <text
            x={fx + dir * 14}
            y={ey + size * 0.35 + size * 1.1}
            textAnchor={dir > 0 ? "start" : "end"}
            fontFamily={FONT_SANS}
            fontWeight={500}
            fontSize={28}
            fill={textColor ?? color}
            opacity={0.72}
          >
            {sub}
          </text>
        )}
      </g>
    </g>
  );
};

/** Thick glass phone window with real edge highlights. */
export const Phone: React.FC<{
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  tint: string;
  glow?: number;
  opacity?: number;
  children?: React.ReactNode;
}> = ({ id, x, y, w, h, tint, glow = 0.35, opacity = 1, children }) => {
  const r = Math.min(46, w * 0.11);
  return (
    <g opacity={opacity}>
      <defs>
        <clipPath id={`clip-${id}`}>
          <rect x={x + 14} y={y + 14} width={w - 28} height={h - 28} rx={r - 12} />
        </clipPath>
        <linearGradient id={`hl-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity={0.16} />
          <stop offset="0.35" stopColor="#ffffff" stopOpacity={0.02} />
          <stop offset="1" stopColor="#ffffff" stopOpacity={0} />
        </linearGradient>
        <radialGradient id={`gl-${id}`} cx="0.5" cy="0.5" r="0.6">
          <stop offset="0" stopColor={tint} stopOpacity={glow * 0.55} />
          <stop offset="1" stopColor={tint} stopOpacity={0} />
        </radialGradient>
      </defs>
      {/* light spill on the surface */}
      <ellipse cx={x + w / 2} cy={y + h / 2} rx={w * 0.95} ry={h * 0.62} fill={`url(#gl-${id})`} />
      {/* glass thickness */}
      <rect x={x + 7} y={y + 10} width={w} height={h} rx={r} fill="#050404" opacity={0.85} />
      <rect x={x} y={y} width={w} height={h} rx={r} fill="#0C0B0A" stroke="rgba(255,255,255,0.16)" strokeWidth={2} />
      <rect x={x + 14} y={y + 14} width={w - 28} height={h - 28} rx={r - 12} fill="#0E0E10" />
      <g clipPath={`url(#clip-${id})`}>
        <rect x={x} y={y} width={w} height={h} fill={tint} opacity={0.07} />
        {children}
        <rect x={x} y={y} width={w} height={62} fill="#0E0E10" />
        <rect x={x} y={y + 62} width={w} height={14} fill="#0E0E10" opacity={0.6} />
      </g>
      <rect x={x + 14} y={y + 14} width={w - 28} height={h - 28} rx={r - 12} fill="none" stroke={tint} strokeOpacity={0.35} strokeWidth={1.5} />
      <rect x={x} y={y} width={w} height={h} rx={r} fill={`url(#hl-${id})`} pointerEvents="none" />
      <rect x={x + w / 2 - 40} y={y + 28} width={80} height={18} rx={9} fill="#000" />
    </g>
  );
};

export const LockIcon: React.FC<{ x: number; y: number; s?: number; color: string; closed: number }> = ({ x, y, s = 1, color, closed }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path
      d={`M -12 0 V -12 A 12 12 0 0 1 12 -12 V ${-4 + (1 - clamp(closed)) * -12}`}
      fill="none"
      stroke={color}
      strokeWidth={5}
      strokeLinecap="round"
      transform={`translate(0 ${(1 - clamp(closed)) * -8})`}
    />
    <rect x={-20} y={-2} width={40} height={32} rx={6} fill={color} />
    <circle cx={0} cy={12} r={4.5} fill="#0D1015" />
  </g>
);

export const ThumbIcon: React.FC<{ x: number; y: number; s?: number; color: string }> = ({ x, y, s = 1, color }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} fill={color}>
    <rect x={-18} y={-4} width={9} height={24} rx={2} />
    <path d="M -6 20 V -2 L 2 -18 C 4 -22 10 -21 10 -15 L 8 -6 H 17 C 21 -6 23 -2 22 2 L 19 16 C 18 19 16 20 13 20 Z" />
  </g>
);

export const HeartIcon: React.FC<{ x: number; y: number; s?: number; color: string }> = ({ x, y, s = 1, color }) => (
  <path
    transform={`translate(${x} ${y}) scale(${s})`}
    d="M 0 14 C -26 -4 -18 -24 -6 -20 C -2 -19 0 -15 0 -13 C 0 -15 2 -19 6 -20 C 18 -24 26 -4 0 14 Z"
    fill="none"
    stroke={color}
    strokeWidth={4}
    strokeLinejoin="round"
  />
);

export const BubbleIcon: React.FC<{ x: number; y: number; s?: number; color: string }> = ({ x, y, s = 1, color }) => (
  <path
    transform={`translate(${x} ${y}) scale(${s})`}
    d="M -20 -14 H 20 Q 24 -14 24 -10 V 8 Q 24 12 20 12 H -4 L -14 20 V 12 H -20 Q -24 12 -24 8 V -10 Q -24 -14 -20 -14 Z"
    fill="none"
    stroke={color}
    strokeWidth={4}
    strokeLinejoin="round"
  />
);

export const PlusUserIcon: React.FC<{ x: number; y: number; s?: number; color: string }> = ({ x, y, s = 1, color }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round">
    <circle cx={-6} cy={-8} r={9} />
    <path d="M -22 18 C -20 4 8 4 10 18" />
    <path d="M 16 -6 V 8 M 9 1 H 23" />
  </g>
);

/** Text that enters once (expo out) and then stays perfectly still. */
export const Reveal: React.FC<{ p: number; dy?: number; children: React.ReactNode }> = ({ p, dy = 18, children }) => (
  <g opacity={clamp(p * 1.6)} transform={`translate(0 ${(1 - clamp(p)) * dy})`}>
    {children}
  </g>
);

export const Mono: React.FC<React.SVGProps<SVGTextElement>> = (props) => <text fontFamily={FONT_MONO} {...props} />;
export const Sans: React.FC<React.SVGProps<SVGTextElement>> = (props) => <text fontFamily={FONT_SANS} {...props} />;
