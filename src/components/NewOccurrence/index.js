import { useState } from "react";
import SelectBrazilianStates from "./Form/SelectBrazilianStates";
import SelectBrazilianCities from "./Form/SelectBrazilianCities";
import "./styles.css";
<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";

function NewOccurrenceForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    age: 0,
    city: "",
    date: "",
    local: "",
    time: "",
    establishment: "",
    description: "",
    violenc: "",
    physicalAggression: "",
    victim: "",
    victimName: "",
    state: "",
  });

  console.log(formData, "teste");

  // Select Options
=======
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import TermsAndConditions from "../TermsAndConditions";

function NewOccurrenceForm() {
  const navigate = useNavigate();
>>>>>>> dev
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

<<<<<<< HEAD
  function submitData(evt) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch(
      "https://6304f02a697408f7edbe9e13.mockapi.io/occorrences",
      requestOptions
    )
      .then((response) => response.json())
      .then(() => navigate("/my-occurrences"));
  }

  // UF and City data
  const [localValues, setLocalValues] = useState([]);
  const handleLocalChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, state: e.target.value });
    setFormData({ ...formData, city: e.target.value });
    const { value, name } = e.target;
    setLocalValues({ ...localValues, [name]: value });
  };

  // saving form data in localStorage
  const [formValues, setFormValues] = useState({});
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === "checkbox";
    const data = formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked;
    }
    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
=======
  const [warning, setWarning] = useState({
    show: false,
    message: "",
  });

  const [formValues, setFormValues] = useState({
    name: "",
    victim: "",
    victimName: "",
    age: "",
    violence: "",
    physicalAggression: "",
    state: "",
    city: "",
    date: "",
    time: "",
    local: "",
    establishment: "",
    description: "",
    termsCheck: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Remover Warning
  const warningTime = () => {
    setTimeout(() => {
      setWarning({
        show: false,
        message: "",
      });
    }, 3000);
    return;
>>>>>>> dev
  };

  const handleSubmit = (e) => {
    // Validar formulário
    e.preventDefault();
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
      const formData = new FormData(e.target);
      const occurrence = Object.fromEntries(formData);
      let occurrences = JSON.parse(localStorage.getItem("occurrences") || "[]");
      occurrences.push(occurrence);
      localStorage.setItem("occurrences", JSON.stringify(occurrences));

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
        navigate("/search");
      }, 2500);
    }
  };

  return (
    <div className="new-occurrences__container">
      <h1 className="new-occurrences__heading">Nova ocorrência</h1>
      <form
        className="new-occurrences__form"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="new-occurrences__form__group blocks-3">
          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
<<<<<<< HEAD
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
=======
              onChange={handleInputChange}
              value={formValues.name || ""}
              required
>>>>>>> dev
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="victim">A vítima é você?</label>
            <select
              id="victim"
<<<<<<< HEAD
              value={formData.victim}
              name="victim"
              onChange={(e) =>
                setFormData({ ...formData, victim: e.target.value })
              }
=======
              onChange={handleInputChange}
              value={formValues.victim || ""}
              required
>>>>>>> dev
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
              onChange={(e) =>
                setFormData({ ...formData, victimName: e.target.value })
              }
              value={formData.victimName}
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
<<<<<<< HEAD
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
=======
              onChange={handleInputChange}
              value={formValues.age || ""}
              required
>>>>>>> dev
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="violenc">Violência sofrida</label>
            <select
<<<<<<< HEAD
              name="violenc"
              id="violenc"
              value={formData.violenc}
              onChange={(e) =>
                setFormData({ ...formData, violenc: e.target.value })
              }
=======
              name="violence"
              id="violence"
              onChange={handleInputChange}
              value={formValues.violence || ""}
              required
>>>>>>> dev
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
              value={formData.physicalAggression}
              name="physicalAggression"
              id="physicalAggression"
<<<<<<< HEAD
              onChange={(e) =>
                setFormData({ ...formData, physicalAggression: e.target.value })
              }
=======
              onChange={handleInputChange}
              value={formValues.physicalAggression || ""}
              required
>>>>>>> dev
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
              type="date"
              value={formData.date}
              id="date"
<<<<<<< HEAD
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
=======
              onChange={handleInputChange}
              value={formValues.date || ""}
              required
>>>>>>> dev
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="time">Horário</label>
            <input
              type="time"
              value={formData.time}
              id="time"
<<<<<<< HEAD
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
=======
              onChange={handleInputChange}
              value={formValues.time || ""}
              required
>>>>>>> dev
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
<<<<<<< HEAD
              value={formData.local}
              onChange={(e) =>
                setFormData({ ...formData, local: e.target.value })
              }
=======
              onChange={handleInputChange}
              value={formValues.local || ""}
              required
>>>>>>> dev
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="establishment">Nome do estabelecimento</label>
            <input
              type="text"
              name="establishment"
              id="establishment"
<<<<<<< HEAD
              value={formData.establishment}
              onChange={(e) =>
                setFormData({ ...formData, establishment: e.target.value })
              }
=======
              onChange={handleInputChange}
              value={formValues.establishment || ""}
              required
>>>>>>> dev
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
<<<<<<< HEAD
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
=======
              onChange={handleInputChange}
              value={formValues.description || ""}
              required
>>>>>>> dev
            ></textarea>
          </fieldset>
        </div>
        <div className="new-occurrences__form__group blocks-1">
          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="terms" className="terms-label">
              Termos e condições
            </label>
           <TermsAndConditions className="new-occurrences__terms"/>
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
        <div className="new-occurrences__form__group">
          <button
            className="newOccurrence__button"
            type="submit"
            onClick={submitData}
          >
            Registrar ocorrência
          </button>
          <button className="new-occurrences__btn"type="submit">Registrar ocorrência</button>
        </div>
      </form>
    </div>
  );
}

export default NewOccurrenceForm;
