import { useEffect } from "react";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTopButton from "@/components/ScrollTopButton";
import { categoriesMeta } from "@/data/products";
import heroImg from "@/assets/sobre_nos.jpg";

const Catalog = () => {
  useEffect(() => {
    document.title = "Equipamentos | JCL Empilhadeiras";
  }, []);

  return (
    <div className="min-h-screen">
      <TopBar />
      <NavBar variant="dark" />
      <WhatsAppButton />
      <ScrollTopButton />

      {/* Page hero */}
      <section className="relative py-24">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/85" />
        <div className="relative container text-center">
          <h1 className="jcl-heading text-background text-4xl md:text-6xl leading-[0.95]">
            CONHEÇA TODOS OS NOSSOS
          </h1>
          <h1 className="jcl-heading text-yellow text-5xl md:text-7xl leading-[0.95] mt-2 accent-line center">
            EQUIPAMENTOS
          </h1>
          <p className="text-background/80 text-base mt-6 max-w-2xl mx-auto leading-[1.7]">
            A linha completa de equipamentos que transforma a movimentação
            de cargas na sua empresa!
          </p>
        </div>
      </section>

      {/* 3x2 categories grid */}
      <section className="bg-white-ice py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesMeta.map(cat => (
              <Link
                key={cat.slug}
                to={`/produtos/categoria/${cat.slug}`}
                className="group bg-background rounded-2xl shadow-md hover:shadow-xl transition-all p-8 flex flex-col items-center text-center"
                aria-label={`Ver categoria ${cat.name}`}
              >
                <div className="h-44 w-full flex items-center justify-center mb-5">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="max-h-44 object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <h2 className="jcl-heading text-dark text-xl md:text-2xl accent-line center">
                  {cat.name}
                </h2>
                {cat.comingSoon && (
                  <span className="mt-3 text-[11px] uppercase font-bold text-yellow tracking-wide">
                    Em breve
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
