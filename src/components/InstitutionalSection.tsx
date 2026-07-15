import { ShieldCheck, Users, Headset, Settings, Handshake } from "lucide-react";
import institutionalImg from "@/assets/sobre_nos.webp";

const points = [
  {
    Icon: ShieldCheck,
    text: "Na JCL Empilhadeiras, oferecemos soluções completas para movimentação de cargas, com um portfólio diversificado de equipamentos que atendem diferentes necessidades operacionais. Trabalhamos com empilhadeiras a diesel, empilhadeiras elétricas com bateria de lítio e uma linha completa de equipamentos elétricos, como empilhadeiras retráteis, patoladas, paleteiras elétricas e transpaleteiras.",
  },
  {
    Icon: Users,
    text: "Nosso compromisso é entregar eficiência, segurança e produtividade em cada operação, fornecendo equipamentos de qualidade e suporte adequado para o dia a dia dos nossos clientes. Buscamos entender a real necessidade de cada empresa para oferecer soluções práticas, confiáveis e alinhadas ao seu processo logístico.",
  },
  {
    Icon: Headset,
    text: "Contamos com uma equipe de profissionais capacitados, preparados para oferecer um atendimento ágil, próximo e eficiente, garantindo suporte desde a escolha do equipamento até o acompanhamento da operação.",
  },
];

const diferenciais = [
  { Icon: Headset, title: "ATENDIMENTO ÁGIL", text: "Suporte rápido e próximo, quando você precisa." },
  { Icon: ShieldCheck, title: "EQUIPAMENTOS DE QUALIDADE", text: "Equipamentos modernos, seguros e eficientes." },
  { Icon: Settings, title: "SUPORTE ESPECIALIZADO", text: "Equipe técnica capacitada para atender sua operação." },
  { Icon: Handshake, title: "PÓS-VENDA DIFERENCIADO", text: "Acompanhamento completo antes, durante e após a venda." },
];

const InstitutionalSection = () => {
  return (
    <section id="sobre" className="bg-dark">
      {/* Bloco institucional — desktop: imagem de fundo + texto escuro · mobile: fundo preto + texto branco */}
      <div className="relative overflow-hidden">
        {/* Imagem só no desktop; no mobile fica o fundo escuro da section */}
        <img
          src={institutionalImg}
          alt="Empilhadeira JCL amarela e preta em armazém"
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-right"
          loading="lazy"
        />
        <div className="relative min-h-screen flex flex-col justify-center py-20 pl-6 sm:pl-8 lg:pl-12 pr-6">
          <div className="max-w-[560px]">
            <span className="block jcl-heading text-yellow text-xs tracking-wider">SOBRE NÓS</span>
            {/* Traço abaixo do "SOBRE NÓS" */}
            <span className="block w-12 h-[3px] bg-yellow mt-2 mb-4" />
            <h2 className="jcl-heading text-background md:text-dark text-3xl md:text-4xl leading-[0.95]">
              CONHEÇA A
            </h2>
            <h2 className="jcl-heading text-yellow text-4xl md:text-5xl leading-[0.95] mt-1">
              JCL EMPILHADEIRAS
            </h2>
            <p className="text-background md:text-dark text-base md:text-lg font-semibold mt-5 mb-6 leading-[1.45]">
              Especialistas em equipamentos para movimentação de cargas com{" "}
              <strong>alcance nacional</strong>.
            </p>

            {/* Traço horizontal separando a introdução dos pontos — mesmo padrão do hero */}
            <span className="block w-16 h-[2px] bg-yellow mb-8" />

            <div className="space-y-4">
              {points.map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon size={24} className="text-dark" />
                  </span>
                  {/* Traço amarelo vertical ligando o ícone ao texto */}
                  <span className="w-[2px] h-12 bg-yellow flex-shrink-0 mt-1" />
                  <p className="text-background/75 md:text-gray-dark text-[14.5px] leading-[1.6]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Diferenciais bar */}
      <div className="bg-dark">
        <div className="container py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {diferenciais.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-3 items-start lg:px-6 lg:border-l lg:border-yellow lg:first:border-l-0 lg:first:pl-0"
              >
                <Icon size={40} className="text-yellow flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <h4 className="jcl-heading text-background text-base">{title}</h4>
                  {/* Barra horizontal separando título do texto */}
                  <span className="block w-8 h-[2px] bg-yellow my-2" />
                  <p className="text-background text-xs leading-[1.6]">{text}</p>
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
