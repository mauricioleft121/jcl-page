import leifer from "@/assets/empresas/leifer.jpg";
import ferrari from "@/assets/empresas/Ferrari Estofados.png";
import nesher from "@/assets/empresas/nesher.jpeg";
import valde from "@/assets/empresas/valdemoveis.png";
import jsilva from "@/assets/empresas/JSilva Moveis.png";
import minasplac from "@/assets/empresas/minasplac.jpg";
import salleto from "@/assets/empresas/Salleto.png";
import gabeo from "@/assets/empresas/gabed.jpg";
import riodoce from "@/assets/empresas/LOGOTIPO-RIODOCE-FUNDO-BRANCO.png";
import cel from "@/assets/empresas/celmoveis.png";

const clientLogos = [
  { name: "Leifer Móveis", src: leifer },
  { name: "Ferrari Estofados", src: ferrari, invert: true },
  { name: "Nesher", src: nesher },
  { name: "Valde Móveis", src: valde },
  { name: "J Silva Móveis", src: jsilva },
  { name: "minasPlac", src: minasplac },
  { name: "Sallêto", src: salleto },
  { name: "Gabeo", src: gabeo },
  { name: "Rio Doce", src: riodoce },
  { name: "CEL Móveis", src: cel },
];

const TrustSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mb-10 flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="jcl-heading text-dark text-3xl md:text-4xl leading-[1] accent-line max-w-2xl">
            EMPRESAS QUE CONTAM COM A EXPERIÊNCIA DA JCL.
          </h2>
        </div>
        <div className="hidden md:flex items-baseline gap-1">
          <span className="jcl-heading text-3xl text-dark">JC</span>
          <span className="jcl-heading text-3xl text-yellow">L</span>
        </div>
      </div>

      <div className="relative bg-yellow py-16">
        <div className="container">
          <div className="bg-background rounded-[28px] shadow-xl p-10 md:p-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 items-center justify-items-center">
              {clientLogos.map(({ name, src, invert }) => (
                <div
                  key={name}
                  className="h-24 w-full max-w-[220px] flex items-center justify-center px-4"
                >
                  <img
                    src={src}
                    alt={`Logo ${name}`}
                    className={`max-h-20 max-w-full object-contain ${invert ? "invert" : ""}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
