import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTopButton from "@/components/ScrollTopButton";
import InstitutionalSection from "@/components/InstitutionalSection";
import MissionVisionValues from "@/components/MissionVisionValues";

const About = () => {
  useEffect(() => {
    document.title = "Sobre Nós | JCL Empilhadeiras";
  }, []);

  return (
    <div className="min-h-screen">
      <TopBar />
      <NavBar variant="dark" />
      <WhatsAppButton />
      <ScrollTopButton />
      <InstitutionalSection />
      <MissionVisionValues />
      <Footer />
    </div>
  );
};

export default About;