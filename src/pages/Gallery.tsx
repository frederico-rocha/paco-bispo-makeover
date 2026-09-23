import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, X } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { rooms } from "@/data/rooms";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import heroAsset from "@/assets/hero-paco.jpg.asset.json";
import facadeAsset from "@/assets/fachada-paco-bispo.png.asset.json";
import piscina1Asset from "@/assets/piscina-1.jpg.asset.json";
import piscina2Asset from "@/assets/piscina-2.jpg.asset.json";
import piscina3Asset from "@/assets/piscina-3.jpg.asset.json";
import chapelAsset from "@/assets/capela-centro-1.jpg.asset.json";
import event89Asset from "@/assets/PacodoBispo28.02.2019-89.jpeg.asset.json";
import event136Asset from "@/assets/PacodoBispo28.02.2019-136.jpeg.asset.json";
import event139Asset from "@/assets/PacodoBispo28.02.2019-139.jpeg.asset.json";
import event142Asset from "@/assets/PacodoBispo28.02.2019-142.jpeg.asset.json";
import event144Asset from "@/assets/event-144-centered.jpg.asset.json";
import breakfast008Asset from "@/assets/breakfast-008.jpg.asset.json";
import breakfast004Asset from "@/assets/breakfast-004.jpg.asset.json";
import breakfast007Asset from "@/assets/breakfast-007.jpg.asset.json";
import sintraAsset from "@/assets/sintra.jpg.asset.json";
import { useI18n } from "@/i18n/LanguageContext";

type CatKey = "exterior" | "rooms" | "spaces" | "surroundings";

type CaptionKey =
  | "facade"
  | "house"
  | "pool"
  | "chapel"
  | "events"
  | "breakfast"
  | "standard"
  | "superior"
  | "deluxe"
  | "penthouse"
  | "loft"
  | "sintra";

type MediaItem = { src: string; key: CaptionKey; cat: CatKey };

const exteriorMedia: MediaItem[] = [
  { src: facadeAsset.url, key: "facade", cat: "exterior" },
  { src: heroAsset.url, key: "house", cat: "exterior" },
  { src: piscina1Asset.url, key: "pool", cat: "exterior" },
  { src: piscina2Asset.url, key: "pool", cat: "exterior" },
  { src: piscina3Asset.url, key: "pool", cat: "exterior" },
];

const spacesMedia: MediaItem[] = [
  { src: chapelAsset.url, key: "chapel", cat: "spaces" },
  { src: breakfast008Asset.url, key: "breakfast", cat: "spaces" },
  { src: breakfast004Asset.url, key: "breakfast", cat: "spaces" },
  { src: breakfast007Asset.url, key: "breakfast", cat: "spaces" },
  { src: event89Asset.url, key: "events", cat: "spaces" },
  { src: event136Asset.url, key: "events", cat: "spaces" },
  { src: event139Asset.url, key: "events", cat: "spaces" },
  { src: event142Asset.url, key: "events", cat: "spaces" },
  { src: event144Asset.url, key: "events", cat: "spaces" },
];

const surroundingsMedia: MediaItem[] = [
  { src: sintraAsset.url, key: "sintra", cat: "surroundings" },
];

const roomMedia: MediaItem[] = rooms.flatMap((room) => {
  const urls = [room.hero, ...room.gallery.filter((u) => u !== room.hero)];
  return urls.map((src) => ({
    src,
    key: room.slug as CaptionKey,
    cat: "rooms" as CatKey,
  }));
});

const media: MediaItem[] = [
  ...exteriorMedia,
  ...roomMedia,
  ...spacesMedia,
  ...surroundingsMedia,
];

const catKeys: (CatKey | "all")[] = [
  "all",
  "exterior",
  "rooms",
  "spaces",
  "surroundings",
];

const Gallery = () => {
  const { t } = useI18n();
  const g = t.gallery;
  const [filter, setFilter] = useState<CatKey | "all">("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = media.map((m) => ({
    src: m.src,
    caption: g.captions[m.key],
    category: g.categories[m.cat],
    cat: m.cat,
  }));

  const filtered =
    filter === "all" ? items : items.filter((i) => i.cat === filter);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${g.eyebrow} — Paço do Bispo Boutique House`}</title>
        <meta name="description" content={g.intro} />
        <link rel="canonical" href={`${SITE_URL}/galeria`} />
        <meta
          property="og:title"
          content={`${g.eyebrow} — Paço do Bispo Boutique House`}
        />
        <meta property="og:description" content={g.intro} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/galeria`} />
        <meta property="og:image" content={absoluteUrl(facadeAsset.url)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${g.eyebrow} — Paço do Bispo Boutique House`}
        />
        <meta name="twitter:description" content={g.intro} />
        <meta name="twitter:image" content={absoluteUrl(facadeAsset.url)} />
      </Helmet>
      <Navbar />

      <section className="pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="container-editorial">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft size={16} />
            {g.back}
          </Link>

          <div className="max-w-3xl">
            <p className="eyebrow">{g.eyebrow}</p>
            <h1 className="font-serif-display text-5xl md:text-7xl mt-5 leading-[1.02] text-balance">
              {g.titleStart} <span className="italic">{g.titleAccent}</span>.
            </h1>
            <p className="mt-6 text-lg text-foreground/70 font-light leading-relaxed max-w-xl">
              {g.intro}
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-2">
            {catKeys.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] border transition-colors ${
                  filter === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-foreground/70 hover:border-foreground/60"
                }`}
              >
                {c === "all" ? g.categories.all : g.categories[c]}
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
                key={`${item.src}-${i}`}
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
            aria-label={g.close}
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
