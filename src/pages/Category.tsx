import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTopButton from "@/components/ScrollTopButton";
import { getCategoryBySlug, getProductsByCategorySlug } from "@/data/products";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const Category = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const meta = getCategoryBySlug(slug);
  const items = getProductsByCategorySlug(slug);

  useEffect(() => {
    if (meta) document.title = `${meta.name} | JCL Empilhadeiras`;
  }, [meta]);

  if (!meta) {
    return (
      <div className="min-h-screen">
        <TopBar />
        <NavBar variant="dark" />
        <div className="container py-24 text-center">
          <h1 className="jcl-heading text-dark text-3xl mb-4">Categoria não encontrada</h1>
          <Link to="/produtos" className="text-yellow font-bold hover:underline">
            ← Voltar aos equipamentos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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
              <BreadcrumbSeparator className="text-background/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-yellow">{meta.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Header */}
      <section className="bg-white-ice py-16">
        <div className="container">
          <h1 className="jcl-heading text-dark text-3xl md:text-5xl accent-line">
            {meta.name}
          </h1>
          <p className="text-gray-medium text-[15px] mt-5 max-w-3xl leading-[1.8]">
            {meta.description}
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-white-ice pb-24">
        <div className="container">
          {items.length === 0 ? (
            <div className="bg-background rounded-2xl p-12 text-center">
              <p className="jcl-heading text-dark text-2xl mb-3">EM BREVE</p>
              <p className="text-gray-medium mb-6">
                Esta linha está em desenvolvimento. Entre em contato com nossos
                especialistas para mais informações.
              </p>
              <Link to="/contato" className="btn-yellow">
                FALE COM UM ESPECIALISTA
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map(p => (
                <article
                  key={p.slug}
                  className="bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
                >
                  <div className="h-44 flex items-center justify-center mb-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-44 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="jcl-heading text-dark text-lg accent-line mb-4">
                    {p.name}
                  </h3>
                  <ul className="text-sm text-gray-medium space-y-1 mb-6 flex-1">
                    <li>
                      <span className="font-bold text-dark">Capacidade:</span>{" "}
                      {p.specs["Capacidade de Carga"]}
                    </li>
                    <li>
                      <span className="font-bold text-dark">Elevação:</span>{" "}
                      {p.specs["Altura Máxima de Elevação"]}
                    </li>
                    <li>
                      <span className="font-bold text-dark">Motor:</span>{" "}
                      {p.specs["Tipo de Motor"]}
                    </li>
                  </ul>
                  <Link
                    to={`/produtos/${p.slug}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-dark text-dark font-bold uppercase text-xs px-5 py-3 rounded-md hover:bg-yellow hover:border-yellow transition-colors min-h-[44px]"
                    aria-label={`Ver detalhes do ${p.name}`}
                  >
                    VER DETALHES
                    <ArrowRight size={14} />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Category;