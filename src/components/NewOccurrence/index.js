import { useState } from "react";
import SelectBrazilianStates from "./Form/SelectBrazilianStates";
import SelectBrazilianCities from "./Form/SelectBrazilianCities";
import "./styles.css";
import React from "react";

function NewOccurrenceForm() {
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

  function submitData(evt) {
    evt.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch(
      "https://6304f02a697408f7edbe9e13.mockapi.io/occorrences",
      requestOptions
    ).then((response) => response.json());
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const occurrence = Object.fromEntries(formData);
    let occurrences = JSON.parse(localStorage.getItem("occurrences") || "[]");
    occurrences.push(occurrence);
    localStorage.setItem("occurrences", JSON.stringify(occurrences));
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
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
            />
          </fieldset>

          <fieldset classNameName="new-occurrences___form__fieldset">
            <label htmlFor="victim">A vítima é você?</label>
            <select
              id="victim"
              value={formData.victim}
              name="victim"
              onChange={(e) =>
                setFormData({ ...formData, victim: e.target.value })
              }
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
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="violenc">Violência sofrida</label>
            <select
              name="violenc"
              id="violenc"
              value={formData.violenc}
              onChange={(e) =>
                setFormData({ ...formData, violenc: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, physicalAggression: e.target.value })
              }
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
              onChange={handleLocalChange}
              value={formValues.state || ""}
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="city">Cidade</label>
            <SelectBrazilianCities
              state={localValues.state}
              onChange={handleLocalChange}
              value={formValues.city || ""}
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="date">Data</label>
            <input
              type="date"
              value={formData.date}
              id="date"
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="time">Horário</label>
            <input
              type="time"
              value={formData.time}
              id="time"
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
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
              value={formData.local}
              onChange={(e) =>
                setFormData({ ...formData, local: e.target.value })
              }
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="establishment">Nome do estabelecimento</label>
            <input
              type="text"
              name="establishment"
              id="establishment"
              value={formData.establishment}
              onChange={(e) =>
                setFormData({ ...formData, establishment: e.target.value })
              }
            />
          </fieldset>
        </div>
        <div className="new-occurrences__form__group blocks-1">
          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="description">O que aconteceu?</label>
            <textarea
              placeholder="Por gentileza, descreva de forma mais detalhada possível o que aconteceu"
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>
          </fieldset>
        </div>
        <div className="new-occurrences__form__group blocks-1">
          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="terms" className="terms-label">
              Termos e condições
            </label>
            <textarea name="terms" id="terms" cols="30" rows="10" readOnly>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae pariatur aspernatur dolor sapiente laudantium.
              Nesciunt molestias porro quaerat recusandae labore, enim iusto
              delectus quod saepe eveniet minima aliquam, eaque est. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Modi corrupti nulla
              omnis ducimus deleniti, architecto expedita facere consectetur
              quae culpa sed libero similique error ipsum? Vero qui vel sit
              reiciendis! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Expedita repellat libero nulla ab accusantium id excepturi
              voluptatum, corporis asperiores debitis enim porro voluptate
              quibusdam officia eligendi. Consequuntur hic voluptatem ipsum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              obcaecati aperiam suscipit eveniet, eos assumenda blanditiis
              maxime debitis expedita eligendi delectus, magnam quia voluptas
              impedit accusamus iusto iste fuga temporibus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Qui deleniti ipsum
              corporis! Impedit vero labore deleniti, eligendi temporibus
              aliquam distinctio ut officiis ipsam nemo eveniet quasi in quia
              atque neque? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Saepe asperiores provident ex quis debitis laudantium et
              recusandae quae, rerum quia porro numquam nihil dignissimos fuga
              similique architecto possimus. Aliquid, ab!
            </textarea>
          </fieldset>
        </div>
        <div className="new-occurrences__form__group checkbox-group">
          <input
            type="checkbox"
            name="termsCheck"
            id="termsCheck"
            onChange={handleInputChange}
            checked={formValues.termsCheck}
          />
          <label htmlFor="termsCheck">Li e aceito os termos e condições.</label>
        </div>
        <div className="new-occurrences__form__group">
          <button
            className="newOccurrence__button"
            type="submit"
            onClick={submitData}
          >
            Registrar ocorrência
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewOccurrenceForm;
