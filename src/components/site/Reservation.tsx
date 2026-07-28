export const Reservation = () => {
  return (
    <section id="reservas" className="py-28 md:py-40 bg-background">
      <div className="container-editorial">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Reservas</p>
          <h2 className="font-serif-display text-4xl md:text-7xl mt-6 leading-[1.02] text-balance">
            A sua estadia
            <span className="italic"> começa aqui</span>.
          </h2>
          <p className="mt-7 text-foreground/70 text-lg font-light">
            Verifique disponibilidade e tarifas. Respondemos em poucas horas.
          </p>
        </div>

        <div className="mt-14 max-w-4xl mx-auto bg-secondary/50 border border-border p-6 md:p-10 rounded-sm text-center">
          <p className="text-foreground/70 text-lg font-light">
            As reservas são geridas na nossa plataforma de reservas. Verifique disponibilidade e tarifas em tempo real.
          </p>
          <a
            href="https://be.heytravel.net/f6292097-5818-4381-93ef-638650ee44bc?checkIn=2026-07-29&occupation=%5B%7B%22room%22%3A1%2C%22adults%22%3A2%2C%22children%22%3A0%7D%5D&checkOut=2026-07-31"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary-glow transition-colors text-sm tracking-wide mt-8"
          >
            Reservar agora
          </a>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Ou contacte-nos diretamente em{" "}
          <a className="text-primary underline-offset-4 hover:underline" href="mailto:reservas@pacodobispo.com">
            reservas@pacodobispo.com
          </a>
        </p>
      </div>
    </section>
  );
};
