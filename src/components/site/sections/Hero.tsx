import { Link } from "react-router-dom";
import { getAssetUrl } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative pt-28 lg:pt-0 lg:min-h-screen flex flex-col">
      <div className="grid lg:grid-cols-12 flex-grow">
        {/* Left content */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 lg:py-32 lg:border-r border-border">
          <div className="animate-fade-in">
            <p className="eyebrow mb-10">Modern • Elegan • Terpercaya</p>

            <h1 className="font-serif text-[2.5rem] sm:text-5xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[1.02] tracking-tight text-navy mb-8">
              Keadilan dengan<br />
              <span className="italic font-light text-navy/85">Integritas Tanpa Kompromi.</span>
            </h1>

            <p className="text-base lg:text-lg text-foreground/70 max-w-[55ch] leading-relaxed mb-12 font-normal">
              Poppy & Partners hadir sebagai partner hukum strategis Anda. Kami menggabungkan keahlian mendalam dengan pendekatan modern untuk memberikan solusi hukum yang presisi dan transparan.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/konsultasi"
                className="bg-navy text-navy-foreground px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:shadow-elegant"
              >
                Konsultasi Sekarang
              </Link>
              <Link
                to="/tentang"
                className="border border-border text-navy px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-navy hover:bg-stone-muted transition-all duration-300"
              >
                Tentang Kami
              </Link>
            </div>
          </div>

          {/* Trust anchors */}
          <div className="mt-16 lg:mt-24 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="text-2xl lg:text-3xl font-semibold tabular-nums tracking-tight text-navy mb-1.5">
                500+
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-[0.18em] font-semibold">
                Kasus Selesai
              </div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-semibold tabular-nums tracking-tight text-navy mb-1.5">
                98%
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-[0.18em] font-semibold">
                Tingkat Keberhasilan
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-2xl lg:text-3xl font-semibold tabular-nums tracking-tight text-navy mb-1.5">
                15+
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-[0.18em] font-semibold">
                Tahun Pengalaman
              </div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="hidden lg:block lg:col-span-5 bg-navy relative overflow-hidden min-h-[600px]">
          <img
            src="/hero-poppy.jpg"
            alt="Interior Kantor Poppy & Partners"
            width={1024}
            height={1280}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-85 animate-fade-in-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/40 via-transparent to-navy/60 mix-blend-multiply" />
          <div className="absolute top-10 right-10 bottom-10 left-10 border border-navy-foreground/20 z-10 pointer-events-none flex flex-col justify-end p-8">
            <div className="text-navy-foreground/80 text-[10px] uppercase tracking-[0.2em] font-semibold flex justify-between items-center border-t border-navy-foreground/20 pt-4">
              <span>Poppy & Partners</span>
              <span>SCBD, Jakarta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
