import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import imagesList from "../data/imagesList";
import imagesNavList from "../data/imagesNavList";
import ImageModal from "../layouts/ImageModal";
import { scrollToTop } from "../utils/functions";

import { FaArrowCircleUp } from "react-icons/fa";

const Galerie = () => {
  const [activeTab, setActiveTab] = useState("cerceau");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    // Détecter si on est sur un écran mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Par exemple, mobile si l'écran est plus petit que 768px
    };

    handleResize(); // Appeler une fois pour initialiser
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Bandeau de présentation */}
      <div className="w-full h-[20rem] overflow-hidden">
        <img
          src="/assets/pics/bandeau_intro.png"
          alt="Bandeau de Planning"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu principal */}
      <div
        className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
        data-aos="zoom-in"
      >
        <div className="w-full flex justify-center items-center gap-4">
          <div className="w-1/4 h-1 bg-purple-100 rounded-lg"></div>
          <h2
            className={`text-2xl sm:text-4xl font-extrabold text-indigo-950 text-center ${
              isMobile ? "text-2xl" : "text-4xl"
            }`}
          >
            GALERIE
          </h2>
          <div className="w-1/4 h-1 bg-purple-100 rounded-lg"></div>
        </div>

        {/* Navigation (Onglets) */}
        {!isMobile ? (
          <div className="w-full mt-10">
            <div className="relative">
              <ul
                className="relative flex flex-wrap justify-center p-1 list-none rounded-lg bg-blue-gray-50/60"
                role="tablist"
              >
                {imagesNavList.map(({ id, label }) => (
                  <li key={id} className="flex-auto text-center mb-2 md:mb-0">
                    <button
                      className={`w-full px-4 py-2 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-800 ${
                        activeTab === id
                          ? "bg-indigo-200 text-slate-800"
                          : "bg-inherit"
                      }`}
                      onClick={() => setActiveTab(id)}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="mt-10 text-center">
            <select
              className="w-full max-w-xs mx-auto p-2 border rounded-lg bg-indigo-100 text-slate-800"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {imagesNavList.map(({ id, label }) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Contenu des images */}
        <div className="mt-10">
          {imagesNavList.map(({ id }) => (
            <div
              key={id}
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${
                activeTab === id ? "block" : "hidden"
              }`}
            >
              {imagesList[id].map((src, index) => (
                <div
                  key={index}
                  className="relative flex justify-center transition-transform transform hover:scale-105"
                  onClick={() =>
                    setSelectedImage({
                      src,
                      alt: `image-${id}-${index}`,
                    })
                  }
                >
                  <img
                    className="w-full h-auto max-w-full rounded-lg object-cover cursor-pointer"
                    src={src}
                    alt={`image-${id}-${index}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bouton pour remonter en haut */}
        {/* <div
          className="flex justify-center items-center mt-10 cursor-pointer"
          onClick={scrollToTop} // Ajout de l'événement onClick
        >
          <FaArrowCircleUp size={20} color="#1e1b4b" />
        </div> */}
      </div>

      {/* Modale ouverture de l'image */}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Galerie;
