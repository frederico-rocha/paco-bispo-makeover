import facade from "@/assets/DSC_0003.jpg";
import { useI18n } from "@/i18n/LanguageContext";

export const About = () => {
  const { t } = useI18n();
  const a = t.about;

  return (
    <section id="casa" className="py-28 md:py-40 bg-background">
      <div className="container-editorial">
        <div className="overflow-hidden rounded-sm" style={{ boxShadow: "var(--shadow-soft)" }}>
          <img
            src={facade}
            alt={a.imageAlt}
            className="block w-full h-auto"
            loading="lazy"
            width={1920}
            height={1280}
            sizes="(min-width: 1280px) 1200px, calc(100vw - 3rem)"
          />
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow">{a.eyebrow}</p>
            <h2 className="font-serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-balance">
              {a.titleStart}
              <span className="italic text-primary"> {a.titleAccent}</span>.
            </h2>
          </div>

          <div className="md:col-span-7 md:pt-8">
            <div className="space-y-5 text-foreground/75 text-lg leading-relaxed max-w-2xl font-light">
              <p>{a.p1}</p>
              <p>{a.p2}</p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 md:gap-10 max-w-lg">
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
      </div>
    </section>
  );
};
