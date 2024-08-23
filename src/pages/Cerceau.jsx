import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import BoutonGalerie from "../layouts/BoutonGalerie";
import BoutonReservation from "../layouts/BoutonReservation";
import { scrollToTop } from "../utils/functions";

import AOS from "aos";
import "aos/dist/aos.css";

const Cerceau = () => {
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
            src="/assets/pics/cerceau/nature/cerceau_nature_2.jpg"
            alt="Cerceau Aérien"
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
          Le Cerceau Aérien
        </h2>

        <div
          className="bg-white shadow-xl p-8 rounded-lg relative z-20"
          data-aos="zoom-in"
        >
          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Le cerceau aérien est une discipline circassienne (venant du cirque)
            qui implique l'exécution de figures acrobatiques sur un anneau en
            acier suspendu dans les airs.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Cette pratique permet de réaliser des performances spectaculaires
            alliant puissance, souplesse et élégance. En plus d'offrir un
            spectacle visuellement saisissant, le cerceau aérien est un
            excellent exercice pour{" "}
            <span className="text-pink-500 animate-pulse">
              renforcer le haut du corps
            </span>
            , améliorer la{" "}
            <span className="text-pink-500 animate-pulse">flexibilité </span>et
            augmenter l'
            <span className="text-pink-500 animate-pulse">endurance</span>{" "}
            cardiovasculaire.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            En plus des bénéfices physiques, le cerceau aérien offre des
            avantages significatifs pour le bien-être mental...la satisfaction
            qui accompagne la maîtrise d'une nouvelle figure sur le cerceau est
            extrêmement gratifiante.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Cette discipline aide également à renforcer l'
            <span className="text-pink-500 animate-pulse">attention</span> et la{" "}
            <span className="text-pink-500 animate-pulse">concentration</span>,
            car on doit être pleinement engagé dans l'instant présent pour
            exécuter leurs mouvements en toute sécurité et avec précision.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Que vous soyez débutant ou confirmé, nos cours sont adaptés à tous
            les niveaux.
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

export default Cerceau;
