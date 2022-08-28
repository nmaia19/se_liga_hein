import { useState } from "react";
import Modal from "../../Modal";
import "./styles.css";

export default function Card() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="card">
      <div className="tags">
        <p>Anônimo</p>
        <p className="level">Violência</p>
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
        <h4 className="info__address">
          Casa do Espeto - Av. Washington Soares, 1322, Fortaleza-CE
        </h4>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}

      <button className="read-more" onClick={() => setModalOpen(true)}>
        Ler mais
      </button>
    </div>
  );
}
