import React from "react";
import Map from "../Map";
import "./styles.css";

function Modal({ info, setOpenModal }) {
  return (
    <div className="modal__background">
      <div className="modal__container">
        
        <div>
          <button
            className="close__button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9699 0L20.0007 1.0308L1.0308 19.9993L0 18.9692L18.9699 0Z" fill="black"/>
            <path d="M1.0308 0L20.0007 18.9685L18.9699 20L0 1.03153L1.0308 0Z" fill="black"/>
            </svg>

          </button>
        </div>
        <div className="modal__content">

          <h1 className="modal__title">{info.establishment}</h1>
          <h3 className="modal__violence">{info.violence}</h3>
          <div className="modal__address">
            <svg width="21" height="29" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 0C4.695 0 0 4.5385 0 10.15C0 17.7625 10.5 29 10.5 29C10.5 29 21 17.7625 21 10.15C21 4.5385 16.305 0 10.5 0ZM10.5 13.775C8.43 13.775 6.75 12.151 6.75 10.15C6.75 8.149 8.43 6.525 10.5 6.525C12.57 6.525 14.25 8.149 14.25 10.15C14.25 12.151 12.57 13.775 10.5 13.775Z" fill="#FF9A22"/>
            </svg>

            <h4 className="address">{info.local}</h4>
          </div>
          <div className="modal__description">
            <div className="map">
              <Map coords={[parseFloat(info.lat), parseFloat(info.lng)]}/>
            </div>
            <div className="full-description">
              <h2 className="description__name">{info.name}</h2>
              <h4 className="description__agression">Houve agressão: {info.physicalAggression}</h4>
              <h4 className="description__date">{info.date} - {info.time}</h4>
              <p className="description">{info.description}</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Modal;