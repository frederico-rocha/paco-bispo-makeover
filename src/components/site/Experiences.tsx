import React, { useState } from "react";
import poolAsset from "@/assets/pool.jpg.asset.json";
const pool = poolAsset.url;
import chapelAsset from "@/assets/chapel-lounge.jpg.asset.json";
const chapel = chapelAsset.url;
import event89Asset from "@/assets/PacodoBispo28.02.2019-89.jpeg.asset.json";
import event136Asset from "@/assets/PacodoBispo28.02.2019-136.jpeg.asset.json";
import event139Asset from "@/assets/PacodoBispo28.02.2019-139.jpeg.asset.json";
import event142Asset from "@/assets/PacodoBispo28.02.2019-142.jpeg.asset.json";
import event144Asset from "@/assets/event-144-centered.jpg.asset.json";
import piscina1Asset from "@/assets/piscina-1.jpg.asset.json";
import piscina2Asset from "@/assets/piscina-2.jpg.asset.json";
import piscina3Asset from "@/assets/piscina-3.jpg.asset.json";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useI18n } from "@/i18n/LanguageContext";

// Each event photo with its native orientation so the carousel frame can adapt.
const eventPhotos: { url: string; portrait: boolean }[] = [
  { url: event89Asset.url, portrait: false }, // 1280×853 landscape
  { url: event136Asset.url, portrait: true }, // 853×1280 portrait
  { url: event139Asset.url, portrait: true },
  { url: event142Asset.url, portrait: false }, // 1280×853 landscape
  { url: event144Asset.url, portrait: true }, // cropped 853×1024 (5:6): table centered, feet visible
];

// Pool photos for the pool section carousel (all landscape 1920×1280, 3:2).
const poolPhotos: string[] = [
  piscina1Asset.url,
  piscina2Asset.url,
  piscina3Asset.url,
];

export const Experiences = () => {
  const { t } = useI18n();
  const e = t.experiences;

  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const activePortrait = eventPhotos[activeIndex]?.portrait ?? false;

  const items = [
    {
      photos: poolPhotos,
      eyebrow: e.poolEyebrow,
      title: e.poolTitle,
      desc: e.poolDesc,
    },
    {
      img: chapel,
      eyebrow: e.chapelEyebrow,
      title: e.chapelTitle,
      desc: e.chapelDesc,
      reverse: true,
    },
  ];

  return (
    <section id="experiencias" className="py-28 md:py-40 bg-background">
      <div className="container-editorial">
        <div className="max-w-3xl mb-20 md:mb-28">
          <p className="eyebrow">{e.eyebrow}</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-balance">
            {e.titleStart}
            <span className="italic"> {e.titleAccent}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center mb-24 md:mb-36">
          <div className="md:col-span-7">
            <div
              className={`relative overflow-hidden rounded-sm bg-muted/60 transition-[aspect-ratio] duration-500 ${
                activePortrait
                  ? "aspect-[4/5] md:aspect-[5/6]"
                  : "aspect-[4/3] md:aspect-[3/2]"
              }`}
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <Carousel className="h-full" opts={{ loop: true }} setApi={setApi}>
                <CarouselContent className="h-full">
                  {eventPhotos.map((photo, i) => (
                    <CarouselItem key={photo.url} className="h-full">
                      <img
                        src={photo.url}
                        alt={`${e.eventsAlt} — ${i + 1}`}
                        className="w-full h-full object-contain"
                        loading={i === 0 ? "eager" : "lazy"}
                        width={1920}
                        height={1200}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow">{e.eyebrow}</p>
            <h3 className="font-serif-display text-3xl md:text-5xl mt-4 leading-[1.08] text-balance">
              {e.eventsTitle}
            </h3>
            <p className="mt-6 text-foreground/70 leading-relaxed font-light text-lg">
              {e.eventsText}{" "}
              <a
                href="mailto:geral@pacodobispoboutiquehouse.com"
                className="text-primary underline-offset-4 hover:underline"
              >
                geral@pacodobispoboutiquehouse.com
              </a>
            </p>
          </div>
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
                  {item.photos ? (
                    <Carousel
                      className="h-full"
                      opts={{ loop: true }}
                    >
                      <CarouselContent className="h-full">
                        {item.photos.map((photo, idx) => (
                          <CarouselItem key={photo} className="h-full">
                            <img
                              src={photo}
                              alt={`${item.title} — ${idx + 1}`}
                              className="w-full h-full object-cover object-[50%_50%]"
                              loading={idx === 0 ? "eager" : "lazy"}
                              width={1920}
                              height={1280}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4" />
                      <CarouselNext className="right-4" />
                    </Carousel>
                  ) : (
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover object-[50%_40%]"
                      loading="lazy"
                      width={1920}
                      height={1200}
                    />
                  )}
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
