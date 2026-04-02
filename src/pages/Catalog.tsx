import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products, categories } from "@/data/products";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <TopBar />
      <NavBar />
      <WhatsAppButton />

      {/* Page header */}
      <section className="bg-dark py-16">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-background/70 hover:text-yellow">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-background/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-yellow">Produtos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-extrabold text-5xl text-background mt-4">Catálogo de Produtos</h1>
          <p className="text-background/70 text-base mt-3 max-w-[560px]">
            Conheça nossa linha completa de empilhadeiras e transpaleteiras para sua operação logística.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-20 bg-white-ice">
        <div className="container">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wide transition-colors ${
                activeCategory === "all"
                  ? "bg-yellow text-dark"
                  : "bg-background border border-border text-dark hover:bg-yellow/20"
              }`}
            >
              Todos
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wide transition-colors ${
                  activeCategory === cat
                    ? "bg-yellow text-dark"
                    : "bg-background border border-border text-dark hover:bg-yellow/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(product => (
              <div
                key={product.slug}
                className="bg-background rounded-[14px] border border-[hsl(0,0%,91%)] p-8 flex flex-col items-center text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 object-contain mb-4"
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
                <h3 className="font-semibold text-lg text-dark uppercase mb-2">{product.name}</h3>
                <div className="text-gray-medium text-xs space-y-1 mb-4">
                  <p>Capacidade: {product.specs["Capacidade de Carga"]}</p>
                  <p>Elevação: {product.specs["Altura Máxima de Elevação"]}</p>
                  <p>Motor: {product.specs["Tipo de Motor"]}</p>
                </div>
                <div className="mt-auto w-full space-y-2">
                  <Link
                    to={`/produtos/${product.slug}`}
                    className="block w-full bg-yellow text-dark font-bold text-[13px] uppercase py-3 rounded-md hover:opacity-90 transition-opacity text-center"
                  >
                    Ver Detalhes
                  </Link>
                  <a
                    href="#contato"
                    className="block w-full border-2 border-dark text-dark font-bold text-[13px] uppercase py-3 rounded-md hover:bg-dark hover:text-background transition-colors text-center"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
