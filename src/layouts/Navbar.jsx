import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navlinks from "../data/navlinks";
import coursesLinks from "../data/coursesLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCoursesMenu = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Ferme le menu burger si un lien est cliqué
    setIsCoursesOpen(false); // Ferme le sous-menu "Cours" si un lien est cliqué
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">
              AERIAL PAYS BASQUE
            </h1>
          </div>

          <div className="flex items-center">
            {/* Menu for desktop */}
            <div className="hidden md:flex space-x-8">
              <ul className="flex gap-10">
                {navlinks.map(({ id, path, titre }) => (
                  <li key={id} className="relative">
                    {titre === "Cours" ? (
                      <>
                        <button
                          onClick={toggleCoursesMenu}
                          className="text-gray-800 hover:text-gray-600 focus:outline-none flex items-center"
                        >
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
                        {isCoursesOpen && (
                          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg">
                            {coursesLinks.map(({ path, title }) => (
                              <NavLink
                                key={path}
                                to={path}
                                onClick={handleLinkClick} // Ferme le menu après le clic
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                              >
                                {title}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={path}
                        onClick={handleLinkClick}
                        className="text-gray-800 hover:text-gray-600"
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
                onClick={toggleMenu}
                className="text-gray-800 hover:text-gray-600 focus:outline-none"
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
        <div className="md:hidden">
          {navlinks.map(({ id, path, titre }) => (
            <div key={id} className="relative">
              {titre === "Cours" ? (
                <>
                  <button
                    onClick={toggleCoursesMenu}
                    className="block w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 text-left"
                  >
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
                  {isCoursesOpen && (
                    <div className="pl-4">
                      {coursesLinks.map(({ path, title }) => (
                        <Link
                          key={path}
                          to={path}
                          onClick={handleLinkClick} // Ferme le menu après le clic
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
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
                  onClick={handleLinkClick} // Ferme le menu après le clic
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
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
