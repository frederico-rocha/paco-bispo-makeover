import { LANGS, LANG_NAMES } from "@/i18n/config";
import { useI18n } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const LANG_FLAGS: Record<(typeof LANGS)[number], string> = {
  pt: "🇵🇹",
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
};

type Props = {
  scrolled: boolean;
  className?: string;
};

export const LanguageSwitcher = ({ scrolled, className }: Props) => {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      className={cn("flex items-center gap-1.5", className)}
      role="group"
      aria-label={t.nav.language}
    >
      {LANGS.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-label={LANG_NAMES[l]}
            aria-current={active ? "true" : undefined}
            className={cn(
              "text-base leading-none rounded-sm transition-all",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              active ? "scale-110" : "opacity-60 hover:opacity-100",
              scrolled
                ? "focus-visible:ring-primary focus-visible:ring-offset-background"
                : "focus-visible:ring-paper focus-visible:ring-offset-ink"
            )}
          >
            <span aria-hidden="true">{LANG_FLAGS[l]}</span>
          </button>
        );
      })}
    </div>
  );
};
