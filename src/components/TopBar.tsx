import { Phone, Clock, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const TopBar = () => {
  return (
    <div className="bg-dark py-3">
      <div className="w-full flex flex-wrap items-center justify-start gap-x-10 xl:gap-x-14 gap-y-3 px-4 lg:px-6">
        {/* Logo */}
        <Logo theme="light" className="h-20 lg:ml-36" />

        {/* Info groups - hidden on mobile */}
        <div className="hidden lg:flex items-center gap-10 ml-24">
          <InfoGroup
            icon={<Clock size={24} />}
            title="HORÁRIO DE FUNCIONAMENTO"
            subtitle="Segunda a sexta 07:00 - 17:00"
          />
          <InfoGroup
            icon={<Phone size={24} />}
            title="32 3531-5957"
            subtitle="jclempilhadeira@gmail.com"
          />
          <InfoGroup
            icon={<MapPin size={24} />}
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
  <div className="flex items-center gap-3 max-w-[300px]">
    <span className="text-yellow flex items-center justify-center flex-shrink-0">
      {icon}
    </span>
    <div className="min-w-0">
      <p className="text-background font-bold text-[13px] uppercase tracking-[0.5px] truncate">{title}</p>
      <p className="text-background text-[13px] truncate">{subtitle}</p>
    </div>
  </div>
);

export default TopBar;
