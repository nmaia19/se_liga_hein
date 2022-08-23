import { useEffect, useState } from "react";
import { citiesAlphabeticalOrder, getCitiesByState } from "../../API-IBGE/ibge";

const SelectBrazilianCities = ({ state, onChange = () => {} }) => {
  const [cities, setCities] = useState([]);
  console.log(cities, "cidades");
  useEffect(() => {
    getCitiesByState(state)
      .then(citiesAlphabeticalOrder)
      .then((cities) => {
        setCities(cities);
      });
  }, [state]);

  return (
    <select name="city" id="city" onChange={onChange}>
      <option value="">Selecionar</option>
      {cities.map((city) => {
        const { value, label } = city;
        return (
          <option value={label} key={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectBrazilianCities;
