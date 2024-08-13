import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  // ? Obtenir l'année actuelle dynamiquement
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Section Mentions légales */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Mentions Légales</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/mentions-legales" className="hover:text-gray-300">
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Section Contact */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>AERIAL PAYS BASQUE</li>
              <li>
                <a
                  href="https://www.google.com/maps?q=22+Avenue+Larochefoucauld,+64200+Biarritz,+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                  title="Ouvrir avec Google Maps"
                >
                  22 Avenue Larochefoucauld, 64200 Biarritz, France
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/330789454945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                  title="Envoyer un message"
                >
                  07 89 45 49 45
                </a>
              </li>
              <li>
                <a
                  href="mailto:aerialpaysbasque@gmail.com"
                  className="text-gray-300 hover:text-white"
                  title="Envoyer un mail"
                >
                  aerialpaysbasque@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Section Réseaux Sociaux */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="w-6 h-6 hover:text-gray-300" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-6 h-6 hover:text-gray-300" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6 hover:text-gray-300" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="w-6 h-6 hover:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="w-6 h-6 hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Section Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {currentYear} Aerial Pays Basque. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
