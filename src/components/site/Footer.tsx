import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground mt-24">
      <div className="container-narrow py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="flex items-baseline gap-2 mb-6">
            <span className="font-serif text-3xl font-semibold uppercase tracking-tight">Poppy</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-navy-foreground/50 font-semibold">& Partners</span>
          </div>
          <p className="text-sm text-navy-foreground/65 leading-relaxed max-w-sm">
            Partner hukum modern yang mengedepankan transparansi, integritas, dan solusi hukum yang presisi untuk Anda.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Terpercaya • Modern • Elegan</span>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-5">Navigasi</p>
            <ul className="space-y-3 text-sm text-navy-foreground/75">
              <li><Link to="/tentang" className="hover:text-gold transition-colors">Tentang Kami</Link></li>
              <li><Link to="/layanan" className="hover:text-gold transition-colors">Area Praktik</Link></li>
              <li><Link to="/berita" className="hover:text-gold transition-colors">Berita</Link></li>
              <li><Link to="/analisa" className="hover:text-gold transition-colors">Analisa Hukum</Link></li>
              <li><Link to="/tanya-jawab" className="hover:text-gold transition-colors">Tanya Jawab</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-5">Sumber Daya</p>
            <ul className="space-y-3 text-sm text-navy-foreground/75">
              <li><Link to="/direktori" className="hover:text-gold transition-colors">Direktori Aturan</Link></li>
              <li><Link to="/dokumentasi" className="hover:text-gold transition-colors">Dokumentasi</Link></li>
              <li><Link to="/konsultasi" className="hover:text-gold transition-colors">Konsultasi</Link></li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-5">Lokasi</p>
          <address className="not-italic text-sm text-navy-foreground/75 leading-relaxed">
            Sudirman Central Business District (SCBD)<br />
            Jakarta Selatan 12190<br />
            Indonesia
          </address>
          <p className="mt-5 text-sm text-navy-foreground/75">+62 812 3456 7890</p>
          <p className="text-sm text-navy-foreground/75">hi@poppy-legal.com</p>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="container-narrow py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-navy-foreground/40">
          <p>© {new Date().getFullYear()} Poppy & Partners. Hak cipta dilindungi.</p>
          <p>Modern • Elegan • Terpercaya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
