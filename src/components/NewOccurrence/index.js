import "./styles.css";

function NewOccurrenceForm() {
  return (
    <div className="new-occurrences__container">
      <div className="new-occurrences__form">
        <h1>Nova ocorrência</h1>
        <fieldset className="login__fieldset">
          <label htmlFor="email"> E - mail </label>
          <input type="email" name="email" />
        </fieldset>
        <fieldset className="login__fieldset">
          <label htmlFor="password"> Senha </label>
          <input type="password" name="password" />
        </fieldset>
        <a className="login__password" href="/">
          Esqueceu sua senha ?
        </a>
        <div className="login__button">
          <button> Entrar </button>
        </div>
      </div>
      <div className="login__createaccount">
        <p> Ainda não possui conta ? </p>
        <div className="login__button">
          <button> Criar conta </button>
        </div>
      </div>
    </div>
  );
}

export default NewOccurrenceForm;
