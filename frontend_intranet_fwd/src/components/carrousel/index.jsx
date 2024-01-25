import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";
import { Link } from "react-router-dom";

const Carousel1 = () => {
  return (
    <Carousel data-bs-theme="dark" className="carusel">
  
    

    {/* // ---------------------------------------------------------------------------  */}
    <Carousel.Item className="container-image" interval={1000}>
      <Link to="/princess">
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/aaad85_b3f03880d2354c1eaae96f20c5f13c1e~mv2.jpg/v1/fill/w_840,h_504,fp_0.50_0.57,q_85,usm_0.66_1.00_0.01,enc_auto/PHOTO-2023-11-13-20-23-54%202.jpg"
          alt="img"
        />
      </Link>
      <Carousel.Caption>
        <h5>Relajate</h5>
        <p>un carrusel puede ser de ayuda</p>
      </Carousel.Caption>
    </Carousel.Item>
    {/* {/ // ---------------------------------------------------------------------------  */} 

<Carousel.Item className="container-image" interval={1000}>
      <Link to="/princess">
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/aaad85_d3ce69c5f8be45ca931ee2c53050ae58~mv2.jpg/v1/fill/w_840,h_504,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Timon%20Studler.jpg"
          alt="img"
        />
      </Link>
      <Carousel.Caption>
        <h5>Evoluciona</h5>
        <p>Mantente actualizado con nosotros con las nuevas tecnologias</p>
      </Carousel.Caption>
    </Carousel.Item>
    {/* // ---------------------------------------------------------------------------  */}

    <Carousel.Item className="container-image" interval={1000}>
      <Link to="/princess">
        <img
          className="d-block w-100"
          src="images\Reclutamiento.jpg"
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
