import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Início", href: "#hero" },
  {
    label: "Produtos",
    href: "#produtos",
    sub: [
      { label: "Empilhadeiras Elétricas", href: "#" },
      { label: "Empilhadeiras a Combustão", href: "#" },
      { label: "Transpaleteiras", href: "#" },
    ],
  },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-dark-nav h-[60px] flex items-center">
      <div className="container flex items-center justify-between">
        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.sub && setOpenSub(item.label)}
              onMouseLeave={() => setOpenSub(null)}
            >
              <a
                href={item.href}
                className="text-white font-semibold text-sm uppercase tracking-[0.5px] hover:text-yellow transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.sub && <ChevronDown size={14} />}
              </a>
              {item.sub && openSub === item.label && (
                <ul className="absolute top-full left-0 bg-dark py-2 min-w-[220px] rounded-md shadow-lg">
                  {item.sub.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="block px-5 py-2 text-white font-medium text-[13px] hover:text-yellow transition-colors"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4 ml-auto lg:ml-0">
          <a
            href="#contato"
            className="bg-yellow text-dark font-bold text-xs uppercase px-5 py-2.5 rounded-md tracking-[0.5px] hover:opacity-90 transition-opacity"
          >
            Solicite um Orçamento
          </a>
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-dark py-4 lg:hidden z-50">
          <ul className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white font-semibold text-sm uppercase tracking-[0.5px] hover:text-yellow transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
