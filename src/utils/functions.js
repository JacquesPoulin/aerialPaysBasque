// ? Obtenir l'année actuelle dynamiquement
export const currentYear = new Date().getFullYear();

export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Pour un défilement en douceur
    });
  };
