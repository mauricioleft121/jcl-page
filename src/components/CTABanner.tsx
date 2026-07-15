import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ctaBg from "@/assets/Precisa de ajuda.jpeg";

const CTABanner = () => {
  return (
    <section className="relative py-20 border-b-4 border-yellow">
      <img
        src={ctaBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-dark/85" />
      <div className="relative w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-10">
          <div>
            <h2 className="jcl-heading text-background text-3xl md:text-5xl leading-[1.05]">
              PRECISA DE AJUDA PARA
            </h2>
            <h2 className="jcl-heading text-yellow text-3xl md:text-5xl leading-[1.05] mt-1">
              ESCOLHER O EQUIPAMENTO IDEAL?
            </h2>
            <p className="text-background/80 text-base mt-5 max-w-2xl leading-[1.7]">
              Fale com um de nossos especialistas e encontre a melhor solução
              para o seu negócio.
            </p>
          </div>
          <a
            href="https://wa.me/553235315957"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow text-base px-10 py-5"
            aria-label="Fale conosco no WhatsApp"
          >
            FALE CONOSCO
            <WhatsAppIcon size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
