import React from 'react';
import './footer.css';
import ContactUs from './contac';
const Footer = () => {
    return (
            <footer className="footer">
                <section>
                <div className="footer-info">
                    <h3>Who manages it?</h3>
                    <p>This is managed by the IntranetFWD development team.</p>
                    <p className='copyrigth'> © 2024 by FWD</p>
                </div>
                </section>
                <section>
                <div className="contact">
                <ContactUs/>
                </div>
                </section>
            </footer>
    );
};


export default Footer;
