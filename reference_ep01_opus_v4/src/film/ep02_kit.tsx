import React from "react";
import { FONT_MONO, FONT_SANS, FONT_SERIF, PAL, SHOTS, clamp, eo, lerp, seg, shotIndexAt } from "./ep02_core";
import { AlertTriangleIcon, ShieldCheckIcon, ShieldOffIcon, UpvoteTriangleIcon } from "./icons";

/** Industrial leader-line callout: anchor dot → elbow → label welded to data (Q11 compliant >= 28px). */
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
  p?: number;
  size?: number;
  weight?: number;
  font?: string;
}> = ({ x, y, dx, dy, run = 56, label, sub, color, textColor, p = 1, size = 32, weight = 800, font = FONT_SANS }) => {
  const ex = x + dx;
  const ey = y + dy;
  const dir = dx >= 0 ? 1 : -1;
  const fx = ex + dir * run;
  const total = Math.hypot(dx, dy) + run;
  const draw = clamp(p * 1.4);
  const tp = clamp((p - 0.35) / 0.65);
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
          fontSize={Math.max(26, size)}
          fill={textColor ?? color}
        >
          {label}
        </text>
        {sub && (
          <text
            x={fx + dir * 14}
            y={ey + size * 0.35 + size * 1.08}
            textAnchor={dir > 0 ? "start" : "end"}
            fontFamily={FONT_SANS}
            fontWeight={600}
            fontSize={26}
            fill={textColor ?? color}
            opacity={0.78}
          >
            {sub}
          </text>
        )}
      </g>
    </g>
  );
};

/** Thick glass phone window with real edge highlights (Adapted from EP01 V4 kit.tsx). */
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
  const r = Math.min(44, w * 0.1);
  return (
    <g opacity={opacity}>
      <defs>
        <clipPath id={`clip-${id}`}>
          <rect x={x + 14} y={y + 14} width={w - 28} height={h - 28} rx={r - 10} />
        </clipPath>
        <linearGradient id={`hl-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity={0.16} />
          <stop offset="0.35" stopColor="#ffffff" stopOpacity={0.02} />
          <stop offset="1" stopColor="#ffffff" stopOpacity={0} />
        </linearGradient>
        <radialGradient id={`gl-${id}`} cx="0.5" cy="0.5" r="0.6">
          <stop offset="0" stopColor={tint} stopOpacity={glow * 0.5} />
          <stop offset="1" stopColor={tint} stopOpacity={0} />
        </radialGradient>
      </defs>
      <ellipse cx={x + w / 2} cy={y + h / 2} rx={w * 0.9} ry={h * 0.58} fill={`url(#gl-${id})`} />
      <rect x={x + 7} y={y + 10} width={w} height={h} rx={r} fill="#050404" opacity={0.85} />
      <rect x={x} y={y} width={w} height={h} rx={r} fill="#0C0B0A" stroke="rgba(255,255,255,0.18)" strokeWidth={2} />
      <rect x={x + 14} y={y + 14} width={w - 28} height={h - 28} rx={r - 10} fill="#101216" />
      <g clipPath={`url(#clip-${id})`}>
        <rect x={x} y={y} width={w} height={h} fill={tint} opacity={0.07} />
        {children}
      </g>
      <rect x={x + 14} y={y + 14} width={w - 28} height={h - 28} rx={r - 10} fill="none" stroke={tint} strokeOpacity={0.4} strokeWidth={1.8} />
      <rect x={x} y={y} width={w} height={h} rx={r} fill={`url(#hl-${id})`} pointerEvents="none" />
      <rect x={x + w / 2 - 38} y={y + 24} width={76} height={16} rx={8} fill="#000" />
    </g>
  );
};

/** High-craft Desktop / Analytics / Billing Window Card with macOS traffic lights & glass border. */
export const BrowserWindow: React.FC<{
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  badgeText?: string;
  tint?: string;
  bg?: string;
  opacity?: number;
  children?: React.ReactNode;
}> = ({ id, x, y, w, h, title, badgeText, tint = "#D4AF37", bg = "#13161D", opacity = 1, children }) => {
  const r = 24;
  return (
    <g opacity={opacity}>
      <defs>
        <clipPath id={`bclip-${id}`}>
          <rect x={x} y={y} width={w} height={h} rx={r} />
        </clipPath>
      </defs>
      <rect x={x + 8} y={y + 12} width={w} height={h} rx={r} fill="#040507" opacity={0.78} />
      <g clipPath={`url(#bclip-${id})`}>
        <rect x={x} y={y} width={w} height={h} rx={r} fill={bg} />
        <rect x={x} y={y} width={w} height={58} fill="#1C212C" />
        <line x1={x} y1={y + 58} x2={x + w} y2={y + 58} stroke={tint} strokeOpacity={0.35} strokeWidth={1.5} />
        <circle cx={x + 28} cy={y + 29} r={7.5} fill="#EF4444" opacity={0.85} />
        <circle cx={x + 52} cy={y + 29} r={7.5} fill="#F59E0B" opacity={0.85} />
        <circle cx={x + 76} cy={y + 29} r={7.5} fill="#10B981" opacity={0.85} />
        <text x={x + 106} y={y + 39} fontFamily={FONT_SANS} fontWeight={800} fontSize={26} fill="#F4EFE6">
          {title}
        </text>
        {badgeText && (
          <g>
            <rect x={x + w - 210} y={y + 12} width={190} height={34} rx={8} fill={tint} fillOpacity={0.18} stroke={tint} strokeWidth={1.5} />
            <text x={x + w - 115} y={y + 37} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={24} fill={tint}>
              {badgeText}
            </text>
          </g>
        )}
        {children}
      </g>
      <rect x={x} y={y} width={w} height={h} rx={r} fill="none" stroke={tint} strokeOpacity={0.5} strokeWidth={2.2} />
    </g>
  );
};

/** Archival Monograph / Journal Card on warm cotton paper (Adapted from EP01 V4 ActTwo.tsx S04/S05). */
export const PaperMonograph: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  headerText: string;
  title: string;
  subtitle?: string;
  highlightPhrase?: string;
  highlightProg?: number;
  opacity?: number;
  children?: React.ReactNode;
}> = ({ x, y, w, h, headerText, title, subtitle, highlightPhrase, highlightProg = 1, opacity = 1, children }) => {
  const C = PAL.paper;
  return (
    <g opacity={opacity}>
      <rect x={x + 10} y={y + 14} width={w} height={h} rx={10} fill="#141413" opacity={0.12} />
      <rect x={x} y={y} width={w} height={h} rx={10} fill="#FBF8F1" stroke={C.ink} strokeWidth={2.5} />
      <rect x={x} y={y} width={w} height={50} rx={8} fill={C.ink} />
      <rect x={x} y={y + 36} width={w} height={14} fill={C.ink} />
      <text x={x + 28} y={y + 35} fontFamily={FONT_MONO} fontWeight={800} fontSize={26} fill="#FBF8F1">
        {headerText}
      </text>
      <text x={x + 36} y={y + 114} fontFamily={FONT_SERIF} fontWeight={900} fontSize={44} fill={C.ink}>
        {title}
      </text>
      {subtitle && (
        <text x={x + 36} y={y + 158} fontFamily={FONT_SANS} fontWeight={700} fontSize={28} fill={C.soft}>
          {subtitle}
        </text>
      )}
      {highlightPhrase && (
        <g>
          <rect
            x={x + 32}
            y={y + 182}
            width={Math.max(0, (w - 72) * clamp(highlightProg))}
            height={54}
            rx={6}
            fill={C.marker}
            opacity={0.78}
            style={{ mixBlendMode: "multiply" }}
          />
          <text x={x + 44} y={y + 220} fontFamily={FONT_SANS} fontWeight={800} fontSize={32} fill={C.ink}>
            {highlightPhrase}
          </text>
        </g>
      )}
      {children}
    </g>
  );
};

/** Double-bordered Vermilion Chinese Seal Stamp with spring slam (Adapted from EP01 V4 ActTwo.tsx & ActFour.tsx). */
export const SealStamp: React.FC<{
  cx: number;
  cy: number;
  w?: number;
  h?: number;
  text: string;
  subText?: string;
  prog: number;
  angle?: number;
  color?: string;
  bg?: string;
}> = ({ cx, cy, w = 360, h = 98, text, subText, prog, angle = -7, color = "#C83E2B", bg = "rgba(244,239,230,0.94)" }) => {
  if (prog <= 0.01) return null;
  const sc = lerp(1.65, 1.0, clamp(prog, 0, 1.08));
  const op = clamp(prog * 2.2);
  return (
    <g opacity={op} transform={`translate(${cx} ${cy}) rotate(${angle}) scale(${sc.toFixed(4)})`}>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={10} fill={bg} stroke={color} strokeWidth={6} />
      <rect x={-w / 2 + 10} y={-h / 2 + 10} width={w - 20} height={h - 20} rx={5} fill="none" stroke={color} strokeWidth={2} />
      <text
        x={0}
        y={subText ? -6 : 14}
        textAnchor="middle"
        fontFamily={FONT_SANS}
        fontWeight={900}
        fontSize={subText ? 34 : 38}
        fill={color}
      >
        {text}
      </text>
      {subText && (
        <text x={0} y={32} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={26} fill={color}>
          {subText}
        </text>
      )}
    </g>
  );
};

/** Organizational Defense Shield Card (for S04 5-shield corporate breakwater & S05 shield off). */
export const ShieldCard: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub: string;
  active?: boolean;
  opacity?: number;
}> = ({ x, y, w, h, label, sub, active = true, opacity = 1 }) => {
  const color = active ? "#1D4ED8" : "#C83E2B";
  const bg = active ? "#FBF8F1" : "#FEF2F2";
  return (
    <g opacity={opacity}>
      <rect x={x + 4} y={y + 6} width={w} height={h} rx={14} fill="#141413" opacity={0.1} />
      <rect x={x} y={y} width={w} height={h} rx={14} fill={bg} stroke={color} strokeWidth={2.5} />
      {active ? (
        <ShieldCheckIcon x={x + 40} y={y + h / 2} size={42} color={color} />
      ) : (
        <ShieldOffIcon x={x + 40} y={y + h / 2} size={42} color={color} />
      )}
      <text x={x + 74} y={y + h / 2 - 6} fontFamily={FONT_SANS} fontWeight={800} fontSize={28} fill="#141413">
        {label}
      </text>
      <text x={x + 74} y={y + h / 2 + 28} fontFamily={FONT_SANS} fontWeight={600} fontSize={24} fill={color}>
        {sub}
      </text>
    </g>
  );
};

/** High-contrast System / Work Alert Modal Card (for S01, S05, S08). */
export const AlertModalCard: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  detail: string;
  tag?: string;
  opacity?: number;
  onPaper?: boolean;
}> = ({ x, y, w, h, title, detail, tag = "告警", opacity = 1, onPaper = false }) => {
  const bg = onPaper ? "#FFF5F5" : "#1F1215";
  const ink = onPaper ? "#141413" : "#F4EFE6";
  const red = "#C83E2B";
  return (
    <g opacity={opacity}>
      <rect x={x + 6} y={y + 8} width={w} height={h} rx={14} fill="#000" opacity={onPaper ? 0.14 : 0.65} />
      <rect x={x} y={y} width={w} height={h} rx={14} fill={bg} stroke={red} strokeWidth={2.4} />
      <rect x={x} y={y} width={10} height={h} rx={5} fill={red} />
      <AlertTriangleIcon x={x + 38} y={y + h / 2} size={36} color={red} />
      <text x={x + 68} y={y + h / 2 - 6} fontFamily={FONT_SANS} fontWeight={800} fontSize={28} fill={ink}>
        {title}
      </text>
      <text x={x + 68} y={y + h / 2 + 28} fontFamily={FONT_SANS} fontWeight={700} fontSize={24} fill={red}>
        {detail}
      </text>
      {tag && (
        <g>
          <rect x={x + w - 92} y={y + 14} width={76} height={32} rx={6} fill={red} />
          <text x={x + w - 54} y={y + 38} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={800} fontSize={24} fill="#FFF">
            {tag}
          </text>
        </g>
      )}
    </g>
  );
};

/** Fourth-Wall Zhihu 4,172-Upvote Question Card (Directly adapted from EP01 V4 ActFive.tsx CardFace). */
export const ZhihuQuestionCard: React.FC<{
  x?: number;
  y?: number;
  w?: number;
  h?: number;
  beatBProg?: number;
  opacity?: number;
}> = ({ x = 310, y = 175, w = 1300, h = 560, beatBProg = 0, opacity = 1 }) => {
  const lines = [
    "“为什么满屏都在鼓吹一人公司，",
    "我每天工作 14 小时，",
    "却比上班时还要焦虑？”",
  ];
  return (
    <g opacity={opacity}>
      <rect x={x + 12} y={y + 18} width={w} height={h} rx={28} fill="#000" opacity={0.6} />
      <rect x={x} y={y} width={w} height={h} rx={28} fill="#141923" stroke="#2F3B4E" strokeWidth={2.5} />
      {/* Header avatar + Zhihu badge */}
      <circle cx={x + 86} cy={y + 82} r={42} fill="#2563EB" />
      <text x={x + 86} y={y + 97} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={900} fontSize={40} fill="#FFF">
        知
      </text>
      <text x={x + 150} y={y + 76} fontFamily={FONT_SANS} fontWeight={800} fontSize={36} fill="#F4EFE6">
        @独立开发观察
      </text>
      <text x={x + 150} y={y + 114} fontFamily={FONT_SANS} fontWeight={600} fontSize={26} fill="#94A3B8">
        知乎高赞问答 · 创业与独立开发话题
      </text>
      {/* Upvote button pill */}
      <rect x={x + w - 310} y={y + 46} width={250} height={64} rx={14} fill="rgba(37,99,235,0.18)" stroke="#3B82F6" strokeWidth={2} />
      <UpvoteTriangleIcon x={x + w - 270} y={y + 78} size={24} color="#60A5FA" />
      <text x={x + w - 165} y={y + 89} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={900} fontSize={32} fill="#60A5FA">
        4,172 赞同
      </text>
      {/* Quote body */}
      {lines.map((q, i) => (
        <text
          key={i}
          x={x + 76}
          y={y + 225 + i * 78}
          fontFamily={FONT_SERIF}
          fontWeight={800}
          fontSize={52}
          fill="#F4EFE6"
        >
          {q}
        </text>
      ))}
      <line x1={x + 76} y1={y + h - 118} x2={x + w - 76} y2={y + h - 118} stroke="#2A3446" strokeWidth={2} />
      {/* Beat B warm golden awakening note */}
      <g opacity={clamp(beatBProg * 1.8)} transform={`translate(0 ${(1 - clamp(beatBProg)) * 14})`}>
        <rect x={x + 76} y={y + h - 96} width={w - 152} height={68} rx={12} fill="rgba(212,175,55,0.15)" stroke="#D4AF37" strokeWidth={2} />
        <text x={x + w / 2} y={y + h - 50} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={900} fontSize={36} fill="#F59E0B">
          看清幻觉，是破局的第一步。
        </text>
      </g>
    </g>
  );
};

/**
 * Stage L1 Dual-Beat Header Bar (y = 24..88px):
 * Displays `l1A` at `u = 0.0` (x = 390..1100) and keeps `l1A` visible (`opacity = 0.94`) when `l1B` locks in at `beatB` (x = 1130..1860)!
 */
export const StageAnchorHeader: React.FC<{
  t: number;
  start: number;
  beatB: number;
  l1A: string;
  l1B: string;
  onPaper?: boolean;
}> = ({ t, start, beatB, l1A, l1B, onPaper = false }) => {
  const pA = eo(t, start, start + 0.25);
  const pB = eo(t, beatB, beatB + 0.24);
  const hasB = t >= beatB - 0.02;

  const ink = onPaper ? "#141413" : "#F4EFE6";
  const gold = onPaper ? "#9A6B16" : "#D4AF37";
  const red = "#C83E2B";
  const pillBgA = onPaper ? "rgba(20,20,19,0.06)" : "rgba(20,18,16,0.82)";
  const pillBgB = onPaper ? "rgba(200,62,43,0.11)" : "rgba(200,62,43,0.20)";

  return (
    <g>
      {/* Beat A L1 Anchor (Left-aligned at x=390..1100, stays 0.94 opacity all shot) */}
      <g opacity={clamp(0.2 + pA * 0.8) * (hasB ? 0.94 : 1)} transform={`translate(0 ${(1 - pA) * 12})`}>
        <rect x={390} y={24} width={710} height={64} rx={14} fill={pillBgA} stroke={gold} strokeWidth={2.2} />
        <circle cx={424} cy={56} r={8} fill={gold} />
        <text x={448} y={69} fontFamily={FONT_SANS} fontWeight={900} fontSize={38} fill={ink}>
          {l1A}
        </text>
      </g>
      {/* Beat B L1 Anchor (Right-aligned at x=1130..1860, slams in at beatB) */}
      {hasB && (
        <g opacity={clamp(pB * 1.5)} transform={`translate(0 ${(1 - pB) * 12})`}>
          <rect x={1130} y={24} width={730} height={64} rx={14} fill={pillBgB} stroke={red} strokeWidth={2.6} />
          <circle cx={1164} cy={56} r={8} fill={red} />
          <text x={1188} y={69} fontFamily={FONT_SANS} fontWeight={900} fontSize={38} fill={onPaper ? red : "#FFE4E0"}>
            {l1B}
          </text>
        </g>
      )}
    </g>
  );
};

// ───────────── Helper: Highlight 【...】 in Burnished Gold / Vermilion with Downbeat Pop ─────────────
const renderHighlightedText = (raw: string, accentColor: string, kwScale = 1) => {
  const parts = raw.split(/(【[^】]+】)/g).filter(Boolean);
  return parts.map((part, idx) => {
    if (part.startsWith("【") && part.endsWith("】")) {
      return (
        <span
          key={idx}
          style={{
            display: "inline-block",
            color: accentColor,
            fontWeight: 900,
            padding: "0 4px",
            transform: `scale(${kwScale.toFixed(4)})`,
            transformOrigin: "50% 60%",
          }}
        >
          {part.slice(1, -1)}
        </span>
      );
    }
    return <span key={idx}>{part}</span>;
  });
};

/**
 * Top-Left L0 Chapter Pill + Bottom Borderless Non-Vanishing Stacked (Beat A + Beat B) Bilingual Subtitle Overlay:
 * - Beat A enters at `s.start` and stays on screen for the ENTIRE shot (`5.27s – 7.57s`)!
 * - Beat B stacks smoothly below Beat A right on `s.beatB` and holds for `2.80s – 4.50s`!
 */
export const VibeChapterAndSubtitleOverlay: React.FC<{ t: number }> = ({ t }) => {
  const i = shotIndexAt(t);
  const s = SHOTS[i];
  const isB = t >= s.beatB - 0.01;

  const pA = eo(t, s.start, s.start + 0.18);
  const kwPopA = lerp(1.08, 1.0, eo(t, s.start, s.start + 0.26));
  const pB = eo(t, s.beatB, s.beatB + 0.18);
  const kwPopB = lerp(1.09, 1.0, eo(t, s.beatB, s.beatB + 0.26));
  const fadeOut = 1 - seg(t, s.end - 0.06, s.end);

  const onPaper = s.medium === "paper";
  const primaryColor = onPaper ? "#141413" : "#F4EFE6";
  const accentA = onPaper ? "#9A6B16" : "#E5B85B";
  const accentB = "#C83E2B";
  const enColor = onPaper ? "#4A453C" : "#94A3B8";

  const bottomVeil = onPaper
    ? "linear-gradient(180deg, rgba(244,239,230,0) 0%, rgba(244,239,230,0.90) 34%, rgba(244,239,230,0.98) 100%)"
    : "linear-gradient(180deg, rgba(7,9,16,0) 0%, rgba(7,9,16,0.85) 34%, rgba(5,7,14,0.97) 100%)";

  const textShadow = onPaper
    ? "0 1px 0 rgba(255,255,255,0.8)"
    : "0 3px 16px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.9)";

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {/* Top-Left L0 Chapter Pill (6 Chinese chars + center dot, fontSize 26px) */}
      <div
        style={{
          position: "absolute",
          left: 48,
          top: 24,
          height: 56,
          padding: "0 24px",
          borderRadius: 28,
          background: onPaper ? "rgba(20,20,19,0.08)" : "rgba(20,18,16,0.82)",
          border: `2px solid ${onPaper ? "rgba(20,20,19,0.22)" : "rgba(212,175,55,0.42)"}`,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: onPaper ? "#C83E2B" : "#D4AF37",
          }}
        />
        <span
          style={{
            fontFamily: FONT_SANS,
            fontWeight: 800,
            fontSize: 26,
            letterSpacing: "0.04em",
            color: primaryColor,
          }}
        >
          {s.chapter}
        </span>
      </div>

      {/* Bottom Non-Vanishing Stacked Bilingual Subtitle Band (y = 860..1080px) */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 220,
          background: bottomVeil,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 20,
          opacity: fadeOut,
        }}
      >
        {/* Line 1 (Beat A): Enters at shot start and stays visible for the ENTIRE shot (5.27s - 7.57s) */}
        <div
          style={{
            opacity: clamp(0.25 + pA * 0.75) * (isB ? 0.88 : 1.0),
            transform: `translateY(${(1 - pA) * 8}px)`,
            fontFamily: FONT_SERIF,
            fontWeight: 700,
            fontSize: 40,
            lineHeight: 1.24,
            letterSpacing: "0.025em",
            color: primaryColor,
            textShadow,
            textAlign: "center",
            maxWidth: 1760,
            whiteSpace: "nowrap",
          }}
        >
          {renderHighlightedText(s.l2[0], accentA, kwPopA)}
        </div>

        {/* Line 2 (Beat B): Stacks smoothly below Beat A on the mid-shot Kick and holds (2.80s - 4.50s) */}
        <div
          style={{
            opacity: isB ? clamp(0.25 + pB * 0.75) : 0,
            transform: `translateY(${isB ? (1 - pB) * 8 : 10}px)`,
            fontFamily: FONT_SERIF,
            fontWeight: 800,
            fontSize: 43,
            lineHeight: 1.26,
            letterSpacing: "0.025em",
            color: primaryColor,
            textShadow,
            textAlign: "center",
            marginTop: 6,
            maxWidth: 1760,
            whiteSpace: "nowrap",
            minHeight: 54,
          }}
        >
          {renderHighlightedText(s.l2[1], accentB, kwPopB)}
        </div>

        {/* Line 3: Literary English Italic Subtitle */}
        <div
          style={{
            opacity: clamp(0.25 + pA * 0.7) * 0.92,
            fontFamily: "'EB Garamond', 'Instrument Serif', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 22,
            lineHeight: 1.28,
            letterSpacing: "0.01em",
            color: enColor,
            textShadow: onPaper ? "none" : "0 2px 10px rgba(0,0,0,0.9)",
            textAlign: "center",
            marginTop: 6,
            maxWidth: 1760,
            whiteSpace: "nowrap",
          }}
        >
          {isB ? `${s.en[0]} ${s.en[1]}` : s.en[0]}
        </div>
      </div>
    </div>
  );
};
