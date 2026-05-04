import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-24 lg:py-32 bg-paper">
      <div className="container-narrow grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-8">Profil Kami</p>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.05] tracking-tight text-navy">
            Membangun <span className="italic font-light">Keadilan</span> melalui transparansi dan dedikasi.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-6">
          <p className="text-lg leading-relaxed text-foreground/75">
            Poppy & Partners adalah firma hukum modern yang lahir dari visi untuk memberikan akses hukum yang berkualitas, transparan, dan terpercaya bagi masyarakat dan pelaku usaha di Indonesia.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Kami percaya bahwa setiap klien layak mendapatkan perhatian personal dan solusi hukum yang inovatif. Tim ahli kami berdedikasi untuk memberikan hasil terbaik dengan menjunjung tinggi etika profesi dan integritas.
          </p>
          <div className="pt-6 flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/tentang" className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-navy hover:text-gold transition-colors group">
              Profil Firma
              <span className="block h-px w-8 bg-navy group-hover:bg-gold group-hover:w-12 transition-all" />
            </Link>
            <Link to="/layanan" className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-navy hover:text-gold transition-colors group">
              Area Praktik
              <span className="block h-px w-8 bg-navy group-hover:bg-gold group-hover:w-12 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
