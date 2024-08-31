import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import navlinks from "../data/navlinks";
import navlinksBurger from "../data/navlinksBurger";

import coursesLinks from "../data/coursesLinks";

import Social from "../components/Social";

// import { motion } from "framer-motion";

const NavbarTitle = () => {
  const letters = "Aerial Pays Basque".split(" ");

  return (
    <div className="flex justify-center items-center" data-aos="fade-right">
      <Link to="/accueil">
        <img
          src="/assets/pics/logos/Logo_1.png"
          alt="Logo association Aerial Pays Basque"
          className="w-20 h-20 hidden lg:block"
        />
      </Link>
      {/* <h1 className="relative text-xl font-bold text-indigo-950 tracking-widest animate-spin-slow"> */}
      <h1 className="relative text-xl font-bold text-indigo-950 tracking-widest hover:animate-spin-slow">
        <span className="relative z-10 flex">
          {letters.map((letter, index) => (
            <span
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
            </span>
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
    <nav className="shadow-md">
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16">
          <NavbarTitle />

          <div className="flex items-center" data-aos="fade-left">
            {/* Menu for desktop */}
            <div className="hidden lg:flex space-x-8">
              <ul className="flex gap-6 tracking-wide">
                {navlinks.map(({ id, path, titre }) => (
                  <li key={id} className="relative group">
                    {titre === "Cours" ? (
                      <>
                        <button className="text-indigo-950 hover:text-pink-600 rounded-lg flex items-center">
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
                          {coursesLinks &&
                            coursesLinks.map(({ path, title }) => (
                              <NavLink
                                key={path}
                                to={path}
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                  `block px-4 py-2 text-sm hover:text-indigo-500 ${
                                    isActive
                                      ? "text-pink-600"
                                      : "text-indigo-950"
                                  }`
                                }
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
                        className={({ isActive }) =>
                          `text-indigo-950 hover:text-pink-600 rounded-lg px-2 ${
                            isActive ? "text-pink-600" : ""
                          }`
                        }
                      >
                        {titre}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu burger for mobile */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-indigo-950 hover:text-pink-600 p-1 rounded-lg focus:outline-none"
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
        <div className="lg:hidden mt-4 pb-5">
          {navlinksBurger.map(({ id, path, titre }) => (
            <div key={id} className="relative flex flex-col items-center">
              {titre === "COURS" ? (
                <>
                  <button
                    onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                    className="block w-full px-4 py-2 text-sm text-indigo-950 hover:text-pink-600 text-center"
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
                          className="block px-4 py-2 text-sm text-indigo-950 hover:text-pink-600"
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
                  className="block px-4 py-2 text-sm text-indigo-950 hover:text-pink-600"
                >
                  {titre}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
      {/* ----- SOCIAL ICONS----- */}
      <Social />
    </nav>
  );
};

export default Navbar;
