import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    initials: "B.P",
    name: "Budi P.",
    case: "Sengketa Lahan Keluarga",
    quote: "Sangat terbantu dengan penjelasan Poppy yang sangat jernih. Masalah keluarga kami yang sudah bertahun-tahun buntu akhirnya selesai dengan damai.",
  },
  {
    initials: "S.H",
    name: "Siska H.",
    case: "Legalitas Startup",
    quote: "Pendampingan hukum yang luar biasa untuk startup saya. Poppy memberikan saran yang bukan hanya aman secara legal, tapi juga strategis bagi bisnis.",
  },
  {
    initials: "A.W",
    name: "Anton W.",
    case: "Kasus Pencemaran Nama Baik",
    quote: "Integritas dan dedikasi Poppy sangat terasa sejak pertemuan pertama. Saya merasa tenang karena didampingi oleh ahli yang benar-benar peduli.",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[i];

  return (
    <section className="py-24 lg:py-32 bg-paper">
      <div className="container-narrow">
        <p className="eyebrow mb-12">Testimoni Klien</p>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <Quote className="size-12 text-gold" strokeWidth={1} />
          </div>

          <div className="lg:col-span-8">
            <blockquote
              key={i}
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-[1.3] text-navy text-balance animate-fade-in"
            >
              "{t.quote}"
            </blockquote>

            <div key={`meta-${i}`} className="mt-10 flex items-center gap-5 animate-fade-in">
              <div className="size-14 rounded-full bg-navy text-navy-foreground flex items-center justify-center font-serif text-lg font-medium">
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-navy">{t.name}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{t.case}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex lg:flex-col gap-4 lg:items-end">
            <button
              onClick={() => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="size-12 border border-border flex items-center justify-center text-navy hover:bg-navy hover:text-navy-foreground hover:border-navy transition-colors"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => setI((p) => (p + 1) % TESTIMONIALS.length)}
              className="size-12 border border-border flex items-center justify-center text-navy hover:bg-navy hover:text-navy-foreground hover:border-navy transition-colors"
              aria-label="Selanjutnya"
            >
              <ChevronRight className="size-4" />
            </button>
            <div className="lg:mt-4 flex lg:flex-col gap-2 items-center lg:items-end ml-auto lg:ml-0">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Testimoni ${idx + 1}`}
                  className={`h-px transition-all ${idx === i ? "w-10 bg-gold" : "w-6 bg-border"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
