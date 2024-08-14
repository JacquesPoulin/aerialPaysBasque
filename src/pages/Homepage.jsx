import { useEffect } from "react";

import { Link } from "react-router-dom";

import BoutonReservation from "../layouts/BoutonReservation";

import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      once: true, // Animation ne se déclenche qu'une seule fois
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Image de bandeau */}
      <div className="w-full h-[21rem] overflow-hidden">
        <img
          src="/assets/pics/bandeau_intro.png"
          alt="Bandeau de présentation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* INTRO */}
      <div className="relative bg-gray-100 pt-16">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className="text-4xl font-extrabold text-slate-900 mb-10"
            data-aos="zoom-in"
          >
            Bienvenue chez Aerial Pays Basque
          </h2>
          <p className="text-lg text-slate-900 mb-10" data-aos="fade-in">
            Aerial Pays Basque est une association loi 1901 proposant des cours
            de cerceau aérien, de hamac aérien et de pilates, pour tout public
            (enfants à partir de 8 ans).
          </p>

          {/* QUI SOMMES-NOUS */}
          <div className="relative space-y-6 mt-10 mb-20">
            <div
              className="bg-white shadow-xl p-8 rounded-xl relative z-20"
              data-aos="fade-in"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                Qui sommes-nous ?
              </h3>
              <p className="text-lg text-slate-900 mt-4" data-aos="zoom-in">
                Chez Aerial Pays Basque, nous croyons que le bien-être quotidien
                passe par une pratique sportive régulière et épanouissante.
              </p>
              <p className="text-lg text-slate-900 mt-4" data-aos="zoom-in">
                Nos cours, adaptés à tous les niveaux, vous permettront de vous{" "}
                <span className="text-pink-500 animate-pulse">renforcer</span>,
                de gagner en{" "}
                <span className="text-pink-500 animate-pulse">souplesse</span>{" "}
                et d'améliorer votre{" "}
                <span className="text-pink-500 animate-pulse">équilibre</span>,
                tout en offrant une dimension artistique et ludique.
              </p>
            </div>

            {/* BLOBS */}
            <div
              className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 z-0"
              data-aos="fade-in"
            ></div>
            <div
              className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 z-0"
              data-aos="fade-in"
            ></div>
          </div>
        </div>
      </div>
      {/* Section Image centrée */}
      <div className="flex flex-col gap-3 justify-center items-center bg-gray-100">
        <Link to="/galerie">
          <img
            src="/assets/pics/Laureen_Cerceau_2_retouchée.jpg"
            className="max-w-[56rem] h-auto rounded-lg shadow-lg cursor-pointer"
            alt="Présentation Aerial Pays Basque"
            title="Voir la galerie"
            data-aos="zoom-in"
          />
        </Link>
        {/* <p className="mt-2 mb-12 italic">- Cerceau aérien -</p> */}
        <div className="mt-10" data-aos="fade-in">
          <BoutonReservation texte="Nos tarifs" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
