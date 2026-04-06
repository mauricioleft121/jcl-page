import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import CategoriesSection from "@/components/CategoriesSection";
import ServicesSection from "@/components/ServicesSection";
import InstitutionalSection from "@/components/InstitutionalSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TrustSection from "@/components/TrustSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    document.title = "JCL Empilhadeiras | Venda e Assistência Técnica em São Paulo";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Empilhadeiras elétricas, a combustão e transpaleteiras JCL. Venda e assistência técnica em São Paulo. Solicite um orçamento.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <TopBar />
      <NavBar />
      <Hero />
      <StatsStrip />
      <CategoriesSection />
      <ServicesSection />
      <InstitutionalSection />
      <DifferentialsSection />
      <TrustSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
