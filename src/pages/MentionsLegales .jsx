// ! Composant gérant les mentions légales du site
import React, { useEffect } from "react";
import { currentYear } from "../utils/functions";

const MentionsLegales = () => {
  useEffect(() => {
    // Faire défiler la page vers le haut lorsque le composant est monté
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Mentions Légales
        </h1>
        <p className="text-slate-900 leading-relaxed mb-4">
          Conformément à la Loi « Informatique et Libertés » n° 78-17 du 6
          janvier 1978, les informations vous concernant sont destinées à Aerial
          Pays Basque , responsable du traitement. Vous disposez d'un droit
          d'accès, de rectification et de suppression des données qui vous
          concernent. Vous pouvez exercer ce droit en adressant un e-mail à
          l'adresse électronique suivante :{" "}
          <a
            href="mailto:aerialpaysbasque@gmail.com"
            className="text-blue-900 hover:underline animate-pulse"
            title="Envoyer un mail à l'association"
          >
            aerialpaysbasque@gmail.com
          </a>
          .
        </p>
        <p className="text-slate-900 leading-relaxed mb-4">
          En vous connectant à ce site édité et mis en ligne par Aerial Pays
          Basque , vous accédez à un contenu protégé par la loi, notamment par
          les dispositions du Code de la propriété intellectuelle.
        </p>
        <p className="text-slate-900 leading-relaxed mb-4">
          Les marques de l'éditeur du site Aerial Pays Basque , ainsi que les
          logos figurant sur le site sont des marques déposées. Le
          téléchargement de tout ou partie des textes, images, sons,
          photographies, données, marques et tout autre élément contenu est
          sujet à une demande d'autorisation et pour un usage non commercial.
        </p>
        <p className="text-pink-500 leading-relaxed mb-4">
          Aerial Pays Basque n'autorise qu'un usage strictement personnel des
          données, informations ou contenus auxquels vous accédez, limité à un
          enregistrement temporaire sur votre ordinateur aux fins d'affichage
          sur un seul écran ainsi que la reproduction, en un unique exemplaire,
          pour copie de sauvegarde ou impression sur papier.
        </p>
        <p className="text-slate-900 leading-relaxed mb-4">
          Toute autre utilisation est soumise à notre autorisation expresse
          préalable. En poursuivant votre visite de notre site vous acceptez de
          respecter les restrictions ci-dessus.
        </p>
        <p className="text-slate-900 leading-relaxed mb-4">
          Aerial Pays Basque se réserve le droit de modifier, à tout moment et
          sans préavis, le contenu de ce site. En outre, Aerial Pays Basque
          décline toute responsabilité en cas de retard, d'erreur ou d'omission
          quant au contenu des présentes pages de même qu'en cas d'interruption
          ou de non-disponibilité du service.
        </p>
        <p className="text-slate-900 leading-relaxed mb-4">
          La création de liens hypertextes vers le site d'Aerial Pays Basque
          ainsi que les liens hypertextes établis en direction d'autres sites à
          partir du site Aerial Pays Basque n'engagent pas la responsabilité
          d'Aerial Pays Basque .
        </p>
        <p className="text-slate-900 leading-relaxed mb-4">
          &copy; {currentYear} Droits de reproduction et de diffusion réservés.
        </p>
      </div>
      {/* BLOBS */}
      {/* <div className="absolute top-20 right-2 w-52 h-52 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 z-0"></div>
      <div className="absolute bottom-0 left-2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 z-0"></div> */}
    </div>
  );
};

export default MentionsLegales;
