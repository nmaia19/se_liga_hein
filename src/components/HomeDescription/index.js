import "./styles.css";
import descriptionImage from "./../../assets/images/map__foto.png";

function HomeDescription() {
  return (
    <div className="description__content">
      <div className="description__text">
        <h1>Se liga,hein</h1>
        <p>
          Breve descrição introdutória. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed diam nonummy nibh
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
