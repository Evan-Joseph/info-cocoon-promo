# 《抽丝剥茧》(UNRAVEL STUDIO) · EP02《超级个体：一人成军的幻觉与科斯暗箱》工程与质量验收规格书 (`SPEC.md` v7.0)

> **版本状态**：`v7.0`（正交职责终极版：我方唯一锁定文学剧本、实证数据、112.30 BPM 鼓点时间轴与客观技术/质量验收标准；视觉设计、色彩系统、排版构图与运镜动效 100% 交由 Arena 顶配前端模型自主创作，零具体视觉建议干扰）
> **全片规格**：`132.0s`（`3,960 frames @ 30fps`，`1920×1080`）｜无配音纯视觉动态图景 + 双语衬线字幕（Zero-Voiceover Beat-Driven Visual Essay）
> **唯一锁定母带**：`public/audio/jingwei_master_132s.mp3`（实测 `112.30 BPM`，首重拍 Drop 位于 `t = 3.800s / Frame 114`）

---

## 一、 正交职责边界与四大技术/质量验收标准

1. **正交职责分工（Literature & Acceptance Criteria Only — Zero Visual Interference）**：
   - 我方仅提供：**五幕二十镜文学台词、真实案例数据、帧级节拍时间轴（`SHOT_BOUNDS`）、屏上中文主锚字（`l1A`/`l1B`）、底部双语字幕（`l2`/`en`）、20 处 `+1f` 物理拟音（`CUES`）及客观技术/质量验收标准**；
   - 视觉方向、色彩体系、版式布局、自定义 SVG 图形、数据可视化形态与跨镜转场动效 **100% 由前端模型全权主导**，我方不预设任何具体图形元素、背景色块或坐标框限制。
2. **验收标准一：观众可理解性与幕内视觉连续性（Pacing & Cognitive Clarity）**：
   - 观众以 `1x` 正常倍速观看时，必须在下一幕到来前轻松看懂当前画面的叙事含义；
   - 全片共五幕（`ActOne.tsx`–`ActFive.tsx`），同一幕内部（`3–6` 个镜头，持续 `18.7s–39.0s`）应保持平滑连贯的视觉演进，避免每 6 秒全屏清空重置为毫无关联的孤立幻灯片；
   - 单镜画面焦点必须干净纯粹，配合 `l1A`（拍 A）与 `l1B`（拍 B 重拍）核心中文锚字，让观众在 `1 秒` 内直观捕捉反差关系；严禁使用简陋火柴人或粗糙占位几何线条。
3. **验收标准二：黄金前 4 秒双脉冲钩子（First 4-Second Retention Hook）**：
   - `Frame 0` (`t = 0.00s`) 必须满对比度直接呈现画面（严禁黑屏缓入 `opacity: 0 -> 1`）；
   - `t = 0.43s` (`Frame 13`) 触发首重动态脉冲；`t = 3.800s` (`Frame 114`) 随母带首个重低音 Drop 鼓点炸响，触发强烈结构性反差翻转（从「10 亿美元一人公司」神话翻转为「14 万星开源作者欠费 2.3 万」现实）。
4. **验收标准三：双拍字幕叠显常驻与充裕阅读窗口（Non-Vanishing Stacked Subtitles）**：
   - 每一镜的 `l2[0]`（拍 A 中文台词，`17–22` 字）在 `t = s.start` 入场后**保持全镜常驻（`5.27s–7.57s`）**，在 `t >= s.beatB` 时严禁隐藏或抽走；
   - `l2[1]`（拍 B 中文台词，`17–22` 字）在 `t = s.beatB` 重拍鼓点处平滑叠显于 `l2[0]` 正下方，并常驻至本镜结束（`2.80s–4.50s`），下方配对应的英文副标（`en[0]` / `en[1]`）；
   - 渲染时剥离台词中的字面符号 `【` 与 `】`，并对括号内的核心词做高对比度视觉强调。
5. **验收标准四：画面净空与离线中文字体子集化（Q11 Clean-Canvas Gate）**：
   - 画布内所有渲染文字字号在 `1920×1080` 下必须 **`>= 24px`**，零文字重叠、零截断出界；
   - 严禁在画面中渲染分镜编号（`S01`–`S20`）或内部注记；画面上半区主锚字（`l1A`/`l1B`）仅使用中文与数字/符号，英文句子仅出现在底部 `en` 字幕区；
   - 代码编写完成后运行 `python3 scripts/subset-fonts.py` 重新生成 `src/film/fontdata.ts`（离线 Base64 WOFF2 中文字体子集），确保无头 Chromium 渲染零缺字豆腐块，且 `npx tsc --noEmit` 零报错通过。

---

## 二、 五幕二十镜纯文学叙事脉络与实证事实（Act I – Act V）

### 第一幕 · 全能幻觉 (`ActOne.tsx`, `S01`–`S03`, `0.000s – 18.933s`)
- **本幕核心叙事**：戳破「AI 10 亿美元一人公司」的造富滤镜，用三组真实账本反差立起全片核心悬念。
  - **`S01` (`0.000s – 6.600s`, `beatB = 3.800s` 首重拍 Drop)**：
    - **拍 A 叙事事实 (`0.000s`)**：硅谷创投圈疯传「史上第一家 10 亿美元一人公司即将诞生」，宣称一个人配齐 AI 写代码、做设计、剪视频、搞客服就能顶一家公司（`l1A: 一人公司 $10亿`）。
    - **拍 B 叙事事实 (`3.800s` Drop)**：GitHub `140,000 星` 开源爆款作者的真实处境——服务器与 API 算力账单欠费 `-¥23,800`，收入连服务器电费都交不起（`l1B: 14万星 · 欠费 2.3万`）。
  - **`S02` (`6.600s – 11.867s`, `beatB = 8.700s`)**：
    - **拍 A 叙事事实 (`6.600s`)**：创作者靠 AI 在两周（`14 天`）内批量发出 `520 条` 视频，表面播放量看似热闹（`l1A: 两周狂发 520 条`）。
    - **拍 B 叙事事实 (`8.700s`)**：翻开收款结算后台，真实买单进账却是 `¥0.00`（`l1B: 真实到账 ¥0.00`）。
  - **`S03` (`11.867s – 18.933s`, `beatB = 14.667s`)**：
    - **拍 A 叙事事实 (`11.867s`)**：哪怕做到一年 `¥1,000,000` 流水的一人工作室，明明没有雇员工发工资，年底净剩却只有 `¥120,000`（`12%`）（`l1A: 100万流水只剩 12万`）。
    - **拍 B 叙事事实 (`14.667s`)**：中间消失的 `¥880,000`（`88%`）究竟去哪了？由此揭开「超级个体」背后的暗箱（`l1B: 消失的 88万去哪了`）。

### 第二幕 · 隐形杂务 (`ActTwo.tsx`, `S04`–`S09`, `18.933s – 57.933s`)
- **本幕核心叙事**：用诺奖经济学家科斯 `1937`《企业的性质》与 `2026` 年 `6,505` 人半年追踪研究，揭示失去公司保护壳后的 `82%` 杂务反噬与 `+42%` 情绪耗竭。
  - **`S04` (`18.933s – 25.333s`, `beatB = 21.600s`)**：
    - **拍 A 叙事事实 (`18.933s`)**：上班时总嫌公司分走了大头，但诺贝尔经济学奖得主罗纳德·科斯早在 `1937 年`《企业的性质》中算过一笔账：世界为什么需要公司？（`l1A: 为什么世界需要公司`）。
    - **拍 B 叙事事实 (`21.600s`)**：因为公司的法务、财务、税务、渠道与售后体系，在暗中替员工挡下了 `90%` 的外部交易杂事（`l1B: 替你挡下 90% 杂事`）。
  - **`S05` (`25.333s – 31.633s`, `beatB = 27.867s`)**：
    - **拍 A 叙事事实 (`25.333s`)**：辞职单干后，AI 确实把写代码、做设计等核心生产时间压缩到了 `18%`（`l1A: 机器省下写代码时间`）。
    - **拍 B 叙事事实 (`27.867s`)**：可失去了公司外壳，催尾款、开发票、改合同与扯皮售后全部砸在一人身上，吞掉 `82%` 的精力（`l1B: 催款报税吃掉 82%`）。
  - **`S06` (`31.633s – 38.033s`, `beatB = 34.367s`)**：
    - **拍 A 叙事事实 (`31.633s`)**：当人人都能用 AI 一夜做出产品，市面上的同类供给暴涨 `100 倍`（`l1A: 同类竞品暴涨 100倍`）。
    - **拍 B 叙事事实 (`34.367s`)**：可买单的客户并没有变多（`1x`），导致寻找一个付费客户的获客成本（CAC）反倒贵了 `10 倍`（`l1B: 找客户成本贵 10倍`）。
  - **`S07` (`38.033s – 44.933s`, `beatB = 40.667s`)**：
    - **拍 A 叙事事实 (`38.033s`)**：不用坐班、没有老板管，总该活得更轻松吧？`2026 年`《管理心理学杂志》专门检验了这一假设（`l1A: 不用坐班会更幸福吗`）。
    - **拍 B 叙事事实 (`40.667s`)**：研究团队连续 `6 个月` 追踪了 `6,505 名` 高自主权单干者的真实每日作息（`l1B: 6,505 人半年追踪`）。
  - **`S08` (`44.933s – 51.100s`, `beatB = 47.433s`)**：
    - **拍 A 叙事事实 (`44.933s`)**：以前在公司上班（`09:00–18:00`），下午六点合上电脑就能心安理得休息（`l1A: 上班 18:00 到点下班`）。
    - **拍 B 叙事事实 (`47.433s`)**：单干后没有底薪兜底，停工一小时都像在亏钱，自己成了 `24 小时` 不敢停歇的严苛监工（`l1B: 单干 24 小时不敢停`）。
  - **`S09` (`51.100s – 57.933s`, `beatB = 53.900s`)**：
    - **拍 A 叙事事实 (`51.100s`)**：追踪数据揭开了残酷的「自主权悖论」——看似时间最自由的单干者（`l1A: 越自由反而越焦虑`）。
    - **拍 B 叙事事实 (`53.900s`)**：半年后的失眠率与认知情绪耗竭，反而比预期暴涨了 `+42%`（`l1B: 情绪耗竭暴涨 +42%`）。

### 第三幕 · 买量重税 (`ActThree.tsx`, `S10`–`S12`, `57.933s – 76.600s`)
- **本幕核心叙事**：拆解 `¥100` 营业额中 `70%` 平台买量税与 `18%` 算力成本的真实流向，并还原全球头号独立开发者 `5.7%` 命中率与 `83%` 底层收入真相。
  - **`S10` (`57.933s – 63.833s`, `beatB = 60.500s`)**：
    - **拍 A 叙事事实 (`57.933s`)**：没雇员工省下的工资去哪了？单干者每赚 `¥100`，有 `¥70`（`70%`）交给了平台的竞价投流与过路费（`l1A: 平台投流抽走 ¥70`）。
    - **拍 B 叙事事实 (`60.500s`)**：再扣掉 `¥18`（`18%`）的 AI 算力账单与软件订阅费，真正落进口袋的只剩 `¥12`（`12%`）（`l1B: 算力扣 ¥18 · 净剩 ¥12`）。
  - **`S11` (`63.833s – 70.733s`, `beatB = 66.467s`)**：
    - **拍 A 叙事事实 (`63.833s`)**：哪怕是全球头号独立开发者 Pieter Levels，十年间也一共做了 `70 个` 产品（`l1A: 头号大神做 70 个项目`）。
    - **拍 B 叙事事实 (`66.467s`)**：其中 `66 个` 惨淡归零（`94.3%` 失败），真正跑通赚钱的只有区区 `4 个`（真实命中率仅 `5.7%`）（`l1B: 66 个归零 · 仅 4 个成`）。
  - **`S12` (`70.733s – 76.600s`, `beatB = 73.300s`)**：
    - **拍 A 叙事事实 (`70.733s`)**：社区真实收入统计显示，高达 `83%` 的独立开发者月收入不足 `$500`（`l1A: 83% 月入不足 $500`）。
    - **拍 B 叙事事实 (`73.300s`)**：在这场热潮里唯一旱涝保收的，是收 `¥1,999` 报名费教别人单干暴富的卖课人（`l1B: 卖课导师稳赚 ¥1,999`）。

### 第四幕 · 同质内卷 (`ActFour.tsx`, `S13`–`S16`, `76.600s – 103.500s`)
- **本幕核心叙事**：揭示 AI 如何让 `60 分` 及格活彻底沦为白菜价（`¥5,000` 砸到 `¥99`），对照 `1780 年` 英国织工历史困局，推导出「自负盈亏的全能牛马」高潮论断。
  - **`S13` (`76.600s – 83.067s`, `beatB = 79.267s`)**：
    - **拍 A 叙事事实 (`76.600s`)**：为何工具越强大反而越难赚钱？因为 AI 让外行也能一秒交出 `60 分` 的及格活（`l1A: 机器一秒交 60 分活`）。
    - **拍 B 叙事事实 (`79.267s`)**：可客户真正愿意掏高价买单的，恰恰是机器够不着的 `95 分` 手艺（独到审美、极端排障与商业兜底）（`l1B: 高价只买 95 分手艺`）。
  - **`S14` (`83.067s – 90.033s`, `beatB = 85.700s`)**：
    - **拍 A 叙事事实 (`83.067s`)**：当 `500 个人` 拿着高度雷同的 `60 分` AI 生成方案去抢同一个外包单（`l1A: 500 份雷同生成方案`）。
    - **拍 B 叙事事实 (`85.700s`)**：在毫无差异化的竞争下唯一能拼的只剩压价，原本 `¥5,000` 的活直接被砸到 `¥99`（`l1B: 报价 ¥5,000 砸到 ¥99`）。
  - **`S15` (`90.033s – 96.233s`, `beatB = 92.800s`)**：
    - **拍 A 叙事事实 (`90.033s`)**：两百年前（`1780 年`）英国手摇纺机织工也曾贷款购买新纺机，在家织布产量翻了 `10 倍`（`l1A: 1780 织工买新机器`）。
    - **拍 B 叙事事实 (`92.800s`)**：可垄断渠道的布商反手把收购工价砍掉 `80%`，织工每天干 16 小时却越忙越贫穷（`l1B: 产量翻十倍 · 工钱砍 80%`）。
  - **`S16` (`96.233s – 103.500s`, `beatB = 99.333s` 全片最高潮)**：
    - **拍 A 叙事事实 (`96.233s`)**：`82%` 隐形杂务、`70%` 平台流量税与 `60 分` 低价内卷，三座大山同时压下（`l1A: 杂务 · 买量税 · 价格战`）。
    - **拍 B 叙事事实 (`99.333s`)**：没有商业杠杆的“一人干十人活”，本质只是自负盈亏的「全能牛马」（`l1B: 自负盈亏的全能牛马`）。

### 第五幕 · 破局活法 (`ActFive.tsx`, `S17`–`S20`, `103.500s – 132.000s`)
- **本幕核心叙事**：在 `103.50s` 音乐抽空后给出普通人可立即落地的「三条生存铁律」，以「让机器替你跑完前 60 分，凭 95 分真手艺体面赢」收束全片。
  - **`S17` (`103.500s – 110.167s`, `beatB = 106.133s` 音乐抽空转折)**：
    - **拍 A 叙事事实 (`103.500s`)**：既然一个人包揽全流程是死胡同，普通人到底该怎么破局？（`l1A: 普通人到底怎么破局？`）。
    - **拍 B 叙事事实 (`106.133s`)**：那些真正活得滋润的独立高手，都守住了三条具体生存铁律（`l1B: 真正高手的 3 条铁律`）。
  - **`S18` (`110.167s – 117.733s`, `beatB = 113.500s`)**：
    - **拍 A 叙事事实 (`110.167s`)**：**铁律一**——把 `60 分` 的重复杂活全部甩给 AI，绝不拿肉身体力跟机器拼低价（`l1A: 铁律一 · 甩掉 60分杂活`）。
    - **拍 B 叙事事实 (`113.500s`)**：把全部精力死磕在机器做不到的 `95 分` 真手艺（行业审美、疑难排障、结果兜底）上（`l1B: 死磕 95分审美与兜底`）。
  - **`S19` (`117.733s – 124.700s`, `beatB = 120.867s`)**：
    - **拍 A 叙事事实 (`117.733s`)**：**铁律二**——绝不裸辞闭门造车半年，先用 `14 天` 做出最小作品收到第一笔真实付款（`l1A: 铁律二 · 14天收第一笔钱`）。
    - **拍 B 叙事事实 (`120.867s`)**：**铁律三**——跳出公域竞价买量漏斗，靠口碑攒下 `100 个` 长期直接复购的熟客（`l1B: 铁律三 · 攒 100个复购熟客`）。
  - **`S20` (`124.700s – 132.000s`, `beatB = 127.500s` 终幕颂钵余音)**：
    - **拍 A 叙事事实 (`124.700s`)**：真正的超级个体，从不靠一个人硬扛整家公司的杂活（`l1A: 机器跑完前 60 分量产`）。
    - **拍 B 叙事事实 (`127.500s – 132.000s`)**：让机器替你跑完前 `60 分` 量产，凭 `95 分` 真手艺体面地赢（`l1B: 凭 95 分真手艺体面赢`）。

---

## 三、 精确时间轴、双语台词与拟音常量（`src/film/core.ts` 单一真相源）

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
