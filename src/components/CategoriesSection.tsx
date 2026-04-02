import { Link } from "react-router-dom";
import forkliftElectric from "@/assets/forklift-electric.jpg";
import forkliftCombustion from "@/assets/forklift-combustion.jpg";
import forkliftPallet from "@/assets/forklift-pallet.jpg";

const categories = [
  {
    image: forkliftElectric,
    title: "Empilhadeiras Elétricas",
    description:
      "Soluções silenciosas e sustentáveis para operações internas. Ideais para armazéns e centros de distribuição com alta demanda de movimentação.",
  },
  {
    image: forkliftCombustion,
    title: "Empilhadeiras a Combustão",
    description:
      "Potência e robustez para operações externas e cargas pesadas. Modelos a diesel e GLP com alta capacidade de elevação e durabilidade.",
  },
  {
    image: forkliftPallet,
    title: "Transpaleteiras",
    description:
      "Agilidade e praticidade para movimentação horizontal de paletes. Modelos manuais e elétricos para otimizar sua operação logística.",
  },
];

const CategoriesSection = () => {
  return (
    <section id="produtos" className="py-20 bg-white-ice relative">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-[40px] text-dark">Nossos Produtos</h2>
          <p className="text-gray-medium text-base mt-4 max-w-[640px] mx-auto leading-[1.8]">
            Oferecemos uma linha completa de equipamentos para movimentação de cargas,
            com as melhores marcas e condições do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-background rounded-[14px] border border-[hsl(0,0%,91%)] p-8 flex flex-col items-center text-center"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-48 object-contain mb-6"
                loading="lazy"
                width={640}
                height={512}
              />
              <h3 className="font-semibold text-[15px] text-dark uppercase mb-3">
                {cat.title}
              </h3>
              <p className="text-gray-medium text-sm leading-[1.8] flex-1">
                {cat.description}
              </p>
              <Link
                to={`/produtos?cat=${encodeURIComponent(cat.title)}`}
                className="mt-6 w-full bg-yellow text-dark font-bold text-[13px] uppercase py-3 rounded-md hover:opacity-90 transition-opacity text-center block"
              >
                Saiba Mais
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/produtos"
            className="inline-block bg-yellow text-dark font-bold text-[13px] uppercase py-3 px-10 rounded-md hover:opacity-90 transition-opacity"
          >
            Ver Todos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
