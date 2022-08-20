import { useState } from "react";
import SelectBrazilianStates from "./Form/SelectBrazilianStates";
import SelectBrazilianCities from "./Form/SelectBrazilianCities";
import "./styles.css";

function NewOccurrenceForm() {
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

  const [formValues, setFormValues] = useState([]);
  const handleInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  return (
    <div className="new-occurrences__container">
      <h1 className="new-occurrences__heading">Nova ocorrência</h1>

      <form className="new-occurrences__form">
        <div className="new-occurrences__form__group blocks-3">
          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" />
          </fieldset>

          <fieldset classNameName="new-occurrences___form__fieldset">
            <label htmlFor="victim">A vítima é você?</label>
            <select name="victim" id="victim">
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
            <input type="text" name="victim-name" id="victim-name" />
          </fieldset>
        </div>

        <div className="new-occurrences__form__group blocks-3">
          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="age">Idade</label>
            <input type="number" name="age" id="age" />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="violence-category">Violência sofrida</label>
            <select name="violence-category" id="violence-category">
              <option value="">Selecione uma categoria</option>
              {violences.map((violence) => (
                <option key={violence} value={violence}>
                  {violence}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="physical-aggression">Houve agressão física?</label>
            <select name="physical-aggression" id="physical-aggression">
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
            <SelectBrazilianStates onChange={handleInputChange} />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="city">Cidade</label>
            <SelectBrazilianCities
              state={formValues.state}
              onChange={handleInputChange}
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="date">Data</label>
            <input type="date" id="date" />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="time">Horário</label>
            <input type="time" id="time" />
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
            />
          </fieldset>

          <fieldset className="new-occurrences___form__fieldset">
            <label htmlFor="establishment">Nome do estabelecimento</label>
            <input type="text" name="establishment" id="establishment" />
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
          <input type="checkbox" name="terms-checkbox" id="terms-checkbox" />
          <label htmlFor="terms-checkbox">
            Li e aceito os termos e condições.
          </label>
        </div>
        <div className="new-occurrences__form__group">
          <button type="submit">Registrar ocorrência</button>
        </div>
      </form>
    </div>
  );
}

export default NewOccurrenceForm;
