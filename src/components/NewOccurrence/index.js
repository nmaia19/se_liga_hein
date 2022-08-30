import { useState } from "react";
import SelectBrazilianStates from "./Form/SelectBrazilianStates";
import SelectBrazilianCities from "./Form/SelectBrazilianCities";
import "./styles.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import TermsAndConditions from "../TermsAndConditions";

function NewOccurrenceForm() {
  const navigate = useNavigate();
  const options = ["Sim", "Não"];
  const violences = [
    "Racismo",
    "Xenofobia",
    "Capacitismo",
    "Homofobia",
    "Transfobia",
    "LGBTfobia",
    "Misoginia",
    "Gordofobia",
    "Intolerância religiosa",
    "Outro",
  ];
  const [warning, setWarning] = useState({
    show: false,
    message: "",
  });

  const [formValues, setFormValues] = useState({
    name: "",
    victim: "",
    victimName: "",
    state: "",
    city: "",
    date: "",
    time: "",
    local: "",
    establishment: "",
    description: "",
    termsCheck: "",
    age: 0,
    violenc: "",
    physicalAggression: "",
  });

  // Remover Warning
  const warningTime = () => {
    setTimeout(() => {
      setWarning({
        show: false,
        message: "",
      });
    }, 3000);
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar formulário
    if (
      formValues.name === "" ||
      formValues.victim === "" ||
      formValues.age === "" ||
      formValues.violence === "" ||
      formValues.physicalAggression === "" ||
      formValues.state === "" ||
      formValues.city === "" ||
      formValues.date === "" ||
      formValues.time === "" ||
      formValues.local === "" ||
      formValues.establishment === "" ||
      formValues.description === "" ||
      formValues.termsCheck === ""
    ) {
      setWarning({
        show: true,
        message: "Atenção, todos os campos precisam estar preenchidos.",
      });
      warningTime();
    } else if (formValues.age < 18) {
      setWarning({
        show: true,
        message:
          "Você precisa ter 18 anos ou mais para cadastrar uma ocorrência.",
      });
      warningTime();
    } else {
      // Salvar nova ocorrência no localStorage
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      };
      fetch(
        "https://6304f02a697408f7edbe9e13.mockapi.io/occorrences",
        requestOptions
      )
        .then((response) => response.json())
        .then(() => navigate("/my-occurrences"));
      // Exibir mensagem 'Ocorrência salva'
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sua ocorrência foi registrada",
        showConfirmButton: false,
        timer: 1500,
      });
      // Redirecionar usuário
      setTimeout(() => {
        navigate("/my-occurrences");
      }, 2500);
    }
  };

  // saving form data in localStorage
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === "checkbox";
    const data = formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked;
    }
    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  return (
    <div className="new-occurrences__container">
      <h1 className="new-occurrences__heading">Nova ocorrência</h1>
      <form className="new-occurrences__form" onSubmit={handleSubmit}>
        <div className="new-occurrences__form__group blocks-3">
          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
              value={formValues.name || "anônimo"}
              required
            />
          </fieldset>

          <fieldset classNameName="new-occurrences___form__fieldset">
            <label htmlFor="victim">A vítima é você?</label>
            <select
              id="victim"
              value={formValues.victim || ""}
              name="victim"
              onChange={handleInputChange}
            >
              <option>Selecione uma opção</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="victimName">Nome da vítima</label>
            <input
              type="text"
              name="victimName"
              id="victimName"
              onChange={handleInputChange}
              value={formValues.victimName || "anônimo"}
            />
          </fieldset>
        </div>
        <div className="new-occurrences__form__group blocks-3">
          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="age">Idade</label>
            <input
              type="number"
              name="age"
              id="age"
              value={formValues.age || ""}
              onChange={handleInputChange}
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="violenc">Violência sofrida</label>
            <select
              name="violenc"
              id="violenc"
              value={formValues.violenc || ""}
              onChange={handleInputChange}
              required
            >
              <option>Selecione uma categoria</option>
              {violences.map((violence) => (
                <option key={violence} value={violence}>
                  {violence}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="physicalAggression">Houve agressão física?</label>
            <select
              name="physicalAggression"
              id="physicalAggression"
              onChange={handleInputChange}
              value={formValues.physicalAggression || ""}
              required
            >
              <option value="">Selecione uma opção</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </fieldset>
        </div>

        <div className="new-occurrences__form__group blocks-4">
          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="state">Estado</label>
            <SelectBrazilianStates
              onChange={handleInputChange}
              value={formValues.state || ""}
              required
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="city">Cidade</label>
            <SelectBrazilianCities
              state={formValues.state}
              onChange={handleInputChange}
              value={formValues.city || ""}
              required
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="date">Data</label>
            <input
              name="date"
              type="date"
              id="date"
              onChange={handleInputChange}
              value={formValues.date || ""}
              required
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="time">Horário</label>
            <input
              name="time"
              type="time"
              id="time"
              onChange={handleInputChange}
              value={formValues.time || ""}
              required
            />
          </fieldset>
        </div>
        <div className="new-occurrences__form__group blocks-2">
          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="local">Local</label>
            <input
              type="text"
              name="local"
              id="local"
              placeholder="Digite o endereço"
              onChange={handleInputChange}
              value={formValues.local || ""}
              required
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="establishment">Nome do estabelecimento</label>
            <input
              type="text"
              name="establishment"
              id="establishment"
              onChange={handleInputChange}
              value={formValues.establishment || ""}
              required
            />
          </fieldset>
        </div>
        <div className="new-occurrences__form__group blocks-1">
          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="description">O que aconteceu?</label>
            <textarea
              placeholder="Por gentileza, descreva da forma mais detalhada possível o que aconteceu"
              name="description"
              id="description"
              cols="30"
              rows="10"
              onChange={handleInputChange}
              value={formValues.description || ""}
              required
            ></textarea>
          </fieldset>
        </div>
        <div className="new-occurrences__form__group blocks-1">
          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="terms" className="terms-label">
              Termos e condições
            </label>
            <TermsAndConditions className="new-occurrences__terms" />
          </fieldset>
        </div>
        <div className="new-occurrences__form__group checkbox-group">
          <input
            type="checkbox"
            name="termsCheck"
            id="termsCheck"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="termsCheck">Li e aceito os termos e condições.</label>
        </div>
        {warning.show && <span className="warning">{warning.message}</span>}
        <div className="new-occurrences__form__button">
          <button className="newOccurrence__button" type="submit">
            Registrar ocorrência
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewOccurrenceForm;
