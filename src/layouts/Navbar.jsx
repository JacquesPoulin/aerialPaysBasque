import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import navlinks from "../data/navlinks";
import navlinksBurger from "../data/navlinksBurger";

import coursesLinks from "../data/coursesLinks";

import { motion } from "framer-motion";

const NavbarTitle = () => {
  const letters = "Aerial Pays Basque".split(" ");

  return (
    <div className="flex items-center">
      {/* <img
        src="/assets/pics/logo.png"
        alt=""
        className="rounded-full w-12 h-auto mr-6"
      /> */}
      <h1 className="relative text-xl font-bold text-purple-900 tracking-widest">
        <span className="relative z-10 flex">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              whileHover={{
                x: Math.random() * 40 - 20,
                y: Math.random() * 40 - 20,
                rotate: Math.random() * 40 - 20,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-400 blur-lg opacity-50 animate-pulse"></span>
      </h1>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Ferme le menu burger si un lien est cliqué
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <NavbarTitle />

          <div className="flex items-center">
            {/* Menu for desktop */}
            <div className="hidden md:flex space-x-8">
              <ul className="flex gap-10 tracking-wide">
                {navlinks.map(({ id, path, titre }) => (
                  <li key={id} className="relative group">
                    {titre === "Cours" ? (
                      <>
                        <button className="text-slate-900 hover:text-purple-700 flex items-center">
                          Cours
                          <svg
                            className="w-4 h-4 inline ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>

                        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {coursesLinks.map(({ path, title }) => (
                            <NavLink
                              key={path}
                              to={path}
                              onClick={handleLinkClick}
                              className="block px-4 py-2 text-sm text-slate-900 hover:bg-purple-100"
                            >
                              {title}
                            </NavLink>
                          ))}
                        </div>
                      </>
                    ) : (
                      <NavLink
                        to={path}
                        onClick={handleLinkClick}
                        className="text-slate-900 hover:bg-pink-100 rounded-xl p-2"
                      >
                        {titre}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu burger for mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-900 hover:bg-pink-100 rounded focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-5">
          {navlinksBurger.map(({ id, path, titre }) => (
            <div key={id} className="relative flex flex-col items-center">
              {titre === "COURS" ? (
                <>
                  <button
                    onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                    className="block w-full px-4 py-2 text-sm text-slate-900 hover:bg-pink-100 text-center"
                  >
                    COURS
                    <svg
                      className="w-4 h-4 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {isCoursesOpen && (
                    <div className="pl-4">
                      {coursesLinks.map(({ path, title }) => (
                        <Link
                          key={path}
                          to={path}
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-sm text-slate-900 hover:bg-gray-100"
                        >
                          {title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={path}
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm text-slate-900-800 hover:bg-purple-100"
                >
                  {titre}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
