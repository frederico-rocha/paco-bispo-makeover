import suite from "@/assets/room-suite.jpg";
import studio from "@/assets/room-studio.jpg";
import penthouse from "@/assets/room-penthouse.jpg";
import { ArrowUpRight } from "lucide-react";

const rooms = [
  {
    img: suite,
    name: "Quartos de Luxo",
    count: "Nove suítes",
    desc: "Tectos altos, azulejos seculares e linhos imaculados — cada quarto é um capítulo da casa.",
  },
  {
    img: studio,
    name: "Estúdio",
    count: "Vista campo",
    desc: "Um refúgio íntimo banhado por luz natural, com vista para os pinhais da Penha Longa.",
  },
  {
    img: penthouse,
    name: "Penthouse",
    count: "Terraço privado",
    desc: "O ponto mais alto da casa. Vista panorâmica sobre Sintra, terraço só seu.",
  },
];

export const Rooms = () => {
  return (
    <section id="quartos" className="py-28 md:py-40 bg-secondary/40">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <p className="eyebrow">Estadia</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-balance">
            Onze formas de
            <span className="italic"> dormir em Sintra</span>.
          </h2>
        </div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-8 md:gap-10">
          {rooms.map((r) => (
            <article key={r.name} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
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
                {r.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
