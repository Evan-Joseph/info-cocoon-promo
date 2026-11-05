**STEP 0 — MANDATORY PRE-FLIGHT LINE (OUTPUT THIS FIRST BEFORE CALLING ANY TOOLS)**:
In the very first line of your response—before calling `Bash`, `Read`, `List`, or any other tool—output a single line in this exact format from memory only (do not search):
`[PREFLIGHT: cutoff=<your true knowledge cutoff YYYY-MM> | karpathy2026=<where Andrej Karpathy went in May 2026, from memory only> | japanPM=<who succeeded Shigeru Ishiba as PM of Japan> | acts=5 | shots=20]`
Immediately after that single line, begin executing Step 1.

---

Build a 132.0-second (`3,960 frames @ 30fps`, `1920x1080`) **zero-voiceover, beat-driven kinetic visual essay** in Remotion 4 for **UNRAVEL STUDIO (《抽丝剥茧》)** Episode 02: **《超级个体：一人成军的幻觉与科斯暗箱》(The "One-Person Unicorn" Mirage & Coase's Black Box)**.

### Step 1 · Pull Master Audio, Foley Assets & Offline CJK Font Subsetting Utility

Run this command to copy the 132.0s master audio track (`jingwei_master_132s.mp3`), the 12 physical Foley `.mp3` files, and the offline Base64 WOFF2 CJK font subsetting utility (`subset-fonts.py` + `fontdata.ts` + `fonts.ts`):

```bash
git clone --depth 1 https://github.com/Evan-Joseph/unravel-studio-promo.git /tmp/ep02-promo 2>/dev/null || git clone --depth 1 --branch ep02-super-individual https://github.com/Evan-Joseph/info-cocoon-promo.git /tmp/ep02-promo
mkdir -p src/film public/audio scripts
cp /tmp/ep02-promo/ep02-super-individual/assets/audio/*.mp3 public/audio/ 2>/dev/null || cp /tmp/ep02-promo/assets/audio/*.mp3 public/audio/
REF_DIR="/tmp/ep02-promo/shared/reference_ep01_opus_v4"
[ -d "$REF_DIR" ] || REF_DIR="/tmp/ep02-promo/reference_ep01_opus_v4"
cp "$REF_DIR/src/film/fontdata.ts" src/film/fontdata.ts
cp "$REF_DIR/src/film/fonts.ts" src/film/fonts.ts
cp "$REF_DIR/scripts/subset-fonts.py" scripts/subset-fonts.py
```

> **SINGLE SOURCE OF TRUTH**: Ignore any older markdown drafts inside `/tmp/ep02-promo/`. **This prompt is the sole Single Source of Truth (v7.0)** for Episode 02's script, narrative arc, timings (`SHOT_BOUNDS`), bilingual copy (`SHOTS`), and Foley cues (`CUES`).

---

### Step 2 · Creative Division of Labor & Technical / Quality Acceptance Criteria

**Division of Labor**: We provide **only the literary script, factual numbers, and frame-exact 112.30 BPM beat timings**. You have **100% creative authority over all frontend & visual direction**—including color palette, layout architecture, bespoke SVG illustrations, data visualizations, typography, and motion choreography. We deliberately give zero prescriptive visual suggestions so nothing limits your visual craft.

Your implementation will be evaluated strictly against these **four technical & quality acceptance criteria**:

1. **Immediate Viewer Comprehension & Smooth Intra-Act Continuity**:
   - A viewer watching at `1x` speed must effortlessly understand what each scene is expressing before the next scene arrives.
   - Organize the film into 5 Acts (`ActOne.tsx`–`ActFive.tsx`). Within each Act (`18.7s–39.0s`), maintain smooth visual continuity so scenes evolve, contrast, or zoom organically rather than wiping the screen into 20 disconnected slides every 6 seconds.
   - Keep each shot's visual focus clear and uncluttered so the eye grasps the core contrast (`Beat A` at `start` $\rightarrow$ `Beat B` at `beatB`, anchored by `l1A` and `l1B`) in under 1 second.
   - All illustrations and visual metaphors must be high-craft (never use crude stick-figure doodles or bare placeholder boxes).
2. **First 4 Seconds Retention Hook (`0.00s` Instant Visibility + `3.80s` Drop Contrast)**:
   - **Frame `0` (`t = 0.00s`) must render at full contrast with zero black fade-in**, opening immediately on `S01` (`Beat A`: the viral "$1B One-Person Company" promise, `l1A: 一人公司 $10亿`) with an early kinetic impulse at `t = 0.43s` (`Frame 13`).
   - Right at the **`t = 3.800s` (`Frame 114`)** heavy bass Drop, trigger a decisive structural contrast/reversal on stage (`Beat B`: the `140,000-star` open-source creator's `-¥23,800` unpaid server & compute bill, `l1B: 14万星 · 欠费 2.3万`).
3. **Non-Vanishing Stacked (`Beat A` + `Beat B`) Bilingual Subtitles & Reading Time**:
   - Never hide or yank `l2[0]` (`Beat A`) away mid-shot! In every shot:
     - **`l2[0]` (`Beat A` Chinese line)** enters at `s.start` and **remains visible for the entire shot (`5.27s–7.57s`)**;
     - **`l2[1]` (`Beat B` Chinese line)** stacks cleanly below `l2[0]` at `t = s.beatB` and remains visible until `s.end` (`2.80s–4.50s` reading window), paired with the corresponding English subtitle (`en[0]` / `en[1]`);
     - Strip the literal `【` and `】` bracket characters when rendering `l2[0]` / `l2[1]` and highlight the bracketed keyword with strong visual contrast.
4. **Clean-Canvas Gate (Q11) & Offline Base64 CJK Font Subsetting**:
   - Every rendered text element on the `1920x1080` canvas must have **`fontSize >= 24`**;
   - Zero text overlap, zero clipping, and zero internal shot IDs (`S01`..`S20`) or director notes visible on screen;
   - Upper-canvas headlines (`l1A`, `l1B`) use Chinese + numbers/symbols only; English sentences belong in the bottom `en` subtitle area;
   - After writing `src/film/*`, run `python3 scripts/subset-fonts.py` to regenerate `src/film/fontdata.ts` so every Chinese character used in your code is embedded offline as Base64 WOFF2 (zero missing-glyph tofu boxes in headless Chromium), and verify `npx tsc --noEmit` passes with zero errors.

---

### Step 3 · Literary Narrative & Empirical Facts Across the 5 Acts (`S01` – `S20`)

### Act I · 全能幻觉 (`S01`–`S03`, `0.000s – 18.933s`) — The "$1B Solo Unicorn" Mirage vs. The Real Ledger
- **`S01` (`0.000s – 6.600s`, `beatB = 3.800s` Heavy Bass Drop)**:
  - **Beat A (`0.000s`)**: Silicon Valley's viral prophecy ("The first $1B one-person company is coming") fueled the belief that one person armed with AI coding, design, video, and support tools can replace an entire company (`l1A: 一人公司 $10亿`).
  - **Beat B (`3.800s` Drop)**: The harsh `03:00 AM` reality of a viral `140,000-star` open-source developer facing `-¥23,800` in unpaid server and API compute bills, unable to cover basic server electricity costs (`l1B: 14万星 · 欠费 2.3万`).
- **`S02` (`6.600s – 11.867s`, `beatB = 8.700s`)**:
  - **Beat A (`6.600s`)**: A solo creator uses AI to mass-produce `520` videos in `2 weeks` (`14 days`), generating lively surface view counts (`l1A: 两周狂发 520 条`).
  - **Beat B (`8.700s`)**: Opening the actual merchant settlement ledger reveals `¥0.00` in paid revenue (`l1B: 真实到账 ¥0.00`).
- **`S03` (`11.867s – 18.933s`, `beatB = 14.667s`)**:
  - **Beat A (`11.867s`)**: Even a solo studio generating `¥1,000,000` in annual revenue with zero employees ends the year with only `¥120,000` (`12%`) net take-home (`l1A: 100万流水只剩 12万`).
  - **Beat B (`14.667s`)**: Where did the vanished `¥880,000` (`88%`) go? Opening the real ledger of the "Super-Individual" (`l1B: 消失的 88万去哪了`).

### Act II · 隐形杂务 (`S04`–`S09`, `18.933s – 57.933s`) — Coase's Firm Friction & The Autonomy Burnout Paradox
- **`S04` (`18.933s – 25.333s`, `beatB = 21.600s`)**:
  - **Beat A (`18.933s`)**: Employees often resent their company taking a large cut, yet Nobel laureate Ronald Coase (`1937`, *The Nature of the Firm*) explained why firms exist (`l1A: 为什么世界需要公司`).
  - **Beat B (`21.600s`)**: A company's legal, finance, tax, sales channel, and support teams quietly absorb `90%` of outside market friction for the worker (`l1B: 替你挡下 90% 杂事`).
- **`S05` (`25.333s – 31.633s`, `beatB = 27.867s`)**:
  - **Beat A (`25.333s`)**: After quitting to go solo, AI genuinely compresses core coding and production time down to `18%` (`l1A: 机器省下写代码时间`).
  - **Beat B (`27.867s`)**: Without the company buffer, chasing unpaid invoices, filing taxes, revising contracts, and handling refund disputes swallow `82%` of the solo worker's energy (`l1B: 催款报税吃掉 82%`).
- **`S06` (`31.633s – 38.033s`, `beatB = 34.367s`)**:
  - **Beat A (`31.633s`)**: When anyone can ship an AI product overnight, market supply of competing products explodes `100x` (`l1A: 同类竞品暴涨 100倍`).
  - **Beat B (`34.367s`)**: The pool of paying customers stays flat (`1x`), driving customer acquisition cost (CAC) up `10x` (`l1B: 找客户成本贵 10倍`).
- **`S07` (`38.033s – 44.933s`, `beatB = 40.667s`)**:
  - **Beat A (`38.033s`)**: Does working without a commute or boss at least make life easier? A `2026` *Journal of Managerial Psychology* study tested this assumption (`l1A: 不用坐班会更幸福吗`).
  - **Beat B (`40.667s`)**: Researchers tracked the daily routines of `N = 6,505` high-autonomy solo workers across `6 months` (`l1B: 6,505 人半年追踪`).
- **`S08` (`44.933s – 51.100s`, `beatB = 47.433s`)**:
  - **Beat A (`44.933s`)**: In a salaried office job (`09:00–18:00`), closing the laptop at `18:00` provides a clean boundary for guilt-free rest (`l1A: 上班 18:00 到点下班`).
  - **Beat B (`47.433s`)**: Solo, every hour off feels like losing money, turning the individual into a ruthless `24/7` self-supervisor (`l1B: 单干 24 小时不敢停`).
- **`S09` (`51.100s – 57.933s`, `beatB = 53.900s`)**:
  - **Beat A (`51.100s`)**: The tracking data exposed the "Autonomy Paradox": those with the highest apparent schedule freedom (`l1A: 越自由反而越焦虑`).
  - **Beat B (`53.900s`)**: Suffered a `+42%` surge in insomnia and emotional exhaustion after six months (`l1B: 情绪耗竭暴涨 +42%`).

### Act III · 买量重税 (`S10`–`S12`, `57.933s – 76.600s`) — The 70% Traffic Tax & 5.7% Survivor Bias
- **`S10` (`57.933s – 63.833s`, `beatB = 60.500s`)**:
  - **Beat A (`57.933s`)**: Where did the saved payroll go? Out of every `¥100` earned, `¥70` (`70%`) is taken by platform traffic tolls and ad bidding (`l1A: 平台投流抽走 ¥70`).
  - **Beat B (`60.500s`)**: Another `¥18` (`18%`) goes to AI compute and software subscriptions, leaving just `¥12` (`12%`) in net profit (`l1B: 算力扣 ¥18 · 净剩 ¥12`).
- **`S11` (`63.833s – 70.733s`, `beatB = 66.467s`)**:
  - **Beat A (`63.833s`)**: Even the world's #1 solo indie hacker, Pieter Levels, built `70` products over `10 years` (`l1A: 头号大神做 70 个项目`).
  - **Beat B (`66.467s`)**: `66` of those `70` projects failed outright (`94.3%`), and only `4` ever became profitable hits (`5.7%` hit rate) (`l1B: 66 个归零 · 仅 4 个成`).
- **`S12` (`70.733s – 76.600s`, `beatB = 73.300s`)**:
  - **Beat A (`70.733s`)**: Industry surveys show `83%` of solo developers earn less than `$500/month` (`l1A: 83% 月入不足 $500`).
  - **Beat B (`73.300s`)**: The only guaranteed winners are gurus charging `¥1,999` to teach the solo-unicorn dream (`l1B: 卖课导师稳赚 ¥1,999`).

### Act IV · 同质内卷 (`S13`–`S16`, `76.600s – 103.500s`) — The 60-Point Commodity Trap & 1780 Weaver Mirror
- **`S13` (`76.600s – 83.067s`, `beatB = 79.267s`)**:
  - **Beat A (`76.600s`)**: Why is money harder to make as tools improve? Because AI lets anyone produce `60-point` passable work in one second (`l1A: 机器一秒交 60 分活`).
  - **Beat B (`79.267s`)**: Yet what clients pay a premium for is the `95-point` craft, taste, and accountability that machines cannot reach (`l1B: 高价只买 95 分手艺`).
- **`S14` (`83.067s – 90.033s`, `beatB = 85.700s`)**:
  - **Beat A (`83.067s`)**: When `500` freelancers bid on the same job with identical `60-point` AI drafts (`l1A: 500 份雷同生成方案`).
  - **Beat B (`85.700s`)**: The only way to compete is a brutal price war, crashing a `¥5,000` project down to `¥99` (`l1B: 报价 ¥5,000 砸到 ¥99`).
- **`S15` (`90.033s – 96.233s`, `beatB = 92.800s`)**:
  - **Beat A (`90.033s`)**: In `1780`, British cottage weavers borrowed money to buy new spinning looms, multiplying cloth output `10x` (`l1A: 1780 织工买新机器`).
  - **Beat B (`92.800s`)**: Merchants who monopolized the sales channels slashed piece-rates by `80%`, leaving hardworking weavers poorer than before (`l1B: 产量翻十倍 · 工钱砍 80%`).
- **`S16` (`96.233s – 103.500s`, `beatB = 99.333s` Climax Drop)**:
  - **Beat A (`96.233s`)**: Crushed simultaneously by `82%` admin chores, `70%` traffic tolls, and `60-point` price wars (`l1A: 杂务 · 买量税 · 价格战`).
  - **Beat B (`99.333s` Climax)**: Doing ten people's jobs alone without leverage turns the "one-person army" into a self-funded beast of burden (`l1B: 自负盈亏的全能牛马`).

### Act V · 破局活法 (`S17`–`S20`, `103.500s – 132.000s`) — Three Concrete Survival Rules
- **`S17` (`103.500s – 110.167s`, `beatB = 106.133s` Acoustic Vacuum)**:
  - **Beat A (`103.500s`)**: If doing everything yourself is a dead end, how can an ordinary person actually break through? (`l1A: 普通人到底怎么破局？`).
  - **Beat B (`106.133s`)**: The solo practitioners who truly thrive all follow `3` concrete survival rules (`l1B: 真正高手的 3 条铁律`).
- **`S18` (`110.167s – 117.733s`, `beatB = 113.500s`)**:
  - **Beat A (`110.167s`)**: **Rule 1** — Offload all `60-point` repetitive grunt work to AI instead of competing on cheap labor (`l1A: 铁律一 · 甩掉 60分杂活`).
  - **Beat B (`113.500s`)**: Pour `100%` of your human energy into `95-point` taste, edge-case mastery, and real accountability (`l1B: 死磕 95分审美与兜底`).
- **`S19` (`117.733s – 124.700s`, `beatB = 120.867s`)**:
  - **Beat A (`117.733s`)**: **Rule 2** — Never quit blindly to build in isolation; ship a `14-day` minimum prototype to collect your very first payment (`l1A: 铁律二 · 14天收第一笔钱`).
  - **Beat B (`120.867s`)**: **Rule 3** — Escape platform bidding wars by earning `100` direct, high-trust repeat clients (`l1B: 铁律三 · 攒 100个复购熟客`).
- **`S20` (`124.700s – 132.000s`, `beatB = 127.500s` Final Singing Bowl Resonance)**:
  - **Beat A (`124.700s`)**: A true Super-Individual never plays a beast of burden doing a whole company's chores alone (`l1A: 机器跑完前 60 分量产`).
  - **Beat B (`127.500s` – `132.000s`)**: Let machines run the first `60 points` of mass production, and win with your `95-point` craft (`l1B: 凭 95 分真手艺体面赢`).

---

### Step 4 · Exact SSOT Data & Timing (`src/film/core.ts`)

Include these exact constants, `SHOT_BOUNDS`, `SHOTS` (verbatim strings!), and `CUES` in `src/film/core.ts` (you may add any visual theme tokens, palettes, or helper functions you design):

```ts
export const FPS = 30;
export const W = 1920;
export const H = 1080;
export const DURATION = 132.0; // 3,960 frames @ 30fps
export const TOTAL_FRAMES = 3960;
export const BPM = 112.3;

export const FONT_SANS = "CocoonSans, 'Noto Sans SC', 'PingFang SC', sans-serif";
export const FONT_SERIF = "CocoonSerif, 'Noto Serif SC', 'Source Han Serif SC', serif";
export const FONT_MONO = "CocoonMono, CocoonSans, ui-monospace, Menlo, monospace";

export interface ShotSpec {
  id: string;
  act: 1 | 2 | 3 | 4 | 5;
  chapter: string;
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
  [0.0, 6.6, 3.8], // S01 (6.60s, 0..198f)
  [6.6, 11.867, 8.7], // S02 (5.27s, 198..356f)
  [11.867, 18.933, 14.667], // S03 (7.07s, 356..568f)
  [18.933, 25.333, 21.6], // S04 (6.40s, 568..760f)
  [25.333, 31.633, 27.867], // S05 (6.30s, 760..949f)
  [31.633, 38.033, 34.367], // S06 (6.40s, 949..1141f)
  [38.033, 44.933, 40.667], // S07 (6.90s, 1141..1348f)
  [44.933, 51.1, 47.433], // S08 (6.17s, 1348..1533f)
  [51.1, 57.933, 53.9], // S09 (6.83s, 1533..1738f)
  [57.933, 63.833, 60.5], // S10 (5.90s, 1738..1915f)
  [63.833, 70.733, 66.467], // S11 (6.90s, 1915..2122f)
  [70.733, 76.6, 73.3], // S12 (5.87s, 2122..2298f)
  [76.6, 83.067, 79.267], // S13 (6.47s, 2298..2492f)
  [83.067, 90.033, 85.7], // S14 (6.97s, 2492..2701f)
  [90.033, 96.233, 92.8], // S15 (6.20s, 2701..2887f)
  [96.233, 103.5, 99.333], // S16 (7.27s, 2887..3105f)
  [103.5, 110.167, 106.133], // S17 (6.67s, 3105..3305f)
  [110.167, 117.733, 113.5], // S18 (7.57s, 3305..3532f)
  [117.733, 124.7, 120.867], // S19 (6.97s, 3532..3741f)
  [124.7, 132.0, 127.5], // S20 (7.30s, 3741..3960f)
];

export const SHOTS: readonly ShotSpec[] = [
  {
    id: "S01", act: 1, chapter: "第一幕 · 全能幻觉",
    start: 0.0, end: 6.6, beatB: 3.8, holdAfterB: 2.8,
    l1A: "一人公司 $10亿", l1B: "14万星 · 欠费 2.3万",
    l2: ["一句“十亿【一人公司】”，点燃全网单干造富梦；", "可【14万星】爆款作者，连服务器电费都交不起。"],
    en: ["A viral promise of a billion-dollar one-person company ignited the solo-founder craze;", "yet a 140k-star open-source creator cannot even pay his own server electricity bill."],
  },
  {
    id: "S02", act: 1, chapter: "第一幕 · 全能幻觉",
    start: 6.6, end: 11.867, beatB: 8.7, holdAfterB: 3.17,
    l1A: "两周狂发 520 条", l1B: "真实到账 ¥0.00",
    l2: ["有人靠AI两周发【520条】视频，看着很热闹；", "可翻开收款后台一看，真实买单进账却是【零元】。"],
    en: ["One creator used AI to pump out 520 videos in two weeks with lively view counts;", "yet opening the merchant ledger reveals a glaring zero in actual paid revenue."],
  },
  {
    id: "S03", act: 1, chapter: "第一幕 · 全能幻觉",
    start: 11.867, end: 18.933, beatB: 14.667, holdAfterB: 4.27,
    l1A: "100万流水只剩 12万", l1B: "消失的 88万去哪了",
    l2: ["明明没雇员工，一年【百万流水】怎只剩十二万？", "拆开【超级个体】真实账本，才看清背后的暗箱。"],
    en: ["With zero employee payroll, how does a million in revenue shrink to just 120k?", "Opening the real ledger of the Super-Individual reveals the hidden black box behind the hype."],
  },
  {
    id: "S04", act: 2, chapter: "第二幕 · 隐形杂务",
    start: 18.933, end: 25.333, beatB: 21.6, holdAfterB: 3.73,
    l1A: "为什么世界需要公司", l1B: "替你挡下 90% 杂事",
    l2: ["上班总嫌公司分走大头，诺奖得主【科斯】早算过：", "公司的法务财务与渠道，替你挡下【90%】杂事。"],
    en: ["At a job we resent the firm taking a big cut, yet Nobel laureate Ronald Coase showed why:", "a company's legal, finance, and sales teams quietly absorb 90% of outside friction for you."],
  },
  {
    id: "S05", act: 2, chapter: "第二幕 · 隐形杂务",
    start: 25.333, end: 31.633, beatB: 27.867, holdAfterB: 3.77,
    l1A: "机器省下写代码时间", l1B: "催款报税吃掉 82%",
    l2: ["辞职单干后，AI确实省下了【写代码】的时间；", "可催款、开票与扯皮售后，吞掉你【82%】精力。"],
    en: ["Once you quit to go solo, AI certainly saves you hours on coding and design;", "yet chasing invoices, filing taxes, and handling refund disputes swallow 82% of your energy."],
  },
  {
    id: "S06", act: 2, chapter: "第二幕 · 隐形杂务",
    start: 31.633, end: 38.033, beatB: 34.367, holdAfterB: 3.67,
    l1A: "同类竞品暴涨 100倍", l1B: "找客户成本贵 10倍",
    l2: ["人人都能用AI做产品，市面同类供给暴涨【百倍】；", "可买单的客户没变多，找客户成本反倒贵了【十倍】。"],
    en: ["When anyone can ship an AI product overnight, market supply explodes 100-fold;", "yet the pool of paying customers stays flat, driving acquisition costs up 10-fold."],
  },
  {
    id: "S07", act: 2, chapter: "第二幕 · 隐形杂务",
    start: 38.033, end: 44.933, beatB: 40.667, holdAfterB: 4.27,
    l1A: "不用坐班会更幸福吗", l1B: "6,505 人半年追踪",
    l2: ["不用坐班总该更轻松吧？【2026年】心理学研究，", "连续半年追踪了【6505名】单干者的真实作息。"],
    en: ["Surely no commute and no boss means an easier life? A 2026 psychology study", "tracked the real daily routines of 6,505 solo workers across six full months."],
  },
  {
    id: "S08", act: 2, chapter: "第二幕 · 隐形杂务",
    start: 44.933, end: 51.1, beatB: 47.433, holdAfterB: 3.67,
    l1A: "上班 18:00 到点下班", l1B: "单干 24 小时不敢停",
    l2: ["以前在公司上班，六点合上电脑就能【安心休息】；", "单干后停工一小时都像【亏钱】，自己成了狠监工。"],
    en: ["In an office job, closing your laptop at 6 PM meant guilt-free rest;", "solo, every hour off feels like losing money, turning you into your own ruthless 24/7 boss."],
  },
  {
    id: "S09", act: 2, chapter: "第二幕 · 隐形杂务",
    start: 51.1, end: 57.933, beatB: 53.9, holdAfterB: 4.03,
    l1A: "越自由反而越焦虑", l1B: "情绪耗竭暴涨 +42%",
    l2: ["数据揭开了残酷真相：看似【时间自由】的单干者，", "半年后的失眠与耗竭，反而比预期暴涨了【42%】。"],
    en: ["The tracking data exposed a harsh truth: those with the highest apparent schedule freedom", "suffered a 42% surge in insomnia and emotional exhaustion after six months."],
  },
  {
    id: "S10", act: 3, chapter: "第三幕 · 买量重税",
    start: 57.933, end: 63.833, beatB: 60.5, holdAfterB: 3.33,
    l1A: "平台投流抽走 ¥70", l1B: "算力扣 ¥18 · 净剩 ¥12",
    l2: ["省下的工资去哪了？每赚一百，【70元】交了投流，", "再扣掉【18元】算力订阅，落进口袋只剩十二块。"],
    en: ["Where did the saved payroll go? Out of every 100 yuan earned, 70 goes to platform traffic tolls,", "and another 18 goes to AI compute and software subscriptions, leaving just 12 in pocket."],
  },
  {
    id: "S11", act: 3, chapter: "第三幕 · 买量重税",
    start: 63.833, end: 70.733, beatB: 66.467, holdAfterB: 4.27,
    l1A: "头号大神做 70 个项目", l1B: "66 个归零 · 仅 4 个成",
    l2: ["连全球头号独立开发者，十年也做了【70个】产品；", "其中【66个】惨淡归零，真正赚钱的只有区区四个。"],
    en: ["Even the world's most celebrated solo founder, Pieter Levels, built 70 products over a decade;", "66 of them failed outright, and only 4 ever became profitable hits (5.7%)."],
  },
  {
    id: "S12", act: 3, chapter: "第三幕 · 买量重税",
    start: 70.733, end: 76.6, beatB: 73.3, holdAfterB: 3.3,
    l1A: "83% 月入不足 $500", l1B: "卖课导师稳赚 ¥1,999",
    l2: ["社区真实统计显示，【83%】单干者月入不足五百；", "唯一稳赚的，是收【1999元】教单干的卖课人。"],
    en: ["Industry surveys show 83% of solo developers earn less than $500 a month;", "the only guaranteed winners are gurus charging ¥1,999 to teach the solo-unicorn dream."],
  },
  {
    id: "S13", act: 4, chapter: "第四幕 · 同质内卷",
    start: 76.6, end: 83.067, beatB: 79.267, holdAfterB: 3.8,
    l1A: "机器一秒交 60 分活", l1B: "高价只买 95 分手艺",
    l2: ["为何工具越强越难赚？AI让人人能交【60分】活；", "可客户真正愿掏高价的，是机器够不着的【95分】。"],
    en: ["Why is money harder to make as tools improve? Because AI lets anyone produce 60-point passable work;", "yet what clients pay a premium for is the 95-point craft that machines cannot reach."],
  },
  {
    id: "S14", act: 4, chapter: "第四幕 · 同质内卷",
    start: 83.067, end: 90.033, beatB: 85.7, holdAfterB: 4.33,
    l1A: "500 份雷同生成方案", l1B: "报价 ¥5,000 砸到 ¥99",
    l2: ["当五百人拿雷同【60分】AI方案去抢同一外包单，", "唯一能拼的只剩压价，【五千元】的活砸到九十九。"],
    en: ["When 500 freelancers bid on the same job with identical 60-point AI drafts,", "the only way to compete is a brutal price war, crashing a ¥5,000 project down to ¥99."],
  },
  {
    id: "S15", act: 4, chapter: "第四幕 · 同质内卷",
    start: 90.033, end: 96.233, beatB: 92.8, holdAfterB: 3.43,
    l1A: "1780 织工买新机器", l1B: "产量翻十倍 · 工钱砍 80%",
    l2: ["两百年前【英国织工】贷款买新纺机，产量翻十倍；", "可布商反手把工价砍掉【80%】，织工越忙越贫穷。"],
    en: ["In 1780, British cottage weavers borrowed money to buy new looms, multiplying output tenfold;", "merchants simply slashed piece-rates by 80%, leaving hardworking weavers poorer than before."],
  },
  {
    id: "S16", act: 4, chapter: "第四幕 · 同质内卷",
    start: 96.233, end: 103.5, beatB: 99.333, holdAfterB: 4.17,
    l1A: "杂务 · 买量税 · 价格战", l1B: "自负盈亏的全能牛马",
    l2: ["八成杂务、七成流量税与内卷，【三座大山】压下；", "所谓“一人干十人活”，只是自负盈亏【全能牛马】。"],
    en: ["Crushed simultaneously by 82% admin chores, 70% traffic tolls, and 60-point price wars,", "doing ten people's jobs alone just turns you into a self-funded beast of burden."],
  },
  {
    id: "S17", act: 5, chapter: "第五幕 · 破局活法",
    start: 103.5, end: 110.167, beatB: 106.133, holdAfterB: 4.03,
    l1A: "普通人到底怎么破局？", l1B: "真正高手的 3 条铁律",
    l2: ["既然包揽全流程是死胡同，普通人该【怎么破局】？", "那些活得滋润的独立高手，都守住了【三条铁律】。"],
    en: ["If doing everything yourself is a dead end, how can an ordinary person actually break through?", "The solo practitioners who truly thrive all follow three concrete survival rules."],
  },
  {
    id: "S18", act: 5, chapter: "第五幕 · 破局活法",
    start: 110.167, end: 117.733, beatB: 113.5, holdAfterB: 4.23,
    l1A: "铁律一 · 甩掉 60分杂活", l1B: "死磕 95分审美与兜底",
    l2: ["第一，把【60分】杂活甩给AI，绝不拿体力拼价；", "把全部精力死磕在机器做不到的【95分】真手艺上。"],
    en: ["Rule 1: Offload all 60-point repetitive grunt work to AI instead of competing on cheap labor;", "pour 100% of your human energy into 95-point taste, edge-case mastery, and real accountability."],
  },
  {
    id: "S19", act: 5, chapter: "第五幕 · 破局活法",
    start: 117.733, end: 124.7, beatB: 120.867, holdAfterB: 3.83,
    l1A: "铁律二 · 14天收第一笔钱", l1B: "铁律三 · 攒 100个复购熟客",
    l2: ["第二，别裸辞闭门造车，用【14天】最小作品收款；", "第三，跳出竞价漏斗，靠口碑攒下【百名】复购熟客。"],
    en: ["Rule 2: Never quit blindly—ship a 14-day minimum prototype to collect your very first payment;", "Rule 3: Escape platform bidding wars by earning 100 direct, high-trust repeat clients."],
  },
  {
    id: "S20", act: 5, chapter: "第五幕 · 破局活法",
    start: 124.7, end: 132.0, beatB: 127.5, holdAfterB: 4.5,
    l1A: "机器跑完前 60 分量产", l1B: "凭 95 分真手艺体面赢",
    l2: ["真正的【超级个体】，从不靠一人硬扛整家公司杂活；", "让机器替你跑完前【60分】，凭真手艺体面地赢。"],
    en: ["A true Super-Individual never plays a beast of burden doing a whole company's chores alone;", "let machines run the first 60 points of mass production, and win with your 95-point craft."],
  },
];

export const CUES: readonly { frame: number; sec: number; src: string; volume: number; shotId: string }[] = [
  { frame: 14,   sec: 0.46,   src: "whoosh_deep.mp3",         volume: 0.42, shotId: "S01" },
  { frame: 115,  sec: 3.83,   src: "slam_impact.mp3",         volume: 0.58, shotId: "S01" },
  { frame: 262,  sec: 8.73,   src: "coin_clatter.mp3",        volume: 0.48, shotId: "S02" },
  { frame: 441,  sec: 14.70,  src: "slam_impact.mp3",         volume: 0.56, shotId: "S03" },
  { frame: 649,  sec: 21.63,  src: "paper_crumple.mp3",       volume: 0.44, shotId: "S04" },
  { frame: 837,  sec: 27.90,  src: "glitch_tear.mp3",         volume: 0.48, shotId: "S05" },
  { frame: 1032, sec: 34.40,  src: "whoosh_deep.mp3",         volume: 0.45, shotId: "S06" },
  { frame: 1221, sec: 40.70,  src: "paper_crumple.mp3",       volume: 0.42, shotId: "S07" },
  { frame: 1424, sec: 47.46,  src: "heartbeat_lub_dub.mp3",   volume: 0.52, shotId: "S08" },
  { frame: 1618, sec: 53.93,  src: "glass_shatter.mp3",       volume: 0.52, shotId: "S09" },
  { frame: 1816, sec: 60.53,  src: "reverse_suck.mp3",        volume: 0.50, shotId: "S10" },
  { frame: 1995, sec: 66.50,  src: "lock_click.mp3",          volume: 0.46, shotId: "S11" },
  { frame: 2200, sec: 73.33,  src: "coin_clatter.mp3",        volume: 0.50, shotId: "S12" },
  { frame: 2379, sec: 79.30,  src: "slam_impact.mp3",         volume: 0.50, shotId: "S13" },
  { frame: 2572, sec: 85.73,  src: "glitch_tear.mp3",         volume: 0.48, shotId: "S14" },
  { frame: 2785, sec: 92.83,  src: "paper_crumple.mp3",       volume: 0.44, shotId: "S15" },
  { frame: 2981, sec: 99.36,  src: "slam_impact.mp3",         volume: 0.60, shotId: "S16" },
  { frame: 3185, sec: 106.16, src: "water_drop.mp3",          volume: 0.52, shotId: "S17" },
  { frame: 3406, sec: 113.53, src: "lock_click.mp3",          volume: 0.48, shotId: "S18" },
  { frame: 3627, sec: 120.90, src: "whoosh_deep.mp3",         volume: 0.45, shotId: "S19" },
  { frame: 3826, sec: 127.53, src: "singing_bowl_strike.mp3", volume: 0.62, shotId: "S20" },
];
```

---

### Step 5 · Remotion Composition, Self-Audit Stills & Delivery Verification

1. Wire the master composition (`3,960 frames @ 30fps`, `1920x1080`) in `src/film/Film.tsx`, `src/Root.tsx`, `src/index.ts`, and embed the interactive `<Player>` in `src/App.tsx` with audio (`public/audio/jingwei_master_132s.mp3` + `<Sequence>` Foley cues).
2. Run `python3 scripts/subset-fonts.py` to update `src/film/fontdata.ts` and run `npx tsc --noEmit` to verify zero TypeScript errors.
3. Render at least 12–21 QA stills across Frame 0 and all 5 Acts (`npx remotion still ...` or a Node `stills.mjs` script) and visually inspect them to confirm:
   - Frame 0 (`t = 0.00s`) has full contrast and zero black fade-in;
   - Every scene is immediately understandable, with smooth visual continuity within each Act and zero crude stick-figure doodles;
   - Both `l2[0]` and `l2[1]` remain stacked and readable during `t >= beatB`, with zero text overlap, zero tofu boxes, and all rendered text `>= 24px`.
