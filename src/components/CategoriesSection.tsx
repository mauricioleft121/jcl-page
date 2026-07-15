import { Link } from "react-router-dom";
import { ArrowRight, Zap, Droplet, Layers, Forklift } from "lucide-react";
import Logo from "@/components/Logo";
import bgEquipamentos from "@/assets/BackgroundEquipamentosMAINPAGE.png";
import retratilImg from "@/assets/EQUIPAMENTO ELÉTRICO/Empilhadeira retrátil/4.webp";
import eletrica3Img from "@/assets/EMPILHADEIRAS ELÉTRICAS/EMPILHADEIRA ELÉTRICA 3 TON/ChatGPT Image 24 de abr. de 2026, 15_19_51.webp";
import diesel4Img from "@/assets/EMPILHADEIRAS DIESEL/EMPILHADEIRA JCL DIESEL 4 TON/ChatGPT Image 24 de abr. de 2026, 15_59_59.webp";

const homeCards = [
  {
    Icon: Zap,
    title: "EMPILHADEIRA ELÉTRICA",
    href: "/produtos/categoria/empilhadeira-eletrica",
    image: eletrica3Img,
    description:
      "Ideal para operações internas em áreas fechadas. Silenciosa, econômica e eficiente, proporcionando alto desempenho com sustentabilidade.",
  },
  {
    Icon: Droplet,
    title: "EMPILHADEIRA A DIESEL",
    href: "/produtos/categoria/empilhadeira-diesel",
    image: diesel4Img,
    description:
      "Alta potência e desempenho para operações em ambientes internos e exteros. Robustez, segurança e eficiência para atender aos mais diversos setores.",
  },
  {
    Icon: Layers,
    title: "EMPILHADEIRA RETRÁTIL",
    href: "/produtos/categoria/empilhadeira-retratil",
    image: retratilImg,
    description:
      "Perfeita para estocagem em alturas e corredores estreitos. Máximo aproveitamento de espaço com segurança e agilidade.",
  },
];

const CategoriesSection = () => {
  return (
    <section id="produtos" className="relative py-24 bg-background overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Fundo — imagem institucional de equipamentos (já clara por design) */}
      <img
        src={bgEquipamentos}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Logo no canto superior direito */}
        <div className="hidden md:block absolute right-10 top-0">
          <Logo theme="dark" className="h-14" linked={false} />
        </div>

        {/* Título centralizado */}
        <div className="text-center mb-14">
          <h2 className="jcl-heading text-dark text-3xl md:text-5xl leading-[0.95]">
            CONHEÇA TODA NOSSA LINHA DE
          </h2>
          <h2 className="jcl-heading text-yellow text-4xl sm:text-5xl md:text-7xl leading-[0.95] mt-1">
            EQUIPAMENTOS
          </h2>
          {/* Risco amarelo de separação — mesmo padrão do hero */}
          <span className="block w-20 h-[5px] bg-yellow mx-auto mt-6" />
          <p className="text-gray-medium text-[15px] mt-6 leading-[1.8] max-w-2xl mx-auto">
            Trabalhamos com soluções que garantem eficiência, segurança e
            produtividade para os mais diversos segmentos do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {homeCards.map(({ Icon, title, href, image, description }) => (
            <article
              key={title}
              className="bg-background rounded-2xl border border-border shadow-[0_8px_28px_-12px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_36px_-12px_rgba(0,0,0,0.25)] transition-shadow p-7 flex flex-col"
            >
              {/* Ícone no canto superior esquerdo */}
              <span className="w-12 h-12 rounded-lg bg-yellow/15 flex items-center justify-center mb-5">
                <Icon size={24} className="text-yellow-dark" strokeWidth={2.5} />
              </span>

              <Link
                to={href}
                aria-label={`Ver todos os produtos: ${title}`}
                className="h-72 w-full flex items-center justify-center mb-6 group"
              >
                <img
                  src={image}
                  alt={title}
                  className="max-h-72 w-full object-contain transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </Link>

              <h3 className="jcl-heading text-dark text-lg xl:text-xl whitespace-nowrap text-center">{title}</h3>
              {/* Traço amarelo separando título da descrição */}
              <span className="block w-10 h-[3px] bg-yellow mx-auto mt-3 mb-4" />
              <p className="text-gray-medium text-sm leading-[1.8] flex-1 mb-6 text-center">
                {description}
              </p>
              <Link
                to={href}
                className="btn-yellow w-full"
                aria-label={`Ver todos os produtos: ${title}`}
              >
                VER TODOS OS PRODUTOS
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>

        {/* Full-width CTA bar */}
        <Link
          to="/produtos"
          className="mt-14 bg-dark hover:bg-dark-nav transition-colors rounded-xl px-8 py-6 flex items-center justify-center gap-4 flex-wrap text-center group"
          aria-label="Ver todos os equipamentos JCL"
        >
          <Forklift size={28} className="text-yellow" />
          <span className="jcl-heading text-background text-xl md:text-2xl">
            VER TODOS OS{" "}
            <span className="text-yellow">EQUIPAMENTOS</span>
          </span>
          <ArrowRight size={22} className="text-yellow group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default CategoriesSection;
