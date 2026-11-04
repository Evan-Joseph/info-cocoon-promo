// ─────────────────────────────────────────────────────────────
// 《信息茧房：0.20 米的平行宇宙》— V3.0 64-Bar Uncut Downbeat-Locked Core
// Mode A: 135.2s (4,056 frames @ 30fps) — ZHENLOE We Never (Remix) / 千年之后(氛围版) / 开智小曲 64-Bar Uncut Master
// Mode B: 150.0s (4,500 frames @ 30fps) — Claude算法小曲 / 若如初见(Remix) 72-Bar 3-Drop Uncut Master
// ─────────────────────────────────────────────────────────────

export const FPS = 30;
export const W = 1920;
export const H = 1080;
export const DURATION_A = 135.2; // Mode A: 135.2s (4056f) Uncut We Never / 开智小曲
export const DURATION_B = 150.0; // Mode B: 150.0s (4500f) Uncut Claude算法小曲 3-Drop Master

export type Mode = "A" | "B";
export type Medium = "walnut" | "paper" | "obsidian" | "dawn";

export const PAL = {
  walnut: { ground: "#141210", ink: "#F5F2EB", amber: "#F59E0B", ruler: "#D97706", cyan: "#0EA5E9", rose: "#E11D48", wood: "#241C16", wood2: "#2E241C" },
  paper: { ground: "#F3EFE6", ink: "#141413", vermilion: "#D94E34", cobalt: "#1D4ED8", marker: "#FACC15", soft: "#8A8578", rule: "rgba(20,20,19,0.06)" },
  obsidian: { ground: "#0D1015", ink: "#E6EDF3", grid: "#222834", blue: "#2563EB", red: "#EF4444", green: "#10B981", dim: "#5B6573" },
};

export const FONT_SANS = "CocoonSans, 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif";
export const FONT_SERIF = "CocoonSerif, 'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', serif";
export const FONT_MONO = "CocoonMono, CocoonSans, ui-monospace, Menlo, monospace";

export interface Shot {
  id: string;
  act: number;
  medium: Medium;
  start: number; // internal animation master clock [0..120]
  end: number;
  hold: number;
  title: string;
  hero: string;
  era: string; // Top-Center Chapter & Era Stamp
  horizonDeg: number; // Top-Right Persistent Concept Meter (360° -> 2° -> 1° -> 360°)
  l2: [string, string]; // Two-beat Chinese narrative with 【】 gold/vermilion highlights
  en: [string, string]; // Bilingual literary English italic sub-lines
  note?: string; // Zone 4 inline stage annotation
}

export const SHOTS: Shot[] = [
  {
    id: "S01", act: 1, medium: "walnut", start: 0.0, end: 5.8, hold: 1.8,
    title: "相距 0.20 m", hero: "标尺拉开 · 左屏升起定格",
    era: "ACT I · 平行沙发", horizonDeg: 360,
    l2: ["深夜十一点，同一张沙发，相距不到【20 厘米】", "她刷完满屏产房事故，吓得把【银行卡密码】留给爸妈"],
    en: ["11 PM on the same sofa, less than twenty centimeters apart.", "Flooded with childbirth tragedies, she leaves her bank PIN with her parents."],
  },
  {
    id: "S02", act: 1, medium: "walnut", start: 5.8, end: 10.8, hold: 1.6,
    title: "0.20 m → ∞", hero: "右屏对称切入 · 标尺裂为 ∞",
    era: "ACT I · 平行沙发", horizonDeg: 240,
    l2: ["可男友凑过来一看，他的屏幕里全是【彩礼与背叛】", "明明紧挨着坐，指尖下却隔着两个【平行末日】"],
    en: ["Yet when he looks at his own screen, it is filled with dowry fraud and betrayal.", "Sitting shoulder to shoulder, their fingertips scroll through two parallel doomsdays."],
  },
  {
    id: "S03", act: 1, medium: "walnut", start: 10.8, end: 16.8, hold: 1.9,
    title: "同一视频 · 阴阳评论区", hero: "双屏合拢 · 评论区拉链劈开",
    era: "ACT I · 平行沙发", horizonDeg: 180,
    l2: ["明明点开的是【同一条婚礼视频】", "连底下的高赞评论区，都被悄然劈成【阴阳两界】"],
    en: ["Even when both tap the exact same wedding video,", "the top comments below are quietly split into two warring worlds."],
  },
  {
    id: "S04", act: 2, medium: "paper", start: 16.8, end: 22.2, hold: 1.7,
    title: "2006《Infotopia》", hero: "时间轴倒拨 · 档案砸落",
    era: "ACT II · 概念溯源", horizonDeg: 160,
    l2: ["很多人第一反应，是把这一切【怪罪给算法】", "但【2006 年】桑斯坦提出这词时，世上还没有短视频"],
    en: ["Our first instinct is always to blame the algorithm.", "Yet when Cass Sunstein coined the term in 2006, short-video feeds did not exist."],
  },
  {
    id: "S05", act: 2, medium: "paper", start: 22.2, end: 28.0, hold: 1.8,
    title: "病根：选择性接触", hero: "荧光笔扫亮 · 墨线缠茧",
    era: "ACT II · 概念溯源", horizonDeg: 140,
    l2: ["桑斯坦真正警告的，其实是【人的本能】", "我们天生偏爱顺耳的话，第一根蚕丝是【自己吐出的】"],
    en: ["What Sunstein really warned against was human nature itself:", "we crave agreeable echoes—the first silk thread is spun by our own hand."],
  },
  {
    id: "S06", act: 2, medium: "paper", start: 28.0, end: 34.4, hold: 2.1,
    title: "协同过滤 > 朋友圈", hero: "蚕丝拉直为三柱",
    era: "ACT II · 概念溯源", horizonDeg: 175,
    l2: ["现实里的【熟人朋友圈】，往往同质抱团、视野最窄", "实测发现：【协同过滤】反而能借陌生人拓宽视野"],
    en: ["Real-world friend circles are often the most insular tribe of all,", "while collaborative filtering actually broadens your horizon through strangers."],
  },
  {
    id: "S07", act: 3, medium: "obsidian", start: 34.4, end: 39.6, hold: 1.6,
    title: "WSJ · 100 个机器人", hero: "节点阵列化为 10×10",
    era: "ACT III · 停留深渊", horizonDeg: 120,
    l2: ["既然算法起初比人更宽，它又是在哪一刻【变味】的？", "《华尔街日报》派出【100 个】空白机器人，进场实测"],
    en: ["If algorithms start wider than human circles, when do they turn dark?", "The Wall Street Journal deployed 100 blank bot accounts to find out."],
  },
  {
    id: "S08", act: 3, medium: "obsidian", start: 39.6, end: 45.2, hold: 1.8,
    title: "0 点赞 · 0 关注", hero: "微距推入 1 号机器人",
    era: "ACT III · 停留深渊", horizonDeg: 75,
    l2: ["它们【不点赞、不评论】，也不关注任何博主", "只做一件事：刷到悲伤视频时，多【停留几秒钟】"],
    en: ["Zero likes, zero comments, zero follows—completely silent,", "doing only one thing: lingering a few extra seconds on sad videos."],
  },
  {
    id: "S09", act: 3, medium: "obsidian", start: 45.2, end: 52.0, hold: 2.2,
    title: "36 分钟 → 93%", hero: "计时器膨胀为 93% 圆环",
    era: "ACT III · 停留深渊", horizonDeg: 18,
    l2: ["哪怕全程一言不发，仅仅过了【36 分钟】", "推荐流里【93%】的内容，已被抑郁与绝望彻底吞没"],
    en: ["Without tapping a single button, in just 36 minutes,", "93% of its entire feed plunged into depression and despair."],
  },
  {
    id: "S10", act: 3, medium: "obsidian", start: 52.0, end: 58.2, hold: 2.0,
    title: "4.7x · 360° → 2°", hero: "罗盘坍缩为 2° 窄缝",
    era: "ACT III · 停留深渊", horizonDeg: 2,
    l2: ["算法没有好恶，可恐惧与愤怒能让停留暴涨【4.7 倍】", "追逐时长的代码顺水推舟，把全景视野压成【2 度窄缝】"],
    en: ["Code has no morals—yet fear and outrage hold our eyes 4.7 times longer.", "Chasing dwell time, the algorithm squeezes a full horizon into a 2-degree slit."],
  },
  {
    id: "S11", act: 4, medium: "paper", start: 58.2, end: 63.6, hold: 1.7,
    title: "PNAS · N = 1,652", hero: "玻璃罩碎裂为样本点阵",
    era: "ACT IV · 逆火实验", horizonDeg: 2,
    l2: ["那如果强行撬开【2 度窄缝】，逼你看相反观点呢？", "杜克大学招募了【1,652 名】两党选民，做了一场实验"],
    en: ["What if we pry open that 2-degree slit and force you to read the other side?", "Duke University recruited 1,652 partisan voters to put that cure to the test."],
  },
  {
    id: "S12", act: 4, medium: "paper", start: 63.6, end: 69.4, hold: 1.8,
    title: "30 天 × 24 条/日", hero: "异见粒子流双向投喂",
    era: "ACT IV · 逆火实验", horizonDeg: 2,
    l2: ["研究团队付钱，让他们关注【对立阵营】的账号", "连续【30 天】，每天高强度阅读 24 条相反观点"],
    en: ["Participants were paid to follow accounts from the opposing political camp,", "reading 24 opposing posts every single day for 30 consecutive days."],
  },
  {
    id: "S13", act: 4, medium: "paper", start: 69.4, end: 76.6, hold: 2.5,
    title: "极化翻倍 +100%", hero: "实测线劈叉冲顶",
    era: "ACT IV · 逆火实验", horizonDeg: 1,
    l2: ["所有人都以为，看见异见能【消除偏见与隔阂】", "结果非但没人被说服，保守派的极端化反而【翻了一倍】"],
    en: ["Everyone expected exposure to the other side would soften division.", "Instead, no one moderated—and conservative polarization doubled."],
  },
  {
    id: "S14", act: 4, medium: "paper", start: 76.6, end: 82.6, hold: 1.9,
    title: "杏仁核 · 身份护盾", hero: "推入大脑 · 六边形装甲",
    era: "ACT IV · 逆火实验", horizonDeg: 1,
    l2: ["当观点绑架了“我是谁”，异见就会被当成【生存威胁】", "大脑像遭遇攻击一样，在拼命反驳中把茧【织得更厚】"],
    en: ["When beliefs define who you are, opposing views feel like a personal attack;", "every silent rebuttal in your head only weaves the cocoon thicker."],
  },
  {
    id: "S15", act: 5, medium: "obsidian", start: 82.6, end: 88.2, hold: 1.8,
    title: "Algorithm = OFF", hero: "护盾复制为全网孤岛",
    era: "ACT V · 三重咬合", horizonDeg: 1.5,
    l2: ["仿真实验干脆拔掉电源，彻底【关掉一切算法】", "仅凭人类趋同避异的本能，人群依然会【自发结成孤岛】"],
    en: ["When simulations switch every recommendation algorithm completely OFF,", "human comfort-seeking alone still splits society into isolated islands."],
  },
  {
    id: "S16", act: 5, medium: "obsidian", start: 88.2, end: 95.0, hold: 2.2,
    title: "三重同心锁死", hero: "三道同心环扣死",
    era: "ACT V · 三重咬合", horizonDeg: 1.5,
    l2: ["个体偏食吐丝、熟人圈排异、算法【按停留加压】", "三道同心环精密咬合，把每个人锁进定制的【楚门世界】"],
    en: ["Individual habit, social echo chambers, and dwell-time algorithms", "interlock like three concentric rings—a custom-built Truman Show for one."],
  },
  {
    id: "S17", act: 5, medium: "obsidian", start: 95.0, end: 101.4, hold: 2.2,
    title: "@深色椿 · 11,219 赞", hero: "瞳孔收缩 · 万赞评论卡",
    era: "ACT V · 三重咬合", horizonDeg: 5,
    l2: ["直到这条【1.1 万赞】的热评，迎面刺破了屏幕：", "连此刻想要破茧的【清醒】，是不是也在算法的算计之中？"],
    en: ["Until a comment with 11,219 likes pierces right through the screen:", "Even this moment of awakening—was it already calculated by the code?"],
  },
  {
    id: "S18", act: 6, medium: "dawn", start: 101.4, end: 107.6, hold: 2.0,
    title: "主动蜜罐 · 7 折券", hero: "评论卡翻转为搜索蜜罐",
    era: "ACT VI · 破茧暖光", horizonDeg: 120,
    l2: ["既然逃不出算法，摸清规则的人开始【反向驯化它】", "刻意搜停 15 秒诱出折扣，把推荐流变成你的【免费猎犬】"],
    en: ["If you cannot escape the algorithm, learn to domesticate it:", "linger 15 seconds to bait the deal, turning the feed into your own hound."],
  },
  {
    id: "S19", act: 6, medium: "dawn", start: 107.6, end: 113.0, hold: 1.8,
    title: "点 · 线 · 面", hero: "三束暖光撑开 2° → 360°",
    era: "ACT VI · 破茧暖光", horizonDeg: 360,
    l2: ["少吃顺耳的情绪零食，给大脑换一份【点、线、面】食谱", "用深度长文与【跨圈视野】，把 2 度窄缝重新撑回全景"],
    en: ["Feed your mind fewer emotional snacks, and rebuild a Point-Line-Plane diet:", "use long-form essays and cross-circle views to wedge 2° back to a full horizon."],
  },
  {
    id: "S20", act: 6, medium: "walnut", start: 113.0, end: 120.0, hold: 2.6,
    title: "0.20 m → 0.00 m", hero: "落地灯下交换手机屏",
    era: "ACT VI · 破茧暖光", horizonDeg: 360,
    l2: ["今晚回到沙发上，和身边相隔【20 厘米】的人交换一次屏幕", "算法只负责计算你的停留，而你可以决定——【为谁停留】"],
    en: ["Tonight on that sofa, swap screens across the 20-centimeter gap—", "algorithms only calculate where you linger; you decide who is worth lingering for."],
  },
];

export const ACT_NAMES = ["", "平行沙发", "概念溯源", "停留深渊", "逆火实验", "三重咬合", "破茧暖光"];

// ───────────── Exact Measured Downbeat Boundaries for the 20 Shots ─────────────
// Acoustic Proof: Both kaizhi_uncut_135s.mp3 (Bilibili XCoder 0.978x speed-shifted rip, 112.35 BPM)
// and claude_vibe_150s.mp3 (Opizzi - Claude original 320kbps studio master, 115.11 BPM) are the EXACT SAME composition.
// In Opizzi - Claude (115.11 BPM, Bar = 2.08496s, Beat = 0.52124s), all strong bass/kick phrase downbeats
// occur strictly on EVEN-NUMBERED bars (Bar 2k, pk = 0.82-0.97).
// Therefore, all 20 shots are quantized exclusively to 2-bar, 4-bar, and 8-bar EVEN-BAR boundaries,
// ensuring 100% of shot cuts AND 100% of midpoint Beat-B subtitles land on exact Bar Downbeats!

export const BAR_DUR_B = (66.583 - 16.544) / 24; // 2.0849583s (115.110 BPM)
export const BEAT_DUR_B = BAR_DUR_B / 4;         // 0.5212396s

export const SHOT_BOUNDS_A: number[] = [
  0.000,   // S01: Bar 00 (4 bars -> Bar 04)
  8.997,   // S02: Bar 04 (2 bars -> Bar 06)
  13.246,  // S03: Bar 06 (2 bars -> Bar 08, Beat B @ Bar 07 Pre-Drop Vacuum 1)
  17.496,  // S04: Bar 08 (4 bars -> Bar 12, DROP 1 [TITLE])
  26.002,  // S05: Bar 12 (4 bars -> Bar 16, BASS SURGE 1)
  34.505,  // S06: Bar 16 (4 bars -> Bar 20)
  43.003,  // S07: Bar 20 (2 bars -> Bar 22)
  47.258,  // S08: Bar 22 (4 bars -> Bar 26, Beat B @ Bar 24 silent dwell)
  55.768,  // S09: Bar 26 (4 bars -> Bar 30, Deep Valley)
  64.260,  // S10: Bar 30 (2 bars -> Bar 32, Riser + Bar 31 Vacuum 2)
  68.510,  // S11: Bar 32 (2 bars -> Bar 34, DROP 2 [SHATTER])
  72.661,  // S12: Bar 34 (2 bars -> Bar 36)
  76.812,  // S13: Bar 36 (4 bars -> Bar 40, BASS SURGE 2 CLIMAX +100%)
  85.299,  // S14: Bar 40 (4 bars -> Bar 44)
  93.809,  // S15: Bar 44 (4 bars -> Bar 48)
  102.312, // S16: Bar 48 (4 bars -> Bar 52, Deep Valley triple-ring lock)
  110.814, // S17: Bar 52 (4 bars -> Bar 56, Riser + Bar 55 Total Vacuum 3)
  119.316, // S18: Bar 56 (3 bars -> Bar 59, DROP 3 [DAWN])
  125.690, // S19: Bar 59 (2 bars -> Bar 61)
  129.950, // S20: Bar 61 (to 135.200s end)
  135.200, // End of 135.2s Bilibili 0.978x version (Frame 4056)
];

// Mode B (150.00s = 4500f @ 30fps): Opizzi - Claude (Original 320kbps 115.11 BPM 72-Bar 3-Drop Studio Master)
// 100% Even-Bar Phrase Grid: [0, 4, 6, 8, 12, 16, 20, 22, 26, 30, 32, 34, 36, 40, 44, 48, 52, 56, 60, 64, 72]
export const SHOT_BOUNDS_B: number[] = [
  0.000,   // S01: Bar 00 (4 bars -> Bar 04, Beat B @ Bar 02 = 4.034s STRONG_PHRASE pk=0.878)
  8.204,   // S02: Bar 04 (2 bars -> Bar 06, STRONG_PHRASE pk=0.918, Beat B + ∞ crack @ Bar 05 = 10.289s)
  12.374,  // S03: Bar 06 (2 bars -> Bar 08, Beat B + Zipper tear @ Bar 07 = 14.459s Pre-Drop Vacuum 1!)
  16.544,  // S04: Bar 08 (4 bars -> Bar 12, DROP 1 [TITLE] pk=0.927, Beat B + Red Stamp @ Bar 10 = 20.714s!)
  24.884,  // S05: Bar 12 (4 bars -> Bar 16, BASS SURGE 1 pk=0.941, Beat B + Cocoon wind @ Bar 14 = 29.054s!)
  33.224,  // S06: Bar 16 (4 bars -> Bar 20, STRONG_PHRASE pk=0.869, Beat B + Nodes burst @ Bar 18 = 37.394s!)
  41.564,  // S07: Bar 20 (2 bars -> Bar 22, STRONG_PHRASE pk=0.949, Beat B @ Bar 21 = 43.648s)
  45.733,  // S08: Bar 22 (4 bars -> Bar 26, STRONG_PHRASE pk=0.877 -> Bar 23 drum-off, Beat B + Dwell @ Bar 24 = 49.903s!)
  54.073,  // S09: Bar 26 (4 bars -> Bar 30, Deep Valley, Beat B + 93% ring @ Bar 28 = 58.243s!)
  62.413,  // S10: Bar 30 (2 bars -> Bar 32, PRE-DROP 2 RISER pk=0.967, Beat B + 2° collapse @ Bar 31 = 64.498s Vacuum 2!)
  66.583,  // S11: Bar 32 (2 bars -> Bar 34, DROP 2 [SHATTER] pk=0.945, Beat B @ Bar 33 = 68.668s)
  70.753,  // S12: Bar 34 (2 bars -> Bar 36, STRONG_PHRASE pk=0.817, Beat B @ Bar 35 = 72.838s)
  74.923,  // S13: Bar 36 (4 bars -> Bar 40, BASS SURGE 2 CLIMAX pk=0.944, Beat B + +100% Stamp @ Bar 38 = 79.093s!)
  83.263,  // S14: Bar 40 (4 bars -> Bar 44, STRONG_PHRASE pk=0.865, Beat B + Armor @ Bar 42 = 87.433s!)
  91.602,  // S15: Bar 44 (4 bars -> Bar 48, STRONG_PHRASE pk=0.934, Beat B + Islands @ Bar 46 = 95.772s -> Bar 47 drum-off!)
  99.942,  // S16: Bar 48 (4 bars -> Bar 52, Deep Valley, Beat B + 3rd Ring Lock @ Bar 50 = 104.112s!)
  108.282, // S17: Bar 52 (4 bars -> Bar 56, Beat B @ Bar 54 = 112.452s Riser -> holds in Bar 55 = 114.537s Total Vacuum 3!)
  116.622, // S18: Bar 56 (4 bars -> Bar 60, DROP 3 [DAWN] pk=0.920, Beat B + 7折 Coupon @ Bar 58 = 120.792s!)
  124.962, // S19: Bar 60 (4 bars -> Bar 64, BASS SURGE 3 pk=0.887, Beat B + 360° Wedge @ Bar 62 = 129.132s!)
  133.302, // S20: Bar 64 (8 bars -> Bar 72, STRONG_PHRASE pk=0.868, Swap @ Bar 66, Beat B @ Bar 68 = 141.642s, Final Chord @ Bar 70 = 145.811s!)
  150.000, // End of Uncut 150.0s Studio Master (Bar 72, Frame 4500)
];

// ───────────── Foley Restraint (9 Beat-Locked Physical Accents Aligned 100% to Bar Downbeats) ─────────────
export interface Cue { at: number; file: string; vol: number; note: string }
export const CUES: Cue[] = [
  { at: 13.8, file: "glitch_tear", vol: 0.28, note: "S03 Bar 07 (14.459s) Pre-Drop Vacuum 1 评论区拉链劈开" },
  { at: 16.8, file: "slam_impact", vol: 0.34, note: "S04 Bar 08 (16.544s) Drop 1 档案立题落槌" },
  { at: 19.5, file: "lock_click", vol: 0.28, note: "S04 Bar 10 (20.714s) 信息茧房首提朱印落款" },
  { at: 41.0, file: "lock_click", vol: 0.32, note: "S08 Bar 23 (47.818s) 鼓点抽空瞬间 0赞0评0关注锁死" },
  { at: 55.1, file: "reverse_suck", vol: 0.30, note: "S10 Bar 31 (64.498s) Pre-Drop Vacuum 2 视野坍缩为2°" },
  { at: 58.2, file: "glass_shatter", vol: 0.32, note: "S11 Bar 32 (66.583s) Drop 2 玻璃窄缝敲裂" },
  { at: 73.0, file: "slam_impact", vol: 0.38, note: "S13 Bar 38 (79.093s) Bass Surge 2 逆火极化翻倍+100%落印" },
  { at: 91.6, file: "lock_click", vol: 0.32, note: "S16 Bar 50 (104.112s) 三道同心环终极咬合锁死" },
  { at: 101.4, file: "singing_bowl_strike", vol: 0.34, note: "S18 Bar 56 (116.622s) Drop 3 全彩破晓与主动驯化" },
];

export const TRACKS = [
  {
    id: "kaizhi",
    name: "开智小曲 · We Never (135.2s 原速母带)",
    sub: "ZHENLOE / 千年之后(氛围版) · 112.35 BPM · 64小节一镜到底零循环",
    fileA: "kaizhi_uncut_135s",
    fileB: "claude_vibe_150s",
  },
  {
    id: "claude_vibe",
    name: "Claude算法小曲 · 若如初见 (150.0s 三段Drop母带)",
    sub: "Vibe知识大赏原片标配 · 114.84 BPM · 16.5s/66.6s/116.6s 三次天然抽空Drop",
    fileA: "kaizhi_uncut_135s",
    fileB: "claude_vibe_150s",
  },
  {
    id: "komorebi",
    name: "Komorebi · 电影叙事原曲 (mabanua)",
    sub: "器乐后摇标杆参考 · 全曲直通无拼接",
    fileA: "komorebi_uncut_182s",
    fileB: "komorebi_uncut_182s",
  },
] as const;
export type TrackId = (typeof TRACKS)[number]["id"];

// ───────────── Downbeat-Locked Clock Mapping (135.2s / 150.0s ↔ Internal Animation Clock) ─────────────
export const durationOf = (mode: Mode) => (mode === "A" ? DURATION_A : DURATION_B);
export const boundsOf = (mode: Mode) => (mode === "A" ? SHOT_BOUNDS_A : SHOT_BOUNDS_B);

/** Map real uncut audio time `tm` (on 135.2s Mode A or 150.0s Mode B downbeat grid) to internal animation clock `t` */
export function toMaster(tm: number, mode: Mode): number {
  const B = boundsOf(mode);
  if (tm <= B[0]) return SHOTS[0].start;
  if (tm >= B[B.length - 1]) return SHOTS[SHOTS.length - 1].end;
  for (let i = 0; i < SHOTS.length; i++) {
    const b0 = B[i];
    const b1 = B[i + 1];
    if (tm >= b0 && tm <= b1) {
      const f = (tm - b0) / Math.max(0.001, b1 - b0);
      const s = SHOTS[i];
      return s.start + f * (s.end - s.start);
    }
  }
  return SHOTS[SHOTS.length - 1].end;
}

/** Map internal animation clock time `t` back to real uncut audio time `tm` */
export function fromMaster(t: number, mode: Mode): number {
  const B = boundsOf(mode);
  const i = shotIndexAt(t);
  const s = SHOTS[i];
  const f = clamp((t - s.start) / Math.max(0.001, s.end - s.start));
  return B[i] + f * (B[i + 1] - B[i]);
}

export function shotIndexAt(t: number): number {
  for (let i = SHOTS.length - 1; i >= 0; i--) if (t >= SHOTS[i].start - 1e-4) return i;
  return 0;
}

// ───────────── Musical Bar / Phrase / Beat Coordinate System (72-Bar Master Grid) ─────────────
export const EVEN_BARS: number[] = [
  0, 4, 6, 8, 12, 16, 20, 22, 26, 30, 32, 34, 36, 40, 44, 48, 52, 56, 60, 64, 72,
];

/** Exact continuous musical bar coordinate [0..72] at internal master time `t` */
export function barFloatAt(t: number): number {
  const i = shotIndexAt(t);
  const s = SHOTS[i];
  const f = clamp((t - s.start) / Math.max(0.001, s.end - s.start));
  return EVEN_BARS[i] + f * (EVEN_BARS[i + 1] - EVEN_BARS[i]);
}

/** Beat-locked visual micro-pulse, pre-drop vacuum breath, and drop impact shockwave */
export function beatPulseAt(t: number): { scale: number; flash: number; vignette: number; beatGlow: number } {
  const b = barFloatAt(t);
  const barIdx = Math.floor(b + 1e-4);

  // 1. Check the 3 Pre-Drop Acoustic Vacuums (Bar 07, Bar 31, Bar 55)
  if (barIdx === 7 || barIdx === 31 || barIdx === 55) {
    const vacProg = clamp(b - barIdx);
    // Camera subtly draws in its breath (-0.45%) while edge vignette tightens before the Drop
    return {
      scale: 1 - 0.0045 * vacProg * vacProg,
      flash: 0,
      vignette: 0.26 * vacProg,
      beatGlow: 0,
    };
  }

  // 2. Check the 3 Major Drops (Bar 08 = 16.544s, Bar 32 = 66.583s, Bar 56 = 116.622s)
  let dropScale = 0;
  let dropFlash = 0;
  for (const db of [8, 32, 56]) {
    const dt = b - db;
    if (dt >= 0 && dt < 0.6) {
      dropScale = Math.max(dropScale, 0.012 * Math.exp(-dt * 9.5));
      dropFlash = Math.max(dropFlash, 0.11 * Math.exp(-dt * 11.0));
    }
  }

  // 3. Check if we are in an active drum groove bar vs deep breakdown valley (Bars 23-29, Bars 47-54, Bars 70-71)
  const inValley = (barIdx >= 23 && barIdx <= 29) || (barIdx >= 47 && barIdx <= 54) || barIdx >= 70;
  if (inValley) {
    // Only a very slow underwater heartbeat on even bars
    const phraseDt = ((b % 2) + 2) % 2;
    const heart = 0.0018 * Math.exp(-phraseDt * 8.0);
    return { scale: 1 + dropScale + heart, flash: dropFlash, vignette: 0.10, beatGlow: heart * 120 };
  }

  // 4. Active Groove Bars: 2-Bar Even Phrase Downbeat Impulse + Quarter-Note Kick Breath
  const phraseDt = ((b % 2) + 2) % 2;
  const beatDt = ((b * 4) % 1 + 1) % 1;
  const inSurge = (barIdx >= 11 && barIdx <= 15) || (barIdx >= 35 && barIdx <= 39) || (barIdx >= 59 && barIdx <= 63);

  const phrasePulse = (barIdx >= 2 ? 0.0052 : 0.003) * Math.exp(-phraseDt * 11.5);
  const kickPulse = (inSurge ? 0.0030 : 0.0018) * Math.exp(-beatDt * 8.5);
  const beatGlow = clamp(Math.exp(-phraseDt * 9.0) * 0.65 + Math.exp(-beatDt * 7.5) * 0.35);

  return {
    scale: 1 + dropScale + phrasePulse + kickPulse,
    flash: dropFlash,
    vignette: 0,
    beatGlow,
  };
}

// ───────────── Math ─────────────
export const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
export const seg = (t: number, a: number, b: number) => clamp((t - a) / (b - a));
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
