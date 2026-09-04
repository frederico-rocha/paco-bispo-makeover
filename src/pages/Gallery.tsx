import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import heroAsset from "@/assets/hero-paco.jpg.asset.json";
const hero = heroAsset.url;
import suiteAsset from "@/assets/room-suite.jpg.asset.json";
const suite = suiteAsset.url;
import studioAsset from "@/assets/room-studio.jpg.asset.json";
const studio = studioAsset.url;
import penthouseAsset from "@/assets/room-penthouse.jpg.asset.json";
const penthouse = penthouseAsset.url;
import poolAsset from "@/assets/pool.jpg.asset.json";
const pool = poolAsset.url;
import chapelAsset from "@/assets/chapel-lounge.jpg.asset.json";
const chapel = chapelAsset.url;
import houseDetailAsset from "@/assets/house-detail.jpg.asset.json";
const houseDetail = houseDetailAsset.url;
import sintraAsset from "@/assets/sintra.jpg.asset.json";
const sintra = sintraAsset.url;

const items = [
  { src: hero, caption: "A casa ao amanhecer", category: "Exterior" },
  { src: suite, caption: "Suíte principal", category: "Quartos" },
  { src: chapel, caption: "Lounge na antiga capela", category: "Espaços" },
  { src: pool, caption: "Piscina panorâmica", category: "Exterior" },
  { src: studio, caption: "Loft com vista", category: "Quartos" },
  { src: houseDetail, caption: "Área da piscina", category: "Exterior" },
  { src: penthouse, caption: "Penthouse — terraço privado", category: "Quartos" },
  { src: sintra, caption: "Serra de Sintra", category: "Envolvente" },
];

const categories = ["Tudo", "Exterior", "Quartos", "Espaços", "Detalhes", "Envolvente"];

const Gallery = () => {
  const [filter, setFilter] = useState("Tudo");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "Tudo" ? items : items.filter((i) => i.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="container-editorial">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft size={16} />
            Voltar
          </Link>

          <div className="max-w-3xl">
            <p className="eyebrow">Galeria</p>
            <h1 className="font-serif-display text-5xl md:text-7xl mt-5 leading-[1.02] text-balance">
              A casa em <span className="italic">imagens</span>.
            </h1>
            <p className="mt-6 text-lg text-foreground/70 font-light leading-relaxed max-w-xl">
              Detalhes, paisagem, luz e silêncio. Um percurso visual pelo Paço do
              Bispo e pela serra que o envolve.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] border transition-colors ${
                  filter === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-foreground/70 hover:border-foreground/60"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-editorial">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
            {filtered.map((item, i) => (
              <button
                key={item.caption}
                onClick={() => setLightbox(i)}
                className="group mb-4 md:mb-6 block w-full break-inside-avoid overflow-hidden rounded-sm bg-muted"
              >
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.caption}
                    width={1200}
                    height={1600}
                    className="w-full h-auto object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={i < 3 ? "high" : "low"}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5"
                    style={{ background: "var(--gradient-overlay)" }}
                  >
                    <div className="text-paper text-left">
                      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-paper/70">
                        {item.category}
                      </p>
                      <p className="font-serif-display text-xl mt-1">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-paper hover:text-primary transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X size={28} />
          </button>
          <figure className="max-w-6xl max-h-[88vh] flex flex-col items-center">
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].caption}
              decoding="async"
              fetchPriority="high"
              className="max-h-[80vh] w-auto object-contain rounded-sm"
            />
            <figcaption className="mt-5 text-paper/80 font-light tracking-wide text-sm">
              {filtered[lightbox].caption}
            </figcaption>
          </figure>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
