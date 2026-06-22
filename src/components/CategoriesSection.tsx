import { Link } from "react-router-dom";
import { ArrowRight, Zap, Droplet, Layers, Truck } from "lucide-react";
import { categoriesMeta } from "@/data/products";

const homeCards = [
  { slug: "empilhadeira-eletrica", Icon: Zap, title: "EMPILHADEIRA ELÉTRICA" },
  { slug: "empilhadeira-diesel", Icon: Droplet, title: "EMPILHADEIRA A DIESEL" },
  { slug: "empilhadeira-retratil", Icon: Layers, title: "EMPILHADEIRA RETRÁTIL" },
];

const CategoriesSection = () => {
  return (
    <section id="produtos" className="relative py-24 bg-white-ice overflow-hidden">
      {/* Decorative diagonal yellow accent */}
      <div
        className="absolute top-0 right-0 w-[40%] h-[6px] bg-yellow opacity-80 -skew-y-3 origin-top-right"
        aria-hidden="true"
      />
      {/* Watermark forklift icon */}
      <Truck
        size={520}
        strokeWidth={1}
        className="absolute -left-32 top-1/2 -translate-y-1/2 text-dark/[0.04] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative container">
        <div className="flex items-start justify-between mb-14 flex-wrap gap-6">
          <div>
            <h2 className="jcl-heading text-dark text-3xl md:text-5xl leading-[0.95]">
              CONHEÇA TODA NOSSA LINHA DE
            </h2>
            <h2 className="jcl-heading text-yellow text-5xl md:text-7xl leading-[0.95] mt-1 accent-line">
              EQUIPAMENTOS
            </h2>
            <p className="text-gray-medium text-[15px] mt-6 max-w-xl leading-[1.8]">
              Trabalhamos com soluções que garantem eficiência, segurança e
              produtividade para os mais diversos segmentos do mercado.
            </p>
          </div>
          <div className="hidden md:flex items-baseline gap-1">
            <span className="jcl-heading text-3xl text-dark">JC</span>
            <span className="jcl-heading text-3xl text-yellow">L</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeCards.map(({ slug, Icon, title }) => {
            const meta = categoriesMeta.find(c => c.slug === slug)!;
            return (
              <article
                key={slug}
                className="bg-background rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 pt-14 flex flex-col items-center text-center relative"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-yellow flex items-center justify-center shadow-lg">
                  <Icon size={28} className="text-dark" strokeWidth={2.5} />
                </div>
                <div className="h-44 w-full flex items-center justify-center mb-6">
                  <img
                    src={meta.image}
                    alt={meta.name}
                    className="max-h-44 object-contain"
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
