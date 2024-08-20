import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BoutonGalerie from "../layouts/BoutonGalerie";
import BoutonReservation from "../layouts/BoutonReservation";

import AOS from "aos";
import "aos/dist/aos.css";

const Enfant = () => {
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
            src="/assets/pics/Laureen_Cerceau_6.jpg"
            alt="Enfants faisant du cerceau aérien"
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
          Activités Aériennes pour Enfants
        </h2>

        <div
          className="bg-white shadow-xl p-8 rounded-lg relative z-20"
          data-aos="fade-in"
        >
          <p className="text-lg text-indigo-950 leading-relaxed mb-4 text-justify">
            Nous accueillons les enfants avec enthousiasme et offrons des
            activités aériennes adaptées à leur âge et à leur niveau. Que ce
            soit le <span className="text-pink-500 animate-pulse">cerceau</span>{" "}
            ou le <span className="text-pink-500 animate-pulse">tissu</span>{" "}
            aérien, ces disciplines offrent des opportunités exceptionnelles
            pour les plus jeunes.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-4 text-justify">
            Le cerceau aérien et le tissu aérien sont non seulement amusants,
            mais ils contribuent également à développer des compétences
            physiques essentielles telles que la{" "}
            <span className="text-pink-500 animate-pulse">force</span>, la{" "}
            <span className="text-pink-500 animate-pulse">souplesse</span> et la{" "}
            <span className="text-pink-500 animate-pulse">coordination</span>.
            Les enfants peuvent ainsi améliorer leur motricité tout en
            s'amusant.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-4 text-justify">
            En plus des avantages physiques, ces activités aériennes favorisent
            la{" "}
            <span className="text-pink-500 animate-pulse">
              confiance en soi
            </span>{" "}
            et le{" "}
            <span className="text-pink-500 animate-pulse">
              travail en équipe
            </span>
            . Travailler en hauteur dans un environnement sécurisé aide les
            enfants à surmonter leurs peurs et à se dépasser dans un cadre
            ludique et stimulant.
          </p>

          <p className="text-xl text-indigo-950 leading-relaxed mb-4 text-justify">
            Nos cours sont conçus pour être à la fois sûrs, éducatifs, amusants,
            et enrichissants !
          </p>
          <p className="text-lg text-indigo-950 leading-relaxed mb-4 text-justify">
            Des jeux et des exercices adaptés garantissent que chaque enfant
            puisse progresser à son rythme tout en s'amusant.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-4 text-justify">
            Offrir à votre enfant la possibilité d'explorer les arts aériens est
            une excellente manière de compléter leur développement global et
            d'encourager un mode de vie actif et sain.
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

export default Enfant;
