import { Link } from "react-router-dom";
import "./styles.css";

function NavBar() {
  return (
    <div className="navbar__content">
      <Link className="logo" to="/">
        Se liga, Hein
      </Link>
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
            <Link className="nav__link" to="/login">
              Minha Área
            </Link>
          </li>
          <li>
            <Link to="/new-occurrence">
              <button className="nav__link--button">Criar Ocorrência</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
