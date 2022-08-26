import "./styles.css";
import descriptionImage from "./../../assets/images/map__foto.png";

function HomeDescription() {
  return (
    <div className="description__content">
      <div className="description__text">
        <h1>Se liga, hein</h1>
        <p>
        Pesquise a reputação de estabelecimentos ou faça o relato de situações de violência sofridas ou presenciadas por você.
        </p>
        <button>Começar</button>
      </div>
      <div className="description__image">
        <img src={descriptionImage} alt="" />
      </div>
    </div>
  );
}

export default HomeDescription;
