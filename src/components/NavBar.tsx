import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { categoriesMeta } from "@/data/products";

const navItems = [
  { label: "HOME", href: "/" },
  {
    label: "EQUIPAMENTOS",
    href: "/produtos",
    sub: categoriesMeta.map(c => ({ label: c.name, href: `/produtos/categoria/${c.slug}` })),
  },
  { label: "SOBRE NÓS", href: "/sobre" },
  { label: "CONTATO", href: "/contato" },
];

interface NavBarProps {
  variant?: "light" | "dark";
}

const NavBar = ({ variant = "light" }: NavBarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const { pathname } = useLocation();

  const isDark = variant === "dark";
  const bg = isDark ? "bg-dark-nav" : "bg-background";
  const textBase = isDark ? "text-background" : "text-dark";
  const hover = "hover:text-yellow";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav
      className={`sticky top-0 z-50 ${bg} ${isDark ? "" : "border-b border-border"} h-[64px] flex items-center`}
      aria-label="Navegação principal"
    >
      <div className="container flex items-center justify-between gap-4">
        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.sub && setOpenSub(item.label)}
                onMouseLeave={() => setOpenSub(null)}
              >
                <Link
                  to={item.href}
                  className={`font-bold text-[13px] uppercase tracking-[0.5px] transition-colors flex items-center gap-1 py-5 ${
                    active ? "text-yellow border-b-2 border-yellow" : `${textBase} ${hover}`
                  }`}
                >
                  {item.label}
                  {item.sub && <ChevronDown size={14} />}
                </Link>
                {item.sub && openSub === item.label && (
                  <ul className="absolute top-full left-0 bg-dark-nav py-2 min-w-[260px] rounded-md shadow-xl border border-background/10">
                    {item.sub.map(s => (
                      <li key={s.label}>
                        <Link
                          to={s.href}
                          className="block px-5 py-2.5 text-background font-medium text-[13px] hover:text-yellow hover:bg-dark transition-colors"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3 ml-auto">
          <a
            href="https://wa.me/553235315957"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow text-xs"
            aria-label="Fale conosco no WhatsApp"
          >
            <FaWhatsapp size={16} />
            FALE CONOSCO
          </a>
          <button
            className={`lg:hidden ${textBase}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-dark-nav py-4 lg:hidden z-50 border-t border-background/10">
          <ul className="container flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="text-background font-bold text-sm uppercase tracking-[0.5px] hover:text-yellow transition-colors block py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <ul className="ml-4 mt-1 mb-2 space-y-1.5">
                    {item.sub.map(s => (
                      <li key={s.label}>
                        <Link
                          to={s.href}
                          className="text-background/70 text-sm hover:text-yellow transition-colors block py-1"
                          onClick={() => setMobileOpen(false)}
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
        </div>
      )}
    </nav>
  );
};

export default NavBar;
