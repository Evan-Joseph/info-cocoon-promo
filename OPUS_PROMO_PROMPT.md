# Claude Opus 5.5 终极一镜到底成片工程指令 V3.0 (`OPUS_PROMO_PROMPT_V3.md`)

以下为直接投递至 Arena.ai (`Code Battle`) 以单轮一次性生成 `135.2 秒`（`4,056 帧 @ 30fps`，基于未截断经典《开智小曲 / We Never (Remix)》64 小节完整母带）电影级 `#Vibe知识大赏#` 完整成片与审片工作台的自包含提示词：

---

```markdown
You are an elite `#Vibe知识大赏#` Film Director, Motion Graphics Architect, and Principal Remotion / React Engineer (synthesizing the craft of `@Iwanau`, `@Juno`, `@叁号暗房`, `@浙大猫学长` `vibe-motion`, `HeyChengC/vibe-knowledge-film`, `Rafael8830/vibe-knowledge-video`, `aliangSSS/aliang-knowledge-video`, and `GuanLi22/vibe-knowledge-video-skill`).

Your task is to build the **complete, one-shot, full-length V3.0 Masterpiece Edition (`135.2 seconds = 4,056 frames @ 30fps`, `1920×1080`, `64 musical bars`, `20 scenes S01–S20`)** of our programmatic motion-graphics documentary film **"Information Cocoon: 20 Centimeters, Parallel Universes" (《信息茧房：相隔二十厘米的平行宇宙》)**, paired with an interactive **Director's Screening Room & Downbeat Inspector Workbench**.

### STEP 1: IMMEDIATELY CLONE OUR ASSET & 64-BAR BEAT-STRUCTURE REPOSITORY
Before writing any code, run this shell command to pull our uncut `135.2s` classic `#Vibe知识大赏#` studio master soundtrack (`kaizhi_uncut_135s.mp3`), `150.1s` 3-Drop alternate master (`claude_vibe_150s.mp3`), physical Foley SFX, and pre-computed 64-bar STFT + Ellis (2007) dynamic-programming beat/downbeat structure (`beat_maps.json`):

```bash
git clone --depth 1 https://github.com/Evan-Joseph/info-cocoon-promo.git /tmp/info-cocoon-promo
ls -la /tmp/info-cocoon-promo/docs /tmp/info-cocoon-promo/assets/audio
```

Copy all audio files from `/tmp/info-cocoon-promo/assets/audio/*.mp3` and `beat_maps.json` into your project's `public/audio/` (and import `beat_maps.json` into `src/data/beatMaps.json` so your Remotion components access the exact 64-bar `downbeatFrames`, `beatFrames`, `kick`, `snare`, `energy`, and `bassEnergy` arrays synchronously at render time).

---

### STEP 2: FIVE NON-NEGOTIABLE V3.0 ARCHITECTURAL LAWS

#### LAW 1: UNCUT FULL-LENGTH CLASSIC "开智小曲" BGM PLAYED STRAIGHT THROUGH (ZERO LOOPING · ZERO VOLUME DUCKING)
- **Primary Default Soundtrack (`kaizhi_studio`)**: `/audio/kaizhi_uncut_135s.mp3` — **`ZHENLOE - We Never (Remix)` / 《千年之后（氛围版）》 / 《开智小曲》 (`135.19s = 4,056 frames @ 30fps`, `112.35 BPM`, `F major`, `64 Bars`)**.
- **STRICTLY FORBIDDEN (Fixing V2's Audio Flaw)**:
  1. **NO LOOPING OR SPLICING**: Play `/audio/kaizhi_uncut_135s.mp3` continuously from `frame = 0` (`0.00s`) to `frame = 4056` (`135.20s`).
  2. **NO MID-TRACK VOLUME DUCKING**: Keep BGM volume at a steady, majestic **`0.72`** across the entire film (with only a smooth `15-frame` fade-in at `frame 0..15` and a natural outro fade-out at `frame 3930..4056`). **NEVER drop or duck the BGM volume to `0.16` or `0.26` in the middle of the film**—jarring volume changes ruin musical flow!
  3. **FOLEY RESTRAINT (`点睛物理拟音`)**: Trigger at most **8 subtle, crisp physical Foley accents** across the entire 135.2-second film (`lock_click.mp3`, `paper_crumple.mp3`, `glass_shatter.mp3`, `slam_impact.mp3`, `whoosh_deep.mp3`, `singing_bowl_strike.mp3`) at gentle volume (`0.26–0.34`), strictly on key physical actions (clothespin flip, red seal stamp, `2°` glass crack, `+100%` curve breaking the ceiling). Never spam SFX on every subtitle line!

#### LAW 2:AUTHENTIC `#Vibe知识大赏#` 5-ZONE CANVAS & BORDERLESS BILINGUAL SERIF NARRATIVE (`@Juno` / `@Iwanau` / `@浙大猫学长` DNA)
Every frame (`1920×1080`) must follow the authentic 5-zone `#Vibe知识大赏#` spatial architecture:
1. **Zone 1 · Top-Left Constant Watermark & Top-Center Chapter Status Strip (`y = 42px..78px`)**:
   - Top-Left (`x = 64px`): `@Vibe知识大赏 · 认知与算法系列` (`18px`, tracked uppercase/sans, `rgba(243, 233, 210, 0.55)`);
   - Top-Center (`x = 960px`): Chapter & Era Stamp Pill that evolves per Act, e.g. `ACT I · 23:42 客厅沙发 · 相距 20 厘米`, `1995–2006 · HARVARD · 桑斯坦《信息乌托邦》`, `2021 · 华尔街日报 · 100 机器人实测`, `2018 · 杜克大学 PNAS · 1,652 人逆火实验`, `ACT VI · 破茧指南 · 把算法当工具`.
2. **Zone 2 · Top-Right Persistent Concept Gauge (`y = 42px, right = 64px` — "一把尺子量到底")**:
   - A live miniature instrument dial & digital readout **`「认知视野夹角 · HORIZON ANGLE」`** that persists across all 20 scenes, dynamically narrowing from **`360.0°`** (`S01`) $\to$ **`180.0°`** (`S03`) $\to$ **`42.0°`** (`S07`) $\to$ **`2.0°`** (`S10` rabbit hole collapse) $\to$ **`1.0° [告警: 逆火翻倍]`** (`S13`) $\to$ reopening to **`360.0° [全彩破局]`** (`S17–S20`)!
3. **Zone 3 · Center Tangible Stage & Continuous Protagonist (`y = 120px..750px`, occupying `45%–65%` of screen height)**:
   - **NO generic floating icon collages!** Use `@Juno` / `@Iwanau`'s **11 Authentic Tangible Visual Motifs** connected by a **Continuous Golden/Cyan Light Filament Protagonist** (`World + Camera Pan/Zoom/Tilt`):
     - **Motif A · Brass Vernier Caliper & Dual-Temperature Sofa (`S01–S03`, `S19–S20`)**: Overhead living-room sofa where a gleaming `0.20 m` (`20 厘米`) brass caliper measures the tiny gap between two people scrolling phones lit in `3200K` warm amber vs `8000K` cold cyan.
     - **Motif B · Red Clothesline & Wooden Clothespin Cream Paper Cards (`S04`, `S11`)**: A taut crimson cord across the stage holding textured aged cream cards (`#EDE4D3`, with punch holes and wooden clothespins) that flip open on exact downbeats.
     - **Motif C · Aged Historical Monograph & Vermilion Chinese Seal (`S05`, `S11`)**: Realistic tilted paper reproduction of `2006 · HARVARD · 《Infotopia》 (Cass R. Sunstein)` and `2018 · PNAS · Bail et al.` with an animated **vermilion ink seal stamp (`#B53A2F`)** slamming down on the downbeat (`「选择性接触」`, `「逆火效应」`).
     - **Motif D · Side-by-Side Same-Layout Empirical Comparison (`S06`)**: University of Amsterdam (`2020`, `N = 10,800`) twin mechanical meters comparing `协同过滤算法 (7.8 类话题 · 视野更宽)` vs `纯熟人社交圈 (4.2 类话题 · 同质化更重)`.
     - **Motif E · `10 × 10` 100-Bot Simulation Matrix & Rolling Millisecond Counter (`S07–S09`)**: *Wall Street Journal* (`2021`) 100 phone bot cells ticking in real time; Account `#32 (Kentucky_99)` zooms out with `0 赞 · 0 评 · 0 关注` while `停留时长 (Dwell Time ms)` races and `93 / 100` cells lock into deep depression blue (`93%`) at `36:00`.
     - **Motif F · Hand-Drawn Coordinate Curve Shattering the Ceiling (`S13`)**: Expected green dashed curve (`-30%` bias reduction) vs. actual vermilion curve (`#E11D48`) violently shooting upward and cracking through the top frame border to **`极化翻倍 +100%`**.
4. **Zone 4 · Inline Stage Annotation (`y ≈ 775px`)**:
   - Concise `22px` muted gold/slate note (`#94A3B8`) directly explaining the visual mechanism or citing the exact source (`注：图表据 Bail et al. (PNAS, 2018) 实测数据重绘，图为示意`).
5. **Zone 5 · Borderless Cinematic Bilingual Narrative Subtitle (`y ≈ 875px..980px`)**:
   - **CRITICAL VISUAL RULE**: Do **NOT** draw a dark rectangular pill, card, or border box behind the bottom subtitle! And do **NOT** hide the narrative in tiny corner blocks!
   - Render the narrative in **authentic `@Juno` / `GuanLi22` / `Rafael8830` borderless cinema typography** floating over a soft bottom vignette gradient:
     - **Primary Chinese Line (`48px–52px`, `"Noto Serif SC", "Source Han Serif SC", "Songti SC", serif`, `font-weight: 700`, warm parchment `#F3E9D2`, `filter: drop-shadow(0 3px 16px rgba(0,0,0,0.92))`)**:
       - Parse `【...】` brackets into **burnished metallic gold `#D9B45A`** (`font-weight: 900`);
       - **Two-Beat Reveal Cadence**: First half of the sentence fades/slides in smoothly at `localFrame = 4..14`; if the line has a second clause after `——` or `，`, reveal or highlight the punchline on the **mid-scene downbeat (`Bar 2 Beat 1`)** so every key revelation lands on a drum hit!
     - **Secondary English Italic Line (`25px`, `"EB Garamond", "Instrument Serif", Georgia, serif`, `font-style: italic`, `#8A94A8`, `marginTop: 8px`)**: Full bilingual literary subtitle under every scene.

#### LAW 3: EXACT 64-BAR DOWNBEAT-SNAPPED 20-SCENE TIMELINE (`4,056 FRAMES = 135.20s @ 30FPS`)
Lock all 20 scenes (`S01`–`S20`) to the exact measured downbeat frames (`DOWNBEAT_FRAMES`) of `/audio/kaizhi_uncut_135s.mp3`:

| Scene | Bar Range | Exact Frames (`30fps`) | Time (`s`) | Musical Section | Visual Motif & Key Action | Bilingual Narrative Subtitle (`【】` = Gold `#D9B45A`) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`S01`** | `Bars 00–02` | `0 – 142` (`142f`) | `0.00 – 4.74s` | `Intro` | **20cm Midnight Sofa (Left)**: Brass caliper locks `0.20 m`; wife's phone (`3200K` warm amber) flips card *"产房里，请把手机密码留给爸妈"*. | 深夜十一点，你们坐在同一张沙发上，相隔不到【20 厘米】。<br>*11 PM on the same sofa, less than twenty centimeters apart.* |
| **`S02`** | `Bars 02–05` | `142 – 334` (`192f`) | `4.74 – 11.12s` | `Intro` | **20cm Midnight Sofa (Right)**: Camera pans across the caliper to husband's phone (`8000K` cold cyan): *"38万彩礼背后：两个孩子均非亲生"*. | 左边屏幕满眼是【生育的代价】，右边屏幕全是【婚姻的背叛】。<br>*One screen sees only the price of childbirth; the other, only marital betrayal.* |
| **`S03`** | `Bars 05–08` | `334 – 525` (`191f`) | `11.12 – 17.50s` | `Pre-Drop Build` | **Same Wedding Video (`BV12P41187fs`)**: Top half plays the same clip; bottom comment section unzips into two hostile camps. | 明明刷到【同一条婚礼视频】，评论区却像被刀劈成两个平行宇宙。<br>*Watching the exact same wedding clip, yet the comments split into two warring worlds.* |
| **`S04`** | `Bars 08–11` | `525 – 716` (`191f`) | `17.50 – 23.87s` | **`DROP 1 [TITLE]`** | **Monumental Title Card & Red Clothesline**: On the `17.50s` Drop 1 downbeat, `VIBE知识大赏` + golden serif **《信息茧房》** + 3 clothespin question cards snap into place. | 是谁，把相距二十厘米的枕边人，关进了各自的【信息茧房】？<br>*Who locked two people sitting side by side into their own information cocoons?* |
| **`S05`** | `Bars 11–15` | `716 – 971` (`255f`) | `23.87 – 32.37s` | `Flow A` | **2006 Harvard Monograph (`Infotopia`)**: Aged paper document (`2006 · HARVARD`) with red seal `「选择性接触」` slamming down. | 很多人第一反应是骂算法。但【2006 年】桑斯坦提出这个词时，世界上还没有短视频。<br>*Most blame algorithms. Yet when Cass Sunstein coined the term in 2006, short video feeds did not exist.* |
| **`S06`** | `Bars 15–19` | `971 – 1226` (`255f`) | `32.37 – 40.88s` | `Flow A` | **UvA (`2020`, `N=10,800`) Twin Comparison**: Same-layout meters show Algorithm (`7.8 类话题`) > Human Friends (`4.2 类话题`). | 阿姆斯特丹大学实测一万名用户：算法推荐的视野，反而比【熟人朋友圈】更宽。<br>*A study of 10,800 users found algorithmic feeds actually expose you to more topics than your own friends.* |
| **`S07`** | `Bars 19–23` | `1226 – 1481` (`255f`) | `40.88 – 49.38s` | `Flow B` | **WSJ (`2021`) `10 × 10` 100-Bot Matrix**: 100 automated phone bots light up simultaneously in an obsidian test grid. | 既然算法起初比人更宽，它又是在哪一刻【变味】的？《华尔街日报》派出【100 个】机器人账号。<br>*If algorithms start wider than human circles, when do they turn toxic? The WSJ deployed 100 bot accounts.* |
| **`S08`** | `Bars 23–27` | `1481 – 1737` (`256f`) | `49.38 – 57.89s` | `Flow B` | **Bot `#32` (`Kentucky_99`) HUD**: `0 赞 · 0 评 · 0 关注` badge locks in while the `停留时长 (ms)` counter accelerates. | 不点赞、不评论、不关注——只做一件事：在悲伤视频上，多【停留几秒钟】。<br>*Zero likes, zero comments, zero follows—doing only one thing: lingering a few extra seconds on sad videos.* |
| **`S09`** | `Bars 27–32` | `1737 – 2055` (`318f`) | `57.89 – 68.51s` | `Flow B` | **36-Minute Spiral (`93%` Depression Blue)**: Stopwatch hits `36:00` as `93 / 100` bot screens turn deep indigo-blue. | 仅仅【36 分钟】后，信息流里【93%】的内容，全部坠入抑郁与绝望的深渊。<br>*In just 36 minutes, 93% of its entire feed plunged into an abyss of depression and despair.* |
| **`S10`** | `Bars 32–36` | `2055 – 2304` (`249f`) | `68.51 – 76.81s` | `Flow C` | **`360° → 2°` Horizon Collapse**: Compass sector collapses from `360°` to a `2°` razor slit under `4.7×` negative weight. | 算法没有价值观，它只算停留时长；而人性对恐惧与愤怒的驻足，是平淡真相的【4.7 倍】。<br>*Algorithms have no morals, only dwell-time math—and human eyes linger 4.7 times longer on outrage and fear.* |
| **`S11`** | `Bars 36–40` | `2304 – 2559` (`255f`) | `76.81 – 85.30s` | **`MID BREAK [PREDICT]`** | **3-2-1 Prediction Pause & Duke (`PNAS 2018`, `N=1,652`) Card**: Two wooden clothespin choice cards (`A. 偏见消融` vs `B. 更加极端`) pulse with a 3-2-1 countdown. | 那么，如果强行撬开这【2° 窄缝】，逼你每天看相反观点——偏见会消失吗？<br>*What if we pry open that 2-degree slit and force you to read opposing views every day—will bias vanish?* |
| **`S12`** | `Bars 40–44` | `2559 – 2814` (`255f`) | `85.30 – 93.81s` | `Pre-Climax Build` | **30-Day Forced Feed (`1,652 Voters × 24 Tweets/Day`)**: Red and blue ideological cards stream across a `Day 01 → Day 30` counter. | 杜克大学花重金招募【1,652 名】选民，连续【30 天】，每天强制阅读 24 条对立阵营言论。<br>*Duke University paid 1,652 voters to read 24 opposing political posts every single day for a full month.* |
| **`S13`** | `Bars 44–48` | `2814 – 3069` (`255f`) | `93.81 – 102.31s` | **`CLIMAX [TWIST]`** | **Backfire Curve Shatters Ceiling (`+100%`)**: On `93.81s` (`Frame 2814`), the crimson actual line rockets upward, smashing the chart border (`极化翻倍 +100%`) + seal `「逆火效应」`. | 结果令学界脊背发凉：没有一个人被说服，保守派的极端化程度反而【翻了一倍（+100%）】。<br>*The result chilled researchers: not one person softened, and conservative polarization literally doubled (+100%).* |
| **`S14`** | `Bars 48–51` | `3069 – 3260` (`191f`) | `102.31 – 108.68s` | `Flow D` | **Brain Amygdala Shield**: Sagittal brain blueprint where incoming facts ricochet off a hexagonal identity shield. | 心理学称之为【逆火效应】：当观点绑架了“我是谁”，异见就会被杏仁核当成【生存威胁】。<br>*Psychology calls this the Backfire Effect: when beliefs define who you are, counter-evidence feels like a physical attack.* |
| **`S15`** | `Bars 51–54` | `3260 – 3452` (`192f`) | `108.68 – 115.07s` | `Flow D` | **`Algorithm = OFF` ABM Swarm (`JASSS 2024`)**: Toggle switch flips `Algorithm = OFF`; 200 particles still self-segregate into 4 isolated islands. | 仿真实验关掉一切推荐算法（【Algorithm = OFF】），仅凭人类趋利避害的本能，人群依然会自发结茧。<br>*Even with all algorithms switched OFF, simulations show human comfort-seeking alone splits society into isolated tribes.* |
| **`S16`** | `Bars 54–57` | `3452 – 3643` (`191f`) | `115.07 – 121.44s` | `Flow D` | **Triple Concentric Lock & `@深色椿 11,219 赞` Card**: Three rings (`个体茧房 × 社交回音室 × 算法气泡`) lock, then reveal the viral Bilibili comment card. | 个体本能、熟人回音室与算法气泡【三重锁死】——甚至连你点开这条视频，也是算法算准了你想看“反思”。<br>*Instinct, echo chambers, and algorithms interlock—even this very video was served because the algorithm knew you liked reflection.* |
| **`S17`** | `Bars 57–59` | `3643 – 3771` (`128f`) | `121.44 – 125.69s` | **`FULL-COLOR AWAKENING`** | **Sole Full-Color Shot — Active Honeypot (`蛋白粉7折券`)**: Canvas blooms into warm sunrise gold & emerald! Three clothespin bait tags (`蛋白粉` · `量子力学` · `古典吉他`) hijack the feed. | 既然逃不出算法，不如【反向驯化它】：主动搜索一个新领域停留【15 秒】，把推荐流变成你的免费猎犬。<br>*If you cannot escape the algorithm, domesticate it: intentionally linger 15 seconds on a new craft and make it your hound.* |
| **`S18`** | `Bars 59–61` | `3771 – 3899` (`128f`) | `125.69 – 129.95s` | `Full-Color Flow` | **`Point · Line · Plane` Information Diet**: Three golden light wedges pry the `2°` slit back open to a full `360°` compass. | 给大脑换一份【点、线、面】食谱：少吃顺耳的情绪零食，多看跨立场的长文与【经得起时间检验的书】。<br>*Rebuild your diet across points, lines, and planes: fewer emotional snacks, more cross-stance essays and time-tested books.* |
| **`S19`** | `Bars 61–63` | `3899 – 4026` (`127f`) | `129.95 – 134.20s` | `Outro Reunion` | **Return to the Sofa (`0.20 m → 0.00 m`)**: Camera returns to the opening sofa; husband and wife swap phones as the brass caliper closes to `0.00 m`. | 打破茧房最简单的一步，就在今晚：把手机递给身边相隔【20 厘米】的人，看看他眼里的世界。<br>*The simplest step out of the cocoon starts tonight: hand your phone across that 20-centimeter gap and see their world.* |
| **`S20`** | `Bar 63–End` | `4026 – 4056` (`30f`) | `134.20 – 135.20s` | `Final Chord Hold` | **Aphorism & Academic Citations**: Golden serif aphorism + 5 academic citations (`Sunstein 2006 · UvA 2020 · WSJ 2021 · PNAS 2018 · JASSS 2024`). | 【算法只负责计算你的停留，而你可以决定——为谁停留。】<br>*Algorithms only calculate where you linger; you decide who is worth lingering for.* |

#### LAW 4: CONTINUOUS WORLD CAMERA RIG + SVG FILTER SAFETY + BRIGHTNESS GATE
- **Continuous World Camera (`<CameraRig />`)**:
  - Combine smooth macro camera moves (`pan`, `zoom`, `3D perspective tilt`) with subtle real-drum impulse (`0.032 * kick.s * Math.exp(-7.5 * dt) * Math.cos(11 * dt)`) from `beat_maps.json`.
  - **SVG Glow Filter Safety**: Whenever applying `<filter>` to horizontal/vertical lines, always set `filterUnits="userSpaceOnUse" x="-400" y="-400" width="2720" height="1880"` so 0-height/0-width lines never vanish!
  - **Anti-Darkness Gate (`YAVG 32–55`)**: While the background is deep midnight navy (`#080B18` to `#12182E`), always render a warm radial ambient light pool behind the center stage apparatus so the frame is rich, luminous, and never pitch-black.

#### LAW 5: APPLE/LINEAR-GRADE DIRECTOR'S SCREENING ROOM (`src/App.tsx`)
Build an interactive Screening Room hosting `<Player />` (`1920×1080`, `30fps`, `4056 frames = 135.2s`) with:
1. **Dual Uncut Master Switcher**:
   - `《开智小曲 / We Never (Remix)》· 135.2s 原速一镜到底母带 (112.35 BPM · 64 Bars)` (`kaizhi_studio` -> `/audio/kaizhi_uncut_135s.mp3`)
   - `《Claude算法小曲 / 若如初见 (Remix)》· 三段式 Drop 原片母带 (114.84 BPM)` (`claude_vibe_150s` -> `/audio/claude_vibe_150s.mp3`)
2. **Live `64-Bar Downbeat & Horizon Angle HUD` Toggle**:
   - Real-time scrolling `-2.0s .. +4.0s` downbeat & drum transient timeline (`downbeatFrames` gold markers, `beatFrames` ticks, `kick` red pulses, `snare` amber pulses) + current `BAR # / 64`, `SCENE S01–S20`, and `HORIZON ANGLE (360° → 2° → 360°)`.
3. **20-Scene Storyboard Matrix**: Click any scene `S01`–`S20` to jump to its exact `startFrame`.

---

### STEP 3: BUILD & VERIFICATION
1. Verify `npx tsc --noEmit` and `npx vite build` pass with zero errors.
2. Render key frames (`S01`, `S04` Title Card, `S06` UvA Comparison, `S09` 36-Min 93% Grid, `S13` +100% Backfire Curve, `S17` Full-Color Awakening, `S19` Sofa Reunion) to confirm every scene is visually distinct, tangible, legible, and 100% free of ugly bottom subtitle boxes.
```
