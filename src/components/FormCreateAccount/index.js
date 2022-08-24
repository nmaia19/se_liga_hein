import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormCreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
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
      window.location.reload();
    }
    if (password !== confirmedPassword) {
      Swal.fire({
        icon: "error",
        title: "Senha diferentes",
        showConfirmButton: false,
      });
      navigate("/create-account");
      window.location.reload();
    }
  };
  return (
    <div className="create-account">
      <h1 className="title">Criar conta</h1>
      <form className="form">
        <div className="form__personal-data">
          <div className="personal-data__form-left">
            <fieldset className="form-left__fieldset">
              <label className="fieldset__title" for="name">
                Nome Completo
              </label>
              <input className="fieldset__input" type="text" name="name" />
            </fieldset>
            <fieldset className="form-left__fieldset">
              <label className="fieldset__title" for="email">
                E-mail
              </label>
              <input
                className="fieldset__input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
              />
            </fieldset>
            <fieldset className="form-left__fieldset">
              <label className="fieldset__title" for="cpf">
                CPF
              </label>
              <input
                className="fieldset__input"
                placeholder="000.000.000-00"
                type="text"
                name="cpf"
              />
            </fieldset>
            <fieldset className="form-left__fieldset">
              <label className="fieldset__title" for="password">
                Senha
              </label>
              <input
                className="fieldset__input"
                value={password}
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Senha"
              />
            </fieldset>
            <fieldset className="form-left__fieldset">
              <label className="fieldset__title" for="confirmar-senha">
                Confirmar senha
              </label>
              <input
                className="fieldset__input"
                value={confirmedPassword}
                type="password"
                name="confirmar-senha"
                onChange={(e) => setConfirmedPassword(e.target.value)}
                aria-label="Senha"
              />
            </fieldset>
          </div>

          <div className="personal-data__form-right">
            <fieldset className="form-right__fieldset">
              <label className="fieldset__title-date" for="data-nascimento">
                Data de nascimento
              </label>
              <input
                className="fieldset__input-date"
                type="date"
                name="data-nascimento"
              />
            </fieldset>
            <fieldset className="form-right__fieldset">
              <label
                className="fieldset__title-select"
                for="question-deficiency"
              >
                Você é uma pessoa com deficiência?
              </label>
              <select
                className="fieldset__input-select"
                name="question-deficiency"
              >
                <option selected>Selecionar</option>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </fieldset>
            <fieldset className="form-right__fieldset">
              <label className="fieldset__title-select" for="gender-identity">
                Identidade de gênero
              </label>
              <select className="fieldset__input-select" name="gender-identity">
                <option selected>Selecionar</option>
                <option>Feminino</option>
                <option>Cisgênero</option>
                <option>Transgênero</option>
                <option>Transsexual</option>
                <option>Travesti</option>
              </select>
            </fieldset>
            <fieldset className="form-right__fieldset">
              <label
                className="fieldset__title-select"
                for="sexual-orientation"
              >
                Orientação sexual
              </label>
              <select
                className="fieldset__input-select"
                name="sexual-orientation"
              >
                <option selected>Selecionar</option>
                <option>Heterossexual</option>
                <option>Homossexual</option>
                <option>Bissexual</option>
                <option>Pansexual</option>
                <option>Assexual</option>
              </select>
            </fieldset>
            <fieldset className="form-right__fieldset">
              <label className="fieldset__title-select" for="raca-cor-etnia">
                Raça, cor, etnia
              </label>
              <select className="fieldset__input-select" name="raca-cor-etnia">
                <option selected>Selecionar</option>
                <option>Preto</option>
                <option>Pardo</option>
                <option>Indígena</option>
                <option>Branco</option>
                <option>Amarelo</option>
              </select>
            </fieldset>
          </div>
        </div>

        <div className="form__terms">
          <p className="terms__title">Termos e condições</p>
          <fieldset className="terms__fieldset">
            <textarea className="fieldset__text" rows="1" cols="1000" disabled>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </textarea>
          </fieldset>
          <fieldset className="terms__fieldset-checkbox">
            <input
              className="fieldset-checkbox__input"
              type="checkbox"
              name="accept-terms"
            />
            <label className="fieldset-checkbox__text" for="accept-terms">
              Li e aceito os termos e condições.
            </label>
          </fieldset>
        </div>
        <button className="btn" type="button" onClick={handleSignup}>
          Criar conta
        </button>
      </form>
    </div>
  );
}
