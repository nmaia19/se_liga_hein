import { useEffect, useState } from "react";
import "./styles.css";
import iconPencil from "../../assets/images/iconpencil.svg";
import iconDelete from "../../assets/images/icondelete.svg";
import Footer from "../../components/Footer";
import localSvg from "../../assets/images/localsvg.svg";
import Modal from "../../components/Search/Modal";

function MyOccurrences() {
  const [occorrences, setOccurrences] = useState([]);
  const [tipodeviolencia, setTipodeviolencia] = useState("");
  const [order, setOrder] = useState("");
  const [filteredOccorrences, setFilteredOccurrences] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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

  function byAge(e) {
    setOrder(e.target.value);
    var teste = [];
    if (e.target.value === "maisrecente") {
      teste.push(
        occorrences.sort(function (a, b) {
          if (a.id > b.id) {
            return -1;
          } else {
            return true;
          }
        })
      );
    } else if (e.target.value === "menosrecente") {
      teste.push(
        occorrences.sort(function (a, b) {
          if (a.id < b.id) {
            return -1;
          } else {
            return true;
          }
        })
      );
    }
    console.log(teste[0]);
    setOccurrences(teste[0]);
  }

  useEffect(() => {
    var occorrencesFilter = occorrences.filter((occurrence) => {
      return occurrence.violenc === tipodeviolencia;
    });
    setFilteredOccurrences(occorrencesFilter);
  }, [tipodeviolencia, occorrences, order]);

  return (
    <div className="my-occurrences">
      <h1 className="my__occurrence-h1">Minhas Ocorrências</h1>
      <div className="filters">
        <div className="filter">
          <select name="order" id="order" onChange={byAge}>
            <option id="option__filter" value="0">
              Ordenar
            </option>
            <option id="option__filter" value="maisrecente">
              Mais recente
            </option>
            <option id="option__filter" value="menosrecente">
              Menos recente
            </option>
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
      <main className="my-occurrences__maincards">
        <div className="my-occurrences__maincards--div">
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
                      <div className="card__occurrence--info">
                        <img src={localSvg} alt="" />
                        <h4 className="card__occurrence--address">
                          {item.local}
                        </h4>
                      </div>
                      {modalOpen && (
                        <Modal info={item} setOpenModal={setModalOpen} />
                      )}
                      <button
                        className="card__occurrence--button"
                        onClick={() => setModalOpen(true)}
                      >
                        Ler mais
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
                      <div className="card__occurrence--info">
                        <img src={localSvg} alt="" />
                        <h4 className="card__occurrence--address">
                          {item.local}
                        </h4>
                      </div>
                      {modalOpen && (
                        <Modal info={item} setOpenModal={setModalOpen} />
                      )}
                      <button
                        className="card__occurrence--button"
                        onClick={() => setModalOpen(true)}
                      >
                        Ler mais
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
