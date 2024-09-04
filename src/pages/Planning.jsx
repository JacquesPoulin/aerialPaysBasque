import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { scrollToTop } from "../utils/functions";

import { FaMapMarkedAlt } from "react-icons/fa";

const Planning = () => {
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
      <div className="w-full h-[20rem] overflow-hidden">
        <img
          src="/assets/pics/autres/bandeau_intro.png" // Remplace avec l'image appropriée
          alt="Bandeau de Planning"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu principal */}
      <div
        className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
        data-aos="zoom-in"
      >
        {/* Titre et sous-titre */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 py-5 md:py-2">
          <div className="w-52 h-2 bg-purple-100 rounded-lg"></div>
          <h2
            className={`text-2xl sm:text-4xl font-extrabold text-indigo-950 text-center ${
              isMobile ? "text-2xl" : "text-4xl"
            }`}
          >
            Planning
          </h2>
          <div className="w-52 h-2 bg-purple-100 rounded-lg"></div>
        </div>

        <p className="text-center font-semibold text-indigo-950 mb-4">
          2024 - 2025
        </p>

        {/* Image du planning */}
        <div className="text-center mb-12">
          {/* Pastille promotionnelle */}
          <div className=" my-4 mx-auto  text-red-600 text-xs py-1 rounded-lg animate-pulse">
            <p className="text-sm md:text-lg">
              Adultes : Pas de cours la 2ème semaine des vacances scolaires{" "}
              <br />
              Enfants : Pas de cours pendant les vacances scolaires <br />
              L'association est fermée durant les vacances de fin d'année
            </p>
          </div>

          <img
            // src="https://lenvoleepoledancestudio.fr/wp-content/uploads/2024/05/Planning-2024-2025_site_Plan-de-travail-1.png" // TODO : Remplacer avec l'image appropriée
            src="/assets/pics/autres/planning_4.jpg"
            alt="Planning 2024-2025"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Adresses des salles */}
        <div className="text-center mt-12 mb-24">
          <h3 className="text-2xl font-semibold text-indigo-950 my-10">
            - Nos Salles -
          </h3>
          <div
            className={`${
              isMobile
                ? "flex flex-col justify-center items-center gap-10"
                : "flex justify-center items-center gap-20"
            }`}
          >
            <div>
              <h4 className="text-xl font-semibold text-slate-800">Aériens</h4>
              <p className="text-lg text-slate-700 mb-2">
                Salle "Talia Danses du monde"
              </p>
              <p className="text-sm text-slate-700 mb-2">
                22 avenue Benjamin Gomez, 64100 <b>Bayonne</b>
              </p>
              <div className="flex justify-center items-center gap-4">
                <FaMapMarkedAlt className="text-pink-500 hover:underline" />
                <a
                  href="https://www.google.com/maps?q=22+Avenue+Benjamin+Gomez,+64100+Bayonne,+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                  title="Ouvrir avec Google Maps"
                >
                  Carte
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-slate-800">Pilates</h4>
              <p className="text-lg text-slate-700 mb-2">
                Salle "Les Turbulents"
              </p>
              <p className="text-sm text-slate-700 mb-2">
                34 avenue de Tamames, 64200 <b>Biarritz</b>
              </p>
              <div className="flex justify-center items-center gap-4">
                <FaMapMarkedAlt className="text-pink-500 hover:underline" />
                <a
                  href="https://www.google.com/maps?q=34+Avenue+De+Tamames,+64200+Biarritz,+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                  title="Ouvrir avec Google Maps"
                >
                  Carte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
