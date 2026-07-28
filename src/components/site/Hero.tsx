import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero.mp4.asset.json";
import heroPoster from "@/assets/hero-paco.jpg.asset.json";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const posterRef = useRef<HTMLImageElement>(null);
  const [canPlayVideo, setCanPlayVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // ── Mobile & connection safeguards ─────────────────────────────
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const conn = (navigator as any).connection;
    const saveData = conn?.saveData === true;
    const effType: string | undefined = conn?.effectiveType;
    const slow = effType ? /(^|-)(2g|3g|slow-2g)$/.test(effType) : false;
    // Downlink in Mbps — treat <1.5Mbps as too slow for a 150MB hero MP4.
    const lowBandwidth = typeof conn?.downlink === "number" && conn.downlink < 1.5;
    const smallViewport = window.matchMedia("(max-width: 640px)").matches;
    // Coarse pointer + short viewport = mobile in landscape; still skip.
    const coarseSmall =
      window.matchMedia("(pointer: coarse)").matches &&
      window.matchMedia("(max-height: 500px)").matches;

    if (
      prefersReducedMotion ||
      saveData ||
      slow ||
      lowBandwidth ||
      smallViewport ||
      coarseSmall
    ) {
      return;
    }

    let cancelled = false;

    // ── Poster-first: wait for the LCP image to actually decode ────
    // before we start pulling video bytes, so the video never steals
    // bandwidth from the first meaningful paint.
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
        {canPlayVideo && (
          <video
            ref={videoRef}
            src={heroVideo.url}
            poster={heroPoster.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            // Reveal only once the browser signals it can play through the
            // first frame without stalling — no half-decoded flashes over
            // the poster. `onPlaying` is the belt-and-braces fallback for
            // browsers that hold `canplay` back behind autoplay policies.
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
