import "./styles.css";
import descriptionImage from "./../../assets/images/map__foto.png";
import { NavLink } from "react-router-dom";

function HomeDescription() {
  return (
    <div className="description__content">
      <div className="description__text">
        <h1>Se liga, hein</h1>
        <p>
        Pesquise a reputação de estabelecimentos ou relate situações de violência sofridas ou presenciadas por você.
        </p>
        <button><NavLink className="description__btn-link"to="/search">Começar</NavLink></button>
      </div>
      <div className="description__image">
        <img src={descriptionImage} alt="" />
      </div>
    </div>
  );
}

export default HomeDescription;
