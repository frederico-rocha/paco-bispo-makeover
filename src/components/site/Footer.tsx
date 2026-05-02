export const Footer = () => {
  return (
    <footer id="contacto" className="bg-ink text-paper py-20">
      <div className="container-editorial grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-serif-display text-3xl">Paço do Bispo</div>
          <div className="text-[0.65rem] tracking-[0.4em] uppercase mt-2 text-paper/60">
            Boutique House
          </div>
          <p className="mt-6 text-paper/70 max-w-sm font-light leading-relaxed">
            Uma casa nobre na reserva natural de Sintra. Tradição, paisagem e
            silêncio, a poucos minutos do Atlântico.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.28em] text-paper/60">Visite</h4>
          <address className="not-italic mt-5 text-paper/85 leading-relaxed font-light">
            Ribeira da Penha Longa<br />
            2710 Sintra, Portugal
          </address>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.28em] text-paper/60">Contacto</h4>
          <ul className="mt-5 space-y-2 text-paper/85 font-light">
            <li><a href="mailto:reservas@pacodobispo.com" className="hover:text-primary-glow">reservas@pacodobispo.com</a></li>
            <li><a href="tel:+351000000000" className="hover:text-primary-glow">+351 000 000 000</a></li>
            <li><a href="#" className="hover:text-primary-glow">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="container-editorial mt-16 pt-8 border-t border-paper/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-paper/50">
        <span>© {new Date().getFullYear()} Paço do Bispo Boutique House</span>
        <span>Sintra · Portugal</span>
      </div>
    </footer>
  );
};
