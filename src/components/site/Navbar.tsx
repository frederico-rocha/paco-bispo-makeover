import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#casa", label: "A Casa" },
  { href: "/#quartos", label: "Quartos" },
  { href: "/galeria", label: "Galeria" },
  { href: "/#experiencias", label: "Experiências" },
  { href: "/#localizacao", label: "Sintra" },
  { href: "/#contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.slice(1);
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60"
          : "bg-gradient-to-b from-ink/75 via-ink/45 to-transparent"
      )}
    >
      <nav className="container-editorial flex items-center justify-between h-20">
        <Link
          to="/"
          className={cn(
            "font-serif-display text-xl md:text-2xl leading-none transition-colors rounded-sm",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            scrolled
              ? "text-foreground hover:text-primary focus-visible:ring-primary focus-visible:ring-offset-background"
              : "text-paper hover:text-paper focus-visible:ring-paper focus-visible:ring-offset-ink focus-visible:[box-shadow:0_0_0_1px_hsl(var(--ink))]"
          )}
        >
          Paço do Bispo
          <span
            className={cn(
              "block text-[0.6rem] tracking-[0.4em] uppercase mt-1 font-sans transition-colors",
              scrolled ? "text-muted-foreground" : "text-paper"
            )}
          >
            Boutique House
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => {
            const active = isActive(l.href);
            const isRoute = !l.href.startsWith("/#");
            const base =
              "text-sm tracking-wide transition-colors relative rounded-sm px-1 py-1 after:content-[''] after:absolute after:left-1 after:-bottom-0.5 after:h-px after:bg-current after:transition-all focus:outline-none focus-visible:ring-2";
            const colorCls = scrolled
              ? cn(
                  "hover:text-foreground focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background after:bg-primary",
                  active ? "text-foreground" : "text-foreground/80"
                )
              : cn(
                  "hover:text-paper focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
                  active ? "text-paper" : "text-paper"
                );
            const underline = active ? "after:w-[calc(100%-0.5rem)]" : "after:w-0 hover:after:w-[calc(100%-0.5rem)]";
            const cls = cn(base, colorCls, underline);
            return (
              <li key={l.href}>
                {isRoute ? (
                  <Link to={l.href} className={cls}>
                    {l.label}
                  </Link>
                ) : (
                  <a href={l.href} className={cls}>
                    {l.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <a
          href="/#reservas"
          className={cn(
            "hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-sm transition-all duration-300",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary focus-visible:ring-offset-background"
              : "bg-paper/95 text-ink hover:bg-paper focus-visible:ring-accent focus-visible:ring-offset-ink"
          )}
        >
          Reservar
        </a>

        <button
          className={cn(
            "md:hidden transition-colors rounded-sm p-1",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            scrolled
              ? "text-foreground hover:text-primary focus-visible:ring-primary focus-visible:ring-offset-background"
              : "text-paper hover:text-paper focus-visible:ring-paper focus-visible:ring-offset-ink"
          )}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="container-editorial py-6 flex flex-col gap-5">
            {links.map((l) => {
              const active = isActive(l.href);
              const isRoute = !l.href.startsWith("/#");
              const cls = cn(
                "block transition-colors rounded-sm px-1 py-1 hover:text-primary",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                active ? "text-primary" : "text-foreground/80"
              );
              return (
                <li key={l.href}>
                  {isRoute ? (
                    <Link to={l.href} className={cls} onClick={() => setOpen(false)}>
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className={cls} onClick={() => setOpen(false)}>
                      {l.label}
                    </a>
                  )}
                </li>
              );
            })}
            <a
              href="/#reservas"
              className="inline-flex justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() => setOpen(false)}
            >
              Reservar
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};
