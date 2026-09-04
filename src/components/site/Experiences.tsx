import poolAsset from "@/assets/pool.jpg.asset.json";
const pool = poolAsset.url;
import chapelAsset from "@/assets/chapel-lounge.jpg.asset.json";
const chapel = chapelAsset.url;
import eventsAsset from "@/assets/hero-paco.jpg.asset.json";
const events = eventsAsset.url;
import { useI18n } from "@/i18n/LanguageContext";

export const Experiences = () => {
  const { t } = useI18n();
  const e = t.experiences;

  const items = [
    {
      img: pool,
      eyebrow: e.poolEyebrow,
      title: e.poolTitle,
      desc: e.poolDesc,
    },
    {
      img: chapel,
      eyebrow: e.chapelEyebrow,
      title: e.chapelTitle,
      desc: e.chapelDesc,
      reverse: true,
    },
  ];

  return (
    <section id="experiencias" className="py-28 md:py-40 bg-background">
      <div className="container-editorial">
        <div className="max-w-3xl mb-20 md:mb-28">
          <p className="eyebrow">{e.eyebrow}</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-balance">
            {e.titleStart}
            <span className="italic"> {e.titleAccent}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center mb-24 md:mb-36">
          <div className="md:col-span-7">
            <div
              className="relative aspect-[16/10] overflow-hidden rounded-sm"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <img
                src={events}
                alt={e.eventsAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                width={1920}
                height={1200}
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow">{e.eyebrow}</p>
            <h3 className="font-serif-display text-3xl md:text-5xl mt-4 leading-[1.08] text-balance">
              {e.eventsTitle}
            </h3>
            <p className="mt-6 text-foreground/70 leading-relaxed font-light text-lg">
              {e.eventsText}{" "}
              <a
                href="mailto:geral@pacodobispoboutiquehouse.com"
                className="text-primary underline-offset-4 hover:underline"
              >
                geral@pacodobispoboutiquehouse.com
              </a>
            </p>
          </div>
        </div>

        <div className="space-y-24 md:space-y-36">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
                item.reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-7">
                <div
                  className="relative aspect-[16/10] overflow-hidden rounded-sm"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-[50%_40%]"
                    loading="lazy"
                    width={1920}
                    height={1200}
                  />
                </div>
              </div>
              <div className="md:col-span-5">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3 className="font-serif-display text-3xl md:text-5xl mt-4 leading-[1.08] text-balance">
                  {item.title}
                </h3>
                <p className="mt-6 text-foreground/70 leading-relaxed font-light text-lg">
                  {item.desc}
                </p>
                <div className="mt-8 text-sm tracking-[0.2em] uppercase text-accent">
                  0{i + 1} / 0{items.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
