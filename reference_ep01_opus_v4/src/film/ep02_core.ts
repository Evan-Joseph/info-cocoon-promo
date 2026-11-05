// ─────────────────────────────────────────────────────────────
// 《抽丝剥茧》EP02：《超级个体：一人成军的幻觉与科斯暗箱》
// v5.1 Frame-Exact 112.30 BPM Kick-Snapped Master Core (SSOT)
// 100% Byte-Aligned with SCRIPT_AND_DIRECTOR_TABLE.md (v5.1) & beats.json (v5.1)
// ─────────────────────────────────────────────────────────────

export const FPS = 30;
export const W = 1920;
export const H = 1080;
export const DURATION = 132.0; // 3,960 frames @ 30fps
export const TOTAL_FRAMES = 3960;
export const BPM = 112.3;

export type Medium = "walnut" | "paper" | "obsidian" | "dawn";

export const PAL = {
  walnut: {
    ground: "#141210",
    ink: "#F4EFE6",
    brass: "#D4AF37",
    amber: "#F59E0B",
    vermilion: "#C83E2B",
    emerald: "#10B981",
    cyan: "#0EA5E9",
    card: "#1B1815",
    border: "rgba(212,175,55,0.34)",
    dim: "#9A9184",
  },
  paper: {
    ground: "#F4EFE6",
    ink: "#141413",
    vermilion: "#C83E2B",
    brass: "#9A6B16",
    cobalt: "#1D4ED8",
    marker: "#FACC15",
    emerald: "#15803D",
    card: "#FBF8F1",
    soft: "#6E675C",
    rule: "rgba(20,20,19,0.065)",
  },
  obsidian: {
    ground: "#0B0D13",
    ink: "#F4EFE6",
    brass: "#D4AF37",
    vermilion: "#C83E2B",
    emerald: "#10B981",
    blue: "#3B82F6",
    card: "#131722",
    grid: "#1E2533",
    dim: "#7D8797",
  },
  dawn: {
    ground: "#141210",
    ink: "#F4EFE6",
    brass: "#D4AF37",
    amber: "#F59E0B",
    vermilion: "#C83E2B",
    emerald: "#10B981",
    warm: "#FFE7B3",
    card: "#1E1914",
    dim: "#B5A895",
  },
} as const;

export const FONT_SANS = "CocoonSans, 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif";
export const FONT_SERIF = "CocoonSerif, 'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', serif";
export const FONT_MONO = "CocoonMono, CocoonSans, ui-monospace, Menlo, monospace";

export interface ShotSpec {
  id: string;
  act: 1 | 2 | 3 | 4 | 5;
  chapter: string;
  medium: Medium;
  start: number;
  end: number;
  beatB: number;
  holdAfterB: number;
  l1A: string;
  l1B: string;
  l2: [string, string];
  en: [string, string];
}

export const SHOT_BOUNDS: readonly [number, number, number][] = [
  [0.0,     6.6,     3.8],     // S01 (6.60s, 0..198f)
  [6.6,     11.867,  8.7],     // S02 (5.27s, 198..356f)
  [11.867,  18.933,  14.667],  // S03 (7.07s, 356..568f)
  [18.933,  25.333,  21.6],    // S04 (6.40s, 568..760f)
  [25.333,  31.633,  27.867],  // S05 (6.30s, 760..949f)
  [31.633,  38.033,  34.367],  // S06 (6.40s, 949..1141f)
  [38.033,  44.933,  40.667],  // S07 (6.90s, 1141..1348f)
  [44.933,  51.1,    47.433],  // S08 (6.17s, 1348..1533f)
  [51.1,    57.933,  53.9],    // S09 (6.83s, 1533..1738f)
  [57.933,  63.833,  60.5],    // S10 (5.90s, 1738..1915f)
  [63.833,  70.733,  66.467],  // S11 (6.90s, 1915..2122f)
  [70.733,  76.6,    73.3],    // S12 (5.87s, 2122..2298f)
  [76.6,    83.067,  79.267],  // S13 (6.47s, 2298..2492f)
  [83.067,  90.033,  85.7],    // S14 (6.97s, 2492..2701f)
  [90.033,  96.233,  92.8],    // S15 (6.20s, 2701..2887f)
  [96.233,  103.5,   99.333],  // S16 (7.27s, 2887..3105f)
  [103.5,   110.167, 106.133], // S17 (6.67s, 3105..3305f)
  [110.167, 117.733, 113.5],   // S18 (7.57s, 3305..3532f)
  [117.733, 124.7,   120.867], // S19 (6.97s, 3532..3741f)
  [124.7,   132.0,   127.5],   // S20 (7.30s, 3741..3960f)
];

export const SHOTS: readonly ShotSpec[] = [
  {
    id: "S01", act: 1, chapter: "第一幕 · 全能幻觉", medium: "walnut",
    start: 0.0, end: 6.6, beatB: 3.8, holdAfterB: 2.8,
    l1A: "一人公司 $10亿", l1B: "14万星 · 倒贴电费",
    l2: [
      "一句“十亿【一人公司】”，点燃了全网的造富梦；",
      "可【14万星】开源作者，收入却不够交服务器电费。",
    ],
    en: [
      "A viral promise of a billion-dollar one-person company ignited the Super-Individual craze;",
      "yet a 140k-star solo creator cannot even pay his own server electricity bill.",
    ],
  },
  {
    id: "S02", act: 1, chapter: "第一幕 · 全能幻觉", medium: "walnut",
    start: 6.6, end: 11.867, beatB: 8.7, holdAfterB: 3.17,
    l1A: "两周 520 条视频", l1B: "0 真实转化",
    l2: [
      "有人用AI两周狂发【520条】视频，播放看着很热闹；",
      "可打开收款后台一看，真实商业转化却是【零进账】。",
    ],
    en: [
      "One creator used AI to pump out 520 videos in two weeks with lively view counts;",
      "yet the merchant ledger shows a glaring zero in real commercial revenue.",
    ],
  },
  {
    id: "S03", act: 1, chapter: "第一幕 · 全能幻觉", medium: "walnut",
    start: 11.867, end: 18.933, beatB: 14.667, holdAfterB: 4.27,
    l1A: "百万流水 · 净剩 12 万", l1B: "《超级个体》暗箱",
    l2: [
      "明明不用给员工发工资，百万流水怎么只剩【12万】？",
      "当我们拆开【超级个体】账本，才看清那座隐形暗箱。",
    ],
    en: [
      "With zero employee payroll, how does a million in revenue shrink to just 120k?",
      "Opening the real ledger of the Super-Individual reveals an invisible black box.",
    ],
  },
  {
    id: "S04", act: 2, chapter: "第二幕 · 科斯暗箱", medium: "paper",
    start: 18.933, end: 25.333, beatB: 21.6, holdAfterB: 3.73,
    l1A: "1937 · 科斯《企业的性质》", l1B: "公司挡下 90% 摩擦",
    l2: [
      "为什么世界需要公司？诺奖得主【科斯】早就给过答案：",
      "公司像五面盾牌，替你挡下【90%】的法务、报税与杂事。",
    ],
    en: [
      "Why do firms exist? Nobel laureate Ronald Coase did the math back in 1937:",
      "a company acts as a five-layer shield, absorbing 90% of legal, tax, and channel friction.",
    ],
  },
  {
    id: "S05", act: 2, chapter: "第二幕 · 科斯暗箱", medium: "paper",
    start: 25.333, end: 31.633, beatB: 27.867, holdAfterB: 3.77,
    l1A: "撤掉公司护盾", l1B: "杂务吞噬 82% 精力",
    l2: [
      "一旦辞职撤掉公司外壳，AI确实省下了【写代码】时间；",
      "可发票、合同与售后纠纷，瞬间吞噬了你【82%】的精力。",
    ],
    en: [
      "Once you leave the firm's shell, AI certainly saves you coding hours;",
      "yet tax filings, contracts, and refund disputes instantly swallow 82% of your energy.",
    ],
  },
  {
    id: "S06", act: 2, chapter: "第二幕 · 科斯暗箱", medium: "obsidian",
    start: 31.633, end: 38.033, beatB: 34.367, holdAfterB: 3.67,
    l1A: "供给暴涨 100 倍", l1B: "获客成本飙升 10 倍",
    l2: [
      "所有人都能用AI造出产品，市场供给暴涨【100倍】；",
      "可买单客户没变多，抢流量的成本反倒贵了【10倍】。",
    ],
    en: [
      "When anyone can ship an AI product overnight, market supply explodes 100-fold;",
      "yet buyer attention stays flat, driving customer acquisition costs up 10-fold.",
    ],
  },
  {
    id: "S07", act: 2, chapter: "第二幕 · 科斯暗箱", medium: "paper",
    start: 38.033, end: 44.933, beatB: 40.667, holdAfterB: 4.27,
    l1A: "2026 · 6,505 人追踪实证", l1B: "绝对自由 = 幸福？",
    l2: [
      "不用坐班总该更轻松吧？【2026年】一项心理学研究，",
      "连续半年追踪了【6505名】高自由度的独立工作者。",
    ],
    en: [
      "Surely no commute and no boss means less stress? A landmark 2026 psychology study",
      "tracked 6,505 high-autonomy solo workers across six full months.",
    ],
  },
  {
    id: "S08", act: 2, chapter: "第二幕 · 科斯暗箱", medium: "obsidian",
    start: 44.933, end: 51.1, beatB: 47.433, holdAfterB: 3.67,
    l1A: "24 小时全天候待命", l1B: "自己成了最狠监工",
    l2: [
      "以前下班能合上电脑，单干后每分休息都像在【亏钱】；",
      "明明没有老板盯着，你却把自己逼成了【全天候】监工。",
    ],
    en: [
      "In an office you could close your laptop at six; solo, every minute of rest feels like losing money;",
      "with no boss watching, you turn into your own ruthless 24/7 taskmaster.",
    ],
  },
  {
    id: "S09", act: 2, chapter: "第二幕 · 科斯暗箱", medium: "paper",
    start: 51.1, end: 57.933, beatB: 53.9, holdAfterB: 4.03,
    l1A: "认知倦怠暴涨 +42%", l1B: "自主权悖论",
    l2: [
      "数据揭开了残酷的【自主权悖论】：自由度最高的人，",
      "半年后的情绪耗竭与倦怠，反而比预期暴涨了【42%】。",
    ],
    en: [
      "The data exposed a brutal Autonomy Paradox: those with the highest freedom",
      "suffered a 42% surge in emotional exhaustion and cognitive burnout after six months.",
    ],
  },
  {
    id: "S10", act: 3, chapter: "第三幕 · 买量重税", medium: "obsidian",
    start: 57.933, end: 63.833, beatB: 60.5, holdAfterB: 3.33,
    l1A: "平台买量税 70%", l1B: "¥100 营收只剩 ¥12",
    l2: [
      "省下来的员工工资去哪了？全交了平台的【买量过路费】。",
      "每赚一百块，【70%】被渠道抽走，扣完算力只剩十二块。",
    ],
    en: [
      "Where did the saved payroll go? Straight into platform traffic tolls:",
      "out of every 100 yuan earned, 70% goes to ad channels and 18% to compute, leaving 12.",
    ],
  },
  {
    id: "S11", act: 3, chapter: "第三幕 · 买量重税", medium: "obsidian",
    start: 63.833, end: 70.733, beatB: 66.467, holdAfterB: 4.27,
    l1A: "70 个项目 · 66 个归零", l1B: "大神命中率仅 5.7%",
    l2: [
      "连全球头号独立开发者，十年间先后做了【70个】项目，",
      "也有【66个】惨淡归零，真正跑通盈利的只有区区四个。",
    ],
    en: [
      "Even the world's most profitable solo founder, Pieter Levels, shipped 70 projects;",
      "66 of them failed outright, and only 4 ever became profitable hits (5.7%).",
    ],
  },
  {
    id: "S12", act: 3, chapter: "第三幕 · 买量重税", medium: "obsidian",
    start: 70.733, end: 76.6, beatB: 73.3, holdAfterB: 3.3,
    l1A: "83% 月入不足 $500", l1B: "卖铲课狂收 ¥1,999",
    l2: [
      "社区统计显示，【83%】的独立开发者月入不足五百刀；",
      "真正稳赚不赔的，是收【1999元】教人单干的卖铲课。",
    ],
    en: [
      "Community surveys show 83% of indie makers earn under $500 a month;",
      "the only guaranteed fortune is charging ¥1,999 to teach the Super-Individual dream.",
    ],
  },
  {
    id: "S13", act: 4, chapter: "第四幕 · 同质内卷", medium: "obsidian",
    start: 76.6, end: 83.067, beatB: 79.267, holdAfterB: 3.8,
    l1A: "机器秒达 60 分及格线", l1B: "跨不过 95 分护城河",
    l2: [
      "为什么工具越强越难赚？只因AI帮你跨过【60分】线；",
      "可市场真正稀缺的，恰恰是机器跨不过的【95分】壁垒。",
    ],
    en: [
      "Why is money harder to make as tools improve? AI only gets everyone to a 60-point pass;",
      "what commands a premium is the 95-point moat of deep craft and edge-case mastery.",
    ],
  },
  {
    id: "S14", act: 4, chapter: "第四幕 · 同质内卷", medium: "obsidian",
    start: 83.067, end: 90.033, beatB: 85.7, holdAfterB: 4.33,
    l1A: "500 份 60 分同质方案", l1B: "报价 ¥5,000 砸到 ¥99",
    l2: [
      "当几百万人握着一模一样的【60分】方案冲进市场，",
      "结局只能是惨烈压价，把五千块单子生生卷成【99块】。",
    ],
    en: [
      "When millions flood the market holding identical 60-point AI outputs,",
      "the inevitable result is a brutal bidding war crashing ¥5,000 jobs down to ¥99.",
    ],
  },
  {
    id: "S15", act: 4, chapter: "第四幕 · 同质内卷", medium: "paper",
    start: 90.033, end: 96.233, beatB: 92.8, holdAfterB: 3.43,
    l1A: "1780 织工 · 2026 零工", l1B: "自备算力的计件工",
    l2: [
      "这幕场景并不新鲜：两百年前自备织机的【家庭织工】，",
      "和今天自费买算力的你一样，都是风险自担的【计件工】。",
    ],
    en: [
      "History rhymes: 18th-century cottage weavers who bought their own looms",
      "mirror today's solo creators paying for GPU subscriptions to do piecework at their own risk.",
    ],
  },
  {
    id: "S16", act: 5, chapter: "第五幕 · 真名破局", medium: "obsidian",
    start: 96.233, end: 103.5, beatB: 99.333, holdAfterB: 4.17,
    l1A: "三重暗箱合拢", l1B: "十倍市场摩擦",
    l2: [
      "买量重税、全天待命与同质内卷，【三道铁环】死死扣拢——",
      "盲目脱下公司防弹衣，只会让你撞上【十倍的市场摩擦】。",
    ],
    en: [
      "70% traffic tax, 24/7 burnout, and 60-point commodity wars lock together;",
      "stripping off the firm's armor blindly leaves you facing tenfold market friction barehanded.",
    ],
  },
  {
    id: "S17", act: 5, chapter: "第五幕 · 真名破局", medium: "obsidian",
    start: 103.5, end: 110.167, beatB: 106.133, holdAfterB: 4.03,
    l1A: "4,172 赞同 · 真实追问", l1B: "看清幻觉 · 真正破局",
    l2: [
      "知乎【4172赞】问：“为什么每天干十四小时却更焦虑？”",
      "只有戳破“一人全能”的泡沫，才能找到真正的【破局路】。",
    ],
    en: [
      "A 4,172-upvote question asks: 'Why do I work 14 hours a day and feel more anxious than at work?'",
      "Piercing the omnipotence bubble is how we find the real path forward.",
    ],
  },
  {
    id: "S18", act: 5, chapter: "第五幕 · 真名破局", medium: "dawn",
    start: 110.167, end: 117.733, beatB: 113.5, holdAfterB: 4.23,
    l1A: "破局 ①：砍掉 60 分杂活", l1B: "90% 精力死磕 95 分",
    l2: [
      "第一招：放弃全能执念，用【一成精力】指挥AI干杂活；",
      "把剩下九成心血，死磕在机器替代不了的【95分绝活】。",
    ],
    en: [
      "Rule 1: Drop the jack-of-all-trades obsession; spend 10% of your energy directing AI on chores,",
      "and pour 90% into mastering one 95-point craft no machine can replicate.",
    ],
  },
  {
    id: "S19", act: 5, chapter: "第五幕 · 真名破局", medium: "dawn",
    start: 117.733, end: 124.7, beatB: 120.867, holdAfterB: 3.83,
    l1A: "破局 ②：14 天最小验证", l1B: "验证复购再单干",
    l2: [
      "第二招：别冲动裸辞，先用【14天】做最小样品去收钱；",
      "只有陌生人愿意掏【真金白银】复购，才算跑通商业模型。",
    ],
    en: [
      "Rule 2: Never quit blindly; take 14 days to ship a minimum viable sample and charge for it;",
      "only strangers paying real money repeatedly prove your business model works.",
    ],
  },
  {
    id: "S20", act: 5, chapter: "第五幕 · 真名破局", medium: "walnut",
    start: 124.7, end: 132.0, beatB: 127.5, holdAfterB: 4.5,
    l1A: "破局 ③：以真名立信用", l1B: "真名 · 终极护城河",
    l2: [
      "第三招：用你的【真名与专业信誉】兜底，积累长期信任。",
      "AI只能放大你的规模，唯有【真名信誉】才是最深的护城河。",
    ],
    en: [
      "Rule 3: Stake your real name and professional reputation on every delivery.",
      "AI can only amplify your scale; your real name is the ultimate moat.",
    ],
  },
];

export interface FoleyCue {
  at: number;
  file: string;
  vol: number;
  note: string;
}

export const CUES: readonly FoleyCue[] = [
  { at: 0.46,   file: "whoosh_deep",         vol: 0.36, note: "S01 0.43s First pulse: 4 AI badges ignite" },
  { at: 3.83,   file: "slam_impact",         vol: 0.50, note: "S01 3.80s Heavy Drop: 140k-star -¥23,800 server bill & 99+ tickets" },
  { at: 8.73,   file: "lock_click",          vol: 0.38, note: "S02 8.70s Beat B: ¥0.00 merchant conversion ledger" },
  { at: 14.70,  file: "slam_impact",         vol: 0.46, note: "S03 14.67s Beat B: Monumental Title Seal 《超级个体》暗箱" },
  { at: 18.97,  file: "paper_crumple",       vol: 0.34, note: "S04 18.93s Act II entry: 1937 Coase archival paper monograph" },
  { at: 27.90,  file: "lock_click",          vol: 0.38, note: "S05 27.87s Beat B: 10 work alert modals & 82% chore bar" },
  { at: 34.40,  file: "whoosh_deep",         vol: 0.40, note: "S06 34.37s Beat B: 10x CAC curve breaks top border" },
  { at: 47.46,  file: "lock_click",          vol: 0.38, note: "S08 47.43s Beat B: 24-hour red overload clock locks" },
  { at: 53.93,  file: "slam_impact",         vol: 0.44, note: "S09 53.90s Beat B: +42% burnout curve & 自主权悖论 seal" },
  { at: 60.53,  file: "coin_clatter",        vol: 0.40, note: "S10 60.50s Beat B: 70% traffic tax & 18% compute Sankey split" },
  { at: 66.50,  file: "lock_click",          vol: 0.38, note: "S11 66.47s Beat B: 66 of 70 projects extinguish with red crosses" },
  { at: 73.33,  file: "coin_clatter",        vol: 0.40, note: "S12 73.30s Beat B: ¥1,999 shovel-selling checkout card" },
  { at: 79.30,  file: "slam_impact",         vol: 0.44, note: "S13 79.27s Beat B: Brass moat wall blocks 60-pt bars from 95-pt" },
  { at: 85.73,  file: "glass_shatter",       vol: 0.38, note: "S14 85.70s Beat B: Price crashes ¥5,000 -> ¥800 -> ¥99" },
  { at: 92.83,  file: "paper_crumple",       vol: 0.34, note: "S15 92.80s Beat B: 1780 weaver vs 2026 digital pieceworker seal" },
  { at: 99.36,  file: "lock_click",          vol: 0.42, note: "S16 99.33s Beat B: Triple concentric deadlock rings lock" },
  { at: 106.16, file: "singing_bowl_strike", vol: 0.42, note: "S17 106.13s Beat B: Zhihu 4,172-upvote awakening note" },
  { at: 113.53, file: "whoosh_deep",         vol: 0.38, note: "S18 113.50s Beat B: 90% energy bar surges to 95-pt moat" },
  { at: 120.90, file: "coin_clatter",        vol: 0.40, note: "S19 120.87s Beat B: +¥299.00 stranger repeat payment verified" },
  { at: 127.53, file: "slam_impact",         vol: 0.48, note: "S20 127.50s Beat B: Brass seal stamps 真名兜底 on charter" },
];

export function shotIndexAt(t: number): number {
  for (let i = SHOTS.length - 1; i >= 0; i--) {
    if (t >= SHOTS[i].start - 1e-4) return i;
  }
  return 0;
}

/** Beat-locked micro-pulse driven by the 112.30 BPM drum groove & key Beat B impacts */
export function beatPulseAt(t: number): { scale: number; flash: number; vignette: number; beatGlow: number } {
  const s = SHOTS[shotIndexAt(t)];
  const dtB = t - s.beatB;
  const dtCut = t - s.start;

  // Major impact shockwave at S01 3.80s Drop, S03 Title Seal, S09 +42%, S16 Triple Lock, S20 Final Seal
  let dropScale = 0;
  let dropFlash = 0;
  for (const impactSec of [3.8, 14.667, 53.9, 99.333, 127.5]) {
    const dt = t - impactSec;
    if (dt >= 0 && dt < 0.55) {
      dropScale = Math.max(dropScale, 0.011 * Math.exp(-dt * 9.5));
      dropFlash = Math.max(dropFlash, 0.09 * Math.exp(-dt * 11.0));
    }
  }

  // Beat B mid-shot downbeat pulse + Shot-cut downbeat pulse
  const bPulse = dtB >= 0 && dtB < 0.45 ? 0.0045 * Math.exp(-dtB * 11.0) : 0;
  const cPulse = dtCut >= 0 && dtCut < 0.4 ? 0.0032 * Math.exp(-dtCut * 12.0) : 0;

  // Quarter-note kick breath locked to 112.30 BPM (0.53428s/beat, anchored at 3.800s Drop)
  const beatPeriod = 60.0 / BPM;
  const beatPhase = (((t - 3.8) % beatPeriod) + beatPeriod) % beatPeriod;
  const kickBreath = t >= 3.8 ? 0.0018 * Math.exp(-(beatPhase / beatPeriod) * 8.5) : 0;

  // Subtle contemplative vignette during S17 Fourth-Wall Zhihu question
  const vignette = s.id === "S17" ? 0.22 : 0;
  const beatGlow = clamp(Math.exp(-Math.max(0, dtB) * 8.0) * 0.7 + Math.exp(-(beatPhase / beatPeriod) * 7.5) * 0.3);

  return {
    scale: 1 + dropScale + bPulse + cPulse + kickBreath,
    flash: dropFlash,
    vignette,
    beatGlow,
  };
}

// ───────────── Closed-Form Easing & Geometry Helpers ─────────────
export const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
export const seg = (t: number, a: number, b: number) => clamp((t - a) / Math.max(1e-6, b - a));
export const mix = (a: number, b: number, k: number) => a + (b - a) * clamp(k);

function bezier(x1: number, y1: number, x2: number, y2: number) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sx = (t: number) => ((ax * t + bx) * t + cx) * t;
  const sy = (t: number) => ((ay * t + by) * t + cy) * t;
  const dx = (t: number) => (3 * ax * t + 2 * bx) * t + cx;
  return (x: number) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) {
      const e = sx(t) - x;
      const d = dx(t);
      if (Math.abs(e) < 1e-6 || Math.abs(d) < 1e-6) break;
      t -= e / d;
    }
    return sy(clamp(t));
  };
}

export const expoOut = bezier(0.16, 1, 0.3, 1);
export const p3io = bezier(0.65, 0, 0.35, 1);

export function spring(t: number, zeta = 0.55, w0 = 11): number {
  if (t <= 0) return 0;
  const wd = w0 * Math.sqrt(1 - zeta * zeta);
  return 1 - Math.exp(-zeta * w0 * t) * (Math.cos(wd * t) + ((zeta * w0) / wd) * Math.sin(wd * t));
}

export const eo = (t: number, a: number, b: number) => expoOut(seg(t, a, b));
export const io = (t: number, a: number, b: number) => p3io(seg(t, a, b));
export const sp = (t: number, a: number, zeta?: number, w0?: number) => spring(t - a, zeta, w0);

export function rnd(i: number, salt = 0): number {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453123;
  return x - Math.floor(x);
}

export const polar = (cx: number, cy: number, r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
};

export function wedge(cx: number, cy: number, r: number, a0: number, a1: number): string {
  const span = a1 - a0;
  if (span >= 359.9) return `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0 Z`;
  const [x0, y0] = polar(cx, cy, r, a0);
  const [x1, y1] = polar(cx, cy, r, a1);
  return `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${span > 180 ? 1 : 0} 1 ${x1} ${y1} Z`;
}

export function arc(cx: number, cy: number, r: number, a0: number, a1: number): string {
  const span = a1 - a0;
  if (span <= 0.01) return "";
  if (span >= 359.9) return `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;
  const [x0, y0] = polar(cx, cy, r, a0);
  const [x1, y1] = polar(cx, cy, r, a1);
  return `M ${x0} ${y0} A ${r} ${r} 0 ${span > 180 ? 1 : 0} 1 ${x1} ${y1}`;
}

export const fmt = (v: number, d = 0) => v.toFixed(d);
export const pad = (v: number, n = 2) => String(Math.floor(v)).padStart(n, "0");
