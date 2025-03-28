import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import BoutonGalerie from "../layouts/BoutonGalerie";
import BoutonReservation from "../layouts/BoutonReservation";
import { scrollToTop } from "../utils/functions";

import AOS from "aos";
import "aos/dist/aos.css";

const Fitness = () => {
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
            src="/assets/pics/fitness/fitness_homepage.jpeg"
            alt="Cerceau aérien"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      {/* Contenu principal */}
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-extrabold text-indigo-950 text-center mb-8"
          data-aos="zoom-in"
        >
          FIT & STRONG
        </h2>
        <h3
          className="text-xl font-extrabold text-indigo-950 text-center mb-8 animate-pulse"
          data-aos="zoom-in"
        >
          Du cardio, du renfo, du fun !
        </h3>

        <div
          className="bg-white shadow-xl p-8 rounded-lg relative z-20 tracking-wide"
          data-aos="zoom-in"
        >
          <p className="text-lg text-center font-semibold text-indigo-950 first-letter:text-xl first-letter:font-bold first-letter:ml-4 leading-relaxed mb-6">
            Envie d’un cours dynamique, accessible à tous, qui allie{" "}
            <span className="text-pink-500 "> cardio</span> et{" "}
            <span className="text-pink-500 ">renforcement musculaire</span> tout
            en respectant ton corps ? *Fit & Strong* est fait pour toi !
          </p>
          Ce cours ludique mêle différentes influences :
          <p className="text-lg text-indigo-950 leading-relaxed mb-6 text-justify"></p>
          <p className="text-lg text-indigo-950 text-justify leading-relaxed mb-3">
            <ul>
              <li>🥊 *Boxe* pour l’énergie et la coordination</li>
              <li>🧘‍♀️ *Pilates* pour la posture et le gainage</li>
              <li>💃 *Mouvements de danse* pour la fluidité et l’amusement</li>
              <li>🏋️‍♂️ *Circuit training*pour une tonicité complète</li>
            </ul>
          </p>
          <p className="text-lg text-justify text-indigo-950 leading-relaxed mb-6">
            Objectifs ?...{" "}
            <span className="text-pink-500 "> Brûler des calories</span>,{" "}
            <span className="text-pink-500 ">renforcer ton corps</span> et{" "}
            <span className="text-pink-500 ">améliorer ton endurance</span>
          </p>
          <p className="text-lg text-justify text-indigo-950 leading-relaxed mb-6">
            Le tout dans une ambiance motivante et bienveillante. Aucun
            mouvement explosif, juste une progression en douceur pour te sentir
            plus fort(e) et en pleine forme !
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

export default Fitness;
