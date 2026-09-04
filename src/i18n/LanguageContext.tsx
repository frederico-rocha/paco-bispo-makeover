import * as React from "react";
import { DEFAULT_LANG, isLang, STORAGE_KEY, type Lang } from "./config";
import { translations, type Dict } from "./translations";
import { amenitiesByLang, roomTexts } from "./rooms";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  roomText: (slug: string) => (typeof roomTexts)["pt"][string];
  amenities: string[];
};

const LanguageContext = React.createContext<Ctx | null>(null);

const detect = (): Lang => {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLang(stored)) return stored;
  const nav = window.navigator.language?.slice(0, 2).toLowerCase();
  return isLang(nav) ? nav : DEFAULT_LANG;
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLangState] = React.useState<Lang>(detect);

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = React.useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: translations[lang],
      roomText: (slug: string) =>
        roomTexts[lang][slug] ?? roomTexts[DEFAULT_LANG][slug],
      amenities: amenitiesByLang[lang],
    }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
};
