import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import tarifsList from "../data/tarifsList";

import { scrollToTop } from "../utils/functions";

const Tarifs = () => {
  // ! État pour gérer la visibilité de la section "A la Carte"
  const [showAlaCarte, setShowAlaCarte] = useState(false);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Image de bandeau */}
      <div className="w-full h-[21rem] overflow-hidden bg-gray-100">
        <img
          src="/assets/pics/logos/logo_test.jpg"
          alt="Bandeau de présentation"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center min-h-screen bg-gray-100 py-16">
        <div className="w[50rem]" data-aos="zoom-in">
          {/* Titre et sous-titre */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 py-5 md:py-2">
            <div className="w-52 h-2 bg-purple-100 rounded-lg"></div>

            <h2 className="text-4xl font-extrabold text-indigo-950">TARIFS</h2>

            <div className="w-52 h-2 bg-purple-100 rounded-lg"></div>
          </div>
          <p className="text-center font-semibold text-indigo-950 mb-4">
            2024 - 2025
          </p>
          {/* Pastille promotionnelle */}
          <div className=" w-32 my-0 mx-auto bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg animate-pulse">
            <Link to="/contact" title="Me contacter">
              <button>1er Cours Gratuit !</button>
            </Link>
          </div>

          {/* Section des abonnements */}
          <div className="w-full px-4 py-2">
            <h3 className="text-2xl font-bold text-indigo-950 mt-10 mb-1 text-center">
              Nos Abonnements
            </h3>
            {/* <h3 className="text-2xl font-bold text-indigo-950 mt-10 mb-8 text-center">
              Nos Abonnements (adultes)
            </h3> */}

            <p className="text-sm italic text-indigo-950 text-center mb-2">
              Le tarif des abonnements inclus la licence sport pour tous
            </p>
            <p className="text-sm italic text-indigo-950 text-center mb-10">
              Si vous arrivez en cours de saison, le tarif sera au prorata des
              mois restants
            </p>

            {/* Cartes des tarifs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tarifsList &&
                tarifsList
                  .filter((tarif) => tarif.type === "abonnement")
                  .map((tarif, id) => (
                    <div
                      key={id}
                      className="w-[22rem] max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-indigo-950 dark:border-gray-700 text-center flex flex-col"
                    >
                      {tarif.activite === "cerceau" && (
                        <Link to="/cours/cerceau" title="Découvrir la galerie">
                          <img
                            className="rounded-t-lg object-cover h-48 w-full"
                            src="/assets/pics/cerceau/cerceau_4.jpg"
                            alt=""
                          />
                        </Link>
                      )}

                      {tarif.activite === "pilates" && (
                        <Link to="/cours/pilates" title="Découvrir la galerie">
                          <img
                            className="rounded-t-lg object-cover h-48 w-full"
                            src="/assets/pics/pilates/laureen_2.jpg"
                            alt=""
                          />
                        </Link>
                      )}

                      {tarif.activite === "enfant" && (
                        <Link to="/cours/enfants" title="Découvrir la galerie">
                          <img
                            className="rounded-t-lg object-cover h-48 w-full"
                            src="https://static.wixstatic.com/media/466954_7a36fa4e14f14330b33b595c74f0d2c0~mv2.jpg/v1/fill/w_449,h_539,al_c,q_80,enc_auto/Evie.jpg"
                            alt=""
                          />
                        </Link>
                      )}

                      {/* : (
                      <Link to="/galerie" title="Découvrir la galerie">
                        <img
                          className="rounded-t-lg object-cover h-48 w-full"
                          // src="https://static.wixstatic.com/media/466954_7a36fa4e14f14330b33b595c74f0d2c0~mv2.jpg/v1/fill/w_449,h_539,al_c,q_80,enc_auto/Evie.jpg"
                          src="/assets/pics/pilates/laureen_2.jpg"
                          alt=""
                        />
                      </Link>
                      )} */}
                      <div className="p-4 flex flex-col flex-grow items-center">
                        <Link to="/cours/cerceau">
                          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-slate-50">
                            {tarif.titre}
                          </h5>
                        </Link>

                        {tarif.date && (
                          <p className="mb-3 text-slate-50 dark:text-slate-50 font-bold">
                            {tarif.date}
                          </p>
                        )}
                        <ul className="space-y-2 flex-grow text-center">
                          {tarif.details.map((detail, id) => (
                            <li
                              key={id}
                              className="text-sm text-slate-50 dark:text-slate-50 flex items-center justify-center"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {tarif.activite === "enfant" ? (
                        <button className="px-6 py-2 text-slate-50 bg-indigo-900 rounded-md shadow hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                          <a
                            href="mailto:aerialpaysbasque@gmail.com"
                            // href="https://www.helloasso.com/associations/aerial-pays-basque/adhesions/adhesion-2024-2025"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Se pré-inscrire pour la prochaine rentrée 2025"
                          >
                            Préinscription (rentrée 2025)
                          </a>
                        </button>
                      ) : (
                        <button className="px-6 py-2 text-slate-50 bg-indigo-900 rounded-md shadow hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                          <a
                            href="mailto:aerialpaysbasque@gmail.com"
                            // href="https://www.helloasso.com/associations/aerial-pays-basque/adhesions/adhesion-2024-2025"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Inscription à l'association"
                          >
                            S'INSCRIRE
                          </a>
                        </button>
                      )}
                    </div>
                  ))}
            </div>
          </div>

          {/* Bouton pour afficher les autres options */}
          <div className="mt-12 flex justify-center">
            <button
              className="p-2 text-slate-50 bg-indigo-900 rounded-md shadow hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onClick={() => setShowAlaCarte(!showAlaCarte)}
            >
              {showAlaCarte ? "Masquer" : "Option supplémentaire"}
            </button>
          </div>
        </div>

        {/* Section "A la Carte" */}
        {showAlaCarte && (
          <div className="mt-8 w-full px-4 text-center">
            <h3 className="text-2xl font-bold text-indigo-950 mb-2 text-center">
              Séance à la Carte (adultes)
            </h3>
            <p className="text-sm italic text-indigo-950 text-center mb-1">
              Carnets de séance <b>valable 3 mois</b>
            </p>
            <p className="text-sm italic text-indigo-950 text-center mb-10">
              (non échangeables & non remboursables)
            </p>
            <div className="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-indigo-950  dark:border-gray-700 flex flex-col">
              <Link to="/galerie" title="Découvrir la galerie">
                <img
                  className="rounded-t-lg object-cover h-48 w-full"
                  src="/assets/pics/autres/l4.jpg"
                  alt=""
                />
              </Link>

              <div className="p-4 flex flex-col flex-grow">
                <Link to="/cours/pilates">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-50 dark:text-slate-50">
                    {tarifsList.find((tarif) => tarif.type === "carte").titre}
                  </h5>
                </Link>
                <ul className="space-y-2 flex-grow">
                  {tarifsList
                    .find((tarif) => tarif.type === "carte")
                    .details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-slate-50 dark:text-slate-50"
                      >
                        {detail}
                      </li>
                    ))}
                </ul>
              </div>
              <button className="px-6 py-2 text-slate-50 bg-indigo-900 rounded-md shadow hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <a
                  href="mailto:aerialpaysbasque@gmail.com"
                  // href="https://www.helloasso.com/associations/aerial-pays-basque/adhesions/adhesion-2024-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Inscription à l'association"
                >
                  S'INSCRIRE
                </a>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tarifs;
