import { User } from "lucide-react";

const clients = [
  "LogBrasil", "FrigoSul", "DistribExpress", "IndMetal SP", "ArmoCentro",
  "TransLog", "FrioNorte", "PackCenter", "AutoParts BR", "StockMax"
];

const testimonials = [
  {
    text: "A JCL nos atendeu em menos de 48h e entregou a empilhadeira exatamente dentro do que precisávamos. Parceiro de confiança.",
    name: "Carlos M.",
    role: "Gerente de Logística",
    company: "DistribExpress",
  },
  {
    text: "Trabalhamos com a JCL há 3 anos. Suporte técnico rápido e equipamentos de primeira.",
    name: "Ana P.",
    role: "Diretora de Operações",
    company: "FrigoSul",
  },
  {
    text: "Locação flexível que se adaptou ao nosso pico de demanda. Recomendo sem hesitar.",
    name: "Roberto L.",
    role: "Coord. de Armazém",
    company: "LogBrasil",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-dark-nav">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-[40px] text-background">
            Empresas que Confiam na JCL Empilhadeiras
          </h2>
          <p className="text-background/70 text-base mt-4">
            +500 operações atendidas em todo o Brasil
          </p>
        </div>

        {/* Infinite scrolling logos */}
        <div className="relative overflow-hidden mb-16">
          <div className="flex animate-scroll sm:animate-scroll-slow gap-16 w-max">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center h-16 px-6 grayscale opacity-60"
              >
                <span className="text-background font-bold text-xl tracking-tight whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background/5 border border-background/10 rounded-[14px] p-8"
            >
              <p className="text-background/85 text-sm leading-[1.8] mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
                  <User size={20} className="text-background/60" />
                </div>
                <div>
                  <p className="text-background font-semibold text-sm">{t.name}</p>
                  <p className="text-background/60 text-xs">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
