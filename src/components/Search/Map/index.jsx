import React from 'react';
import GoogleMapReact from 'google-map-react';
import './styles.css';


const Map = () => {
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className="mapContainer">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11037.348883648961!2d-34.82490202644423!3d-7.119947993579148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd28cfa496b7%3A0x5bee687a9ae9c5b!2sBusto%20Tamandar%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1661368399612!5m2!1spt-BR!2sbr" 
      allowFullScreen={""} 
      loading={"lazy"} 
      referrerPolicy={"no-referrer-when-downgrade"}></iframe>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB98AfKDtcqTG3Ei0KbSI0VkszFnnsRZlU'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}
        >
      </GoogleMapReact> */}
    </div>
  )
}

export default Map;