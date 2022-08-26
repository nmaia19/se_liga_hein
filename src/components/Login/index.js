import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function LoginMain() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault()
    const LocalPassword = localStorage.getItem("password");
    const LocalEmail = localStorage.getItem("email");
    if (!email | !password) {
      Swal.fire({
        icon: "error",
        title: "Preencha todos os campos",
        showConfirmButton: false,
      });
    }
    if ((email !== LocalEmail) | (password !== LocalPassword)) {
      Swal.fire({
        icon: "error",
        title: "Login incorreto",
        showConfirmButton: false,
      });
    }
    if (email === LocalEmail && password === LocalPassword) {
      Swal.fire({
        icon: "success",
        title: "Login efetuado com sucesso!",
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="login__content">
      <div className="login__account">
        <h1>Login</h1>
        <fieldset className="login__fieldset">
          <label htmlFor="email">E-mail</label>
          <input
            value={email}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
        </fieldset>
        <fieldset className="login__fieldset">
          <label htmlFor="password">Senha</label>
          <input
            value={password}
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Senha"
          />
        </fieldset>
        <a className="login__password" href="/createaccount">
          Esqueceu sua senha?
        </a>
        <div className="login__button">
          <button type="button" onClick={handleSignin}>
            Entrar
          </button>
        </div>
      </div>
      <div className="login__createaccount">
        <p>Ainda não possui conta?</p>
        <div className="login__button">
          <Link to="/create-account">
            <button className="nav__link-create-account">Criar conta</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginMain;
