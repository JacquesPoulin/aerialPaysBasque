import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BoutonGalerie from "../layouts/BoutonGalerie";
import BoutonReservation from "../layouts/BoutonReservation";
import { scrollToTop } from "../utils/functions";

import AOS from "aos";
import "aos/dist/aos.css";

const Yoga = () => {
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
      <div className="w-full h-[30rem] overflow-hidden">
        <Link to="/galerie">
          <img
            src="/assets/pics/yoga/yoga_3.JPEG"
            alt="Yoga aérien"
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
          Yoga aérien
        </h2>

        <div
          className="bg-white shadow-xl p-8 rounded-lg relative z-20 tracking-wide"
          data-aos="zoom-in"
        >
          <p className="text-lg text-indigo-950 first-letter:text-xl first-letter:font-bold first-letter:ml-4 leading-relaxed mb-2 text-justify">
            Le Yoga aérien est une pratique douce et ludique qui combine les
            postures traditionnelles du yoga avec l'utilisation d'un hamac
            suspendu ainsi que des combinaisons aériennes issues du cirque.
          </p>
          <p className="text-lg text-indigo-950 first-letter:text-xl first-letter:font-bold first-letter:ml-4 leading-relaxed mb-2 text-justify">
            Grâce à cet outil, le corps est soutenu et libéré du poids du sol,
            permettant une exploration en apesanteur des mouvements, des
            étirements et de la respiration.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            <b>Accessible à tous</b>, même aux débutants, le Yoga aérien permet
            de :
            <ul className="list-disc pl-6 mt-2">
              <li className="text-pink-500 ">
                soulager les tensions, notamment au niveau du dos et des épaules
              </li>
              <li className="text-pink-500">
                améliorer la souplesse et la mobilité articulaire
              </li>
              <li className="text-pink-500">
                renforcer les muscles profonds en douceur
              </li>
              <li className="text-pink-500">
                inverser les effets de la gravité et favoriser la détente
              </li>
            </ul>
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            C'est une expérience unique, à la fois relaxante et revitalisante,
            qui invite à se reconnecter à soi dans la légèreté, tout en
            s'amusant.{" "}
            <span className="text-pink-500">
              Le hamac devient un véritable cocon{" "}
            </span>
            dans lequel on peut se laisser porter, respirer, et relacher les
            tensions du quotidien.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-center">
            Les cours de Yoga aérien ont lieu le : <b>Mercredi à 12h30</b> à la{" "}
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

export default Yoga;
