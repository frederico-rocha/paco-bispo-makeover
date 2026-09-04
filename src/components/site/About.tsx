import courtyard from "@/assets/paco-do-bispo-courtyard.jpg.asset.json";
import { useI18n } from "@/i18n/LanguageContext";

export const About = () => {
  const { t } = useI18n();
  const a = t.about;

  return (
    <section id="casa" className="py-28 md:py-40 bg-background">
      <div className="container-editorial grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm" style={{ boxShadow: "var(--shadow-soft)" }}>
            <img
              src={courtyard.url}
              alt={a.imageAlt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
              loading="lazy"
              width={1824}
              height={1216}
            />

          </div>
        </div>

        <div className="md:col-span-7 md:pl-10 order-1 md:order-2">
          <p className="eyebrow">{a.eyebrow}</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-balance">
            {a.titleStart}
            <span className="italic text-primary"> {a.titleAccent}</span>.
          </h2>
          <div className="mt-8 space-y-5 text-foreground/75 text-lg leading-relaxed max-w-xl font-light">
            <p>{a.p1}</p>
            <p>{a.p2}</p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 md:gap-10 max-w-md">
            {[
              { n: "9", l: a.statRooms },
              { n: "1", l: a.statLoft },
              { n: "1", l: a.statPenthouse },
            ].map((s) => (
              <div key={s.l} className="border-t border-border pt-4">
                <div className="font-serif-display text-4xl text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
