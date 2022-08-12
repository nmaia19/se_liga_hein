import { Link } from "react-router-dom";
import "./styles.css";

function NavBar() {
  return (
    <div className="navbar__content">
      <div className="logo">Se liga, Hein</div>
      <nav className="nav">
        <ul className="nav__ul">
          <li>
            <Link className="nav__link" to="/">
              Início
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/about">
              Sobre
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/search">
              Pesquisar
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/minhaarea">
              Minha Área
            </Link>
          </li>
          <li>
            <Link to="/criaocorrencia">
              <button className="nav__link--button">Criar Ocorrência</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
