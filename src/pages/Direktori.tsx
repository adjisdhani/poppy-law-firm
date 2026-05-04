import { useState } from "react";
import Seo from "@/components/site/Seo";
import { Search, Scale, ExternalLink } from "lucide-react";

const LAWS = [
  { title: "Undang-Undang No. 1 Tahun 2024", category: "Informasi & Transaksi Elektronik", year: "2024" },
  { title: "Undang-Undang No. 27 Tahun 2022", category: "Pelindungan Data Pribadi", year: "2022" },
  { title: "Undang-Undang No. 11 Tahun 2020", category: "Cipta Kerja", year: "2020" },
  { title: "Undang-Undang No. 16 Tahun 2019", category: "Perkawinan", year: "2019" },
  { title: "Kitab Undang-Undang Hukum Perdata", category: "Hukum Umum", year: "-" },
  { title: "Kitab Undang-Undang Hukum Pidana", category: "Hukum Umum", year: "-" },
];

const Direktori = () => {
  const [search, setSearch] = useState("");

  const filteredLaws = LAWS.filter(law => 
    law.title.toLowerCase().includes(search.toLowerCase()) || 
    law.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Seo 
        title="Direktori Aturan Hukum" 
        description="Referensi hukum lengkap dan terupdate yang bisa dicari dengan mudah."
      />
      
      <section className="pt-40 pb-20 bg-paper border-b border-border">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Referensi</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-medium text-navy leading-tight mb-8">
              Direktori <br />
              <span className="italic font-light text-gold">Aturan Hukum.</span>
            </h1>
            <div className="relative mt-12">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/40" size={20} />
              <input 
                type="text" 
                placeholder="Cari UU, Peraturan, atau Kata Kunci..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-border focus:border-gold focus:ring-0 transition-all p-6 pl-16 rounded-2xl outline-none shadow-elegant text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-paper min-h-[60vh]">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLaws.length > 0 ? (
              filteredLaws.map((law, idx) => (
                <div key={idx} className="bg-white border border-border p-8 rounded-2xl hover:border-gold hover:shadow-elegant transition-all group flex flex-col justify-between">
                  <div>
                    <Scale size={24} className="text-gold mb-6" />
                    <h3 className="font-serif text-xl font-medium text-navy mb-2 group-hover:text-gold transition-colors">{law.title}</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">{law.category} • {law.year}</p>
                  </div>
                  <button className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-navy/60 group-hover:text-navy transition-colors">
                    Lihat Selengkapnya <ExternalLink size={12} />
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-xl text-muted-foreground italic">Tidak ada aturan yang cocok dengan pencarian Anda.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Direktori;
