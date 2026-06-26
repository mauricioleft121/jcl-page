import { Link } from "react-router-dom";
import { ArrowRight, Zap, Droplet, Layers, Truck } from "lucide-react";
import { categoriesMeta } from "@/data/products";
import Logo from "@/components/Logo";
import bgArmazem from "@/assets/BackgroundEquipamentos.jpg";

const homeCards = [
  { slug: "empilhadeira-eletrica", Icon: Zap, title: "EMPILHADEIRA ELÉTRICA" },
  { slug: "empilhadeira-diesel", Icon: Droplet, title: "EMPILHADEIRA A DIESEL" },
  { slug: "empilhadeira-retratil", Icon: Layers, title: "EMPILHADEIRA RETRÁTIL" },
];

const CategoriesSection = () => {
  return (
    <section id="produtos" className="relative py-24 bg-background overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Marca d'água de armazém */}
      <img
        src={bgArmazem}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.06]"
      />

      <div className="relative container">
        {/* Logo no canto superior direito */}
        <div className="hidden md:block absolute right-10 top-0">
          <Logo theme="dark" className="h-9" linked={false} />
        </div>

        {/* Título centralizado */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="jcl-heading text-dark text-3xl md:text-5xl leading-[0.95]">
            CONHEÇA TODA NOSSA LINHA DE
          </h2>
          <h2 className="jcl-heading text-yellow text-5xl md:text-7xl leading-[0.95] mt-1">
            EQUIPAMENTOS
          </h2>
          <p className="text-gray-medium text-[15px] mt-6 leading-[1.8]">
            Trabalhamos com soluções que garantem eficiência, segurança e
            produtividade para os mais diversos segmentos do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeCards.map(({ slug, Icon, title }) => {
            const meta = categoriesMeta.find(c => c.slug === slug)!;
            return (
              <article
                key={slug}
                className="bg-background rounded-2xl border border-border shadow-[0_8px_28px_-12px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_36px_-12px_rgba(0,0,0,0.25)] transition-shadow p-7 flex flex-col"
              >
                {/* Ícone no canto superior esquerdo */}
                <span className="w-12 h-12 rounded-lg bg-yellow/15 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-yellow-dark" strokeWidth={2.5} />
                </span>

                <div className="h-52 w-full flex items-center justify-center mb-6">
                  <img
                    src={meta.image}
                    alt={meta.name}
                    className="max-h-52 w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="jcl-heading text-dark text-2xl mb-3">{title}</h3>
                <p className="text-gray-medium text-sm leading-[1.8] flex-1 mb-6">
                  {meta.description}
                </p>
                <Link
                  to={`/produtos/categoria/${slug}`}
                  className="btn-yellow w-full"
                  aria-label={`Ver todos os produtos: ${meta.name}`}
                >
                  VER TODOS OS PRODUTOS
                  <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Full-width CTA bar */}
        <Link
          to="/produtos"
          className="mt-14 bg-dark hover:bg-dark-nav transition-colors rounded-xl px-8 py-6 flex items-center justify-center gap-4 flex-wrap text-center group"
          aria-label="Ver todos os equipamentos JCL"
        >
          <Truck size={28} className="text-yellow" />
          <span className="jcl-heading text-background text-xl md:text-2xl">
            VER TODOS OS{" "}
            <span className="text-yellow">EQUIPAMENTOS</span>
          </span>
          <ArrowRight size={22} className="text-yellow group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default CategoriesSection;
