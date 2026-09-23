import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Mail } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useI18n } from "@/i18n/LanguageContext";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import event89Asset from "@/assets/PacodoBispo28.02.2019-89.jpeg.asset.json";
import event136Asset from "@/assets/PacodoBispo28.02.2019-136.jpeg.asset.json";
import event139Asset from "@/assets/PacodoBispo28.02.2019-139.jpeg.asset.json";
import event142Asset from "@/assets/PacodoBispo28.02.2019-142.jpeg.asset.json";
import event144Asset from "@/assets/event-144-centered.jpg.asset.json";
import chapelAsset from "@/assets/capela-centro-1.jpg.asset.json";

const eventPhotos = [
  event89Asset.url,
  event136Asset.url,
  event139Asset.url,
  event142Asset.url,
  event144Asset.url,
];

const Events = () => {
  const { t, anchorHref } = useI18n();
  const p = t.eventsPage;
  const title = `${p.metaTitle}`;
  const description = p.metaDescription;
  const canonical = `${SITE_URL}/eventos`;

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={absoluteUrl(event89Asset.url)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={absoluteUrl(event89Asset.url)} />
      </Helmet>

      <div className="container-editorial pt-28 md:pt-36 pb-24 md:pb-36">
        <Link
          to={anchorHref("/")}
          className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-foreground/60 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {p.back}
        </Link>

        <header className="max-w-3xl mt-10 mb-16 md:mb-24">
          <p className="eyebrow">{p.eyebrow}</p>
          <h1 className="font-serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-balance">
            {p.titleStart}
            <span className="italic text-facade"> {p.titleAccent}</span>
          </h1>
          <p className="mt-8 text-foreground/70 leading-relaxed font-light text-lg">
            {p.intro}
          </p>
        </header>

        <div
          className="relative aspect-[16/10] overflow-hidden rounded-sm mb-20 md:mb-28"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <Carousel className="h-full" opts={{ loop: true }}>
            <CarouselContent className="h-full">
              {eventPhotos.map((photo, i) => (
                <CarouselItem key={photo} className="h-full">
                  <img
                    src={photo}
                    alt={`${p.carouselAlt} — ${i + 1}`}
                    className="w-full h-full object-cover"
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

        <section className="mb-20 md:mb-28">
          <h2 className="font-serif-display text-3xl md:text-5xl leading-[1.08] text-balance mb-12">
            {p.servicesTitle}
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {p.services.map((s) => (
              <div
                key={s.title}
                className="border-t border-border pt-6"
              >
                <h3 className="font-serif-display text-2xl md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center mb-20 md:mb-28">
          <div className="md:col-span-7">
            <div
              className="relative aspect-[16/10] overflow-hidden rounded-sm"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <img
                src={chapelAsset.url}
                alt={p.carouselAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                width={1920}
                height={1200}
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow">{t.experiences.chapelEyebrow}</p>
            <h2 className="font-serif-display text-3xl md:text-5xl mt-4 leading-[1.08] text-balance">
              {t.experiences.chapelTitle}
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed font-light text-lg">
              {t.experiences.chapelDesc}
            </p>
          </div>
        </div>

        <section className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif-display text-3xl md:text-5xl leading-[1.08] text-balance">
            {p.ctaTitle}
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed font-light text-lg">
            {p.ctaText}
          </p>
          <a
            href="mailto:geral@pacodobispoboutiquehouse.com"
            className="mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-sm text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            {p.ctaButton}
          </a>
        </section>
      </div>
    </main>
  );
};

export default Events;
