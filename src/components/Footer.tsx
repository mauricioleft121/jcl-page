import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const links = {
  "LINKS RÁPIDOS": [
    { label: "Home", to: "/" },
    { label: "Equipamentos", to: "/produtos" },
    { label: "Sobre nós", to: "/sobre" },
    { label: "Contato", to: "/contato" },
  ],
  "SERVIÇOS": [
    { label: "Venda de Empilhadeiras", to: "/produtos" },
    { label: "Manutenção", to: "/contato" },
    { label: "Peças e Acessórios", to: "/contato" },
  ],
};

const MAP_QUERY =
  "R. Cel. Otaviano da Rocha, 1110 - São Domingos, Ubá - MG, 36504-042";
const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

const AccentTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="jcl-heading text-background text-sm mb-4 relative">
    {children}
    <span className="block w-8 h-[3px] bg-yellow mt-2" />
  </h4>
);

const Footer = () => {
  return (
    <footer>
      <div className="bg-dark pt-16 pb-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr_1.4fr] gap-10">
            {/* Col 1 — logo + about + social */}
            <div>
              <Logo theme="light" className="h-12 mb-4" linked={false} />
              <p className="text-background/65 text-sm leading-[1.9] mb-5">
                Soluções completas em movimentação de cargas com qualidade,
                segurança e eficiência para o seu negócio.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/jcl_empilhadeiras/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-yellow hover:text-dark text-background flex items-center justify-center transition-colors"
                  aria-label="JCL Empilhadeiras no Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Col 2 & 3 — link groups */}
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <AccentTitle>{title}</AccentTitle>
                <ul className="space-y-2.5">
                  {items.map(item => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        className="text-background/70 text-[13px] hover:text-yellow transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Col 4 — contact */}
            <div>
              <AccentTitle>CONTATO</AccentTitle>
              <ul className="space-y-3 text-[13px]">
                <li className="flex items-start gap-2 text-background/70">
                  <Phone size={14} className="text-yellow mt-1 flex-shrink-0" />
                  <a href="tel:+553235315957" className="hover:text-yellow">32 3531-5957</a>
                </li>
                <li className="flex items-start gap-2 text-background/70">
                  <Mail size={14} className="text-yellow mt-1 flex-shrink-0" />
                  <a href="mailto:jclempilhadeira@gmail.com" className="hover:text-yellow break-all">
                    jclempilhadeira@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-background/70">
                  <MapPin size={14} className="text-yellow mt-1 flex-shrink-0" />
                  <span>R. Cel. Otaviano da Rocha, 1110<br />São Domingos · Ubá - MG</span>
                </li>
              </ul>
            </div>

            {/* Col 5 — map */}
            <div>
              <AccentTitle>NOSSA LOCALIZAÇÃO</AccentTitle>
              <div className="rounded-md overflow-hidden h-[140px] mb-2">
                <iframe
                  src={MAP_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização JCL Empilhadeiras — Ubá MG"
                />
              </div>
              <p className="text-background/60 text-[11px] mb-1">
                R. Cel. Otaviano da Rocha, 1110 — São Domingos / Ubá - MG
              </p>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow text-[11px] font-bold hover:underline"
              >
                Ver no Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark border-t-2 border-yellow py-4">
        <div className="container">
          <p className="text-background/50 text-[12px] text-center">
            © 2026 JCL Empilhadeiras. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
