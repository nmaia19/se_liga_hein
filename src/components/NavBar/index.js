import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const [logged, setLogged] = useState(false);
  useEffect(() => {
    var item = localStorage.getItem("email");
    if (item) {
      setLogged(true);
    }
  }, []);

  return (
    <div className="navbar__content">
      <img
        className="logo"
        src={logo}
        alt="Se liga, hein"
        onClick={() => navigate("/")}
      />
      <nav className="nav" id="nav">
        <ul className="nav__ul">
          <li>
            <NavLink className="nav__link" to="/">
              Início
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="/about">
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="/search">
              Pesquisar
            </NavLink>
          </li>
          <li
            className="nav__link--area"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="nav__link">
              {logged ? (
                <>
                  <p>Minha Área</p>
                  {open && (
                    <div className="nav__link--hover">
                      <a
                        onMouseEnter={() => setOpen(true)}
                        href="/my-occurrences"
                      >
                        Minhas ocorrências
                      </a>
                      <div className="nav__link--hover-divider" />
                      <a onClick={() => window.localStorage.clear()} href="/">
                        Sair
                      </a>
                    </div>
                  )}
                </>
              ) : (
                <a className="link__entrar" href="/login">
                  Entrar
                </a>
              )}
            </div>
          </li>
          <li>
            <NavLink className="nav__link" to="/privacy-policy">
              Política de Privacidade
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink__button" to="/new-occurrence">
              <button className="nav__link--button">Criar Ocorrência</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
