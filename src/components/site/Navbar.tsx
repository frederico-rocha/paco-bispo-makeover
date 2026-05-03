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
          : "bg-gradient-to-b from-ink/55 via-ink/25 to-transparent"
      )}
    >
      <nav className="container-editorial flex items-center justify-between h-20">
        <Link
          to="/"
          className={cn(
            "font-serif-display text-xl md:text-2xl leading-none transition-colors",
            scrolled ? "text-foreground hover:text-primary" : "text-paper hover:text-accent"
          )}
        >
          Paço do Bispo
          <span
            className={cn(
              "block text-[0.6rem] tracking-[0.4em] uppercase mt-1 font-sans transition-colors",
              scrolled ? "text-muted-foreground" : "text-paper/80"
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
              "text-sm tracking-wide transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:bg-current after:transition-all";
            const colorCls = scrolled
              ? cn(
                  "hover:text-primary",
                  active ? "text-primary" : "text-foreground/80"
                )
              : cn(
                  "hover:text-accent",
                  active ? "text-accent" : "text-paper/95"
                );
            const underline = active ? "after:w-full" : "after:w-0 hover:after:w-full";
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
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-paper/95 text-ink hover:bg-paper"
          )}
        >
          Reservar
        </a>

        <button
          className={cn(
            "md:hidden transition-colors",
            scrolled ? "text-foreground hover:text-primary" : "text-paper hover:text-accent"
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
                "block transition-colors hover:text-primary",
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
              className="inline-flex justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
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
