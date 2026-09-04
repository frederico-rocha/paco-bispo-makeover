import sintraAsset from "@/assets/sintra.jpg.asset.json";
const sintra = sintraAsset.url;

export const Location = () => {
  const points = [
    { d: "5 km", l: "Vila de Sintra" },
    { d: "5 km", l: "Estoril & Cascais" },
    { d: "30 km", l: "Lisboa" },
    { d: "—", l: "Golf & ténis nas imediações" },
  ];
  return (
    <section id="localizacao" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={sintra}
          alt="Serra de Sintra coberta por neblina ao amanhecer"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      <div className="relative container-editorial text-paper">
        <div className="max-w-2xl">
          <p className="eyebrow text-paper/80">Localização</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-balance">
            No coração do
            <span className="italic"> Parque Natural Sintra-Cascais</span>.
          </h2>
          <p className="mt-7 text-paper/80 text-lg leading-relaxed font-light">
            A poucos minutos do Atlântico e da vila mágica de Sintra.
            Estacionamento privativo.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
          {points.map((p) => (
            <div key={p.l} className="border-t border-paper/30 pt-5">
              <div className="font-serif-display text-3xl md:text-4xl text-paper">{p.d}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-paper/70 mt-2">
                {p.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
