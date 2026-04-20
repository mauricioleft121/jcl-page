import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products, categories } from "@/data/products";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Search, SlidersHorizontal, X } from "lucide-react";

const capacityRanges = [
  { label: "Todas", value: "all" },
  { label: "3 Toneladas", value: "3000-3000" },
  { label: "4 Toneladas", value: "4000-4000" },
  { label: "5 Toneladas", value: "5000-5000" },
  { label: "7 Toneladas", value: "7000-7000" },
  { label: "Até 4T", value: "0-4000" },
  { label: "Acima de 5T", value: "5000-99999" },
];

const purposes = [
  { label: "Todos", value: "all" },
  { label: "Uso Interno", value: "interno" },
  { label: "Uso Externo", value: "externo" },
  { label: "Ambos", value: "ambos" },
];

const sortOptions = [
  { label: "Mais relevante", value: "relevance" },
  { label: "Menor capacidade", value: "cap-asc" },
  { label: "Maior capacidade", value: "cap-desc" },
];

const getCapacityKg = (spec: string): number => {
  const match = spec.replace(/\./g, "").match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

const getPurpose = (apps: string[]): string => {
  const text = apps.join(" ").toLowerCase();
  const isInternal = /interno|armazén|distribuição|picking|e-commerce|frio|farmac|varejo|estoque|expedição|supermercado/i.test(text);
  const isExternal = /externo|pátio|estaleiro|porto|mineração|construção/i.test(text);
  if (isInternal && isExternal) return "ambos";
  if (isExternal) return "externo";
  return "interno";
};

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get("cat") || "";

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [capacityRange, setCapacityRange] = useState("all");
  const [purpose, setPurpose] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("relevance");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    document.title = "Catálogo de Empilhadeiras | JCL Empilhadeiras";
  }, []);

  useEffect(() => {
    if (catParam) {
      setActiveCategory(catParam);
    }
  }, [catParam]);

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== "all") {
      list = list.filter(p => p.category === activeCategory);
    }

    if (capacityRange !== "all") {
      const [min, max] = capacityRange.split("-").map(Number);
      list = list.filter(p => {
        const kg = getCapacityKg(p.specs["Capacidade de Carga"]);
        return kg >= min && kg <= max;
      });
    }

    if (purpose !== "all") {
      list = list.filter(p => {
        const pp = getPurpose(p.applications);
        return pp === purpose || pp === "ambos";
      });
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
      );
    }

    if (sort === "cap-asc") {
      list.sort((a, b) => getCapacityKg(a.specs["Capacidade de Carga"]) - getCapacityKg(b.specs["Capacidade de Carga"]));
    } else if (sort === "cap-desc") {
      list.sort((a, b) => getCapacityKg(b.specs["Capacidade de Carga"]) - getCapacityKg(a.specs["Capacidade de Carga"]));
    }

    return list;
  }, [activeCategory, capacityRange, purpose, search, sort]);

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-bold text-[11px] text-dark uppercase tracking-[0.8px] mb-3">Categoria</h4>
        <div className="space-y-2">
          <FilterRadio label="Todas" value="all" current={activeCategory} onChange={setActiveCategory} />
          {categories.map(cat => (
            <FilterRadio key={cat} label={cat} value={cat} current={activeCategory} onChange={setActiveCategory} />
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-bold text-[11px] text-dark uppercase tracking-[0.8px] mb-3">Capacidade</h4>
        <div className="space-y-2">
          {capacityRanges.map(r => (
            <FilterRadio key={r.value} label={r.label} value={r.value} current={capacityRange} onChange={setCapacityRange} />
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-bold text-[11px] text-dark uppercase tracking-[0.8px] mb-3">Finalidade</h4>
        <div className="space-y-2">
          {purposes.map(p => (
            <FilterRadio key={p.value} label={p.label} value={p.value} current={purpose} onChange={setPurpose} />
          ))}
        </div>
      </div>
    </div>
  );

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
          {/* JSON-LD breadcrumb */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Início", item: window.location.origin + "/" },
                  { "@type": "ListItem", position: 2, name: "Produtos" },
                ],
              }),
            }}
          />
          <h1 className="font-extrabold text-4xl md:text-5xl text-background mt-4">Catálogo de Produtos</h1>
          <p className="text-background/70 text-base mt-3 max-w-[560px]">
            Conheça nossa linha completa de empilhadeiras elétricas e a diesel para sua operação logística.
          </p>
        </div>
      </section>

      {/* Search + Sort bar */}
      <section className="bg-white-ice border-b border-border">
        <div className="container py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-medium" />
            <input
              type="text"
              placeholder="Buscar por nome ou modelo..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-md text-sm text-dark bg-background focus:border-yellow focus:border-2 focus:outline-none"
              aria-label="Buscar produtos"
            />
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="border border-border rounded-md px-4 py-3 text-sm text-dark bg-background focus:border-yellow focus:border-2 focus:outline-none appearance-none min-h-[44px]"
            aria-label="Ordenar produtos"
          >
            {sortOptions.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 border border-border rounded-md px-4 py-3 text-sm font-semibold text-dark bg-background min-h-[44px]"
            aria-label="Abrir filtros"
          >
            <SlidersHorizontal size={16} />
            Filtros
          </button>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 bg-white-ice">
        <div className="container flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-[240px] flex-shrink-0">
            <div className="bg-background rounded-[14px] border border-border p-6 sticky top-[140px]">
              <h3 className="font-bold text-sm text-dark uppercase mb-5">Filtros</h3>
              <FilterPanel />
            </div>
          </aside>

          {/* Mobile filters overlay */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-dark/50" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute right-0 top-0 h-full w-[300px] bg-background p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-sm text-dark uppercase">Filtros</h3>
                  <button onClick={() => setMobileFiltersOpen(false)} aria-label="Fechar filtros">
                    <X size={24} className="text-dark" />
                  </button>
                </div>
                <FilterPanel />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <p className="text-gray-medium text-sm mb-6">
              Exibindo <span className="font-bold text-dark">{filtered.length}</span> de <span className="font-bold text-dark">{products.length}</span> produtos
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map(product => (
                <div
                  key={product.slug}
                  className="bg-background rounded-[14px] border border-border p-6 flex flex-col items-center text-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 object-contain mb-4"
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
                  <h3 className="font-semibold text-lg text-dark uppercase mb-1">{product.name}</h3>
                  <p className="text-yellow font-bold text-base mb-2">{product.specs["Capacidade de Carga"]}</p>
                  <div className="text-gray-medium text-xs space-y-1 mb-4">
                    <p>Elevação: {product.specs["Altura Máxima de Elevação"]}</p>
                    <p>Motor: {product.specs["Tipo de Motor"]}</p>
                  </div>
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
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-medium text-lg">Nenhum produto encontrado com os filtros selecionados.</p>
                <button
                  onClick={() => { setActiveCategory("all"); setCapacityRange("all"); setPurpose("all"); setSearch(""); }}
                  className="mt-4 text-yellow font-bold hover:underline"
                  aria-label="Limpar todos os filtros"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FilterRadio = ({
  label,
  value,
  current,
  onChange,
}: {
  label: string;
  value: string;
  current: string;
  onChange: (v: string) => void;
}) => (
  <button
    onClick={() => onChange(value)}
    className={`flex items-center gap-2 w-full text-left text-sm py-1 transition-colors min-h-[36px] ${
      current === value ? "text-yellow font-semibold" : "text-dark hover:text-yellow"
    }`}
    aria-label={`Filtrar por ${label}`}
  >
    <span className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 ${
      current === value ? "border-yellow bg-yellow" : "border-gray-medium"
    }`} />
    {label}
  </button>
);

export default Catalog;
