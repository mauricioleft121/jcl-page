import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MessageCircle, ArrowRight, FileText } from "lucide-react";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTopButton from "@/components/ScrollTopButton";
import { getProductBySlug, categoriesMeta } from "@/data/products";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/** "3.000 kg" -> "3 toneladas" */
const toTons = (capacity: string): string => {
  const kg = parseInt(capacity.replace(/\D/g, ""), 10);
  if (!kg) return capacity;
  const tons = kg / 1000;
  return `${tons} ${tons === 1 ? "tonelada" : "toneladas"}`;
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (product) document.title = `${product.name} | JCL Empilhadeiras`;
    setActive(0);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen">
        <TopBar />
        <NavBar variant="dark" />
        <div className="container py-20 text-center">
          <h1 className="jcl-heading text-dark text-3xl mb-4">Produto não encontrado</h1>
          <Link to="/produtos" className="text-yellow font-bold hover:underline">
            ← Voltar ao catálogo
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const catMeta = categoriesMeta.find(c => c.productCategory === product.category);
  const waMsg = encodeURIComponent(`Olá! Tenho interesse no modelo ${product.code}.`);
  const tons = toTons(product.specs["Capacidade de Carga"]);
  const title = `${product.code} - ${(catMeta?.name || product.category).toUpperCase()} ${tons.toUpperCase()}`;

  return (
    <div className="min-h-screen">
      <TopBar />
      <NavBar variant="dark" />
      <WhatsAppButton />
      <ScrollTopButton />

      {/* Breadcrumb */}
      <section className="bg-dark py-5">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-background/70 hover:text-yellow">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-background/50" />
              <BreadcrumbItem>
                <BreadcrumbLink href="/produtos" className="text-background/70 hover:text-yellow">Equipamentos</BreadcrumbLink>
              </BreadcrumbItem>
              {catMeta && (
                <>
                  <BreadcrumbSeparator className="text-background/50" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={`/produtos/categoria/${catMeta.slug}`} className="text-background/70 hover:text-yellow">
                      {catMeta.name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}
              <BreadcrumbSeparator className="text-background/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-yellow">{product.code}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Main */}
      <section className="bg-background py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12">
            {/* Gallery */}
            <div className="flex gap-4">
              <div className="flex flex-col gap-3 w-[88px] flex-shrink-0">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-[88px] h-[88px] rounded-lg overflow-hidden border-2 bg-white-ice transition-colors ${
                      i === active ? "border-yellow" : "border-border hover:border-dark"
                    }`}
                    aria-label={`Ver imagem ${i + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain p-1.5" />
                  </button>
                ))}
              </div>
              <div className="flex-1 bg-white-ice rounded-2xl flex items-center justify-center min-h-[420px] p-6">
                <img
                  src={product.images[active]}
                  alt={product.name}
                  className="max-h-[400px] w-full object-contain"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 className="jcl-heading text-dark text-3xl md:text-4xl leading-[1.05]">
                {title}
              </h1>
              <p className="text-gray-medium text-[15px] leading-[1.8] mt-6 mb-8">
                {product.shortDescription}
              </p>

              {/* Botões lado a lado */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/553235315957?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-yellow text-dark font-bold uppercase rounded-full px-6 py-4 text-sm hover:bg-yellow transition-colors min-h-[56px]"
                  aria-label={`Cotação por WhatsApp do ${product.code}`}
                >
                  <MessageCircle size={18} fill="currentColor" className="text-yellow-dark" />
                  COTAÇÃO POR WHATSAPP
                </a>
                <Link
                  to="/contato"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-yellow text-dark font-bold uppercase rounded-full px-6 py-4 text-sm hover:bg-yellow-dark transition-colors min-h-[56px]"
                  aria-label={`Iniciar uma cotação do ${product.code}`}
                >
                  INICIE UMA COTAÇÃO
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Ficha resumida */}
              <dl className="mt-10 space-y-2.5 text-[15px] border-t border-border pt-8">
                <SpecLine label="Categoria" value={product.category} />
                {product.tags && product.tags.length > 0 && (
                  <SpecLine label="Tags" value={product.tags.join(", ")} />
                )}
                <SpecLine label="Modelo" value={product.model || product.code} />
                <SpecLine label="Capacidade" value={tons} />
                <div className="flex flex-wrap gap-x-2">
                  <dt className="jcl-heading text-dark text-[15px]">Ficha Técnica:</dt>
                  <dd>
                    <a href="#" className="text-yellow-dark font-semibold hover:underline inline-flex items-center gap-1">
                      <FileText size={14} /> Ver Documentação
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Descrição do produto */}
          <div className="mt-16">
            <h2 className="jcl-heading text-dark text-2xl md:text-3xl accent-line mb-6">
              DESCRIÇÃO DO PRODUTO
            </h2>
            <div className="space-y-4 max-w-4xl">
              {product.description.map((p, i) => (
                <p key={i} className="text-gray-medium text-[15px] leading-[1.9]">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const SpecLine = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-wrap gap-x-2">
    <dt className="jcl-heading text-dark text-[15px]">{label}:</dt>
    <dd className="text-gray-medium text-[15px]">{value}</dd>
  </div>
);

export default ProductDetail;
