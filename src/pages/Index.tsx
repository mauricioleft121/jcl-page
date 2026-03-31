import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import CategoriesSection from "@/components/CategoriesSection";
import InstitutionalSection from "@/components/InstitutionalSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CTABanner from "@/components/CTABanner";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
      <CTABanner />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
