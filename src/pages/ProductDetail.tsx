import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MessageCircle, ArrowRight, FileText } from "lucide-react";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTopButton from "@/components/ScrollTopButton";
import { getProductBySlug, getRelatedProducts, categoriesMeta } from "@/data/products";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

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
  const related = getRelatedProducts(product.slug);
  const waMsg = encodeURIComponent(`Olá! Tenho interesse no modelo ${product.name}.`);

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
                <BreadcrumbPage className="text-yellow">{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Main */}
      <section className="bg-white-ice py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12">
            {/* Gallery */}
            <div className="flex gap-4">
              <div className="flex flex-col gap-3 w-[88px] flex-shrink-0">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-[88px] h-[88px] rounded-lg overflow-hidden border-2 bg-background transition-colors ${
                      i === active ? "border-yellow" : "border-border hover:border-dark"
                    }`}
                    aria-label={`Ver imagem ${i + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain p-1.5" />
                  </button>
                ))}
              </div>
              <div className="flex-1 bg-background rounded-2xl border border-border flex items-center justify-center min-h-[420px] p-6">
                <img
                  src={product.images[active]}
                  alt={product.name}
                  className="max-h-[400px] w-full object-contain"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 className="jcl-heading text-dark text-3xl md:text-4xl accent-line">
                {product.name.toUpperCase()}
              </h1>
              <p className="text-gray-medium text-[15px] leading-[1.8] mt-6 mb-8">
                {product.shortDescription}
              </p>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/553235315957?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border-2 border-yellow text-dark font-bold uppercase rounded-full px-8 py-4 text-sm hover:bg-yellow transition-colors min-h-[56px]"
                  aria-label={`Cotação por WhatsApp do ${product.name}`}
                >
                  <MessageCircle size={18} fill="currentColor" className="text-yellow-dark" />
                  COTAÇÃO POR WHATSAPP
                </a>
                <Link
                  to="/contato"
                  className="w-full inline-flex items-center justify-center gap-2 bg-yellow text-dark font-bold uppercase rounded-full px-8 py-4 text-sm hover:bg-yellow-dark transition-colors min-h-[56px]"
                  aria-label={`Iniciar uma cotação do ${product.name}`}
                >
                  INICIE UMA COTAÇÃO
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Quick spec */}
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-10 text-sm border-t border-border pt-6">
                <SpecRow label="Categoria" value={product.category} />
                <SpecRow label="Modelo" value={product.name} />
                <SpecRow label="Capacidade" value={product.specs["Capacidade de Carga"]} />
                <SpecRow label="Elevação" value={product.specs["Altura Máxima de Elevação"]} />
                <SpecRow label="Disponibilidade" value={product.availability} />
                <div className="flex gap-2">
                  <dt className="jcl-heading text-dark text-xs">Ficha Técnica:</dt>
                  <dd>
                    <a href="#" className="text-yellow font-semibold text-xs hover:underline inline-flex items-center gap-1">
                      <FileText size={12} /> Ver Documentação
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Description */}
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

          {/* Full specs */}
          <div className="mt-16">
            <h2 className="jcl-heading text-dark text-2xl md:text-3xl accent-line mb-6">
              ESPECIFICAÇÕES TÉCNICAS
            </h2>
            <div className="bg-background rounded-2xl border border-border overflow-hidden max-w-4xl">
              {Object.entries(product.specs).map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex justify-between px-6 py-4 text-sm ${
                    i % 2 === 0 ? "bg-background" : "bg-white-ice"
                  }`}
                >
                  <span className="font-bold text-dark">{k}</span>
                  <span className="text-gray-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="jcl-heading text-dark text-2xl md:text-3xl accent-line mb-8">
                PRODUTOS RELACIONADOS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map(p => (
                  <Link
                    key={p.slug}
                    to={`/produtos/${p.slug}`}
                    className="bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center"
                  >
                    <img src={p.image} alt={p.name} className="h-36 object-contain mb-4" loading="lazy" />
                    <h3 className="jcl-heading text-dark text-base accent-line center mb-3">{p.name}</h3>
                    <p className="text-gray-medium text-sm mt-auto">{p.specs["Capacidade de Carga"]}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const SpecRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-2">
    <dt className="jcl-heading text-dark text-xs">{label}:</dt>
    <dd className="text-gray-medium text-xs">{value}</dd>
  </div>
);

export default ProductDetail;
