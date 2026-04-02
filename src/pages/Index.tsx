import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import CategoriesSection from "@/components/CategoriesSection";
import InstitutionalSection from "@/components/InstitutionalSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TrustSection from "@/components/TrustSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <NavBar />
      <Hero />
      <StatsStrip />
      <CategoriesSection />
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
