import React from "react";
import "./home.css";
import Navbar from "../../components/NavBar";
import ControlledCarousel from "../../components/carrousel";
import imagen  from "../home/Flechas-04.jpg";

const Home = () => {



  
  return (
    <div className="Home">
         <Navbar/>
      <ControlledCarousel />


      <div className="content"> <br /> <h1 className="title">Bienvenido Forward Costa Rica</h1>
        <p className="description">
          En Forward Costa Rica, nos dedicamos a brindar educación de calidad en programación frontend y backend, formando a los desarrolladores del futuro.
        </p>


        <h2 className="section-title">Nuestros programas de estudio</h2>
        <ul className="program-list">
          <li className="program-item">Programa de Desarrollo Frontend</li>
          <li className="program-item">Programa de Desarrollo Backend</li>
          <li className="program-item">Programa de Desarrollo Full Stack</li>
        </ul>
         

        <h2 className="section-title">Por qué elegirnos</h2>
        <ul className="reasons-list">
          <li className="reason-item">Profesores expertos en programación</li>
          <li className="reason-item">Proyectos prácticos y desafiantes</li>    <img src={imagen} alt="Descripción de la imagen" className="imagen" />
          <li className="reason-item">Enfoque en las últimas tecnologías y tendencias</li>
          <li className="reason-item">Colaboración con empresas líderes en la industria</li>
        </ul>


      </div>

    
    </div>
   
  );
};

export default Home;
