import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import imagesList from "../data/imagesList";
import imagesNavList from "../data/imagesNavList";
import ImageModal from "../layouts/ImageModal";
import { scrollToTop } from "../utils/functions";

const Galerie = () => {
  const [activeTab, setActiveTab] = useState("cerceau");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true); // Chargement initial de la page
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    scrollToTop();
    AOS.init({ duration: 800, once: true });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const preloadImages = async () => {
      const activeImages = imagesList[activeTab] || [];
      const loadPromises = activeImages.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = () => resolve(src); // Gérer aussi les erreurs
          })
      );

      await Promise.all(loadPromises);
      setImagesLoaded((prev) => ({ ...prev, [activeTab]: true }));
      setInitialLoading(false); // Désactiver le chargement initial une fois les premières images chargées
    };

    if (!imagesLoaded[activeTab]) {
      preloadImages();
    } else {
      setInitialLoading(false);
    }
  }, [activeTab, imagesLoaded]);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  return (
    <div>
      {initialLoading ? (
        <div className="flex items-center justify-center h-screen">
          {/* <div className="animate-pulse">Chargement...</div> */}
          <div className="w-16 h-16 border-4 border-indigo-950 border-solid rounded-full border-t-transparent animate-spin"></div>
        </div>
      ) : (
        <div className="flex flex-col min-h-screen bg-gray-100">
          {/* Bandeau de présentation */}
          <div className="w-full h-[20rem] overflow-hidden">
            <img
              src="/assets/pics/autres/bandeau_v2.jpg"
              alt="Bandeau galerie"
              className="w-full h-full object-cover max-w-full"
            />
          </div>

          {/* Contenu principal */}
          <div
            className="max-w-5xl 2xl:max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
            data-aos="zoom-in"
          >
            <div className="w-full flex justify-center items-center gap-4">
              <div className="w-1/4 h-2 bg-purple-100 rounded-lg"></div>
              <h2
                className={`text-2xl sm:text-4xl font-extrabold text-indigo-950 text-center ${
                  isMobile ? "text-2xl" : "text-4xl"
                }`}
              >
                GALERIE
              </h2>
              <div className="w-1/4 h-2 bg-purple-100 rounded-lg"></div>
            </div>

            {/* Navigation (Onglets) */}
            {!isMobile ? (
              <div className="w-full mt-10">
                <div className="relative">
                  <ul
                    className="relative flex flex-wrap justify-center p-1 list-none rounded-lg bg-blue-gray-50/60"
                    role="tablist"
                  >
                    {imagesNavList?.map(({ id, label }) => (
                      <li
                        key={id}
                        className="flex-auto text-center mb-2 md:mb-0"
                      >
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
                  {imagesNavList?.map(({ id, label }) => (
                    <option key={id} value={id}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Contenu des images */}
            <div className="mt-10">
              {imagesNavList?.map(({ id }) => (
                <div
                  key={id}
                  className={`${activeTab === id ? "block" : "hidden"}`}
                >
                  {imagesList[id] && imagesList[id].length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20">
                      <div className="text-center">
                        <div className="text-indigo-950 text-6xl mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-24 w-24 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-indigo-950 mb-2">
                          Les photos arrivent bientôt
                        </h3>
                        <p className="text-gray-600">
                          Revenez dans quelques jours pour découvrir de
                          nouvelles images.
                        </p>
                      </div>
                    </div>
                  )}
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
      )}
    </div>
  );
};

export default Galerie;
