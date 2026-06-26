import { Shield, Users, Headphones, Settings, Handshake } from "lucide-react";
import institutionalImg from "@/assets/sobre_nos.jpg";

const points = [
  {
    Icon: Shield,
    text: "Na JCL Empilhadeiras, oferecemos soluções completas para movimentação de cargas, com um portfólio diversificado de equipamentos que atendem diferentes necessidades operacionais. Trabalhamos com empilhadeiras a diesel, empilhadeiras elétricas com bateria de lítio e uma linha completa de equipamentos elétricos, como empilhadeiras retráteis, patoladas, paleteiras elétricas e transpaleteiras.",
  },
  {
    Icon: Users,
    text: "Nosso compromisso é entregar eficiência, segurança e produtividade em cada operação, fornecendo equipamentos de qualidade e suporte adequado para o dia a dia dos nossos clientes. Buscamos entender a real necessidade de cada empresa para oferecer soluções práticas, confiáveis e alinhadas ao seu processo logístico.",
  },
  {
    Icon: Headphones,
    text: "Contamos com uma equipe de profissionais capacitados, preparados para oferecer um atendimento ágil, próximo e eficiente, garantindo suporte desde a escolha do equipamento até o acompanhamento da operação.",
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
    <section id="sobre" className="bg-dark">
      {/* Bloco com a imagem de fundo — cobre só esta área para preservar a área clara da esquerda */}
      <div className="relative overflow-hidden">
        <img
          src={institutionalImg}
          alt="Empilhadeira JCL amarela e preta em armazém"
          className="absolute inset-0 w-full h-full object-cover object-right"
          loading="lazy"
        />
        <div className="relative min-h-screen flex flex-col justify-center py-20 pl-6 sm:pl-8 lg:pl-12 pr-6">
          <div className="max-w-[560px]">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="block w-8 h-[3px] bg-yellow" />
              <span className="jcl-heading text-gray-medium text-xs tracking-wider">SOBRE NÓS</span>
            </div>
            <h2 className="jcl-heading text-dark text-3xl md:text-4xl leading-[0.95]">
              CONHEÇA A
            </h2>
            <h2 className="jcl-heading text-dark text-4xl md:text-5xl leading-[0.95] mt-1 accent-line">
              JCL EMPILHADEIRAS
            </h2>
            <p className="text-dark text-base md:text-lg font-semibold mt-5 mb-6 leading-[1.45]">
              Especialistas em equipamentos para movimentação de cargas com{" "}
              <span className="text-yellow-dark">alcance nacional</span>.
            </p>

            <div className="space-y-4">
              {points.map(({ Icon, text }, i) => (
                <div key={i} className="flex gap-3.5">
                  <span className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={20} className="text-dark" />
                  </span>
                  <p className="text-gray-dark text-[14.5px] leading-[1.6]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Diferenciais bar */}
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
