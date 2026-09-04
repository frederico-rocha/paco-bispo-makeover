import { useEffect, useRef, useState } from "react";
import heroVideo1080 from "@/assets/hero-1080.mp4.asset.json";
import heroVideo720 from "@/assets/hero-720.mp4.asset.json";
import heroPoster from "@/assets/hero-paco.jpg.asset.json";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const posterRef = useRef<HTMLImageElement>(null);
  const [canPlayVideo, setCanPlayVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    // ── Connection & accessibility safeguards ──────────────────────
    // Video now weighs ~8.5MB (720p) / ~25MB (1080p) so we can serve
    // it on mobile/tablet too — only bail out on truly hostile
    // conditions (reduced motion, save-data, 2G).
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const conn = (navigator as any).connection;
    const saveData = conn?.saveData === true;
    const effType: string | undefined = conn?.effectiveType;
    const verySlow = effType ? /(^|-)(2g|slow-2g)$/.test(effType) : false;
    const veryLowBandwidth =
      typeof conn?.downlink === "number" && conn.downlink < 0.7;

    if (prefersReducedMotion || saveData || verySlow || veryLowBandwidth) {
      return;
    }

    // ── Pick the right variant for the viewport / DPR ──────────────
    // Small screens and 3G-ish links get the 720p file (~8.5MB); larger
    // viewports on decent links get 1080p (~25MB).
    const viewportW = window.innerWidth * (window.devicePixelRatio || 1);
    const on3G = effType ? /(^|-)3g$/.test(effType) : false;
    const isSmall = window.matchMedia("(max-width: 1024px)").matches;
    const src = viewportW <= 1400 || isSmall || on3G ? heroVideo720.url : heroVideo1080.url;
    setVideoSrc(src);

    let cancelled = false;

    // ── Poster-first: wait for the LCP image to actually decode ────
    // before pulling video bytes, so the video never steals bandwidth
    // from the first meaningful paint.
    const startAfterPoster = async () => {
      const img = posterRef.current;
      try {
        if (img && "decode" in img) await img.decode();
      } catch {
        /* decode() rejects if the image is not yet loaded — ignore. */
      }
      if (cancelled) return;

      const schedule = (cb: () => void) => {
        const ric = (window as any).requestIdleCallback as
          | ((cb: () => void, opts?: { timeout: number }) => number)
          | undefined;
        if (ric) ric(() => cb(), { timeout: 2500 });
        else setTimeout(cb, 1200);
      };
      schedule(() => {
        if (!cancelled) setCanPlayVideo(true);
      });
    };

    if (document.readyState === "complete") {
      startAfterPoster();
    } else {
      window.addEventListener("load", startAfterPoster, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", startAfterPoster);
    };
  }, []);

  // Pause the video when the tab is hidden — saves decode CPU & battery
  // on mobile and helps the browser reclaim memory quickly.
  useEffect(() => {
    if (!canPlayVideo) return;
    const onVisibility = () => {
      const v = videoRef.current;
      if (!v) return;
      if (document.hidden) v.pause();
      else v.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [canPlayVideo]);

  return (
    <section
      id="top"
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          ref={posterRef}
          src={heroPoster.url}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {canPlayVideo && videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={heroPoster.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            onCanPlay={() => setVideoReady(true)}
            onPlaying={() => setVideoReady(true)}
            aria-label="Paço do Bispo Boutique House ao entardecer, na serra de Sintra"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${videoReady ? "opacity-100" : "opacity-0"}`}
            style={{ willChange: "opacity" }}
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
          Contemporâneo entre
          <br />
          <span className="italic font-light">natureza e história</span>
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
            Conhecer o hotel
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-paper/70 text-[0.65rem] uppercase tracking-[0.4em] hidden md:block">
        Scroll
      </div>
    </section>
  );
};
