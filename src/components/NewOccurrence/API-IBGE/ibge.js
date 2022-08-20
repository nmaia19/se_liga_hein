const baseUrl = "https://servicodados.ibge.gov.br/api/v1";

const convertToJson = (response) => response.json();

export const getStates = () => {
  const url = `${baseUrl}/localidades/estados`;
  return fetch(url).then(convertToJson);
};

export const getCitiesByState = async (state) => {
  if (!state) return Promise.resolve([]);

  const url = `${baseUrl}/localidades/estados/${state}/municipios`;
  const response = await fetch(url);
  return convertToJson(response);
};

export const statesAlphabeticalOrder = (states) => {
  return states
    .map((state) => {
      return {
        label: state.nome,
        value: state.sigla,
      };
    })
    .sort((a, b) => {
      return a.label.localeCompare(b.label);
    });
};

export const citiesAlphabeticalOrder = (cities) => {
  return cities
    .map((city) => {
      return {
        label: city.nome,
        value: city.id,
      };
    })
    .sort((a, b) => {
      return a.label.localeCompare(b.label);
    });
};
