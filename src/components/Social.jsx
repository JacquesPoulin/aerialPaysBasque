import React from "react";

// ----- All React Icons : fa, hi, bs ... -----
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Social = () => {
  return (
    <div className="hidden md:flex fixed flex-col top-2/3 left-3 z-30">
      <ul className="z-30">
        {/* ----- FACEBOOK ----- */}
        <li className="w-36 h-8 pr-2 flex rounded-r-lg justify-between items-center -ml-28 hover:-ml-3 duration-300 bg-indigo-800 z-30">
          <a
            href="https://www.facebook.com/profile.php?id=61563450955831"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-full text-slate-50 pl-2 font-semibold"
            title="Découvrir mon Facebook"
          >
            Facebook <FaFacebook size={20} />
          </a>
        </li>

        {/* ----- INSTAGRAM ----- */}
        <li className="w-36 h-8 pr-2 flex rounded-r-lg justify-between items-center -ml-28 hover:-ml-3 duration-300 bg-pink-600 z-30">
          <a
            href="https://www.facebook.com/profile.php?id=61563450955831"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-full text-slate-50 pl-2 font-semibold"
            title="Découvrir mon Instagram"
          >
            Instagram <FaInstagram size={20} />
          </a>
        </li>

        {/* ----- EMAIL ----- */}
        <li className="w-36 h-8 pr-2 flex rounded-r-lg justify-between items-center -ml-28 hover:-ml-3 duration-300 bg-green-700">
          <a
            href="mailto:aerialpaysbasque@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-full text-slate-50 pl-2 font-semibold"
            title="Envoyer un mail"
          >
            Email <HiOutlineMail size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
