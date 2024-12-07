import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initializeAnalytics } from "../utils/cookies";

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (window.gtag && consent === "accepted") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};
