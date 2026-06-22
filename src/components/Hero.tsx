import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-forklift.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[640px] flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Fachada da JCL Empilhadeiras em Ubá - MG"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Dark overlay heavier on the left for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/75 to-dark/30" />

      <div className="relative container py-20">
        <div className="max-w-2xl">
          <h1 className="jcl-heading text-yellow text-6xl sm:text-7xl md:text-8xl lg:text-[140px]">
            JCL
          </h1>
          <h2 className="jcl-heading text-background text-4xl sm:text-5xl md:text-6xl lg:text-[72px] mt-1">
            EMPILHADEIRAS
          </h2>
          <span className="block w-20 h-[5px] bg-yellow mt-6 mb-6" />
          <p className="text-background/85 text-base md:text-[17px] leading-[1.7] max-w-[520px]">
            Soluções completas em movimentação de cargas com eficiência,
            segurança e tecnologia para o seu negócio.
          </p>

          <div className="mt-8">
            <Link
              to="/contato"
              className="btn-yellow text-[15px] px-8 py-4"
              aria-label="Fale com um especialista JCL"
            >
              FALE COM UM ESPECIALISTA
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
