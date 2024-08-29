import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BoutonGalerie from "../layouts/BoutonGalerie";
import BoutonReservation from "../layouts/BoutonReservation";
import { scrollToTop } from "../utils/functions";

import AOS from "aos";
import "aos/dist/aos.css";

const Pilates = () => {
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

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Bandeau de présentation */}
      <div className="w-full h-[21rem] overflow-hidden">
        <Link to="/galerie">
          <img
            src="/assets/pics/pilates/laureen_4.jpg"
            alt="Pilates"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-extrabold text-indigo-950 text-center mb-8"
          data-aos="zoom-in"
        >
          Le Pilates
        </h2>

        <div
          className="bg-white shadow-xl p-8 rounded-lg relative z-20 tracking-wide"
          data-aos="zoom-in"
        >
          <p className="text-lg text-indigo-950 first-letter:text-xl first-letter:font-bold first-letter:ml-4 leading-relaxed mb-2 text-justify">
            Le Pilates est une méthode de conditionnement physique qui se
            concentre sur le renforcement du "centre" du corps, améliorant ainsi
            la posture, la stabilité et la souplesse.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            En travaillant sur des mouvements contrôlés et précis, le Pilates
            permet de développer la{" "}
            <span className="text-pink-500 ">force</span>, la{" "}
            <span className="text-pink-500 ">souplesse</span>, et l'{" "}
            <span className="text-pink-500 ">équilibre</span> tout en favorisant
            une meilleure prise de conscience corporelle.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Cette discipline, adaptée à tous les niveaux, est particulièrement
            bénéfique pour ceux qui cherchent à améliorer leur posture et à
            prévenir les blessures.
          </p>
          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Elle peut être pratiquée seule ou en complément d'autres activités
            physiques pour un développement musculaire harmonieux.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            <b>
              Que vous soyez débutant ou pratiquant confirmé, nos cours de
              Pilates vous aideront à atteindre vos objectifs de fitness tout en
              prenant soin de votre bien-être général.
            </b>
          </p>
        </div>

        {/* Bouton vers la galerie et tarifs */}
        <div
          className={`${
            isMobile
              ? "flex flex-col justify-center items-center gap-2 mt-12"
              : "flex justify-center items-center gap-8 mt-20"
          }`}
        >
          <BoutonGalerie texte="Voir la Galerie" />
          <BoutonReservation texte="Réserver mon 1er cours" />
        </div>
      </div>
    </div>
  );
};

export default Pilates;
