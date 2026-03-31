import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-forklift.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[560px] flex items-end"
    >
      {/* Background image */}
      <img
        src={heroImage}
        alt="Empilhadeira em operação"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/[0.65]" />

      {/* Content */}
      <div className="relative container pb-16 pt-32">
        <h1 className="text-white font-extrabold text-5xl md:text-7xl lg:text-[80px] leading-[1.1] max-w-3xl">
          Potência e<br />
          Precisão em<br />
          Cada Operação
        </h1>
        <p className="text-white/85 text-[17px] leading-[1.7] mt-6 max-w-[560px]">
          Representante autorizada das melhores marcas de empilhadeiras do mercado.
          Soluções completas em vendas, locação e assistência técnica para sua operação logística.
        </p>
      </div>

      {/* Carousel arrows */}
      <button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors">
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors">
        <ChevronRight className="text-white" size={24} />
      </button>
    </section>
  );
};

export default Hero;
