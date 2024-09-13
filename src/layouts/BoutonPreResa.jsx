import { Link } from "react-router-dom";

const BoutonPreResa = ({ texte }) => {
  return (
    <div className="mt-2 mb-12 italic animate-pulse">
      <Link
        to="/tarifs"
        className="relative px-6 py-3 font-bold text-indigo-950 group"
        title="Découvrir tous les tarifs"
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-pink-200 rounded-lg group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full border-4 border-indigo-900 rounded-lg"></span>
        <span className="relative tracking-wide" title="Réservez vos cours">
          {texte}
        </span>
      </Link>
    </div>
  );
};

export default BoutonPreResa;
