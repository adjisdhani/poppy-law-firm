import CountUp from "../CountUp";

const STATS = [
  { value: 1247, label: "Kasus Telah Diselesaikan", suffix: "+" },
  { value: 86, label: "Kasus Sedang Ditangani", suffix: "" },
  { value: 540, label: "Klien Telah Ditangani", suffix: "+" },
  { value: 1000, label: "Target Jumlah Klien", suffix: "+" },
];

const Stats = () => {
  return (
    <section className="bg-navy text-navy-foreground py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="container-narrow relative">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="eyebrow text-navy-foreground/70 mb-6 [&::before]:bg-gold">
            <span>Rekam Jejak</span>
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.05] tracking-tight">
            Angka yang berbicara <span className="italic font-light text-gold">untuk reputasi kami.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {STATS.map((s) => (
            <div key={s.label} className="border-t border-navy-foreground/15 pt-6">
              <div className="font-serif text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-navy-foreground mb-3 leading-none">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gold">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
