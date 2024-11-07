import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { scrollToTop } from "../utils/functions";

// Tableau d'images promotionnelles et informationnelles
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
          {promoList.map((image, index) => {
            console.log(image); // Vérifie les valeurs dans la console
            return (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                {!image.video ? (
                  // Ouvre la modale uniquement si c'est une image
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => openModal(image)}
                  />
                ) : (
                  // Vidéo sans événement `onClick`
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-96 object-cover"
                  >
                    <source src={image.srcVid} type={image.typeVid} />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            );
          })}
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
