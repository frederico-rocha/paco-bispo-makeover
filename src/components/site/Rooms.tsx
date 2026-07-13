import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { rooms } from "@/data/rooms";

export const Rooms = () => {
  return (
    <section id="quartos" className="py-28 md:py-40 bg-secondary/40">
      <div className="container-editorial">
        <div className="flex items-end justify-between flex-wrap gap-6 max-w-5xl">
          <div className="max-w-3xl">
            <p className="eyebrow">Estadia</p>
            <h2 className="font-serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-balance">
              Onze formas de
              <span className="italic"> dormir em Sintra</span>.
            </h2>
          </div>
          <Link
            to="/galeria"
            className="text-sm tracking-wide hover:text-primary inline-flex items-center gap-2"
          >
            Ver galeria completa <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-8 md:gap-10">
          {rooms.map((r) => (
            <Link
              to={`/quartos/${r.slug}`}
              key={r.slug}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
                <img
                  src={r.hero}
                  alt={r.name}
                  className={`w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 ${
                    r.slug === "estudio" ? "object-bottom" : ""
                  }`}
                  loading="lazy"
                  width={1080}
                  height={1600}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "var(--gradient-overlay)" }}
                />
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="w-11 h-11 rounded-full bg-paper text-ink flex items-center justify-center">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <h3 className="font-serif-display text-2xl">{r.name}</h3>
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {r.count}
                </span>
              </div>
              <p className="mt-3 text-foreground/70 leading-relaxed font-light">
                {r.short}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
