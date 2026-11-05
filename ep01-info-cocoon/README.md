# 《信息茧房：0.20 米的平行宇宙》程序化视频创作全量工程包 (`info-cocoon-promo`)

本仓库为深度调查与数据可视化动态电影 **《信息茧房：0.20 米的平行宇宙》（Information Cocoon: The 0.20m Parallel Universe）** 的完整制作资产包（Production Bible & Acoustic Stems）。专为程序化视频工程（Remotion / Canvas 2D / SVG + WebAudio）与云端沙盒协同构建而准备。

---

## 一、 核心文档与剧本规格 (`docs/`)

| 文件路径 | 核心内容与用途 |
| :--- | :--- |
| `docs/SPEC.md` | **导演视觉技术规格书（HyperFrames & Orkas 标准）**：定义 `1920×1080 @ 30fps` 输出规格、双模时序架构（**模式 A：`120.0s` 视觉自然呼吸主模式** / **模式 B：`128.0s` 40 小节音乐网格模式**）、**三重物理媒介视觉系统**（`#141210` 胡桃木客厅、`#F3EFE6` 拓印学术档案纸、`#0D1015` 算法黑曜石矩阵）、版面字号下限与 20 镜共享变形锚点总表。 |
| `docs/SCRIPT_AND_DIRECTOR_TABLE.md` | **六幕 20 镜终版导演分镜台本（v2.2 无配音双层字幕主时钟版）**：包含每一镜的自然呼吸时长 $T_{\text{intrinsic}}$、画面构图、唯一主视觉动作（`One Hero Move`）、`L1 屏上视觉主字`、`L2 底部呼吸字幕`（每拍 $\le 16$ 字）、跨镜变形衔接（`Seam Carry`）及声效对位。 |
| `docs/INFORMATION_COCOON_DOSSIER.md` | **全网信源与学术实证档案库**：汇总 Cass Sunstein (2006)《Infotopia》、阿姆斯特丹大学 Möller et al. (2018)、《华尔街日报》100 个 TikTok 机器人实验 (2021)、杜克大学 Bail et al. (2018, *PNAS*, $N=1,652$ 逆火效应极化翻倍) 与 Geschke et al. (2018) 三重过滤模型及真实高赞评论原话。 |
| `docs/MUSICOLOGY_AND_SHEET_MUSIC_REPORT.md` | **《开智小曲》与《Komorebi》16 分音符级逆向扒谱与声场精析报告**：包含两首标杆曲目的 HPSS 谐波-打击乐分离、16 分音符鼓组矩阵（`K / S / H`）、复音和弦 Voicing、泛音衰减谱 $H_1..H_8$、1:1 复刻客观指标（包络相关系数 `0.9585` / `0.9244`，频谱余弦相似度 `0.9970` / `0.9979`）及原创融合曲《微光与破茧 v3.0》结构说明。 |
| `docs/CODE_VIDEO_METHODOLOGY.md` | **代码驱动视频（Code-Driven Video / MG）核心方法论**：确定性时间轴 `seek(t)`、闭式解析解阻尼弹簧（Closed-Form Damped Spring）、2.5D 连续运镜与共享锚点变形、落位静止阅读窗（Comprehension Hold）与直接引线标注规范。 |
| `docs/beats.json` & `docs/beat_data_128s.json` | 20 镜分镜时序、双层字幕时间戳、160 拍节拍网格与 40 小节强拍（Downbeat）JSON 数据。 |
| `docs/01_开智小曲_16th_reverse_blueprint.json` | 《开智小曲》前 16 小节（256 个 16 分音符槽位）完整离散鼓点瞬态、微时值偏移（ms）、复音 Voicing 与简谱蓝图。 |
| `docs/03_Komorebi_16th_reverse_blueprint.json` | 《Komorebi》前 16 小节（256 个 16 分音符槽位）完整离散鼓点瞬态、Laid-back 摇摆偏移、复音 Voicing 与简谱蓝图。 |
| `docs/reverse_engineering_verification_summary.json` | 两首标杆曲目 16 分音符逆向扒谱与 1:1 净室复刻客观验证汇总。 |

---

## 二、 声学母带与实录拟音素材 (`assets/audio/`)

| 文件路径 | 规格 / 时长 | 角色与使用场景说明 |
| :--- | :---: | :--- |
| `assets/audio/cocoon_master_120s.mp3` | `75.0 BPM` / `120.0s` | **[主推荐 · 模式 A 母带]《微光与破茧 v3.0 (Intrinsic 120s)》**：基于逆向解卷积音色核与 16 分音符律动合成，完全对齐 `SPEC.md` 20 镜自然呼吸时间窗（含 `95.0s–101.4s` `S17` 440Hz 水下低通滤波与 `101.4s` `AbMaj7` 暖阳破局）。 |
| `assets/audio/cocoon_master_128s.mp3` | `75.0 BPM` / `128.0s` | **[备选 · 模式 B 母带]《微光与破茧 v3.0 (40-Bar Grid 128s)》**：严格 40 小节（每镜 2 小节 = `6.40s`）等长网格母带（`102.4s–108.8s` 水下滤波）。 |
| `assets/audio/kaizhi_original.mp3` | `75.0 BPM` / `136.5s` | **[标杆参考 #1]《开智小曲 (vibe知识大赏)》原曲**（F Minor / Ab Major）。 |
| `assets/audio/komorebi_original.mp3` | `68.6 BPM` / `157.8s` | **[标杆参考 #2]《Komorebi》— mabanua 原曲**（B Minor / D Major）。 |
| `assets/audio/kaizhi_1to1_replica.mp3` | `75.0 BPM` / `38.4s` | 《开智小曲》前 12 小节 1:1 逆向扒谱净室复刻验证音频（`Onset Corr = 0.9585`, `Spectral Sim = 0.9970`）。 |
| `assets/audio/komorebi_1to1_replica.mp3` | `68.6 BPM` / `42.0s` | 《Komorebi》前 12 小节 1:1 逆向扒谱净室复刻验证音频（`Onset Corr = 0.9244`, `Spectral Sim = 0.9979`）。 |
| `assets/audio/heartbeat_lub_dub.mp3` | `0.9s` | 低频心跳声（用于 `S01` 深夜客厅开场、`S14` 杏仁核红光预警、`S17` 水下凝视）。 |
| `assets/audio/glitch_tear.mp3` | `0.35s` | 丝绸/数字拉链撕裂声（用于 `S02` 标尺裂为 $\infty$、`S03` 评论区拉链式左右劈开）。 |
| `assets/audio/slam_impact.mp3` | `0.7s` | 档案馆重锤印章砸落声（用于 `S04` 2006《Infotopia》印章、`S13` `极化翻倍 +100%` 冲顶定格）。 |
| `assets/audio/whoosh_deep.mp3` | `0.6s` | 跨媒介深沉相机推拉风声（用于 `S04`/`S07`/`S11`/`S15` 物理媒介切换瞬间）。 |
| `assets/audio/lock_click.mp3` | `0.25s` | 精密机械锁死声（用于 `S08` 点赞/评论/关注三项锁死 `0`、`S16` 三道同心环扣合锁死）。 |
| `assets/audio/glass_shatter.mp3` | `0.85s` | 玻璃窄缝清脆碎裂声（用于 `S11` $2^\circ$ 玻璃罩裂开散落为 1,652 人样本点阵）。 |
| `assets/audio/reverse_suck.mp3` | `0.8s` | 倒吸真空瞬态声（用于 `S10` $360^\circ \to 2^\circ$ 坍缩、`S17` 切入水下低通滤波前一瞬）。 |
| `assets/audio/water_drop.mp3` | `1.2s` | 清冽水滴共鸣声（用于 `S17` 水下第四面墙凝视）。 |
| `assets/audio/singing_bowl_strike.mp3` | `6.5s` | 颂钵温暖泛音长鸣（用于 `S18` 阳光拨云翻转、`S20` 0.00m 客厅沙发温暖闭环）。 |
| `assets/audio/coin_clatter.mp3` / `paper_crumple.mp3` | `1.8s` / `2.5s` | 辅助物理拟音素材（纸张翻动、硬币/优惠券弹出）。 |
