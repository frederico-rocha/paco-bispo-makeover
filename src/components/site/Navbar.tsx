import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <nav className="container-editorial flex items-center justify-between h-20">
        <a
          href="#top"
          className={cn(
            "font-serif-display text-xl md:text-2xl leading-none transition-colors",
            scrolled ? "text-foreground" : "text-[#c49645]"
          )}
        >
          Paço do Bispo
          <span className="block text-[0.6rem] tracking-[0.4em] uppercase mt-1 font-sans opacity-80">
            Boutique House
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:text-primary",
                  scrolled ? "text-foreground/80" : "text-[#c49645]"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reservas"
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
          className={cn("md:hidden", scrolled ? "text-foreground" : "text-[#c49645]")}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="container-editorial py-6 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block text-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#reservas"
              className="inline-flex justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground"
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
