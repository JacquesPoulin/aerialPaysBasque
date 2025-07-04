import { useState, useEffect } from "react";

// DATA concernant le promotion du moment (s'il y en a une)
import { getCurrentPromotion } from "../data/promoPopUpList";

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPromo = getCurrentPromotion();

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà vu la popup promotionnelle
    const hasSeenPopup = localStorage.getItem("hasSeenPromoPopup");

    if (currentPromo && !hasSeenPopup) {
      setIsOpen(true);
      localStorage.setItem("hasSeenPromoPopup", "true");

      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 30000); // modale se ferme au bout de 30 secondes

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen || !currentPromo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 animate-fadeIn"
      style={{
        animation: "fadeIn 0.3s ease-in-out",
      }}
      onClick={() => setIsOpen(false)} // Ferme la modale au clic sur le backdrop
    >
      <div
        className="relative max-w-xl w-full mx-4"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture au clic sur l'image
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-white rounded-full text-gray-800 font-bold shadow-lg hover:bg-gray-100 transition-colors"
        >
          ×
        </button>
        <img
          src={currentPromo.imageSrc}
          alt={currentPromo.imageAlt}
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default PromoPopup;
