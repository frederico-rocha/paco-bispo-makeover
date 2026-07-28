import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero.mp4.asset.json";
import heroPoster from "@/assets/hero-paco.jpg.asset.json";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  useEffect(() => {
    // Respect reduced motion and slow connections: skip video on constrained clients.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const conn = (navigator as any).connection;
    const saveData = conn?.saveData === true;
    const slow = conn?.effectiveType && /2g|3g/.test(conn.effectiveType);
    if (prefersReducedMotion || saveData || slow) return;
    setCanPlayVideo(true);
  }, []);

  return (
    <section
      id="top"
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroPoster.url}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {canPlayVideo && (
          <video
            ref={videoRef}
            src={heroVideo.url}
            poster={heroPoster.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            disableRemotePlayback
            aria-label="Paço do Bispo Boutique House ao entardecer, na serra de Sintra"
            className="relative w-full h-full object-cover"
          />
        )}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>


      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-24 md:pb-32">
        <p className="uppercase tracking-[0.28em] text-xs font-medium text-paper/90 reveal">
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
