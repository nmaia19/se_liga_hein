import "./styles.css";
import { NavLink } from "react-router-dom";
import AboutUsImage from "./../../../assets/images/megaphone.png";
import { ScrollToTop } from "../../ScrollToTop/Scroll";

function AboutPlatform() {
  return (
    <div className="aboutus__content">
      <div className="aboutus__image">
        <img src={AboutUsImage} alt="" />
      </div>
      <div className="aboutus__text">
        <h1>Como funciona</h1>
        <p>
          Na página <NavLink to="/search">Pesquisar</NavLink> você pode buscar
          por ocorrências utilizando alguns filtros. As ocorrências registradas
          na nossa plataforma contêm o relato da vítima ou de quem presenciou o
          caso, o nome e o endereço do estabelecimento, a data e o horário do
          ocorrido. Os nomes das vítimas ou das pessoas que registram são
          preservados.
          <ul>
            <li>
              Para fazer o relato de um caso, você deve clicar no botão “Criar
              ocorrência”, localizado no topo desta página.
            </li>
            <li>
              O único requisito é que você tenha 18 anos ou mais. Aconselhamos
              que menores de idade peçam a algum adulto que registre o ocorrido.
            </li>
            <li>
              A partir das informações preenchidas no formulário será gerada uma
              ocorrência que poderá ser encontrada por futuros usuários ao
              buscarem o nome, o local do estabelecimento ou o tipo de violência
              inseridos por você.
            </li>
          </ul>
        </p>
        <div className="aboutus__button">
          <button className="button" onClick={ScrollToTop("/search")}> <NavLink className="aboutus__button__link" to="/search">Procurar ocorrências</NavLink>
        </button>
        </div>
      </div>
    </div>
  );
}

export default AboutPlatform;
