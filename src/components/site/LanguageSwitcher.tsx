import { LANGS, LANG_LABELS, LANG_NAMES } from "@/i18n/config";
import { useI18n } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

type Props = {
  scrolled: boolean;
  className?: string;
};

export const LanguageSwitcher = ({ scrolled, className }: Props) => {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      className={cn("flex items-center gap-1", className)}
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
              "px-1.5 py-1 text-[0.7rem] tracking-[0.18em] uppercase rounded-sm transition-colors",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              scrolled
                ? cn(
                    "focus-visible:ring-primary focus-visible:ring-offset-background",
                    active
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground"
                  )
                : cn(
                    "focus-visible:ring-paper focus-visible:ring-offset-ink",
                    active ? "text-paper" : "text-paper/60 hover:text-paper"
                  )
            )}
          >
            {LANG_LABELS[l]}
          </button>
        );
      })}
    </div>
  );
};
