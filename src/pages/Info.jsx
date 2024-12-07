import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { scrollToTop } from "../utils/functions";

// Tableau d'évènements promotionnelles et informationnelles
import promoList from "../data/promoList";

const Info = () => {
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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  // Fonction pour vérifier si un événement est passé
  const isEventPassed = (eventDate) => {
    if (!eventDate) return false; // Les infos sans date ne sont jamais "passées"
    const today = new Date();
    const event = new Date(eventDate);
    return event < today;
  };

  // Rendu des événements avec vérification dynamique
  const renderEvent = (image, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-lg shadow-lg relative aspect-square"
    >
      {!image.video ? (
        <div className="relative h-full">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => openModal(image)}
          />

          {isEventPassed(image.date) && (
            <>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-sm">
                Événement passé
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="relative h-full">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={image.srcVid} type={image.typeVid} />
            Votre navigateur ne supporte pas les vidéos.
          </video>

          {isEventPassed(image.date) && (
            <>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
                Événement passé
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="w-full h-[20rem] overflow-hidden">
        <img
          src="/assets/pics/logos/logo_test.jpg"
          alt="Bandeau de Planning"
          className="w-full h-full object-cover max-w-full"
        />
      </div>

      <div
        className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
        data-aos="zoom-in"
      >
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
          {promoList.map((image, index) => renderEvent(image, index))}
        </div>
      </div>

      {/* Modale pour afficher l'image agrandie */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full p-4">
            <button
              className="absolute top-0 right-0 p-2 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-screen object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
