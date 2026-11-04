Build a 132.0-second (`3,960 frames @ 30fps`, `1920x1080`) **zero-voiceover, beat-driven kinetic visual essay** in Remotion for **UNRAVEL STUDIO (《抽丝剥茧》)** Episode 02: **《超级个体：一人成军的幻觉与科斯暗箱》(The "One-Person Unicorn" Mirage & Coase's Black Box)**.

First, clone the production asset & reference repository into `/tmp/ep02-promo` and inspect its audio assets, `docs/SPEC.md`, `docs/SCRIPT_AND_DIRECTOR_TABLE.md`, and the Episode 01 reference architecture:

```bash
git clone --branch ep02-super-individual https://github.com/Evan-Joseph/info-cocoon-promo.git /tmp/ep02-promo
ls -la /tmp/ep02-promo/docs/ /tmp/ep02-promo/assets/audio/ /tmp/ep02-promo/reference_ep01_opus_v4/src/film/
```

Read `/tmp/ep02-promo/docs/SPEC.md` and `/tmp/ep02-promo/docs/SCRIPT_AND_DIRECTOR_TABLE.md`, and inspect `/tmp/ep02-promo/reference_ep01_opus_v4/src/film/` (`core.ts`, `kit.tsx`, `Film.tsx`, `ActOne.tsx`–`ActSix.tsx`) before writing code.

---

## 1. ARCHITECTURAL BASELINE TO SURPASS (`src/film/` CONTINUOUS MASTER-CLOCK ENGINE)

In Episode 01 (`《信息茧房》`), our winning production codebase (`/tmp/ep02-promo/reference_ep01_opus_v4/src/film/`) achieved viral retention because it combined **3 critical storytelling & engineering pillars**:
1. **One Spine & Recognizable Human Protagonist (`一条主脊椎 + 具象人物与账本贯穿到底`)**:
   - Never use cryptic abstract symbols (NO "yellow diamond pods", NO "3-prong electrical plugs") that force the viewer to guess what they represent!
   - Instead, follow **one recognizable human protagonist—the solo creator sitting at his desk (`书桌前的独立创作者剪影与他的生存账本`)**—across all 20 shots as he confronts tangible physical structures: 10 AI mechanical arms shattering into 10 red error popups (`S01`), a desk balance scale crushed by server bills (`S02`), 3 customer payment gates slamming shut (`S03`), a 50-desk office building breakwater (`1937 科斯写字楼防波堤`, `S04–S05`), a towering `10x` customer acquisition wall (`S06`), a `6,505`-worker human silhouette grid (`S07`), a shattered `09:00–18:00` punch-clock vs a `24:00` countdown hourglass above his head (`S08–S09`), an underground `70%` platform traffic toll funnel beneath his desk (`S10`), a `70`-lamp startup board where `66` lamps go dark (`S11`), an `83% < $500` gold-panning pyramid base vs a shore shovel-selling booth (`S12`), 5 role pillars slamming into a `60-point` glass ceiling (`S13`), a two-tier platform dispatch slot board (`S14–S15`), the 3-layer black-box synthesis (`S16`), a fourth-wall `4,172`-upvote parchment card (`S17`), a `60-point` automated machine base launching a `95-point` golden peak (`S18`), a `14-day` validation track (`S19`), and finally returning to his `03:00` desk to unplug the `70%` funnel and stamp his real-name brass seal onto a parchment contract (`S20`)!
2. **Three-Layer Instant Comprehension Typography (`L0 顶部五幕中文路标` + `L1 画内同频锚字` + `L2 17–24字完整白话字幕`)**:
   - **`L0` Top Chapter Navigation Bar (`y = 26..64px`)**: Just like Episode 01, render a clean, persistent top-left Chinese chapter pill (`第一幕 · 全能幻觉` / `第二幕 · 科斯围墙` / `第三幕 · 隐形监工` / `第四幕 · 流量买路钱` / `第五幕 · 破局掌舵`) and top-right macro scale gauge so the viewer always knows the current chapter!
   - **`L1` In-Scene Spatial Anchors (`36px–72px`, `fontWeight: 800/900`)**: 2 concise pure-Chinese labels per shot integrated directly into the scene geometry via `<Leader />` callouts or engraved plaques, echoing the core keywords/numbers of `L2` so visual and text reinforce each other without split-attention!
   - **`L2` Conversational Bilingual Subtitles (`y = 880..1050px`)**: Borderless two-beat Chinese primary line (`44px–46px`, `Noto Serif SC`, `fontWeight: 700`, `17–24` characters of complete, natural conversational Chinese with clear subjects and causal connectors, `【...】` highlighted in `#E5B85B` or `#C83E2B`) + `23px` `EB Garamond Italic` English subtitle below.
3. **Continuous Master-Clock Architecture (`src/film/core.ts`, `kit.tsx`, `Film.tsx`, `ActOne.tsx`–`ActSix.tsx`)**:
   - Every Act is a continuous component `<ActOne t={t} />` .. `<ActSix t={t} />` where the solo creator's desk and physical apparatus smoothly morph from shot to shot (`Seam Carry`) driven by closed-form damped springs `sp(t, d, zeta, omega)` and `beatPulseAt(t)`.

---

## 2. EXACT TIMING (`SHOT_BOUNDS`), FOLEY (`CUES`), AND 20-SHOT SPECIFICATION

Copy `/tmp/ep02-promo/assets/audio/*.mp3` into `public/audio/`.
- **Master BGM**: `public/audio/jingwei_master_132s.mp3` (`痛劣 - 精卫 (DJ 0.88x 纯音乐)`, `115.0 BPM`, `F Minor`, starts from original track `13.61s` so the first heavy 4/4 Drop lands at **`t = 3.80s`**, running uncut to `132.0s` at constant `volume = 0.78`).

### 2.1 Exact `SHOT_BOUNDS` (`[startSec, endSec, beatBSec]`)
```ts
export const SHOT_BOUNDS: readonly [number, number, number][] = [
  [0.0,   6.2,   3.80],  // S01 (6.2s) — Act I (walnut) · 0.0s Zero Fade + 0.45s Arm Lock + 3.80s Drop 10 Red Error Windows
  [6.2,   13.0,  9.33],  // S02 (6.8s) — Act I (walnut) · Desk stretches into Balance Scale (爆款 14 万星 vs 倒贴服务器账单)
  [13.0,  19.4,  15.94], // S03 (6.4s) — Act I (walnut) · 520 Content Cards Conveyor vs 3 Customer Payment Brass Gates
  [19.4,  26.2,  22.53], // S04 (6.8s) — Act II (paper) · 3 Gates rise into 1937 Coase 50-Desk Office Building Breakwater
  [26.2,  32.4,  29.05], // S05 (6.2s) — Act II (paper) · Walls shield 90% friction; AI merges 50 desks -> Solo Creator walks out
  [32.4,  39.4,  35.62], // S06 (7.0s) — Act II (paper) · 100x Identical Solo Desks & Coase Scissors (10x Customer Trust Wall)
  [39.4,  45.8,  42.34], // S07 (6.4s) — Act III (obsidian) · Solo Desks align into 6,505-Worker Silhouette Matrix (2026 心理学追踪)
  [45.8,  51.8,  48.56], // S08 (6.0s) — Act III (obsidian) · Zoom into Creator: Shattered 9-to-5 Clock vs 24h Traffic Zeroing Hourglass
  [51.8,  58.6,  54.93], // S09 (6.8s) — Act III (obsidian) · 24h Hourglass Pulse Whip + +42% Burnout ECG Divergence Curve
  [58.6,  65.8,  61.91], // S10 (7.2s) — Act IV (obsidian) · Plunge beneath Desk: Giant 70% Platform Traffic Toll Funnel
  [65.8,  72.4,  68.84], // S11 (6.6s) — Act IV (paper) · Pioneer 70-Project Lamp Board: 66 Crossed Out & Dark, 4 Lit (5.7%)
  [72.4,  78.6,  75.25], // S12 (6.2s) — Act IV (paper) · 83% <$500 Gold-Panning Base vs Shore ¥1999 Shovel-Selling Booth
  [78.6,  85.6,  81.82], // S13 (7.0s) — Act IV (paper) · Creator Pushes 5 Role Pillars into 60-Point Glass Ceiling
  [85.6,  92.0,  88.54], // S14 (6.4s) — Act IV (paper) · Two-Tier Reveal: Cutting Staff Below vs Plugged into Platform Dispatch Board Above
  [92.0,  98.2,  94.85], // S15 (6.2s) — Act IV (obsidian) · Dispatch Board 60-Pt Price War & Zero Pricing-Power Bar Collapse
  [98.2,  105.0, 101.33],// S16 (6.8s) — Act V (obsidian) · 3-Layer Black Box Synthesis (Top 10x Wall + 24h Hourglass + Bottom 70% Funnel)
  [105.0, 111.6, 108.04],// S17 (6.6s) — Act V (obsidian) · Underwater Silence -> Zhihu 4,172-Upvote Parchment Card ("十个 AI，凭什么选你？")
  [111.6, 118.0, 114.54],// S18 (6.4s) — Act V (dawn) · Card Folds into 60-Pt Automated Base -> 90% Focus Launches 95-Pt Taste Peak
  [118.0, 125.2, 121.31],// S19 (7.2s) — Act V (dawn) · Peak Extends into 14-Day Prototype Validation Track (Cuts 3 Duds, Hits 4th Paid Node)
  [125.2, 132.0, 128.33],// S20 (6.8s) — Act V (walnut) · Return to 03:00 Desk: Unplug 70% Pipe & Stamp Real-Name Brass Seal on Contract
];
```

### 2.2 Exact 20-Shot `SHOTS` Table (`L0` Chapter + `L1` Stage Anchors + `L2` Conversational Chinese & English)

Every single string in `core.ts` must match this V3.0 table **verbatim**:

| Shot | `L0` Top Chapter & Gauge | `L1` Stage Anchors (Pure Chinese + Numbers) | `l2: [beatA, beatB]` (`45px Noto Serif SC`) & `en: [enA, enB]` (`23px EB Garamond Italic`) |
| :--- | :--- | :--- | :--- |
| **S01** | `第一幕 · 全能幻觉`<br>`账面神话 10 亿 -> 真实净利 赤字` | `一人 = 十亿公司？`<br>`03:00 · 10 路报错弹窗` | `A`: `全网都在造神：装上 AI，一个人就是一家【十亿公司】`<br>`B`: `可单干后的凌晨三点，【十几个报错弹窗】同时向你炸开`<br>*The internet promises a one-person unicorn;*<br>*at 3 a.m., ten red error windows explode in your face.* |
| **S02** | `第一幕 · 全能幻觉`<br>`账面神话 10 亿 -> 真实净利 赤字` | `爆款 14 万星`<br>`倒贴服务器账单` | `A`: `白天写代码、改设计，半夜还要挨个【回客服、盯账单】`<br>`B`: `哪怕做出【14 万星】的爆款，赚的钱还不够交服务器电费`<br>*Coding by day and answering tickets by night—*<br>*even a 140,000-star hit cannot pay its own server bills.* |
| **S03** | `第一幕 · 全能幻觉`<br>`账面神话 10 亿 -> 真实净利 赤字` | `14 天产 520 条`<br>`3 轮交付转化归零` | `A`: `有人两周狂造【520 条视频】，也有人独自包揽全部开发`<br>`B`: `看起来产量翻了【10 倍】，可一到真实买单时却三次归零`<br>*Output multiplies tenfold with 520 generated clips in two weeks,*<br>*yet real customer conversion hits zero.* |
| **S04** | `第二幕 · 科斯围墙`<br>`内部成本 -90% -> 外部获客 ×10` | `1937 科斯《企业的性质》`<br>`50 人写字楼防波堤` | `A`: `为什么过去一百年，非要把【50 个人】关进同一栋写字楼？`<br>`B`: `1937 年经济学家【科斯】早就点破：公司是一座防波堤`<br>*Why lock fifty people inside one office building?*<br>*In 1937, Ronald Coase revealed the firm as a breakwater.* |
| **S05** | `第二幕 · 科斯围墙`<br>`内部成本 -90% -> 外部获客 ×10` | `墙内挡掉 90% 摩擦`<br>`AI 省下雇人成本` | `A`: `在公司围墙里，法务和销售替你挡掉了【90% 的扯皮与坏账】`<br>`B`: `如今 AI 帮你省下【雇人的工资】，让你敢拆掉围墙单干`<br>*Corporate walls absorb 90% of market friction;*<br>*AI slashes hiring costs and tempts you to walk out alone.* |
| **S06** | `第二幕 · 科斯围墙`<br>`内部成本 -90% -> 外部获客 ×10` | `同类供给暴涨 100 倍`<br>`外部获客反贵 10 倍` | `A`: `可当人人都能零成本造产品，全网同类供给【暴涨了 100 倍】`<br>`B`: `结果找客户、建信任的外部代价，反而【比以前贵了 10 倍】`<br>*When everyone builds for free, supply inflates a hundredfold—*<br>*making customer trust ten times more expensive.* |
| **S07** | `第三幕 · 隐形监工`<br>`行政考勤 0 -> 精神耗竭 +42%` | `2026 心理学追踪`<br>`6505 名独立工作者` | `A`: `那不用看老板脸色，总算拥有【绝对的时间自由】了吧？`<br>`B`: `2026 年，心理学家追踪了【6505 名】单干的独立工作者`<br>*At least you escaped the boss and gained freedom, right?*<br>*A 2026 study tracked 6,505 solo workers.* |
| **S08** | `第三幕 · 隐形监工`<br>`行政考勤 0 -> 精神耗竭 +42%` | `告别朝九晚五打卡`<br>`停工 24 小时流量清零` | `A`: `脱离公司后虽然没人打卡，但只要【断更停工 24 小时】`<br>`B`: `算法推荐的流量权重就会【立刻清零】，连生病都不敢歇`<br>*No manager clocks your hours,*<br>*yet pausing for twenty-four hours resets your algorithmic traffic to zero.* |
| **S09** | `第三幕 · 隐形监工`<br>`行政考勤 0 -> 精神耗竭 +42%` | `24 小时算法皮鞭`<br>`精神耗竭暴涨 +42%` | `A`: `当休息的每一秒都等于少赚钱，自由就变成了【自我剥削】`<br>`B`: `你炒掉了朝九晚五的老板，精神耗竭率反而【暴涨了 42%】`<br>*When every idle second costs money, freedom turns into self-exploitation—*<br>*and burnout surges by 42%.* |
| **S10** | `第四幕 · 流量买路钱`<br>`平台抽水 70% -> 存活率 5.7%` | `省下写字楼房租`<br>`70% 流水交平台买路钱` | `A`: `更残酷的是账本：没有大公司招牌，怎么让客户【看见你】？`<br>`B`: `高达【70% 的流水】拿去买流量，省下的房租全交了买路钱`<br>*Without a corporate brand, how do clients find you?*<br>*Up to 70% of revenue goes straight to platform traffic tolls.* |
| **S11** | `第四幕 · 流量买路钱`<br>`平台抽水 70% -> 存活率 5.7%` | `鼻祖 70 个独立项目`<br>`66 个阵亡 · 存活率 5.7%` | `A`: `哪怕是全球一人公司鼻祖，翻开他的【真实创业底表】`<br>`B`: `累计做过【70 个独立项目】，足足死掉了 66 个，存活率不到 6%`<br>*Even solo pioneer Pieter Levels saw 66 of his 70 projects fail—*<br>*a brutal 5.7% survival rate.* |
| **S12** | `第四幕 · 流量买路钱`<br>`平台抽水 70% -> 存活率 5.7%` | `83% 月净入 < $500`<br>`卖铲课旱涝保收` | `A`: `剥开幸存者滤镜，【83% 的独立开发者】月净入不足 500 美元`<br>`B`: `淘金热里真正稳赚的，反而是岸上【卖课教人单干】的卖铲人`<br>*83% of indie builders net under $500 a month,*<br>*while the real winners sell courses on how to go solo.* |
| **S13** | `第四幕 · 流量买路钱`<br>`平台抽水 70% -> 存活率 5.7%` | `一人硬扛 5 个工种`<br>`困在 AI 60 分及格线` | `A`: `为什么越忙越廉价？因为当你独自硬扛【五个陌生工种】`<br>`B`: `在每个领域都只用到了 AI 的【60 分及格线】，还没人替你纠偏`<br>*Why so busy yet underpaid?*<br>*Juggling five unfamiliar roles traps you at AI's 60-point average ceiling.* |
| **S14** | `第四幕 · 流量买路钱`<br>`平台抽水 70% -> 存活率 5.7%` | `以为用 AI 裁掉员工`<br>`沦为随插随拔零工` | `A`: `你以为用 AI 裁掉员工，自己就做回了【掌控全局的老板】`<br>`B`: `可平台转头就把你也变成了【随插随拔、随时替换】的零工`<br>*You thought AI let you replace employees;*<br>*instead, platforms turned you into a replaceable gig worker.* |
| **S15** | `第四幕 · 流量买路钱`<br>`平台抽水 70% -> 存活率 5.7%` | `60 分同质品全网比价`<br>`纯执行手艺归零` | `A`: `当成千上万个 60 分同质品，挤在同一个【比价漏斗】竞标`<br>`B`: `凡是标准化的纯执行手艺，议价权都会被【一步步压到归零】`<br>*When thousands of 60-point outputs bid in the same funnel,*<br>*standardized execution loses all pricing power.* |
| **S16** | `第五幕 · 破局掌舵`<br>`60 分杂活交机器 -> 95 分审美与真名兜底` | `头顶 10 倍信任高墙`<br>`脚下 70% 买路钱漏斗` | `A`: `这就是单干者的三层暗箱：头顶是【暴涨 10 倍】的信任高墙`<br>`B`: `脚下是抽走【70% 流水】的漏斗，中间困着不敢停歇的自己`<br>*Caught between a tenfold trust wall above and a 70% traffic funnel below,*<br>*the solo worker runs in place.* |
| **S17** | `第五幕 · 破局掌舵`<br>`60 分杂活交机器 -> 95 分审美与真名兜底` | `知乎 4172 赞追问`<br>`十个 AI，凭什么选你？` | `A`: `知乎上一条【4172 赞】的追问，刺破了所有人的幻觉：`<br>`B`: `当每个人背后都站着十个 AI，客户【凭什么非要选你】？`<br>*A 4,172-upvote question pierces the illusion:*<br>*when everyone has ten AIs behind them, why choose you?* |
| **S18** | `第五幕 · 破局掌舵`<br>`60 分杂活交机器 -> 95 分审美与真名兜底` | `60 分杂活甩给机器`<br>`90% 心力死磕 95 分审美` | `A`: `想从暗箱破局，第一步是把 60 分的杂活【彻底甩给机器】`<br>`B`: `腾出【90% 的心力】，去死磕机器永远给不了的 95 分审美与判断`<br>*Step one: offload 60-point routine tasks to machines,*<br>*and pour 90% of your energy into 95-point taste.* |
| **S19** | `第五幕 · 破局掌舵`<br>`60 分杂活交机器 -> 95 分审美与真名兜底` | `敬畏 70 死 66 概率`<br>`14 天小原型先验付款` | `A`: `第二步，敬畏【70 死 66】的概率，绝不盲目裸辞赌上身家`<br>`B`: `先用【14 天最小原型】验证：有没有人愿意掏出真金白银`<br>*Step two: respect the 66-in-70 failure odds—*<br>*test real willingness to pay with a 14-day minimum prototype.* |
| **S20** | `第五幕 · 破局掌舵`<br>`60 分杂活交机器 -> 95 分审美与真名兜底` | `告别低价走量零工`<br>`盖下真名兜底印章` | `A`: `回到凌晨三点的书桌，拔掉低价抽水管，盖下【真名印章】`<br>`B`: `机器能替你跑出千军万马，唯有【你的信用】能为结果兜底`<br>*Back at the 3 a.m. desk, unplug the low-margin funnel and stamp your real name—*<br>*machines scale, reputation guarantees.* |

---

## 3. VERIFICATION & VISUAL QA WORKFLOW

1. Ensure CJK fonts (`Noto Serif SC` / `Noto Sans CJK SC`) are available or installed (`apt-get install -y fonts-noto-cjk` if needed) so headless Chromium renders crisp Chinese typography instead of tofu boxes.
2. Render at least 12–20 representative stills across the 20 shots (`npx remotion still ...`) and inspect them with `Read` to verify:
   - Frame `0` (`t = 0.00s`) has zero fade-in and full contrast;
   - Every shot has a clear top-left `L0` chapter pill (`第一幕 · 全能幻觉` .. `第五幕 · 破局掌舵`), recognizable concrete visuals centered on the solo creator and his desk/ledger (`2,600+` lines across `src/film/*`), continuous within-Act `Seam Carry`, zero `<24px` text, zero English words on the upper stage, and zero visual overlap.
3. Ensure `src/index.ts` and `src/Root.tsx` register the `3,960`-frame (`132.0s @ 30fps`) main composition cleanly.
