import React from "react";
import "./styles.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <p>Texto</p>
        <div>
          <button
            className="modal__button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
