import React from "react";
import { FONT_MONO, FONT_SANS, PAL, arc, clamp, eo, io, lerp, polar, seg, sp, wedge } from "./core";
import { Leader, Phone } from "./kit";
import { CARD, CardFace } from "./ActFive";
import { Person, Sofa } from "./ActOne";

const C = PAL.walnut;
const WARM = "#FFE7B3";

export const ActSix: React.FC<{ t: number }> = ({ t }) => (
  <g>
    {t < 108.6 && <Honeypot t={t} />}
    {t > 107.4 && t < 114.4 && <Beams t={t} />}
    {t > 112.8 && <Home t={t} />}
  </g>
);

const SB = { x: 410, y: 170, w: 1100, h: 120 };

const Honeypot: React.FC<{ t: number }> = ({ t }) => {
  const tau = t - 101.4;
  const flip = io(tau, 0, 0.7);
  const morph = io(tau, 0.35, 1.1);
  const scaleX = Math.abs(Math.cos(Math.PI * flip));
  const backSide = flip > 0.5;
  const out = io(t, 107.6, 108.4);
  // card geometry morphs into search box geometry
  const gx = lerp(CARD.x, SB.x, morph);
  const gy = lerp(CARD.y, SB.y, morph);
  const gw = lerp(CARD.w, SB.w, morph);
  const gh = lerp(CARD.h, SB.h, morph);
  const cx = gx + gw / 2;
  const typed = "蛋白粉怎么选";
  const nType = Math.floor(typed.length * seg(tau, 1.0, 1.7) + 0.001);
  const caret = Math.floor(tau * 2.2) % 2 === 0 && tau < 2.0;
  const step = (i: number) => eo(tau, 1.5 + i * 0.75, 2.1 + i * 0.75);
  const dwell = 15 * io(tau, 1.7, 2.9);
  const coupon = sp(tau, 3.05, 0.5, 13); // Locked to S18 Beat B (tau=3.1, Bar 58 = 120.792s STRONG_PHRASE)
  const swipe = io(tau, 3.8, 4.5);
  return (
    <g opacity={1 - out}>
      {!backSide && (
        <g transform={`translate(${cx} 0) scale(${scaleX} 1) translate(${-cx} 0)`}>
          <CardFace />
        </g>
      )}
      {backSide && (
        <g transform={`translate(${cx} 0) scale(${scaleX * lerp(1, 0.4, out)} 1) translate(${-cx} 0)`}>
          <rect x={gx - 6} y={gy - 6} width={gw + 12} height={gh + 12} rx={Math.min(66, gh / 2 + 6)} fill={C.amber} opacity={0.18} />
          <rect x={gx} y={gy} width={gw} height={gh} rx={Math.min(60, gh / 2)} fill="#1C1713" stroke={C.amber} strokeWidth={3} />
          <g opacity={seg(morph, 0.7, 1)}>
            <circle cx={gx + 70} cy={gy + gh / 2 - 6} r={20} fill="none" stroke={C.amber} strokeWidth={5} />
            <line x1={gx + 84} y1={gy + gh / 2 + 8} x2={gx + 100} y2={gy + gh / 2 + 24} stroke={C.amber} strokeWidth={6} strokeLinecap="round" />
            <text x={gx + 130} y={gy + gh / 2 + 16} fontFamily={FONT_SANS} fontWeight={700} fontSize={44} fill={C.ink}>
              {typed.slice(0, nType)}
            </text>
            {caret && <rect x={gx + 132 + nType * 44} y={gy + 34} width={4} height={52} fill={C.amber} />}
            <rect x={gx + gw - 170} y={gy + 22} width={146} height={gh - 44} rx={(gh - 44) / 2} fill={C.amber} />
            <text x={gx + gw - 97} y={gy + gh / 2 + 12} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={800} fontSize={34} fill="#1C1713">
              搜索
            </text>
          </g>
        </g>
      )}
      {/* L1 */}
      <text x={SB.x} y={128} fontFamily={FONT_SANS} fontWeight={800} fontSize={56} fill={C.amber} opacity={eo(tau, 0.9, 1.5)}>
        主动蜜罐
      </text>
      {/* three steps */}
      {[0, 1, 2].map((i) => {
        const p = step(i);
        const x = 410 + i * 380;
        return (
          <g key={i} opacity={clamp(p * 1.5)} transform={`translate(0 ${(1 - p) * 24})`}>
            <rect x={x} y={360} width={340} height={430} rx={24} fill="#ffffff" fillOpacity={0.04} stroke={C.ink} strokeOpacity={0.18} strokeWidth={2} />
            <text x={x + 30} y={414} fontFamily={FONT_MONO} fontWeight={800} fontSize={30} fill={C.amber}>
              0{i + 1}
            </text>
            <text x={x + 84} y={414} fontFamily={FONT_SANS} fontWeight={800} fontSize={32} fill={C.ink}>
              {["搜索 + 停留", "诱出隐藏券", "买完即划走"][i]}
            </text>
            {i < 2 && <path d={`M ${x + 350} 575 l 20 0 m -10 -10 l 10 10 l -10 10`} fill="none" stroke={C.amber} strokeWidth={4} />}
          </g>
        );
      })}
      {/* step 1: dwell ring */}
      <g opacity={step(0)}>
        <circle cx={580} cy={590} r={100} fill="none" stroke="#3A2F25" strokeWidth={14} />
        <path d={arc(580, 590, 100, -90, -90 + (dwell / 15) * 359.9)} fill="none" stroke={C.amber} strokeWidth={14} strokeLinecap="round" />
        <text x={580} y={610} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={60} fill={C.ink}>
          {Math.round(dwell)}s
        </text>
        <text x={580} y={748} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={600} fontSize={30} fill={C.ink} opacity={0.75}>
          特征加权
        </text>
      </g>
      {/* step 2: coupon */}
      <g opacity={step(1)}>
        <g transform={`translate(960 590) scale(${lerp(0.6, 1, clamp(coupon, 0, 1.1))}) rotate(${(1 - clamp(coupon)) * -12})`} opacity={clamp(coupon * 2)}>
          <path d="M -130 -80 H 130 V -20 A 20 20 0 0 0 130 20 V 80 H -130 V 20 A 20 20 0 0 0 -130 -20 Z" fill={C.amber} />
          <line x1={-60} y1={-70} x2={-60} y2={70} stroke="#1C1713" strokeWidth={3} strokeDasharray="8 8" opacity={0.5} />
          <text x={-95} y={14} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={900} fontSize={30} fill="#1C1713" transform="rotate(-90 -95 0)">
            隐藏券
          </text>
          <text x={36} y={30} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={900} fontSize={88} fill="#1C1713" letterSpacing={-2}>
            7 折
          </text>
        </g>
        <text x={960} y={748} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={600} fontSize={30} fill={C.ink} opacity={0.75}>
          定向投券
        </text>
      </g>
      {/* step 3: swipe away */}
      <g opacity={step(2)}>
        <defs>
          <clipPath id="swipe-clip">
            <rect x={1170} y={440} width={340} height={280} />
          </clipPath>
        </defs>
        <g clipPath="url(#swipe-clip)">
          <rect x={1250 - swipe * 300} y={480} width={180} height={220} rx={18} fill="#ffffff" fillOpacity={0.08} stroke={C.ink} strokeOpacity={0.3} strokeWidth={2} opacity={1 - swipe} />
          <rect x={1270 - swipe * 300} y={510} width={140} height={70} rx={8} fill={C.amber} opacity={0.35 * (1 - swipe)} />
        </g>
        <path d={`M 1420 600 L ${1420 - 200 * swipe} 600`} stroke={C.amber} strokeWidth={6} strokeLinecap="round" opacity={swipe > 0 ? 1 - seg(swipe, 0.6, 0.9) : 0} />
        <path d={`M ${1240 - 200 * swipe + 200} 586 l -16 14 l 16 14`} fill="none" stroke={C.amber} strokeWidth={6} opacity={swipe > 0 && swipe < 1 ? 1 : 0} />
        <g opacity={seg(swipe, 0.75, 1)} transform={`translate(1340 590) scale(${lerp(0.7, 1, seg(swipe, 0.75, 1))})`}>
          <circle cx={0} cy={0} r={70} fill="none" stroke={C.amber} strokeWidth={8} />
          <path d="M -30 2 L -8 24 L 34 -22" fill="none" stroke={C.amber} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <text x={1340} y={748} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={600} fontSize={30} fill={C.ink} opacity={0.75}>
          权重清空
        </text>
      </g>
    </g>
  );
};

const AP = { cx: 980, cy: 560, r: 340 };
const BEAMS = [
  { ang: -140, label: "点 · 短视频", dx: -60, dy: -30 },
  { ang: -90, label: "线 · 深度长文", dx: 40, dy: -60 },
  { ang: -40, label: "面 · 跨圈社区", dx: 60, dy: -30 },
];

const Beams: React.FC<{ t: number }> = ({ t }) => {
  const tau = t - 107.6;
  const appear = eo(tau, 0.1, 0.7);
  const open = io(tau, 2.2, 3.5); // Wedges 2° -> 360° across S19 Beat B (tau=2.7, Bar 62 = 129.132s STRONG_PHRASE)
  const span = lerp(2, 360, open);
  const beam = (i: number) => eo(tau, 0.5 + i * 0.15, 1.3 + i * 0.15);
  const toLamp = io(t, 112.9, 113.5);
  const { cx, cy, r } = AP;
  return (
    <g opacity={appear * (1 - toLamp)}>
      <defs>
        <radialGradient id="aperture" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={WARM} stopOpacity={0.5} />
          <stop offset="1" stopColor={C.amber} stopOpacity={0.1} />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#3A2F25" strokeWidth={2} strokeDasharray="4 10" />
      <path d={wedge(cx, cy, r, -90 - span / 2, -90 + span / 2)} fill="url(#aperture)" />
      {span < 359 &&
        [-1, 1].map((s) => {
          const [x, y] = polar(cx, cy, r, -90 + (s * span) / 2);
          return <line key={s} x1={cx} y1={cy} x2={x} y2={y} stroke={C.amber} strokeWidth={3} />;
        })}
      <path d={arc(cx, cy, r, -90 - span / 2, -90 + span / 2)} fill="none" stroke={WARM} strokeWidth={6} opacity={0.9} />
      {BEAMS.map((b, i) => {
        const p = beam(i);
        const [ex, ey] = polar(cx, cy, r * p, b.ang);
        const w = 26;
        const [lx] = polar(cx, cy, r * p, b.ang - 90);
        return (
          <g key={i} opacity={p}>
            <path
              d={`M ${cx} ${cy} L ${ex + (lx - cx) * 0 + Math.cos(((b.ang - 90) * Math.PI) / 180) * w} ${ey + Math.sin(((b.ang - 90) * Math.PI) / 180) * w} L ${ex - Math.cos(((b.ang - 90) * Math.PI) / 180) * w} ${ey - Math.sin(((b.ang - 90) * Math.PI) / 180) * w} Z`}
              fill={WARM}
              opacity={0.55}
            />
            <line x1={cx} y1={cy} x2={ex} y2={ey} stroke="#FFF7E6" strokeWidth={4} />
            {i === 0 && <circle cx={ex} cy={ey} r={14} fill="#FFF7E6" />}
            {i === 1 && <line x1={ex - 30} y1={ey} x2={ex + 30} y2={ey} stroke="#FFF7E6" strokeWidth={8} strokeLinecap="round" />}
            {i === 2 && <rect x={ex - 16} y={ey - 16} width={32} height={32} fill="#FFF7E6" transform={`rotate(-20 ${ex} ${ey})`} />}
            <Leader x={ex} y={ey} dx={b.dx} dy={b.dy} run={24} label={b.label} color={C.amber} textColor={C.ink} p={eo(tau, 1.2 + i * 0.2, 1.9 + i * 0.2)} size={36} weight={800} />
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={12} fill="#FFF7E6" />
      {/* L1 */}
      <g opacity={eo(tau, 0.3, 0.9)}>
        <text x={130} y={176} fontFamily={FONT_SANS} fontWeight={800} fontSize={64} fill={C.ink}>
          点 · 线 · 面食谱
        </text>
      </g>
      <text x={1460} y={800} fontFamily={FONT_MONO} fontWeight={800} fontSize={88} fill={span > 300 ? WARM : C.ink} letterSpacing={-3}>
        {Math.round(span)}°
      </text>
      <text x={1460} y={720} fontFamily={FONT_SANS} fontWeight={700} fontSize={32} fill={C.ink} opacity={0.7}>
        视野
      </text>
    </g>
  );
};

const LAMP = { x: 250, y: 250 };

const Home: React.FC<{ t: number }> = ({ t }) => {
  const tau = t - 113.0;
  const arrive = io(tau, 0, 1.3);
  const swap = io(tau, 1.5, 3.5); // Swaps across Bar 66 -> Bar 68 (137.47s -> 141.64s)
  const meter = 0.2 * (1 - io(tau, 1.5, 3.5)); // Locks at 0.00m right on S20 Beat B (tau=3.5, Bar 68 = 141.642s)
  const gap = (1 - swap) * 64;
  const ringX = lerp(AP.cx, LAMP.x, arrive);
  const ringY = lerp(AP.cy, LAMP.y, arrive);
  const ringR = lerp(AP.r, 70, arrive);
  const final = eo(tau, 3.5, 4.3); // Reveals right on Bar 68 (141.642s) and holds over Bar 70 (145.811s) final chord
  const lx = lerp(540, 930, swap);
  const rx = lerp(1120, 730, swap);
  return (
    <g>
      <defs>
        <radialGradient id="lamp-glow" cx={LAMP.x} cy={LAMP.y} r={1100} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={C.amber} stopOpacity={0.42} />
          <stop offset="0.35" stopColor={C.amber} stopOpacity={0.12} />
          <stop offset="1" stopColor={C.amber} stopOpacity={0} />
        </radialGradient>
      </defs>
      <g opacity={arrive}>
        <rect x={0} y={0} width={1920} height={1080} fill="url(#lamp-glow)" />
        <Sofa warm={1} />
        <Person x={lerp(868, 912, swap)} y={724} />
        <Person x={lerp(1052, 1008, swap)} y={724} flip tone="#3D2F27" />
        {/* lamp */}
        <line x1={LAMP.x} y1={LAMP.y + 40} x2={LAMP.x} y2={880} stroke="#5A4634" strokeWidth={8} />
        <ellipse cx={LAMP.x} cy={884} rx={60} ry={14} fill="#3A2C20" />
        <path d={`M ${LAMP.x - 80} ${LAMP.y + 40} L ${LAMP.x - 50} ${LAMP.y - 50} L ${LAMP.x + 50} ${LAMP.y - 50} L ${LAMP.x + 80} ${LAMP.y + 40} Z`} fill="#F7D9A0" opacity={0.9} />
      </g>
      {/* halo carried from S19 lands into the lamp */}
      <circle cx={ringX} cy={ringY} r={ringR} fill="none" stroke={WARM} strokeWidth={lerp(6, 3, arrive)} opacity={1 - seg(tau, 1.0, 1.6)} />
      {/* phones exchange & overlap */}
      <g opacity={eo(tau, 0.6, 1.4)}>
        {swap < 0.5 ? (
          <>
            <MiniPhone id="hl" x={lx} tint={C.cyan} lines={["进产房", "留密码"]} warm={swap} />
            <MiniPhone id="hr" x={rx} tint={C.rose} lines={["娃非亲生", "骗彩礼"]} warm={swap} />
          </>
        ) : (
          <>
            <MiniPhone id="hr" x={rx} tint={C.rose} lines={["娃非亲生", "骗彩礼"]} warm={swap} />
            <MiniPhone id="hl" x={lx} tint={C.cyan} lines={["进产房", "留密码"]} warm={swap} />
          </>
        )}
      </g>
      {/* ruler 0.20 → 0.00 */}
      <g opacity={eo(tau, 0.7, 1.3)}>
        <text x={960} y={118} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={88} fill={meter < 0.005 ? WARM : C.amber} letterSpacing={-2}>
          {meter.toFixed(2)} m
        </text>
        <line x1={960 - gap} y1={156} x2={960 + gap} y2={156} stroke={C.amber} strokeWidth={5} />
        <line x1={960 - gap} y1={142} x2={960 - gap} y2={170} stroke={C.amber} strokeWidth={5} />
        <line x1={960 + gap} y1={142} x2={960 + gap} y2={170} stroke={C.amber} strokeWidth={5} />
      </g>
      <g opacity={final}>
        <text x={1340} y={400} fontFamily={FONT_SANS} fontWeight={800} fontSize={72} fill={C.ink}>
          看见身边
        </text>
        <text x={1340} y={490} fontFamily={FONT_SANS} fontWeight={800} fontSize={72} fill={WARM}>
          具体的人
        </text>
      </g>
    </g>
  );
};

const MiniPhone: React.FC<{ id: string; x: number; tint: string; lines: [string, string] | string[]; warm: number }> = ({ id, x, tint, lines, warm }) => {
  const y = 196;
  return (
    <Phone id={id} x={x} y={y} w={260} h={400} tint={tint} glow={0.5}>
      <rect x={x} y={y} width={260} height={400} fill={C.amber} opacity={0.18 * warm} />
      <rect x={x + 30} y={y + 86} width={200} height={160} rx={16} fill={tint} fillOpacity={0.18} stroke={tint} strokeWidth={2} />
      <text x={x + 130} y={y + 152} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={800} fontSize={32} fill={C.ink}>
        {lines[0]}
      </text>
      <text x={x + 130} y={y + 202} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={800} fontSize={32} fill={tint}>
        {lines[1]}
      </text>
      <rect x={x + 30} y={y + 280} width={200} height={14} rx={7} fill={C.ink} opacity={0.15} />
      <rect x={x + 30} y={y + 310} width={140} height={14} rx={7} fill={C.ink} opacity={0.15} />
    </Phone>
  );
};
