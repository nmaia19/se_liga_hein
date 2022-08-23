import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleSignout = () => {
    localStorage.clear();
  };
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    var item = localStorage.getItem("email");
    if (item) {
      setLogged(true);
    }
  }, [logged]);

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
              {logged ? "Minha Área" : "Entrar"}
            </Link>
            {open && (
              <div className="nav__link--hover">
                <a onMouseEnter={() => setOpen(true)} href="/my-occurrences">
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
