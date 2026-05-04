import { useState } from "react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import Seo from "@/components/site/Seo";
import { PageHeader } from "@/components/site/SimplePage";

// OWASP-aligned input validation: trim, length limits, type checks.
const schema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(100, "Maksimal 100 karakter"),
  email: z.string().trim().email("Email tidak valid").max(255),
  phone: z.string().trim().min(7, "Nomor terlalu pendek").max(20).regex(/^[0-9+\-\s()]+$/, "Format nomor tidak valid"),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(10, "Pesan minimal 10 karakter").max(2000, "Maksimal 2000 karakter"),
});

const Konsultasi = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({
        title: "Periksa kembali isian Anda",
        description: parsed.error.issues[0]?.message ?? "Validasi gagal",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Permintaan terkirim",
        description: "Tim kami akan menghubungi Anda dalam 1×24 jam kerja.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      <Seo
        title="Konsultasi — Poppy & Partners"
        description="Mulai konsultasi hukum rahasia dan tanpa biaya bersama tim Poppy & Partners."
      />
      <PageHeader
        eyebrow="Konsultasi"
        title="Mulai dialog rahasia dengan tim kami."
        description="Sesi konsultasi awal bersifat rahasia dan tanpa biaya. Mohon isi formulir berikut — tim kami akan merespons dalam 1×24 jam kerja."
      />
      <section className="py-20 lg:py-28">
        <div className="container-narrow grid lg:grid-cols-12 gap-12 lg:gap-20">
          <form onSubmit={onSubmit} className="lg:col-span-7 space-y-6" noValidate>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field name="name" label="Nama Lengkap" required />
              <Field name="email" label="Email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field name="phone" label="No. WhatsApp / Telepon" required />
              <Field name="subject" label="Subjek" required />
            </div>
            <Field name="message" label="Uraian Singkat" textarea required />
            <p className="text-xs text-muted-foreground">
              Dengan mengirim formulir, Anda menyetujui informasi diproses sesuai kebijakan privasi kami. Komunikasi ini bersifat rahasia.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="bg-navy text-navy-foreground px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-gold-foreground transition-colors disabled:opacity-60"
            >
              {submitting ? "Mengirim…" : "Kirim Permintaan"}
            </button>
          </form>

          <aside className="lg:col-span-4 lg:col-start-9 space-y-10">
            <InfoBlock label="Telepon" value="+62 812 3456 7890" />
            <InfoBlock label="Email" value="hi@poppy-legal.com" />
            <InfoBlock label="WhatsApp" value="+62 812 3456 7890" />
            <InfoBlock label="Kantor" value={"Sudirman Central Business District (SCBD)\nJakarta Selatan 12190"} />
          </aside>
        </div>
      </section>
    </>
  );
};

const Field = ({
  name, label, type = "text", required, textarea,
}: { name: string; label: string; type?: string; required?: boolean; textarea?: boolean }) => (
  <label className="block">
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy/60 mb-2 block">
      {label}{required && <span className="text-gold ml-1">*</span>}
    </span>
    {textarea ? (
      <textarea
        name={name}
        required={required}
        rows={6}
        maxLength={2000}
        className="w-full bg-transparent border-b border-border focus:border-navy focus:outline-none py-3 text-base text-navy resize-none transition-colors"
      />
    ) : (
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        autoComplete="off"
        className="w-full bg-transparent border-b border-border focus:border-navy focus:outline-none py-3 text-base text-navy transition-colors"
      />
    )}
  </label>
);

const InfoBlock = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">{label}</p>
    <p className="text-base text-navy leading-relaxed whitespace-pre-line">{value}</p>
  </div>
);

export default Konsultasi;
