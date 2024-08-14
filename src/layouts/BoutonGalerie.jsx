import { Link } from "react-router-dom";

const BoutonGalerie = ({ texte }) => {
  return (
    <div className="mt-2 mb-12 italic">
      <Link
        to="/galerie" // Utilise Link pour rediriger vers "/galerie"
        className="relative px-6 py-3 font-bold text-slate-800 group"
        title="Découvrir la galerie"
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-pink-200 rounded-lg group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full border-4 border-slate-800 rounded-lg"></span>
        <span className="relative tracking-wide" title="Découvrir la galerie">
          {texte}
        </span>
      </Link>
    </div>
  );
};

export default BoutonGalerie;
