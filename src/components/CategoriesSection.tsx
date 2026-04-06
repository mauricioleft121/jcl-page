import { Link } from "react-router-dom";
import { products } from "@/data/products";

const featuredSlugs = ["jcl-e15", "jcl-e20", "jcl-glp25", "jcl-tp20e"];
const featured = featuredSlugs.map(s => products.find(p => p.slug === s)!);



const CategoriesSection = () => {
  return (
    <section id="produtos" className="py-20 bg-white-ice relative">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-[40px] text-dark">Nossos Produtos</h2>
          <p className="text-gray-medium text-base mt-4 max-w-[640px] mx-auto leading-[1.8]">
            Linha completa de empilhadeiras e transpaleteiras com tecnologia própria JCL,
            projetadas para máxima eficiência e durabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div
              key={product.slug}
              className="bg-background rounded-[14px] border border-border p-6 flex flex-col items-center text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-44 object-contain mb-4"
                loading="lazy"
                width={640}
                height={512}
              />
              <span
                className="inline-block text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full text-background mb-3"
                style={{ backgroundColor: product.categoryColor }}
              >
                {product.category}
              </span>
              <h3 className="font-semibold text-[15px] text-dark uppercase mb-1">
                {product.name}
              </h3>
              <p className="text-yellow font-bold text-lg mb-3">
                {product.specs["Capacidade de Carga"]}
              </p>
              <p className="text-gray-medium text-sm leading-[1.7] flex-1 mb-4 line-clamp-3">
                {product.shortDescription}
              </p>
              <div className="mt-auto w-full space-y-2">
                <Link
                  to={`/produtos/${product.slug}`}
                  className="block w-full bg-yellow text-dark font-bold text-[13px] uppercase py-3 rounded-md hover:opacity-90 transition-opacity text-center min-h-[44px] flex items-center justify-center"
                  aria-label={`Ver detalhes do ${product.name}`}
                >
                  Ver Detalhes
                </Link>
                <a
                  href="#contato"
                  className="block w-full border-2 border-dark text-dark font-bold text-[13px] uppercase py-3 rounded-md hover:bg-dark hover:text-background transition-colors text-center min-h-[44px] flex items-center justify-center"
                  aria-label={`Solicitar orçamento do ${product.name}`}
                >
                  Pedir Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/produtos"
            className="inline-block bg-yellow text-dark font-bold text-[13px] uppercase py-3 px-10 rounded-md hover:opacity-90 transition-opacity min-h-[44px]"
            aria-label="Ver catálogo completo de produtos"
          >
            Ver Todos
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CategoriesSection;
