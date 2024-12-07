export const initializeAnalytics = () => {
  const consent = localStorage.getItem("cookieConsent");

  if (consent === "accepted" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
    });
  } else if (consent === "refused" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
    });
  }
};

export const updateCookieConsent = (accepted) => {
  localStorage.setItem("cookieConsent", accepted ? "accepted" : "refused");
  initializeAnalytics();
};
