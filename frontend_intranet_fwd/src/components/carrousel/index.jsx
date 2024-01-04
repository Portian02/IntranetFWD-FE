import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";
import { Link } from "react-router-dom";

const Carousel1 = () => {
  return (
    <Carousel data-bs-theme="dark" className="carusel">
      <Carousel.Item className="container-image" interval={1000}>
        <Link to="/princess">
          <img
            className="d-block w-100"
            src="https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp" // Aquí debes colocar la ruta de la imagen o la lógica que prefieras
            alt="img"
          />
        </Link>
        <Carousel.Caption>
          <h5>Gatito Feliz</h5>
          <p>Lo más tierno que verás hoy</p>
        </Carousel.Caption>
        {/* --------------------------------------------------------------------------- */}
      </Carousel.Item>
      <Carousel.Item className="container-image" interval={1000}>
        <Link to="/princess">
          <img
            className="d-block w-100"
            src="https://aws-storage-aulab.s3.eu-south-1.amazonaws.com/aulabes/app/public/39/conversions/Articulo_CAROUSEL-cover-cover.jpg"
            alt="img"
          />
        </Link>
        <Carousel.Caption>
          <h5>Relajate</h5>
          <p>un carrusel puede ser de ayuda</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* // ---------------------------------------------------------------------------  */}

      <Carousel.Item className="container-image" interval={1000}>
        <Link to="/princess">
          <img
            className="d-block w-100"
            src="https://aws-storage-aulab.s3.eu-south-1.amazonaws.com/aulabes/app/public/1/conversions/1articoloPartireDa0-cover-cover.jpg"
            alt="img"
          />
        </Link>
        <Carousel.Caption>
          <h5>Evoluciona</h5>
          <p>Mantente actualizadoo con nosotros con las nuevas tecnologias</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* // ---------------------------------------------------------------------------  */}

      <Carousel.Item className="container-image" interval={1000}>
        <Link to="/princess">
          <img
            className="d-block w-100"
            src="https://aws-storage-aulab.s3.eu-south-1.amazonaws.com/aulabes/app/public/2/conversions/Cambia_carriera-cover-thumb.jpg"
            alt="img"
          />
        </Link>
        <Carousel.Caption>
          <h5>Apresurate</h5>
          <p>e inscribete a nuestro programa</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel1;
