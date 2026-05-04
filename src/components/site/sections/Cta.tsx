import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="bg-navy text-navy-foreground py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container-narrow relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <p className="eyebrow text-navy-foreground/70 mb-8 [&::before]:bg-gold">
            <span>Mulai Hari Ini</span>
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.05] tracking-tight mb-6">
            Konsultasikan kasus Anda <br />
            <span className="italic font-light text-gold">dengan ketenangan penuh.</span>
          </h2>
          <p className="text-lg text-navy-foreground/70 max-w-xl leading-relaxed">
            Sesi konsultasi awal bersifat rahasia dan tanpa biaya. Tim kami akan menganalisis situasi Anda dan merekomendasikan strategi terbaik.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4">
          <Link
            to="/konsultasi"
            className="bg-gold text-gold-foreground px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-navy-foreground transition-colors text-center"
          >
            Konsultasi Sekarang
          </Link>
          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-navy-foreground/25 text-navy-foreground px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-navy-foreground/10 hover:border-gold transition-all text-center"
          >
            Chat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
