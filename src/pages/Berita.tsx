import Seo from "@/components/site/Seo";
import { Link } from "react-router-dom";
import { getAssetUrl } from "@/lib/utils";

const POSTS = [
  {
    id: 1,
    category: "Analisa Hukum",
    date: "4 Mei 2026",
    title: "Poppy: Keadilan Restoratif dalam Kasus ITE di Indonesia",
    excerpt: "Pendapat Poppy mengenai urgensi pendekatan restoratif dalam menangani sengketa pencemaran nama baik di ruang digital. Mengapa kita perlu melihat melampaui hukuman penjara?",
    author: "Poppy",
    image: "/news-1.jpg"
  },
  {
    id: 2,
    category: "Isu Terkini",
    date: "1 Mei 2026",
    title: "Catatan Poppy terhadap RUU Perlindungan Data Pribadi",
    excerpt: "Analisis mendalam mengenai kesiapan infrastruktur hukum kita menghadapi ancaman siber yang semakin masif. Apakah regulasi baru cukup untuk melindungi kita?",
    author: "Poppy",
    image: "/news-2.jpg"
  },
  {
    id: 3,
    category: "Putusan Hukum",
    date: "25 April 2026",
    title: "Tinjauan Kritis Poppy atas Putusan MK Terkait Sengketa Lahan",
    excerpt: "Bagaimana putusan terbaru ini berdampak pada hak kepemilikan masyarakat adat dan kepastian investasi. Poppy mengupas tuntas implikasinya.",
    author: "Poppy",
    image: "/news-3.jpg"
  },
  {
    id: 4,
    category: "Gaya Hidup Hukum",
    date: "20 April 2026",
    title: "Tips Memilih Partner Hukum yang Tepat untuk Bisnis Anda",
    excerpt: "Bukan hanya soal sertifikat, tapi soal chemistry dan integritas. Poppy berbagi rahasia di balik kolaborasi hukum yang sukses.",
    author: "Poppy",
    image: "/news-4.jpg"
  }
];

const Berita = () => {
  return (
    <>
      <Seo 
        title="Berita & Wawasan Hukum" 
        description="Kumpulan artikel, komentar, dan pendapat Poppy terkait isu hukum terkini dan putusan pengadilan di Indonesia."
      />
      
      <section className="pt-40 pb-20 bg-paper">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Wawasan</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-medium text-navy leading-tight mb-8">
              Portal Berita <br />
              <span className="italic font-light text-gold">Poppy & Partners.</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Komentar mendalam dan analisa kritis terhadap isu hukum terkini dari perspektif Poppy.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32 bg-paper">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {POSTS.map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="aspect-[16/9] bg-navy/5 overflow-hidden mb-8">
                  <div className="w-full h-full bg-navy/10 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-navy/20 font-serif italic">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold mb-4">
                  <span>{post.category}</span>
                  <span className="block h-px w-6 bg-gold/50" />
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="font-serif text-3xl font-medium text-navy leading-snug mb-4 group-hover:text-gold transition-colors">
                  <Link to={`/berita/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/berita/${post.id}`}
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy group-hover:text-gold transition-colors inline-flex items-center gap-2"
                >
                  Baca Selengkapnya <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Berita;
