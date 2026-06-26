import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    id: "missao",
    title: "MISSÃO",
    body: "Oferecer soluções completas em movimentação de cargas, com eficiência e tecnologia, contribuindo para o crescimento sustentável dos nossos clientes.",
  },
  {
    id: "visao",
    title: "VISÃO",
    body: "Ser referência nacional em soluções para movimentação de cargas, reconhecida pela qualidade dos equipamentos, excelência no atendimento e inovação contínua.",
  },
  {
    id: "valores",
    title: "VALORES",
    body: "Integridade — agimos com ética, transparência e respeito. Excelência — buscamos qualidade em tudo o que fazemos. Segurança — priorizamos a segurança das pessoas e operações. Inovação — investimos em tecnologia e melhoria contínua. Compromisso — somos comprometidos com nossos clientes.",
  },
];

const MissionVisionValues = () => {
  const [open, setOpen] = useState<string | null>("missao");

  return (
    <section className="bg-white-ice py-24 min-h-screen flex flex-col justify-center">
      <div className="container max-w-5xl w-full">
        <h2 className="jcl-heading text-dark text-3xl md:text-4xl accent-line mb-12">
          MISSÃO, VISÃO E VALORES
        </h2>

        <div className="space-y-4">
          {items.map(item => {
            const isOpen = open === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl overflow-hidden border border-border ${
                  isOpen ? "bg-background shadow-md" : "bg-background"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className={`w-full flex items-center justify-between px-6 py-5 transition-colors ${
                    isOpen ? "bg-yellow/30" : "bg-background hover:bg-white-ice"
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`mvv-${item.id}`}
                >
                  <span className="jcl-heading text-dark text-xl">{item.title}</span>
                  {isOpen ? (
                    <Minus size={22} className="text-dark" />
                  ) : (
                    <Plus size={22} className="text-dark" />
                  )}
                </button>
                {isOpen && (
                  <div id={`mvv-${item.id}`} className="px-6 py-5 bg-background">
                    <p className="text-gray-medium text-[15px] leading-[1.8]">
                      {item.body}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;