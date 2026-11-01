# Claude Opus 5.5 终极导演工程指令 V2.0 (`OPUS_PROMO_PROMPT_V2.md`)

以下为直接投递至 Arena.ai (`Code Battle`) 以唤醒 `claude-opus-5.5-high` / `max` 真实天花板能力的完整自包含工程提示词：

---

```markdown
You are an elite Motion Graphics Director, Creative Technologist, and Principal Remotion / React Engineer (combining the craft of `alchaincyf/huashu-design` v3.1, `ShizukiR1n/kashi-motion`, `haidrrrry/claude-remotion-skill`, and `heygen-com/hyperframes`).

Your task is to build the **V2.0 Kinetic Editorial & Studio Beat-Locked Edition** of our 120-second (`3,600 frames @ 30fps`, `1920×1080`) programmatic motion-graphics documentary film **"Information Cocoon: 20 Centimeters, Parallel Universes" (《信息茧房：相隔二十厘米的平行宇宙》)**, paired with an Apple/Linear-grade **Director's Screening Room & Beat-Sync Inspector Web Workbench**.

### STEP 1: IMMEDIATELY CLONE OUR ASSET & BEAT-MAP REPOSITORY
Before writing any code, run this shell command to pull our real studio master soundtracks, Foley SFX, pre-computed HPSS+Hilbert multi-band drum transient maps (`beat_maps.json`), and V2.0 Director's Spec:

```bash
git clone --depth 1 https://github.com/Evan-Joseph/info-cocoon-promo.git /tmp/info-cocoon-promo
ls -la /tmp/info-cocoon-promo/docs /tmp/info-cocoon-promo/assets/audio
```

Read `/tmp/info-cocoon-promo/docs/SPEC.md` and inspect `/tmp/info-cocoon-promo/assets/audio/beat_maps.json`. Copy all audio files from `/tmp/info-cocoon-promo/assets/audio/*.mp3` and `beat_maps.json` into your project's `public/audio/` (and import `beat_maps.json` into `src/data/beatMaps.json` so your Remotion components can access the exact drum arrays synchronously at render time).

---

### STEP 2: FOUR NON-NEGOTIABLE V2.0 ARCHITECTURAL LAWS (BREAKING THE V1 CEILING)

#### LAW 1: ZERO CONVENTIONAL BOTTOM SUBTITLE BAR (`禁止常规底部字幕条 · 字画一体杂志级动态排印`)
- This is a **no-voiceover #Vibe知识大赏# / Kinetic Editorial Motion Film**.
- **STRICTLY FORBIDDEN**: Do NOT place a conventional TV closed-caption bar or rounded dark subtitle pill at the bottom center (`y = 940px`) of the screen! A persistent bottom subtitle bar makes a no-voiceover film look like a muted PowerPoint recording.
- **MANDATORY REPLACEMENT (`<EditorialKineticType />`)**: Typography IS a primary spatial & architectural element woven directly into each shot's **Negative Space** (top-left editorial masthead, split-screen confrontation wings, margin callout quadrant, or full-bleed kinetic stomp card).
- Every shot (`S01`–`S20`) must render a **3-Tier Magazine Typographic Hierarchy**:
  1. **Tier 1 · Giant Hero Anchor (`heroAnchor`, `96px–164px`, `font-weight: 900`, tight tracking `-0.03em`, line-height `0.95`)**: e.g., `0.20 m`, `0.20m → ∞`, `BV12P41187fs`, `2006 · 桑斯坦`, `选择性接触`, `协同过滤 · 最高`, `100 BOTS`, `0 赞 · 0 评 · 0 关注`, `36 min → 93%`, `360° → 2°`, `N = 1,652`, `24 条 / 天 × 30 天`, `极化翻倍 +100%`, `杏仁核防御`, `Algorithm = OFF`, `三重死锁`, `11,219 赞`, `15s 投喂蜜罐`, `点 · 线 · 面`, `0.20m → 0.00m`.
  2. **Tier 2 · Two-Beat Narrative Clauses (`clauses[0]` & `clauses[1]`, `40px–52px`, `font-weight: 700`)**:
     - **Two-Beat Kinetic Slam Choreography (`两拍式节奏砸落`)**:
       - **Beat 1 (`localFrame = 18`, `+0.60s`)**: `heroAnchor` + `clauses[0]` enter with high-impact physical motion;
       - **Beat 2 (`localFrame = 48`, `+1.60s` exact backbeat/snare hit)**: `clauses[1]` + contrasting highlight block/underline snap into place;
       - **Comprehension Hold (`localFrame = 72` to `durationFrames`, `>= 2.4s–4.8s`)**: Once landed, all text must stay **100% crisp and stationary** (zero drift, zero continuous scaling) so viewers can read effortlessly.
  3. **Tier 3 · Diegetic Archival / Lab Stamp (`stamp`, `22px–26px` `JetBrains Mono` bordered badge + direct leader callout lines)**: e.g., `MIDNIGHT SOFA · 23:42`, `ARCHIVAL SOURCE · 2006`, `WSJ INVESTIGATION · 2021`, `PNAS EXPERIMENT · 2018`.
- **8 Distinct Text Reveal Modes with Cooldown (`never repeat in adjacent shots`)**: Implement all 8 modes in `<EditorialKineticType />` following `shotsCueSheet[].textEffect`:
  - `slam` (scale `2.1 -> 1.0` heavy drop with impact shockwave ring);
  - `maskslide` (`overflow: hidden` baseline slide-up with `skewX(-8deg -> 0deg)`);
  - `split` (left/right or top/bottom halves colliding into alignment);
  - `punch` (rapid sub-beat word-by-word stomp on `12f` eighth-note intervals);
  - `focus` (depth-of-field pull from `blur(16px) scale(1.12)` to razor-sharp);
  - `decode` (cipher/matrix character scramble locking into Chinese/ASCII glyph);
  - `stroke` (SVG/CSS outline draw-on followed by ink fill);
  - `follow` (horizontal tracking reveal).

#### LAW 2: REAL STUDIO BENCHMARK SOUNDTRACKS PRIMARY + MULTI-BAND DRUM-REACTIVE `<CameraRig />`
- **Abandon synthetic NumPy oscillator BGM as the default!**
- Our repository provides **three phase-aligned 120.0s real studio master recordings** in `public/audio/` along with their exact HPSS + Hilbert transient maps in `beat_maps.json`:
  1. **Default Primary Track (`kaizhi_studio`)**: `/audio/kaizhi_studio_120s.mp3` — **《开智小曲》（vibe 知识大赏原曲母带 · 75.00 / 150.00 BPM 相干锁相版）**. Beat 0 is locked to `t = 0.000s (Frame 0)`, `1 Beat = 0.8000s = 24.00 Frames @ 30fps`, `1 Half-Beat = 0.4000s = 12.00 Frames`. Includes `111` real Kick hits, `288` Snare hits, `435` Hi-Hat hits, and `3,600` frames of RMS `energy` & `bassEnergy`.
  2. **Secondary Studio Track (`komorebi_studio`)**: `/audio/komorebi_studio_120s.mp3` — **mabanua《Komorebi》原曲母带（`137.19 BPM` 电影叙事版）** (`226` Kick hits, `312` Snare hits).
  3. **Tertiary Studio Track (`wenever_studio`)**: `/audio/wenever_studio_120s.mp3` — **《We Never》原曲母带（`110.30 BPM` 硬核脉冲版）** (`291` Kick hits, `297` Snare hits).
- **Beat-Snapped Intrinsic Shot Sequence (`150 Beats = 120.0s = 3,600 Frames`)**:
  - The 20 shots use varied integer beat counts `[7, 6, 8, 7, 7, 8, 6, 7, 9, 8, 7, 7, 9, 7, 7, 9, 8, 8, 6, 9]` beats (`4.8s`, `5.6s`, `6.4s`, `7.2s`).
  - **Zero 3-consecutive identical durations** (eliminating metronome monotony), while **100% of shot transitions (`startFrame`) land on an exact integer beat (`frame % 24 === 0`)**!
- **Real Drum-Reactive `<CameraRig />` (`src/components/CameraRig.tsx`)**:
  - Reads the active track's `kick[]`, `snare[]`, `energy[]`, and `bassEnergy[]` from `beat_maps.json` at current time `t = frame / 30`:
    - **Kick Damped-Spring Impulse**: For any real Kick hit where `0 <= t - kick.t <= 1.0s`, add closed-form damped spring zoom punch `0.042 * kick.s * Math.exp(-7.5 * dt) * Math.cos(11 * dt)` so the camera physically breathes and punches on every real studio bass drum!
    - **Snare Micro-Shake & Rim Flash**: For any real Snare hit where `0 <= t - snare.t <= 0.35s`, add subtle rotational micro-shake (`0.35deg * snare.s * Math.exp(-14 * dt) * Math.sin(38 * dt)`) and accent border glow.
    - **5-Tier Shot Scale Alternation**: Smoothly interpolate camera base scale across `shotsCueSheet[].cameraScale` (`0.78x` / `1.00x` / `1.35x` / `1.80x` / `2.30x`) + **3-Layer Z-Parallax (`0.35x` backplate / `1.00x` hero stage / `1.40x` foreground dust & callouts)** + **3D Perspective Card Tilt (`perspective: 2400px`)**.
    - **Zero Bare Cuts (`12-frame Motivated Transitions`)**: At every shot boundary, execute `shotsCueSheet[].transIn`:
      - `push`: zoom-through portal (`scale 1.0 -> 2.4` on outgoing last 6f, `0.55 -> 1.0` on incoming first 8f);
      - `whip`: directional whip-pan with horizontal motion blur (`translateX` + `scaleX(1.08) blur(6px)`);
      - `pullout`: rapid pull-back revealing the previous shot was nested inside the next shot's monitor/archive/ring;
      - `flash`: archival medium-flip exposure flash / vermilion ink shockwave on Act boundaries (`S04`, `S07`, `S11`).
- **Frequency-Isolated Foley SFX**: Layer `/audio/whoosh_deep.mp3`, `/audio/slam_impact.mp3`, `/audio/glass_shatter.mp3`, `/audio/lock_click.mp3`, `/audio/paper_crumple.mp3`, `/audio/coin_clatter.mp3`, and `/audio/singing_bowl_strike.mp3` starting `1–2 frames` before key visual slams/transitions at clean volume (`0.32–0.48`) while BGM plays at `0.58` (ducking to `0.16` at S11's dramatic silence drop and `0.26` at S17's underwater low-pass reflection).

#### LAW 3: 5-LAYER VISUAL DEPTH STACK & THREE PHYSICAL MEDIA (`五层视觉深度栈 × 三重物理媒介`)
Every shot must render 5 distinct depth layers bottom-to-top:
1. **Layer 1 · Animated Physical Surface**:
   - **Medium I (`walnut`, S01–S03 & S20)**: Deep walnut `#141210`, warm amber lamp glow `#D97706`, dual cyan `#0EA5E9` / crimson `#E11D48` glass reflections;
   - **Medium II (`paper`, S04–S06 & S11–S14)**: Warm archival Risograph cotton paper `#F3EFE6`, `1px` architectural grid `rgba(20,20,19,0.06)`, carbon ink `#141413`, vermilion stamp `#D94E34`, cobalt `#1D4ED8`, highlighter `#FACC15`;
   - **Medium III (`obsidian`, S07–S10 & S15–S17)**: Matte obsidian lab `#0D1015`, bone white `#E6EDF3`, depression blue `#2563EB`, negative-weight red `#EF4444`, emerald `#10B981`;
   - **Medium IV (`dawn`, S18–S19)**: Warm dawn break transitioning from `#111622` to sunlit ivory `#FAF6EE` & emerald `#10B981`.
2. **Layer 2 · Parallax Environment Backplate (`0.35x` drift + subtle depth blur)**: Architectural rulers, archival citation matrices, or laboratory coordinate rings reacting to `bassEnergy[frame]`.
3. **Layer 3 · Bespoke Hero SVG/Canvas Visual (`48%–72%` of canvas, `Anticipation -> Spring Action -> Follow-through`, `width-first then height` panel expansion) + `<EditorialKineticType />` in Negative Space**:
   - Build bespoke, museum-grade SVG/Canvas visuals for all 20 shots (`S01` 0.20m sofa ruler & left cyan feed -> `S02` right crimson feed & `0.20m -> ∞` fracture -> `S03` `BV12P41187fs` zipper comment split -> `S04` 2006 `Infotopia` archival book & vermilion seal -> `S05` `Selective Exposure` highlighter & silk cocoon -> `S06` UvA 3-bar empirical chart with direct leader callouts -> `S07` WSJ `10×10` 100-bot matrix -> `S08` Bot #01 macro HUD `0 Likes / 0 Comments / 0 Follows` vs racing `Dwell Time ms` -> `S09` 224 thumbnails tunnel & `93%` depression blue ring -> `S10` `360° -> 2°` laser sector collapse with `4.7×` vector -> `S11` Duke `N=1,652` red/blue partisan dot field -> `S12` `Day 01 -> Day 30` cross-cutting 24 tweets/day stream -> `S13` **CLIMAX** green dashed expected line vs vermilion solid actual line violently diverging to `+100%` -> `S14` brain sagittal section with amygdala red alert & hexagonal silk shield ricocheting arrows -> `S15` Geschke `Algorithm = OFF` multi-agent island clustering -> `S16` Triple-Ring Deadlock locking around the couple -> `S17` Bilibili `@深色椿 11,219 赞` authentic comment card -> `S18` 180° flip into `15s` honeypot search bar spoofing tags -> `S19` Point-Line-Plane 3 warm light beams wedging `2° -> 360°` -> `S20` return to midnight sofa, swapping phones, ruler `0.20m -> 0.00m`).
4. **Layer 4 · Unifying Color Grade Overlay (`mix-blend-mode: soft-light`)**.
5. **Layer 5 · Per-Frame Flickering SVG `feTurbulence` Film Grain + Radial Vignette**.

#### LAW 4: DIRECTOR'S SCREENING ROOM WITH LIVE `BEAT-SYNC DEBUG HUD` (`卡点脉冲核验叠加层`)
- Build an interactive Screening Room (`src/App.tsx`) hosting `<Player />` (`1920×1080`, `30fps`, `3600` frames) plus:
  1. **3-Track Real Studio Master Switcher**: Instant switching between:
     - `《开智小曲》· Vibe知识大赏原曲母带 (75/150 BPM 锁相主轨)` (`kaizhi_studio`)
     - `mabanua - 《Komorebi》· 电影叙事原曲母带 (137.2 BPM)` (`komorebi_studio`)
     - `《We Never》· 硬核电子脉冲原曲母带 (110.3 BPM)` (`wenever_studio`)
  2. **Interactive `卡点脉冲核验 HUD (Beat-Sync Debug Overlay)` Toggle (`ON` by default or 1-click toggle)**:
     - Renders a sleek translucent telemetry strip at the very bottom of the player (`height: 54px`) showing:
       - A real-time scrolling `-2.0s .. +4.0s` beat & transient oscilloscope timeline: white ticks for `beats`, gold bars for `downbeats` & `shot cuts`, **red glowing dots for real `kick` hits**, **yellow dots for real `snare` hits**, **cyan dots for `hat` hits**;
       - Live telemetry badges: `BEAT #043 / 150`, `SHOT S07 · 6 BEATS (4.8s)`, `TEXT FX: DECODE`, `CAMERA: 0.78x (FLASH IN)`, and a live `KICK IMPULSE` meter bar!
  3. **20-Shot Interactive Storyboard Matrix**: Click any shot `S01`–`S20` to seek directly to its `startFrame`, displaying its `beats`, `durationSec`, `cameraScale`, `transIn`, `textEffect`, and `heroAnchor`.
  4. **Zero Widow-Wrap Responsive Polish**: Ensure both Desktop (`1440×900`) and Mobile (`390×844`) layouts have zero 1–2 character widow wraps (`whitespace-nowrap` on pills/badges).

---

### STEP 3: SELF-CONTAINED REMOTION CLI & VISUAL SELF-CHECK BEFORE FINISHING
1. Ensure both `npx vite build` (for the Screening Room web app) AND `npx remotion still` / `npx remotion render` (via `src/index.ts` -> `registerRoot(RemotionRoot)`) work cleanly with zero TypeScript errors.
2. Render and visually inspect at least 6 key frames (`S01`, `S04`, `S08`, `S10`, `S13` climax, `S17` comment card, `S20` finale) to verify:
   - **Zero conventional bottom subtitle bar (`y = 940px` pill is completely gone)**;
   - **Magazine-style `<EditorialKineticType />` is bold, high-contrast, properly placed in negative space, and never overlaps or clips the hero diagram**;
   - **Real studio audio tracks (`kaizhi_studio_120s.mp3`, `komorebi_studio_120s.mp3`, `wenever_studio_120s.mp3`) and `beat_maps.json` are wired and verified**.
```
