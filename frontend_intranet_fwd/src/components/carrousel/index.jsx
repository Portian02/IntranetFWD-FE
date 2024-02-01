import React from "react";
import Carousel from "react-bootstrap/Carousel";
import   "./carousel.css";
import { Link } from "react-router-dom";
import webiner from "./MariTalks.png";
import inscribete from "./Inscripciones.jpeg";
import genera from "./FirtGene.jpeg";
import invitaciones from "./Invitaciones.jpeg";
const Carousel1 = () => {
  return (
    <Carousel data-bs-theme="dark" className="carusel">
  
    

    {/* // ---------------------------------------------------------------------------  */}
    <Carousel.Item className="container-image" interval={2000}>
    <Link to="/announcements">
     <img className="images-1"src={inscribete} alt="" />
      </Link>
      <Carousel.Caption>
        <h5>Are you ready to be part of our team?😎👌</h5>
        <p>Participate in the recruitment process from February 5 to 15</p>
      </Carousel.Caption>
    </Carousel.Item>
    {/* {/ // ---------------------------------------------------------------------------  */} 

<Carousel.Item className="container-image" interval={2000}>
      <Link to="/announcements">
       <img className="images-2" src={webiner} alt="" />
      </Link>
      <Carousel.Caption>
        <h5>Webiner with Mariana Rodriguez. </h5>
        <p>Today at 5 </p>
      </Carousel.Caption>
    </Carousel.Item>
    {/* // ---------------------------------------------------------------------------  */}
    <Carousel.Item className="container-image" interval={2000}>
      <Link to="/announcements">
        <img className="images-3" src={invitaciones} alt="" />
      </Link>
      <Carousel.Caption>
        <h5>Graduation 2024.</h5>
        <p> We cannot but be excited for this day.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className="container-image" interval={2000}>
      <Link to="/announcements">
        <img className="images" src={genera} alt="" />
        
      </Link>
      <Carousel.Caption>
        <h5>First Generation</h5>
        <p> This is our first generation FWD 2023</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  );
};

export default Carousel1;
