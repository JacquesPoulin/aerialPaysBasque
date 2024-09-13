import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { scrollToTop } from "../utils/functions";

// Tableau d'images promotionnelles et informationnelles
import promoList from "../data/promoList";

const Info = () => {
  // État pour la modale
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Détecter si on est sur un écran mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile si l'écran est plus petit que 768px
    };

    handleResize(); // Appel initial pour définir l'état au chargement
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gérer le défilement de la page lorsque la modale est ouverte
  useEffect(() => {
    if (selectedImage) {
      // Désactiver le scroll lorsque la modal est ouverte
      document.body.style.overflow = "hidden";
    } else {
      // Réactiver le scroll lorsque la modal est fermée
      document.body.style.overflow = "auto";
    }

    // Nettoyage lors du démontage du composant ou de la fermeture de la modal
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  // Ouvrir la modal avec l'image sélectionnée
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Fermer la modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Bandeau de présentation */}
      <div className="w-full h-[20rem] overflow-hidden">
        <img
          src="/assets/pics/logos/logo_test.jpg" // TODO Remplacer avec l'image appropriée
          alt="Bandeau de Planning"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu principal */}
      <div
        className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
        data-aos="zoom-in"
      >
        {/* Titre et sous-titre */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 py-5 md:py-2">
          <div className="w-52 h-2 bg-purple-100 rounded-lg"></div>
          <h2
            className={`text-2xl sm:text-4xl font-extrabold text-indigo-950 text-center ${
              isMobile ? "text-2xl" : "text-4xl"
            }`}
          >
            Infos utiles
          </h2>
          <div className="w-52 h-2 bg-purple-100 rounded-lg"></div>
        </div>

        <p className="text-center font-semibold text-indigo-950 mb-10">
          2024 - 2025
        </p>

        {/* Galerie d'images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {promoList.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Modal pour afficher l'image en grand */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75"
            onClick={closeModal} // Fermer la modal en cliquant sur l'arrière-plan
          >
            <div
              className="relative max-w-4xl max-h-screen p-4 bg-white rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant sur l'image elle-même
            >
              {/* Bouton pour fermer la modal */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-indigo-500 text-5xl font-bold"
              >
                &times;
              </button>

              {/* Affichage de l'image en grand */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-screen rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
