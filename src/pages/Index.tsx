import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <NavBar />
      <Hero />
      <StatsStrip />
    </div>
  );
};

export default Index;
