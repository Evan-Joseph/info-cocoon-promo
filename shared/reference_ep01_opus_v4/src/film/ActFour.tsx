import React from "react";
import { FONT_MONO, FONT_SANS, PAL, clamp, eo, io, lerp, pad, polar, rnd, seg, sp } from "./core";
import { Leader } from "./kit";

const C = PAL.paper;
const GREEN = "#2F855A";

// 1,652 participants: 826 + 826
const COLS = 28;
const PER = 826;
const DOTS = Array.from({ length: PER * 2 }).map((_, i) => {
  const side = i < PER ? -1 : 1;
  const j = i % PER;
  const c = j % COLS;
  const r = Math.floor(j / COLS);
  const x = side < 0 ? 270 + c * 21 : 1083 + c * 21;
  const y = 265 + r * 16.8;
  const sx = 960 + (rnd(i, 1) - 0.5) * 60;
  const sy = 190 + rnd(i, 2) * 330;
  const d = Math.hypot(x - sx, y - sy);
  return { side, x, y, sx, sy, delay: d / 2600 + rnd(i, 3) * 0.12 };
});

export const ActFour: React.FC<{ t: number }> = ({ t }) => {
  const toChart = io(t, 69.4, 70.2);
  const toBrain = io(t, 76.6, 77.6);
  return (
    <g>
      {t < 70.4 && <Sample t={t} burst={toChart} />}
      {t > 69.3 && t < 77.8 && <Chart t={t} push={toBrain} />}
      {t > 76.6 && <Brain t={t} k={toBrain} />}
    </g>
  );
};

const Sample: React.FC<{ t: number; burst: number }> = ({ t, burst }) => {
  const tau = t - 58.2;
  const tau12 = t - 63.6;
  const days = Math.max(1, Math.round(lerp(1, 30, io(tau12, 0.3, 3.8))));
  const s12 = eo(tau12, 0, 0.6);
  const streams = seg(tau12, 0.3, 0.9) * (1 - burst);
  const dots = DOTS.map((d, i) => {
    const p = sp(tau, 0.15 + d.delay, 0.7, 10);
    let x = lerp(d.sx, d.x, clamp(p, 0, 1.05));
    let y = lerp(d.sy, d.y, clamp(p, 0, 1.05));
    if (burst > 0) {
      x += d.side * burst * (300 + rnd(i, 5) * 500);
      y += (rnd(i, 6) - 0.5) * burst * 300;
    }
    return <circle key={i} cx={x} cy={y} r={6.5} fill={d.side < 0 ? C.cobalt : C.vermilion} opacity={clamp(p * 4) * (1 - burst)} />;
  });
  // glass shards
  const shard = seg(tau, 0, 0.9);
  return (
    <g>
      {shard < 1 &&
        Array.from({ length: 16 }).map((_, i) => {
          const a = rnd(i, 11) * 360;
          const dist = shard * (200 + rnd(i, 12) * 400);
          const [x, y] = polar(960, 300 + rnd(i, 13) * 180, dist, a);
          return (
            <path
              key={i}
              d={`M ${x} ${y} l ${18 + rnd(i, 14) * 20} ${8} l ${-10} ${22 + rnd(i, 15) * 20} Z`}
              fill={C.cobalt}
              fillOpacity={0.15}
              stroke={C.ink}
              strokeOpacity={0.5}
              transform={`rotate(${shard * 200 * (rnd(i, 16) - 0.5)} ${x} ${y})`}
              opacity={1 - shard}
            />
          );
        })}
      {dots}
      {/* L1 */}
      <g opacity={(1 - burst) * eo(tau, 0.8, 1.4)}>
        <g opacity={1 - s12}>
          <text x={270} y={160} fontFamily={FONT_SANS} fontWeight={800} fontSize={56} fill={C.ink}>
            PNAS 2018 · 杜克大学
          </text>
        </g>
        <g opacity={s12}>
          <text x={270} y={160} fontFamily={FONT_SANS} fontWeight={800} fontSize={56} fill={C.ink}>
            连续 30 天 × 24 条异见/日
          </text>
        </g>
        <text x={1650} y={170} textAnchor="end" fontFamily={FONT_MONO} fontWeight={800} fontSize={lerp(88, 56, s12)} fill={C.vermilion} letterSpacing={-2}>
          N = 1,652
        </text>
      </g>
      <g opacity={(1 - burst) * eo(tau, 1.6, 2.2)}>
        <text x={553} y={812} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={800} fontSize={32} fill={C.cobalt}>
          自由派
        </text>
        <text x={1367} y={812} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={800} fontSize={32} fill={C.vermilion}>
          保守派
        </text>
      </g>
      {/* S12 calendar + streams */}
      {tau12 > 0 && (
        <g opacity={(1 - burst) * s12}>
          <rect x={870} y={300} width={180} height={124} rx={12} fill="#FBF8F1" stroke={C.ink} strokeWidth={2.5} />
          <rect x={870} y={300} width={180} height={36} rx={12} fill={C.ink} />
          <rect x={870} y={322} width={180} height={14} fill={C.ink} />
          <text x={960} y={329} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={24} fill="#FBF8F1">
            DAY
          </text>
          <text x={960} y={404} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={64} fill={C.ink}>
            {pad(days)}
          </text>
          {Array.from({ length: 48 }).map((_, k) => {
            const dir = k % 2 === 0 ? 1 : -1;
            const lane = Math.floor(k / 2) % 12;
            const y = 470 + lane * 28 + (dir > 0 ? 0 : 12);
            const ph = (tau12 * 0.55 + rnd(k, 21)) % 1;
            const x = dir > 0 ? lerp(700, 1220, ph) : lerp(1220, 700, ph);
            const col = dir > 0 ? C.cobalt : C.vermilion;
            const fade = Math.sin(Math.PI * ph);
            return <rect key={k} x={x - 14} y={y - 3} width={28} height={6} rx={3} fill={col} opacity={streams * fade} />;
          })}
          <line x1={960} y1={450} x2={960} y2={820} stroke={C.ink} strokeWidth={2} strokeDasharray="6 8" opacity={0.4} />
        </g>
      )}
    </g>
  );
};

// chart geometry — honest: start height h0, actual end = 2×h0 (+100%)
const X0 = 380;
const X1 = 1500;
const BASE = 800;
const Y0 = 580; // h0 = 220
const YR = BASE - 2 * (BASE - Y0); // 360
const RED = [
  [X0, Y0],
  [660, 560],
  [940, 505],
  [1220, 420],
  [X1, YR],
];
const polyLen = (pts: number[][]) => pts.slice(1).reduce((s, p, i) => s + Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]), 0);
const RED_LEN = polyLen(RED);

const Chart: React.FC<{ t: number; push: number }> = ({ t, push }) => {
  const tau = t - 69.4;
  const axes = eo(tau, 0.2, 0.9);
  const green = io(tau, 0.6, 2.2);
  const red = clamp(sp(tau, 3.1, 0.5, 9), 0, 1.04); // Rockets up right for S13 Beat B (tau=3.6, Bar 38 = 79.093s)
  const blue = io(tau, 2.7, 3.5);
  const stamp = sp(tau, 3.6, 0.42, 15); // Slams right on S13 Beat B (tau=3.6, Bar 38 = 79.093s STRONG_PHRASE)
  const s = lerp(1, 5, push);
  return (
    <g opacity={1 - push} transform={`translate(${X1} ${YR}) scale(${s}) translate(${-X1} ${-YR})`}>
      <g opacity={axes}>
        <line x1={X0} y1={BASE} x2={1560} y2={BASE} stroke={C.ink} strokeWidth={3} />
        <line x1={X0} y1={BASE} x2={X0} y2={250} stroke={C.ink} strokeWidth={3} />
        <text x={X0} y={226} fontFamily={FONT_SANS} fontWeight={800} fontSize={32} fill={C.ink}>
          政治极化度
        </text>
        <line x1={X0} y1={Y0} x2={1560} y2={Y0} stroke={C.ink} strokeWidth={1.5} strokeDasharray="3 8" opacity={0.45} />
        <line x1={X0} y1={YR} x2={1560} y2={YR} stroke={C.vermilion} strokeWidth={1.5} strokeDasharray="3 8" opacity={0.5} />
        <text x={X0 - 18} y={Y0 + 10} textAnchor="end" fontFamily={FONT_MONO} fontWeight={700} fontSize={30} fill={C.ink}>
          1×
        </text>
        <text x={X0 - 18} y={YR + 10} textAnchor="end" fontFamily={FONT_MONO} fontWeight={700} fontSize={30} fill={C.vermilion}>
          2×
        </text>
        <text x={X0} y={848} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={700} fontSize={30} fill={C.ink}>
          实验前
        </text>
        <text x={X1} y={848} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={700} fontSize={30} fill={C.ink}>
          30 天后
        </text>
      </g>
      {/* expected: converge (green dashed) */}
      <line x1={X0} y1={Y0} x2={lerp(X0, X1, green)} y2={lerp(Y0, 690, green)} stroke={GREEN} strokeWidth={5} strokeDasharray="16 12" />
      {/* liberals: slight rise, n.s. */}
      <line x1={X0} y1={Y0} x2={lerp(X0, X1, blue)} y2={lerp(Y0, 548, blue)} stroke={C.cobalt} strokeWidth={4} opacity={0.6} />
      {/* actual: conservatives double */}
      <polyline
        points={RED.map((p) => p.join(",")).join(" ")}
        fill="none"
        stroke={C.vermilion}
        strokeWidth={8}
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeDasharray={RED_LEN}
        strokeDashoffset={RED_LEN * (1 - red)}
      />
      <circle cx={X0} cy={Y0} r={10} fill={C.ink} opacity={axes} />
      <circle cx={X1} cy={YR} r={12} fill={C.vermilion} opacity={seg(red, 0.9, 1)} />
      <Leader x={X1} y={690} dx={40} dy={20} run={20} label="预期收敛 ↘" color={GREEN} textColor={GREEN} p={eo(tau, 1.5, 2.2)} size={32} weight={800} />
      <Leader x={X1} y={548} dx={40} dy={10} run={20} label="自由派" color={C.cobalt} textColor={C.cobalt} p={eo(tau, 3.1, 3.7)} size={30} />
      <Leader x={X1} y={YR} dx={40} dy={-60} run={20} label="保守派 · 实测" color={C.vermilion} textColor={C.vermilion} p={eo(tau, 3.3, 3.9)} size={32} weight={800} />
      {/* +100% stamp */}
      {tau > 3.5 && (
        <g opacity={clamp(stamp * 2)} transform={`translate(1020 290) rotate(-6) scale(${lerp(1.8, 1, clamp(stamp, 0, 1.1))})`}>
          <rect x={-260} y={-70} width={520} height={130} rx={10} fill="#F3EFE6" stroke={C.vermilion} strokeWidth={7} />
          <text x={0} y={-14} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={900} fontSize={36} fill={C.vermilion}>
            实测极化翻倍
          </text>
          <text x={0} y={46} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={60} fill={C.vermilion} letterSpacing={-2}>
            +100% ↗
          </text>
        </g>
      )}
    </g>
  );
};

// procedural ink brain
const BCX = 860;
const BCY = 470;
const brainPath = (() => {
  const pts: string[] = [];
  for (let i = 0; i <= 240; i++) {
    const th = (i / 240) * Math.PI * 2;
    const bump = 1 + 0.035 * Math.sin(th * 13) + 0.02 * Math.sin(th * 7 + 1);
    const flat = Math.sin(th) > 0 ? 0.78 : 1;
    const x = BCX + 330 * Math.cos(th) * bump;
    const y = BCY + 240 * Math.sin(th) * bump * flat;
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return "M " + pts.join(" L ") + " Z";
})();
const GYRI = [
  "M 620 380 C 680 330 760 400 820 350 C 880 300 940 370 1000 330",
  "M 590 470 C 660 430 720 500 800 450 C 880 400 950 470 1040 420",
  "M 640 560 C 700 520 780 590 860 540",
  "M 900 260 C 880 320 940 360 910 420",
  "M 1080 340 C 1120 380 1100 440 1150 470",
  "M 740 250 C 760 300 720 330 750 380",
];
const HEX = (() => {
  const out: { x: number; y: number; a: number }[] = [];
  const R = [360, 412];
  R.forEach((rr, li) => {
    const n = li === 0 ? 15 : 17;
    for (let i = 0; i < n; i++) {
      const a = -62 + (i / (n - 1)) * 124;
      const [x, y] = polar(BCX, BCY, rr, a);
      out.push({ x, y, a });
    }
  });
  return out;
})();
const hexD = (x: number, y: number, s: number) => {
  const p: string[] = [];
  for (let k = 0; k < 6; k++) {
    const [px, py] = polar(x, y, s, k * 60 + 30);
    p.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  return "M " + p.join(" L ") + " Z";
};

const Brain: React.FC<{ t: number; k: number }> = ({ t, k }) => {
  const tau = t - 76.6;
  const s = lerp(0.35, 1, k);
  const ox = lerp(X1 - BCX, 0, k);
  const oy = lerp(YR - BCY, 0, k);
  // heartbeat pulses (lub-dub) at 77.0 / 77.3 and again at 78.6
  const pulse = (a: number) => Math.exp(-((tau - a) ** 2) / 0.012);
  const alarm = Math.max(pulse(0.4), pulse(0.7) * 0.7, pulse(2.0) * 0.8, pulse(2.3) * 0.5);
  const alarmOn = seg(tau, 0.35, 0.5);
  return (
    <g opacity={k} transform={`translate(${ox} ${oy}) translate(${BCX} ${BCY}) scale(${s}) translate(${-BCX} ${-BCY})`}>
      <path d={brainPath} fill="#FBF8F1" stroke={C.ink} strokeWidth={5} />
      {GYRI.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={C.ink} strokeWidth={3} opacity={0.55} />
      ))}
      <path d="M 720 630 C 712 690 726 740 706 810" fill="none" stroke={C.ink} strokeWidth={30} strokeLinecap="round" />
      <path d="M 720 630 C 712 690 726 740 706 810" fill="none" stroke="#FBF8F1" strokeWidth={22} strokeLinecap="round" />
      <ellipse cx={640} cy={630} rx={105} ry={58} fill="#FBF8F1" stroke={C.ink} strokeWidth={4} />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M ${552 + i * 10} ${612 + i * 16} C 600 ${598 + i * 16} 670 ${606 + i * 16} ${728 - i * 8} ${618 + i * 14}`} fill="none" stroke={C.ink} strokeWidth={2.5} opacity={0.5} />
      ))}
      {/* amygdala */}
      <circle cx={960} cy={560} r={30 + alarm * 70} fill={C.vermilion} opacity={alarm * 0.25} />
      <ellipse cx={960} cy={560} rx={34} ry={20} transform="rotate(-20 960 560)" fill={alarmOn > 0 ? C.vermilion : "#FBF8F1"} stroke={C.vermilion} strokeWidth={4} />
      <Leader x={946} y={572} dx={-300} dy={190} run={30} label="杏仁核警报" color={C.vermilion} textColor={C.vermilion} p={eo(tau, 0.6, 1.3)} size={40} weight={800} />
      {/* hex armor */}
      {HEX.map((h, i) => {
        const p = sp(tau, 1.2 + Math.abs(h.a) / 130 + (i % 3) * 0.04, 0.55, 14);
        return (
          <path
            key={i}
            d={hexD(h.x, h.y, 30 * clamp(p, 0, 1.1))}
            fill={C.ink}
            fillOpacity={0.07}
            stroke={C.ink}
            strokeWidth={2.5}
            opacity={clamp(p * 2)}
          />
        );
      })}
      <Leader x={HEX[3].x + 20} y={HEX[3].y - 20} dx={70} dy={-60} run={30} label="身份防御护盾" color={C.ink} p={eo(tau, 2.4, 3.1)} size={40} weight={800} />
      {/* opposing-view arrows */}
      {[0, 1, 2, 3, 4].map((a) => {
        const st = a === 0 ? -0.1 : 1.4 + a * 0.42;
        const ang = [8, -28, 30, -6, 20][a];
        const hitR = a === 0 ? 0 : 440;
        const [hx, hy] = a === 0 ? [975, 556] : polar(BCX, BCY, hitR, ang);
        const sx = 1900;
        const sy = hy + (a === 0 ? -120 : (rnd(a, 31) - 0.5) * 120);
        const fly = seg(tau, st, st + 0.5);
        const back = seg(tau, st + 0.5, st + 1.3);
        if (tau < st || back >= 1) return null;
        const x = back > 0 ? lerp(hx, hx + 420, back) : lerp(sx, hx, fly);
        const y = back > 0 ? lerp(hy, hy + (ang > 0 ? 300 : -300), back) : lerp(sy, hy, fly);
        const dirx = back > 0 ? 1 : -1;
        return (
          <g key={a} opacity={1 - back}>
            <line x1={x} y1={y} x2={x - dirx * 90} y2={y - (back > 0 ? (ang > 0 ? 60 : -60) : (hy - sy) * 0.18)} stroke={C.cobalt} strokeWidth={6} strokeLinecap="round" />
            <circle cx={x} cy={y} r={9} fill={C.cobalt} />
          </g>
        );
      })}
      <text x={1640} y={250} textAnchor="end" fontFamily={FONT_SANS} fontWeight={800} fontSize={36} fill={C.cobalt} opacity={eo(tau, 0.2, 0.7) * (1 - seg(tau, 4.0, 4.4))}>
        ← 异见
      </text>
    </g>
  );
};
