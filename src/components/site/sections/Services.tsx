import { Link } from "react-router-dom";
import { Building2, Scale, FileSignature, Briefcase, Landmark, ShieldCheck } from "lucide-react";

const SERVICES = [
  { icon: Building2, title: "Hukum Perusahaan", desc: "Solusi legal komprehensif untuk operasional bisnis, kepatuhan, dan tata kelola perusahaan." },
  { icon: Scale, title: "Litigasi & Sengketa", desc: "Pendampingan hukum yang tangguh dalam penyelesaian sengketa perdata, pidana, maupun niaga." },
  { icon: FileSignature, title: "Hukum Keluarga", desc: "Layanan hukum sensitif dan profesional untuk masalah pernikahan, waris, dan hak asuh." },
  { icon: Briefcase, title: "Hukum Ketenagakerjaan", desc: "Navigasi regulasi ketenagakerjaan, kontrak kerja, dan penyelesaian perselisihan hubungan industrial." },
  { icon: Landmark, title: "Properti & Pertanahan", desc: "Legalitas aset, sengketa lahan, dan pendampingan transaksi real estat." },
  { icon: ShieldCheck, title: "Konsultasi Strategis", desc: "Analisis risiko hukum dan pendapat hukum (legal opinion) untuk keputusan krusial Anda." },
];

const Services = () => {
  return (
    <section className="py-24 lg:py-32 bg-paper">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Area Praktik</p>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.05] tracking-tight text-navy">
              Spesialisasi yang <span className="italic font-light">menyeluruh.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-foreground/70 leading-relaxed">
              Enam pilar praktik yang saling melengkapi, dirancang untuk melindungi kepentingan korporasi pada setiap fase pertumbuhan.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {SERVICES.map((s) => (
            <Link
              to="/layanan"
              key={s.title}
              className="group relative p-8 lg:p-10 border-b border-r border-border bg-background hover:bg-navy transition-colors duration-500"
            >
              <s.icon className="size-8 text-navy group-hover:text-gold transition-colors duration-500 mb-8" strokeWidth={1.25} />
              <h3 className="font-serif text-2xl font-medium text-navy group-hover:text-navy-foreground transition-colors duration-500 mb-3">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-navy-foreground/70 transition-colors duration-500">
                {s.desc}
              </p>
              <span className="absolute bottom-8 right-8 text-[11px] font-bold uppercase tracking-[0.2em] text-navy/40 group-hover:text-gold transition-colors">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
