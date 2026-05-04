import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Beranda" },
  { to: "/tentang", label: "Tentang Kami" },
  { to: "/layanan", label: "Area Praktik" },
  { to: "/berita", label: "Berita" },
  { to: "/analisa", label: "Analisa Hukum" },
  { to: "/tanya-jawab", label: "Tanya Jawab" },
  { to: "/direktori", label: "Direktori Aturan" },
  { to: "/dokumentasi", label: "Dokumentasi" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-paper/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container-narrow flex items-center justify-between py-5 lg:py-6">
          <Link to="/" className="flex items-baseline gap-2 group" aria-label="Poppy & Partners — Beranda">
            <span className="font-serif text-2xl md:text-[28px] font-semibold tracking-tight uppercase text-navy transition-colors">
              Poppy
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-navy/50 font-semibold hidden sm:inline">
              & Partners
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-9 text-xs font-semibold tracking-[0.18em] uppercase text-navy/65">
            {NAV.slice(0, 5).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative transition-colors hover:text-navy ${isActive ? "text-navy" : ""}`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/konsultasi"
              className="hidden md:inline-flex bg-navy text-navy-foreground px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-gold hover:text-gold-foreground transition-colors duration-300"
            >
              Konsultasi
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 text-navy hover:text-gold transition-colors p-2 -mr-2"
              aria-label="Buka menu"
            >
              <span className="hidden md:inline text-[11px] font-bold uppercase tracking-[0.18em]">Menu</span>
              <Menu className="size-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-navy text-navy-foreground animate-menu-in overflow-y-auto">
          <div className="container-narrow flex items-center justify-between py-5 lg:py-6">
            <span className="font-serif text-2xl md:text-[28px] font-semibold tracking-tight uppercase">
              Poppy
              <span className="text-[10px] ml-2 text-navy-foreground/50">& Partners</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 hover:text-gold transition-colors p-2 -mr-2"
              aria-label="Tutup menu"
            >
              <span className="hidden md:inline text-[11px] font-bold uppercase tracking-[0.18em]">Tutup</span>
              <X className="size-6" strokeWidth={1.5} />
            </button>
          </div>

          <div className="container-narrow grid lg:grid-cols-12 gap-12 pt-12 lg:pt-20 pb-20">
            <nav className="lg:col-span-8 flex flex-col gap-2 lg:gap-3">
              {NAV.map((item, i) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className={({ isActive }) =>
                    `font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight transition-colors hover:text-gold animate-fade-in ${
                      isActive ? "text-gold" : "text-navy-foreground"
                    }`
                  }
                >
                  <span className="inline-flex items-baseline gap-4">
                    <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-navy-foreground/40">
                      0{i + 1}
                    </span>
                    {item.label}
                  </span>
                </NavLink>
              ))}
            </nav>

            <aside className="lg:col-span-4 lg:border-l lg:border-navy-foreground/15 lg:pl-12 flex flex-col gap-10">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-4">Lokasi Kami</p>
                <p className="font-serif text-lg leading-relaxed text-navy-foreground/80">
                  Sudirman Central Business District (SCBD),<br />Jakarta Selatan 12190<br />Indonesia
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-4">Hubungi</p>
                <p className="font-serif text-lg leading-relaxed text-navy-foreground/80">
                  +62 812 3456 7890<br />hi@poppy-legal.com
                </p>
              </div>
              <Link
                to="/konsultasi"
                className="mt-auto inline-flex items-center justify-center bg-gold text-gold-foreground px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-navy-foreground transition-colors"
              >
                Mulai Konsultasi
              </Link>
            </aside>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
