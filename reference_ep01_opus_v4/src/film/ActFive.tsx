import React from "react";
import { FONT_MONO, FONT_SANS, PAL, clamp, eo, io, lerp, polar, rnd, seg, sp } from "./core";
import { Leader, ThumbIcon } from "./kit";

const C = PAL.obsidian;
const ISLANDS = [
  { x: 560, y: 380, c: C.blue },
  { x: 980, y: 300, c: C.red },
  { x: 1420, y: 400, c: C.green },
  { x: 760, y: 690, c: "#F59E0B" },
  { x: 1250, y: 690, c: C.ink },
];
const N = 250;
const AGENTS = Array.from({ length: N }).map((_, i) => {
  const k = i % 5;
  const isl = ISLANDS[k];
  const a = rnd(i, 41) * Math.PI * 2;
  const rr = Math.sqrt(rnd(i, 42)) * 95;
  return {
    k,
    x0: 180 + rnd(i, 43) * 1560,
    y0: 180 + rnd(i, 44) * 660,
    x1: isl.x + Math.cos(a) * rr,
    y1: isl.y + Math.sin(a) * rr * 0.85,
    d: rnd(i, 45) * 0.9,
  };
});

export const RING = { cx: 900, cy: 510, r: [160, 255, 350] };

export const ActFive: React.FC<{ t: number }> = ({ t }) => {
  const zoomIn = io(t, 88.2, 89.2);
  const pupil = io(t, 95.0, 95.6);
  return (
    <g>
      {t < 89.6 && <Network t={t} out={zoomIn} />}
      {t > 88.2 && t < 96 && <Rings t={t} pupil={pupil} />}
      {t > 95.2 && <Underwater t={t} />}
      {t > 95.3 && <CommentCard t={t} />}
    </g>
  );
};

const Network: React.FC<{ t: number; out: number }> = ({ t, out }) => {
  const tau = t - 82.6;
  const gather = (a: (typeof AGENTS)[number]) => io(tau, 0.8 + a.d, 3.0 + a.d * 0.5);
  const split = io(tau, 0, 1.0);
  const s = lerp(1, 2.6, out);
  const pos = AGENTS.map((a) => {
    const g = gather(a);
    return [lerp(a.x0, a.x1, g), lerp(a.y0, a.y1, g), g] as const;
  });
  return (
    <g opacity={1 - out} transform={`translate(960 470) scale(${s}) translate(-960 -470)`}>
      {/* replicated shields → island rims */}
      {ISLANDS.map((isl, i) => {
        const x = lerp(860, isl.x, split);
        const y = lerp(470, isl.y, split);
        const tight = eo(tau, 2.6 + i * 0.1, 3.4 + i * 0.1);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={lerp(160, 128, split)} fill="none" stroke={isl.c} strokeOpacity={0.25 + tight * 0.5} strokeWidth={2 + tight * 2} strokeDasharray={tight > 0.5 ? "0" : "10 10"} />
          </g>
        );
      })}
      {/* intra-island links */}
      {AGENTS.map((a, i) => {
        const j = i + 5;
        if (j >= N) return null;
        const [x, y, g] = pos[i];
        const [x2, y2, g2] = pos[j];
        const v = seg(Math.min(g, g2), 0.75, 1);
        if (v <= 0) return null;
        return <line key={`l${i}`} x1={x} y1={y} x2={x2} y2={y2} stroke={ISLANDS[a.k].c} strokeOpacity={0.3 * v} strokeWidth={1.2} />;
      })}
      {AGENTS.map((a, i) => {
        const [x, y] = pos[i];
        return <circle key={i} cx={x} cy={y} r={6} fill={ISLANDS[a.k].c} opacity={clamp(eo(tau, 0.2 + a.d * 0.4, 0.8 + a.d * 0.4) * 1.2)} />;
      })}
      {/* L1 row */}
      <g opacity={eo(tau, 0.3, 0.9)}>
        <rect x={150} y={84} width={120} height={56} rx={28} fill={C.grid} stroke={C.dim} strokeWidth={2} />
        <circle cx={178} cy={112} r={20} fill={C.dim} />
        <text x={296} y={126} fontFamily={FONT_MONO} fontWeight={800} fontSize={40} fill={C.ink}>
          Algorithm = OFF
        </text>
        <text x={1770} y={124} textAnchor="end" fontFamily={FONT_SANS} fontWeight={700} fontSize={32} fill={C.ink} opacity={0.75}>
          Geschke et al. · BJSP 2018
        </text>
      </g>
    </g>
  );
};

const RING_META = [
  { label: "个体认知茧房", sub: "确认偏误", color: C.ink },
  { label: "社交回音室", sub: "同质抱团", color: C.blue },
  { label: "算法过滤气泡", sub: "停留加压", color: C.red },
];

const Rings: React.FC<{ t: number; pupil: number }> = ({ t, pupil }) => {
  const tau = t - 88.2;
  const { cx, cy } = RING;
  const lockT = [1.2, 2.3, 3.4]; // 3rd outer ring locks right on S16 Beat B (tau=3.4, Bar 50 = 104.112s)
  const shrink = lerp(1, 0.12, pupil);
  return (
    <g opacity={1 - seg(pupil, 0.6, 1)}>
      {/* couple's screens at the core */}
      <g opacity={eo(tau, 0.4, 1.0)} transform={`translate(${cx} ${cy}) scale(${shrink}) translate(${-cx} ${-cy})`}>
        <rect x={cx - 78} y={cy - 80} width={70} height={130} rx={12} fill="#0E0E10" stroke={PAL.walnut.cyan} strokeWidth={3} />
        <rect x={cx - 70} y={cy - 50} width={54} height={30} rx={5} fill={PAL.walnut.cyan} opacity={0.5} />
        <rect x={cx + 8} y={cy - 80} width={70} height={130} rx={12} fill="#0E0E10" stroke={PAL.walnut.rose} strokeWidth={3} />
        <rect x={cx + 16} y={cy - 50} width={54} height={30} rx={5} fill={PAL.walnut.rose} opacity={0.5} />
        <line x1={cx - 40} y1={cy + 72} x2={cx + 40} y2={cy + 72} stroke={PAL.walnut.amber} strokeWidth={4} />
      </g>
      {RING.r.map((r0, i) => {
        const p = sp(tau, lockT[i] - 0.55, 0.6, 10);
        const locked = seg(tau, lockT[i], lockT[i] + 0.08);
        const r = r0 * lerp(1.35, 1, clamp(p, 0, 1.05)) * shrink;
        const rot = lerp(i % 2 ? -120 : 120, 0, clamp(p, 0, 1));
        const m = RING_META[i];
        const sw = [10, 14, 18][i];
        return (
          <g key={i} opacity={clamp(p * 2)}>
            <g transform={`rotate(${rot} ${cx} ${cy})`}>
              <circle cx={cx} cy={cy} r={r} fill="none" stroke={m.color} strokeWidth={sw} strokeDasharray={locked > 0.5 ? "none" : `${r * 0.5} ${r * 0.12}`} opacity={0.9} />
              {/* lock tooth */}
              <rect x={cx - 14} y={cy - r - 18} width={28} height={36} rx={5} fill={C.ground} stroke={m.color} strokeWidth={4} />
              <rect x={cx - 5} y={cy - r - 8} width={10} height={16} rx={2} fill={m.color} opacity={locked} />
            </g>
          </g>
        );
      })}
      <g opacity={1 - pupil}>
        {RING.r.map((r, i) => {
          const ang = [-35, 5, 38][i];
          const [x, y] = polar(cx, cy, r, ang);
          const targetY = [250, 500, 760][i];
          return (
            <Leader
              key={i}
              x={x}
              y={y}
              dx={1340 - x}
              dy={targetY - y}
              run={30}
              label={RING_META[i].label}
              sub={RING_META[i].sub}
              color={RING_META[i].color === C.ink ? C.ink : RING_META[i].color}
              textColor={C.ink}
              p={eo(tau, lockT[i] + 0.1, lockT[i] + 0.8)}
              size={36}
              weight={800}
            />
          );
        })}
      </g>
    </g>
  );
};

const Underwater: React.FC<{ t: number }> = ({ t }) => {
  const tau = t - 95.0;
  const k = eo(tau, 0.2, 0.9) * (1 - seg(t, 101.2, 101.6));
  return (
    <g opacity={k}>
      <rect x={0} y={0} width={1920} height={1080} fill="#0B2540" opacity={0.35} />
      {Array.from({ length: 7 }).map((_, i) => {
        const yb = 120 + i * 140;
        const ph = tau * 0.6 + i;
        let d = `M 0 ${yb}`;
        for (let x = 0; x <= 1920; x += 60) d += ` L ${x} ${yb + Math.sin(x / 170 + ph) * 14}`;
        return <path key={i} d={d} fill="none" stroke="#7DD3FC" strokeOpacity={0.06} strokeWidth={3} />;
      })}
      {[0, 1, 2].map((i) => {
        const p = seg(tau, 0.35 + i * 0.35, 2.2 + i * 0.35);
        return <ellipse key={i} cx={960} cy={480} rx={200 + p * 900} ry={(200 + p * 900) * 0.5} fill="none" stroke="#7DD3FC" strokeOpacity={(1 - p) * 0.3} strokeWidth={3} />;
      })}
    </g>
  );
};

export const CARD = { x: 340, y: 150, w: 1240, h: 640 };
export const QUOTE = ["“有没有可能，你之所以能刷到", "这个教你怎么破除信息茧房的视频，", "也是信息茧房推给你的？”"];

export const CardFace: React.FC<{ opacity?: number }> = ({ opacity = 1 }) => {
  const { x, y, w, h } = CARD;
  return (
    <g opacity={opacity}>
      <rect x={x + 10} y={y + 16} width={w} height={h} rx={28} fill="#000" opacity={0.5} />
      <rect x={x} y={y} width={w} height={h} rx={28} fill="#151A22" stroke="#2F3846" strokeWidth={2} />
      <circle cx={x + 90} cy={y + 92} r={46} fill="#FB7299" />
      <text x={x + 90} y={y + 108} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={800} fontSize={44} fill="#fff">
        椿
      </text>
      <text x={x + 160} y={y + 86} fontFamily={FONT_SANS} fontWeight={800} fontSize={40} fill={C.ink}>
        @深色椿
      </text>
      <text x={x + 160} y={y + 128} fontFamily={FONT_SANS} fontWeight={600} fontSize={28} fill={C.dim}>
        Bilibili 真实热评
      </text>
      {QUOTE.map((q, i) => (
        <text key={i} x={x + 80} y={y + 270 + i * 88} fontFamily={FONT_SANS} fontWeight={800} fontSize={58} fill={C.ink} letterSpacing={-0.5}>
          {q}
        </text>
      ))}
      <line x1={x + 80} y1={y + h - 120} x2={x + w - 80} y2={y + h - 120} stroke="#2F3846" strokeWidth={2} />
      <ThumbIcon x={x + 110} y={y + h - 62} s={1.3} color="#FB7299" />
      <text x={x + 160} y={y + h - 42} fontFamily={FONT_MONO} fontWeight={800} fontSize={56} fill="#FB7299" letterSpacing={-1}>
        11,219
      </text>
      <text x={x + 380} y={y + h - 46} fontFamily={FONT_SANS} fontWeight={800} fontSize={36} fill={C.ink}>
        赞
      </text>
    </g>
  );
};

const CommentCard: React.FC<{ t: number }> = ({ t }) => {
  const tau = t - 95.0;
  const p = sp(tau, 0.35, 0.55, 10);
  const s = lerp(0.55, 1, clamp(p, 0, 1.05));
  return (
    <g opacity={clamp(p * 2)} transform={`translate(960 470) scale(${s}) translate(-960 -470)`}>
      <CardFace />
    </g>
  );
};
