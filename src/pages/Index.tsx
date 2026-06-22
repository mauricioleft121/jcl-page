import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import InstitutionalSection from "@/components/InstitutionalSection";
import TrustSection from "@/components/TrustSection";
import MissionVisionValues from "@/components/MissionVisionValues";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    document.title = "JCL Empilhadeiras | Venda e Assistência Técnica em Ubá - MG";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "JCL Empilhadeiras: soluções completas em movimentação de cargas. Venda e assistência técnica em Ubá - MG com alcance nacional."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <TopBar />
      <NavBar />
      <Hero />
      <CategoriesSection />
      <InstitutionalSection />
      <TrustSection />
      <MissionVisionValues />
      <CTABanner />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
