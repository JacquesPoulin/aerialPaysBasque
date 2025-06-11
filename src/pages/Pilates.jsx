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
      <div className="w-full h-[26rem] overflow-hidden">
        <Link to="/galerie">
          <img
            src="/assets/pics/pilates/pilate_aerien_hero.jpg"
            alt="Pilates aérien"
            className="w-full h-full object-cover object-center max-w-full"
          />
        </Link>
      </div>

      {/* Contenu principal */}
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-extrabold text-indigo-950 text-center mb-8"
          data-aos="zoom-in"
        >
          Pilates aérien
        </h2>

        <div
          className="bg-white shadow-xl p-8 rounded-lg relative z-20 tracking-wide"
          data-aos="zoom-in"
        >
          <p className="text-lg text-indigo-950 first-letter:text-xl first-letter:font-bold first-letter:ml-4 leading-relaxed mb-2 text-justify">
            Le Pilates aérien est une version innovante du Pilates traditionnel,
            réalisée à l'aide d'un hamac suspendu. Ce tissu soutient le corps
            dans les exercices, permettant d'explorer les mouvements en
            suspension, tout en respectant les principes fondamentaux du Pilates
            : respiration, contrôle, précision et centrage.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Cette méthode douce et efficace permet de :
            <ul className="list-disc pl-6 mt-2">
              <li className="text-pink-500 ">
                renforcer les muscles profonds, notamment la sangle abdominale
              </li>
              <li className="text-pink-500">
                améliorer la posture et l'alignement du corps
              </li>
              <li className="text-pink-500">
                développer l'équilibre et la coordination
              </li>
              <li className="text-pink-500">
                soulager les tensions articulaires grâce au travail en
                décompression
              </li>
            </ul>
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Le hamac devient un véritable allié pour approfondire certains
            exercices, se challenger en toute sécurité et ressentir une légèreté
            nouvelle dans le mouvement.{" "}
            <span className="text-pink-500">Accessible à tous </span>, le
            Pilates aérien s'adapte à chaque corps et offre un travail à la fois
            intense, fluide et respectueux
          </p>

          {/* <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Elle peut être pratiquée seule ou en complément d'autres activités
            physiques pour un développement musculaire harmonieux.
          </p> */}

          {/* <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            <b>
              Que vous soyez débutant ou confirmé, nos cours sont adaptés à tous
              les niveaux !
            </b>
          </p> */}
          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-center">
            Les cours de Pilates aérien ont lieu le : <b>Mercredi à 11h15</b> à
            la{" "}
            <a
              href="https://www.google.com/maps?q=22+Avenue+Benjamin+Gomez,+64100+Bayonne,+France"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
              title="Ouvrir avec Google Maps"
            >
              <b>Salle Talia Danses du Monde</b>
            </a>
            .
          </p>
        </div>

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

//     <div className="relative mt-8">
//       <img
//         src="/assets/pics/autres/pilates.jpg"
//         alt=""
//         className="w-full rounded-lg"
//       />
//       {/* Conteneur pour les boutons */}
//       <div
//         className={`absolute inset-x-0 bottom-1 ${
//           isMobile ? "hidden" : "flex justify-around items-center"
//         }`}
//       >
//         <BoutonGalerie texte="Voir la Galerie" />
//         <BoutonReservation texte="Réserver mon 1er cours" />
//       </div>
//     </div>
//   </div>
// </div>

export default Pilates;
