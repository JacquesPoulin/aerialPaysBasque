import { useState, useEffect } from "react";

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà vu la popup
    const hasSeenPopup = localStorage.getItem("hasSeenPromoPopup");

    if (!hasSeenPopup) {
      setIsOpen(true);
      localStorage.setItem("hasSeenPromoPopup", "true");

      // Ferme automatiquement après 30 secondes
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 animate-fadeIn"
      style={{
        animation: "fadeIn 0.3s ease-in-out",
      }}
    >
      <div className="relative max-w-xl w-full mx-4">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-white rounded-full text-gray-800 font-bold shadow-lg"
        >
          ×
        </button>
        <img
          src="/assets/pics/autres/promo_noel_2024.jpg"
          alt="Promotion Noël 2024"
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default PromoPopup;
