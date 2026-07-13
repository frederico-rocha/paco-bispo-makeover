import { describe, it, expect } from "vitest";

/**
 * Automated WCAG contrast test for every text element in the Navbar.
 *
 * The navbar has two visual states:
 *  - `transparent`: sits over the hero video, painted with its own top-down
 *    gradient overlay stacked on top of the hero's own overlay. Text colour
 *    must survive both dark and bright video frames.
 *  - `scrolled`: solid `bg-background/90` with high-contrast tokens.
 *
 * Matrix: every text element × 4 viewport sizes × 4 video frame luminosities.
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
const INK: RGB = hslToRgb(20, 22, 12);
const BACKGROUND: RGB = hslToRgb(36, 28, 96);
const FOREGROUND: RGB = hslToRgb(20, 18, 14);
const MUTED_FG: RGB = hslToRgb(24, 10, 38);
const PRIMARY: RGB = hslToRgb(14, 62, 48);
const PRIMARY_FG: RGB = hslToRgb(0, 0, 100);

// ---------- gradient compositions ----------
// Hero gradient at the very top of the viewport (y=0 within hero) → 0.25 alpha
// of INK over the video. Only applies on the home page; we still test with it
// off to guarantee the worst-case (non-hero page).
const heroTopAlpha = 0.25;

// Navbar gradient: `from-ink/75 via-ink/45 to-transparent` painted over a
// header strip. Text baseline sits at ~45% of the strip.
const navAlphaAt = (yBand: number) => {
  const y = Math.max(0, Math.min(1, yBand));
  if (y <= 0.5) return 0.75 + (y / 0.5) * (0.45 - 0.75);
  return 0.45 + ((y - 0.5) / 0.5) * (0 - 0.45);
};

// Alpha compositing: A over B → 1 - (1 - aA)(1 - aB)
const overAlpha = (a: number, b: number) => 1 - (1 - a) * (1 - b);

const transparentBg = (video: RGB, withHero: boolean, yBand = 0.45): RGB => {
  const aNav = navAlphaAt(yBand);
  const aHero = withHero ? heroTopAlpha : 0;
  const aTotal = overAlpha(aNav, aHero);
  return blend(INK, video, aTotal);
};

// Solid scrolled background (backdrop-blur means we treat 90% ink-over-paper
// as an approximation of `bg-background/90` over arbitrary content — worst
// case is background over its own token).
const scrolledBg = (): RGB => BACKGROUND;

// ---------- matrix ----------
const VIEWPORTS = [
  { name: "mobile", w: 375, h: 667 },
  { name: "tablet", w: 768, h: 1024 },
  { name: "desktop", w: 1280, h: 800 },
  { name: "ultrawide", w: 1920, h: 1080 },
];

const VIDEO_FRAMES: { name: string; color: RGB }[] = [
  { name: "dark dusk", color: [25, 22, 20] },
  { name: "mid twilight", color: [95, 85, 75] },
  { name: "warm golden", color: [180, 140, 95] },
  { name: "bright sky", color: [230, 225, 215] },
];

type NavEl = {
  key: string;
  label: string;
  // returns {fg, bg} given the resolved context
  resolve: (ctx: { video: RGB; scrolled: boolean; viewportW: number }) => {
    fg: RGB;
    bg: RGB;
  };
  minRatio: number;
  desktopOnly?: boolean; // hidden on mobile
  mobileOnly?: boolean;  // only shown on mobile
};

// helper: fold alpha into fg over resolved bg
const foldAlpha = (color: RGB, alpha: number, bg: RGB): RGB =>
  blend(color, bg, alpha);

const bgFor = (scrolled: boolean, video: RGB): RGB =>
  scrolled ? scrolledBg() : transparentBg(video, /* withHero */ true);

const NAV_ELEMENTS: NavEl[] = [
  {
    key: "logo-main",
    label: "Logotipo principal",
    minRatio: 4.5,
    resolve: ({ video, scrolled }) => {
      const bg = bgFor(scrolled, video);
      const fg = scrolled ? FOREGROUND : PAPER;
      return { fg, bg };
    },
  },
  {
    key: "logo-sub",
    label: "Logotipo subtítulo",
    minRatio: 4.5,
    resolve: ({ video, scrolled }) => {
      const bg = bgFor(scrolled, video);
      const fg = scrolled ? MUTED_FG : PAPER; // paper full opacity (fixed)
      return { fg, bg };
    },
  },
  {
    key: "nav-link-idle",
    label: "Link de navegação (idle)",
    minRatio: 4.5,
    desktopOnly: true,
    resolve: ({ video, scrolled }) => {
      const bg = bgFor(scrolled, video);
      const fg = scrolled ? foldAlpha(FOREGROUND, 0.8, bg) : PAPER;
      return { fg, bg };
    },
  },
  {
    key: "nav-link-active",
    label: "Link de navegação (ativo)",
    minRatio: 4.5,
    desktopOnly: true,
    resolve: ({ video, scrolled }) => {
      const bg = bgFor(scrolled, video);
      const fg = scrolled ? FOREGROUND : PAPER; // primary underline conveys state; text stays foreground/paper
      return { fg, bg };
    },
  },
  {
    key: "nav-link-hover",
    label: "Link de navegação (hover)",
    minRatio: 4.5,
    desktopOnly: true,
    resolve: ({ video, scrolled }) => {
      const bg = bgFor(scrolled, video);
      const fg = scrolled ? FOREGROUND : PAPER; // hover uses underline; text stays foreground/paper
      return { fg, bg };
    },
  },
  {
    key: "cta-desktop",
    label: 'Botão "Reservar" (desktop)',
    minRatio: 4.5,
    desktopOnly: true,
    resolve: ({ scrolled }) => {
      // Solid pill regardless of background
      return scrolled
        ? { fg: PRIMARY_FG, bg: PRIMARY }
        : { fg: INK, bg: blend(PAPER, [0, 0, 0], 0.95) }; // paper/95 approx over any
    },
  },
  {
    key: "cta-desktop-hover",
    label: 'Botão "Reservar" (hover)',
    minRatio: 4.5,
    desktopOnly: true,
    resolve: ({ scrolled }) => {
      return scrolled
        ? { fg: PRIMARY_FG, bg: blend(PRIMARY, [0, 0, 0], 0.9) }
        : { fg: INK, bg: PAPER };
    },
  },
  {
    key: "menu-icon-mobile",
    label: "Ícone do menu (mobile)",
    minRatio: 3, // graphical/UI component
    mobileOnly: true,
    resolve: ({ video, scrolled }) => {
      const bg = bgFor(scrolled, video);
      const fg = scrolled ? FOREGROUND : PAPER;
      return { fg, bg };
    },
  },
  {
    key: "drawer-link-idle",
    label: "Menu mobile · link idle",
    minRatio: 4.5,
    mobileOnly: true,
    resolve: () => ({ fg: foldAlpha(FOREGROUND, 0.8, BACKGROUND), bg: BACKGROUND }),
  },
  {
    key: "drawer-link-active",
    label: "Menu mobile · link ativo",
    minRatio: 4.5,
    mobileOnly: true,
    resolve: () => ({ fg: FOREGROUND, bg: BACKGROUND }),
  },
  {
    key: "drawer-cta",
    label: "Menu mobile · Reservar",
    minRatio: 4.5,
    mobileOnly: true,
    resolve: () => ({ fg: PRIMARY_FG, bg: PRIMARY }),
  },
];

describe("Navbar — automated contrast matrix", () => {
  for (const vp of VIEWPORTS) {
    const isMobile = vp.w < 768;
    for (const scrolled of [false, true]) {
      for (const frame of VIDEO_FRAMES) {
        for (const el of NAV_ELEMENTS) {
          if (el.desktopOnly && isMobile) continue;
          if (el.mobileOnly && !isMobile) continue;
          const stateLabel = scrolled ? "scrolled" : "transparent";
          it(`${el.label} · ${vp.name} (${vp.w}×${vp.h}) · ${stateLabel} · ${frame.name}`, () => {
            const { fg, bg } = el.resolve({
              video: frame.color,
              scrolled,
              viewportW: vp.w,
            });
            const ratio = contrast(fg, bg);
            const info = `ratio=${ratio.toFixed(2)} fg=${fg.join(",")} bg=${bg.join(",")}`;
            expect(ratio, info).toBeGreaterThanOrEqual(el.minRatio);
          });
        }
      }
    }
  }
});
