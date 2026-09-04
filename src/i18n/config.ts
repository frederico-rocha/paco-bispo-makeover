export const LANGS = ["pt", "en", "es", "fr"] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_LABELS: Record<Lang, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
  fr: "FR",
};

export const LANG_NAMES: Record<Lang, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
  fr: "Français",
};

export const DEFAULT_LANG: Lang = "pt";
export const STORAGE_KEY = "pdb-lang";

export const isLang = (v: unknown): v is Lang =>
  typeof v === "string" && (LANGS as readonly string[]).includes(v);
