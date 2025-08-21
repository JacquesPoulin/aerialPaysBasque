export const promotions = {
  rentree2025: {
    imageSrc: "/assets/pics/autres/aerial_planning_2.jpg",
    imageAlt: "Portes ouvertes 2025",
    expirationDate: "2025-09-14T13:59:59",
    isActive: true,
  },
  ete2025: {
    imageSrc: "/assets/pics/autres/promo_juillet_2025.jpg",
    imageAlt: "Promotion été 2025",
    expirationDate: "2025-08-20T23:59:59",
    isActive: false,
  },
  noel2024: {
    imageSrc: "/assets/pics/autres/promo_noel_2024.jpg",
    imageAlt: "Promotion Noël 2024",
    expirationDate: "2024-12-31T23:59:59",
    isActive: false,
  },
  // Exemple pour futures promotions
  // printemps2025: {
  //   imageSrc: "/assets/pics/autres/promo_printemps_2025.jpg",
  //   imageAlt: "Promotion Printemps 2025",
  //   expirationDate: "2025-03-31T23:59:59",
  //   isActive: false,
  // },
};

export const getCurrentPromotion = () => {
  const currentDate = new Date();

  return Object.values(promotions).find((promo) => {
    const expirationDate = new Date(promo.expirationDate);
    return promo.isActive && currentDate < expirationDate;
  });
};
