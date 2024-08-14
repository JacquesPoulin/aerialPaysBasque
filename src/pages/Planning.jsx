import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Planning = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      once: true, // Animation ne se déclenche qu'une seule fois
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Bandeau de présentation */}
      <div className="w-full h-[20rem] overflow-hidden">
        <img
          src="/assets/pics/bandeau_intro.png" // Remplace avec l'image appropriée
          alt="Bandeau de Planning"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-extrabold text-slate-900 text-center mb-8"
          data-aos="zoom-in"
        >
          Planning 2024 – 2025
        </h2>

        {/* Image du planning */}
        <div className="text-center mb-12">
          <img
            src="https://lenvoleepoledancestudio.fr/wp-content/uploads/2024/05/Planning-2024-2025_site_Plan-de-travail-1.png" // TODO >>> A remplacer avec l'image appropriée
            alt="Planning 2024-2025"
            className="max-w-full h-auto rounded-lg shadow-lg"
            data-aos="fade-in"
          />
        </div>

        {/* Adresses des salles */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            - Nos Salles -
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-slate-800">Salle 1</h4>
              <p className="text-lg text-slate-700 mb-2">
                123 Rue du Cirque, 64000 Pau // TODO : CHANGER LES ADRESSES
              </p>
              <a
                href="https://www.google.com/maps?q=22+Avenue+Larochefoucauld,+64200+Biarritz,+France" //  TODO : CHANGER LES ADRESSES
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
                title="Ouvrir avec Google Maps"
              >
                Voir sur Google Maps
              </a>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-slate-800">Salle 2</h4>
              <p className="text-lg text-slate-700 mb-2">
                456 Avenue des Arts, 64000 Pau // TODO : CHANGER LES ADRESSES
              </p>
              <a
                href="https://www.google.com/maps?q=22+Avenue+Larochefoucauld,+64200+Biarritz,+France" //  TODO : CHANGER LES ADRESSES
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
                title="Ouvrir avec Google Maps"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
