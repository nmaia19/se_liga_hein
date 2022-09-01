import Card from "../../components/Search/Card";
import Footer from "../../components/Footer";
import "./styles.css";
import { useState, useEffect } from "react";

function Search() {
  const filters = ["Cidade", "Estabelecimento", "Tipo de Violência"];

  const places = [
    {
      name: "Anônimo",
      victim: "Sim",
      victimName: "Anônimo",
      age: "18",
      violence: "LGBTfobia",
      physicalAggression: "Não",
      state: "Paraíba",
      city: "João Pessoa",
      date: "25/08/2022",
      time: "18:59",
      local: "Av. Cabo Branco, 3056 - Cabo Branco, João Pessoa - PB",
      establishment: "Bar do Cuscuz",
      description:
        "Estava na saída do banheiro feminino conversando com a minha irmã mais nova, quando fui abordada pelo subgerente, acusando de estarmos trocando caricias no local e exigindo que nos retirássemos, pois seguindo ele, estávamos incomodando outros clientes. No momento, estávamos conversando sobre uma situação delicada sobre nossa família, e grosseiramente fomos expulsas do ambiente",
      lat: "-7.136223005438764",
      lng: "-34.81990641534453",
    },
    {
      name: "Jhully Carla",
      victim: "Sim",
      victimName: "Jhully Carla",
      age: "26",
      violence: "Transfobia",
      physicalAggression: "Não",
      state: "Ceará",
      city: "Juazeiro do Norte",
      date: "30/05/2022",
      time: "13:26",
      local: "Av. Paraíba, 492 - Pirajá, Juazeiro do Norte - CE",
      establishment: "Diva Fitness Academia",
      description:
        "Fui impedida de fazer a matrícula. Uma funcionária foi orientada a falar que não aceitava na academia pessoas como eu porque é uma academia feminina, e a empresa não tinha preparação para me receber porque as alunas não me aceitavam. Eu sai arrasada e chorando pela discriminação.",
      lat: "-7.22930187223882",
      lng: "-39.31369378937616",
    },
    {
      name: "Djimy Cosmeus",
      victim: "Sim",
      victimName: "Djimy Cosmeus",
      age: "28",
      violence: "Xenofobia",
      physicalAggression: "Sim",
      state: "Santa Catarina",
      city: "Chapecó",
      date: "08/07/2022",
      time: "10:00",
      local: "Av. Sen. Attilio Fontana, 3600 - Engenho Braun, Chapecó - SC",
      establishment: "BRF",
      description:
        "O supervisor queria me fazer assinar uma advertência alegando que eu não tinha comparecido ao trabalho no dia anterior, mas eu tinha. Me recusei a assinar e pedi para chamar um colega para confirmar, mas o supervisor chamou os seguranças, que começaram a me agredir. Eu gritava para alguém fazer alguma coisa, eles gritavam que estavam me disciplinando. Eu gritei que esse homem iria me matar, eu sentia dores nas costas e fui sendo asfixiado. Eu dizia para me soltarem, eu não conseguia respirar",
      lat: "-27.097488670015597",
      lng: "-52.64977930130017",
    },
    {
      name: "Anônimo",
      victim: "Sim",
      victimName: "Anônimo",
      age: "42",
      violence: "Racismo",
      physicalAggression: "Não",
      state: "São Paulo",
      city: "Taubaté",
      date: "25/08/2022",
      time: "18:59",
      local: "Av. Roberto Bertoletti, 551, Taubaté - SP",
      establishment: "Autoliv",
      description:
        'a funcionária saiu do trabalho junto com outras pessoas, no horário normal. Mas, o relógio da linha de produção, onde ela atuava, estava atrasado. No dia seguinte, dois superiores passaram fita crepe nos braços dela e saíram pelo setor para que todos os demais funcionários vissem. Aquela atitude só foi tomada com ela. Eles disseram que "era assim que se fazia com quem era fujão"',
      lat: "-23.047698574927264",
      lng: "-45.62541171534453",
    },
    {
      name: "Mari",
      victim: "Sim",
      victimName: "Mari",
      age: "20",
      violence: "Racismo",
      physicalAggression: "Não",
      state: "Paraíba",
      city: "João Pessoa",
      date: "25/08/2022",
      time: "11:56",
      local: "R. Franca Filho, 96 - Manaíra, João Pessoa",
      establishment: "Hao",
      description:
        "Destratada pelos garçons da casa, que recusaram atendimento a princípio e pediram para ela se retirar, sem dar explicações, dizendo que ali não atendiam qualquer um, sem nenhum motivo plausível.",
      lat: "-7.10771862377317",
      lng: "-34.8275841317048",
    },
    {
      name: "Anônimo",
      victim: "Não",
      victimName: "Dudu",
      age: "30",
      violence: "Homofobia",
      physicalAggression: "Sim",
      state: "Paraíba",
      city: "Campina Grande",
      date: "17/08/2022",
      time: "03:00",
      local: "R. Irineu Joffily, 176 - Centro, Campina Grande - PB",
      establishment: "La Suissa",
      description:
        "Estava segurando a mão do meu namorado e o gerente me constrangeu foi agressivo, me pedindo pra parar de segurar a mão dele ou nos retirar do local, pois, segundo ele, clientes estavam reclamando.",
      lat: "-7.22138044079205",
      lng: "-35.88470712477116",
    },
  ];

  // const [places, setPlaces] = useState([])
  const [filter, setFilter] = useState("clear");
  const [input, setInput] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (filter === "Cidade") {
      setFilteredPlaces(
        places.filter((place) =>
          place.city.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else if (filter === "Estabelecimento") {
      setFilteredPlaces(
        places.filter((place) =>
          place.establishment.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else if (filter === "Tipo de Violência") {
      setFilteredPlaces(
        places.filter((place) =>
          place.violence.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else if (filter === "clear" && input !== "") {
      let ctrArr = [];
      places.forEach((place, index) => {
        for (const property in place) {
          if (
            place[property].toLowerCase().includes(input.toLowerCase()) &&
            ctrArr.includes(places[index]) === false
          ) {
            ctrArr.push(places[index]);
          }
        }
      });
      setFilteredPlaces(ctrArr);
    } else if (input === "") {
      setFilteredPlaces(places);
    }
    setInput("");
  };

  useEffect(() => setFilteredPlaces(places), []);

  // Caso precise acessar o localStorage
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('occurrences'))
  //   if (items) {
  //     setPlaces(items)
  //     setFilteredPlaces(items)
  //   }
  // }, [])

  // Caso precise acessar API
  // useEffect(() => {
  //   const getPlaces = async () => {
  //     const response = await axios.get(
  //       'https://6304f02a697408f7edbe9e13.mockapi.io/occorrences'
  //     )
  //     console.log(response.data.results)
  //     setPlaces(response.data.results)
  //     setFilteredPlaces(response.data.results)
  //   }
  //   getPlaces()
  // }, [])

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8674 15.7233H16.7381L16.3379 15.3373C17.7387 13.7078 18.582 11.5923 18.582 9.29102C18.582 4.15952 14.4225 0 9.29102 0C4.15952 0 0 4.15952 0 9.29102C0 14.4225 4.15952 18.582 9.29102 18.582C11.5923 18.582 13.7078 17.7387 15.3373 16.3379L15.7233 16.7381V17.8674L22.8702 25L25 22.8702L17.8674 15.7233ZM9.29102 15.7233C5.73185 15.7233 2.85878 12.8502 2.85878 9.29102C2.85878 5.73185 5.73185 2.85878 9.29102 2.85878C12.8502 2.85878 15.7233 5.73185 15.7233 9.29102C15.7233 12.8502 12.8502 15.7233 9.29102 15.7233Z"
            fill="#480CA8"
          />
        </svg>

        <input
          className="search__input"
          placeholder="Digite sua busca"
          type="text"
          name="name"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <select
          className="search__select"
          name="category"
          onChange={handleSelectChange}
        >
          <option value="clear">Filtrar Busca ▾</option>
          {filters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>

        <button className="search__btn" type="submit">
          Buscar
        </button>
      </form>
      <div className="main__content">
        <div>
          {filteredPlaces?.map((place, i) => (
            <div className="search__cards" key={i}>
              <Card place={place} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
