import { useState } from "react";
import { useEffect } from "react";
import { fetchStates } from "../../API-IBGE/ibge";


const SelectBrazilianStates = () => {

const [states, setStates] = useState([]);

  useEffect(() => {
    fetchStates().then((states) => {setStates(states)});
  }, []);

  return (
    <select name="state" id="state">
      <option value="">Selecionar</option>
      {states.map((state)=> {
        const {sigla, nome} = state;
        return (<option key={sigla} value={sigla}>{nome}</option>)
      } )}
    </select>
  );
};

export default SelectBrazilianStates;
