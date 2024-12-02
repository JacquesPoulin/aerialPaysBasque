import { useEffect, useState } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

import AOS from "aos";
import "aos/dist/aos.css";

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
          className="w-full flex justify-center items-center gap-2 text-center px-4 py-2 bg-pink-500 hover:bg-blue-900 rounded-lg mb-2"
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

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      once: true, // Animation ne se déclenche qu'une seule fois
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Image de bandeau */}
      <div className="w-full h-[21rem] overflow-hidden">
        <img
          src="/assets/pics/autres/bandeau_v2.jpg"
          alt="Bandeau de présentation"
          className="w-full h-full object-cover max-w-full"
        />
      </div>

      <div data-aos="zoom-in">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 py-10 md:py-16">
          <div className="w-52 h-2 bg-purple-100 rounded-lg"></div>

          {/* Titre */}
          <h2 className="text-2xl md:text-4xl font-extrabold text-indigo-950 text-center">
            ME CONTACTER
          </h2>
          <div className="w-52 h-2 bg-purple-100 rounded-lg"></div>
        </div>

        {/* Section infos Contact */}
        <div className="px-4">
          <ul className="w-full flex flex-col justify-center items-center gap-2 text-indigo-950 text-center">
            {/* <li className="">
              <a
                href="https://www.google.com/maps?q=22+Avenue+Larochefoucauld,+64200+Biarritz,+France"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-pink-500"
                title="Ouvrir avec Google Maps"
              >
                22 Avenue Larochefoucauld, 64200 Biarritz, France
              </a>
            </li> */}
            <li>
              <button
                onClick={() => setShowModal(true)}
                className=" hover:text-pink-500"
                title="Appeler ou Envoyer un message"
              >
                07 89 45 49 45
              </button>
            </li>

            <li>
              <a
                href="mailto:aerialpaysbasque@gmail.com"
                className=" hover:text-pink-500"
                title="Envoyer un mail"
              >
                aerialpaysbasque@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Carte Google */}
        <div className="flex justify-center items-center mt-10 mb-20 px-4">
          {/* <img src="/assets/pics/cerceau/cerceau_7.jpg" alt="" className="w-2/3"/>{" "} */}
          <img
            src="/assets/pics/cerceau/cerceau_4.jpg"
            alt=""
            className="w-2/3"
          />{" "}
        </div>
      </div>
      {showModal && <ContactOptions onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Contact;
