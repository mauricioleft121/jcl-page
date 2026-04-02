import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999998888"
      target="_blank"
      rel="noopener noreferrer"
      title="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-[999] w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-[hsl(142,70%,49%)] text-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
