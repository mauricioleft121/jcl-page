import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  Produtos: [
    "Empilhadeiras Elétricas",
    "Empilhadeiras a Combustão",
    "Transpaleteiras",
    "Peças e Acessórios",
  ],
  Serviços: [
    "Vendas",
    "Locação",
    "Assistência Técnica",
    "Treinamento",
  ],
  Institucional: [
    "Sobre Nós",
    "Blog",
    "Trabalhe Conosco",
    "Política de Privacidade",
  ],
};

const Footer = () => {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-dark py-16 pb-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 - Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow font-bold text-xl">JCL</span>
                <span className="text-background font-bold text-xl">Empilhadeiras</span>
              </div>
              <p className="text-background/65 text-sm leading-[1.9] mb-4">
                Representante autorizada das melhores marcas de empilhadeiras.
                Soluções completas em vendas, locação e assistência técnica
                para sua operação logística.
              </p>
              <p className="text-background font-bold text-[13px]">(11) 9999-8888</p>
              <a href="mailto:contato@jclempilhadeiras.com.br" className="text-yellow font-semibold text-[13px] hover:underline">
                contato@jclempilhadeiras.com.br
              </a>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-background font-bold text-[13px] uppercase mb-4 relative">
                  {title}
                  <span className="block w-7 h-0.5 bg-yellow mt-2" />
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-background/70 text-[13px] hover:text-yellow transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-yellow h-12 flex items-center">
        <div className="container flex items-center justify-between">
          <p className="text-dark text-[13px]">
            © 2026 JCL Empilhadeiras. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="text-dark hover:opacity-70 transition-opacity">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
