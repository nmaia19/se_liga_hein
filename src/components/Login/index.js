import { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginMain() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = () => {
    const LocalPassword = localStorage.getItem("password");
    const LocalEmail = localStorage.getItem("email");
    if (!email | !password) {
      alert("Preencha todos os campos");
    }
    if (email !== LocalEmail && password !== LocalPassword) {
      alert("Login incorreto");
    }
    if (email === LocalEmail && password === LocalPassword) {
      alert("Login efetuado com sucesso!");
      navigate("/");
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
        <a className="login__password" href="/">
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
          <Link to="/createaccount">
            <button> Criar conta </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginMain;
