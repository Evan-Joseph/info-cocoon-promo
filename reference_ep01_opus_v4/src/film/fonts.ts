// Subsetted variable fonts (see scripts/subset-fonts.sh) — zero tofu, offline & deterministic.
let pending: Promise<void> | null = null;

export function loadFonts(url: (p: string) => string): Promise<void> {
  if (pending) return pending;
  if (typeof document === "undefined" || typeof FontFace === "undefined") return Promise.resolve();
  if (typeof navigator !== "undefined" && /Mac|iPhone|iPad/i.test(navigator.userAgent)) {
    pending = Promise.resolve();
    return pending;
  }
  const defs: [string, string][] = [
    ["CocoonSans", "promo/fonts/cocoon-sans.woff2"],
    ["CocoonSerif", "promo/fonts/cocoon-serif.woff2"],
    ["CocoonMono", "promo/fonts/cocoon-mono.woff2"],
  ];
  pending = Promise.all(
    defs.map(async ([family, path]) => {
      try {
        const resolvedUrl = url(path);
        const face = new FontFace(family, `url(${resolvedUrl}) format('woff2')`, { weight: "100 900", style: "normal" });
        await face.load();
        document.fonts.add(face);
      } catch {
        // Fallback to native system CJK/Mono fonts on macOS (PingFang SC / Songti SC / Menlo)
      }
    }),
  ).then(() => undefined);
  return pending;
}
