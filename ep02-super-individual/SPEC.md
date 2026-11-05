# 《抽丝剥茧》(UNRAVEL STUDIO) · EP02《超级个体：一人成军的幻觉与科斯暗箱》工程与叙事规格书 (`SPEC.md` v6.0)

> **版本状态**：`v6.0`（正交分工版：我方锁定文学剧本、真实数据、112.30 BPM 鼓点时间轴与 Q11 净空底线；视觉构图、排版、SVG 插画与连续运镜 100% 交由 Arena 顶配前端模型 `Claude Opus 5.5 High/Max` 自由创作）
> **全片规格**：`132.0s`（`3,960 frames @ 30fps`，`1920×1080`）｜无配音纯视觉动态图景 + 双语衬线字幕（Zero-Voiceover Beat-Driven Visual Essay）
> **唯一锁定母带**：`public/audio/jingwei_master_132s.mp3`（实测 `112.30 BPM`，首重拍 Drop 位于 `t = 3.800s / Frame 114`）

---

## 一、 核心创作准则（对齐 EP01 成功范式与观众直觉体验）

1. **正交职责边界（Literature vs. Frontend Visual Direction）**：
   - 本文档只锁定**五幕二十镜文学台词、真实案例数据、帧级节拍网格（`SHOT_BOUNDS`）、20 处 `+1f` 物理拟音（`CUES`）、5 色材质令牌（`PAL`）与画面净空红线（Q11）**；
   - **不预置死板的 UI 组件框或像素坐标枷锁**——请像构建首期《信息茧房》（参考 `/tmp/ep02-promo/reference_ep01_opus_v4/src/film/ActOne.tsx..ActSix.tsx`）一样，充分发挥顶配前端与视觉导演能力，自由设计每一幕的视觉舞台、信息图表、档案手稿与平滑转场。
2. **一幕一连续视觉舞台（Act-Level Continuous Stage — 彻底解决「观众没看明白就切下一幕」）**：
   - 严禁做成 20 张每 6 秒全屏刷新一次的孤立 PPT 或雷同的 `<BrowserWindow>` 弹窗堆砌！
   - 全片共五幕（`ActOne.tsx`–`ActFive.tsx`），**每一幕内部（`3–6` 个镜头，持续 `18.7s–39.0s`）必须保持同一个连续演进的视觉舞台（`Seam & Carry`）**：
     - 同一幕内第 1 镜建立核心视觉主体（如一张工作台账本、一座公司护盾、一条 `¥100` 分账管道、一面 `60分 vs 95分` 分水岭、一幅三条生存铁律蓝图）；
     - 第 2、3 镜在**同一个舞台上**对该主体做局部展开、对比翻转或镜头推拉，绝不在同一幕内部突然清空画面换一套毫无关联的排版。
   - **单镜视觉极简（1 秒扫视法则）**：每镜画面上半场只突出 **1 个视觉焦点**与 **`L1A / L1B` 两个核心中文短语+数字**，禁止在画布里塞入密密麻麻的多行小字列表。
3. **底部双拍叠显不消失字幕（Non-Vanishing Stacked Subtitles）**：
   - 每一镜的 `l2[0]`（拍 A 中文台词，`17–22` 字）在 `t = s.start` 入场后**保持全镜常驻（`5.27s–7.57s`）**，在 `t >= s.beatB` 时切勿抽走或隐藏；
   - `l2[1]`（拍 B 中文台词，`17–22` 字）在 `t = s.beatB` 重拍鼓点处平滑叠显于 `l2[0]` 正下方，并常驻至本镜结束（`2.80s–4.50s`），下方配对应的英文斜体副标（`en[0]` / `en[1]`）。
   - 台词中用 `【...】` 标记的核心词渲染为高对比度暖金/朱砂色强调。
4. **画面净空门禁（Q11 Clean-Canvas Gate）**：
   - **首帧零淡入 + 双脉冲黄金前 4 秒**：`Frame 0` (`t = 0.00s`) 满对比度直接呈现 `S01` 拍 A（严禁黑屏缓入），`t = 0.43s` 触发第一重视觉脉冲，`t = 3.800s` (`Frame 114`) 重拍 Drop 触发第二重反差翻转；
   - **字号硬底线**：画布内所有 SVG `<text>` 字号必须 **`>= 24px`**，严禁渲染任何分镜编号（`S01`）、内部注记、英文术语（英文仅出现在底部字幕区）或重叠文字。

---

## 二、 五幕二十镜连续叙事导览（Act I – Act V）

### Act I · 全能幻觉 (`ActOne.tsx`, `S01`–`S03`, `0.000s – 18.933s`, Medium: `walnut`)
- **Act-Level Continuous Stage Concept**: The Solo Creator's Desk & Ledger — contrasting the viral "$1B One-Person Company" dream against the harsh financial reality on the very same desk.
  - **`S01` (`0.000s – 6.600s`, `beatB = 3.800s` Heavy Bass Drop)**:
    - **Beat A (`0.000s`)**: Instant high-contrast opening (zero fade-in at Frame 0). Show the viral Silicon Valley prophecy (`“史上第一家 10 亿美元一人公司即将诞生”`) with 4 gleaming AI capability badges lighting up at `t = 0.43s` (`写代码 · 做设计 · 剪视频 · 搞客服`). Top-stage `L1A`: `一人公司 $10亿`.
    - **Beat B (`3.800s` Drop)**: Right on the `3.800s` bass Drop, the scene fractures/flips to reveal the solo developer's `03:00 AM` backend: a viral open-source repo (`140,000 星`) next to a glaring red server & API overdraft bill (`-¥23,800 · 收入不够交电费`). Top-stage `L1B`: `14万星 · 欠费 2.3万`.
  - **`S02` (`6.600s – 11.867s`, `beatB = 8.700s`)**:
    - **Beat A (`6.600s`)**: Smoothly transition on the same desk to the creator's content matrix: `14 天` pumping out `520 条` AI videos with rising view bars (`L1A: 两周狂发 520 条`).
    - **Beat B (`8.700s`)**: Flip open the merchant settlement ledger beside it: `曝光 100% -> 真实到账 ¥0.00` (`L1B: 真实到账 ¥0.00`).
  - **`S03` (`11.867s – 18.933s`, `beatB = 14.667s`)**:
    - **Beat A (`11.867s`)**: The ledger expands into the Solo Studio Annual P&L Statement: `年度总流水 +¥1,000,000`, yet after platform traffic tolls (`-¥700,000`) and compute/SaaS bills (`-¥180,000`), net take-home is only `¥120,000` (`12%`) (`L1A: 100万流水只剩 12万`).
    - **Beat B (`14.667s`)**: Highlight the vanished `¥880,000` gap and stamp the episode's central question (`L1B: 消失的 88万去哪了` / `《超级个体》暗箱`).

### Act II · 隐形杂务 (`ActTwo.tsx`, `S04`–`S09`, `18.933s – 57.933s`, Mediums: `paper` & `obsidian`)
- **Act-Level Continuous Stage Concept**: Sub-stage A (`S04`–`S06`) shows Ronald Coase's Firm Shield vs. Market Friction; Sub-stage B (`S07`–`S09`) shows the `N = 6,505` 6-month longitudinal study on 24/7 self-supervision and `+42%` cognitive burnout.
  - **`S04` (`18.933s – 25.333s`, `beatB = 21.600s`, `paper`)**:
    - **Beat A (`18.933s`)**: Archival 1937 monograph card (`科斯《企业的性质》`) — why do firms exist when employees feel the company takes a huge cut? (`L1A: 为什么世界需要公司`).
    - **Beat B (`21.600s`)**: Reveal the 5 protective shields of a company (`法务合同 · 税务报账 · 渠道采买 · 客诉兜底 · 行政运维`) that quietly block `90%` of external friction for you (`L1B: 替你挡下 90% 杂事`).
  - **`S05` (`25.333s – 31.633s`, `beatB = 27.867s`, `paper`)**:
    - **Beat A (`25.333s`)**: On the same stage, dissolve the company shield: once solo, AI compresses core coding/design time down to `18%` (`L1A: AI 省下写代码时间`).
    - **Beat B (`27.867s`)**: The unshielded external chores (`催尾款 · 开发票 · 改合同 · 扯皮售后`) crash in and devour `82%` of the solo worker's energy (`L1B: 催款报税吃掉 82%`).
  - **`S06` (`31.633s – 38.033s`, `beatB = 34.367s`, `obsidian`)**:
    - **Beat A (`31.633s`)**: Pull out to the market supply-demand scissors chart: AI lets anyone ship a product overnight, sending supply rocketing `100 倍` (`L1A: 同类竞品暴涨 100倍`).
    - **Beat B (`34.367s`)**: Customer attention remains flat (`1x`), so the cost of finding a paying customer (CAC) spikes `10 倍` (`L1B: 找客户成本贵 10倍`).
  - **`S07` (`38.033s – 44.933s`, `beatB = 40.667s`, `paper`)**:
    - **Beat A (`38.033s`)**: Open the `2026` *Journal of Managerial Psychology* study examining whether working without a boss actually brings happiness (`L1A: 不用坐班会更幸福吗`).
    - **Beat B (`40.667s`)**: Reveal the `N = 6,505` cohort of high-autonomy solo workers tracked across `6 个月` (`L1B: 6,505 人半年追踪`).
  - **`S08` (`44.933s – 51.100s`, `beatB = 47.433s`, `obsidian`)**:
    - **Beat A (`44.933s`)**: Side-by-side daily clock comparison — left clock (`上班族`): `09:00–18:00` work, closing the laptop at `18:00` for guilt-free rest (`L1A: 上班 18:00 到点下班`).
    - **Beat B (`47.433s`)**: Right clock (`单干者`): all `24 小时` lit in anxious crimson (`凌晨回消息 · 周末改 Bug`), because every hour off feels like losing money (`L1B: 单干 24 小时不敢停`).
  - **`S09` (`51.100s – 57.933s`, `beatB = 53.900s`, `paper`)**:
    - **Beat A (`51.100s`)**: Plot the 6-month trajectory: the expected "freedom = happiness" baseline stays flat (`L1A: 越自由反而越焦虑`).
    - **Beat B (`53.900s` Chorus Peak)**: The measured emotional exhaustion & insomnia curve surges `+42%`, stamping the `自主权悖论` (`L1B: 情绪耗竭暴涨 +42%`).

### Act III · 买量重税 (`ActThree.tsx`, `S10`–`S12`, `57.933s – 76.600s`, Medium: `obsidian`)
- **Act-Level Continuous Stage Concept**: Following the money & the survivor-bias funnel — where the `¥100` revenue actually goes, Pieter Levels' `70-project` matrix (`66` dead vs `4` hits), and the `83% < $500/mo` indie reality vs `¥1,999` course-sellers.
  - **`S10` (`57.933s – 63.833s`, `beatB = 60.500s`)**:
    - **Beat A (`57.933s`)**: Precision cashflow breakdown of every `¥100` earned: the largest stream (`-¥70` / `70%`) is siphoned off by platform traffic tolls & ad bidding (`L1A: 平台投流抽走 ¥70`).
    - **Beat B (`60.500s`)**: A second stream (`-¥18` / `18%`) drains into AI API compute & SaaS subscriptions, leaving a thin `¥12` (`12%`) trickle for the creator (`L1B: 算力扣 ¥18 · 净剩 ¥12`).
  - **`S11` (`63.833s – 70.733s`, `beatB = 66.467s`)**:
    - **Beat A (`63.833s`)**: Transition to the `10 × 7 = 70` project archive grid of the world's #1 solo founder (Pieter Levels) over 10 years (`L1A: 头号大神做 70 个项目`).
    - **Beat B (`66.467s`)**: `66` cells dim out as failed/abandoned (`66 个归零`), leaving only `4` golden profitable hits (`命中率仅 5.7%`) (`L1B: 66 个归零 · 仅 4 个成`).
  - **`S12` (`70.733s – 76.600s`, `beatB = 73.300s`)**:
    - **Beat A (`70.733s`)**: Zoom out to the industry-wide indie developer income distribution: `83%` earn under `$500/月` (`L1A: 83% 月入不足 $500`).
    - **Beat B (`73.300s`)**: Contrast against the gleaming checkout card of "AI Solo-Unicorn Bootcamp" charging `¥1,999` per student (`L1B: 卖课导师稳赚 ¥1,999`).

### Act IV · 同质内卷 (`ActFour.tsx`, `S13`–`S16`, `76.600s – 103.500s`, Mediums: `obsidian` & `paper`)
- **Act-Level Continuous Stage Concept**: The `60-Point` Commodity Trap vs. the `95-Point` Craft Moat — showing why better AI tools trigger brutal price wars (`¥5,000 -> ¥99`), mirroring `1780` British cottage weavers, and culminating in the 3-mountain climax (`自负盈亏的全能牛马`).
  - **`S13` (`76.600s – 83.067s`, `beatB = 79.267s`, `obsidian`)**:
    - **Beat A (`76.600s`)**: Visual capability elevation chart: AI instantly fills the `0 -> 60 分` passable zone (`模板代码 · 套路海报 · 洗稿文案`), making 60-point work free and commodity-priced (`L1A: AI 一秒生成 60 分活`).
    - **Beat B (`79.267s`)**: Above the 60-point floodline stands the steep `95 分` brass fortress (`独到审美 · 极端排障 · 商业兜底`) where real client budgets live (`L1B: 高价只买 95 分手艺`).
  - **`S14` (`83.067s – 90.033s`, `beatB = 85.700s`, `obsidian`)**:
    - **Beat A (`83.067s`)**: Inside the freelance bidding hall: `500 份` identical `60 分` AI proposals flood a single job posting (`L1A: 500 份雷同 AI 方案`).
    - **Beat B (`85.700s`)**: With zero differentiation, bids crash in real time from `¥5,000` -> `¥800` -> `¥99 包月` (`L1B: 报价 ¥5,000 砸到 ¥99`).
  - **`S15` (`90.033s – 96.233s`, `beatB = 92.800s`, `paper`)**:
    - **Beat A (`90.033s`)**: Historical twin ledger (`1780 英国工业革命 ⇄ 2026 AI 时代`): in `1780`, cottage weavers took loans to buy faster spinning looms, multiplying cloth output `10 倍` (`L1A: 1780 织工买新机器`).
    - **Beat B (`92.800s`)**: Merchants who controlled the sales channel slashed piece-rates by `-80%`, leaving weavers working 16-hour days in deeper poverty (`L1B: 产量翻十倍 · 工钱砍 80%`).
  - **`S16` (`96.233s – 103.500s`, `beatB = 99.333s` Climax Drop, `obsidian`)**:
    - **Beat A (`96.233s`)**: The three structural traps exposed in Acts II–IV (`82% 隐形杂务` + `70% 平台买量税` + `60分 恶性价格战`) converge and lock together (`L1A: 杂务 · 买量税 · 价格战`).
    - **Beat B (`99.333s` Heavy Climax)**: Stamp the core diagnosis over the "one-person army" illusion: doing ten jobs alone without leverage just turns you into a **`自负盈亏的全能牛马`** (`L1B: 自负盈亏的全能牛马`).

### Act V · 破局活法 (`ActFive.tsx`, `S17`–`S20`, `103.500s – 132.000s`, Mediums: `obsidian` -> `dawn`)
- **Act-Level Continuous Stage Concept**: From the `103.50s` Acoustic Vacuum question (`普通人到底怎么破局？`) to the warm golden `dawn` blueprint of the **Three Concrete Survival Rules** (`甩掉60分死磕95分` · `14天最小作品收首款` · `攒下100个直接复购熟客`).
  - **`S17` (`103.500s – 110.167s`, `beatB = 106.133s`, `obsidian`)**:
    - **Beat A (`103.500s` Acoustic Vacuum)**: As the music strips back to a quiet breath, surface the viewer's deepest question: if doing everything yourself is a dead end, how can an ordinary person break through? (`L1A: 普通人到底怎么破局？`).
    - **Beat B (`106.133s`)**: A warm brass beacon ignites, introducing the **Three Survival Rules (`三条生存铁律`)** of solo practitioners who actually thrive (`L1B: 真正高手的 3 条铁律`).
  - **`S18` (`110.167s – 117.733s`, `beatB = 113.500s`, `dawn`)**:
    - **Beat A (`110.167s`)**: **Rule 1 (Defeating the 60-Point Price War)** — Delegate `100%` of `60 分` repetitive template work to AI; never compete on cheap physical labor (`L1A: 铁律一 · 甩掉 60分杂活`).
    - **Beat B (`113.500s`)**: Concentrate all human hours on the `95 分` craft that machines cannot fake: domain taste, gnarly edge-case debugging, and real accountability (`L1B: 死磕 95分审美与兜底`).
  - **`S19` (`117.733s – 124.700s`, `beatB = 120.867s`, `dawn`)**:
    - **Beat A (`117.733s`)**: **Rule 2 (Defeating the 5.7% Hit-Rate Trap)** — Cross out "quitting your job to code in isolation for 6 months"; ship a minimum viable work in **`14 天`** and verify that a real user pays the first dollar (`L1A: 铁律二 · 14天收第一笔钱`).
    - **Beat B (`120.867s`)**: **Rule 3 (Defeating the 70% Traffic Tax)** — Bypass public ad-bidding funnels by building direct reputation and earning **`100 个` high-trust repeat clients** (`复购率 > 80%`) (`L1B: 铁律三 · 攒 100个复购熟客`).
  - **`S20` (`124.700s – 132.000s`, `beatB = 127.500s` Final Singing Bowl Resonance, `dawn`)**:
    - **Beat A (`124.700s`)**: The three survival pillars lock into a unified golden architecture on stage (`L1A: 机器跑完前 60 分量产`).
    - **Beat B (`127.500s` – `132.000s`)**: On the `127.50s` singing-bowl strike, resolve into the final takeaway of Episode 02 (`L1B: 凭 95 分真手艺体面赢`): let machines run the first 60 points of mass production, and win with your 95-point human craft.

---

## 三、 精确时间轴、双语台词与拟音常量（`src/film/core.ts` 单一真相源）

```ts
export const FPS = 30;
export const W = 1920;
export const H = 1080;
export const DURATION = 132.0; // 3,960 frames @ 30fps
export const TOTAL_FRAMES = 3960;
export const BPM = 112.3;

export type Medium = "walnut" | "paper" | "obsidian" | "dawn";

export const PAL = {
  walnut:   { ground: "#141210", ink: "#F4EFE6", brass: "#D4AF37", vermilion: "#C83E2B", card: "#1B1815", dim: "#9A9184" },
  paper:    { ground: "#F4EFE6", ink: "#141413", brass: "#9A6B16", vermilion: "#C83E2B", card: "#FBF8F1", soft: "#6E675C", marker: "#FACC15" },
  obsidian: { ground: "#0B0D13", ink: "#F4EFE6", brass: "#D4AF37", vermilion: "#C83E2B", card: "#131722", dim: "#7D8797" },
  dawn:     { ground: "#141210", ink: "#F4EFE6", brass: "#D4AF37", vermilion: "#C83E2B", card: "#1E1914", warm: "#FFE7B3", dim: "#B5A895" },
} as const;

export const FONT_SANS = "CocoonSans, 'Noto Sans SC', 'PingFang SC', sans-serif";
export const FONT_SERIF = "CocoonSerif, 'Noto Serif SC', 'Source Han Serif SC', serif";
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
    id: "S01", act: 1, chapter: "第一幕 · 全能幻觉", medium: "walnut",
    start: 0.0, end: 6.6, beatB: 3.8, holdAfterB: 2.8,
    l1A: "一人公司 $10亿", l1B: "14万星 · 欠费 2.3万",
    l2: ["一句“十亿【一人公司】”，点燃全网单干造富梦；", "可【14万星】爆款作者，连服务器电费都交不起。"],
    en: ["A viral promise of a billion-dollar one-person company ignited the solo-founder craze;", "yet a 140k-star open-source creator cannot even pay his own server electricity bill."],
  },
  {
    id: "S02", act: 1, chapter: "第一幕 · 全能幻觉", medium: "walnut",
    start: 6.6, end: 11.867, beatB: 8.7, holdAfterB: 3.17,
    l1A: "两周狂发 520 条", l1B: "真实到账 ¥0.00",
    l2: ["有人靠AI两周发【520条】视频，看着很热闹；", "可翻开收款后台一看，真实买单进账却是【零元】。"],
    en: ["One creator used AI to pump out 520 videos in two weeks with lively view counts;", "yet opening the merchant ledger reveals a glaring zero in actual paid revenue."],
  },
  {
    id: "S03", act: 1, chapter: "第一幕 · 全能幻觉", medium: "walnut",
    start: 11.867, end: 18.933, beatB: 14.667, holdAfterB: 4.27,
    l1A: "100万流水只剩 12万", l1B: "消失的 88万去哪了",
    l2: ["明明没雇员工，一年【百万流水】怎只剩十二万？", "拆开【超级个体】真实账本，才看清背后的暗箱。"],
    en: ["With zero employee payroll, how does a million in revenue shrink to just 120k?", "Opening the real ledger of the Super-Individual reveals the hidden black box behind the hype."],
  },
  {
    id: "S04", act: 2, chapter: "第二幕 · 隐形杂务", medium: "paper",
    start: 18.933, end: 25.333, beatB: 21.6, holdAfterB: 3.73,
    l1A: "为什么世界需要公司", l1B: "替你挡下 90% 杂事",
    l2: ["上班总嫌公司分走大头，诺奖得主【科斯】早算过：", "公司的法务财务与渠道，替你挡下【90%】杂事。"],
    en: ["At a job we resent the firm taking a big cut, yet Nobel laureate Ronald Coase showed why:", "a company's legal, finance, and sales teams quietly absorb 90% of outside friction for you."],
  },
  {
    id: "S05", act: 2, chapter: "第二幕 · 隐形杂务", medium: "paper",
    start: 25.333, end: 31.633, beatB: 27.867, holdAfterB: 3.77,
    l1A: "机器省下写代码时间", l1B: "催款报税吃掉 82%",
    l2: ["辞职单干后，AI确实省下了【写代码】的时间；", "可催款、开票与扯皮售后，吞掉你【82%】精力。"],
    en: ["Once you quit to go solo, AI certainly saves you hours on coding and design;", "yet chasing invoices, filing taxes, and handling refund disputes swallow 82% of your energy."],
  },
  {
    id: "S06", act: 2, chapter: "第二幕 · 隐形杂务", medium: "obsidian",
    start: 31.633, end: 38.033, beatB: 34.367, holdAfterB: 3.67,
    l1A: "同类竞品暴涨 100倍", l1B: "找客户成本贵 10倍",
    l2: ["人人都能用AI做产品，市面同类供给暴涨【百倍】；", "可买单的客户没变多，找客户成本反倒贵了【十倍】。"],
    en: ["When anyone can ship an AI product overnight, market supply explodes 100-fold;", "yet the pool of paying customers stays flat, driving acquisition costs up 10-fold."],
  },
  {
    id: "S07", act: 2, chapter: "第二幕 · 隐形杂务", medium: "paper",
    start: 38.033, end: 44.933, beatB: 40.667, holdAfterB: 4.27,
    l1A: "不用坐班会更幸福吗", l1B: "6,505 人半年追踪",
    l2: ["不用坐班总该更轻松吧？【2026年】心理学研究，", "连续半年追踪了【6505名】单干者的真实作息。"],
    en: ["Surely no commute and no boss means an easier life? A 2026 psychology study", "tracked the real daily routines of 6,505 solo workers across six full months."],
  },
  {
    id: "S08", act: 2, chapter: "第二幕 · 隐形杂务", medium: "obsidian",
    start: 44.933, end: 51.1, beatB: 47.433, holdAfterB: 3.67,
    l1A: "上班 18:00 到点下班", l1B: "单干 24 小时不敢停",
    l2: ["以前在公司上班，六点合上电脑就能【安心休息】；", "单干后停工一小时都像【亏钱】，自己成了狠监工。"],
    en: ["In an office job, closing your laptop at 6 PM meant guilt-free rest;", "solo, every hour off feels like losing money, turning you into your own ruthless 24/7 boss."],
  },
  {
    id: "S09", act: 2, chapter: "第二幕 · 隐形杂务", medium: "paper",
    start: 51.1, end: 57.933, beatB: 53.9, holdAfterB: 4.03,
    l1A: "越自由反而越焦虑", l1B: "情绪耗竭暴涨 +42%",
    l2: ["数据揭开了残酷真相：看似【时间自由】的单干者，", "半年后的失眠与耗竭，反而比预期暴涨了【42%】。"],
    en: ["The tracking data exposed a harsh truth: those with the highest apparent schedule freedom", "suffered a 42% surge in insomnia and emotional exhaustion after six months."],
  },
  {
    id: "S10", act: 3, chapter: "第三幕 · 买量重税", medium: "obsidian",
    start: 57.933, end: 63.833, beatB: 60.5, holdAfterB: 3.33,
    l1A: "平台投流抽走 ¥70", l1B: "算力扣 ¥18 · 净剩 ¥12",
    l2: ["省下的工资去哪了？每赚一百，【70元】交了投流，", "再扣掉【18元】算力订阅，落进口袋只剩十二块。"],
    en: ["Where did the saved payroll go? Out of every 100 yuan earned, 70 goes to platform traffic tolls,", "and another 18 goes to AI compute and software subscriptions, leaving just 12 in pocket."],
  },
  {
    id: "S11", act: 3, chapter: "第三幕 · 买量重税", medium: "obsidian",
    start: 63.833, end: 70.733, beatB: 66.467, holdAfterB: 4.27,
    l1A: "头号大神做 70 个项目", l1B: "66 个归零 · 仅 4 个成",
    l2: ["连全球头号独立开发者，十年也做了【70个】产品；", "其中【66个】惨淡归零，真正赚钱的只有区区四个。"],
    en: ["Even the world's most celebrated solo founder, Pieter Levels, built 70 products over a decade;", "66 of them failed outright, and only 4 ever became profitable hits (5.7%)."],
  },
  {
    id: "S12", act: 3, chapter: "第三幕 · 买量重税", medium: "obsidian",
    start: 70.733, end: 76.6, beatB: 73.3, holdAfterB: 3.3,
    l1A: "83% 月入不足 $500", l1B: "卖课导师稳赚 ¥1,999",
    l2: ["社区真实统计显示，【83%】单干者月入不足五百；", "唯一稳赚的，是收【1999元】教单干的卖课人。"],
    en: ["Industry surveys show 83% of solo developers earn less than $500 a month;", "the only guaranteed winners are gurus charging ¥1,999 to teach the solo-unicorn dream."],
  },
  {
    id: "S13", act: 4, chapter: "第四幕 · 同质内卷", medium: "obsidian",
    start: 76.6, end: 83.067, beatB: 79.267, holdAfterB: 3.8,
    l1A: "机器一秒交 60 分活", l1B: "高价只买 95 分手艺",
    l2: ["为何工具越强越难赚？AI让人人能交【60分】活；", "可客户真正愿掏高价的，是机器够不着的【95分】。"],
    en: ["Why is money harder to make as tools improve? Because AI lets anyone produce 60-point passable work;", "yet what clients pay a premium for is the 95-point craft that machines cannot reach."],
  },
  {
    id: "S14", act: 4, chapter: "第四幕 · 同质内卷", medium: "obsidian",
    start: 83.067, end: 90.033, beatB: 85.7, holdAfterB: 4.33,
    l1A: "500 份雷同生成方案", l1B: "报价 ¥5,000 砸到 ¥99",
    l2: ["当五百人拿雷同【60分】AI方案去抢同一外包单，", "唯一能拼的只剩压价，【五千元】的活砸到九十九。"],
    en: ["When 500 freelancers bid on the same job with identical 60-point AI drafts,", "the only way to compete is a brutal price war, crashing a ¥5,000 project down to ¥99."],
  },
  {
    id: "S15", act: 4, chapter: "第四幕 · 同质内卷", medium: "paper",
    start: 90.033, end: 96.233, beatB: 92.8, holdAfterB: 3.43,
    l1A: "1780 织工买新机器", l1B: "产量翻十倍 · 工钱砍 80%",
    l2: ["两百年前【英国织工】贷款买新纺机，产量翻十倍；", "可布商反手把工价砍掉【80%】，织工越忙越贫穷。"],
    en: ["In 1780, British cottage weavers borrowed money to buy new looms, multiplying output tenfold;", "merchants simply slashed piece-rates by 80%, leaving hardworking weavers poorer than before."],
  },
  {
    id: "S16", act: 4, chapter: "第四幕 · 同质内卷", medium: "obsidian",
    start: 96.233, end: 103.5, beatB: 99.333, holdAfterB: 4.17,
    l1A: "杂务 · 买量税 · 价格战", l1B: "自负盈亏的全能牛马",
    l2: ["八成杂务、七成流量税与内卷，【三座大山】压下；", "所谓“一人干十人活”，只是自负盈亏【全能牛马】。"],
    en: ["Crushed simultaneously by 82% admin chores, 70% traffic tolls, and 60-point price wars,", "doing ten people's jobs alone just turns you into a self-funded beast of burden."],
  },
  {
    id: "S17", act: 5, chapter: "第五幕 · 破局活法", medium: "obsidian",
    start: 103.5, end: 110.167, beatB: 106.133, holdAfterB: 4.03,
    l1A: "普通人到底怎么破局？", l1B: "真正高手的 3 条铁律",
    l2: ["既然包揽全流程是死胡同，普通人该【怎么破局】？", "那些活得滋润的独立高手，都守住了【三条铁律】。"],
    en: ["If doing everything yourself is a dead end, how can an ordinary person actually break through?", "The solo practitioners who truly thrive all follow three concrete survival rules."],
  },
  {
    id: "S18", act: 5, chapter: "第五幕 · 破局活法", medium: "dawn",
    start: 110.167, end: 117.733, beatB: 113.5, holdAfterB: 4.23,
    l1A: "铁律一 · 甩掉 60分杂活", l1B: "死磕 95分审美与兜底",
    l2: ["第一，把【60分】杂活甩给AI，绝不拿体力拼价；", "把全部精力死磕在机器做不到的【95分】真手艺上。"],
    en: ["Rule 1: Offload all 60-point repetitive grunt work to AI instead of competing on cheap labor;", "pour 100% of your human energy into 95-point taste, edge-case mastery, and real accountability."],
  },
  {
    id: "S19", act: 5, chapter: "第五幕 · 破局活法", medium: "dawn",
    start: 117.733, end: 124.7, beatB: 120.867, holdAfterB: 3.83,
    l1A: "铁律二 · 14天收第一笔钱", l1B: "铁律三 · 攒 100个复购熟客",
    l2: ["第二，别裸辞闭门造车，用【14天】最小作品收款；", "第三，跳出竞价漏斗，靠口碑攒下【百名】复购熟客。"],
    en: ["Rule 2: Never quit blindly—ship a 14-day minimum prototype to collect your very first payment;", "Rule 3: Escape platform bidding wars by earning 100 direct, high-trust repeat clients."],
  },
  {
    id: "S20", act: 5, chapter: "第五幕 · 破局活法", medium: "dawn",
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
