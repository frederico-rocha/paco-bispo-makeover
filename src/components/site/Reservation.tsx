import * as React from "react";

export const Reservation = () => {
  const [checkIn, setCheckIn] = React.useState("");
  const [checkOut, setCheckOut] = React.useState("");
  const [guests, setGuests] = React.useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const base = "https://be.heytravel.net/f6292097-5818-4381-93ef-638650ee44bc";
    const occupation = JSON.stringify([{ room: 1, adults: guests, children: 0 }]);
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      occupation,
    });

    window.open(`${base}?${params.toString()}`, "_blank", "noopener,noreferrer");
  };

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

        <form
          className="mt-14 max-w-4xl mx-auto bg-secondary/50 border border-border p-6 md:p-10 rounded-sm grid md:grid-cols-4 gap-5 items-end"
          onSubmit={handleSubmit}
        >
          <Field
            label="Check-in"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
          <Field
            label="Check-out"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
          <Field
            label="Hóspedes"
            type="number"
            min={1}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary-glow transition-colors text-sm tracking-wide"
          >
            Pedir reserva
          </button>
        </form>

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

const Field = ({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <label className="flex flex-col gap-2">
    <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
      {label}
    </span>
    <input
      {...rest}
      className="h-12 px-4 rounded-sm bg-background border border-border focus:border-primary outline-none transition-colors text-foreground"
    />
  </label>
);
