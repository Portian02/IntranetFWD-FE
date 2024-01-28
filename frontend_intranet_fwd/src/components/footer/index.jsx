import React from 'react';
import './footer.css';
import patron from "./patron.jpg";


const Footer = () => {
    return (
        <footer>
            <div className="footer-info">
                <h3>Información General</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

           

                <h3>Quién lo Maneja</h3>
                <p>Este footer es manejado por el equipo de desarrollo de IntranetFWD.</p>

            </div>
            <div className="footer-creation">
                 <img src={patron} alt="Hola" />
                <p>Todos los derechos reservados &copy;</p>

         


           
            </div>

         
        </footer>
    );
};

export default Footer;
