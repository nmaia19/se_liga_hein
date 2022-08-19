import "./styles.css";
import AboutUsImage from "./../../assets/images/aboutus__foto.png";

function AboutUsHome() {
  return (
    <div className="aboutus__content">
      <div className="aboutus__image">
        <img src={AboutUsImage} alt="" />
      </div>
      <div className="aboutus__text">
        <h1>Sobre nós</h1>
        <p>
          Texto de apoio complementar descrevendo melhor o serviço do site e
          como funciona. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Pariatur quisquam neque ullam vel nihil autem sunt dicta
          commodi, facere harum cumque similique laborum deleniti voluptate
          soluta blanditiis!
        </p>
        <div className="aboutus__button">
          <button>Saiba mais</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHome;
