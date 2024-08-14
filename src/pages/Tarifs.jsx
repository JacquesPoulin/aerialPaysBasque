import React, { useEffect } from "react";

const Tarifs = () => {
  useEffect(() => {
    // Faire défiler la page vers le haut lorsque le composant est monté
    window.scrollTo(0, 0);
  }, []);
  return <div>Tarifs</div>;
};

export default Tarifs;
