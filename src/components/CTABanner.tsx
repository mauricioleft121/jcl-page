import ctaBg from "@/assets/cta-bg.jpg";

const CTABanner = () => {
  return (
    <section className="relative h-[280px] flex items-center justify-center">
      <img
        src={ctaBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={600}
      />
      <div className="absolute inset-0 bg-dark/[0.72]" />
      <div className="relative text-center">
        <h2 className="font-bold text-4xl text-background mb-4">
          Solicite Seu Orçamento Agora
        </h2>
        <p className="text-background/80 text-base max-w-[540px] mx-auto mb-8 leading-[1.7]">
          Entre em contato com nossa equipe e descubra a solução ideal para
          sua operação. Atendimento personalizado e condições especiais.
        </p>
        <a
          href="#contato"
          className="inline-block bg-yellow text-dark font-bold text-[15px] uppercase py-4 px-11 rounded-md hover:bg-[hsl(43,70%,42%)] transition-colors"
        >
          Fale Conosco
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
