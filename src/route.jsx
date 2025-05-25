// ! --- COMPOSANTS PRINCIPAUX ---
import Homepage from "./pages/Homepage";
import Cours from "./pages/Cours";
import Planning from "./pages/Planning";
import Galerie from "./pages/Galerie";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import Cerceau from "./pages/Cerceau";
import Fitness from "./pages/Fitness";
import Tissu from "./pages/Tissu";
import Pilates from "./pages/Pilates";
import Yoga from "./pages/Yoga";
import Enfant from "./pages/Enfant";
import MentionsLegales from "./pages/MentionsLegales ";
import Info from "./pages/Info";

// ! --- ROUTES CONFIG ---
const routesConfig = [
  {
    // ! Route : HOMEPAGE
    path: "*",
    element: <Homepage />,
  },

  {
    // ! Route : HOMEPAGE
    path: "/",
    element: <Homepage />,
  },

  {
    // ! Route : HOMEPAGE
    path: "/accueil",
    element: <Homepage />,
  },

  {
    // ! Route : COURS
    path: "/cours",
    element: <Cours />,

    // * Sous-Route : Cours*
    children: [
      { path: "cerceau", element: <Cerceau /> },
      { path: "fitness", element: <Fitness /> },
      { path: "tissu", element: <Tissu /> },
      { path: "pilates", element: <Pilates /> },
      { path: "yoga", element: <Yoga /> },
      { path: "enfants", element: <Enfant /> },
    ],
  },

  {
    // ! Route : Planning
    path: "/planning",
    element: <Planning />,
  },

  {
    // ! Route : Planning
    path: "/infos",
    element: <Info />,
  },

  {
    // ! Routes : GALERIE
    path: "/galerie",
    element: <Galerie />,
  },

  {
    // ! Route : Tarifs
    path: "/tarifs",
    element: <Tarifs />,
  },

  {
    // ! Route : CONTACT
    path: "/contact",
    element: <Contact />,
  },
  {
    // ! Route : CONTACT
    path: "/mentions-legales",
    element: <MentionsLegales />,
  },
];

export default routesConfig;
