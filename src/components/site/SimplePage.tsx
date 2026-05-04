import Seo from "@/components/site/Seo";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => (
  <section className="pt-36 lg:pt-44 pb-16 lg:pb-24 bg-paper border-b border-border">
    <div className="container-narrow">
      <p className="eyebrow mb-8">{eyebrow}</p>
      <h1 className="font-serif text-5xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-navy max-w-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-8 text-lg text-foreground/70 max-w-2xl leading-relaxed">{description}</p>
      )}
    </div>
  </section>
);

interface SimplePageProps {
  eyebrow: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  body?: React.ReactNode;
}

const SimplePage = ({ eyebrow, title, description, seoTitle, seoDescription, body }: SimplePageProps) => (
  <>
    <Seo title={seoTitle} description={seoDescription} />
    <PageHeader eyebrow={eyebrow} title={title} description={description} />
    <section className="py-20 lg:py-28">
      <div className="container-narrow">
        {body ?? (
          <div className="max-w-2xl">
            <p className="text-foreground/70 leading-relaxed mb-6">
              Halaman ini sedang dalam pengembangan. Konten lengkap akan tersedia segera.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Untuk pertanyaan atau konsultasi, silakan hubungi kami melalui tombol konsultasi di pojok kanan bawah.
            </p>
          </div>
        )}
      </div>
    </section>
  </>
);

export default SimplePage;
