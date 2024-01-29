import React from 'react';
import './footer.css';
import ContactUs from './contac';
const Footer = () => {
    return (
        <footer>
            <div className="footer-info">
               
                <h3>Who manages it?</h3>
                <p>This footer is managed by the IntranetFWD development team.</p>

            </div>
    
              <ContactUs/>
        </footer>
    );
};

export default Footer;
