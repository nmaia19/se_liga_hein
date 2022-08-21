import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email | !password) {
      Swal.fire({
        icon: "error",
        title: "Preencha todos os campos",
        showConfirmButton: false,
      });
    }
    if (email.length > 0 && password.length > 0) {
      localStorage.setItem("password", password);
      localStorage.setItem("email", email);
      Swal.fire({
        icon: "success",
        title: "Usuário cadatrado com sucesso!",
        showConfirmButton: false,
      });
      navigate("/login");
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
        <div className="login__button">
          <button type="button" onClick={handleSignup}>
            Criar conta
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
