import sintraAsset from "@/assets/sintra.jpg.asset.json";
const sintra = sintraAsset.url;
import { useI18n } from "@/i18n/LanguageContext";

export const Location = () => {
  const { t } = useI18n();
  const l = t.location;
  const points = l.points;

  return (
    <section id="localizacao" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={sintra}
          alt={l.imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      <div className="relative container-editorial text-paper">
        <div className="max-w-2xl">
          <p className="eyebrow text-paper/80">{l.eyebrow}</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-balance">
            {l.titleStart}
            <span className="italic"> {l.titleAccent}</span>.
          </h2>
          <p className="mt-7 text-paper/80 text-lg leading-relaxed font-light">
            {l.text}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {points.map((p) => (
            <div key={p.l} className="border-t border-paper/30 pt-5">
              <div className="font-serif-display text-3xl md:text-4xl text-paper">{p.d}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-paper/70 mt-2">
                {p.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
