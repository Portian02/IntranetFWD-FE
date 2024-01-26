import React from "react";
import Carousel from "react-bootstrap/Carousel";
import   "./carousel.css";
import { Link } from "react-router-dom";
import inaguración from "./Inaguracion_FWD_2023.jpeg";
import inscribete from "./Inscripciones.jpeg";
import reclutamiento from "./Reclutamiento.jpeg";
import invitaciones from "./Invitaciones.jpeg";
const Carousel1 = () => {
  return (
    <Carousel data-bs-theme="dark" className="carusel">
  
    

    {/* // ---------------------------------------------------------------------------  */}
    <Carousel.Item className="container-image" interval={2000}>
    <Link to="/princess">
     <img className="images"src={inscribete} alt="" />
      </Link>
      <Carousel.Caption>
        <h5>Relajate</h5>
        <p>un carrusel puede ser de ayuda</p>
      </Carousel.Caption>
    </Carousel.Item>
    {/* {/ // ---------------------------------------------------------------------------  */} 

<Carousel.Item className="container-image" interval={2000}>
      <Link to="/princess">
       <img className="images" src={inaguración} alt="" />
      </Link>
      <Carousel.Caption>
        <h5>Evoluciona</h5>
        <p>Mantente actualizado con nosotros con las nuevas tecnologias</p>
      </Carousel.Caption>
    </Carousel.Item>
    {/* // ---------------------------------------------------------------------------  */}
    <Carousel.Item className="container-image" interval={2000}>
      <Link to="/princess">
        <img className="images" src={invitaciones} alt="" />
      </Link>
      <Carousel.Caption>
        <h5>Invitaciones</h5>
        <p>Invitaciones a eventos</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className="container-image" interval={2000}>
      <Link to="/princess">
        <img className="images" src={reclutamiento} alt="" />
        
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
