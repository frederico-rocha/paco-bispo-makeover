import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, BedDouble, Eye, Maximize2, Users } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { getRoom, rooms } from "@/data/rooms";
import NotFound from "./NotFound";

const RoomDetail = () => {
  const { slug } = useParams();
  const room = slug ? getRoom(slug) : undefined;

  if (!room) return <NotFound />;

  const others = rooms.filter((r) => r.slug !== room.slug);
  const studioImagePosition = "object-[82%_100%]";

  const facts = [
    { icon: Maximize2, label: "Área", value: room.size },
    { icon: Users, label: "Capacidade", value: room.guests },
    { icon: BedDouble, label: "Cama", value: room.bed },
    { icon: Eye, label: "Vista", value: room.view },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article>
        {/* Hero */}
        <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
          <img
            src={room.hero}
            alt={room.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-overlay)" }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-editorial pb-16 md:pb-24 text-paper">
              <p className="eyebrow text-paper/80">{room.count}</p>
              <h1 className="font-serif-display text-5xl md:text-7xl mt-4 leading-[1.02] max-w-3xl">
                {room.name}
              </h1>
            </div>
          </div>
        </section>

        {/* Intro + facts */}
        <section className="py-24 md:py-32">
          <div className="container-editorial grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="eyebrow">Sobre o quarto</p>
              <h2 className="font-serif-display text-3xl md:text-5xl mt-4 leading-[1.1] text-balance">
                <span className="italic">{room.short}</span>
              </h2>
              <div className="mt-10 space-y-6 text-foreground/75 leading-relaxed font-light max-w-xl">
                {room.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <aside className="md:col-span-5 md:pl-8">
              <div className="border-t border-border pt-8 grid grid-cols-2 gap-y-8">
                {facts.map((f) => (
                  <div key={f.label}>
                    <f.icon size={18} className="text-primary" />
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {f.label}
                    </p>
                    <p className="mt-1 font-serif-display text-xl">{f.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <p className="eyebrow">Comodidades</p>
                <ul className="mt-5 grid grid-cols-1 gap-3">
                  {room.amenities.map((a) => (
                    <li
                      key={a}
                      className="flex items-center gap-3 text-foreground/80 font-light"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/#reservas"
                className="mt-12 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
              >
                Reservar este quarto
                <ArrowUpRight size={16} />
              </Link>
            </aside>
          </div>
        </section>

        {/* Gallery */}
        <section className="pb-24 md:pb-32">
          <div className="container-editorial">
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {room.gallery.map((src, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-sm bg-muted ${
                    i === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3]" : "aspect-[4/5]"
                  }`}
                >
                  <img
                    src={src}
                    alt={`${room.name} — ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other rooms */}
        <section className="py-24 md:py-32 bg-secondary/40 border-t border-border/60">
          <div className="container-editorial">
            <div className="flex items-end justify-between flex-wrap gap-6">
              <div>
                <p className="eyebrow">Continuar a explorar</p>
                <h2 className="font-serif-display text-3xl md:text-5xl mt-4">
                  Outros <span className="italic">quartos</span>
                </h2>
              </div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm tracking-wide hover:text-primary"
              >
                <ArrowLeft size={16} />
                Voltar ao início
              </Link>
            </div>

            <div className="mt-14 grid md:grid-cols-2 gap-8 md:gap-10">
              {others.map((r) => (
                <Link key={r.slug} to={`/quartos/${r.slug}`} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                    <img
                      src={r.hero}
                      alt={r.name}
                      className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between">
                    <h3 className="font-serif-display text-2xl">{r.name}</h3>
                    <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      {r.count}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default RoomDetail;
