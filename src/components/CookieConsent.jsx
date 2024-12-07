import { useState, useEffect } from "react";
import { updateCookieConsent } from "../utils/cookies";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    updateCookieConsent(true);
    setShowBanner(false);
  };

  const handleRefuse = () => {
    updateCookieConsent(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-indigo-950 text-xs md:text-sm">
          Nous utilisons des cookies pour analyser le trafic de notre site.
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
          >
            Accepter
          </button>
          <button
            onClick={handleRefuse}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
