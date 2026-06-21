import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToSection() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // اگر URL میں hash ہے تو scroll کرو
    if (hash) {
      const sectionId = hash.replace("#", "");
      // Navbar ki height (approx 80px) کو account میں لو
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -80; // Navbar height
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else if (pathname === "/") {
      // اگر home page ہے اور کوئی hash نہیں تو top پر جاؤ
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);
}