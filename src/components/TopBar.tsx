import { Phone, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-dark py-3">
      <div className="container flex flex-wrap items-center justify-between gap-y-3">
        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-1" aria-label="JCL Empilhadeiras — início">
          <span className="jcl-heading text-3xl text-background">JC</span>
          <span className="jcl-heading text-3xl text-yellow">L</span>
          <span className="jcl-heading text-[11px] text-background/80 ml-2 tracking-[0.2em] hidden sm:inline">
            EMPILHADEIRAS
          </span>
        </Link>

        {/* Info groups - hidden on mobile */}
        <div className="hidden lg:flex items-center gap-8">
          <InfoGroup
            icon={<Clock size={20} />}
            title="HORÁRIO DE FUNCIONAMENTO"
            subtitle="Segunda a sexta 08:00 - 17:00"
          />
          <InfoGroup
            icon={<Phone size={20} />}
            title="32 3531-5957"
            subtitle="vendas@jclempilhadeiras.com.br"
          />
          <InfoGroup
            icon={<MapPin size={20} />}
            title="R. CEL. OTAVIANO DA ROCHA, 1110"
            subtitle="São Domingos · Ubá / MG"
          />
        </div>
      </div>
    </div>
  );
};

const InfoGroup = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div className="flex items-center gap-3 max-w-[260px]">
    <span className="w-10 h-10 rounded-full bg-yellow text-dark flex items-center justify-center flex-shrink-0">
      {icon}
    </span>
    <div className="min-w-0">
      <p className="text-background font-bold text-[11px] uppercase tracking-[0.5px] truncate">{title}</p>
      <p className="text-background/70 text-[11px] truncate">{subtitle}</p>
    </div>
  </div>
);

export default TopBar;
