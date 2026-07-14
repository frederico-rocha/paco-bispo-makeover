import poolAsset from "@/assets/pool.jpg.asset.json";
const pool = poolAsset.url;
import chapel from "@/assets/chapel-lounge.jpg";

const items = [
  {
    img: pool,
    eyebrow: "Piscina panorâmica",
    title: "Vista privilegiada sobre a serra",
    desc: "A piscina abre-se sobre os pinhais e as colinas — um lugar para ficar, ler e desaparecer.",
  },
  {
    img: chapel,
    eyebrow: "A Capela",
    title: "Lounge & Bar na antiga capela",
    desc: "Uma capela do século passado, agora lounge à luz das velas. Cocktails, vinhos e silêncio de pedra.",
    reverse: true,
  },
];

export const Experiences = () => {
  return (
    <section id="experiencias" className="py-28 md:py-40 bg-background">
      <div className="container-editorial">
        <div className="max-w-3xl mb-20 md:mb-28">
          <p className="eyebrow">Experiências</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-balance">
            Para além do quarto,
            <span className="italic"> a casa.</span>
          </h2>
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
                    className="w-full h-full object-cover"
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
