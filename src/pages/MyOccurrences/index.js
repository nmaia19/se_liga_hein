import { useEffect, useState } from "react";
import "./styles.css";

function MyOccurrences() {
  const [occorrences, setOccurrences] = useState([]);
  const [tipodeviolencia, setTipodeviolencia] = useState([]);

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

  useEffect(() => {
    fetch("https://6304f02a697408f7edbe9e13.mockapi.io/occorrences")
      .then((response) => response.json())
      .then((data) => setOccurrences(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSelect = (event) => {
    setTipodeviolencia(event.target.value);
    const filteredOccurrences = occorrences.filter((occurrence) => {
      return occurrence.violenc == tipodeviolencia;
    });

    if (filteredOccurrences.length > 0) {
      setOccurrences(filteredOccurrences);
    }
  };

  return (
    <div>
      <h1>Minhas Ocorrências</h1>
      <div className="filters">
        <div className="filter">
          <select name="" id="">
            <option value="0">Ordenar</option>
            <option value="">Mais recente</option>
            <option value="">Menos recente</option>
          </select>
        </div>
        <div className="filter">
          <select
            name="tipodeocorrencia"
            id="tipodeocorrencia"
            onChange={handleSelect}
          >
            <option value="0">Tipo de ocorrência</option>
            {violences.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <main className="main__cards">
        <div className="main__cards--div">
          {occorrences.map((item) => {
            return (
              <div className="card__occurrence">
                <div className="card__occurrence--headercard">
                  <p>{item.name}</p>
                  <p>{item.violenc}</p>
                </div>
                <div className="card__occurrence--address">{item.endereco}</div>
                <button className="card__occurrence--button">Ver mais</button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default MyOccurrences;
