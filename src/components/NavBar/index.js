import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function NavBar() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    var item = localStorage.getItem("email");
    if (item) {
      setLogged(true);
    }
  }, []);


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
            <Link className="nav__link" to="/login">
              {logged ? "Minha Área" : "Entrar"}
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
