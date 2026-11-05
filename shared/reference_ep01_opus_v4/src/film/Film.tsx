import React from "react";
import { FONT_SANS, FONT_SERIF, H, PAL, SHOTS, W, beatPulseAt, clamp, eo, io, lerp, seg, shotIndexAt } from "./core";
import { ActOne } from "./ActOne";
import { ActTwo } from "./ActTwo";
import { ActThree } from "./ActThree";
import { ActFour } from "./ActFour";
import { ActFive } from "./ActFive";
import { ActSix } from "./ActSix";

// ───────────── physical media grounds ─────────────
const walnutBg: React.CSSProperties = {
  background: `radial-gradient(ellipse 75% 65% at 50% 45%, rgba(245,158,11,0.09), rgba(0,0,0,0) 72%), radial-gradient(ellipse 120% 90% at 50% 50%, ${PAL.walnut.ground} 55%, #0A0908 100%)`,
};
const paperBg: React.CSSProperties = {
  backgroundColor: PAL.paper.ground,
  backgroundImage: `linear-gradient(${PAL.paper.rule} 1px, transparent 1px), linear-gradient(90deg, ${PAL.paper.rule} 1px, transparent 1px), radial-gradient(ellipse 90% 80% at 50% 50%, rgba(255,255,255,0.35), rgba(120,100,60,0.08))`,
  backgroundSize: "40px 40px, 40px 40px, 100% 100%",
};
const obsidianBg: React.CSSProperties = {
  backgroundColor: PAL.obsidian.ground,
  backgroundImage: `radial-gradient(ellipse 70% 55% at 50% 44%, rgba(37,99,235,0.10), transparent 72%), linear-gradient(${PAL.obsidian.grid} 1px, transparent 1px), linear-gradient(90deg, ${PAL.obsidian.grid} 1px, transparent 1px), linear-gradient(rgba(34,40,52,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(34,40,52,0.35) 1px, transparent 1px)`,
  backgroundSize: "100% 100%, 120px 120px, 120px 120px, 24px 24px, 24px 24px",
  backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0",
};
const dawnBg = (k: number): React.CSSProperties => ({
  background: `radial-gradient(ellipse ${lerp(35, 92, k)}% ${lerp(30, 80, k)}% at 50% 15%, rgba(245,158,11,${lerp(0.16, 0.36, k)}), rgba(16,185,129,${lerp(0.04, 0.14, k)}) 55%, rgba(0,0,0,0) 80%), ${PAL.walnut.ground}`,
});

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 1.2 -0.1'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>\")";

interface LayerDef {
  key: string;
  from: number;
  to: number;
  bg: (t: number) => React.CSSProperties;
  clip?: (t: number) => string | undefined;
  render: (t: number) => React.ReactNode;
  grain: number;
}

const iris = (x: number, y: number, a: number, b: number) => (t: number) => {
  if (t >= b) return undefined;
  const r = lerp(0, 2300, io(t, a, b));
  return `circle(${r.toFixed(1)}px at ${x}px ${y}px)`;
};

const LAYERS: LayerDef[] = [
  { key: "a1", from: 0, to: 17.6, bg: () => walnutBg, render: (t) => <ActOne t={t} />, grain: 0.08 },
  {
    key: "a2",
    from: 16.8,
    to: 35.1,
    bg: () => paperBg,
    clip: (t) => {
      if (t >= 17.7) return undefined;
      const w = lerp(4, 980, io(t, 16.8, 17.7));
      return `inset(0px ${(960 - w).toFixed(1)}px 0px ${(960 - w).toFixed(1)}px)`;
    },
    render: (t) => <ActTwo t={t} />,
    grain: 0.05,
  },
  { key: "a3", from: 34.3, to: 59.0, bg: () => obsidianBg, clip: iris(900, 220, 34.3, 35.1), render: (t) => <ActThree t={t} />, grain: 0.05 },
  { key: "a4", from: 58.1, to: 83.4, bg: () => paperBg, clip: iris(960, 190, 58.1, 58.9), render: (t) => <ActFour t={t} />, grain: 0.05 },
  { key: "a5", from: 82.5, to: 102.2, bg: () => obsidianBg, clip: iris(860, 470, 82.5, 83.4), render: (t) => <ActFive t={t} />, grain: 0.05 },
  {
    key: "a6",
    from: 101.4,
    to: 120.1,
    bg: (t) => dawnBg(eo(t, 101.4, 104)),
    clip: iris(960, 470, 101.4, 102.2),
    render: (t) => <ActSix t={t} />,
    grain: 0.08,
  },
];

export const Film: React.FC<{ t: number }> = ({ t }) => {
  const bp = beatPulseAt(t);
  return (
    <div style={{ position: "relative", width: W, height: H, overflow: "hidden", background: "#000", fontFamily: FONT_SANS }}>
      {/* Beat-locked stage container (2-Bar Phrase Downbeat Impulse + Quarter-Note Kick Breath + Pre-Drop Vacuum Draw) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${bp.scale.toFixed(5)})`,
          transformOrigin: "50% 46%",
        }}
      >
        {LAYERS.filter((l) => t >= l.from && t <= l.to).map((l) => {
          const clip = l.clip?.(t);
          return (
            <div key={l.key} style={{ position: "absolute", inset: 0, ...l.bg(t), clipPath: clip, WebkitClipPath: clip }}>
              <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                {l.render(t)}
              </svg>
              <div style={{ position: "absolute", inset: 0, backgroundImage: GRAIN, opacity: l.grain, mixBlendMode: "overlay", pointerEvents: "none" }} />
            </div>
          );
        })}
      </div>
      {/* Pre-Drop Vacuum Tension Vignette (Bars 07, 31, 55) */}
      {bp.vignette > 0.001 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 68% 62% at 50% 46%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.85) 100%)",
            opacity: bp.vignette,
            pointerEvents: "none",
          }}
        />
      )}
      {/* 3-Drop Downbeat Shockwave Flash (Bars 08, 32, 56) */}
      {bp.flash > 0.001 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 85% 75% at 50% 46%, rgba(255,243,214,0.95) 0%, rgba(245,158,11,0.35) 55%, rgba(0,0,0,0) 100%)",
            opacity: bp.flash,
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />
      )}
      <VibeFiveZoneOverlay t={t} />
      {/* end-of-film breath */}
      <div style={{ position: "absolute", inset: 0, background: "#000", opacity: seg(t, 119.2, 120) * 0.55, pointerEvents: "none" }} />
    </div>
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

// ───────────── Pure Cinema Bilingual Serif Subtitle Overlay (Zero HUD Clutter / Zero Pill Box) ─────────────
const VibeFiveZoneOverlay: React.FC<{ t: number }> = ({ t }) => {
  const i = shotIndexAt(t);
  const s = SHOTS[i];
  const D = s.end - s.start;
  const aIn = s.start + 0.01;
  const bIn = s.start + D * 0.5;
  const isB = t >= bIn;
  const zhText = isB ? s.l2[1] : s.l2[0];
  const enText = isB ? s.en[1] : s.en[0];
  const tin = isB ? bIn : aIn;
  const tout = isB ? s.end - 0.02 : bIn - 0.02;

  const p = eo(t, tin, tin + 0.18);
  const kwPop = lerp(1.09, 1.0, eo(t, tin, tin + 0.26));
  const fade = 1 - seg(t, tout - 0.08, tout);
  const op = t < tin ? 0 : clamp(0.25 + p * 0.95) * fade;

  const onPaper = s.medium === "paper";
  const primaryColor = onPaper ? "#141413" : "#F3E9D2";
  const accentColor = onPaper ? "#B53A2F" : "#E5B85B";
  const enColor = onPaper ? "#5C564B" : "#94A3B8";

  // Bottom seamless gradient veil (so borderless typography is 100% legible without a pill box)
  const bottomVeil = onPaper
    ? "linear-gradient(180deg, rgba(243,239,230,0) 0%, rgba(243,239,230,0.88) 42%, rgba(243,239,230,0.97) 100%)"
    : "linear-gradient(180deg, rgba(7,9,18,0) 0%, rgba(7,9,18,0.80) 44%, rgba(5,7,14,0.95) 100%)";

  const textShadow = onPaper
    ? "0 1px 0 rgba(255,255,255,0.75)"
    : "0 3px 18px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.9)";

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {/* ── Borderless Bilingual Serif Narrative (Primary Chinese Serif + Literary English Italic) ── */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 180,
          background: bottomVeil,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 28,
        }}
      >
        {/* Line 1: Borderless Primary Chinese Serif Narrative */}
        <div
          style={{
            opacity: op,
            transform: `translateY(${(1 - p) * 9}px)`,
            fontFamily: FONT_SERIF,
            fontWeight: 700,
            fontSize: 47,
            lineHeight: 1.24,
            letterSpacing: "0.03em",
            color: primaryColor,
            textShadow,
            textAlign: "center",
            maxWidth: 1720,
            whiteSpace: "nowrap",
          }}
        >
          {renderHighlightedText(zhText, accentColor, kwPop)}
        </div>

        {/* Line 2: Bilingual Literary English Italic Subtitle */}
        <div
          style={{
            opacity: op * 0.92,
            transform: `translateY(${(1 - p) * 6}px)`,
            fontFamily: "'EB Garamond', 'Instrument Serif', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 23,
            lineHeight: 1.3,
            letterSpacing: "0.015em",
            color: enColor,
            textShadow: onPaper ? "none" : "0 2px 10px rgba(0,0,0,0.9)",
            textAlign: "center",
            marginTop: 7,
            maxWidth: 1620,
            whiteSpace: "nowrap",
          }}
        >
          {enText}
        </div>
      </div>
    </div>
  );
};
