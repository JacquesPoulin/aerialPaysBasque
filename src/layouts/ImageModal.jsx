import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Modale pour afficher l'image
const ImageModal = ({ src, alt, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  // Initialisation d'AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-background")) {
      setIsClosing(true);
      setTimeout(onClose, 100); // Délai pour la transition de fermeture
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 modal-background ${
        isClosing ? "opacity-0" : "opacity-100"
      } transition-opacity duration-100`}
      onClick={handleClickOutside}
    >
      <div
        className={`relative p-4 bg-white rounded-lg shadow-lg transition-transform transform duration-300 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
        data-aos={!isClosing ? "zoom-in" : ""}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={() => {
            setIsClosing(true);
            setTimeout(onClose, 100); // Délai pour la transition de fermeture
          }}
        >
          ✖
        </button>
        <img
          className="max-w-full max-h-[80vh] rounded-lg"
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default ImageModal;
