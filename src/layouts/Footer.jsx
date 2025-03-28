import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { IoCall } from "react-icons/io5";

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
      <div className="bg-indigo-950 text-slate-50 rounded-lg shadow-lg p-6 relative">
        {/* CANCEL / ANNULER */}
        <button
          onClick={onClose}
          className="absolute top-1 right-2 text-gray-400 text-3xl hover:text-white"
        >
          &times;
        </button>

        {/* QUESTION */}
        <p className="mt-4 mb-4">Que souhaitez-vous faire ?</p>

        {/* APPEL */}
        <button
          onClick={() => handleOptionClick("call")}
          className="w-full flex justify-center items-center gap-2 text-center px-4 py-2 bg-pink-500 hover:bg-blue-700 rounded-lg mb-2"
        >
          <IoCall />
          Appeler
        </button>

        {/* SMS */}
        <button
          onClick={() => handleOptionClick("message")}
          className="w-full flex justify-center items-center gap-2 text-center px-4 py-2 bg-green-500 hover:bg-green-700 rounded-lg mb-2"
          title="Nous envoyer un WhatsApp"
        >
          <FaWhatsapp />
          Envoyer un message
        </button>

        {/* CANCEL / ANNULER */}
        <button
          onClick={onClose}
          className="w-full flex justify-center items-center gap-2 text-center px-4 py-2 bg-gray-600 hover:bg-gray-800 rounded-lg"
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
            {/* <img
              src="../../public/assets/pics/autres/logo_federation_1.jpg"
              alt=""
              className="w-40 rounded-lg mt-4"
            /> */}
          </div>

          {/* Section Contact */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
            <ul className="space-y-2">
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
                  translate="no"
                  title="Envoyer un mail"
                >
                  aerialpaysbasque@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Section Réseaux Sociaux + mail */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 md:text-center">
              SUIVEZ-NOUS
            </h3>
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center md:justify-center space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61563450955831"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Découvrir mon facebook"
                >
                  <FaFacebookF className="w-6 h-6 hover:text-pink-300" />
                </a>
                <a
                  href="https://www.instagram.com/aerial_paysbasque?igsh=MTEzYnJmc2ViZGtiaQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Découvrir mon Instagram"
                >
                  <FaInstagram className="w-6 h-7 hover:text-pink-300" />
                </a>

                <a
                  href="mailto:aerialpaysbasque@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Envoyer un mail"
                >
                  <HiOutlineMail className="w-7 h-7 hover:text-pink-300" />
                </a>
              </div>

              <img
                src="/assets/pics/autres/logo_federation_1.jpg"
                alt=""
                className="w-40 rounded-lg mt-4"
              />
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
