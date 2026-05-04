import Seo from "@/components/site/Seo";
import { Users, Target, Shield } from "lucide-react";
import { getAssetUrl } from "@/lib/utils";

const TEAM = [
  { name: "Poppy, S.H., M.H.", role: "Founding Partner", image: "/team-poppy.jpg" },
  // { name: "Andi Wijaya, S.H.", role: "Senior Associate", image: "/team-2.jpg" },
  // { name: "Siska Pratama, S.H.", role: "Associate", image: "/team-3.jpg" },
];

const Tentang = () => {
  return (
    <>
      <Seo 
        title="Tentang Kami" 
        description="Kenali profil, visi, misi, dan tim ahli di balik Poppy & Partners."
      />
      
      <section className="pt-40 pb-20 bg-paper">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Profil</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-medium text-navy leading-tight mb-8">
              Mengenal <br />
              <span className="italic font-light text-gold">Poppy & Partners.</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Kami adalah lebih dari sekadar firma hukum; kami adalah partner strategis yang berkomitmen untuk menjaga keadilan dan integritas dalam setiap langkah hukum Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-border">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="space-y-6">
              <div className="bg-navy/5 size-16 flex items-center justify-center rounded-2xl text-navy">
                <Target size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-navy">Visi Kami</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Menjadi firma hukum terdepan yang mengintegrasikan kearifan lokal dengan standar profesionalisme internasional.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-navy/5 size-16 flex items-center justify-center rounded-2xl text-navy">
                <Shield size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-navy">Misi Kami</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Memberikan solusi hukum yang inovatif, transparan, dan terjangkau bagi semua lapisan masyarakat.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-navy/5 size-16 flex items-center justify-center rounded-2xl text-navy">
                <Users size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-navy">Filosofi Tim</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Bekerja dengan empati, integritas, dan dedikasi penuh untuk mencapai keadilan yang substansial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-paper">
        <div className="container-narrow">
          <p className="eyebrow mb-16">Tim Kami</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {TEAM.map((member, idx) => (
              <div key={idx} className="group">
                <div className="aspect-[3/4] bg-navy/5 overflow-hidden rounded-2xl mb-6 relative">
                  {idx === 0 ? (
                    <img 
                      src={getAssetUrl(member.image)} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-navy/20 font-serif italic">
                      Photo Profile
                    </div>
                  )}
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-navy group-hover:text-gold transition-colors">{member.name}</h3>
                <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tentang;
