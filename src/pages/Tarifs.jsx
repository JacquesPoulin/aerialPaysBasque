import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// import BoutonGalerie from "../layouts/BoutonGalerie";
// import BoutonReservation from "../layouts/BoutonReservation";
import { scrollToTop } from "../utils/functions";

const Tarifs = () => {
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
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContactClick = () => {
    scrollToTop();
  };

  return (
    <div className="flex flex-col min-h-screen bg-indigo-100">
      {/* Bandeau de présentation */}
      <div className="w-full h-[26rem] overflow-hidden">
        <Link to="/galerie">
          <img
            src="/assets/pics/autres/bandeau_v2.jpg"
            alt="Bandeau tarifs"
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
          TARIFS
        </h2>

        <div
          className="bg-white shadow-xl p-8 rounded-lg relative z-20 tracking-wide"
          data-aos="zoom-in"
        >
          <p className="text-lg text-center font-semibold text-indigo-950 first-letter:text-xl first-letter:font-bold first-letter:ml-4 leading-relaxed mb-6">
            Découvrez nos tarifs pour la saison{" "}
            <span className="text-pink-500">2025-2026</span>.
          </p>

          <p className="text-lg text-center text-indigo-950 mb-8">
            <span className="bg-indigo-800 text-white px-3 py-1 rounded-lg font-bold animate-pulse">
              🎉 Premier cours gratuit !
            </span>
          </p>

          {/* Grille des tarifs */}
          <div className="mb-8 text-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Colonne ABONNEMENTS */}
              <div className="bg-gradient-to-b from-indigo-50 to-indigo-100 rounded-lg shadow-lg p-6 border-t-4 border-cyan-400">
                <h4 className="text-xl font-bold text-indigo-950 mb-4 text-center">
                  ABONNEMENTS
                </h4>

                <div className="space-y-4">
                  <div className="border-b border-indigo-200 pb-3">
                    <p className="font-semibold text-indigo-950">
                      1 cours par semaine
                    </p>
                    <p className="text-lg font-bold text-pink-600">330 €</p>
                    <p className="text-sm text-indigo-700">soit 10 € /cours</p>
                  </div>

                  <div className="border-b border-indigo-200 pb-3">
                    <p className="font-semibold text-indigo-950">
                      2 cours par semaine
                    </p>
                    <p className="text-lg font-bold text-pink-600">576 €</p>
                    <p className="text-sm text-indigo-700">
                      soit 8,72 € /cours
                    </p>
                  </div>

                  <div className="border-b border-indigo-200 pb-3">
                    <p className="font-semibold text-indigo-950">
                      3 cours par semaine
                    </p>
                    <p className="text-lg font-bold text-pink-600">760 €</p>
                    <p className="text-sm text-indigo-700">
                      soit 7,67 € /cours
                    </p>
                  </div>

                  <div className="border-b border-indigo-200 pb-3">
                    <p className="font-semibold text-indigo-950">
                      4 cours par semaine
                    </p>
                    <p className="text-lg font-bold text-pink-600">882 €</p>
                    <p className="text-sm text-indigo-700">
                      soit 6,68 € /cours
                    </p>
                  </div>

                  <div className="bg-indigo-200 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-indigo-950">
                      Adhésion incluse
                      <br />
                      Licence Obligatoire
                    </p>
                  </div>
                </div>
              </div>

              {/* Colonne À L'UNITÉ */}
              <div className="bg-gradient-to-b from-slate-50 to-slate-100 rounded-lg shadow-lg p-6 border-t-4 border-red-600">
                <h4 className="text-xl font-bold text-indigo-950 mb-4">
                  À L'UNITÉ
                </h4>

                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <p className="font-semibold text-indigo-950">1 cours</p>
                    <p className="text-lg font-bold text-pink-600">20 €</p>
                    <p className="text-sm text-indigo-700">*abonnés 10 €</p>
                  </div>

                  <div className="border-b border-slate-200 pb-3">
                    <p className="font-semibold text-indigo-950">10 cours</p>
                    <p className="text-lg font-bold text-pink-600">180 € *</p>
                  </div>

                  <div className="border-b border-slate-200 pb-3">
                    <p className="font-semibold text-indigo-950">Cours privé</p>
                    <p className="text-lg font-bold text-pink-600">50 €</p>
                  </div>

                  <div className="border-b border-slate-200 pb-3">
                    <p className="font-semibold text-indigo-950">
                      Cours privé en duo
                    </p>
                    <p className="text-lg font-bold text-pink-600">
                      35 €/personne
                    </p>
                  </div>

                  <div className="bg-red-100 p-3 rounded-lg border border-red-200">
                    <p className="text-sm font-semibold text-indigo-950">
                      EVJF/Anniversaire selon Devis
                    </p>
                  </div>
                </div>
              </div>

              {/* Colonne INFOS */}
              <div className="bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
                <h4 className="text-xl font-bold text-indigo-950 mb-4">
                  INFOS
                </h4>

                <div className="space-y-4">
                  <div className="bg-purple-200 p-3 rounded-lg border border-purple-300">
                    <p className="font-semibold text-indigo-950 mb-2">
                      Licence Sport Pour Tous
                    </p>
                    <p className="text-lg font-bold text-pink-600">29,10 €</p>
                  </div>

                  <div className="space-y-2 text-sm text-indigo-800 font-semibold">
                    <p>• Pas de cours pendant les vacances scolaires</p>
                    <p>• Cours maintenus les jours fériés</p>
                    <p>• Paiement possible en plusieurs fois ou au mois</p>
                  </div>

                  <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
                    <p className="text-sm font-semibold text-indigo-950 animate-pulse">
                      *Licence obligatoire
                      <br />
                      valable sur la saison en cours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informations complémentaires */}
          <div className="space-y-4 text-center">
            <p className="text-base text-indigo-950">
              <span className="font-semibold">💡 Bon à savoir :</span> Si vous
              arrivez en cours de saison, le tarif sera calculé au prorata des
              mois restants.
            </p>

            <p className="text-base text-indigo-950">
              <span className="font-semibold">📍 Lieu des cours :</span>{" "}
              <a
                href="https://www.google.com/maps?q=22+Avenue+Benjamin+Gomez,+64100+Bayonne,+France"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
                title="Ouvrir avec Google Maps"
              >
                Salle Talia Danses du Monde, Bayonne
              </a>
            </p>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-lg font-semibold text-indigo-950 mb-2">
                💌 Prêt(e) à nous rejoindre ?
              </p>
              <p className="text-base text-indigo-950">
                <Link
                  to="/contact"
                  onClick={handleContactClick}
                  className="text-indigo-500 hover:text-indigo-700 hover:underline font-semibold transition-colors duration-300"
                >
                  Contactez-nous
                </Link>{" "}
                pour réserver votre premier cours gratuit ou pour toute question
                sur nos tarifs !
              </p>
            </div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div
          className={`${
            isMobile
              ? "flex flex-col justify-center items-center gap-2 mt-12"
              : "flex justify-center items-center gap-8 mt-20"
          }`}
        >
          {/* <BoutonGalerie texte="Voir la Galerie" /> */}
          {/* <BoutonReservation texte="Réserver mon 1er cours" /> */}
          {/* Bouton de contact pour inscription */}
          <div className="flex justify-center">
            <a
              href="https://www.helloasso.com/associations/aerial-pays-basque/adhesions/adhesion-2025-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-indigo-950 text-white rounded-lg shadow-lg hover:bg-indigo-800 transition-colors duration-300 font-semibold"
              title="Nous contacter pour s'inscrire"
            >
              S'INSCRIRE À L'ASSOCIATION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarifs;
