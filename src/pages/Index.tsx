import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Services } from "@/components/portfolio/Services";
import { Work } from "@/components/portfolio/Work";
import { Pricing } from "@/components/portfolio/Pricing";
import { CTA } from "@/components/portfolio/CTA";
import { ContactLinks } from "@/components/portfolio/ContactLinks";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Pricing />
      <CTA />
      <ContactLinks />
      <Footer />
    </main>
  );
};

export default Index;
