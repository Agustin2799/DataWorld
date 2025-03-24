import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior de la página
  }, [location]); // Solo se ejecutará cuando cambie la ruta

  return null; // Este componente no necesita renderizar nada
};

export default ScrollToTop;
