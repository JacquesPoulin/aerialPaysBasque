import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BoutonGalerie from "../layouts/BoutonGalerie";
import BoutonReservation from "../layouts/BoutonReservation";

import AOS from "aos";
import "aos/dist/aos.css";

const Tissu = () => {
  const [isMobile, setIsMobile] = useState(false);

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
            src="/assets/pics/Laureen_Cerceau_9.jpg"
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
          Le Tissu Aérien
        </h2>

        <div
          className="bg-white shadow-xl p-8 rounded-lg relative z-20"
          data-aos="zoom-in"
        >
          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Le tissu aérien, à la base une discipline provenant du cirque, est
            devenu un véritable outil de sport et fitness. Si vous souhaitez
            intégrer des acrobaties impressionnantes dans vos routines sportives
            <span className="italic">
              {" "}
              (ou tout simplement pour une découverte ludique)
            </span>
            , le tissu aérien pourrait bien devenir votre allié incontournable !
          </p>
          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Bien que cette discipline exigeante demande de l'engagement, elle
            est divertissante et connaît un essor croissant à travers le monde.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Aussi appelé contorsion aérienne, ruban aérien ou simplement tissu,
            cet art allie l&apos;
            <span className="text-pink-500 animate-pulse">élégance</span> de la
            danse, la <span className="text-pink-500 animate-pulse">force</span>{" "}
            des mouvements acrobatiques, et la magie des numéros aériens. Elle
            permet également d&apos;exprimer une grande{" "}
            <span className="text-pink-500 animate-pulse">créativité</span> et
            d'explorer le mouvement d'une manière{" "}
            <span className="text-pink-500 animate-pulse"> unique</span>.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Nous savons que les débuts peuvent sembler un peu intimidants. Mais
            rassurez-vous, nous sommes là pour vous guider ! Avec un encadrement
            adapté et une touche de persévérance, vous serez en mesure de vous
            envoler en un rien de temps.
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

export default Tissu;
