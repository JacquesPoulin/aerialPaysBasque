import { Link } from "react-router-dom";

const BoutonReservation = ({texte}) => {
  return (
    <div className="mt-2 mb-12 italic">
      <Link
        to="/tarifs" // Utilise Link pour rediriger vers "/tarifs"
        className="relative px-6 py-3 font-bold text-slate-800 group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-pink-200 rounded-lg group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full border-4 border-slate-800 rounded-lg"></span>
        <span className="relative">{texte}</span>
      </Link>
    </div>
  );
};

export default BoutonReservation;
