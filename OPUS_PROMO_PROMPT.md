Build a 132.0-second (`3,960 frames @ 30fps`, `1920x1080`) **zero-voiceover, beat-driven kinetic visual essay** in Remotion for **UNRAVEL STUDIO (《抽丝剥茧》)** Episode 02: **《超级个体：一人成军的幻觉与科斯暗箱》(The "One-Person Unicorn" Mirage & Coase's Black Box)**.

First, clone the production asset & reference repository into `/tmp/ep02-promo` and copy its audio assets and reference files:

```bash
git clone --branch ep02-super-individual https://github.com/Evan-Joseph/info-cocoon-promo.git /tmp/ep02-promo
ls -la /tmp/ep02-promo/docs/ /tmp/ep02-promo/assets/audio/ /tmp/ep02-promo/reference_ep01_opus_v4/src/film/
```

Read `/tmp/ep02-promo/docs/SPEC.md` and inspect `/tmp/ep02-promo/reference_ep01_opus_v4/src/film/` (`core.ts`, `kit.tsx`, `Film.tsx`, `ActOne.tsx`–`ActSix.tsx`) before writing code.

---

## 1. ARCHITECTURAL BASELINE TO SURPASS (`src/film/` CONTINUOUS 6-ACT ENGINE)

In Episode 01 (`《信息茧房》`), our winning production codebase (`/tmp/ep02-promo/reference_ep01_opus_v4/src/film/`) achieved viral retention because it did **NOT** build 20 disconnected static slide components (`<S01>`..`<S20>`). Instead, it used a **Continuous 6-Act Master-Clock Architecture (`2,600+` lines of procedural SVG & spring physics)**:
1. **`src/film/core.ts`**:
   - Defines the exact 20-shot boundary array `SHOT_BOUNDS` (`132.0s` total, `3,960 frames @ 30fps`), continuous clock helpers (`clamp`, `lerp`, `remap`, `eo`, `io`, `eio`, `seg`), closed-form damped spring `sp(t, d, zeta, omega)`, `beatPulseAt(t)` (locks to `115.0 BPM`《精卫》even-bar downbeats starting at `t = 3.80s` + pre-drop acoustic vacuums + shockwave flashes), and the `SHOTS` array with `l2: [string, string]` (`【...】` keywords highlighted in burnished gold `#E5B85B` or vermilion `#C83E2B` with downbeat pop `kwPop`) and `en: [string, string]`.
2. **`src/film/kit.tsx`**:
   - Defines the 4 tactile physical media palettes (`MEDIA.walnut`, `MEDIA.paper`, `MEDIA.obsidian`, `MEDIA.dawn`), `<Defs />` (paper grain, risograph grid, blind-hatch, brass gradients, soft shadows), `<Backdrop mode={...} />`, `<Stamp />` (tilted double-border archival stamp), and `<Leader />` (elbow callout line with solid anchor dot and pure Chinese label $\ge 32\text{px}$).
3. **`src/film/Film.tsx`**:
   - Renders 6 overlapping Act layers (`LAYERS`: `a1`–`a6`) where adjacent Acts overlap by `~0.9s` and transition via physical `clipPath` (`inset(...)` split wipe or `circle(r at x y)` iris) with Foley audio (`CUES`) and the uncut master soundtrack `public/audio/jingwei_master_132s.mp3` (`volume = 0.78`, zero ducking), topped by `<VibeFiveZoneOverlay />` (borderless `47px` `Noto Serif SC` Chinese primary line + `23px` `EB Garamond Italic` English subtitle over a seamless `180px` bottom vignette).
4. **`src/film/ActOne.tsx` through `src/film/ActSix.tsx` (`Continuous Within-Act Seam Carry`)**:
   - Each Act is a **single continuous component `<ActOne t={t} />` .. `<ActSix t={t} />`** where tangible editorial props stay on stage and physically morph from shot to shot (`Seam Carry`) without hard cuts!
   - **Your mission for Episode 02**: Inherit and **surpass** `/tmp/ep02-promo/reference_ep01_opus_v4/src/film/` by building `src/film/core.ts`, `src/film/kit.tsx`, `src/film/Film.tsx`, and `src/film/ActOne.tsx`–`src/film/ActSix.tsx` (`2,600+` lines of rich, bespoke SVG mechanisms) for **《超级个体：一人成军的幻觉与科斯暗箱》**.

---

## 2. NON-NEGOTIABLE VISUAL & TYPOGRAPHY RULES (Q11 CLEAN-STAGE GATE)

1. **NO Twin Top-Left / Top-Right Header Boxes & NO Top-Right HUD Badges**:
   - Never place two rounded-rectangle title cards at the top-left and top-right of every shot, and never render persistent top-right citation/HUD boxes.
   - The upper `85%` of the `1920x1080` canvas (`y = 60..860`) is a **single, unfragmented 2.5D physical stage**. All `L1` anchors (`44px–76px`, `fontWeight: 800/900`) and `<Leader />` callouts (`32px–38px`, `fontWeight: 800`) live directly inside the scene geometry.
2. **Strict Language Separation (`L1 = 100% Pure Chinese + Core Numbers`, `L2 = Bilingual Subtitle`)**:
   - **On-Canvas Stage (`L1` & all diagram labels)**: **100% pure Simplified Chinese characters + core numbers** (`%`, `倍`, `万`, `亿`, `03:00`, `1937`, `2026`, `6505`, `70`, `66`, `5.7%`, `83%`, `500`, `60`, `95`, `4172`, `2831`, `14`). **Zero English words** (`NO` `OpenClaw`, `NO` `Coase`, `NO` `Autonomy`, `NO` `API`, `NO` `MVP`) and **zero ASCII arrows (`->`)** anywhere on the stage!
   - **Minimum Font Size**: Every single text element on the canvas must have `fontSize >= 28px` (key callouts `32px–44px`, main `L1` anchors `46px–76px`). Zero tiny `<24px` text anywhere.
   - **Bottom `L2` Subtitle Zone (`y = 880..1050`)**: Borderless, two-beat Chinese primary line (`47px`, `Noto Serif SC`, `fontWeight: 700`, `【...】` keywords highlighted in `#E5B85B` or `#C83E2B` with downbeat scale pop) + `23px` `EB Garamond Italic` English line below.
3. **Dual-Pulse First 4 Seconds in `S01` (`t = 0.00s` Zero Fade-In + `t = 0.45s` Pulse 1 + `t = 3.80s` Drop Pulse 2)**:
   - **`t = 0.00s` (Frame 0)**: Zero black fade-in (`opacity: 1` at Frame 0, and `S01` Beat A subtitle `op = 1` at Frame 0). Left side shows the gleaming brass monument **`单兵估值 10 亿`**, center shows the solo operator wearing a golden badge with 10 brass mechanical arms ready, right side shows the crimson alarm panel **`03:00 · 10 路报错工单`**.
   - **`t = 0.45s` (Frame 13, Pulse 1 + `lock_click.mp3`)**: All 10 brass mechanical arms (`写代码 / 画海报 / 剪视频 / 写文案 / 做客服 / 管账单 / 跑投流 / 抓数据 / 修接口 / 盯运维`) snap outward and lock into place with a damped spring impulse.
   - **`t = 3.80s` (Frame 114, Pulse 2 on《精卫》First Heavy Drop + `slam_impact.mp3`)**: The left `单兵估值 10 亿` brass monument cracks and dims; the 10 golden mechanical arms violently shatter and invert into **10 tangled crimson telephone cords & error tickets** (`接口崩了 / 模型幻觉 / 客户拒付 / 账号限流 / 账单超支 / 合规警告 / 差评投诉 / 服务宕机 / 数据丢失 / 并发死锁`) that chain the operator to the `03:00` switchboard desk!

---

## 3. EXACT TIMING (`SHOT_BOUNDS`), FOLEY (`CUES`), AND 20-SHOT CONTINUOUS ACT SPECIFICATION

### 3.1 Master Audio & Exact `SHOT_BOUNDS` (`132.0s`, `3,960 frames @ 30fps`)
Copy `/tmp/ep02-promo/assets/audio/*.mp3` into `public/audio/`.
- **Master BGM**: `public/audio/jingwei_master_132s.mp3` (`痛劣 - 精卫 (DJ 0.88x 纯音乐)`, `115.0 BPM`, `F Minor`, starts from original track `13.61s` so the first heavy 4/4 Drop lands at **`t = 3.80s`**, running uncut to `132.0s` at constant `volume = 0.78`).
- **Exact `SHOT_BOUNDS` (`[startSec, endSec, beatBSec]`)**:
```ts
export const SHOT_BOUNDS: readonly [number, number, number][] = [
  [0.0,   6.2,   3.80],  // S01 (6.2s) — Act I (walnut) · 0.0s Zero Fade + 0.45s Arm Lock + 3.80s Drop Red Chains
  [6.2,   13.0,  9.33],  // S02 (6.8s) — Act I (walnut) · Badge flips to Asymmetric Scale (14万星 vs 赤字巨石)
  [13.0,  19.4,  15.94], // S03 (6.4s) — Act I (walnut) · Boulder splits into 520-Clip Waterfall vs 3 Brass Gates
  [19.4,  26.2,  22.53], // S04 (6.8s) — Act II (paper) · 3 Gates rise into 1937 Coase Building (50 Meshing Gears)
  [26.2,  32.4,  29.05], // S05 (6.2s) — Act II (paper) · Steelmanning: AI cuts 90% friction, 50 Pods lift off (10x)
  [32.4,  39.4,  35.62], // S06 (7.0s) — Act II (paper) · 100x Supply Swarm & Coase Scissors Curve (10x Trust Wall)
  [39.4,  45.8,  42.34], // S07 (6.4s) — Act III (obsidian) · Camera dives into 6,505-Worker Pulse Matrix (2026顶刊)
  [45.8,  51.8,  48.56], // S08 (6.0s) — Act III (obsidian) · Zoom 5x into Pod #01: Broken Clock vs 24h Zeroing Hourglass
  [51.8,  58.6,  54.93], // S09 (6.8s) — Act III (obsidian) · Hourglass morphs to Whip + +42% Burnout ECG Spike
  [58.6,  65.8,  61.91], // S10 (7.2s) — Act III (obsidian) · Plunge underground: Giant 70% Platform Toll Funnel (@2831赞)
  [65.8,  72.4,  68.84], // S11 (6.6s) — Act IV (paper) · 70-Project Matrix: 66 Crossed Out & Fall, 4 Survive (5.7%)
  [72.4,  78.6,  75.25], // S12 (6.2s) — Act IV (paper) · 66 Fallen Pods form 83% <500 Base vs Golden Shovel Booth
  [78.6,  85.6,  81.82], // S13 (7.0s) — Act IV (paper) · 5-Arm Solo Pod Slams into 60-Point Glass Ceiling
  [85.6,  92.0,  88.54], // S14 (6.4s) — Act IV (paper) · Ceiling morphs to Double Distillation Press -> 3-Prong Plug
  [92.0,  98.2,  94.85], // S15 (6.2s) — Act V (obsidian) · 12-Plug Bidding Matrix & Zero-Margin Waterfall Collapse
  [98.2,  105.0, 101.33],// S16 (6.8s) — Act V (obsidian) · 3-Layer Cage Synthesis (Broken Seawall + 10x Wall + 70% Funnel)
  [105.0, 111.6, 108.04],// S17 (6.6s) — Act V (obsidian) · Underwater Pupil Contraction -> 4,172-Upvote Parchment Card
  [111.6, 118.0, 114.54],// S18 (6.4s) — Act VI (dawn) · Card folds 3D into 60-Pt Base -> 95-Pt Golden Obelisk Pierces Ceiling
  [118.0, 125.2, 121.31],// S19 (7.2s) — Act VI (dawn) · Obelisk morphs to 14-Day Probe Needle (Pops 3 Bubbles, Hits 4th Coin)
  [125.2, 132.0, 128.33],// S20 (6.8s) — Act VI (walnut) · Callback to 03:00 Desk: Unplug 70% Hose & Forge Brass Sovereign Seal
];
```

- **9 Beat-Locked Foley `CUES`**:
```ts
const CUES: { frame: number; src: string; volume: number }[] = [
  { frame: Math.round(0.45 * 30),   src: 'audio/lock_click.mp3',          volume: 0.42 }, // S01 Pulse 1: 10 brass arms lock
  { frame: Math.round(3.82 * 30),   src: 'audio/slam_impact.mp3',         volume: 0.48 }, // S01 Pulse 2: 3.80s Drop chains slam
  { frame: Math.round(9.36 * 30),   src: 'audio/lock_click.mp3',          volume: 0.36 }, // S02 Right pan deficit boulder crash
  { frame: Math.round(19.43 * 30),  src: 'audio/whoosh_deep.mp3',         volume: 0.34 }, // Act I -> Act II media wipe
  { frame: Math.round(35.65 * 30),  src: 'audio/glass_shatter.mp3',       volume: 0.38 }, // S06 Coase 10x wall tear
  { frame: Math.round(54.96 * 30),  src: 'audio/heartbeat_lub_dub.mp3',   volume: 0.42 }, // S09 +42% burnout ECG spike
  { frame: Math.round(61.94 * 30),  src: 'audio/reverse_suck.mp3',        volume: 0.40 }, // S10 70% underground funnel valve
  { frame: Math.round(88.57 * 30),  src: 'audio/glitch_tear.mp3',         volume: 0.36 }, // S14 Double distillation press
  { frame: Math.round(105.03 * 30), src: 'audio/singing_bowl_strike.mp3', volume: 0.40 }, // S17 Fourth-wall 4,172 card
  { frame: Math.round(128.36 * 30), src: 'audio/slam_impact.mp3',         volume: 0.44 }, // S20 Sovereign brass seal stamp
];
```

### 3.2 Complete 20-Shot Subtitle & Continuous Visual Morphing Table

Every Act component (`ActOne.tsx`–`ActSix.tsx`) must implement continuous within-Act `Seam Carry` transitions where the primary geometry physically transforms from shot to shot:

| Shot | Act & Media | Window (`beatB`) | `L1` Stage Anchors (Pure Chinese + Numbers, Integrated Into Scene) | `l2: [beatA, beatB]` (`47px Noto Serif SC`) & `en: [enA, enB]` (`23px EB Garamond Italic`) | Continuous Within-Act Physical Apparatus & Seam Carry |
| :--- | :--- | :---: | :--- | :--- | :--- |
| **S01** | Act I<br>`walnut` | `0.0–6.2s`<br>(`3.80s`) | Left plaque: `单兵估值 10 亿`<br>Right alarm: `03:00 · 10 路报错工单` | `A`: `一人配【10个AI】像家公司`<br>`B`: `【凌晨3点】沦为算法接线员`<br>*Ten engines crown a solo founder;*<br>*at 3 a.m., ten alarms chain the operator.* | **`t=0.00s` Zero Fade-In**: Left brass monument `单兵估值 10 亿`, center solo operator + golden badge `超级个体 · 01` + 10 brass mechanical arms (`写代码/画海报/剪视频/写文案/做客服/管账单/跑投流/抓数据/修接口/盯运维`), right alarm `03:00 · 10 路报错工单`. **`t=0.45s`**: 10 arms snap & lock. **`t=3.80s` Drop**: 10 arms shatter into 10 crimson phone cords with error tickets (`接口崩了/模型幻觉/客户拒付/账号限流/账单超支/合规警告/差评投诉/服务宕机/数据丢失/并发死锁`) binding the operator! |
| **S02** | Act I<br>`walnut` | `6.2–13.0s`<br>(`9.33s`) | Left pillar: `周访客 200 万`<br>Right boulder: `营收账面赤字` | `A`: `头号一人项目揽【14万星】`<br>`B`: `月入1万刀倒贴【算力费】`<br>*140,000 stars on OpenClaw,*<br>*yet monthly revenue drowns beneath token bills.* | **Seam Carry from S01**: The central golden badge stays on stage, rotates horizontal, and stretches into a brass balance beam (`820px` wide). Left pan rises with a radiant golden star pillar (`开源星标 140,000` + `<Leader>` `周访客 200 万`); at `9.33s`, a massive crimson API token bill boulder (`月入 1 万 · 算力账单赤字`) slams onto the right pan, tilting the beam $+19^\circ$ and crushing the right pan to the floor (`营收账面赤字`)! |
| **S03** | Act I<br>`walnut` | `13.0–19.4s`<br>(`15.94s`) | Left stream: `社区实录 14 天`<br>Right gates: `连续 3 轮零通过` | `A`: `两周狂造【520条】AI视频`<br>`B`: `全栈3次评审【转化归零】`<br>*Five hundred generated clips in two weeks;*<br>*zero survivors across three user audits.* | **Seam Carry from S02**: The right pan's crimson boulder splits into a dual-track audit rig: on the left, a clipped `<Stream>` waterfall of `520` scrolling AI video thumbnails (`社区实录 14 天 · 520 条`); at `15.94s` on the right, 3 heavy brass inspection gates (`第 1 轮 · 完播拦截`, `第 2 轮 · 信任拦截`, `第 3 轮 · 付费拦截`) slam shut (`连续 3 轮零通过`), bouncing thumbnails back and locking `真实转化 0`! |
| **S04** | Act II<br>`paper` | `19.4–26.2s`<br>(`22.53s`) | Roof pediment: `1937 企业的性质`<br>Interior core: `50 枚齿轮防波堤` | `A`: `【1937】科斯追问公司起源`<br>`B`: `【50人】同楼只为挡摩擦`<br>*Coase asked in 1937 why firms exist:*<br>*fifty gears under one roof shield against market friction.* | **Act Wipe (`paper` `#F3EFE6`)**: `S03`'s 3 brass gates rotate $90^\circ$ upright to form the monumental **1937 Coase Building** cross-section (`1937 企业的性质 · 罗纳德·科斯` + tilted stamp `科斯定理 · 1937`). Inside the thick brass seawall (`50 枚齿轮防波堤`), 50 brass gears mesh smoothly while external crimson storm waves (`寻客摩擦 / 合同博弈 / 坏账风险`) are deflected outside! |
| **S05** | Act II<br>`paper` | `26.2–32.4s`<br>(`29.05s`) | Left springs: `组织协调减 9 成`<br>Right pods: `生产吞吐涨 10 倍` | `A`: `AI把内部沟通砍【90%】`<br>`B`: `单兵【10倍产能】拆旧楼`<br>*Permissionless leverage slashes internal coordination by 90%*<br>*and multiplies solo output tenfold.* | **Seam Carry from S04 (Steelmanning)**: A golden beam sweeps across the 1937 Coase Building, dissolving the internal red damping springs (`层级审批 / 部门开会 / 流程内耗`, labeled `组织协调减 9 成`); at `29.05s`, the building walls unbolt and the 50 brass gears lift off into 50 radiant, freely floating golden diamond compute pods (`生产吞吐涨 10 倍`)! |
| **S06** | Act II<br>`paper` | `32.4–39.4s`<br>(`35.62s`) | Left swarm: `供给通胀 100 倍`<br>Right wall: `交易壁垒高 10 倍` | `A`: `生产归零【同质品】暴涨`<br>`B`: `获客与信任反贵【10倍】`<br>*When production cost hits zero,*<br>*supply inflates a hundredfold and trust becomes ten times pricier.* | **Seam Carry from S05 (Coase Scissors Twist)**: The 50 floating pods multiply into a dense 120-pod supply swarm on the left (`供给通胀 100 倍`); at `35.62s`, two giant hyperbola curves slice across the right coordinate stage — the golden `生产边际成本` curve drops flat to zero, while the 9px vermilion `外部获客与信任摩擦` wall rockets vertically to the ceiling (`交易壁垒高 10 倍`) with stamp `科斯剪刀差`! |
| **S07** | Act III<br>`obsidian` | `39.4–45.8s`<br>(`42.34s`) | Left dossier: `2026 心理学顶刊`<br>Right grid: `实测样本 6505 人` | `A`: `拆掉公司围墙【真自由】？`<br>`B`: `追踪【6505名】独立个体`<br>*Does tearing down corporate walls grant freedom?*<br>*A 2026 study tracked 6,505 solo workers.* | **Act Iris (`obsidian` `#0B0D13`)**: Camera dives down the vermilion wall into the obsidian lab, aligning the floating pods into a `15 × 6` pulsing survey matrix (`实测样本 6505 人`) with a detailed dossier plaque on the left (`2026 心理学顶刊 · 6505 人追踪`) and scanning telemetry wave! |
| **S08** | Act III<br>`obsidian` | `45.8–51.8s`<br>(`48.56s`) | Left clock: `零行政考勤约束`<br>Right hourglass: `断更 24 小时清零` | `A`: `没老板打卡【按件计酬】`<br>`B`: `停工1天流量【即刻归零】`<br>*No manager clocks your hours,*<br>*yet pausing for twenty-four hours resets algorithmic weight to zero.* | **Seam Carry from S07**: Camera zooms `5x` into Pod `#01` from the 6,505 grid: on the left, a traditional `09:00–17:00` punch-clock shatters (`零行政考勤约束`); at `48.56s` on the right, a giant brass-and-crimson hourglass drains `24:00 -> 00:00`, extinguishing the pod's outer traffic halo ring to `曝光权重 0%` (`断更 24 小时清零`)! |
| **S09** | Act III<br>`obsidian` | `51.8–58.6s`<br>(`54.93s`) | Lower dashed: `预期排班松弛`<br>Upper red spike: `精神倦怠激增 42%` | `A`: `自由越高耗竭增【42%】`<br>`B`: `炒掉老板请回【算法鞭】`<br>*The autonomy paradox: higher scheduling freedom*<br>*drives a 42% surge in emotional exhaustion.* | **Seam Carry from S08**: The hourglass twists into a cracking vermilion algorithmic whip striking Pod `#01`; on the right chart, the green dashed `预期排班松弛` line slopes gently down while at `54.93s` the 8px crimson ECG burnout polyline spikes violently upward to `+42%` (`精神倦怠激增 42%`) with stamp `自主权悖论 +42%`! |
| **S10** | Act III<br>`obsidian` | `58.6–65.8s`<br>(`61.91s`) | Left card: `热评 2831 赞`<br>Bottom valve: `平台抽水阀门 70%` | `A`: `8人工坊升专业号【断流】`<br>`B`: `省下房租全交【买路钱】`<br>*Organic reach shuts overnight;*<br>*every dollar saved on office rent feeds a 70% platform toll.* | **Seam Carry from S09 (Underground 70% Toll Funnel)**: Camera plunges beneath the floor of the 9 floating pods to reveal that every pod's bottom pipe is locked into a single **giant underground vermilion platform toll funnel**! Left shows `@海辛 · 热评 2831 赞` (`8人工坊升专业号断流，被迫买10万投流包`); at `61.91s`, the bottom rotary valve opens (`平台抽水阀门 70%`), sucking `70%` of the gold coins down into the platform vault! |
| **S11** | Act IV<br>`paper` | `65.8–72.4s`<br>(`68.84s`) | Left header: `公开底表 70 项`<br>Right callout: `66 折戟 · 存活率 5.7%` | `A`: `鼻祖试水【70个】独立项`<br>`B`: `【66个】阵亡仅4个跑通`<br>*Even solo pioneer Pieter Levels watched 66 of 70 projects fail—*<br>*a 5.7% survival rate.* | **Act Wipe (`paper` `#F3EFE6`)**: A `10 × 7` matrix of `70` indie project badges (`公开底表 70 项`) is laid out on archival paper; at `68.84s`, `66` badges are struck through with vermilion crosses and drop downward in dark grey, leaving only `4` glowing golden badges at the top-right (`66 折戟 · 存活率 5.7%`)! |
| **S12** | Act IV<br>`paper` | `72.4–78.6s`<br>(`75.25s`) | Pyramid base: `月净利低于 500`<br>Top booth: `淘金热真赢家卖铲` | `A`: `【83%】开发月赚不足500刀`<br>`B`: `多数神话靠【卖课】割同行`<br>*83% of indie builders net under $500 a month*<br>*while gold-rush gurus profit from selling shovels.* | **Seam Carry from S11**: The 66 fallen dark badges stack into a massive pyramid base (`83% 占比`, labeled `月净利低于 500`); at `75.25s`, a gilded ticket booth (`淘金热真赢家卖铲`) rises at the pyramid apex, lowering golden shovels (`¥1999 搞钱速成课`) while vacuuming coins upward from the base! |
| **S13** | Act IV<br>`paper` | `78.6–85.6s`<br>(`81.82s`) | Center hub: `单兵跨界 5 工种`<br>Glass ceiling: `困于 60 分均值顶棚` | `A`: `包揽5岗只用AI的【60分】`<br>`B`: `缺同伴纠偏【盲区】狂奔`<br>*Wearing five hats traps solo builders beneath a 60-point ceiling*<br>*with zero peer calibration.* | **Seam Carry from S12**: A solo pod rises from the pyramid base and extends 5 mechanical arms (`写码 / 设计 / 剪辑 / 投流 / 客服`, labeled `单兵跨界 5 工种`); at `81.82s`, all 5 arms slam into a thick horizontal `60 分` glass ceiling (`困于 60 分均值顶棚`), sparking far below the `95 分` mastery line! |
| **S14** | Act IV<br>`paper` | `85.6–92.0s`<br>(`88.54s`) | Lower press: `向下裁撤外包层`<br>Upper ram: `向上沦为标准插头` | `A`: `以为把员工【蒸馏】成代码`<br>`B`: `平台反手把你蒸成【零工】`<br>*You think you distilled staff into prompts;*<br>*upstream platforms distill you into a replaceable plug.* | **Seam Carry from S13**: The `60 分` glass ceiling morphs into a two-stage industrial distillation press: in the lower chamber, the solo pod crushes junior outsourcing cards into code (`向下裁撤外包层`); at `88.54s`, a giant upstream platform hydraulic ram slams down from above, stamping the solo builder into a standardized 3-prong electrical plug (`向上沦为标准插头`)! |
| **S15** | Act V<br>`obsidian` | `92.0–98.2s`<br>(`94.85s`) | Left slots: `2026 博弈矩阵`<br>Right bars: `同质接口溢价清零` | `A`: `仿真测算【纯执行】归零`<br>`B`: `越标准手艺越快成【耗材】`<br>*Game-theoretic modeling proves standardized execution*<br>*collapses toward zero pricing power.* | **Act Iris (`obsidian` `#0B0D13`)**: `S14`'s 3-prong plug replicates into a `4 × 3` bidding matrix of 12 identical plugs (`2026 博弈矩阵`) on the left; at `94.85s` on the right, a 7-bar pricing power waterfall chart collapses step-by-step from `100%` down to `0.0%` (`同质接口溢价清零`)! |
| **S16** | Act V<br>`obsidian` | `98.2–105.0s`<br>(`101.33s`) | Top ring: `防波堤解体`<br>Bottom/Sides: `10 倍高墙与 7 成漏斗` | `A`: `生产越便宜【信任】越昂贵`<br>`B`: `算力孤岛锁死沦为【佃农】`<br>*Stripped of corporate walls, isolated nodes are squeezed*<br>*between tenfold trust walls and platform tolls.* | **Seam Carry from S15 (3-Layer Synthesis)**: Camera pulls back to assemble the complete black box: shattered Coase seawall at the top (`防波堤解体`), two towering `10 倍` transaction & trust walls closing in from left and right, and the `70%` platform toll funnel sucking from below (`10 倍高墙与 7 成漏斗`) — locking the `03:00` operator in the center! |
| **S17** | Act V<br>`obsidian` | `105.0–111.6s`<br>(`108.04s`) | Card header: `高赞 4172 追问`<br>Card body: `背后 10 路模型凭何选你` | `A`: `【四千赞】热评刺破幻象`<br>`B`: `算力平权后谁为你【买单】`<br>*When everyone commands ten AI models behind the screen,*<br>*why should anyone choose you?* | **Seam Carry from S16 (Fourth-Wall Meta Moment)**: The 3-layer cage contracts like a pupil into deep underwater wave caustics (`#050C16`), and a warm archival parchment card (`高赞 4172 追问 · 知乎 @Titus`) rises to face the viewer; at `108.04s`, crimson characters stamp across the center: `背后 10 路模型凭何选你`! |
| **S18** | Act VI<br>`dawn` | `111.6–118.0s`<br>(`114.54s`) | Base platform: `60 分机械底座`<br>Golden peak: `95 分审美与赔付尖峰` | `A`: `【平庸杂活】交代码托管`<br>`B`: `留【90%心力】死磕极致`<br>*Delegate 60-point routine work to code;*<br>*pour 90% of human focus into 95-point taste and liability.* | **Act Iris (`dawn` warm gold)**: `S17`'s parchment card performs a 3D fold into a horizontal `60 分机械底座` platform (`写码 / 排版 / 剪辑 / 报表 / 检索`); at `114.54s`, `90%` golden human energy converges into a razor-sharp golden obelisk that shatters the `60 分` ceiling and rockets to `95 分` (`95 分审美与赔付尖峰`)! |
| **S19** | Act VI<br>`dawn` | `118.0–125.2s`<br>(`121.31s`) | Left rail: `敬畏 4 比 70 底表`<br>Right target: `最小样本收费验真` | `A`: `牢记【70死66】真实概率`<br>`B`: `【14天】小原型先验付款`<br>*Respect the 4-in-70 odds:*<br>*validate real willingness to pay with a 14-day prototype before going all in.* | **Seam Carry from S18**: The golden obelisk rotates $90^\circ$ into a precision `14 天试错探针` (`敬畏 4 比 70 底表`), sweeping across a 14-day rail, popping 3 grey `伪需求` bubbles (`第 3 天 / 第 7 天 / 第 10 天 · 止损`), and at `121.31s` striking the 4th golden `真实付费 · 最小闭环` coin node (`最小样本收费验真`)! |
| **S20** | Act VI<br>`walnut` | `125.2–132.0s`<br>(`128.33s`) | Left desk: `凌晨 3 点接线台`<br>Right seal: `熔铸主权黄铜印章` | `A`: `拔【70%漏斗】重铸信誉`<br>`B`: `告别零工做【时代支点】`<br>*Unplug the 70% toll funnel*<br>*and forge an un-distillable brass seal of personal reputation.* | **Seam Carry from S19 (100% Callback to S01 Desk)**: Camera returns to `S01`'s `凌晨 3 点接线台` bathed in warm amber lamp light: the underground `70%` toll hose is unplugged and severed at the bottom, while `S01`'s 10 cords and golden badge fuse at the center into a heavy 3D brass sovereign seal (`个人真名 · 审美与兜底印章`); at `128.33s`, the seal stamps (`slam_impact.mp3`) onto a warm parchment contract (`熔铸主权黄铜印章`)! |

---

## 4. VERIFICATION & VISUAL QA WORKFLOW

1. Ensure CJK fonts (`Noto Serif SC` / `Noto Sans CJK SC`) are available or installed (`apt-get install -y fonts-noto-cjk` if needed) so headless Chromium renders crisp Chinese typography instead of tofu boxes.
2. Render at least 10–20 representative stills across the 20 shots (`npx remotion still ...`) and inspect them with `Read` to verify:
   - Frame `0` (`t = 0.00s`) has zero fade-in and full contrast;
   - Every shot has rich, tangible editorial SVG mechanisms (`2,600+` lines across `src/film/*`), continuous within-Act `Seam Carry`, zero `<24px` text, zero English words on the upper stage, and zero visual overlap.
3. Render the final video or ensure `src/index.ts` and `src/Root.tsx` register the `3,960`-frame (`132.0s @ 30fps`) main composition cleanly.
