Build a 132.0-second (`3,960 frames @ 30fps`, `1920x1080`) **zero-voiceover, beat-driven kinetic visual essay** in Remotion for **UNRAVEL STUDIO (《抽丝剥茧》)** Episode 02: **《超级个体：一人成军的幻觉与科斯暗箱》(The "One-Person Unicorn" Mirage & Coase's Black Box)**.

First, clone the production asset repository into `/tmp/ep02-promo` to copy the master audio files (`assets/audio/*.mp3`), the offline Base64 CJK font bundle (`fontdata.ts`, `fonts.ts`), and inspect the Episode 01 reference components (`reference_ep01_opus_v4/src/film/{kit.tsx,Film.tsx,ActOne.tsx..ActSix.tsx}`):

```bash
git clone --branch ep02-super-individual https://github.com/Evan-Joseph/info-cocoon-promo.git /tmp/ep02-promo
mkdir -p src/film public/audio
cp /tmp/ep02-promo/assets/audio/*.mp3 public/audio/
cp /tmp/ep02-promo/reference_ep01_opus_v4/src/film/fontdata.ts src/film/fontdata.ts
cp /tmp/ep02-promo/reference_ep01_opus_v4/src/film/fonts.ts src/film/fonts.ts
ls -la /tmp/ep02-promo/reference_ep01_opus_v4/src/film/
```

> **CRITICAL SSOT RULE**: Do **NOT** read `/tmp/ep02-promo/docs/*` (those are superseded v4 drafts). **This prompt is the 100% Single Source of Truth (v5.1)** for all timings (`SHOT_BOUNDS`), bilingual copy (`SHOTS`), Foley cues (`CUES`), open-source Lucide icons (`src/film/icons.tsx`), adapted EP01 V4 UI/Monograph/Chart components (`src/film/ep02_kit.tsx`), and 20-shot visual choreography (`ActOne.tsx`–`ActFive.tsx`)! Inspect `/tmp/ep02-promo/reference_ep01_opus_v4/src/film/{kit.tsx,ActOne.tsx,ActTwo.tsx,ActThree.tsx,ActFour.tsx,ActFive.tsx,ActSix.tsx}` only to study Episode 01's high-craft visual rendering patterns.

---

## 1. FOUR CORE ARCHITECTURAL UPGRADES IN V5.1 (MUST FOLLOW 100%)

1. **Instant Hook & Crystal-Clear Topic Setup in the First 4–12 Seconds (`S01`–`S03`)**:
   - **`S01` (`0.000s – 6.600s`, `beatB = 3.800s` Heavy Drop)**: Frame `0` (`0.00s`) has **zero fade-in** and full contrast, displaying top `L1` anchor `一人公司 $10亿` and a sleek left `<BrowserWindow>` with OpenAI CEO Sam Altman's viral quote (`“史上第一家 10 亿美元的一人公司即将诞生”`) + 4 golden AI badges at `t = 0.43s` (`写代码 · 做设计 · 剪视频 · 搞客服`); right at the **`t = 3.800s` (`Frame 114`)** bass Drop, the right `<BrowserWindow>` slams open with a solo developer's `03:00 AM` reality—`GitHub ★ 140,000 OpenClaw` crushed by an unpaid server bill **`-¥23,800（收入不够交电费）`** and **`99+ 待处理报错工单`** (`l1B: 14万星 · 倒贴电费`).
   - **`S02` (`6.600s – 11.867s`, `beatB = 8.700s`)**: Creator Studio dashboard (`两周 520 条视频`) vs WeChat/Stripe Merchant Ledger (`¥0.00 · 0 真实转化`).
   - **`S03` (`11.867s – 18.933s`, `beatB = 14.667s`)**: Solo Studio Annual P&L Waterfall (`年度总流水 ¥1,000,000` $\to$ `平台买量抽成 -¥700,000` $\to$ `算力工具订阅 -¥180,000` $\to$ `到手净剩 ¥120,000`) + monumental vermilion title seal **`《超级个体》暗箱`**.
2. **Zero Crude Hand-Drawn SVG Metaphors — 100% High-Craft UI, Archival Monographs, Data Charts & Open-Source Lucide Icons**:
   - **STRICT PROHIBITION**: Never draw crude stick-figure waves, concrete breakwaters, gold-panning rivers, shovel-selling booths, 10 yellow stick-arms, or hourglass whips!
   - Build every scene from **3 proven high-craft visual families adapted from Episode 01 V4**:
     1. Realistic glass UI / Analytics / Billing / Social cards (`<BrowserWindow>`, `<Phone>`, `<AlertModalCard>`, `<ZhihuQuestionCard>`);
     2. Warm `#FBF8F1` Archival Monograph / Journal cards with yellow highlighter sweeps (`mixBlendMode: "multiply"`) and double-bordered vermilion `<SealStamp>` (`1937` Coase monograph, `2026` *Journal of Managerial Psychology* `N=6,505` card, `1780 vs 2026` twin historical ledger, `S20` Trust Charter);
     3. Vox/Pudding-grade precision data visualizations (`S03` P&L Waterfall, `S06` `+100x` Supply vs `10x` CAC Scissors Chart, `S08` Dual Work-Hour Clock Heatmaps, `S09` `+42%` Burnout Divergence Curve, `S10` `¥100 -> -¥70 -> -¥18 -> ¥12` Cashflow Sankey, `S11` `10×7 = 70` Project Matrix `66 failed vs 4 hits = 5.7%`, `S12` `83% < $500` Income Bar Chart, `S13` `60-pt vs 95-pt` Brass Moat Wall, `S16` Triple Concentric Deadlock Rings) + **25 authentic 24×24 Lucide vector icons** in `src/film/icons.tsx`.
3. **Non-Vanishing Stacked (`Beat A` + `Beat B`) Bilingual Subtitles (`<VibeChapterAndSubtitleOverlay>`)**:
   - Never yank `Beat A` away mid-shot! In every shot, **`Line 1 (Beat A)` enters at `s.start` and stays visible for the ENTIRE shot (`5.27s – 7.57s`)**, and **`Line 2 (Beat B)` stacks smoothly below `Beat A` right on `s.beatB` and holds to the end of the shot (`2.80s – 4.50s`)**, with `Line 3` rendering the literary English italic subtitle below.
4. **Measured `112.30 BPM` Frame-Exact Drum Kick Lock**:
   - `public/audio/jingwei_master_132s.mp3` has a measured tempo of **`112.30 BPM`** (`0.5343s/beat`, `2.1371s/bar`, first heavy Drop at `3.800s`). All 19 shot cuts and 20 `beatB` points are locked within `<= 16ms` (`< 0.5 frame`) of real measured bass drum peaks, with variable shot durations (`5.27s – 7.57s`) and zero adjacent equal durations.

---

## 2. EXACT SSOT DATA & TIMING (`src/film/ep02_core.ts`)

Create `src/film/ep02_core.ts` with these exact constants, `SHOT_BOUNDS`, `SHOTS` (verbatim strings!), 20 `+1f` Foley `CUES`, `beatPulseAt(t)`, and math helpers:

```ts
export const FPS = 30;
export const W = 1920;
export const H = 1080;
export const DURATION = 132.0; // 3,960 frames @ 30fps
export const TOTAL_FRAMES = 3960;
export const BPM = 112.3;

export type Medium = "walnut" | "paper" | "obsidian" | "dawn";

export const PAL = {
  walnut: { ground: "#141210", ink: "#F4EFE6", brass: "#D4AF37", amber: "#F59E0B", vermilion: "#C83E2B", emerald: "#10B981", cyan: "#0EA5E9", card: "#1B1815", border: "rgba(212,175,55,0.34)", dim: "#9A9184" },
  paper: { ground: "#F4EFE6", ink: "#141413", vermilion: "#C83E2B", brass: "#9A6B16", cobalt: "#1D4ED8", marker: "#FACC15", emerald: "#15803D", card: "#FBF8F1", soft: "#6E675C", rule: "rgba(20,20,19,0.065)" },
  obsidian: { ground: "#0B0D13", ink: "#F4EFE6", brass: "#D4AF37", vermilion: "#C83E2B", emerald: "#10B981", blue: "#3B82F6", card: "#131722", grid: "#1E2533", dim: "#7D8797" },
  dawn: { ground: "#141210", ink: "#F4EFE6", brass: "#D4AF37", amber: "#F59E0B", vermilion: "#C83E2B", emerald: "#10B981", warm: "#FFE7B3", card: "#1E1914", dim: "#B5A895" },
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
    l2: ["一句“十亿【一人公司】”，点燃了全网的造富梦；", "可【14万星】开源作者，收入却不够交服务器电费。"],
    en: ["A viral promise of a billion-dollar one-person company ignited the Super-Individual craze;", "yet a 140k-star solo creator cannot even pay his own server electricity bill."],
  },
  {
    id: "S02", act: 1, chapter: "第一幕 · 全能幻觉", medium: "walnut",
    start: 6.6, end: 11.867, beatB: 8.7, holdAfterB: 3.17,
    l1A: "两周 520 条视频", l1B: "0 真实转化",
    l2: ["有人用AI两周狂发【520条】视频，播放看着很热闹；", "可打开收款后台一看，真实商业转化却是【零进账】。"],
    en: ["One creator used AI to pump out 520 videos in two weeks with lively view counts;", "yet the merchant ledger shows a glaring zero in real commercial revenue."],
  },
  {
    id: "S03", act: 1, chapter: "第一幕 · 全能幻觉", medium: "walnut",
    start: 11.867, end: 18.933, beatB: 14.667, holdAfterB: 4.27,
    l1A: "百万流水 · 净剩 12 万", l1B: "《超级个体》暗箱",
    l2: ["明明不用给员工发工资，百万流水怎么只剩【12万】？", "当我们拆开【超级个体】账本，才看清那座隐形暗箱。"],
    en: ["With zero employee payroll, how does a million in revenue shrink to just 120k?", "Opening the real ledger of the Super-Individual reveals an invisible black box."],
  },
  {
    id: "S04", act: 2, chapter: "第二幕 · 科斯暗箱", medium: "paper",
    start: 18.933, end: 25.333, beatB: 21.6, holdAfterB: 3.73,
    l1A: "1937 · 科斯《企业的性质》", l1B: "公司挡下 90% 摩擦",
    l2: ["为什么世界需要公司？诺奖得主【科斯】早就给过答案：", "公司像五面盾牌，替你挡下【90%】的法务、报税与杂事。"],
    en: ["Why do firms exist? Nobel laureate Ronald Coase did the math back in 1937:", "a company acts as a five-layer shield, absorbing 90% of legal, tax, and channel friction."],
  },
  {
    id: "S05", act: 2, chapter: "第二幕 · 科斯暗箱", medium: "paper",
    start: 25.333, end: 31.633, beatB: 27.867, holdAfterB: 3.77,
    l1A: "撤掉公司护盾", l1B: "杂务吞噬 82% 精力",
    l2: ["一旦辞职撤掉公司外壳，AI确实省下了【写代码】时间；", "可发票、合同与售后纠纷，瞬间吞噬了你【82%】的精力。"],
    en: ["Once you leave the firm's shell, AI certainly saves you coding hours;", "yet tax filings, contracts, and refund disputes instantly swallow 82% of your energy."],
  },
  {
    id: "S06", act: 2, chapter: "第二幕 · 科斯暗箱", medium: "obsidian",
    start: 31.633, end: 38.033, beatB: 34.367, holdAfterB: 3.67,
    l1A: "供给暴涨 100 倍", l1B: "获客成本飙升 10 倍",
    l2: ["所有人都能用AI造出产品，市场供给暴涨【100倍】；", "可买单客户没变多，抢流量的成本反倒贵了【10倍】。"],
    en: ["When anyone can ship an AI product overnight, market supply explodes 100-fold;", "yet buyer attention stays flat, driving customer acquisition costs up 10-fold."],
  },
  {
    id: "S07", act: 2, chapter: "第二幕 · 科斯暗箱", medium: "paper",
    start: 38.033, end: 44.933, beatB: 40.667, holdAfterB: 4.27,
    l1A: "2026 · 6,505 人追踪实证", l1B: "绝对自由 = 幸福？",
    l2: ["不用坐班总该更轻松吧？【2026年】一项心理学研究，", "连续半年追踪了【6505名】高自由度的独立工作者。"],
    en: ["Surely no commute and no boss means less stress? A landmark 2026 psychology study", "tracked 6,505 high-autonomy solo workers across six full months."],
  },
  {
    id: "S08", act: 2, chapter: "第二幕 · 科斯暗箱", medium: "obsidian",
    start: 44.933, end: 51.1, beatB: 47.433, holdAfterB: 3.67,
    l1A: "24 小时全天候待命", l1B: "自己成了最狠监工",
    l2: ["以前下班能合上电脑，单干后每分休息都像在【亏钱】；", "明明没有老板盯着，你却把自己逼成了【全天候】监工。"],
    en: ["In an office you could close your laptop at six; solo, every minute of rest feels like losing money;", "with no boss watching, you turn into your own ruthless 24/7 taskmaster."],
  },
  {
    id: "S09", act: 2, chapter: "第二幕 · 科斯暗箱", medium: "paper",
    start: 51.1, end: 57.933, beatB: 53.9, holdAfterB: 4.03,
    l1A: "认知倦怠暴涨 +42%", l1B: "自主权悖论",
    l2: ["数据揭开了残酷的【自主权悖论】：自由度最高的人，", "半年后的情绪耗竭与倦怠，反而比预期暴涨了【42%】。"],
    en: ["The data exposed a brutal Autonomy Paradox: those with the highest freedom", "suffered a 42% surge in emotional exhaustion and cognitive burnout after six months."],
  },
  {
    id: "S10", act: 3, chapter: "第三幕 · 买量重税", medium: "obsidian",
    start: 57.933, end: 63.833, beatB: 60.5, holdAfterB: 3.33,
    l1A: "平台买量税 70%", l1B: "¥100 营收只剩 ¥12",
    l2: ["省下来的员工工资去哪了？全交了平台的【买量过路费】。", "每赚一百块，【70%】被渠道抽走，扣完算力只剩十二块。"],
    en: ["Where did the saved payroll go? Straight into platform traffic tolls:", "out of every 100 yuan earned, 70% goes to ad channels and 18% to compute, leaving 12."],
  },
  {
    id: "S11", act: 3, chapter: "第三幕 · 买量重税", medium: "obsidian",
    start: 63.833, end: 70.733, beatB: 66.467, holdAfterB: 4.27,
    l1A: "70 个项目 · 66 个归零", l1B: "大神命中率仅 5.7%",
    l2: ["连全球头号独立开发者，十年间先后做了【70个】项目，", "也有【66个】惨淡归零，真正跑通盈利的只有区区四个。"],
    en: ["Even the world's most profitable solo founder, Pieter Levels, shipped 70 projects;", "66 of them failed outright, and only 4 ever became profitable hits (5.7%)."],
  },
  {
    id: "S12", act: 3, chapter: "第三幕 · 买量重税", medium: "obsidian",
    start: 70.733, end: 76.6, beatB: 73.3, holdAfterB: 3.3,
    l1A: "83% 月入不足 $500", l1B: "卖铲课狂收 ¥1,999",
    l2: ["社区统计显示，【83%】的独立开发者月入不足五百刀；", "真正稳赚不赔的，是收【1999元】教人单干的卖铲课。"],
    en: ["Community surveys show 83% of indie makers earn under $500 a month;", "the only guaranteed fortune is charging ¥1,999 to teach the Super-Individual dream."],
  },
  {
    id: "S13", act: 4, chapter: "第四幕 · 同质内卷", medium: "obsidian",
    start: 76.6, end: 83.067, beatB: 79.267, holdAfterB: 3.8,
    l1A: "机器秒达 60 分及格线", l1B: "跨不过 95 分护城河",
    l2: ["为什么工具越强越难赚？只因AI帮你跨过【60分】线；", "可市场真正稀缺的，恰恰是机器跨不过的【95分】壁垒。"],
    en: ["Why is money harder to make as tools improve? AI only gets everyone to a 60-point pass;", "what commands a premium is the 95-point moat of deep craft and edge-case mastery."],
  },
  {
    id: "S14", act: 4, chapter: "第四幕 · 同质内卷", medium: "obsidian",
    start: 83.067, end: 90.033, beatB: 85.7, holdAfterB: 4.33,
    l1A: "500 份 60 分同质方案", l1B: "报价 ¥5,000 砸到 ¥99",
    l2: ["当几百万人握着一模一样的【60分】方案冲进市场，", "结局只能是惨烈压价，把五千块单子生生卷成【99块】。"],
    en: ["When millions flood the market holding identical 60-point AI outputs,", "the inevitable result is a brutal bidding war crashing ¥5,000 jobs down to ¥99."],
  },
  {
    id: "S15", act: 4, chapter: "第四幕 · 同质内卷", medium: "paper",
    start: 90.033, end: 96.233, beatB: 92.8, holdAfterB: 3.43,
    l1A: "1780 织工 · 2026 零工", l1B: "自备算力的计件工",
    l2: ["这幕场景并不新鲜：两百年前自备织机的【家庭织工】，", "和今天自费买算力的你一样，都是风险自担的【计件工】。"],
    en: ["History rhymes: 18th-century cottage weavers who bought their own looms", "mirror today's solo creators paying for GPU subscriptions to do piecework at their own risk."],
  },
  {
    id: "S16", act: 5, chapter: "第五幕 · 真名破局", medium: "obsidian",
    start: 96.233, end: 103.5, beatB: 99.333, holdAfterB: 4.17,
    l1A: "三重暗箱合拢", l1B: "十倍市场摩擦",
    l2: ["买量重税、全天待命与同质内卷，【三道铁环】死死扣拢——", "盲目脱下公司防弹衣，只会让你撞上【十倍的市场摩擦】。"],
    en: ["70% traffic tax, 24/7 burnout, and 60-point commodity wars lock together;", "stripping off the firm's armor blindly leaves you facing tenfold market friction barehanded."],
  },
  {
    id: "S17", act: 5, chapter: "第五幕 · 真名破局", medium: "obsidian",
    start: 103.5, end: 110.167, beatB: 106.133, holdAfterB: 4.03,
    l1A: "4,172 赞同 · 真实追问", l1B: "看清幻觉 · 真正破局",
    l2: ["知乎【4172赞】问：“为什么每天干十四小时却更焦虑？”", "只有戳破“一人全能”的泡沫，才能找到真正的【破局路】。"],
    en: ["A 4,172-upvote question asks: 'Why do I work 14 hours a day and feel more anxious than at work?'", "Piercing the omnipotence bubble is how we find the real path forward."],
  },
  {
    id: "S18", act: 5, chapter: "第五幕 · 真名破局", medium: "dawn",
    start: 110.167, end: 117.733, beatB: 113.5, holdAfterB: 4.23,
    l1A: "破局 ①：砍掉 60 分杂活", l1B: "90% 精力死磕 95 分",
    l2: ["第一招：放弃全能执念，用【一成精力】指挥AI干杂活；", "把剩下九成心血，死磕在机器替代不了的【95分绝活】。"],
    en: ["Rule 1: Drop the jack-of-all-trades obsession; spend 10% of your energy directing AI on chores,", "and pour 90% into mastering one 95-point craft no machine can replicate."],
  },
  {
    id: "S19", act: 5, chapter: "第五幕 · 真名破局", medium: "dawn",
    start: 117.733, end: 124.7, beatB: 120.867, holdAfterB: 3.83,
    l1A: "破局 ②：14 天最小验证", l1B: "验证复购再单干",
    l2: ["第二招：别冲动裸辞，先用【14天】做最小样品去收钱；", "只有陌生人愿意掏【真金白银】复购，才算跑通商业模型。"],
    en: ["Rule 2: Never quit blindly; take 14 days to ship a minimum viable sample and charge for it;", "only strangers paying real money repeatedly prove your business model works."],
  },
  {
    id: "S20", act: 5, chapter: "第五幕 · 真名破局", medium: "walnut",
    start: 124.7, end: 132.0, beatB: 127.5, holdAfterB: 4.5,
    l1A: "破局 ③：以真名立信用", l1B: "真名 · 终极护城河",
    l2: ["第三招：用你的【真名与专业信誉】兜底，积累长期信任。", "AI只能放大你的规模，唯有【真名信誉】才是最深的护城河。"],
    en: ["Rule 3: Stake your real name and professional reputation on every delivery.", "AI can only amplify your scale; your real name is the ultimate moat."],
  },
];

export const CUES = [
  { at: 0.46,   file: "whoosh_deep",         vol: 0.36 },
  { at: 3.83,   file: "slam_impact",         vol: 0.50 },
  { at: 8.73,   file: "lock_click",          vol: 0.38 },
  { at: 14.70,  file: "slam_impact",         vol: 0.46 },
  { at: 18.97,  file: "paper_crumple",       vol: 0.34 },
  { at: 27.90,  file: "lock_click",          vol: 0.38 },
  { at: 34.40,  file: "whoosh_deep",         vol: 0.40 },
  { at: 47.46,  file: "lock_click",          vol: 0.38 },
  { at: 53.93,  file: "slam_impact",         vol: 0.44 },
  { at: 60.53,  file: "coin_clatter",        vol: 0.40 },
  { at: 66.50,  file: "lock_click",          vol: 0.38 },
  { at: 73.33,  file: "coin_clatter",        vol: 0.40 },
  { at: 79.30,  file: "slam_impact",         vol: 0.44 },
  { at: 85.73,  file: "glass_shatter",       vol: 0.38 },
  { at: 92.83,  file: "paper_crumple",       vol: 0.34 },
  { at: 99.36,  file: "lock_click",          vol: 0.42 },
  { at: 106.16, file: "singing_bowl_strike", vol: 0.42 },
  { at: 113.53, file: "whoosh_deep",         vol: 0.38 },
  { at: 120.90, file: "coin_clatter",        vol: 0.40 },
  { at: 127.53, file: "slam_impact",         vol: 0.48 },
] as const;
```

Also include in `src/film/ep02_core.ts` the math & easing helpers from `/tmp/ep02-promo/reference_ep01_opus_v4/src/film/core.ts` (`clamp`, `lerp`, `seg`, `mix`, `eo`, `io`, `sp`, `rnd`, `polar`, `wedge`, `arc`, `fmt`, `pad`, `shotIndexAt`, and `beatPulseAt(t)` anchored to `BPM = 112.3` with `3.80s` Drop origin).

---

## 3. OPEN-SOURCE LUCIDE ICONS (`src/film/icons.tsx`) & ADAPTED EP01 V4 COMPONENT KIT (`src/film/ep02_kit.tsx`)

1. **`src/film/icons.tsx` (`25 Authentic Open-Source Lucide 24×24 Vector Icons`)**:
   - Implement clean 24×24 Lucide SVG icon components (`CodeIcon`, `PaletteIcon`, `VideoIcon`, `HeadsetIcon`, `StarIcon`, `AlertTriangleIcon`, `ShieldCheckIcon`, `ShieldOffIcon`, `ScaleIcon`, `FileTextIcon`, `TrendingUpIcon`, `TrendingDownIcon`, `ClockIcon`, `FlameIcon`, `CoinsIcon`, `XCircleIcon`, `CheckCircleIcon`, `GraduationCapIcon`, `LockVectorIcon`, `SparklesIcon`, `CalendarCheckIcon`, `AwardIcon`, `TerminalIcon`, `CreditCardIcon`, `UpvoteTriangleIcon`) scaled via `transform="translate(x - size/2, y - size/2) scale(size/24)"`.
2. **`src/film/ep02_kit.tsx` (`Adapted EP01 V4 High-Craft UI / Monograph / Subtitle Kit`)**:
   - Adapt `<Leader>` and `<Phone>` from `/tmp/ep02-promo/reference_ep01_opus_v4/src/film/kit.tsx`;
   - Build `<BrowserWindow id x y w h title badgeText tint bg>` (macOS traffic-light dots, header bar, badge pill, glass border, and drop shadow);
   - Adapt `<PaperMonograph x y w h headerText title subtitle highlightPhrase highlightProg>` and `<SealStamp cx cy w h text subText prog angle>` from `/tmp/ep02-promo/reference_ep01_opus_v4/src/film/ActTwo.tsx` (`S04`/`S05`);
   - Build `<ShieldCard x y w h label sub active>` (using `<ShieldCheckIcon>` / `<ShieldOffIcon>`) and `<AlertModalCard x y w h title detail tag onPaper>` (using `<AlertTriangleIcon>`);
   - Adapt `<ZhihuQuestionCard x y w h beatBProg>` from `/tmp/ep02-promo/reference_ep01_opus_v4/src/film/ActFive.tsx` (`CardFace`), showing `@独立开发观察`, `▲ 4,172 赞同`, `“为什么满屏都在鼓吹一人公司，我每天工作 14 小时，却比上班时还要焦虑？”`, and the Beat B golden banner `看清幻觉，是破局的第一步。`;
   - Build `<StageAnchorHeader t start beatB l1A l1B onPaper>` (`y = 24..88px`) rendering `l1A` at `x = 390..1100` (`fontSize = 38, fontWeight = 900`, staying at `opacity = 0.94` all shot) and `l1B` at `x = 1130..1860` (`fontSize = 38, fontWeight = 900`, slamming in at `t >= beatB`);
   - Build `<VibeChapterAndSubtitleOverlay t={t}>` rendering:
     - Top-Left `L0` Chapter Pill (`x = 48, y = 24, height = 56, fontSize = 26`, showing `s.chapter`);
     - **Bottom Non-Vanishing Stacked Bilingual Subtitle Band (`y = 860..1080px`)**:
       - **Line 1 (`Beat A`, `40px Noto Serif SC`, `fontWeight: 700`)**: Enters at `s.start` and **stays visible for the ENTIRE shot (`5.27s – 7.57s`)** (`opacity = 0.88` after `beatB`);
       - **Line 2 (`Beat B`, `43px Noto Serif SC`, `fontWeight: 800`)**: Stacks smoothly below `Beat A` right at `s.beatB` and holds for **`2.80s – 4.50s`**, with `【...】` highlighted in `#E5B85B` / `#C83E2B`;
       - **Line 3 (`English Italic`, `22px EB Garamond Italic`)**: Renders `s.en[0]` before `beatB` and `${s.en[0]} ${s.en[1]}` after `beatB`.

---

## 4. 20-SHOT HIGH-CRAFT VISUAL BLUEPRINT (`ActOne.tsx`–`ActFive.tsx`)

Every shot in `ActOne.tsx`–`ActFive.tsx` must stay strictly inside the stage safe area **`x = 80..1840, y = 108..845`** with **`fontSize >= 24`** on every `<text>` element and **zero crude hand-drawn SVG scenery**:

### Act I (`src/film/ActOne.tsx` · `0.000s – 18.933s` · `walnut` ground):
- **`S01` (`0.000s – 6.600s`, `beatB = 3.800s` Heavy Drop)**:
  - **Zero fade-in at `t = 0.00s`**: Render `<StageAnchorHeader>` (`l1A: 一人公司 $10亿` / `l1B: 14万星 · 倒贴电费`).
  - **Left Window (`x = 100, y = 126, w = 820, h = 680`)**: `<BrowserWindow title="硅谷创投热搜 · 造富神话" badgeText="全网刷屏" tint="#D4AF37">` showing OpenAI CEO Sam Altman's viral quote card (`“史上第一家 10 亿美元的一人公司即将诞生”`), with 4 golden AI capability cards at the bottom (`t = 0.43s` staggered spring pop) using `<CodeIcon> 自动写代码`, `<PaletteIcon> 自动做设计`, `<VideoIcon> 自动剪视频`, `<HeadsetIcon> 自动搞客服`.
  - **Right Window (`x = 980, y = 126, w = 840, h = 680`)**: At `t < 3.80s`, shows a sleek `"一人成军 · 估值模型"` preview card; right at **`t = 3.800s` Drop**, slams open `<BrowserWindow title="独立开发者后台 · 凌晨 03:00" badgeText="真实账单" tint="#C83E2B">` displaying a golden star badge (`<StarIcon> 开源爆款 140,000 星`) crushed by a vermilion server bill (`本月服务器与算力欠费 -¥23,800`) and 3 stacked `<AlertModalCard>` (`收入不够交服务器电费`, `99+ 待处理报错工单`, `凌晨 03:00 独自排障`).
- **`S02` (`6.600s – 11.867s`, `beatB = 8.700s`)**:
  - `l1A: 两周 520 条视频` / `l1B: 0 真实转化`.
  - **Left Window (`x = 100, y = 126, w = 820, h = 680`)**: `<BrowserWindow title="创作者数据中心 · 批量矩阵" badgeText="14 天周期" tint="#D4AF37">` with a 14-day bar chart and big counter ramping to **`520 条已发布视频`** + `<VideoIcon>` thumbnails.
  - **Right Window (`x = 980, y = 126, w = 840, h = 680`)**: At `t = 8.700s`, `<BrowserWindow title="商户收款账本 · 商业转化漏斗" badgeText="结算中心" tint="#C83E2B">` reveals a 3-stage conversion funnel (`曝光热闹` $\to$ `点击寥寥` $\to$ **`真实到账 ¥0.00`**) and `<SealStamp text="0 真实转化" />`.
- **`S03` (`11.867s – 18.933s`, `beatB = 14.667s`)**:
  - `l1A: 百万流水 · 净剩 12 万` / `l1B: 《超级个体》暗箱`.
  - **Central P&L Waterfall Window (`x = 140, y = 126, w = 1640, h = 680`)**: `<BrowserWindow title="独立工作室年度损益总表" badgeText="年度审计" tint="#D4AF37">` showing 4 crisp horizontal waterfall bars:
    1. `年度总流水`：`+¥1,000,000` (`100%` gold bar)
    2. `平台买量与渠道抽成`：`-¥700,000` (`-70%` vermilion bar)
    3. `算力接口与工具订阅`：`-¥180,000` (`-18%` vermilion bar)
    4. `年底到手净剩`：**`¥120,000`** (`12%` narrow bar)
  - At `t = 14.667s`, slam a monumental `<SealStamp cx={1420} cy={620} w={520} h={132} text="《超级个体》暗箱" subText="百万流水 · 净剩 12%" />`.

### Act II (`src/film/ActTwo.tsx` · `18.933s – 57.933s` · `paper` & `obsidian` grounds):
- **`S04` (`18.933s – 25.333s`, `beatB = 21.600s`, `paper`)**:
  - `l1A: 1937 · 科斯《企业的性质》` / `l1B: 公司挡下 90% 摩擦`.
  - **Left (`x = 100, y = 126, w = 780, h = 680`)**: `<PaperMonograph headerText="诺贝尔经济学奖经典文献 · 1937" title="罗纳德 · 科斯《企业的性质》" subtitle="为什么世界需要公司，而不是人人单干？" highlightPhrase="核心定理：企业边界由市场交易成本决定">` + `<SealStamp text="「交易成本」首提" />`.
  - **Right (`x = 940, y = 126, w = 880, h = 680`)**: At `t = 21.600s`, render the **5-Layer Corporate Shield Blueprint**: 5 `<ShieldCard>` rows (`法务合规护盾`、`财税报销护盾`、`渠道商务护盾`、`运维兜底护盾`、`品牌背书护盾`) blocking `90% 外部市场摩擦`, protecting the focused core desk (`100% 专注核心研发`).
- **`S05` (`25.333s – 31.633s`, `beatB = 27.867s`, `paper`)**:
  - `l1A: 撤掉公司护盾` / `l1B: 杂务吞噬 82% 精力`.
  - **Upper Stage (`y = 126..650`)**: 10 `<AlertModalCard onPaper>` arranged in two clean symmetrical columns (`5 left at x = 100..620`, `5 right at x = 1300..1820`, zero overlap) surrounding the central solo desk (`x = 680..1240`), showing real solo friction (`税务红冲异常`, `合同违约催告函`, `投放账户封禁`, `恶意仅退款申诉`, `发票抬头重开`, `接口欠费停机`, `商标抢注纠纷`, `渠道分成压价`, `售后差评轰炸`, `断更权重清零`).
  - **Lower Time Bar (`x = 100..1820, y = 690..810`)**: At `t = 27.867s`, a horizontal energy allocation bar gets swallowed by vermilion: **`杂务与摩擦内耗 82%`** vs **`核心创作仅剩 18%`**.
- **`S06` (`31.633s – 38.033s`, `beatB = 34.367s`, `obsidian`)**:
  - `l1A: 供给暴涨 100 倍` / `l1B: 获客成本飙升 10 倍`.
  - **Dual-Curve Scissors Chart (adapted from EP01 V4 `ActFour.tsx` `Chart`)**: On the obsidian grid (`x = 220..1720, y = 160..790`), draw a flat grey baseline (`买单客户注意力基线 · 1×`), a surging golden curve (`同类产品供给量 · +100 倍`), and at `t = 34.367s` a vermilion curve (`单客获客成本 · 10 倍`) breaking through the top border with `<Leader>` callouts and `<SealStamp text="获客成本 ×10" />`.
- **`S07` (`38.033s – 44.933s`, `beatB = 40.667s`, `paper`)**:
  - `l1A: 2026 · 6,505 人追踪实证` / `l1B: 绝对自由 = 幸福？`.
  - **Left (`x = 100, y = 126, w = 820, h = 680`)**: `<PaperMonograph headerText="管理心理学杂志 · 2026 追踪研究" title="6,505 名独立工作者实证" subtitle="连续 6 个月追踪高自由度单干人群" highlightPhrase="核心追问：绝对自由真的带来更高幸福感吗？">` with a `25 × 14` participant dot matrix (adapted from EP01 V4 `ActFour.tsx` `Sample`).
  - **Right (`x = 980, y = 126, w = 840, h = 680`)**: At `t = 40.667s`, 5 horizontal autonomy dimension bars (`时间自由 96%`, `地点自由 94%`, `决策自主 92%`, `技能多元 89%`, `全权担责 98%`) + `<SealStamp text="半年后更幸福吗？" />`.
- **`S08` (`44.933s – 51.100s`, `beatB = 47.433s`, `obsidian`)**:
  - `l1A: 24 小时全天候待命` / `l1B: 自己成了最狠监工`.
  - **Side-by-Side Dual Clock Heatmaps (adapted from EP01 V4 `ActThree.tsx` `Dial`)**:
    - **Left Clock (`cx = 520, cy = 475, r = 220`)**: `上班族 · 朝九晚六` (`09:00–18:00` green arc, `18:00–09:00` calm dark rest zone, `下班合上电脑`).
    - **Right Clock (`cx = 1380, cy = 475, r = 220`)**: At `t = 47.433s`, `独立开发者 · 24 小时全红过载` (`00:00–24:00` full 360° vermilion overload ring, center readout **`周工时 68h`**) flanked by 3 timestamp badges (`23:30 客户催改`, `02:15 流量断崖`, `05:00 脚本崩盘`).
- **`S09` (`51.100s – 57.933s`, `beatB = 53.900s`, `paper`)**:
  - `l1A: 认知倦怠暴涨 +42%` / `l1B: 自主权悖论`.
  - **Empirical Burnout Divergence Chart (`x = 220..1700, y = 160..790`, adapted from EP01 V4 `ActFour.tsx` `Chart`)**: Across `第 1 个月` $\to$ `第 6 个月`, the green dashed line (`预期轻松度`) slopes gently down, while at `t = 53.900s` the thick vermilion line (`情绪耗竭与认知倦怠`) rockets upward to **`+42%`**, accompanied by `<SealStamp cx={1180} cy={300} w={460} h={120} text="「自主权悖论」" subText="情绪耗竭 +42%" />`.

### Act III (`src/film/ActThree.tsx` · `57.933s – 76.600s` · `obsidian` ground):
- **`S10` (`57.933s – 63.833s`, `beatB = 60.500s`)**:
  - `l1A: 平台买量税 70%` / `l1B: ¥100 营收只剩 ¥12`.
  - **Precision Revenue Sankey Split Diagram (`x = 120..1800, y = 140..810`)**: Left golden trunk `客户付款 ¥100 (100%)` splits into 3 smooth cubic-Bezier Sankey streams at `t = 60.500s`:
    1. Top giant vermilion stream: **`平台买量与渠道抽成 -¥70 (70%)`**
    2. Middle amber stream: **`算力与工具订阅 -¥18 (18%)`**
    3. Bottom slender emerald/gold stream into creator's pocket: **`到手净剩 ¥12 (12%)`**.
- **`S11` (`63.833s – 70.733s`, `beatB = 66.467s`)**:
  - `l1A: 70 个项目 · 66 个归零` / `l1B: 大神命中率仅 5.7%`.
  - **Left Profile Card (`x = 100, y = 136, w = 560, h = 660`)**: `<BrowserWindow title="全球头号独立开发者档案" badgeText="实证样本" tint="#D4AF37">` showing `十年累计上线：70 个项目`, `真实存活盈利：4 个项目`, `爆款命中率：5.7%`.
  - **Right `10 × 7` Project Matrix (`x = 720..1820, y = 136..796`, adapted from EP01 V4 `ActThree.tsx` `Grid`)**: 70 rounded project tiles (`10 cols × 7 rows`). At `t = 66.467s`, the first **66 tiles** extinguish to dark crimson and display a crisp red cross `✕` (`66 个归零淘汰`), while only the last **4 tiles** (`#67–#70`) glow bright burnished gold with `<StarIcon>` (`4 个跑通盈利 · 命中率 5.7%`).
- **`S12` (`70.733s – 76.600s`, `beatB = 73.300s`)**:
  - `l1A: 83% 月入不足 $500` / `l1B: 卖铲课狂收 ¥1,999`.
  - **Left Income Distribution Window (`x = 100, y = 136, w = 820, h = 660`)**: `<BrowserWindow title="独立开发者社区月收入分布" badgeText="真实调研" tint="#C83E2B">` with a 4-tier bar chart where the first bar **`月入不足 $500：占比 83%`** towers in vermilion over `$500–$2,000 (11%)`, `$2,000–$5,000 (4%)`, and `>$5,000 (2%)`.
  - **Right Shovel-Course Checkout Card (`x = 980, y = 136, w = 840, h = 660`)**: At `t = 73.300s`, `<BrowserWindow title="爆款卖铲课收银台 · 旱涝保收" badgeText="稳赚不赔" tint="#D4AF37">` displays **`《超级个体暴富训练营》`** (`限时特惠 ¥1,999 / 人` · `已售 5,000+ 份` · **`总收款 ¥1,000 万+`**) with `<GraduationCapIcon>` and `<CoinsIcon>`.

### Act IV (`src/film/ActFour.tsx` · `76.600s – 96.233s` · `obsidian` & `paper` grounds):
- **`S13` (`76.600s – 83.067s`, `beatB = 79.267s`, `obsidian`)**:
  - `l1A: 机器秒达 60 分及格线` / `l1B: 跨不过 95 分护城河`.
  - **Capability Value Scale & Brass Moat Wall (`x = 120..1800, y = 136..800`)**: 5 horizontal skill rows (`基础代码生成`, `模板海报排版`, `洗稿短视频文案`, `自动字幕剪辑`, `通用客服话术`) race from `0 分` to the **`60 分及格线` (`x = 1080`)**. At `t = 79.267s`, a heavy brushed-brass vertical moat wall (`x = 1120..1180`, with `<LockVectorIcon>`) slams down between `60 分` and the **`95 分专业护城河` (`x = 1220..1780`)** containing 4 golden pillars (`极端边界排障`, `复杂系统架构`, `行业深水区品味`, `法律与信誉兜底`).
- **`S14` (`83.067s – 90.033s`, `beatB = 85.700s`, `obsidian`)**:
  - `l1A: 500 份 60 分同质方案` / `l1B: 报价 ¥5,000 砸到 ¥99`.
  - **Left Bidding Hall UI (`x = 100, y = 136, w = 820, h = 660`)**: `<BrowserWindow title="外包需求大厅 · 同质化竞标" badgeText="500 人抢单" tint="#D4AF37">` showing `需求：企业官网与小程序开发` flooded by **`已收到 500 份 60 分同质方案`**.
  - **Right Price Crash Step Chart (`x = 980, y = 136, w = 840, h = 660`)**: At `t = 85.700s`, `<BrowserWindow title="项目报价断崖曲线" badgeText="恶性比价" tint="#C83E2B">` steps down from `¥5,000（定制开发）` $\to$ `¥800（模板套壳）` $\to$ **`¥99（源码包改）`** with `<SealStamp text="「零议价权」" />`.
- **`S15` (`90.033s – 96.233s`, `beatB = 92.800s`, `paper`)**:
  - `l1A: 1780 织工 · 2026 零工` / `l1B: 自备算力的计件工`.
  - **Twin Historical Archival Comparison (`x = 100..1820, y = 136..796`)**:
    - **Left `<PaperMonograph>` (`x = 100, w = 780`)**: `历史档案 · 1780 英国包买制` — **`1780 家庭手摇织布工`** (`1. 自掏腰包购买织布机` · `2. 在家按件计酬，无底薪保障` · `3. 独自承担棉价暴跌与断单风险`).
    - **Right `<PaperMonograph>` (`x = 1040, w = 780`)**: `数字档案 · 2026 平台外包制` — **`2026 平台算力计件工`** (`1. 自掏腰包购买显卡与算力会员` · `2. 在家按流量计酬，无社保兜底` · `3. 独自承担算法限流与压价风险`).
    - At `t = 92.800s`, slam `<SealStamp cx={960} cy={490} w={420} h={116} text="自备工具 · 风险自担" subText="1780 ⇄ 2026" />` in the center.

### Act V (`src/film/ActFive.tsx` · `96.233s – 132.000s` · `obsidian`, `dawn`, `walnut` grounds):
- **`S16` (`96.233s – 103.500s`, `beatB = 99.333s`, `obsidian`)**:
  - `l1A: 三重暗箱合拢` / `l1B: 十倍市场摩擦`.
  - **Triple Concentric Deadlock Rings (adapted from EP01 V4 `ActFive.tsx` `Rings`)**: Centered at `cx = 760, cy = 480`, 3 concentric rings (`r = 145, 235, 325`) rotate and lock shut at `t = 99.333s`, with 3 `<Leader>` callouts to the right (`x = 1280..1800`):
    - Outer Ring (`#C83E2B`): `第一重：70% 平台买量重税` (`省下工资全交过路费`)
    - Middle Ring (`#F59E0B`): `第二重：24 小时全天待命` (`认知倦怠暴涨 +42%`)
    - Inner Ring (`#3B82F6`): `第三重：60 分同质化内卷` (`五千块单子卷成 99 块`)
    - Core badge: **`十倍市场摩擦`**.
- **`S17` (`103.500s – 110.167s`, `beatB = 106.133s`, `obsidian`)**:
  - `l1A: 4,172 赞同 · 真实追问` / `l1B: 看清幻觉 · 真正破局`.
  - Render deep-sea contemplative caustics (`<Underwater>` from EP01 V4 `ActFive.tsx`) + `<ZhihuQuestionCard beatBProg={eo(t, 106.133, 106.6)} />` (from `ep02_kit.tsx`).
- **`S18` (`110.167s – 117.733s`, `beatB = 113.500s`, `dawn`)**:
  - `l1A: 破局 ①：砍掉 60 分杂活` / `l1B: 90% 精力死磕 95 分`.
  - **Left Panel (`x = 100, y = 136, w = 720, h = 660`)**: `<BrowserWindow title="10% 精力 · 机器自动托管盒" badgeText="一键折叠" tint="#10B981">` compacting `60 分基础代码`、`模板排版`、`常规报表` into automated background tasks.
  - **Right Panel (`x = 880, y = 136, w = 940, h = 660`)**: At `t = 113.500s`, `<BrowserWindow title="90% 心血 · 死磕 95 分独门绝活" badgeText="核心长板" tint="#D4AF37">` launches a surging golden capability bar past the `60 分线` straight to **`95 分专业护城河`** (`深水区行业认知 · 极端边界排障 · 审美与终局决断`).
- **`S19` (`117.733s – 124.700s`, `beatB = 120.867s`, `dawn`)**:
  - `l1A: 破局 ②：14 天最小验证` / `l1B: 验证复购再单干`.
  - **Top 3-Step Verification Cards (`x = 100..1820, y = 136..460`, adapted from EP01 V4 `ActSix.tsx` `Honeypot`)**:
    - `01 第 1–5 天：最小可用样品` (`不辞职、不囤算力，先做可交付样品`)
    - `02 第 6–10 天：陌生人真实首单` (`不靠熟人捧场，验证陌生客户付费意愿`)
    - `03 第 11–14 天：验证真实复购` (`副业现金流持续覆盖生活成本再单干`)
  - **Bottom Verified Repeat Payment Card (`x = 260, y = 490, w = 1400, h = 300`)**: At `t = 120.867s`, `<BrowserWindow title="真实商业模型校验 · 收款通知" badgeText="验证通过" tint="#10B981">` pops in with `<CheckCircleIcon>` and **`收款到账 +¥299.00 · 陌生客户第 3 次复购`** (`商业模型验证通过 ✓`).
- **`S20` (`124.700s – 132.000s`, `beatB = 127.500s`, `walnut`)**:
  - `l1A: 破局 ③：以真名立信用` / `l1B: 真名 · 终极护城河`.
  - **Opening-to-Ending Desk Echo (`x = 140..1780, y = 130..800`)**: Return to the warm walnut desk from `S01`. All red error modals are closed; in the center lies a grand `<PaperMonograph x={220} y={140} w={1480} h={650} headerText="抽丝剥茧 · 独立创作者长期主义宪章" title="《真名与专业信誉兜底契约》" subtitle="工具只能放大规模，唯有真名信誉能穿越周期" highlightPhrase="核心准则：每一份交付均以真实姓名与长期专业声誉背书">` listing the 3 rules (`① 砍掉 60 分杂活，死磕 95 分长板`, `② 14 天最小样品，陌生人复购验真`, `③ 以真名立信用，积累跨周期复利`).
  - At `t = 127.500s`, slam `<SealStamp cx={1360} cy={560} w={420} h={124} text="「真名兜底」" subText="终极护城河" />` and hold warmly until `132.0s`.

---

## 5. CONTINUOUS MASTER-CLOCK COMPOSITION (`src/film/Film.tsx` & `src/Root.tsx`)

1. In `src/film/Film.tsx`:
   - Import `ensureFonts()` from `./fonts` and call it at render start so the offline Base64 WOFF2 fonts (`CocoonSans`, `CocoonSerif`, `CocoonMono`) load with zero network dependency.
   - Mount `<Audio src={staticFile("audio/jingwei_master_132s.mp3")} volume={0.78} />` and map each cue in `CUES` to `<Sequence from={Math.round(cue.at * 30)} durationInFrames={90}><Audio src={staticFile(`audio/${cue.file}.mp3`)} volume={cue.vol} /></Sequence>`.
   - Render the active background ground (`walnutBg`, `paperBg`, `obsidianBg`, `dawnBg` from EP01 V4 `Film.tsx`), `<ActOne t={t} />` .. `<ActFive t={t} />`, and `<VibeChapterAndSubtitleOverlay t={t} />` from `./ep02_kit`.
2. Verify with `npx tsc --noEmit` and render at least 12–21 key stills (`npx remotion still ...`) to confirm:
   - Frame `0` (`t = 0.00s`) has full contrast and zero fade-in;
   - Zero crude hand-drawn SVG metaphors;
   - Every shot displays both `Beat A` and `Beat B` stacked subtitles cleanly during `t >= beatB`, with zero text overlap and all `<text>` `fontSize >= 24`.
