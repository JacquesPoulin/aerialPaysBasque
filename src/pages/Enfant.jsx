import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHandPointLeft } from "react-icons/fa";
import BoutonGalerie from "../layouts/BoutonGalerie";
import BoutonPreResa from "../layouts/BoutonPreResa";
import { scrollToTop } from "../utils/functions";

import AOS from "aos";
import "aos/dist/aos.css";

const style = { color: "#440d93", fontSize: "1.5em" };

const Enfant = () => {
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
            src="/assets/pics/autres/e.jpg"
            alt="Enfants faisant du cerceau aérien"
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
          Les Ptis Zacrobates
        </h2>

        <div className=" w-32 mb-10 mx-auto bg-indigo-700 text-white text-lg font-bold p-4 rounded-lg animate-pulse">
          <Link to="/contact" title="Me contacter">
            <button>RENTRÉE 2025</button>
          </Link>
        </div>

        <div
          className="bg-white shadow-xl p-8 rounded-lg relative z-20 tracking-wide"
          data-aos="zoom-in"
        >
          <p className="text-lg text-indigo-950 first-letter:text-xl first-letter:font-bold first-letter:ml-4 leading-relaxed mb-2 text-justify">
            À la rentrée 2025, nous accueillerons les enfants avec enthousiasme
            et offrirons des activités aériennes adaptées à leur âge et à leur
            niveau <i> (de 8 à 15 ans).</i>
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-4 text-justify">
            Ils développeront ainsi :{" "}
            <span className="text-pink-500 ">coordination</span>,{" "}
            <span className="text-pink-500 ">souplesse</span>,{" "}
            <span className="text-pink-500 ">équilibre</span>,{" "}
            <span className="text-pink-500 ">agilité</span> et{" "}
            <span className="text-pink-500 ">créativité</span>.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-4 text-justify">
            Les cours enfants durent <b>45 minutes</b> et sont composés d'un
            réveil musculaire, d'un corps de séance et d'un retour au calme. Nos
            cours sont conçus pour être à la fois sûrs, éducatifs, amusants, et
            enrichissants !
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-4 text-justify">
            Pour leur bien-être et afin qu'ils puissent libérer leur plein
            potentiel créatif, les parents sont priés de les attendre à
            l'extérieur de la salle.
          </p>
          <p className="text-lg text-indigo-950 leading-relaxed mb-4 text-justify">
            Un groupe Whatsapp sera créer chaque année, et des vidéos prises
            pendant les cours y seront régulièrement postées afin que vous
            puissiez suivre leur évolution.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Les cours se dérouleront le <b>samedi à 9h45</b> à la{" "}
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

          <p className="text-lg text-indigo-950 leading-relaxed mb-4 text-justify">
            Offrir à votre enfant la possibilité d'explorer les arts aériens est
            une excellente manière de compléter leur développement global et
            d'encourager un mode de vie actif et sain.
          </p>
          <p className="text-lg text-indigo-950 leading-relaxed mb-4 text-center font-bold">
            N'hésitez pas à préréserver votre cours !
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
          <BoutonPreResa texte="Préréservation" />
          <div className="hidden md:block mb-10 animate-bounce">
            <FaHandPointLeft style={style} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enfant;
