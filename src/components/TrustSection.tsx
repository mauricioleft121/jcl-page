import { User } from "lucide-react";

const sectors = [
  { name: "Indústria Alimentícia", count: "120+" },
  { name: "Logística & E-commerce", count: "95+" },
  { name: "Automotivo", count: "80+" },
  { name: "Varejo & Distribuição", count: "110+" },
  { name: "Metalurgia & Siderurgia", count: "60+" },
  { name: "Construção Civil", count: "45+" },
];

const testimonials = [
  {
    text: "A JCL nos atendeu em menos de 48h e entregou a empilhadeira exatamente dentro do que precisávamos. Parceiro de confiança.",
    name: "Carlos M.",
    role: "Gerente de Logística",
    company: "Setor de Distribuição",
  },
  {
    text: "Trabalhamos com a JCL há 3 anos. Suporte técnico rápido e equipamentos de primeira qualidade.",
    name: "Ana P.",
    role: "Diretora de Operações",
    company: "Indústria Alimentícia",
  },
  {
    text: "Compramos 5 empilhadeiras JCL e a assistência técnica nunca nos deixou na mão. Atendimento exemplar.",
    name: "Roberto L.",
    role: "Coord. de Armazém",
    company: "Setor de Logística",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-dark-nav">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-[40px] text-background">
            Quem Confia na JCL Empilhadeiras
          </h2>
          <p className="text-background/70 text-base mt-4">
            +500 operações atendidas em todo o Brasil
          </p>
        </div>

        {/* Sectors grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="bg-background/5 border border-background/10 rounded-[14px] p-5 text-center"
            >
              <p className="text-yellow font-bold text-2xl">{sector.count}</p>
              <p className="text-background/70 text-xs mt-1 leading-tight">{sector.name}</p>
            </div>
          ))}
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
