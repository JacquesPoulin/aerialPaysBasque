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
