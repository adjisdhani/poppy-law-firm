import Seo from "@/components/site/Seo";
import { FileText, Download } from "lucide-react";

const ANALYSES = [
  {
    title: "Panduan Komprehensif: Memahami Kontrak Bisnis di Era Digital",
    type: "Whitepaper",
    size: "2.4 MB",
    date: "Mei 2026"
  },
  {
    title: "Analisa Risiko Hukum Penggunaan AI dalam Operasional Perusahaan",
    type: "Legal Brief",
    size: "1.8 MB",
    date: "April 2026"
  },
  {
    title: "Checklist Kepatuhan: Regulasi Pelindungan Data Pribadi 2024",
    type: "Toolbox",
    size: "0.9 MB",
    date: "Maret 2026"
  }
];

const Analisa = () => {
  return (
    <>
      <Seo 
        title="Analisa Hukum Mendalam" 
        description="Pembahasan mendalam dan edukatif mengenai berbagai aspek hukum oleh tim Poppy & Partners."
      />
      
      <section className="pt-40 pb-20 bg-paper">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Edukasi</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-medium text-navy leading-tight mb-8">
              Analisa Hukum <br />
              <span className="italic font-light text-gold">& Riset.</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Kami menyajikan pembahasan mendalam dan edukatif untuk membantu Anda memahami kompleksitas hukum dengan cara yang sederhana.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32 bg-paper">
        <div className="container-narrow">
          <div className="grid gap-6">
            {ANALYSES.map((item, idx) => (
              <div key={idx} className="group bg-white border border-border p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="bg-navy/5 p-4 rounded-xl text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                    <FileText size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold mb-2">
                      <span>{item.type}</span>
                      <span className="size-1 rounded-full bg-border" />
                      <span className="text-muted-foreground">{item.date}</span>
                    </div>
                    <h2 className="font-serif text-2xl font-medium text-navy group-hover:text-gold transition-colors">
                      {item.title}
                    </h2>
                  </div>
                </div>
                <button className="mt-8 md:mt-0 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-navy border-b border-navy/20 pb-1 hover:border-gold hover:text-gold transition-all">
                  Unduh Dokumen ({item.size}) <Download size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Analisa;
