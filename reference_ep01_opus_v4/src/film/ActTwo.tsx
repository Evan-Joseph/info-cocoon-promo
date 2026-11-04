import React from "react";
import { FONT_MONO, FONT_SANS, FONT_SERIF, PAL, clamp, eo, io, lerp, rnd, seg, sp } from "./core";
import { Leader } from "./kit";

const C = PAL.paper;

/** helix-wound cocoon as a single polyline */
export function cocoonPath(cx: number, cy: number, rx: number, ry: number, turns = 14, n = 520): string {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const s = i / n;
    const th = s * Math.PI * 2 * turns;
    const prof = Math.sin(Math.PI * s) ** 0.8;
    const x = cx + rx * prof * Math.cos(th) * (0.92 + 0.08 * Math.sin(s * 31));
    const y = cy - ry * Math.cos(Math.PI * s) + ry * 0.08 * Math.sin(th);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return "M " + pts.join(" L ");
}
const COCOON = cocoonPath(1380, 470, 150, 240);
const COCOON_LEN = 14 * 2 * Math.PI * 110 + 600;

const yearX = (y: number) => 240 + (y - 2006) * 72;

export const ActTwo: React.FC<{ t: number }> = ({ t }) => {
  const T0 = 16.8;
  const tau = t - T0;

  // ── S04 seam: zipper line rotates into timeline
  const rot = io(tau, 0, 0.85);
  const lineCy = lerp(666, 250, rot);
  const lineLen = lerp(348, 1440, rot);
  const ang = lerp(90, 0, rot);
  const ticks = eo(tau, 0.6, 1.2);
  const yearK = io(tau, 0.9, 2.1);
  const yearVal = lerp(2026, 2006, yearK);
  const cardLand = sp(tau, 1.35, 0.5, 13);
  const cardIn = clamp(cardLand * 3);
  const stamp = sp(tau, 2.7, 0.45, 16); // Locked to S04 Beat B (Bar 10 = 20.714s STRONG_PHRASE)

  // ── S05 push-in
  const push = io(t, 22.2, 23.2);
  const hl = eo(t, 23.3, 24.2);
  const wind = io(t, 25.05, 26.85); // Locked to S05 Beat B (Bar 14 = 29.054s STRONG_PHRASE)
  // ── S06 bars
  const unwind = io(t, 28.0, 28.8);
  const pull = io(t, 28.0, 29.2); // camera pull back
  const S04vis = 1 - push;
  const pageVis = clamp(push * 1.4) * (1 - seg(t, 28.0, 28.7));

  return (
    <g>
      {/* ───────── S04 ───────── */}
      {t < 23.4 && (
        <g opacity={S04vis} transform={`translate(960 595) scale(${lerp(1, 2.4, push)}) translate(-960 -595)`}>
          {/* timeline */}
          <g transform={`translate(960 ${lineCy}) rotate(${ang})`}>
            <line x1={-lineLen / 2} y1={0} x2={lineLen / 2} y2={0} stroke={rot < 0.5 ? PAL.walnut.amber : C.ink} strokeWidth={4} />
          </g>
          <g opacity={ticks}>
            {Array.from({ length: 21 }).map((_, i) => {
              const yr = 2006 + i;
              const major = i % 5 === 0;
              return (
                <g key={i}>
                  <line x1={yearX(yr)} y1={250} x2={yearX(yr)} y2={major ? 274 : 262} stroke={C.ink} strokeWidth={major ? 3 : 1.5} />
                  {major && (
                    <text x={yearX(yr)} y={308} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={600} fontSize={28} fill={C.ink} opacity={0.7}>
                      {yr}
                    </text>
                  )}
                </g>
              );
            })}
            {[
              { yr: 2012, label: "今日头条" },
              { yr: 2016, label: "抖音" },
            ].map((b) => {
              const strike = seg(2026 - yearVal, 2026 - b.yr, 2026 - b.yr + 1.5);
              const bx = yearX(b.yr);
              return (
                <g key={b.yr} opacity={0.85}>
                  <rect x={bx - 78} y={150} width={156} height={64} rx={10} fill="none" stroke={C.soft} strokeWidth={2.5} strokeDasharray="8 6" />
                  <text x={bx} y={193} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={700} fontSize={30} fill={C.soft}>
                    {b.label}
                  </text>
                  <line x1={bx - 86} y1={226} x2={lerp(bx - 86, bx + 86, strike)} y2={lerp(226, 140, strike)} stroke={C.vermilion} strokeWidth={4} />
                  <line x1={bx} y1={214} x2={bx} y2={250} stroke={C.soft} strokeWidth={2} strokeDasharray="4 4" />
                </g>
              );
            })}
            {/* marker */}
            <g transform={`translate(${yearX(yearVal)} 0)`}>
              <line x1={0} y1={226} x2={0} y2={274} stroke={C.vermilion} strokeWidth={5} />
              <path d="M -14 212 L 14 212 L 0 230 Z" fill={C.vermilion} />
            </g>
          </g>
          {/* L1 year */}
          <g opacity={ticks}>
            <text x={240} y={112} fontFamily={FONT_MONO} fontWeight={800} fontSize={88} fill={C.vermilion} letterSpacing={-3}>
              {Math.round(yearVal)}
            </text>
            <text x={500} y={108} fontFamily={FONT_SERIF} fontWeight={800} fontSize={60} fill={C.ink} opacity={eo(tau, 2.0, 2.6)}>
              《Infotopia》
            </text>
          </g>
          {/* archive card */}
          {tau > 1.2 && (
            <g opacity={cardIn} transform={`translate(960 600) scale(${lerp(1.35, 1, clamp(cardLand, 0, 1.08))}) translate(-960 -600)`}>
              <rect x={588} y={354} width={760} height={520} rx={6} fill="#141413" opacity={0.12 * cardIn} transform="translate(10 14)" />
              <rect x={580} y={346} width={760} height={520} rx={6} fill="#ECE5D3" stroke={C.ink} strokeWidth={2.5} />
              <rect x={580} y={346} width={760} height={44} fill={C.ink} />
              <text x={604} y={378} fontFamily={FONT_MONO} fontWeight={700} fontSize={26} fill="#ECE5D3">
                ARCHIVE · 2006 · HARVARD LAW
              </text>
              {/* book cover */}
              <rect x={616} y={420} width={290} height={410} fill="#1E2A4A" />
              <rect x={632} y={436} width={258} height={378} fill="none" stroke="#C9B98F" strokeWidth={2} />
              <text x={761} y={540} textAnchor="middle" fontFamily={FONT_SERIF} fontWeight={800} fontSize={38} fill="#F3EFE6" letterSpacing={1}>
                INFOTOPIA
              </text>
              <line x1={680} y1={566} x2={842} y2={566} stroke="#C9B98F" strokeWidth={2} />
              <text x={761} y={610} textAnchor="middle" fontFamily={FONT_SERIF} fontWeight={600} fontSize={26} fill="#C9B98F">
                How Many Minds
              </text>
              <text x={761} y={644} textAnchor="middle" fontFamily={FONT_SERIF} fontWeight={600} fontSize={26} fill="#C9B98F">
                Produce Knowledge
              </text>
              <text x={761} y={780} textAnchor="middle" fontFamily={FONT_SERIF} fontWeight={700} fontSize={28} fill="#F3EFE6">
                Cass R. Sunstein
              </text>
              {/* metadata */}
              <text x={940} y={482} fontFamily={FONT_SANS} fontWeight={800} fontSize={36} fill={C.ink}>
                凯斯 · 桑斯坦
              </text>
              <text x={940} y={532} fontFamily={FONT_SANS} fontWeight={600} fontSize={28} fill={C.ink} opacity={0.7}>
                哈佛法学院
              </text>
              <line x1={940} y1={576} x2={1300} y2={576} stroke={C.ink} strokeWidth={1.5} opacity={0.3} />
              <text x={940} y={642} fontFamily={FONT_SERIF} fontWeight={800} fontSize={36} fill={C.cobalt}>
                Information Cocoons
              </text>
              {/* stamp */}
              {tau > 2.6 && (
                <g
                  opacity={clamp(stamp * 2)}
                  transform={`translate(1130 770) rotate(-8) scale(${lerp(1.6, 1, clamp(stamp, 0, 1.1))})`}
                >
                  <rect x={-190} y={-52} width={380} height={96} rx={8} fill="none" stroke={C.vermilion} strokeWidth={6} />
                  <rect x={-180} y={-42} width={360} height={76} rx={4} fill="none" stroke={C.vermilion} strokeWidth={2} />
                  <text x={0} y={12} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={900} fontSize={36} fill={C.vermilion}>
                    “信息茧房”首提
                  </text>
                </g>
              )}
            </g>
          )}
        </g>
      )}

      {/* ───────── S05 page ───────── */}
      {t > 22.2 && t < 28.8 && (
        <g opacity={pageVis} transform={`translate(960 480) scale(${lerp(0.62, 1, push) * lerp(1, 0.9, pull)}) translate(-960 -480)`}>
          <rect x={232} y={92} width={1456} height={790} fill="#141413" opacity={0.08} transform="translate(8 12)" />
          <rect x={232} y={92} width={1456} height={790} fill="#FBF8F1" stroke={C.ink} strokeOpacity={0.25} strokeWidth={2} />
          <line x1={1060} y1={120} x2={1060} y2={850} stroke={C.ink} strokeOpacity={0.08} strokeWidth={2} />
          <text x={292} y={160} fontFamily={FONT_SERIF} fontWeight={600} fontSize={28} fill={C.ink} opacity={0.55}>
            INFOTOPIA · Sunstein, 2006
          </text>
          <text x={292} y={248} fontFamily={FONT_SANS} fontWeight={800} fontSize={72} fill={C.ink} letterSpacing={-1}>
            病根：选择性接触
          </text>
          {/* typeset texture */}
          {Array.from({ length: 11 }).map((_, i) => {
            const yy = 320 + i * 46;
            if (i === 4) return null;
            const wv = 560 + rnd(i, 3) * 160;
            return <rect key={i} x={292} y={yy} width={wv} height={14} rx={3} fill={C.ink} opacity={0.14} />;
          })}
          {/* the phrase */}
          <rect x={292} y={480} width={480 * hl} height={62} fill={C.marker} opacity={0.75} style={{ mixBlendMode: "multiply" }} />
          <text x={300} y={526} fontFamily={FONT_SERIF} fontWeight={800} fontStyle="italic" fontSize={50} fill={C.ink}>
            Selective Exposure
          </text>
          {/* threads leaving the phrase into the cocoon */}
          <path
            d="M 772 510 C 900 500 980 640 1100 600 C 1200 566 1230 420 1380 240"
            fill="none"
            stroke={C.ink}
            strokeWidth={2.2}
            strokeDasharray={900}
            strokeDashoffset={900 * (1 - clamp(wind * 3))}
          />
          <path
            d={COCOON}
            fill="none"
            stroke={C.ink}
            strokeWidth={1.8}
            strokeOpacity={0.85}
            strokeDasharray={COCOON_LEN}
            strokeDashoffset={COCOON_LEN * (1 - wind) + COCOON_LEN * unwind}
          />
          <ellipse cx={1380} cy={470} rx={150 * wind} ry={240 * wind} fill={C.ink} opacity={0.04} />
        </g>
      )}

      {/* ───────── S06 bars ───────── */}
      {t > 27.9 && <Bars t={t} />}
    </g>
  );
};

const BARS = [
  { cx: 900, v: 0.78, label: "协同过滤推荐", color: C.cobalt },
  { cx: 1200, v: 0.54, label: "人工编辑头条", color: "#4A4740" },
  { cx: 1500, v: 0.39, label: "熟人朋友圈", color: "#8A8578" },
];
export const BAR_BASE = 800;
export const BAR_SCALE = 600;
export const NODES = Array.from({ length: 12 }).map((_, i) => {
  const a = -160 + (i / 11) * 140;
  const r = 120 + rnd(i, 7) * 60;
  return { x: 900 + Math.cos((a * Math.PI) / 180) * r, y: 300 + Math.sin((a * Math.PI) / 180) * r * 0.75, c: [C.cobalt, C.vermilion, "#C79A00", C.ink][i % 4] };
});

const Bars: React.FC<{ t: number }> = ({ t }) => {
  const tau = t - 28.0;
  const threads = eo(tau, 0.3, 1.0);
  const nodes = (i: number) => sp(tau, 3.15 + i * 0.04, 0.5, 14); // Locked to S06 Beat B (Bar 18 = 37.394s)
  return (
    <g>
      {/* L1 column */}
      <g opacity={eo(tau, 0.4, 1.1)}>
        <text x={200} y={290} fontFamily={FONT_SANS} fontWeight={800} fontSize={60} fill={C.ink}>
          阿姆斯特丹大学
        </text>
        <text x={200} y={366} fontFamily={FONT_SANS} fontWeight={800} fontSize={60} fill={C.ink}>
          内容多样性实测
        </text>
      </g>
      <g opacity={eo(tau, 3.1, 3.65)}>
        <rect x={196} y={414} width={lerp(0, 452, eo(tau, 3.15, 3.85))} height={52} fill={C.marker} opacity={0.8} style={{ mixBlendMode: "multiply" }} />
        <text x={204} y={454} fontFamily={FONT_SANS} fontWeight={800} fontSize={40} fill={C.ink}>
          协同过滤 &gt; 朋友圈
        </text>
      </g>
      <g opacity={eo(tau, 1.0, 1.6)}>
        <text x={200} y={770} fontFamily={FONT_SERIF} fontWeight={600} fontSize={30} fill={C.ink} opacity={0.7}>
          Möller et al., 2018
        </text>
      </g>

      {/* baseline */}
      <line x1={760} y1={BAR_BASE} x2={1640} y2={BAR_BASE} stroke={C.ink} strokeWidth={3} opacity={threads} />
      {BARS.map((b, i) => {
        const g = sp(tau, 0.8 + i * 0.16, 0.62, 9);
        const h = b.v * BAR_SCALE * clamp(g, 0, 1.06);
        const top = BAR_BASE - h;
        const lab = eo(tau, 1.6 + i * 0.16, 2.3 + i * 0.16);
        return (
          <g key={i}>
            {/* straightened silk thread */}
            <line x1={b.cx} y1={BAR_BASE} x2={b.cx} y2={BAR_BASE - b.v * BAR_SCALE * threads} stroke={C.ink} strokeWidth={2} opacity={0.6 * (1 - clamp(g))} />
            <rect x={b.cx - 100} y={top} width={200} height={h} fill={b.color} />
            {i > 0 &&
              Array.from({ length: 30 }).map((_, k) => {
                const yy = BAR_BASE - k * 16 - 8;
                if (yy < top + 4) return null;
                return <line key={k} x1={b.cx - 100} y1={yy} x2={b.cx + 100} y2={yy - 22} stroke="#F3EFE6" strokeOpacity={0.12} strokeWidth={2} />;
              })}
            <text x={b.cx} y={top - 24} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={56} fill={b.color} opacity={lab}>
              {b.v.toFixed(2)}
            </text>
            <text x={b.cx} y={BAR_BASE + 48} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={700} fontSize={30} fill={C.ink} opacity={lab}>
              {b.label}
            </text>
          </g>
        );
      })}
      {/* cross-boundary nodes above the CF bar */}
      {NODES.map((n, i) => {
        const p = clamp(nodes(i), 0, 1.15);
        return (
          <g key={i} opacity={clamp(p * 2)}>
            <line x1={900} y1={BAR_BASE - 0.78 * BAR_SCALE - 80} x2={lerp(900, n.x, p)} y2={lerp(250, n.y - 60, p)} stroke={n.c} strokeWidth={1.5} opacity={0.5} />
            <circle cx={lerp(900, n.x, p)} cy={lerp(250, n.y - 60, p)} r={11} fill={n.c} />
          </g>
        );
      })}
      <Leader x={1040} y={170} dx={50} dy={-40} run={30} label="陌生人带来的跨界话题" color={C.cobalt} textColor={C.ink} p={eo(tau, 2.9, 3.6)} size={30} />
    </g>
  );
};
