import { Shield, Users, Headphones, Settings, Handshake } from "lucide-react";
import institutionalImg from "@/assets/sobre_nos.jpg";

const points = [
  {
    Icon: Shield,
    text: "Na JCL Empilhadeiras, oferecemos soluções completas para movimentação de cargas, com um portfólio diversificado de equipamentos que atendem diferentes necessidades operacionais — empilhadeiras a diesel, elétricas com bateria de lítio, retráteis, patoladas, paleteiras e transpaleteiras.",
  },
  {
    Icon: Users,
    text: "Nosso compromisso é entregar eficiência, segurança e produtividade em cada operação, fornecendo equipamentos de qualidade e suporte adequado para o dia a dia dos nossos clientes.",
  },
  {
    Icon: Headphones,
    text: "Contamos com uma equipe de profissionais capacitados, preparados para oferecer um atendimento ágil, próximo e eficiente — desde a escolha do equipamento até o acompanhamento da operação.",
  },
];

const diferenciais = [
  { Icon: Headphones, title: "ATENDIMENTO ÁGIL", text: "Suporte rápido e próximo, quando você precisa." },
  { Icon: Shield, title: "EQUIPAMENTOS DE QUALIDADE", text: "Equipamentos modernos, seguros e eficientes." },
  { Icon: Settings, title: "SUPORTE ESPECIALIZADO", text: "Equipe técnica capacitada para atender sua operação." },
  { Icon: Handshake, title: "PÓS-VENDA DIFERENCIADO", text: "Acompanhamento completo antes, durante e após a venda." },
];

const InstitutionalSection = () => {
  return (
    <section id="sobre" className="relative bg-dark overflow-hidden">
      {/* Background image */}
      <img
        src={institutionalImg}
        alt="Empilhadeira JCL amarela e preta em armazém"
        className="absolute inset-0 w-full h-full object-cover object-right"
        loading="lazy"
      />
      {/* Dark gradient overlay — heavier on the left for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/55" />

      <div className="relative">
        {/* Main content */}
        <div className="container min-h-screen flex flex-col justify-center py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="block w-8 h-[3px] bg-yellow" />
              <span className="jcl-heading text-yellow text-sm tracking-wider">SOBRE NÓS</span>
            </div>
            <h2 className="jcl-heading text-background text-4xl md:text-5xl leading-[0.95]">
              CONHEÇA A
            </h2>
            <h2 className="jcl-heading text-yellow text-5xl md:text-6xl leading-[0.95] mt-1 accent-line">
              JCL EMPILHADEIRAS
            </h2>
            <p className="text-background text-lg md:text-xl font-semibold mt-6 mb-8 leading-[1.6]">
              Especialistas em equipamentos para movimentação de cargas com{" "}
              <span className="text-yellow">alcance nacional</span>.
            </p>

            <div className="space-y-5">
              {points.map(({ Icon, text }, i) => (
                <div key={i} className="flex gap-4">
                  <span className="w-11 h-11 rounded-full bg-yellow flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon size={20} className="text-dark" />
                  </span>
                  <p className="text-background/85 text-[15px] leading-[1.7]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diferenciais bar */}
        <div className="border-t border-background/10 bg-dark/70 backdrop-blur-sm">
          <div className="container py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {diferenciais.map(({ Icon, title, text }) => (
                <div key={title} className="flex gap-3 items-start">
                  <Icon size={32} className="text-yellow flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <h4 className="jcl-heading text-background text-base mb-1">{title}</h4>
                    <p className="text-background/70 text-xs leading-[1.6]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalSection;
