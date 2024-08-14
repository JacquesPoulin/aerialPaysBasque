import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import imagesList from "../data/imagesList";
import imagesNavList from "../data/imagesNavList";
import ImageModal from "../layouts/ImageModal";

const Galerie = () => {
  const [activeTab, setActiveTab] = useState("cerceau");
  const [selectedImage, setSelectedImage] = useState(null); // Pour gérer l'image sélectionnée pour la modale

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
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
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-extrabold text-slate-900 text-center mb-8"
          data-aos="zoom-in"
        >
          GALERIE
        </h2>

        {/* ONGLETS */}
        <div className="w-full" data-aos="zoom-in">
          <div className="relative">
            <ul
              className="relative flex flex-wrap p-1 list-none rounded-lg bg-blue-gray-50/60"
              role="tablist"
            >
              {imagesNavList.map(({ id, label }) => (
                <li key={id} className="z-30 flex-auto text-center">
                  <button
                    className={`z-30 flex items-center justify-center w-full px-4 py-2 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-800 ${
                      activeTab === id
                        ? "bg-gray-200 text-slate-800"
                        : "bg-inherit"
                    }`}
                    onClick={() => setActiveTab(id)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Contenu des onglets */}
            <div className="pt-2">
              {imagesNavList.map(({ id }) => (
                <div
                  key={id}
                  className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 ${
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
          </div>
        </div>
      </div>

      {/* Modale */}
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
