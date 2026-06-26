import { useEffect } from "react";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTopButton from "@/components/ScrollTopButton";
import { categoriesMeta } from "@/data/products";
import heroImg from "@/assets/BackgroundEquipamentos.jpg";

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

      {/* Page hero — full screen */}
      <section className="relative min-h-screen flex items-center">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative container text-center">
          <h1 className="jcl-heading text-background text-4xl md:text-6xl lg:text-7xl leading-[0.95]">
            CONHEÇA TODOS OS NOSSOS
          </h1>
          <h1 className="jcl-heading text-yellow text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-2">
            EQUIPAMENTOS
          </h1>
          <p className="text-background/85 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-[1.7]">
            A linha completa de equipamentos que transforma a movimentação
            de cargas na sua empresa!
          </p>
        </div>
      </section>

      {/* Categories grid — sem cards, imagem + nome + underline */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {categoriesMeta.map(cat => (
              <Link
                key={cat.slug}
                to={`/produtos/categoria/${cat.slug}`}
                className="group flex flex-col items-center text-center"
                aria-label={`Ver categoria ${cat.name}`}
              >
                <div className="h-56 w-full flex items-center justify-center mb-6">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="max-h-56 object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <h2 className="jcl-heading text-dark text-xl md:text-2xl">
                  {cat.name}
                </h2>
                <span className="block w-12 h-[3px] bg-yellow mt-3" />
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
