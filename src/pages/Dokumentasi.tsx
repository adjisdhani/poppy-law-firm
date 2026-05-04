import Seo from "@/components/site/Seo";
import { getAssetUrl } from "@/lib/utils";

const GALLERY = [
  { title: "Seminar Hukum Digital 2024", type: "Event", image: "/doc-1.jpg" },
  { title: "Kunjungan ke Pengadilan Negeri", type: "Activity", image: "/doc-2.jpg" },
  { title: "Workshop CSR & Hukum Lingkungan", type: "Workshop", image: "/doc-3.jpg" },
  { title: "Ulang Tahun Poppy & Partners ke-5", type: "Internal", image: "/doc-4.jpg" },
  { title: "Sesi Konsultasi Pro-Bono Masyarakat", type: "Social", image: "/doc-5.jpg" },
  { title: "Webinar: Startup & Legalitas", type: "Webinar", image: "/doc-6.jpg" },
];

const Dokumentasi = () => {
  return (
    <>
      <Seo 
        title="Dokumentasi Kegiatan" 
        description="Galeri foto dan video berbagai kegiatan, seminar, dan aktivitas Poppy & Partners."
      />
      
      <section className="pt-40 pb-20 bg-paper">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Aktivitas</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-medium text-navy leading-tight mb-8">
              Jejak Langkah <br />
              <span className="italic font-light text-gold">Kami.</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Melihat lebih dekat kegiatan kami dalam membangun kesadaran hukum dan berinteraksi dengan komunitas.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32 bg-paper">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY.map((item, idx) => (
              <div key={idx} className="group relative aspect-square overflow-hidden rounded-2xl bg-navy/5">
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-8">
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-2">{item.type}</p>
                  <h3 className="text-white font-serif text-2xl font-medium">{item.title}</h3>
                </div>
                <div className="w-full h-full flex items-center justify-center text-navy/10 font-serif italic text-sm p-4 text-center">
                  Dokumentasi Foto: {item.title}
                </div>
                {/* Image placeholder behavior */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-colors duration-500 z-20 pointer-events-none rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dokumentasi;
