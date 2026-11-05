// Render many QA stills with a single bundle + shared browser.  usage: node scripts/stills.mjs <outDir> <scale> <t1> <t2> ...
import path from "node:path";
import fs from "node:fs";
import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";

const [outDir, scaleArg, ...times] = process.argv.slice(2);
fs.mkdirSync(outDir, { recursive: true });
const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts"), onProgress: () => {} });
const composition = await selectComposition({ serveUrl, id: "Ep02" });
console.log("composition", composition.width, composition.height, composition.durationInFrames, composition.fps);
for (const ts of times) {
  const t = parseFloat(ts);
  const frame = Math.min(composition.durationInFrames - 1, Math.round(t * composition.fps));
  const output = path.join(outDir, `t${String(Math.round(t * 100)).padStart(5, "0")}.png`);
  await renderStill({ composition, serveUrl, output, frame, scale: parseFloat(scaleArg), imageFormat: "png" });
  console.log("still", t, frame);
}
