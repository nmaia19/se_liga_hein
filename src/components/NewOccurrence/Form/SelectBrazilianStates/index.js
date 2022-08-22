import { useState, useEffect } from "react";
import { getStates, statesAlphabeticalOrder } from "../../API-IBGE/ibge";

const SelectBrazilianStates = ({ onChange = () => {} }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    getStates().then(statesAlphabeticalOrder).then(setStates);
  }, []);

  return (
    <select name="state" id="state" onChange={onChange}>
      <option value="">Selecionar</option>
      {states.map((state) => {
        const { value, label } = state;
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectBrazilianStates;
