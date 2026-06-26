import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo da página"
      className="fixed bottom-24 right-6 z-[998] min-w-[56px] min-h-[56px] w-14 h-14 rounded-md bg-yellow text-dark flex flex-col items-center justify-center shadow-lg hover:bg-yellow-dark transition-all"
    >
      <ArrowUp size={20} strokeWidth={3} />
      <span className="text-[10px] font-extrabold uppercase leading-none mt-0.5">Topo</span>
    </button>
  );
};

export default ScrollTopButton;