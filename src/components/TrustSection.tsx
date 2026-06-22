const clientLogos = [
  "Leifer Móveis",
  "Ferrari Estofados",
  "Nesher",
  "Valde Móveis",
  "J Silva Móveis",
  "minasPlac",
  "Sallêto",
  "Gabeo",
  "Rio Doce",
  "CEL Móveis",
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
          <div className="bg-background rounded-[28px] shadow-xl p-10 md:p-14">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12 items-center justify-items-center">
              {clientLogos.map((name) => (
                <div
                  key={name}
                  className="h-20 w-full max-w-[220px] bg-white-ice border border-dashed border-border rounded-md flex items-center justify-center px-4"
                  aria-label={`Logo cliente ${name}`}
                >
                  <span className="jcl-heading text-gray-medium text-sm text-center">
                    {name}
                  </span>
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
