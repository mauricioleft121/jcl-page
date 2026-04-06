import { Wrench, GraduationCap, Settings } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Assistência Técnica",
    description: "Equipe especializada para manutenção preventiva e corretiva. Atendimento rápido em todo o estado de São Paulo.",
    slug: "assistencia-tecnica",
  },
  {
    icon: GraduationCap,
    title: "Treinamento",
    description: "Capacitação de operadores conforme NR-11. Treinamentos teóricos e práticos com certificação reconhecida.",
    slug: "treinamento",
  },
  {
    icon: Settings,
    title: "Peças e Acessórios",
    description: "Peças originais JCL e acessórios para todos os modelos. Estoque próprio com pronta entrega para manutenções urgentes.",
    slug: "pecas-acessorios",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-[40px] text-dark">Nossos Serviços</h2>
          <p className="text-gray-medium text-base mt-4 max-w-[640px] mx-auto leading-[1.8]">
            Soluções completas para sua operação logística, do equipamento à capacitação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.slug}
              className="bg-white-ice rounded-[14px] border border-border p-8 text-center flex flex-col"
            >
              <svc.icon className="mx-auto text-dark mb-5" size={52} strokeWidth={1.3} />
              <h3 className="font-bold text-[15px] text-dark uppercase mb-3">{svc.title}</h3>
              <p className="text-gray-medium text-sm leading-[1.7] flex-1 mb-6">{svc.description}</p>
              <a
                href="#contato"
                className="inline-flex items-center justify-center bg-yellow text-dark font-bold text-[13px] uppercase py-3 rounded-md hover:opacity-90 transition-opacity w-full min-h-[44px]"
                aria-label={`Saiba mais sobre ${svc.title}`}
              >
                Saiba Mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
