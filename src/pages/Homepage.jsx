import { useEffect } from "react";

import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/functions";

import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      once: true, // Animation ne se déclenche qu'une seule fois
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-clip">
      {/* Image de bandeau */}
      <div className="w-full h-[21rem] overflow-hidden">
        <img
          src="/assets/pics/autres/bandeau_v2.jpg"
          alt="Bandeau de présentation"
          className="w-full h-full object-cover max-w-full"
        />
      </div>

      {/* INTRO */}
      <div className="relative bg-gray-100 pt-16">
        <div className="max-w-5xl 2xl:max-w-7xl mx-auto text-center relative z-10">
          {/* <h2
            className="text-4xl font-extrabold text-indigo-950 mb-10 -fast"
            data-aos="zoom-in"
          >
            Bienvenue chez Aerial Pays Basque
          </h2> */}
          <p
            className="text-xl font-bold text-indigo-950  tracking-wide mb-8"
            data-aos="fade-in"
          >
            Aerial Pays Basque est une association loi 1901 proposant des cours
            de cerceau aérien, de tissu aérien et de pilates, pour tout public.
            {/* (enfants à partir de 8 ans). */}
          </p>

          <p className="text-sm italic font-bold text-indigo-950  tracking-wide">
            " Le bonheur c'est de se sentir bien dans son corps et dans son
            esprit "
          </p>

          {/* QUI SOMMES-NOUS */}
          <div className="relative space-y-6 mt-10 mb-20">
            <div
              className="bg-white shadow-xl p-4 rounded-lg relative z-20"
              data-aos="fade-in"
            >
              <p className="text-lg text-indigo-950" data-aos="zoom-in">
                Chez Aerial Pays Basque, nous croyons que le bien-être quotidien
                passe par une pratique sportive régulière et épanouissante.
              </p>
              <p
                className="text-indigo-950 text-justify md:text-lg md:text-center mt-4 mb-4 md:mb-10"
                data-aos="zoom-in"
              >
                Nos cours, adaptés à tous les niveaux, vous permettront de vous{" "}
                <span className="text-pink-500 ">renforcer</span>, de gagner en{" "}
                <span className="text-pink-500 ">souplesse</span> et d'améliorer
                votre <span className="text-pink-500 ">équilibre</span> &{" "}
                <span className="text-pink-500 ">concentration</span> tout en
                offrant une dimension artistique et ludique.
              </p>

              {/* Section Présentation */}
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img
                  src="/assets/pics/autres/moi.jpg"
                  alt="Laureen Davant"
                  className="w-full h-[42.5rem] 2xl:h-[47rem] md:w-1/2 rounded-lg object-cover max-w-full"
                  data-aos="fade-right"
                />
                <div
                  className="flex flex-col gap-4 w-full md:w-1/2"
                  data-aos="fade"
                >
                  <h4 className="text-3xl text-indigo-800 tracking-wide">
                    Qui suis-je ?
                  </h4>

                  <p className="text-lg 2xl:text-xl text-indigo-950 text-justify px-4 tracking-wide leading-5">
                    Je suis{" "}
                    <Link to="/galerie" title="Voir la galerie">
                      <span className="text-pink-600" title="Voir la galerie">
                        Laureen Davant
                      </span>
                    </Link>
                    , éducatrice sportive diplômée et professeure chez Aerial
                    Pays Basque.
                  </p>

                  <p className="text-base 2xl:text-lg text-indigo-950 text-justify px-4 2xl:px-1 tracking-wide leading-5">
                    Je pratique les disciplines aériennes depuis 2019, et
                    c&apos;est en 2022 que je décide de suivre une formation de
                    préparation à l&apos;enseignement afin de partager ma
                    passion et mes valeurs pour le sport.
                  </p>

                  <p className="text-base 2xl:text-lg text-indigo-950 text-justify px-4 2xl:px-1 tracking-wide leading-5">
                    Ayant très vite compris que ce métier était fait pour moi,
                    je poursuis ma formation avec plusieurs modules techniques
                    auprès de Sophie Granjon et décide de continuer mon cursus
                    vers un CQP Animateur de Loisirs Sportifs, option Activités
                    Gymniques d&apos;Entretien et d&apos;Expression, que
                    j&apos;obtiens en 2024.
                  </p>

                  <p className="text-base 2xl:text-lg text-indigo-950 text-justify px-4 2xl:px-1 tracking-wide leading-5">
                    Durant la préparation de mon diplôme, je dois réaliser
                    plusieurs stages et je choisis de passer 6 mois à Oreka,
                    l&apos;école de cirque de Bayonne, où je suis formée à
                    l&apos;accompagnement des plus jeunes (de 4 à 15 ans).
                  </p>

                  <p className="text-base 2xl:text-lg text-indigo-950 text-justify px-4 2xl:px-1 tracking-wide leading-5">
                    Ayant à cœur de pouvoir accueillir tous les publics, je
                    réalise également un stage dans une association affiliée
                    sport-santé, afin de côtoyer les plus âgés, mais aussi des
                    personnes en situation de handicap ou souffrant de maladies
                    de longue durée.
                  </p>

                  <p className="text-base 2xl:text-lg text-indigo-950 text-justify px-4 2xl:px-1 tracking-wide leading-5">
                    C&apos;est durant ce dernier stage que je découvre le
                    Pilates et les méthodes de renforcement douces.
                  </p>
                </div>
              </div>
            </div>

            {/* BLOBS */}
            <div
              className="absolute top-0 left-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 z-0"
              data-aos="fade-in"
            ></div>
            <div
              className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 z-0"
              data-aos="fade-in"
            ></div>
          </div>
        </div>
      </div>

      {/* Section CTA button */}
      <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 pb-20">
        {/* Première iframe */}
        <iframe
          id="haWidget"
          allowtransparency="true"
          src="https://www.helloasso.com/associations/aerial-pays-basque/formulaires/1/widget-bouton"
          className="border-none h-[70px] w-[250px]"
          data-aos="fade-right"
          title="Faire un don et contribuer à faire grandir l'association"
        ></iframe>

        {/* Bouton personnalisé */}
        {/* <BoutonSavoirPlus texte="En Savoir Plus" /> */}

        {/* Deuxième iframe */}
        <iframe
          id="haWidget"
          allowtransparency="true"
          src="https://www.helloasso.com/associations/aerial-pays-basque/adhesions/adhesion-2024-2025/widget-bouton"
          className="border-none h-[70px] w-[250px]"
          data-aos="fade-left"
          title="Adhérer à l'association"
        ></iframe>
      </div>
    </div>
  );
};

export default Homepage;
