import { Link } from "react-router-dom";

const ARTICLES = [
  {
    category: "Analisa Hukum",
    date: "4 Mei 2026",
    title: "Poppy: Keadilan Restoratif dalam Kasus ITE di Indonesia",
    excerpt: "Pendapat Poppy mengenai urgensi pendekatan restoratif dalam menangani sengketa pencemaran nama baik di ruang digital.",
  },
  {
    category: "Isu Terkini",
    date: "1 Mei 2026",
    title: "Catatan Poppy terhadap RUU Perlindungan Data Pribadi",
    excerpt: "Analisis mendalam mengenai kesiapan infrastruktur hukum kita menghadapi ancaman siber yang semakin masif.",
  },
  {
    category: "Putusan Hukum",
    date: "25 April 2026",
    title: "Tinjauan Kritis Poppy atas Putusan MK Terkait Sengketa Lahan",
    excerpt: "Bagaimana putusan terbaru ini berdampak pada hak kepemilikan masyarakat adat dan kepastian investasi.",
  },
];

const News = () => {
  return (
    <section className="py-24 lg:py-32 bg-stone-muted">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow mb-6">Wawasan Hukum</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-[1.05] tracking-tight text-navy">
              Berita & analisa terbaru.
            </h2>
          </div>
          <Link
            to="/berita"
            className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-navy hover:text-gold transition-colors group self-start md:self-end"
          >
            Semua Wawasan
            <span className="block h-px w-8 bg-navy group-hover:bg-gold group-hover:w-12 transition-all" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {ARTICLES.map((a) => (
            <Link to="/berita" key={a.title} className="group bg-paper p-8 lg:p-10 flex flex-col hover:bg-background transition-colors">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold mb-6">
                <span>{a.category}</span>
                <span className="block h-px w-6 bg-gold/50" />
                <span className="text-muted-foreground">{a.date}</span>
              </div>
              <h3 className="font-serif text-xl lg:text-2xl font-medium text-navy leading-snug mb-4 group-hover:text-gold transition-colors">
                {a.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                {a.excerpt}
              </p>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy/60 group-hover:text-gold transition-colors">
                Baca Selengkapnya →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
