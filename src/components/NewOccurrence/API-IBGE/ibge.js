const baseUrl = 'https://servicodados.ibge.gov.br/api/v1';

export const fetchStates = () => {
const url = `${baseUrl}/localidades/estados`;
return fetch(url).then(response => response.json());
}