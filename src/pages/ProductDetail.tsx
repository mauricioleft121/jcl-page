import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, ZoomIn } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTopButton from "@/components/ScrollTopButton";
import { getProductBySlug, categoriesMeta } from "@/data/products";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/** "3.000 kg" -> "3 toneladas"; strings já em toneladas (ex.: faixas) passam direto */
const toTons = (capacity: string): string => {
  if (/tonelada/i.test(capacity)) return capacity.toLowerCase();
  const kg = parseInt(capacity.replace(/\D/g, ""), 10);
  if (!kg) return capacity;
  const tons = kg / 1000;
  return `${tons} ${tons === 1 ? "tonelada" : "toneladas"}`;
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("center");

  useEffect(() => {
    if (product) document.title = `${product.name} | JCL Empilhadeiras`;
    setActive(0);
  }, [product]);

  // Reset o zoom sempre que a imagem ativa muda ou o lightbox fecha
  useEffect(() => {
    setZoomed(false);
    setOrigin("center");
  }, [active, lightboxOpen]);

  const handleZoomMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

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
        <div className="w-full pl-[30px] lg:pl-[182px] pr-4 lg:pr-6">
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
        {/* Wrapper full-bleed: escapa o max-width de 1200px do .container
            para a imagem aproveitar as laterais e ganhar destaque */}
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12">
            {/* Gallery */}
            <div className="flex gap-3 sm:gap-4">
              <div className="flex flex-col gap-2.5 sm:gap-3 w-16 sm:w-[88px] flex-shrink-0">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-16 h-16 sm:w-[88px] sm:h-[88px] rounded-lg overflow-hidden border-2 bg-white-ice transition-colors ${
                      i === active ? "border-yellow" : "border-border hover:border-dark"
                    }`}
                    aria-label={`Ver imagem ${i + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain p-1.5" />
                  </button>
                ))}
              </div>
              <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative flex-1 min-w-0 bg-white-ice rounded-2xl flex items-center justify-center min-h-[360px] sm:min-h-[540px] lg:min-h-[660px] p-4 sm:p-8 lg:p-10 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2"
                    aria-label={`Ampliar imagem de ${product.name}`}
                  >
                    <img
                      src={product.images[active]}
                      alt={product.name}
                      className="max-h-[320px] sm:max-h-[500px] lg:max-h-[620px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-dark/80 text-background text-xs font-medium px-3 py-1.5 opacity-90 transition-opacity group-hover:opacity-100">
                      <ZoomIn size={14} />
                      Ampliar
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] w-full sm:max-w-4xl lg:max-w-5xl p-0 border-none bg-white-ice">
                  <DialogTitle className="sr-only">{`Imagem ampliada de ${product.name}`}</DialogTitle>
                  <div
                    className={`relative w-full h-[75vh] sm:h-[80vh] overflow-hidden rounded-lg flex items-center justify-center p-4 sm:p-8 ${
                      zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                    }`}
                    onClick={() => setZoomed(v => !v)}
                    onMouseMove={handleZoomMove}
                    onMouseLeave={() => setOrigin("center")}
                    role="button"
                    tabIndex={-1}
                    aria-label={zoomed ? "Reduzir zoom" : "Aproximar zoom"}
                  >
                    <img
                      src={product.images[active]}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-200 select-none"
                      style={{
                        transform: zoomed ? "scale(2.2)" : "scale(1)",
                        transformOrigin: origin,
                      }}
                      draggable={false}
                    />
                    <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-dark/80 text-background text-xs font-medium px-3 py-1.5">
                      <ZoomIn size={14} />
                      {zoomed ? "Clique para reduzir" : "Clique para aproximar"}
                    </span>
                  </div>
                </DialogContent>
              </Dialog>
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
                  className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-yellow text-dark font-bold uppercase rounded-full px-5 py-4 text-sm whitespace-nowrap hover:bg-yellow transition-colors min-h-[56px]"
                  aria-label={`Cotação por WhatsApp do ${product.code}`}
                >
                  <WhatsAppIcon size={18} className="text-yellow-dark" />
                  COTAÇÃO POR WHATSAPP
                </a>
                <Link
                  to="/contato"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-yellow text-dark font-bold uppercase rounded-full px-5 py-4 text-sm whitespace-nowrap hover:bg-yellow-dark transition-colors min-h-[56px]"
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
  <div className="flex flex-wrap items-baseline gap-x-2 ml-0 pl-0">
    <dt className="jcl-heading text-dark text-[15px] leading-normal ml-0">{label}:</dt>
    <dd className="text-gray-medium text-[15px] leading-normal ml-0">{value}</dd>
  </div>
);

export default ProductDetail;
