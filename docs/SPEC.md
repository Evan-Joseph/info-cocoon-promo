# 《信息茧房》导演视觉技术规格书 V2.0 (SPEC.md · Huashu × Kashi-Motion × HyperFrames 标准)

> **版本定位**：V2.0 突破天花板版（Kinetic Editorial & Studio Beat-Locked Edition）。深度融合 [`alchaincyf/huashu-design`](https://github.com/alchaincyf/huashu-design) (`v3.1.0`) 电影级分镜七律、[`ShizukiR1n/kashi-motion`](https://github.com/ShizukiR1n/kashi-motion) 多频段真鼓点驱动相机与动态排印系统、[`haidrrrry/claude-remotion-skill`](https://github.com/haidrrrry/claude-remotion-skill) 五层视觉深度栈，以及 [`heygen-com/hyperframes`](https://github.com/heygen-com/hyperframes) 三重物理媒介规范。

---

## 1. 核心目标与输出规格 (`GOAL & OUTPUT`)

- **GOAL**：让观众从“把一切怪罪给推荐算法”的惯性抱怨，转向看清“毫秒级停留时长商业指标 × 大脑杏仁核身份防御”的双向共谋，并在今晚放下手机与枕边人交换屏幕。
- **OUTPUT**：`1920 × 1080` (`16:9` 横屏主片，兼容 `80% Title-Safe` 安全区)，`30 fps`，总长 **`120.0 秒`（`3,600 帧 @ 30fps`，精确对应 `75.00 BPM` 下的 `150 拍`）**。
- **PRIMARY SOUNDTRACK（真实录音室标杆原曲母带直驱，彻底弃用合成器自制 BGM）**：
  - **主轨 Track 1（默认主打）**：`assets/audio/kaizhi_studio_120s.mp3` —— **《开智小曲》（vibe 知识大赏原曲母带 · 相干锁相版）**。已精准裁除前导 `0.62804s` 拾音留白，使 **Beat 0 严格对齐 `t = 0.000s (Frame 0)`**，`75.00 BPM`（双倍速 `150.00 BPM`），每拍周期 $T = 0.8000\text{ s} = \mathbf{24.00\text{ 帧}}$，每半拍（8 分音符）$= 0.4000\text{ s} = \mathbf{12.00\text{ 帧}}$，每 16 分音符 $= 0.2000\text{ s} = \mathbf{6.00\text{ 帧}}$，全片 120 秒累积漂移 `< 4.6ms (0.14 帧)`。
  - **副轨 Track 2（电影叙事母带）**：`assets/audio/komorebi_studio_120s.mp3` —— **mabanua《Komorebi》原曲母带（`137.19 BPM` 相干锁相版）**。
  - **副轨 Track 3（硬核脉冲母带）**：`assets/audio/wenever_studio_120s.mp3` —— **《We Never》原曲母带（`110.30 BPM` 相干锁相版）**。
  - **帧级真鼓点数据包**：`assets/audio/beat_maps.json`（及 `docs/BEAT_ANALYSIS.json`）内含三首原曲经 HPSS 谐波/打击乐分离与 Hilbert 对数新颖度提取的完整 `beats[]`、`downbeats[]`、`kick[]` (`{t, frame, s}`)、`snare[]`、`hat[]`、`energy[]` (`30fps` 3600 帧数组) 与 20 镜卡点时间表 `shotsCueSheet`。

---

## 2. 破局核心法则一：零传统底部字幕条 & 杂志级动态排印 (`ZERO CLOSED-CAPTION BAR · EDITORIAL KINETIC TYPOGRAPHY`)

> **铁律（源自 `huashu-design/storyboard-basics.md` 律四 & `kashi-motion/docs/effects.md`）**：
> 在无全局人声配音的 #Vibe知识大赏# / 视觉散文短片中，**绝对禁止在画面底部 (`y = 940px`) 放置常规电视字幕条或半透明黑底字幕胶囊**！传统底部字幕条会让无配音短片沦为“静音的 PPT 录像”。
> **文字本身就是画面构图与空间叙事的第一主角（字画一体 / 杂志级动态排印）**。

1. **每镜三层杂志级字号阶梯 (`3-Tier Editorial Hierarchy @ 1920×1080`)**：
   - **Tier 1 · 巨型视觉锚点大字/核心实证大数 (`Hero Anchor`)**：**`96px – 168px`**（`font-weight: 900`，字距 `-0.03em`，行高 `0.95`），如 `0.20 m`、`BV12P41187fs`、`2006 · 桑斯坦`、`100 BOTS`、`0 赞 · 0 评 · 0 关注`、`36 min → 93%`、`360° → 2°`、`极化翻倍 +100%`、`11,219 赞`。
   - **Tier 2 · 两拍式叙事主句 (`Two-Beat Narrative Clauses`)**：**`40px – 54px`**（`font-weight: 700`，每镜严格控制在 **2 句精炼短句**，总字数 `18–28 字`），直接嵌入画面**负空间（Negative Space）**（左上杂志眉题区、分屏对峙侧翼、图表留白象限或高潮全屏字卡），绝不遮挡核心几何图形，绝不贴底边居中变成传统字幕。
   - **Tier 3 · 具象档案/系统印章角标 (`Diegetic Stamp & Direct Leader Callout`)**：**`24px – 32px`**（等宽字体 `JetBrains Mono` + 边框印章或图表直接引线标注，如 `PNAS EXPERIMENT · 2018`、`WSJ INVESTIGATION · 2021`）。
2. **两拍式节奏砸落 (`Two-Beat Kinetic Slam Choreography`)**：
   - **第 1 拍 (`Beat +0.75 = startFrame + 18f`)**：`Hero Anchor` 巨型锚点大字与第 1 句叙事短句随镜头落位及鼓点同步砸入画面；
   - **第 2 拍 (`Beat +2.0 = startFrame + 48f` 正拍/军鼓重音)**：第 2 句转折/实证短句与对比色高亮块（或印章角标）卡在原曲 Snare / Kick 瞬态上精准扣合；
   - **第 3 拍至镜末 (`startFrame + 72f .. endFrame`，驻留 `>= 2.4s – 4.8s`)**：**阅读静止锁死期（Comprehension Hold）**——所有文字一旦落位必须 100% 静止（零持续缩放、零飘移），确保观众从容读完每一处论据。
3. **8 种动态文字入场原语与冷却反重复机制 (`8 Kinetic Text Effects with Cooldown`)**：
   - 相邻两个镜头**严禁重复同一种文字入场方式**，按 `beat_maps.json -> shotsCueSheet[].textEffect` 轮换执行：
     1. `slam`：重锤物理砸落（从 `scale(2.1)` + 径向模糊砸至 `1.0`，触发 `CameraRig` 震动与地面冲击波纹）；
     2. `maskslide`：基线遮罩上滑 + 速度切变（从 `overflow: hidden` 基线下方以 `skewX(-8deg) -> 0deg` 利落抽出）；
     3. `split`：左右/上下双半裂变对撞合拢（契合双屏分裂与两党对立）；
     4. `punch`：全屏节拍连击定格（每个关键词卡在连续半拍 `12f` 上依次暴击弹出）；
     5. `focus`：大景深高斯模糊拉焦（从 `blur(18px) scale(1.12)` 瞬间聚焦至刀锋锐利）；
     6. `decode`：算法乱码矩阵解码锁定（契合 WSJ 100 机器人与 Geschke 仿真代码感）；
     7. `stroke`：钢笔/粉笔矢量描边先行绘制，随后墨色瞬间充盈（契合 2006 档案手稿与破局三束光）；
     8. `follow`：相机沿长句横向追踪扫视后拉远揭示全貌。

---

## 3. 破局核心法则二：真鼓点驱动 2.5D 摄像机与零裸切 (`BEAT-REACTIVE 2.5D CAMERA RIG & ZERO BARE CUTS`)

1. **真鼓点阻尼弹簧相机 (`Beat-Reactive <CameraRig>`，源自 `kashi-motion/CameraRig.tsx`)**：
   - 摄像机包装层 `<CameraRig>` 与场景世界层 `<WorldStage>` 严格分离；
   - 实时读取当前所选原曲的 `kick[]`、`snare[]` 与 `energy[]`：
     - **Kick 低频重拍冲击**：每当距离最近一记真实 Kick 瞬态 `dt = t - kick.t` 处于 `[0, 1.1s]` 内，叠加闭式阻尼弹簧缩放脉冲 $\Delta S_{\text{kick}} = 0.042 \cdot s \cdot e^{-7.5 dt} \cos(11 dt)$，使画面随真实底鼓产生极具肉感的呼吸震动；
     - **Snare 军鼓微震与高光闪烁**：Snare 瞬态触发 `0.35deg` 高频角位移微颤与强调色描边亮度脉冲；
     - **连续有机漂移**：叠加低频双正弦呼吸漂移 $(\Delta x = 18\sin(0.35t)\text{ px}, \Delta y = 12\cos(0.28t)\text{ px})$，彻底告别死板静态画布。
2. **五档景别阶梯交替 (`5-Tier Shot Scale Alternation`，源自 `huashu-design` 律一)**：
   - 全片 20 镜严格在 **远景 `0.78x` / 全景 `1.00x` / 中景 `1.35x` / 近景 `1.80x` / 特写 `2.30x`** 五档景别间交替切换，**相邻两镜景别绝对不同**。
3. **三层 Z 轴视差与 3D 透视倾斜 (`3-Layer Parallax & 3D Perspective`)**：
   - 每个场景内部拆分为：**远景环境层（`0.35x` 位移速率 + `blur(4px)` 景深柔化）**、**中景主叙事与动态排印层（`1.00x` 基准速率，支持 `perspective(2400px) rotateX(6deg) rotateY(-4deg)` 空间透视）**、**前景微粒/标尺/光斑层（`1.40x` 位移速率）**。
4. **零裸切动机转场 (`Zero Bare Cuts`，源自 `huashu-design` 律七)**：
   - 严禁生硬直接切换镜头！每处切镜点（精确落在 `frame % 24 === 0` 原曲整数拍上）必须执行 `shotsCueSheet[].transIn` 指定的 `12 帧 (0.40s)` 动机转场：
     - `push`：镜头加速穿过当前镜头的核心几何孔洞/屏幕，直接进入下一镜头空间；
     - `whip`：带水平方向动态模糊（`scaleX(1.08) blur(6px)`）的高速甩镜横移；
     - `pullout`：从微观特写急速拉远，揭示上一镜其实嵌在下一镜的宏观容器内；
     - `flash`：媒介翻转处的重拍胶片曝光闪白/朱砂印泥震荡转场。

---

## 4. 破局核心法则三：五层电影级视觉深度栈与三重物理媒介 (`5-LAYER VISUAL STACK & 3 PHYSICAL MEDIA`)

### 4.1 每一帧强制渲染的五层深度栈 (`haidrrrry/claude-remotion-skill`)
1. **Layer 1 · 动态物理肌理底板 (`Animated Physical Surface`)**：随 `bassEnergy[frame]` 微幅呼吸的双径向光晕 + 物理媒介网格/纸张纤维肌理（绝不用纯平 `#000000` 或 `#FFFFFF`）；
2. **Layer 2 · 远景视差环境层 (`0.35x Parallax Backplate`)**：空间纵深参照物（客厅百叶窗光影 / 档案馆微缩引文矩阵 / 实验室坐标刻度环）；
3. **Layer 3 · 核心主体图表与杂志级动态排印 (`Hero Graphic & Editorial Kinetic Type`)**：核心图表占比 **`48% – 72%`**，面板展开遵循「先水平拉开宽度 `0–8f`，再垂直展开高度 `6–16f`」，入场遵循 `Anticipation (3f 反向蓄力) -> Action (弹簧主动作) -> Follow-through (惯性回弹)`；
4. **Layer 4 · 全局调色统一层 (`Soft-Light Color Grade Overlay`)**：`mix-blend-mode: soft-light` 冷暖情绪滤镜；
5. **Layer 5 · 逐帧胶片颗粒与光学暗角 (`Per-Frame SVG feTurbulence Grain + Radial Vignette`)**。

### 4.2 三重物理媒介轮换表 (`Three Physical Media`)

| 媒介代号与适用幕次 | 底色 (`Ground`) | 主墨与结构线 (`Ink A`) | 焦点强调色 (`Ink B`) | 杂志级排版与物理材质特征 |
| :--- | :--- | :--- | :--- | :--- |
| **媒介 I：深夜客厅胡桃木与双屏冷暖玻璃 (`walnut`)**<br>适用：Act I (`S01–S03`) & Act VI (`S18–S20`) | `#141210`<br>（深胡桃木暖黑） | `#F5F2EB`<br>（暖白羊皮纸字）<br>标尺金：`#D97706` | 左屏冷青：`#0EA5E9`<br>右屏暗红：`#E11D48`<br>晨光暖金：`#F59E0B` | 玻璃视窗具真实倒角高光；大字采用粗衬线/重黑体杂志标题对比布局，分屏两侧形成冷暖戏剧张力。 |
| **媒介 II：拓印学术档案纸 (`paper`)**<br>适用：Act II (`S04–S06`) & Act IV (`S11–S14`) | `#F3EFE6`<br>（暖棉学术档案纸，带坐标方格与纸纤维） | `#141413`<br>（深碳素印刷黑墨） | 朱砂批注印泥：`#D94E34`<br>档案钴蓝：`#1D4ED8`<br>荧光笔黄：`#FACC15` | 模拟 PNAS 期刊与学术专著版式：顶栏刊头线、粗黑大号实证数字、荧光笔横向涂抹高亮、朱砂印章砸落。 |
| **媒介 III：算法实验室黑曜石矩阵 (`obsidian`)**<br>适用：Act III (`S07–S10`) & Act V (`S15–S17`) | `#0D1015`<br>（消光碳黑实验室底板） | `#E6EDF3`<br>（高对比骨白）<br>网格线：`#222834` | 抑郁深蓝：`#2563EB`<br>负面权重红：`#EF4444`<br>破局翡翠绿：`#10B981` | 瑞士国际主义网格排版：超大等宽数字读秒器、工业级几何点阵、直接引线标注（Direct Leader Callout）。 |

---

## 5. 20 镜「非等长整数拍呼吸网格」与动态排印总表 (`BEAT-SNAPPED INTRINSIC CUE SHEET`)

> **数学原理**：在相干锁相的《开智小曲》原曲母带（`75.00 BPM`，每拍 $T = 0.8000\text{ s} = 24\text{ 帧}$）上，通过为不同复杂度的镜头分配 **`6 拍 (4.8s)`、`7 拍 (5.6s)`、`8 拍 (6.4s)`、`9 拍 (7.2s)`** 的非等长整数拍序列 `[7, 6, 8, 7, 7, 8, 6, 7, 9, 8, 7, 7, 9, 7, 7, 9, 8, 8, 6, 9]`（总计 **150 拍 = 120.0 秒 = 3,600 帧**）：
> 1. **消除等长节拍器催眠感**（全片无任何连续 3 镜具有相同秒数）；
> 2. **100% 切镜点 (`startFrame`) 严丝合缝落在原曲整数拍 (`frame % 24 === 0`) 与真实鼓点上（零毫秒误差）**；
> 3. **100% 镜内两拍大字砸落 (`Beat 1 Slam = +18f`, `Beat 2 Snap = +48f`) 精确锁死在原曲節拍脉冲上**。

| 镜号 | 幕次 | 媒介 | 拍数 (`Beats`) | 时长 | 时间窗 (`Sec`) | 帧区间 (`30fps`) | 景别 (`Scale`) | 转场 (`transIn`) | 文字动效 (`textEffect`) | Tier 1 巨型锚点大字 (`Hero Anchor`) | Tier 2 两拍杂志级叙事主句（画内负空间排版，零底部字幕条） |
| :--- | :--- | :--- | :---: | :---: | :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **S01** | Act I | `walnut` | **7 拍** | `5.6s` | `0.0 – 5.6s` | `0 – 168` | `1.00x` | `focus` | `slam` | **`0.20 m`** | ① 物理距离仅二十厘米 ／ ② 灵魂却隔着平行宇宙 |
| **S02** | Act I | `walnut` | **6 拍** | `4.8s` | `5.6 – 10.4s` | `168 – 312` | `1.35x` | `whip` | `split` | **`0.20m → ∞`** | ① 左屏：进产房前留密码 ／ ② 右屏：崩溃发现非亲生 |
| **S03** | Act I | `walnut` | **8 拍** | `6.4s` | `10.4 – 16.8s` | `312 – 504` | `1.80x` | `push` | `maskslide` | **`BV12P41187fs`** | ① 明明刷到同一个视频 ／ ② 评论区却劈成两个战场 |
| **S04** | Act II | `paper` | **7 拍** | `5.6s` | `16.8 – 22.4s` | `504 – 672` | `1.00x` | `flash` | `slam` | **`2006 · 桑斯坦`** | ① 《Infotopia》首次命名信息茧房 ／ ② 那是算法尚未统治的时代 |
| **S05** | Act II | `paper` | **7 拍** | `5.6s` | `22.4 – 28.0s` | `672 – 840` | `1.80x` | `push` | `stroke` | **`选择性接触`** | ① 人类天生偏爱顺耳的回音 ／ ② 第一根蚕丝其实是自己吐出的 |
| **S06** | Act II | `paper` | **8 拍** | `6.4s` | `28.0 – 34.4s` | `840 – 1032` | `1.35x` | `whip` | `maskslide` | **`协同过滤 · 最高`** | ① 阿姆斯特丹大学实测三类推荐 ／ ② 老派协同过滤反而最促跨界 |
| **S07** | Act III | `obsidian` | **6 拍** | `4.8s` | `34.4 – 39.2s` | `1032 – 1176` | `0.78x` | `flash` | `decode` | **`100 BOTS`** | ① 《华尔街日报》零干预实验 ／ ② 一百个全新账号放进推荐流 |
| **S08** | Act III | `obsidian` | **7 拍** | `5.6s` | `39.2 – 44.8s` | `1176 – 1344` | `2.30x` | `push` | `punch` | **`0 赞 · 0 评 · 0 关注`** | ① 算法根本不需要你点亮红心 ／ ② 毫秒级停留时长才是唯一底牌 |
| **S09** | Act III | `obsidian` | **9 拍** | `7.2s` | `44.8 – 52.0s` | `1344 – 1560` | `1.35x` | `pullout` | `slam` | **`36 min → 93%`** | ① 连看 224 条视频仅用 36 分钟 ／ ② 信息流 93% 被抑郁深蓝吞没 |
| **S10** | Act III | `obsidian` | **8 拍** | `6.4s` | `52.0 – 58.4s` | `1560 – 1752` | `1.80x` | `whip` | `focus` | **`360° → 2°`** | ① 负面情绪停留权重高出 4.7 倍 ／ ② 全景视野坍缩成两度窄缝 |
| **S11** | Act IV | `paper` | **7 拍** | `5.6s` | `58.4 – 64.0s` | `1752 – 1920` | `1.00x` | `flash` | `split` | **`N = 1,652`** | ① 那把他们强行拉出茧房呢？ ／ ② 杜克大学追踪两党真实受试者 |
| **S12** | Act IV | `paper` | **7 拍** | `5.6s` | `64.0 – 69.6s` | `1920 – 2088` | `1.35x` | `push` | `maskslide` | **`24 条 / 天 × 30 天`** | ① 每天硬塞 24 条对立阵营推文 ／ ② 足足持续整整一个月 |
| **S13** | Act IV | `paper` | **9 拍** | `7.2s` | `69.6 – 76.8s` | `2088 – 2304` | `2.30x` | `whip` | `slam` | **`极化翻倍 +100%`** | ① 受试者非但没有走向温和妥协 ／ ② 反而比原来极端了整整一倍 |
| **S14** | Act IV | `paper` | **7 拍** | `5.6s` | `76.8 – 82.4s` | `2304 – 2472` | `1.80x` | `push` | `focus` | **`杏仁核防御`** | ① 异见被大脑直接判定为身份威胁 ／ ② 每一次硬劝都在替旧偏见加厚装甲 |
| **S15** | Act V | `obsidian` | **7 拍** | `5.6s` | `82.4 – 88.0s` | `2472 – 2640` | `0.78x` | `pullout` | `decode` | **`Algorithm = OFF`** | ① Geschke 多智能体仿真铁证 ／ ② 关掉算法，认知偏误照样结成孤岛 |
| **S16** | Act V | `obsidian` | **9 拍** | `7.2s` | `88.0 – 95.2s` | `2640 – 2856` | `1.35x` | `push` | `slam` | **`三重死锁`** | ① 个体心理茧房 × 社交回音室 ／ ② 再套上商业算法过滤气泡 |
| **S17** | Act V | `obsidian` | **8 拍** | `6.4s` | `95.2 – 101.6s` | `2856 – 3048` | `2.30x` | `focus` | `maskslide` | **`11,219 赞`** | ① “觉得全是蠢货时先想是否在茧房” ／ ② 还是说——连这话也是为你定制的？ |
| **S18** | Act VI | `dawn` | **8 拍** | `6.4s` | `101.6 – 108.0s` | `3048 – 3240` | `1.35x` | `whip` | `punch` | **`15s 投喂蜜罐`** | ① 主动搜索异见词条并停留十五秒 ／ ② 用虚假正反馈亲手污染用户画像 |
| **S19** | Act VI | `dawn` | **6 拍** | `4.8s` | `108.0 – 112.8s` | `3240 – 3384` | `1.00x` | `pullout` | `stroke` | **`点 · 线 · 面`** | ① 短视频抓线索 · 深度长文看逻辑 ／ ② 跨圈社区对冲单一信源 |
| **S20** | Act VI | `walnut` | **9 拍** | `7.2s` | `112.8 – 120.0s` | `3384 – 3600` | `0.78x` | `push` | `slam` | **`0.20m → 0.00m`** | ① 今晚放下手机，和枕边人交换屏幕 ／ ② 去看看相隔二十厘米的另一个宇宙 |

---

## 6. 分频段双轨混音与卡点调试 HUD (`AUDIO MIXING & BEAT DEBUG OVERLAY`)

1. **分频段双轨混音法则 (`huashu-design/audio-design-rules.md`)**：
   - 原曲母带 BGM 音量设定为 `0.55`（在 S11 音乐骤停呼吸处降为 `0.15`，在 S17 水下窒息段降为 `0.25`，在 S13 与 S18 高潮段升至 `0.68`）；
   - Foley 音效（`whoosh_deep.mp3`, `slam_impact.mp3`, `glass_shatter.mp3`, `lock_click.mp3`, `paper_crumple.mp3`, `coin_clatter.mp3`, `singing_bowl_strike.mp3`）聚焦于中高频瞬态，在视觉转场或大字砸落前 **`1–2 帧 (-33ms)`** 提前触发，与原曲底鼓毫不掩蔽。
2. **放映室内置 `卡点核验 HUD (Beat-Sync Debug Overlay)`（源自 `kashi-motion/BeatLayer.tsx`）**：
   - 在放映室（Screening Room）提供一键开关 **`[卡点脉冲调试 HUD]`**：开启后在画布底部叠加实时滚动的节拍与鼓点时间轴（红色圆点 = 真实 Kick 瞬态、黄色圆点 = 真实 Snare 瞬态、青色圆点 = Hi-Hat、白色竖线 = 整数拍网格、金色旗标 = 镜头切点），并在每次真实 Kick 命中时触发画布边框脉冲闪光，让审片人用肉眼即可验证 100% 帧级音画咬合。
