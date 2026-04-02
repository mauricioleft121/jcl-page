import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-forklift.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[560px] flex items-end"
    >
      <img
        src={heroImage}
        alt="Empilhadeira em operação"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-dark/[0.65]" />

      <div className="relative container pb-16 pt-32">
        <h1 className="text-background font-extrabold text-5xl md:text-7xl lg:text-[80px] leading-[1.1] max-w-3xl">
          Potência e<br />
          Precisão em<br />
          Cada Operação
        </h1>
        <p className="text-background/85 text-[17px] leading-[1.7] mt-6 max-w-[560px]">
          Representante autorizada das melhores marcas de empilhadeiras do mercado.
          Soluções completas em vendas, locação e assistência técnica para sua operação logística.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#contato"
            className="inline-block bg-yellow text-dark font-bold text-[15px] uppercase py-4 px-8 rounded-md hover:opacity-90 transition-opacity text-center"
          >
            Solicitar Orçamento Agora
          </a>
          <Link
            to="/produtos"
            className="inline-block border-2 border-background text-background font-bold text-[15px] uppercase py-4 px-8 rounded-md hover:bg-background hover:text-dark transition-colors text-center"
          >
            Ver Nossos Produtos
          </Link>
        </div>
      </div>

      <button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/30 flex items-center justify-center hover:bg-background/50 transition-colors">
        <ChevronLeft className="text-background" size={24} />
      </button>
      <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/30 flex items-center justify-center hover:bg-background/50 transition-colors">
        <ChevronRight className="text-background" size={24} />
      </button>
    </section>
  );
};

export default Hero;
