import Seo from "@/components/site/Seo";
import Hero from "@/components/site/sections/Hero";
import About from "@/components/site/sections/About";
import Stats from "@/components/site/sections/Stats";
import Services from "@/components/site/sections/Services";
import News from "@/components/site/sections/News";
import Testimonials from "@/components/site/sections/Testimonials";
import Cta from "@/components/site/sections/Cta";

const Index = () => {
  return (
    <>
      <Seo
        title="Poppy & Partners — Solusi Hukum Modern, Elegan & Terpercaya"
        description="Website profesional Poppy & Partners. Partner hukum terpercaya dengan layanan clean, premium, dan kredibel untuk segala kebutuhan hukum Anda."
      />
      <Hero />
      <About />
      <Stats />
      <Services />
      <News />
      <Testimonials />
      <Cta />
    </>
  );
};

export default Index;
