import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Início", href: "/#hero", isAnchor: true },
  {
    label: "Produtos",
    href: "/produtos",
    sub: [
      { label: "Ver Catálogo Completo", href: "/produtos" },
      { label: "Empilhadeiras Elétricas", href: "/produtos?cat=Empilhadeiras+Elétricas" },
      { label: "Empilhadeiras a Combustão", href: "/produtos?cat=Empilhadeiras+a+Combustão" },
      { label: "Transpaleteiras", href: "/produtos?cat=Transpaleteiras" },
    ],
  },
  { label: "Serviços", href: "/#servicos", isAnchor: true },
  { label: "Sobre Nós", href: "/#sobre", isAnchor: true },
  { label: "Contato", href: "/#contato", isAnchor: true },
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
              {item.sub ? (
                <span className="text-background font-semibold text-sm uppercase tracking-[0.5px] hover:text-yellow transition-colors flex items-center gap-1 cursor-pointer">
                  {item.label}
                  <ChevronDown size={14} />
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-background font-semibold text-sm uppercase tracking-[0.5px] hover:text-yellow transition-colors"
                >
                  {item.label}
                </a>
              )}
              {item.sub && openSub === item.label && (
                <ul className="absolute top-full left-0 bg-dark py-2 min-w-[260px] rounded-md shadow-lg">
                  {item.sub.map((s, i) => (
                    <li key={s.label}>
                      <Link
                        to={s.href}
                        className={`block px-5 py-2 text-background font-medium text-[13px] hover:text-yellow transition-colors ${
                          i === 0 ? "font-bold border-b border-background/10 pb-3 mb-1" : ""
                        }`}
                      >
                        {s.label}
                      </Link>
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
            href="/#contato"
            className="bg-yellow text-dark font-bold text-xs uppercase px-5 py-2.5 rounded-md tracking-[0.5px] hover:opacity-90 transition-opacity"
          >
            Solicite um Orçamento
          </a>
          <button
            className="lg:hidden text-background"
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
                {item.sub ? (
                  <>
                    <Link
                      to={item.href}
                      className="text-background font-semibold text-sm uppercase tracking-[0.5px] hover:text-yellow transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.sub.map(s => (
                        <li key={s.label}>
                          <Link
                            to={s.href}
                            className="text-background/70 text-sm hover:text-yellow transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-background font-semibold text-sm uppercase tracking-[0.5px] hover:text-yellow transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
