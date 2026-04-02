import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { CheckCircle, Tag } from "lucide-react";

const availabilityColors: Record<string, string> = {
  "Disponível": "hsl(142, 60%, 40%)",
  "Sob Consulta": "hsl(40, 90%, 50%)",
  "Locação disponível": "hsl(210, 70%, 50%)",
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const [activeImage, setActiveImage] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  if (!product) {
    return (
      <div className="min-h-screen">
        <TopBar />
        <NavBar />
        <div className="py-20 text-center container">
          <h1 className="font-bold text-3xl text-dark mb-4">Produto não encontrado</h1>
          <Link to="/produtos" className="text-yellow font-bold hover:underline">Voltar ao catálogo</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedProducts(product.slug);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <NavBar />
      <WhatsAppButton />

      {/* Breadcrumb */}
      <section className="bg-dark py-6">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-background/70 hover:text-yellow">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-background/50" />
              <BreadcrumbItem>
                <BreadcrumbLink href="/produtos" className="text-background/70 hover:text-yellow">Produtos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-background/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-yellow">{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Product main */}
      <section className="py-20 bg-white-ice">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
            {/* Left content */}
            <div>
              {/* Gallery */}
              <div className="mb-10">
                <div className="rounded-xl overflow-hidden mb-4 bg-background border border-border">
                  <img
                    src={product.images[activeImage]}
                    alt={product.name}
                    className="w-full h-[400px] object-contain p-6"
                  />
                </div>
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                        i === activeImage ? "border-yellow" : "border-border"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-contain p-2" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & badges */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="inline-block text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full text-background"
                  style={{ backgroundColor: product.categoryColor }}
                >
                  {product.category}
                </span>
                <span
                  className="inline-block text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full text-background"
                  style={{ backgroundColor: availabilityColors[product.availability] }}
                >
                  {product.availability}
                </span>
              </div>

              <h1 className="font-extrabold text-4xl text-dark mb-6">{product.name}</h1>

              {/* Description */}
              <div className="space-y-4 mb-12">
                {product.description.map((p, i) => (
                  <p key={i} className="text-gray-medium text-[15px] leading-[1.9]">{p}</p>
                ))}
              </div>

              {/* Specs table */}
              <div className="mb-12">
                <h2 className="font-bold text-2xl text-dark mb-6">Especificações Técnicas</h2>
                <div className="rounded-[14px] border border-[hsl(0,0%,91%)] overflow-hidden">
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <div
                      key={key}
                      className={`flex justify-between px-6 py-4 text-sm ${
                        i % 2 === 0 ? "bg-background" : "bg-white-ice"
                      }`}
                    >
                      <span className="font-semibold text-dark">{key}</span>
                      <span className="text-gray-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-12">
                <h2 className="font-bold text-2xl text-dark mb-6">Indicado Para</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.applications.map(app => (
                    <div key={app} className="flex items-center gap-3 bg-background rounded-lg p-4 border border-border">
                      <CheckCircle className="text-yellow flex-shrink-0" size={20} />
                      <span className="text-dark text-sm font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar - CTA form */}
            <div>
              <div className="sticky top-[140px] bg-background rounded-[14px] border border-border p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="text-yellow" size={18} />
                  <span className="font-bold text-xs uppercase text-yellow tracking-wide">Solicitar Orçamento</span>
                </div>
                <h3 className="font-bold text-lg text-dark mb-1">{product.name}</h3>
                <p className="text-gray-medium text-sm mb-6">Preencha o formulário e receba um orçamento personalizado.</p>

                <form className="space-y-4">
                  <div>
                    <label className="block font-semibold text-[11px] text-dark uppercase tracking-[0.8px] mb-2">Nome</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-[hsl(0,0%,82%)] rounded-md px-3.5 py-3 text-sm text-dark bg-background focus:border-yellow focus:border-2 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[11px] text-dark uppercase tracking-[0.8px] mb-2">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-[hsl(0,0%,82%)] rounded-md px-3.5 py-3 text-sm text-dark bg-background focus:border-yellow focus:border-2 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[11px] text-dark uppercase tracking-[0.8px] mb-2">Telefone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-[hsl(0,0%,82%)] rounded-md px-3.5 py-3 text-sm text-dark bg-background focus:border-yellow focus:border-2 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[11px] text-dark uppercase tracking-[0.8px] mb-2">Mensagem</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={`Tenho interesse no modelo ${product.name}`}
                      className="w-full border border-[hsl(0,0%,82%)] rounded-md px-3.5 py-3 text-sm text-dark bg-background focus:border-yellow focus:border-2 focus:outline-none transition-colors"
                    />
                  </div>
                  <input type="hidden" name="product" value={product.name} />
                  <button
                    type="submit"
                    className="w-full bg-yellow text-dark font-bold text-sm uppercase py-3.5 rounded-md hover:opacity-90 transition-opacity"
                  >
                    Solicitar Orçamento
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Related products */}
          <div className="mt-20">
            <h2 className="font-bold text-[34px] text-dark text-center mb-10">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(p => (
                <div
                  key={p.slug}
                  className="bg-background rounded-[14px] border border-[hsl(0,0%,91%)] p-8 flex flex-col items-center text-center"
                >
                  <img src={p.image} alt={p.name} className="h-40 object-contain mb-4" loading="lazy" />
                  <span
                    className="inline-block text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full text-background mb-3"
                    style={{ backgroundColor: p.categoryColor }}
                  >
                    {p.category}
                  </span>
                  <h3 className="font-semibold text-[15px] text-dark uppercase mb-2">{p.name}</h3>
                  <p className="text-gray-medium text-sm mb-4">{p.shortDescription.slice(0, 80)}…</p>
                  <Link
                    to={`/produtos/${p.slug}`}
                    className="mt-auto w-full bg-yellow text-dark font-bold text-[13px] uppercase py-3 rounded-md hover:opacity-90 transition-opacity text-center block"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
