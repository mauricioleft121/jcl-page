import { Wrench, Shield, Truck, Clock, Headphones, Award } from "lucide-react";

const differentials = [
  {
    icon: Wrench,
    title: "Assistência Técnica",
    description: "Equipe especializada com atendimento rápido para manutenção preventiva e corretiva em todo o estado.",
  },
  {
    icon: Shield,
    title: "Garantia Estendida",
    description: "Todos os nossos equipamentos contam com garantia estendida e suporte técnico contínuo.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Logística própria para entrega ágil dos equipamentos diretamente na sua operação.",
  },
  {
    icon: Clock,
    title: "Locação Flexível",
    description: "Planos de locação sob medida para atender demandas sazonais ou projetos de curto prazo.",
  },
  {
    icon: Headphones,
    title: "Suporte 24h",
    description: "Canal de atendimento disponível 24 horas para emergências e suporte técnico remoto.",
  },
  {
    icon: Award,
    title: "Marcas Premium",
    description: "Representante autorizada das marcas líderes do mercado mundial de empilhadeiras.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 bg-[hsl(0,0%,92%)]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-[40px] text-dark">Nossos Diferenciais</h2>
          <p className="text-gray-medium text-base mt-4 max-w-[640px] mx-auto leading-[1.8]">
            Conheça os motivos que fazem da JCL Empilhadeiras a escolha certa para
            sua operação logística.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="bg-background rounded-[14px] shadow-[0px_2px_8px_rgba(0,0,0,0.07)] p-9 px-7 text-center"
            >
              <item.icon className="mx-auto text-dark" size={64} strokeWidth={1.2} />
              <h3 className="font-bold text-[15px] text-dark uppercase mt-5 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-medium text-sm leading-[1.7]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
