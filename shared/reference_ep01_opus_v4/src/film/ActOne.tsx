import React from "react";
import { FONT_MONO, FONT_SANS, PAL, clamp, eo, io, lerp, mix, seg, sp } from "./core";
import { Phone, ThumbIcon } from "./kit";

const C = PAL.walnut;

export const Sofa: React.FC<{ warm?: number; dim?: number }> = ({ warm = 0, dim = 1 }) => (
  <g opacity={dim}>
    <defs>
      <linearGradient id="sofa-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={warm > 0 ? "#3A2C20" : C.wood2} />
        <stop offset="1" stopColor={C.wood} />
      </linearGradient>
    </defs>
    <rect x={360} y={606} width={1200} height={300} rx={56} fill="#0A0807" opacity={0.6} />
    <rect x={380} y={590} width={1160} height={290} rx={48} fill="url(#sofa-g)" stroke="#3B2F25" strokeWidth={2} />
    <rect x={380} y={590} width={1160} height={66} rx={30} fill="#2F251D" />
    <rect x={380} y={590} width={70} height={290} rx={30} fill="#2B2219" />
    <rect x={1470} y={590} width={70} height={290} rx={30} fill="#2B2219" />
    <line x1={960} y1={662} x2={960} y2={870} stroke="#1A1411" strokeWidth={3} />
    {/* stitched seams */}
    <line x1={460} y1={668} x2={1460} y2={668} stroke="#45372B" strokeWidth={1.5} strokeDasharray="6 8" />
  </g>
);

export const Person: React.FC<{ x: number; y: number; flip?: boolean; tone?: string }> = ({ x, y, flip, tone = "#3A2E25" }) => (
  <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`}>
    <ellipse cx={0} cy={44} rx={86} ry={40} fill={tone} stroke="#4C3D31" strokeWidth={2} />
    <circle cx={0} cy={0} r={42} fill="#2A211B" stroke="#4C3D31" strokeWidth={2} />
    <path d="M -30 -20 Q 0 -52 34 -16" fill="none" stroke="#1B1511" strokeWidth={10} strokeLinecap="round" />
  </g>
);

/** Feed list inside a phone. */
export const Feed: React.FC<{
  x: number;
  y: number;
  w: number;
  items: string[];
  hero: [string, string];
  heroIndex: number;
  scroll: number;
  tint: string;
  settle: number;
}> = ({ x, y, w, items, hero, heroIndex, scroll, tint, settle }) => {
  const cw = w - 32;
  let cy = y + 70 - scroll;
  const out: React.ReactNode[] = [];
  items.forEach((it, i) => {
    const isHero = i === heroIndex;
    const h = isHero ? 210 : 116;
    const dimK = isHero ? 1 : 1 - settle * 0.62;
    if (isHero) {
      out.push(
        <g key={i} opacity={dimK}>
          <rect x={x + 16} y={cy} width={cw} height={h} rx={20} fill={tint} fillOpacity={0.1 + settle * 0.14} stroke={tint} strokeWidth={2 + settle * 2} />
          <rect x={x + 36} y={cy + 24} width={86} height={34} rx={8} fill={tint} />
          <text x={x + 79} y={cy + 50} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={800} fontSize={24} fill="#0C0B0A">
            热推
          </text>
          <text x={x + 36} y={cy + 112} fontFamily={FONT_SANS} fontWeight={800} fontSize={36} fill={C.ink}>
            {hero[0]}
          </text>
          <text x={x + 36} y={cy + 166} fontFamily={FONT_SANS} fontWeight={800} fontSize={36} fill={tint}>
            {hero[1]}
          </text>
        </g>,
      );
    } else {
      out.push(
        <g key={i} opacity={dimK}>
          <rect x={x + 16} y={cy} width={cw} height={h} rx={16} fill="#ffffff" fillOpacity={0.05} />
          <rect x={x + 30} y={cy + 16} width={84} height={84} rx={10} fill={tint} fillOpacity={0.28} />
          <path d={`M ${x + 64} ${cy + 44} l 22 14 l -22 14 Z`} fill={C.ink} opacity={0.6} />
          <text x={x + 130} y={cy + 52} fontFamily={FONT_SANS} fontWeight={700} fontSize={28} fill={C.ink}>
            {it}
          </text>
          <rect x={x + 130} y={cy + 72} width={120} height={10} rx={5} fill={C.ink} opacity={0.2} />
          <rect x={x + 260} y={cy + 72} width={60} height={10} rx={5} fill={tint} opacity={0.45} />
        </g>,
      );
    }
    cy += h + 16;
  });
  return <g>{out}</g>;
};

const LEFT_ITEMS = ["产房实录：签字时", "顺转剖经历分享", "羊水栓塞真实病例", "孕晚期必看清单", "顺产还是剖腹产", "", "产后抑郁自测", "高龄产妇风险"];
const RIGHT_ITEMS = ["彩礼纠纷真实案例", "亲子鉴定结果", "婚前财产怎么保", "她卷走了彩礼", "离婚冷静期真相", "", "婚前协议必看", "隐婚骗局揭秘"];
export const FEED_L = { items: LEFT_ITEMS, hero: ["顺转剖 · 羊水栓塞", "进产房留密码"] as [string, string] };
export const FEED_R = { items: RIGHT_ITEMS, hero: ["娃非亲生", "转移财产骗彩礼"] as [string, string] };
const HERO_I = 5;
const PH = { y: 110, w: 460, h: 720 };
const LX = 250;
const RX = 1210;
// scroll so that hero card is centred in the screen
const heroScroll = (y: number) => 70 + HERO_I * 132 + 105 - PH.h / 2 + (y - y);

export const ActOne: React.FC<{ t: number }> = ({ t }) => {
  // ── camera (S01 left-weighted → S02 pan to centre)
  const camX = lerp(110, 0, io(t, 5.8, 7.0));

  // ── ruler
  const rulerOpen = sp(t, 0.15, 0.6, 9);
  const half = 64 * clamp(rulerOpen, 0, 1.2);
  const crack = io(t, 8.3, 8.85); // 0.20 m → ∞ locked to S02 Beat B (Bar 05 = 10.289s)
  const rulerVal = 0.2 * eo(t, 0.15, 1.4);
  const merge = io(t, 10.8, 12.2); // S03 hero
  const zip = eo(t, 13.75, 14.65); // Zipper split locked to S03 Beat B (Bar 07 = 14.459s Pre-Drop Vacuum 1)

  // ── phones
  const lRise = eo(t, 0.6, 2.0);
  const rRise = eo(t, 6.0, 7.3);
  const lScroll = heroScroll(0) * eo(t, 0.7, 2.9);
  const rScroll = heroScroll(0) * eo(t, 6.1, 8.1);
  const lSettle = seg(t, 2.85, 3.25); // Hero card settles right on S01 Beat B (Bar 02 = 4.034s)
  const rSettle = seg(t, 7.8, 8.25);

  const lx = lerp(LX, 460, merge);
  const rx = lerp(RX, 960, merge);
  const pw = lerp(PH.w, 500, merge);
  const py = lerp(PH.y, 80, merge);
  const ph = lerp(PH.h, 780, merge);
  const feedFade = 1 - seg(merge, 0, 0.45);
  const vid = seg(merge, 0.55, 1);

  const sceneDim = 1 - merge * 0.75;

  return (
    <g>
      <g transform={`translate(${camX * (1 - merge)} 0)`}>
        <Sofa dim={sceneDim} />
        <g opacity={sceneDim}>
          {/* light cones from phones to faces */}
          <path d={`M ${LX + 360} ${PH.y + PH.h - 40} L 840 690 L 900 760 L ${LX + 460} ${PH.y + PH.h}`} fill={C.cyan} opacity={0.06 * lRise} />
          <path d={`M ${RX + 100} ${PH.y + PH.h - 40} L 1080 690 L 1020 760 L ${RX} ${PH.y + PH.h}`} fill={C.rose} opacity={0.06 * rRise} />
          <Person x={868} y={724} />
          <Person x={1052} y={724} flip tone="#3D2F27" />
        </g>

        {/* ruler + L1 */}
        <g opacity={1 - merge}>
          <text x={960} y={402} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={800} fontSize={44} fill={C.ink} opacity={eo(t, 0.3, 1.1)}>
            相距
          </text>
          <g opacity={1 - crack}>
            <text x={960} y={500} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={88} fill={C.amber} letterSpacing={-2}>
              {rulerVal.toFixed(2)} m
            </text>
          </g>
          <g opacity={crack}>
            <text x={960 - (1 - crack) * 8} y={510} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={120} fill={C.rose} opacity={0.6}>
              ∞
            </text>
            <text x={960} y={510} textAnchor="middle" fontFamily={FONT_MONO} fontWeight={800} fontSize={120} fill={C.ink}>
              ∞
            </text>
          </g>
          {/* ruler bar, breaks apart */}
          <g transform={`translate(${-crack * 26} ${crack * 6}) rotate(${-crack * 7} ${960 - half} 560)`}>
            <line x1={960 - half} y1={560} x2={960 - crack * 4} y2={560} stroke={C.amber} strokeWidth={5} />
            <line x1={960 - half} y1={540} x2={960 - half} y2={580} stroke={C.amber} strokeWidth={5} />
            {[0.25, 0.5, 0.75].map((k) => (
              <line key={k} x1={960 - half * k} y1={552} x2={960 - half * k} y2={568} stroke={C.amber} strokeWidth={2} opacity={1 - crack} />
            ))}
          </g>
          <g transform={`translate(${crack * 26} ${crack * 6}) rotate(${crack * 7} ${960 + half} 560)`}>
            <line x1={960 + crack * 4} y1={560} x2={960 + half} y2={560} stroke={C.amber} strokeWidth={5} />
            <line x1={960 + half} y1={540} x2={960 + half} y2={580} stroke={C.amber} strokeWidth={5} />
          </g>
          {crack > 0 && (
            <path
              d={`M 960 ${520} L 952 545 L 968 560 L 950 590 L 962 620 L 955 660`}
              fill="none"
              stroke={C.rose}
              strokeWidth={3}
              strokeDasharray={160}
              strokeDashoffset={160 * (1 - crack)}
            />
          )}
        </g>

        {/* left phone */}
        <g transform={`translate(0 ${(1 - lRise) * 90})`} opacity={clamp(lRise * 1.5)}>
          <Phone id="pl" x={lx} y={py} w={pw} h={ph} tint={C.cyan}>
            <g opacity={feedFade}>
              <Feed x={lx} y={py} w={pw} items={FEED_L.items} hero={FEED_L.hero} heroIndex={HERO_I} scroll={lScroll} tint={C.cyan} settle={lSettle} />
            </g>
          </Phone>
        </g>
        {/* right phone */}
        <g transform={`translate(0 ${(1 - rRise) * 90})`} opacity={clamp(rRise * 1.5)}>
          <Phone id="pr" x={rx} y={py} w={pw} h={ph} tint={C.rose}>
            <g opacity={feedFade}>
              <Feed x={rx} y={py} w={pw} items={FEED_R.items} hero={FEED_R.hero} heroIndex={HERO_I} scroll={rScroll} tint={C.rose} settle={rSettle} />
            </g>
          </Phone>
        </g>
      </g>

      {/* S03 merged window */}
      {merge > 0.5 && <MergedWindow t={t} k={vid} zip={zip} />}
    </g>
  );
};

const LCOM = [
  { who: "路人甲", txt: "纯属无理取闹", n: "2.1万" },
  { who: "老哥稳", txt: "情绪绑架罢了", n: "1.4万" },
  { who: "冷静点", txt: "男人太难了", n: "9,832" },
];
const RCOM = [
  { who: "小鹿", txt: "冷暴力就分手", n: "2.3万" },
  { who: "清醒姐", txt: "这种男人别要", n: "1.6万" },
  { who: "晚风", txt: "姐妹快跑", n: "1.1万" },
];

const MergedWindow: React.FC<{ t: number; k: number; zip: number }> = ({ t, k, zip }) => {
  const x = 460;
  const y = 80;
  const w = 1000;
  const h = 780;
  const sep = 26 * zip;
  const col = (side: -1 | 1) => {
    const list = side < 0 ? LCOM : RCOM;
    const tint = side < 0 ? C.cyan : C.rose;
    const cx0 = side < 0 ? x + 36 - sep : 960 + 20 + sep;
    const cw = 444;
    return (
      <g>
        <text x={cx0 + 8} y={520} fontFamily={FONT_SANS} fontWeight={800} fontSize={30} fill={tint} opacity={eo(t, 13.75, 14.25)}>
          {side < 0 ? "他看到的前排" : "她看到的前排"}
        </text>
        {list.map((c, i) => {
          const p = eo(t, 13.82 + i * 0.14 + (side > 0 ? 0.06 : 0), 14.52 + i * 0.14);
          const yy = 548 + i * 98;
          return (
            <g key={i} opacity={clamp(p * 1.5)} transform={`translate(${side * (1 - p) * 30} 0)`}>
              <rect x={cx0} y={yy} width={cw} height={84} rx={14} fill={tint} fillOpacity={0.1} stroke={tint} strokeOpacity={0.5} />
              <circle cx={cx0 + 36} cy={yy + 42} r={20} fill={tint} opacity={0.5} />
              <text x={cx0 + 70} y={yy + 53} fontFamily={FONT_SANS} fontWeight={700} fontSize={30} fill={C.ink}>
                {c.txt}
              </text>
              <ThumbIcon x={cx0 + cw - 118} y={yy + 40} s={0.8} color={tint} />
              <text x={cx0 + cw - 18} y={yy + 52} textAnchor="end" fontFamily={FONT_MONO} fontWeight={700} fontSize={28} fill={tint}>
                {c.n}
              </text>
            </g>
          );
        })}
      </g>
    );
  };
  return (
    <g opacity={k}>
      <rect x={x + 8} y={y + 12} width={w} height={h} rx={44} fill="#050404" opacity={0.85} />
      <rect x={x} y={y} width={w} height={h} rx={44} fill="#0E0D0C" stroke="rgba(255,255,255,0.18)" strokeWidth={2} />
      {/* video */}
      <rect x={x + 30} y={y + 30} width={w - 60} height={300} rx={22} fill="#1B1714" />
      <rect x={x + 30} y={y + 30} width={(w - 60) / 2} height={300} rx={22} fill={C.cyan} opacity={0.12} />
      <rect x={960} y={y + 30} width={(w - 60) / 2} height={300} rx={22} fill={C.rose} opacity={0.12} />
      <circle cx={960} cy={y + 170} r={52} fill="rgba(0,0,0,0.55)" stroke={C.ink} strokeOpacity={0.7} strokeWidth={3} />
      <path d={`M 944 ${y + 140} L 984 ${y + 170} L 944 ${y + 200} Z`} fill={C.ink} />
      <rect x={x + 30} y={y + 312} width={(w - 60) * 0.38} height={6} fill={C.amber} />
      <text x={x + 40} y={y + 386} fontFamily={FONT_SANS} fontWeight={800} fontSize={34} fill={C.ink}>
        婚礼前夜因琐事冷战，到底是谁的问题？
      </text>
      <rect x={x + w - 210} y={y + 356} width={170} height={42} rx={8} fill={C.amber} fillOpacity={0.15} stroke={C.amber} />
      <text x={x + w - 125} y={y + 386} textAnchor="middle" fontFamily={FONT_SANS} fontWeight={800} fontSize={24} fill={C.amber}>
        同一视频
      </text>
      {/* zipper split */}
      <line x1={960} y1={492} x2={960} y2={lerp(492, 840, zip)} stroke={C.amber} strokeWidth={3} />
      {Array.from({ length: 18 }).map((_, i) => {
        const yy = 500 + i * 19;
        if (yy > lerp(492, 840, zip)) return null;
        return <line key={i} x1={960 - 10 - sep * 0.4} y1={yy} x2={960 + 10 + sep * 0.4} y2={yy + 8} stroke={C.amber} strokeWidth={2} opacity={0.65} />;
      })}
      {col(-1)}
      {col(1)}
      <g opacity={mix(0, 1, seg(t, 12.2, 12.8))} />
    </g>
  );
};
