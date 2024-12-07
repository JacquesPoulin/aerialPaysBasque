export const promotions = {
  noel2024: {
    imageSrc: "/assets/pics/autres/promo_noel_2024.jpg",
    imageAlt: "Promotion Noël 2024",
    expirationDate: "2024-12-31T23:59:59",
    isActive: true,
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
