import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import BoutonGalerie from "../layouts/BoutonGalerie";
import BoutonReservation from "../layouts/BoutonReservation";
import { scrollToTop } from "../utils/functions";

import AOS from "aos";
import "aos/dist/aos.css";

const Cerceau = () => {
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
            src="/assets/pics/cerceau/nature/cerceau_nature_2.jpg"
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
          Cerceau Aérien
        </h2>

        <div
          className="bg-white shadow-xl p-8 rounded-lg relative z-20 tracking-wide"
          data-aos="zoom-in"
        >
          {/* <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Le cerceau aérien est une discipline circassienne (venant du cirque)
            qui implique l'exécution de figures acrobatiques sur un anneau en
            acier suspendu dans les airs.
          </p> */}
          <p className="text-lg text-indigo-950 first-letter:text-xl first-letter:font-bold first-letter:ml-4 leading-relaxed mb-2 text-justify">
            Le cerceau aérien est une discipline issue du cirque. Il prend
            naissance au 19<sup>e</sup> siècle, cousin éloigné du trapèze. Connu
            également sous le nom de cercle aérien, c'est un tube d'acier de
            forme circulaire, pouvant être suspendu par un ou deux points
            d'accroche.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Largement popularisé par le "Cirque du Soleil", notamment lors de la
            tournée Varekai en 2003, on le retrouve aujourd'hui dans de
            nombreuses compétitions.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Cette pratique permet de réaliser des performances alliant
            puissance, souplesse et élégance. En plus d'offrir un spectacle
            visuellement saisissant, le cerceau aérien est un excellent exercice
            pour{" "}
            <span className="text-pink-500 ">renforcer le haut du corps</span>,
            améliorer la <span className="text-pink-500 ">flexibilité </span>et
            augmenter l'
            <span className="text-pink-500 ">endurance</span> cardiovasculaire.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            En plus des bénéfices physiques, le cerceau aérien offre des
            avantages significatifs pour le{" "}
            <span className="text-pink-500 ">bien-être mental</span>
            ...la satisfaction qui accompagne la maîtrise d'une nouvelle figure
            sur le cerceau est extrêmement gratifiante.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Cette discipline aide également à renforcer l'
            <span className="text-pink-500 ">attention</span> et la{" "}
            <span className="text-pink-500 ">concentration</span>, car on doit
            être pleinement engagé dans l'instant présent pour exécuter les
            mouvements en toute sécurité et avec précision.
          </p>

          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Que vous soyez débutant ou confirmé, nos cours sont adaptés à{" "}
            <b>tous les niveaux</b> et se dérouleront en petit groupe. Les cours
            de cerceau ont lieu les :
          </p>
          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-center">
            <b>Vendredi à 18h30</b> et <b>Samedi à 9h45</b> à la{" "}
            <a
              href="https://www.google.com/maps?q=22+Avenue+Benjamin+Gomez,+64100+Bayonne,+France"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
              title="Ouvrir avec Google Maps"
            >
              <b>Salle Talia Danses du Monde (Bayonne)</b>
            </a>
            .
          </p>
          <p className="text-lg text-indigo-950 leading-relaxed mb-2 text-justify">
            Ils durent 1h et sont composés d'un échauffement ciblé, d'un corps
            de séance et d'étirements.
          </p>

          <p className="text-lg text-indigo-950 text-justify leading-relaxed mb-3">
            Durant ces cours, tu apprendras :
            <ul style={{ marginLeft: "1rem" }}>
              <li>&gt; des mouvements techniques,</li>
              <li>&gt; des mouvements de transitions,</li>
              <li>&gt; les astuces pour gagner en fluidité,</li>
              <li>&gt; à travailler ta musicalité,</li>
              <li>&gt; ...et à trouver ta personnalité aérienne 🫶🏼.</li>
            </ul>
          </p>
          <p className="text-lg text-center text-indigo-950 leading-relaxed mb-2">
            <b>
              Si tu n'en a jamais fait, pas de panique... on a tous commencé un
              jour 😄 !
            </b>
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

export default Cerceau;
