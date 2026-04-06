import institutionalImg from "@/assets/institutional.jpg";

const InstitutionalSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-[3px] bg-yellow" />
              <span className="font-bold text-xs uppercase text-yellow tracking-[0.5px]">
                Sobre Nós
              </span>
            </div>
            <h2 className="font-bold text-[34px] text-dark leading-tight mb-6">
              Referência em Soluções para Movimentação de Cargas
            </h2>
            <p className="text-gray-medium text-[15px] leading-[1.9] mb-5">
              A JCL Empilhadeiras atua há mais de 15 anos no mercado de equipamentos para
              movimentação e armazenagem. Com uma equipe técnica altamente qualificada e
              tecnologia própria, oferecemos soluções completas em vendas e assistência
              técnica com equipamentos de fabricação JCL.
            </p>
            <p className="text-gray-medium text-[15px] leading-[1.9]">
              Nossa missão é garantir que cada cliente tenha acesso ao equipamento ideal
              para sua operação, com suporte técnico contínuo e condições comerciais
              competitivas. Trabalhamos com transparência, agilidade e compromisso com
              resultados.
            </p>
          </div>

          {/* Right column */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={institutionalImg}
              alt="Equipe JCL Empilhadeiras"
              className="w-full h-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalSection;
