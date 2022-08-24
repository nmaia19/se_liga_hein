import { useState } from "react";
import SelectBrazilianStates from "./Form/SelectBrazilianStates";
import SelectBrazilianCities from "./Form/SelectBrazilianCities";
import "./styles.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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

      <form className="new-occurrences__form" onSubmit={handleSubmit}>
        <div className="new-occurrences__form__group blocks-3">
          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
              value={formValues.name || ""}
              required
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="victim">A vítima é você?</label>
            <select
              name="victim"
              id="victim"
              onChange={handleInputChange}
              value={formValues.victim || ""}
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

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="victim-name">Nome da vítima</label>
            <input
              type="text"
              name="victimName"
              id="victim-name"
              onChange={handleInputChange}
              value={formValues.victimName || ""}
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
              onChange={handleInputChange}
              value={formValues.age || ""}
              required
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="violence">Violência sofrida</label>
            <select
              name="violence"
              id="violence"
              onChange={handleInputChange}
              value={formValues.violence || ""}
              required
            >
              <option value="">Selecione uma categoria</option>
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
            required
          />
          <label htmlFor="termsCheck">Li e aceito os termos e condições.</label>
        </div>
        {warning.show && <span className="warning">{warning.message}</span>}
        <div className="new-occurrences__form__group">
          <button type="submit">Registrar ocorrência</button>
        </div>
      </form>
    </div>
  );
}

export default NewOccurrenceForm;
