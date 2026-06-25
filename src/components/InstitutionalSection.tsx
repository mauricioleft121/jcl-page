import { Shield, Users, Headphones, Settings, Handshake } from "lucide-react";
import institutionalAsset from "@/assets/institutional-jcl.jpg.asset.json";

const blocks = [
  {
    Icon: Shield,
    title: "PORTFÓLIO COMPLETO",
    text: "Empilhadeiras a diesel, elétricas com bateria de lítio, retráteis, patoladas, paleteiras e transpaleteiras para diferentes necessidades operacionais.",
  },
  {
    Icon: Users,
    title: "EQUIPE ESPECIALIZADA",
    text: "Profissionais capacitados, prontos para oferecer um atendimento ágil, próximo e eficiente — do equipamento certo ao acompanhamento da operação.",
  },
  {
    Icon: Headphones,
    title: "COMPROMISSO COM A OPERAÇÃO",
    text: "Eficiência, segurança e produtividade em cada operação, com soluções práticas, confiáveis e alinhadas ao processo logístico de cada cliente.",
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
    <section id="sobre" className="bg-background">
      <div className="container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="block w-8 h-[3px] bg-yellow" />
              <span className="jcl-heading text-yellow text-sm">SOBRE NÓS</span>
            </div>
            <h2 className="jcl-heading text-dark text-4xl md:text-5xl leading-[0.95]">
              CONHEÇA A
            </h2>
            <h2 className="jcl-heading text-yellow text-5xl md:text-6xl leading-[0.95] mt-1 accent-line">
              JCL EMPILHADEIRAS
            </h2>
            <p className="text-dark text-lg font-semibold mt-6 mb-6 leading-[1.6]">
              Especialistas em equipamentos para movimentação de cargas com{" "}
              <span className="text-yellow">alcance nacional</span>.
            </p>
            <div className="space-y-4 mb-8 text-gray-medium text-[15px] leading-[1.8]">
              <p>
                Na <strong className="text-dark">JCL Empilhadeiras</strong>, oferecemos soluções completas para movimentação de cargas, com um portfólio diversificado de equipamentos que atendem diferentes necessidades operacionais. Trabalhamos com empilhadeiras a diesel, empilhadeiras elétricas com bateria de lítio e uma linha completa de equipamentos elétricos, como empilhadeiras retráteis, patoladas, paleteiras elétricas e transpaleteiras.
              </p>
              <p>
                Nosso compromisso é entregar eficiência, segurança e produtividade em cada operação, fornecendo equipamentos de qualidade e suporte adequado para o dia a dia dos nossos clientes. Buscamos entender a real necessidade de cada empresa para oferecer soluções práticas, confiáveis e alinhadas ao seu processo logístico.
              </p>
              <p>
                Contamos com uma equipe de profissionais capacitados, preparados para oferecer um atendimento ágil, próximo e eficiente, garantindo suporte desde a escolha do equipamento até o acompanhamento da operação.
              </p>
            </div>

            <div className="space-y-6">
              {blocks.map(({ Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <span className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-dark" />
                  </span>
                  <div>
                    <h3 className="jcl-heading text-dark text-lg mb-1">{title}</h3>
                    <p className="text-gray-medium text-sm leading-[1.7]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — image with diagonal yellow border */}
          <div className="relative">
            <div
              className="absolute -top-4 -right-4 w-full h-full bg-yellow rounded-tr-[80px] rounded-bl-[80px]"
              aria-hidden="true"
            />
            <div className="relative rounded-tr-[80px] rounded-bl-[80px] overflow-hidden">
              <img
                src={institutionalAsset.url}
                alt="Empilhadeira JCL amarela e preta em armazém"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Black diferenciais bar */}
      <div className="bg-dark">
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
    </section>
  );
};

export default InstitutionalSection;
