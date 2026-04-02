import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  Produtos: [
    { label: "Empilhadeiras Elétricas", href: "/produtos?cat=Empilhadeiras+Elétricas" },
    { label: "Empilhadeiras a Combustão", href: "/produtos?cat=Empilhadeiras+a+Combustão" },
    { label: "Transpaleteiras", href: "/produtos?cat=Transpaleteiras" },
    { label: "Peças e Acessórios", href: "#" },
  ],
  Serviços: [
    { label: "Vendas", href: "#" },
    { label: "Locação", href: "#" },
    { label: "Assistência Técnica", href: "#" },
    { label: "Treinamento", href: "#" },
  ],
  Institucional: [
    { label: "Sobre Nós", href: "/#sobre" },
    { label: "Trabalhe Conosco", href: "#" },
    { label: "Política de Privacidade", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer>
      <div className="bg-dark py-16 pb-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-background font-bold text-[13px] uppercase mb-4 relative">
                  {title}
                  <span className="block w-7 h-0.5 bg-yellow mt-2" />
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-background/70 text-[13px] hover:text-yellow transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

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
