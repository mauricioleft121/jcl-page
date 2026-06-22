import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    id: "missao",
    title: "MISSÃO",
    body: "[TEXTO ETAPA 2] Oferecer soluções completas em movimentação de cargas, garantindo eficiência, segurança e produtividade para nossos clientes.",
  },
  {
    id: "visao",
    title: "VISÃO",
    body: "[TEXTO ETAPA 2] Ser referência nacional em equipamentos para movimentação de cargas, reconhecida pela qualidade dos produtos e pela excelência no atendimento.",
  },
  {
    id: "valores",
    title: "VALORES",
    body: "[TEXTO ETAPA 2] Compromisso, transparência, segurança, inovação, respeito ao cliente e responsabilidade socioambiental.",
  },
];

const MissionVisionValues = () => {
  const [open, setOpen] = useState<string | null>("missao");

  return (
    <section className="bg-white-ice py-24">
      <div className="container max-w-4xl">
        <h2 className="jcl-heading text-dark text-3xl md:text-4xl accent-line center text-center mb-12">
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