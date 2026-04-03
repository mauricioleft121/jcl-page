import { Phone, Mail, Clock } from "lucide-react";

const TopBar = () => {
  return (
    <div className="h-[68px] bg-dark flex items-center">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-yellow font-bold text-2xl tracking-tight">JCL</span>
          <span className="text-background font-bold text-2xl tracking-tight">Empilhadeiras</span>
        </div>

        {/* Info groups - hidden on mobile */}
        <div className="hidden md:flex items-center gap-10">
          <InfoGroup
            icon={<Phone className="text-yellow" size={22} />}
            title="LIGUE AGORA"
            subtitle="(11) 9999-8888"
          />
          <InfoGroup
            icon={<Mail className="text-yellow" size={22} />}
            title="E-MAIL"
            subtitle="contato@jclempilhadeiras.com.br"
          />
          <InfoGroup
            icon={<Clock className="text-yellow" size={22} />}
            title="HORÁRIO"
            subtitle="Seg–Sex: 08h às 18h"
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
  <div className="flex items-center gap-3">
    {icon}
    <div>
      <p className="text-background font-semibold text-[11px] uppercase tracking-[0.5px]">{title}</p>
      <p className="text-background/70 text-xs">{subtitle}</p>
    </div>
  </div>
);

export default TopBar;
