import { describe, it, expect } from "vitest";

/**
 * Automated WCAG contrast test for every text element in the Hero section.
 *
 * Simulates the composited background behind each text at:
 *  - several viewport sizes (mobile / tablet / desktop / ultrawide)
 *  - several video luminosities (dark night frame → bright sky frame)
 *
 * The gradient overlay (`--gradient-hero`) is a 3-stop linear gradient:
 *   0%   → hsl(20 22% 12% / 0.25)
 *   45%  → hsl(20 22% 12% / 0.70)
 *   100% → hsl(20 22% 12% / 0.95)
 */

// ---------- color helpers ----------
type RGB = [number, number, number];

const hslToRgb = (h: number, s: number, l: number): RGB => {
  s /= 100; l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
};

const blend = (fg: RGB, bg: RGB, alpha: number): RGB =>
  [0, 1, 2].map((i) => Math.round(fg[i] * alpha + bg[i] * (1 - alpha))) as RGB;

const relLum = ([r, g, b]: RGB) => {
  const c = [r, g, b].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};

const contrast = (a: RGB, b: RGB) => {
  const [l1, l2] = [relLum(a), relLum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

// ---------- design tokens (mirrors src/index.css :root) ----------
const PAPER: RGB = hslToRgb(36, 32, 97);
const PRIMARY: RGB = hslToRgb(14, 62, 48);
const PRIMARY_FG: RGB = hslToRgb(36, 38, 97);
const OVERLAY: RGB = hslToRgb(20, 22, 12); // dark brown gradient stop

// ---------- gradient / composition ----------
const overlayAlphaAt = (yRatio: number) => {
  const y = Math.max(0, Math.min(1, yRatio));
  if (y <= 0.55) return 0.15 + (y / 0.55) * (0.55 - 0.15);
  return 0.55 + ((y - 0.55) / 0.45) * (0.92 - 0.55);
};

const compose = (video: RGB, yRatio: number): RGB =>
  blend(OVERLAY, video, overlayAlphaAt(yRatio));

// ---------- test matrix ----------
const VIEWPORTS = [
  { name: "mobile", w: 375, h: 667 },
  { name: "tablet", w: 768, h: 1024 },
  { name: "desktop", w: 1280, h: 800 },
  { name: "ultrawide", w: 1920, h: 1080 },
];

// Representative video frame luminosities (grayscale approximations of a real frame).
const VIDEO_FRAMES: { name: string; color: RGB }[] = [
  { name: "dark dusk", color: [25, 22, 20] },
  { name: "mid twilight", color: [95, 85, 75] },
  { name: "warm golden", color: [180, 140, 95] },
  { name: "bright sky", color: [230, 225, 215] },
];

// Text elements. `bottomPx` = distance from the section bottom to the element baseline area.
// Section min-height is 640px, so viewport height is clamped to at least 640.
type TextEl = {
  key: string;
  label: string;
  color: RGB;
  alpha: number;
  minRatio: number; // WCAG threshold to satisfy
  bottomPxByBp: (w: number) => number;
  onPrimaryBg?: boolean; // button sitting on solid --primary
};

const TEXT_ELEMENTS: TextEl[] = [
  {
    key: "eyebrow",
    label: "Localização (eyebrow)",
    color: PAPER,
    alpha: 0.9,
    minRatio: 4.5,
    // sits just above the h1 → ~ pb + button row + h1 height
    bottomPxByBp: (w) => (w >= 768 ? 128 + 56 + 220 : 96 + 56 + 160),
  },
  {
    key: "h1",
    label: "Título H1",
    color: PAPER,
    alpha: 1,
    minRatio: 3, // large text (>= 24px bold or 18.66px+)
    bottomPxByBp: (w) => (w >= 768 ? 128 + 56 + 40 : 96 + 56 + 30),
  },
  {
    key: "btnPrimary",
    label: 'Botão "Reservar estadia"',
    color: PRIMARY_FG,
    alpha: 1,
    minRatio: 4.5,
    bottomPxByBp: (w) => (w >= 768 ? 128 : 96),
    onPrimaryBg: true,
  },
  {
    key: "btnSecondary",
    label: 'Botão "Conhecer a casa"',
    color: PAPER,
    alpha: 1,
    minRatio: 4.5,
    bottomPxByBp: (w) => (w >= 768 ? 128 : 96),
  },
  {
    key: "scroll",
    label: "Indicador Scroll",
    color: PAPER,
    alpha: 0.7,
    minRatio: 4.5,
    bottomPxByBp: () => 32,
  },
];

const effectiveBg = (el: TextEl, video: RGB, viewportH: number): RGB => {
  if (el.onPrimaryBg) return PRIMARY;
  const h = Math.max(viewportH, 640);
  const y = 1 - el.bottomPxByBp(0) / h; // placeholder, replaced per bp
  return compose(video, y);
};

describe("Hero section — automated contrast matrix", () => {
  for (const vp of VIEWPORTS) {
    for (const frame of VIDEO_FRAMES) {
      for (const el of TEXT_ELEMENTS) {
        it(`${el.label} · ${vp.name} (${vp.w}×${vp.h}) · ${frame.name}`, () => {
          const h = Math.max(vp.h, 640);
          const y = 1 - el.bottomPxByBp(vp.w) / h;
          const bg = el.onPrimaryBg ? PRIMARY : compose(frame.color, y);
          const fg = blend(el.color, bg, el.alpha);
          const ratio = contrast(fg, bg);

          // Attach diagnostics so failures show the exact composition.
          const info = `ratio=${ratio.toFixed(2)} fg=${fg.join(",")} bg=${bg.join(",")} y=${y.toFixed(2)}`;
          expect(ratio, info).toBeGreaterThanOrEqual(el.minRatio);
        });
      }
    }
  }

  it("silences unused helper warning", () => {
    expect(effectiveBg).toBeTypeOf("function");
  });
});
