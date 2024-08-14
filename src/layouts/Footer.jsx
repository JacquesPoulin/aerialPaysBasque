import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { currentYear } from "../utils/functions";

const ContactOptions = ({ onClose }) => {
  const handleOptionClick = (action) => {
    onClose(); // Ferme la modal
    if (action === "call") {
      window.location.href = "tel:+330789454945";
    } else if (action === "message") {
      window.location.href = "https://wa.me/330789454945";
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white rounded-md shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          &times;
        </button>
        <p className="mt-2 mb-4">Que souhaitez-vous faire ?</p>
        <button
          onClick={() => handleOptionClick("call")}
          className="block w-full text-left px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded mb-2"
        >
          Appeler
        </button>
        <button
          onClick={() => handleOptionClick("message")}
          className="block w-full text-left px-4 py-2 bg-green-500 hover:bg-green-700 rounded mb-2"
        >
          Envoyer un message
        </button>
        <button
          onClick={onClose}
          className="block w-full text-left px-4 py-2 bg-gray-600 hover:bg-gray-800 rounded"
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    // <footer className="bg-fuchsia-100 text-slate-950 py-10">
    // <footer className="bg-slate-900 text-white py-10">
    <footer className="bg-gray-800 text-white py-5">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4">
        <div className="flex flex-col md:flex-row md:justify-between tracking-wide">
          {/* Section Mentions légales */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">MENTIONS LÉGALES</h3>
            <ul className="space-y-2">
              <li title="Découvrir nos mentions légales">
                <NavLink to="/mentions-legales" className="hover:text-pink-100">
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Section Contact */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
            <ul className="space-y-2">
              {/* <li>AERIAL PAYS BASQUE</li> */}
              <li>
                <a
                  href="https://www.google.com/maps?q=22+Avenue+Larochefoucauld,+64200+Biarritz,+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-100"
                  title="Ouvrir avec Google Maps"
                >
                  22 Avenue Larochefoucauld, 64200 Biarritz, France
                </a>
              </li>
              <li>
                <button
                  onClick={() => setShowModal(true)}
                  className="text-gray-300 hover:text-pink-100"
                  title="Appeler ou Envoyer un message"
                >
                  07 89 45 49 45
                </button>
              </li>

              <li>
                <a
                  href="mailto:aerialpaysbasque@gmail.com"
                  className="text-gray-300 hover:text-pink-100"
                  title="Envoyer un mail"
                >
                  aerialpaysbasque@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Section Réseaux Sociaux */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">SUIVEZ-NOUS</h3>
            <div className="flex justify-center md:justify-center space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61563450955831"
                target="_blank"
                rel="noopener noreferrer"
                title="Découvrir notre facebook"
              >
                <FaFacebookF className="w-6 h-6 hover:text-pink-300" />
              </a>
              <a
                href="https://www.instagram.com/aerial_paysbasque?igsh=MTEzYnJmc2ViZGtiaQ=="
                target="_blank"
                rel="noopener noreferrer"
                title="Découvrir notre Instagram"
              >
                <FaInstagram className="w-6 h-6 hover:text-pink-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Section Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {currentYear} Aerial Pays Basque. Tous droits réservés.</p>
        </div>
      </div>

      {showModal && <ContactOptions onClose={() => setShowModal(false)} />}
    </footer>
  );
};

export default Footer;
