import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Rola a janela para o topo em toda e qualquer transição de página.
 * Usa useLayoutEffect (antes da pintura, evita "flash" na posição antiga) e
 * desativa a restauração automática de scroll do navegador (voltar/avançar),
 * garantindo que qualquer navegação — inclusive back/forward — comece no topo.
 */
const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
