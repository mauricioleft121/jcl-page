import { useState } from "react";
import { Plus } from "lucide-react";

interface MvvItem {
  id: string;
  title: string;
  body?: string;
  bullets?: { label: string; text: string }[];
}

const items: MvvItem[] = [
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
    bullets: [
      { label: "Integridade", text: "agimos com ética, transparência e respeito." },
      { label: "Excelência", text: "buscamos qualidade em tudo o que fazemos." },
      { label: "Segurança", text: "priorizamos a segurança das pessoas e operações." },
      { label: "Inovação", text: "investimos em tecnologia e melhoria contínua." },
      { label: "Compromisso", text: "somos comprometidos com nossos clientes." },
    ],
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
                className="rounded-2xl overflow-hidden bg-background shadow-sm"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className={`w-full flex items-center justify-between px-7 py-6 transition-colors ${
                    isOpen ? "bg-[hsl(45,100%,85%)]" : "bg-background hover:bg-white-ice"
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`mvv-${item.id}`}
                >
                  <span className="jcl-heading text-dark text-xl md:text-2xl">{item.title}</span>
                  {!isOpen && <Plus size={26} className="text-dark" strokeWidth={2.5} />}
                </button>
                {isOpen && (
                  <div id={`mvv-${item.id}`} className="px-6 py-5 bg-background">
                    {item.bullets ? (
                      <ul className="space-y-3">
                        {item.bullets.map(b => (
                          <li key={b.label} className="flex gap-3 text-[15px] leading-[1.7]">
                            <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow" />
                            <span className="text-gray-medium">
                              <strong className="text-dark font-bold">{b.label}:</strong> {b.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-medium text-[15px] leading-[1.8]">
                        {item.body}
                      </p>
                    )}
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