import "./styles.css";
import AboutUsImage from "./../../assets/images/aboutus__foto.png";
import { NavLink } from "react-router-dom";

function AboutUsHome() {
  return (
    <div className="aboutus__content">
      <div className="aboutus__image">
        <img src={AboutUsImage} alt="" />
      </div>
      <div className="aboutus__text">
        <h1>Sobre nós</h1>
        <p>
          O Se Liga, hein te deixa ligado nos estabelecimentos onde houveram
          registros de quaisquer tipos de violências ao cliente durante o
          período de permanência no recinto. Nossa plataforma também permite que
          você registre casos de violência sofridos ou presenciados por você em
          qualquer lugar. Com uma simples pesquisa você pode evitar ir a locais
          com histórico de hostilidade, discriminação, intimidação e desrespeito
          aos clientes.
        </p>
        <div className="aboutus__button">
          <button>
            <NavLink className="aboutus__button__link" to="/about">
              Saiba mais
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHome;
