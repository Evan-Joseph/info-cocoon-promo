import React from "react";
import { FONT_MONO, FONT_SANS, PAL, arc, clamp, eo, io, lerp, pad, polar, rnd, seg, sp, wedge } from "./core";
import { BubbleIcon, HeartIcon, LockIcon, PlusUserIcon } from "./kit";
import { NODES } from "./ActTwo";

const C = PAL.obsidian;

const Robot: React.FC<{ x: number; y: number; s: number; lit: number; op?: number; label?: string }> = ({ x, y, s, lit, op = 1, label }) => {
  const k = s / 50;
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`} opacity={op}>
      <rect x={-25} y={-25} width={50} height={50} rx={12} fill={C.ink} fillOpacity={lit * 0.92} stroke={C.ink} strokeOpacity={0.35 + lit * 0.65} strokeWidth={2 / Math.max(1, k * 0.6)} />
      <line x1={0} y1={-25} x2={0} y2={-33} stroke={C.ink} strokeWidth={2} opacity={0.6} />
      <circle cx={0} cy={-35} r={3} fill={C.ink} opacity={0.6} />
      <rect x={-14} y={-8} width={8} height={8} rx={2} fill={lit > 0.5 ? C.ground : C.ink} opacity={0.9} />
      <rect x={6} y={-8} width={8} height={8} rx={2} fill={lit > 0.5 ? C.ground : C.ink} opacity={0.9} />
      <line x1={-9} y1={10} x2={9} y2={10} stroke={lit > 0.5 ? C.ground : C.ink} strokeWidth={2.5} strokeLinecap="round" />
      {label && (
        <text x={0} y={42} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={700} fontSize={9} fill={C.ink}>
          {label}
        </text>
      )}
    </g>
  );
};

const GX = (c: number) => 636 + c * 72;
const GY = (r: number) => 146 + r * 72;

export const ActThree: React.FC<{ t: number }> = ({ t }) => {
  const zoom = io(t, 39.6, 40.7); // S08
  const toRing = io(t, 45.2, 46.0); // S09
  const toCompass = io(t, 52.0, 52.7); // S10

  return (
    <g>
      {t < 46.2 && <Grid t={t} zoom={zoom} fade={toRing} />}
      {t > 39.5 && t < 46.4 && <Dashboard t={t} zoom={zoom} out={toRing} />}
      {t > 40.4 && <Dial t={t} toRing={toRing} toCompass={toCompass} />}
    </g>
  );
};

const Grid: React.FC<{ t: number; zoom: number; fade: number }> = ({ t, zoom, fade }) => {
  const tau = t - 34.4;
  const out: React.ReactNode[] = [];
  const fx = 636;
  const fy = 146;
  const bigX = lerp(fx, 480, zoom);
  const bigY = lerp(fy, 420, zoom);
  const scale = lerp(1, 6, zoom);
  for (let i = 0; i < 100; i++) {
    const r = Math.floor(i / 10);
    const c = i % 10;
    const n = NODES[i % 12];
    const p = sp(tau, 0.05 + i * 0.008, 0.68, 9);
    let x = lerp(n.x, GX(c), clamp(p, 0, 1.08));
    let y = lerp(n.y - 60, GY(r), clamp(p, 0, 1.08));
    const lit = seg(tau, 1.0 + (r + c) * 0.07, 1.25 + (r + c) * 0.07);
    if (i === 0) {
      out.push(<Robot key={i} x={lerp(x, bigX, zoom)} y={lerp(y, bigY, zoom)} s={lerp(52, 290, zoom)} lit={lit} op={1 - fade} />);
      continue;
    }
    x = bigX + (x - fx) * scale;
    y = bigY + (y - fy) * scale;
    out.push(<Robot key={i} x={x} y={y} s={52 * scale} lit={lit} op={clamp(p * 3) * (1 - zoom)} />);
  }
  const hud = 1 - zoom;
  return (
    <g>
      <g opacity={hud}>
        <text x={140} y={360} fontFamily={FONT_SANS} fontWeight={800} fontSize={56} fill={C.ink} opacity={eo(tau, 0.6, 1.3)}>
          WSJ 受控实验
        </text>
        <g opacity={eo(tau, 1.6, 2.3)}>
          <text x={140} y={476} fontFamily={FONT_MONO} fontWeight={800} fontSize={88} fill={C.ink} letterSpacing={-3}>
            100
          </text>
          <text x={320} y={474} fontFamily={FONT_SANS} fontWeight={800} fontSize={44} fill={C.ink}>
            个
          </text>
          <text x={140} y={546} fontFamily={FONT_SANS} fontWeight={700} fontSize={40} fill={C.ink} opacity={0.85}>
            空白机器人账号
          </text>
        </g>
      </g>
      {out}
    </g>
  );
};

const Dashboard: React.FC<{ t: number; zoom: number; out: number }> = ({ t, zoom, out }) => {
  const tau = t - 39.6;
  const items = [
    { label: "点赞", Icon: HeartIcon },
    { label: "评论", Icon: BubbleIcon },
    { label: "关注", Icon: PlusUserIcon },
  ];
  return (
    <g opacity={1 - out} transform={`translate(${-out * 120} 0)`}>
      <text x={480} y={624} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={40} fill={C.ink} opacity={eo(tau, 0.9, 1.4)}>
        ROBOT #001
      </text>
      {items.map((it, i) => {
        const p = eo(tau, 0.45 + i * 0.3, 0.9 + i * 0.3);
        const lock = seg(tau, 0.6 + i * 0.3, 0.72 + i * 0.3);
        const x = 220 + i * 260;
        return (
          <g key={i} opacity={clamp(p * 1.5) * zoom} transform={`translate(0 ${(1 - p) * 20})`}>
            <rect x={x - 110} y={690} width={220} height={150} rx={18} fill={C.ink} fillOpacity={0.04} stroke={lock > 0.5 ? C.red : C.grid} strokeWidth={2} />
            <it.Icon x={x - 62} y={736} s={1} color={C.ink} />
            <text x={x - 30} y={748} fontFamily={FONT_SANS} fontWeight={700} fontSize={30} fill={C.ink} opacity={0.8}>
              {it.label}
            </text>
            <text x={x - 70} y={818} fontFamily={FONT_MONO} fontWeight={800} fontSize={60} fill={C.ink}>
              0
            </text>
            <LockIcon x={x + 56} y={790} s={0.9} color={lock > 0.5 ? C.red : C.dim} closed={lock} />
          </g>
        );
      })}
    </g>
  );
};

const THUMBS = 224;

const Dial: React.FC<{ t: number; toRing: number; toCompass: number }> = ({ t, toRing, toCompass }) => {
  const tau8 = t - 39.6;
  const tau9 = t - 45.2;
  const tau10 = t - 52.0;
  const appear = eo(tau8, 0.8, 1.6);
  const cx = lerp(lerp(1340, 1220, toRing), 960, toCompass);
  const cy = lerp(lerp(450, 470, toRing), 520, toCompass);
  const r = lerp(lerp(240, 300, toRing), 330, toCompass);
  const sw = lerp(lerp(18, 56, toRing), 3, toCompass);

  // S08 dwell readout (locked to S08 Beat B @ tau8 = 2.8 -> Bar 24 = 49.903s)
  const dwell = 4.8 * io(tau8, 2.6, 4.6);
  // S09 fill (reaches 93% right on S09 Beat B @ tau9 = 3.4 -> Bar 28 = 58.243s)
  const fill = 0.93 * io(tau9, 0.5, 3.6);
  const count = Math.round(THUMBS * io(tau9, 0.5, 3.6));
  const mins = 36 * io(tau9, 0.5, 3.4);
  // S10 collapse (collapses inside Pre-Drop Vacuum 2 @ tau10 = 3.1 -> Bar 31 = 64.498s)
  const span = lerp(360, 2, io(tau10, 2.7, 4.9));

  const dwellFace = 1 - toRing;
  const ringFace = toRing * (1 - toCompass);

  return (
    <g opacity={appear}>
      {/* ticks */}
      {Array.from({ length: 72 }).map((_, i) => {
        const a = i * 5 - 90;
        const major = i % 6 === 0;
        const [x0, y0] = polar(cx, cy, r + sw / 2 + 10, a);
        const [x1, y1] = polar(cx, cy, r + sw / 2 + (major ? 30 : 20), a);
        return <line key={i} x1={x0} y1={y0} x2={x1} y2={y1} stroke={C.ink} strokeOpacity={major ? 0.6 : 0.25} strokeWidth={major ? 2.5 : 1.5} />;
      })}
      {/* track */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.grid} strokeWidth={Math.max(sw, 3)} />
      {/* S08 dwell arc */}
      {dwellFace > 0 && <path d={arc(cx, cy, r, -90, -90 + (dwell / 4.8) * 300)} fill="none" stroke={C.ink} strokeWidth={sw} strokeLinecap="round" opacity={dwellFace} />}
      {/* S09 depressive fill */}
      {toRing > 0 && toCompass < 1 && (
        <g opacity={1 - toCompass}>
          <path d={arc(cx, cy, r, -90, -90 + fill * 360)} fill="none" stroke={C.blue} strokeWidth={sw} />
          <path d={arc(cx, cy, r, -90 + fill * 360, 270)} fill="none" stroke={C.ink} strokeOpacity={0.3} strokeWidth={sw} />
        </g>
      )}
      {/* readouts */}
      <g opacity={dwellFace}>
        <text x={cx} y={cy - 54} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={700} fontSize={34} fill={C.ink} opacity={0.8}>
          单条停留时长
        </text>
        <text x={cx} y={cy + 46} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={92} fill={C.ink} letterSpacing={-2}>
          +{dwell.toFixed(1)}s
        </text>
      </g>
      <g opacity={ringFace}>
        <text x={cx} y={cy + 20} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={88} fill={C.ink} letterSpacing={-3}>
          {Math.round(fill * 100)}%
        </text>
        <text x={cx} y={cy + 80} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={700} fontSize={34} fill={C.blue}>
          抑郁与悲伤内容
        </text>
      </g>
      {/* S09 left: thumbnails + counters */}
      {toRing > 0 && <Stream t={t} k={toRing * (1 - toCompass)} count={count} mins={mins} />}
      {/* S10 compass collapse */}
      {toCompass > 0 && <Collapse t={t} cx={cx} cy={cy} r={r} span={span} k={toCompass} />}
    </g>
  );
};

const Stream: React.FC<{ t: number; k: number; count: number; mins: number }> = ({ t, k, count, mins }) => {
  const prog = io(t - 45.2, 0.4, 3.2);
  const rowH = 82;
  const rows = Math.ceil(THUMBS / 3);
  const scroll = prog * (rows - 5) * rowH;
  const cells: React.ReactNode[] = [];
  const firstRow = Math.max(0, Math.floor(scroll / rowH) - 1);
  for (let rr = firstRow; rr < Math.min(rows, firstRow + 8); rr++) {
    for (let c = 0; c < 3; c++) {
      const i = rr * 3 + c;
      if (i >= THUMBS) continue;
      const y = 420 + rr * rowH - scroll;
      const sad = rnd(i, 9) < 0.15 + 0.82 * (i / THUMBS);
      cells.push(
        <g key={i}>
          <rect x={150 + c * 150} y={y} width={136} height={72} rx={8} fill={sad ? C.blue : C.ink} fillOpacity={sad ? 0.75 : 0.18} />
          <path d={`M ${210 + c * 150} ${y + 24} l 16 12 l -16 12 Z`} fill={C.ink} opacity={0.7} />
        </g>,
      );
    }
  }
  return (
    <g opacity={k}>
      <defs>
        <clipPath id="stream-clip">
          <rect x={140} y={410} width={470} height={440} />
        </clipPath>
        <linearGradient id="stream-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.ground} stopOpacity={1} />
          <stop offset="0.15" stopColor={C.ground} stopOpacity={0} />
          <stop offset="0.85" stopColor={C.ground} stopOpacity={0} />
          <stop offset="1" stopColor={C.ground} stopOpacity={1} />
        </linearGradient>
      </defs>
      <g clipPath="url(#stream-clip)">{cells}</g>
      <rect x={140} y={410} width={470} height={440} fill="url(#stream-fade)" />
      <text x={150} y={230} fontFamily={FONT_MONO} fontWeight={800} fontSize={88} fill={C.ink} letterSpacing={-3}>
        {pad(mins)}:{pad((mins % 1) * 60)}
      </text>
      <text x={150} y={286} fontFamily={FONT_SANS} fontWeight={700} fontSize={32} fill={C.ink} opacity={0.7}>
        分钟 · 刷过
      </text>
      <text x={330} y={286} fontFamily={FONT_MONO} fontWeight={800} fontSize={40} fill={C.blue}>
        {count}
      </text>
      <text x={420} y={286} fontFamily={FONT_SANS} fontWeight={700} fontSize={32} fill={C.ink} opacity={0.7}>
        条视频
      </text>
    </g>
  );
};

const Collapse: React.FC<{ t: number; cx: number; cy: number; r: number; span: number; k: number }> = ({ t, cx, cy, r, span, k }) => {
  const tau = t - 52.0;
  const a0 = -90 - span / 2;
  const a1 = -90 + span / 2;
  const pull = io(tau, 2.7, 4.9);
  const end = eo(tau, 4.8, 5.5);
  const [tx, ty] = polar(cx, cy, r, -90);
  return (
    <g opacity={k}>
      <defs>
        <pattern id="blind-hatch" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="14" stroke={C.red} strokeOpacity={0.22} strokeWidth={3} />
        </pattern>
      </defs>
      {span < 359 && <path d={wedge(cx, cy, r, a1, a0 + 360)} fill="url(#blind-hatch)" opacity={seg(tau, 0.3, 1.2)} />}
      <path d={wedge(cx, cy, r, a0, a1)} fill={C.blue} fillOpacity={0.22} stroke="none" />
      {span < 200 && (
        <text x={cx} y={cy + r * 0.5} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={800} fontSize={40} fill={C.red} opacity={seg(tau, 1.6, 2.4) * 0.85}>
          {`看不见的 ${Math.round(360 - span)}°`}
        </text>
      )}
      {span < 359 && (
        <>
          <line x1={cx} y1={cy} x2={polar(cx, cy, r, a0)[0]} y2={polar(cx, cy, r, a0)[1]} stroke={C.red} strokeWidth={3} />
          <line x1={cx} y1={cy} x2={polar(cx, cy, r, a1)[0]} y2={polar(cx, cy, r, a1)[1]} stroke={C.red} strokeWidth={3} />
        </>
      )}
      <circle cx={cx} cy={cy} r={8} fill={C.ink} />
      {/* 4.7x pull vectors */}
      {[-1, 1].map((s) => {
        const ang = -90 + s * lerp(150, 12, pull);
        const [ax, ay] = polar(cx, cy, r * 0.72, ang);
        const [bx, by] = polar(cx, cy, r * 0.72, ang - s * 26);
        return (
          <g key={s} opacity={seg(tau, 0.3, 0.6) * (1 - end)}>
            <path d={`M ${ax} ${ay} Q ${(ax + bx) / 2 + s * 20} ${(ay + by) / 2 - 30} ${bx} ${by}`} fill="none" stroke={C.red} strokeWidth={5} />
            <circle cx={bx} cy={by} r={8} fill={C.red} />
          </g>
        );
      })}
      {/* L1 */}
      <g opacity={eo(tau, 0.4, 1.0)}>
        <text x={150} y={320} fontFamily={FONT_SANS} fontWeight={800} fontSize={44} fill={C.ink}>
          负面停留权重
        </text>
        <text x={150} y={426} fontFamily={FONT_MONO} fontWeight={800} fontSize={92} fill={C.red} letterSpacing={-3}>
          4.7x
        </text>
      </g>
      <g>
        <text x={1500} y={520} fontFamily={FONT_MONO} fontWeight={800} fontSize={88} fill={span < 10 ? C.red : C.ink} letterSpacing={-3}>
          {Math.round(span)}°
        </text>
        <text x={1500} y={572} fontFamily={FONT_SANS} fontWeight={700} fontSize={32} fill={C.ink} opacity={0.7}>
          可见视野
        </text>
      </g>
      {/* loupe: the sofa reflected inside the 2° slit */}
      <g opacity={end}>
        <line x1={tx} y1={ty} x2={1170} y2={190} stroke={C.ink} strokeWidth={2} strokeDasharray="6 6" />
        <circle cx={1250} cy={190} r={80} fill={C.ground} stroke={C.ink} strokeWidth={3} />
        <rect x={1206} y={150} width={38} height={70} rx={8} fill={PAL.walnut.cyan} opacity={0.85} />
        <rect x={1256} y={150} width={38} height={70} rx={8} fill={PAL.walnut.rose} opacity={0.85} />
        <rect x={1200} y={232} width={100} height={8} rx={4} fill={PAL.walnut.amber} opacity={0.7} />
      </g>
    </g>
  );
};
