import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleSignout = () => {
    localStorage.clear();
  };

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
          <li
            className="nav__link--area"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Link className="nav__link" to="/login">
              <span>Minha Área</span>
            </Link>
            {open && (
              <div className="nav__link--hover">
                <a onMouseEnter={() => setOpen(true)} href="/myoccurrences">
                  Minhas ocorrências
                </a>
                <div className="nav__link--hover-divider" />

                <a onClick={() => handleSignout} href="/">
                  Sair
                </a>
              </div>
            )}
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
