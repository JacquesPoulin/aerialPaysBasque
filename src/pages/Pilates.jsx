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
      setIsMobile(window.innerWidth <= 668); // Mobile si l'écran est plus petit que 768px
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
            src="/assets/pics/autres/l4.jpg"
            alt="Pilates"
            className="w-full h-full object-cover max-w-full"
          />
        </Link>
      </div>

      {/* Contenu principal */}
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
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
            Le Pilates est une méthode sportive qui trouve ses origines au début
            du 20ᵉ siècle. Il a été inventé par Joseph Pilates, un Allemand
            passionné par le sport et la rééducation. Lorsqu&#39;il était
            interné en Angleterre durant la Première Guerre mondiale, il
            développa cette méthode pour aider ses compagnons à rester en forme
            en utilisant des exercices basés sur le contrôle, la respiration, et
            la concentration.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Le Pilates vise à{" "}
            <span className="text-pink-500 ">
              renforcer les muscles profonds
            </span>
            , <span className="text-pink-500 ">améliorer la posture</span>, et{" "}
            <span className="text-pink-500 ">favoriser la souplesse</span>, tout
            en <span className="text-pink-500 ">réduisant le stress</span>.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Aujourd&#39;hui, cette discipline adaptée à tous les niveaux, est
            pratiquée dans le monde entier, tant pour la remise en forme, la
            rééducation et est particulièrement bénéfique pour ceux qui
            cherchent à prévenir les blessures.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Elle peut être pratiquée seule ou en complément d'autres activités
            physiques pour un développement musculaire harmonieux.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            <b>
              Que vous soyez débutant ou confirmé, nos cours sont adaptés à tous
              les niveaux !
            </b>
          </p>
          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-center">
            Les cours de pilates ont lieu le : <b>Jeudi à 10h30</b> à la{" "}
            <a
              href="https://www.google.com/maps?q=22+Avenue+Larochefoucauld,+64200+Biarritz,+France"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
              title="Ouvrir avec Google Maps"
            >
              <b>Salle Les Turbulents à Biarritz</b>
            </a>
            .
          </p>
          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Ils durent 1 h et sont constitués d’un échauffement, d’un corps de
            séance et d’un retour au calme.
          </p>
        </div>

        <div className="relative mt-8">
          <img
            src="/assets/pics/autres/pilates.jpg"
            alt=""
            className="w-full rounded-lg"
          />
          {/* Conteneur pour les boutons */}
          <div
            className={`absolute inset-x-0 bottom-1 ${
              isMobile ? "hidden" : "flex justify-around items-center"
            }`}
          >
            <BoutonGalerie texte="Voir la Galerie" />
            <BoutonReservation texte="Réserver mon 1er cours" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pilates;
