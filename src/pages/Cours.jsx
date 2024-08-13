import { Outlet } from "react-router-dom";

const Cours = () => {
  return (
    <div>
      {/* Le contenu des sous-routes sera affiché ici */}
      <Outlet />
    </div>
  );
};

export default Cours;
