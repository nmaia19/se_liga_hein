import { useEffect, useState } from "react";
import "./styles.css";
import iconPencil from "../../assets/images/iconpencil.svg";
import iconDelete from "../../assets/images/icondelete.svg";
import Footer from "../../components/Footer";

function MyOccurrences() {
  const [occorrences, setOccurrences] = useState([]);
  const [tipodeviolencia, setTipodeviolencia] = useState("");
  const [filteredOccorrences, setFilteredOccurrences] = useState([]);

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

  const remove = (id) => {
    fetch("https://6304f02a697408f7edbe9e13.mockapi.io/occorrences/" + id, {
      method: "DELETE",
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (event) => {
    setTipodeviolencia(event.target.value);
  };

  useEffect(() => {
    var occorrencesFilter = occorrences.filter((occurrence) => {
      return occurrence.violenc === tipodeviolencia;
    });
    setFilteredOccurrences(occorrencesFilter);
  }, [tipodeviolencia, occorrences]);

  return (
    <div className="my-occurrences">
      <h1 className="my__occurrence-h1">Minhas Ocorrências</h1>
      <div className="filters">
        <div className="filter">
          <select name="" id="">
            <option id="option__filter" value="0">Ordenar</option>
            <option id="option__filter" value="">Mais recente</option>
            <option  id="option__filter" value="">Menos recente</option>
          </select>
        </div>
        <div className="filter">
          <select
            name="tipodeocorrencia"
            id="tipodeocorrencia"
            onChange={handleChange}
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
          <>
            {tipodeviolencia == 0 ? (
              occorrences.map((item) => {
                return (
                  <div className="card__occurrence" style={{ display: "flex" }}>
                    <div className="card__occurrence1">
                      <div className="card__occurrence--headercard">
                        <p className="name">{item.name}</p>
                        <p className="violence">{item.violenc}</p>
                      </div>
                      <div className="card__info">
                        <svg
                          width="9"
                          height="13"
                          viewBox="0 0 9 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 0C2.01214 0 0 2.0345 0 4.55C0 7.9625 4.5 13 4.5 13C4.5 13 9 7.9625 9 4.55C9 2.0345 6.98786 0 4.5 0ZM4.5 6.175C3.61286 6.175 2.89286 5.447 2.89286 4.55C2.89286 3.653 3.61286 2.925 4.5 2.925C5.38714 2.925 6.10714 3.653 6.10714 4.55C6.10714 5.447 5.38714 6.175 4.5 6.175Z"
                            fill="black"
                          />
                        </svg>
                        <h4 className="card__occurrence--address">
                          {item.local}
                        </h4>
                      </div>
                      <button className="card__occurrence--button">
                        Ver mais
                      </button>
                    </div>
                    <div className="card__occurrence__actions">
                      <div className="card__occurrence--update">
                        <button>
                          <img src={iconPencil} alt="" />
                        </button>
                      </div>
                      <div className="card__occurrence--delete">
                        <button onClick={() => remove(item.id)}>
                          <img src={iconDelete} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : filteredOccorrences.length > 0 ? (
              filteredOccorrences.map((item) => {
                return (
                  <div className="card__occurrence" style={{ display: "flex" }}>
                  <div className="card__occurrence1">
                    <div className="card__occurrence--headercard">
                      <p className="name">{item.name}</p>
                      <p className="violence">{item.violenc}</p>
                    </div>
                    <div className="card__info">
                      <svg
                        width="9"
                        height="13"
                        viewBox="0 0 9 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 0C2.01214 0 0 2.0345 0 4.55C0 7.9625 4.5 13 4.5 13C4.5 13 9 7.9625 9 4.55C9 2.0345 6.98786 0 4.5 0ZM4.5 6.175C3.61286 6.175 2.89286 5.447 2.89286 4.55C2.89286 3.653 3.61286 2.925 4.5 2.925C5.38714 2.925 6.10714 3.653 6.10714 4.55C6.10714 5.447 5.38714 6.175 4.5 6.175Z"
                          fill="black"
                        />
                      </svg>
                      <h4 className="card__occurrence--address">
                        {item.local}
                      </h4>
                    </div>
                    <button className="card__occurrence--button">
                      Ver mais
                    </button>
                  </div>
                  <div className="card__occurrence__actions">
                    <div className="card__occurrence--update">
                      <button>
                        <img src={iconPencil} alt="" />
                      </button>
                    </div>
                    <div className="card__occurrence--delete">
                      <button onClick={() => remove(item.id)}>
                        <img src={iconDelete} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                );
              })
            ) : (
              <div className="card__occurrence--noregister">
                <p> Nenhum registro encontrado</p>
              </div>
            )}
          </>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MyOccurrences;
