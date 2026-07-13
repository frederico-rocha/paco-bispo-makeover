import heroVideo from "@/assets/hero.mp4.asset.json";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Paço do Bispo Boutique House ao entardecer, na serra de Sintra"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-24 md:pb-32">
        <p className="eyebrow text-paper/90 reveal">
          Ribeira da Penha Longa · Sintra
        </p>
        <h1 className="font-serif-display text-paper text-5xl md:text-7xl lg:text-8xl mt-5 max-w-5xl leading-[1.02] text-balance reveal reveal-delay-1">
          Tradição, paisagem
          <br />
          <span className="italic font-light">e a serra de Sintra</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-5 reveal reveal-delay-2">
          <a
            href="#reservas"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary-glow transition-all duration-500 text-sm tracking-wide"
          >
            Reservar estadia
          </a>
          <a
            href="#casa"
            className="inline-flex items-center px-8 py-3.5 rounded-full border border-paper/40 text-paper hover:bg-paper/10 transition-all duration-500 text-sm tracking-wide"
          >
            Conhecer a casa
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-paper/70 text-[0.65rem] uppercase tracking-[0.4em] hidden md:block">
        Scroll
      </div>
    </section>
  );
};
