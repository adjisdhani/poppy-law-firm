import { useState } from "react";
import Seo from "@/components/site/Seo";
import { MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const TanyaJawab = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Pertanyaan Anda telah terkirim dan akan segera kami tinjau.");
  };

  return (
    <>
      <Seo 
        title="Tanya Jawab Hukum" 
        description="Kirimkan pertanyaan hukum Anda dan dapatkan jawaban dari tim Poppy & Partners."
      />
      
      <section className="pt-40 pb-20 bg-paper">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Interaksi</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-medium text-navy leading-tight mb-8">
              Tanya Jawab <br />
              <span className="italic font-light text-gold">Hukum.</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Memiliki pertanyaan hukum yang mengganjal? Ajukan di sini. Tim kami akan meninjau dan menjawab pertanyaan yang terpilih untuk edukasi publik.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32 bg-paper">
        <div className="container-narrow grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="space-y-12">
              <div className="border-l-2 border-gold pl-8">
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">Bagaimana cara kerja halaman ini?</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Semua pertanyaan yang masuk akan melalui proses moderasi oleh admin Poppy & Partners. Pertanyaan yang bersifat edukatif dan relevan bagi publik akan kami tampilkan beserta jawabannya di halaman ini secara anonim.
                </p>
              </div>

              <div className="bg-white border border-border p-8 md:p-12 shadow-elegant rounded-2xl">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy">Nama (Opsional)</label>
                        <input 
                          type="text" 
                          placeholder="Anonim"
                          className="w-full bg-paper border-border focus:border-gold focus:ring-0 transition-colors p-4 rounded-lg outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy">Email (Untuk Notifikasi)</label>
                        <input 
                          type="email" 
                          required
                          placeholder="email@anda.com"
                          className="w-full bg-paper border-border focus:border-gold focus:ring-0 transition-colors p-4 rounded-lg outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy">Pertanyaan Anda</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Tuliskan pertanyaan hukum Anda secara detail di sini..."
                        className="w-full bg-paper border-border focus:border-gold focus:ring-0 transition-colors p-4 rounded-lg outline-none resize-none"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-navy text-white py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-gold-foreground transition-all flex items-center justify-center gap-3"
                    >
                      Kirim Pertanyaan <Send size={14} />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 animate-fade-in">
                    <CheckCircle2 size={64} className="text-gold mx-auto mb-6" />
                    <h3 className="font-serif text-3xl font-medium text-navy mb-4">Terima Kasih!</h3>
                    <p className="text-foreground/70 leading-relaxed max-w-sm mx-auto">
                      Pertanyaan Anda telah kami terima. Kami akan segera meninjau dan memberikan notifikasi melalui email jika pertanyaan Anda dijawab.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-10 text-[11px] font-bold uppercase tracking-[0.2em] text-navy hover:text-gold transition-colors"
                    >
                      Kirim Pertanyaan Lain
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9 space-y-10">
            <div className="bg-navy p-10 text-white rounded-2xl">
              <MessageSquare size={32} className="text-gold mb-6" />
              <h3 className="font-serif text-2xl font-medium mb-4 text-balance">Butuh jawaban segera?</h3>
              <p className="text-navy-foreground/70 text-sm leading-relaxed mb-8">
                Halaman Tanya Jawab ini ditujukan untuk edukasi umum. Jika Anda membutuhkan konsultasi hukum privat dan mendalam, silakan hubungi kami langsung.
              </p>
              <a 
                href="https://wa.me/628123456789" 
                className="inline-block w-full bg-gold text-gold-foreground py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-center hover:bg-white hover:text-navy transition-colors"
              >
                Konsultasi Privat
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default TanyaJawab;
