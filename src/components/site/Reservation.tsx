import * as React from "react";
import { useI18n } from "@/i18n/LanguageContext";

export const Reservation = () => {
  const { t } = useI18n();
  const r = t.reservation;
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
          <p className="eyebrow">{r.eyebrow}</p>
          <h2 className="font-serif-display text-4xl md:text-7xl mt-6 leading-[1.02] text-balance">
            {r.titleStart}
            <span className="italic"> {r.titleAccent}</span>.
          </h2>
          <p className="mt-7 text-foreground/70 text-lg font-light">
            {r.subtitle}
          </p>
        </div>

        <form
          className="mt-14 max-w-4xl mx-auto bg-secondary/50 border border-border p-6 md:p-10 rounded-sm grid md:grid-cols-4 gap-5 items-end"
          onSubmit={handleSubmit}
        >
          <Field
            label={r.checkIn}
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
          <Field
            label={r.checkOut}
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
          <Field
            label={r.guests}
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
            {r.submit}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {r.contactUs}{" "}
          <a className="text-primary underline-offset-4 hover:underline" href="mailto:geral@pacodobispoboutiquehouse.com">
            geral@pacodobispoboutiquehouse.com
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
