import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Si hay hash, busca el elemento y haz scroll
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si no hay hash, sube al inicio
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
