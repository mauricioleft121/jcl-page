import { Shield, Users, Headphones, Settings, Handshake } from "lucide-react";
import institutionalImg from "@/assets/sobre_nos.jpg";

const points = [
  {
    Icon: Shield,
    text: "Soluções completas em movimentação de cargas, com um portfólio diversificado de equipamentos para diferentes necessidades operacionais.",
  },
  {
    Icon: Users,
    text: "Compromisso com eficiência, segurança e produtividade, oferecendo equipamentos de qualidade e suporte no dia a dia da sua operação.",
  },
  {
    Icon: Headphones,
    text: "Equipe capacitada para um atendimento ágil, próximo e eficiente — da escolha do equipamento ao acompanhamento da operação.",
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
    <section id="sobre" className="relative bg-white-ice overflow-hidden">
      {/* Imagem de fundo (sem camada escura) — a área clara à esquerda recebe o texto */}
      <img
        src={institutionalImg}
        alt="Empilhadeira JCL amarela e preta em armazém"
        className="absolute inset-0 w-full h-full object-cover object-right"
        loading="lazy"
      />
      {/* Reforço CLARO à esquerda para encaixar o texto na área cinza da imagem */}
      <div className="absolute inset-0 bg-gradient-to-r from-white-ice via-white-ice/85 to-transparent" />

      <div className="relative">
        <div className="container min-h-screen flex flex-col justify-center py-24">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="block w-8 h-[3px] bg-yellow" />
              <span className="jcl-heading text-gray-medium text-sm tracking-wider">SOBRE NÓS</span>
            </div>
            <h2 className="jcl-heading text-dark text-4xl md:text-5xl leading-[0.95]">
              CONHEÇA A
            </h2>
            <h2 className="jcl-heading text-dark text-5xl md:text-6xl leading-[0.95] mt-1 accent-line">
              JCL EMPILHADEIRAS
            </h2>
            <p className="text-dark text-lg md:text-xl font-semibold mt-6 mb-8 leading-[1.5]">
              Especialistas em equipamentos para movimentação de cargas com{" "}
              <span className="text-yellow-dark">alcance nacional</span>.
            </p>

            <div className="space-y-4">
              {points.map(({ Icon, text }, i) => (
                <div key={i} className="flex gap-4">
                  <span className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-dark" />
                  </span>
                  <p className="text-gray-dark text-[14.5px] leading-[1.6]">{text}</p>
                </div>
              ))}
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
      </div>
    </section>
  );
};

export default InstitutionalSection;
