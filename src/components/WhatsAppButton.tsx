import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999998888"
      target="_blank"
      rel="noopener noreferrer"
      title="Fale conosco no WhatsApp"
      aria-label="Abrir conversa no WhatsApp com a JCL Empilhadeiras"
      className="fixed bottom-6 right-6 z-[999] w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-[hsl(142,70%,49%)] text-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="absolute -top-10 right-0 bg-dark text-background text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 hover:opacity-100 pointer-events-none transition-opacity">
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
