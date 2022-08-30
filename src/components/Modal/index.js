import React from "react";
import "./styles.css";
import iconeModal from '../../assets/images/icone_modal.png';



function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalHeader">
          <h1 className="ModalHeaderTitle">Jair Autopeças</h1>
          <h3 className="ModalHeaderParagraph">Violência</h3> 
        </div>
        <div className="modalContent">
          <div className="modalContentLeft">
          <span className="modalContentLeftIcon"><img src={iconeModal} alt="" /></span>
          <p className="modalContentLeftParagraph">Av. Mister Hull<br/>
              Fortaleza - CE</p>
              {/* <img src={mapModal} alt="" /> */}
          </div>
          <div className="modalContentRight">
              <h1 className="modalContentRightTitle">Anônimo</h1>
              <p className="modalContentRightDate">27/03/2022 - 19h</p>

              <p className="modalContentRightDescription">Texto de apoio complementar<br/> descrevendo melhor<br/> o serviço do site e como funciona.</p>
          </div>
        </div> 
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
