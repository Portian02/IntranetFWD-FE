import React from 'react';
import './footer.css';
import ContactUs from './contac';
const Footer = () => {
    return (
        <footer>
            <div className="footer-info">
               
                <h3>Quién lo Maneja</h3>
                <p>Este footer es manejado por el equipo de desarrollo de IntranetFWD.</p>

            </div>
    
              <ContactUs/>
        </footer>
    );
};

export default Footer;
