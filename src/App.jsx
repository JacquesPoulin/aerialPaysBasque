import "./App.css";
import { Routes, Route } from "react-router-dom";
import routesConfig from "./route";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { useGoogleAnalytics } from "./hooks/useGoogleAnalytics";
import CookieConsent from "./components/CookieConsent";

const App = () => {
  useGoogleAnalytics();

  return (
    <div className="App">
      {/* --- ECRAN DE MAINTENANCE --- */}
      <div className="fixed inset-0 bg-indigo-950 z-[9999] flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-pink-500">
          PAUSE
        </h1>
        <p className="text-xl md:text-2xl font-semibold max-w-2xl leading-relaxed">
          L'association Aerial Pays Basque est momentanément en pause jusqu'à
          nouvel ordre.
        </p>
        <p className="mt-8 text-indigo-300">Merci de votre compréhension.</p>
      </div>
      {/* --- FIN ECRAN DE MAINTENANCE --- */}
      <Navbar />
      <Routes>
        {routesConfig.map(({ path, element, children }) => (
          <Route key={path} path={path} element={element}>
            {children &&
              children.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
          </Route>
        ))}
      </Routes>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;
