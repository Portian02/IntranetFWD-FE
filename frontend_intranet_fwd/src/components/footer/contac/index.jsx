import React, { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = () => {
        window.location.href =` mailto:sariasp@fwdcostarica.com?subject=Message from ${formData.name}&body=${formData.message}`;
    };

    const openWhatsApp = () => {
        window.open('https://wa.me/72025228', '_blank');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, con una solicitud HTTP
        console.log(formData);
        // Aquí puedes agregar lógica adicional, como enviar un correo electrónico o abrir un enlace de WhatsApp
        sendEmail();
        openWhatsApp();
    };

    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            <div className="whatsapp">
                <p>Or contact us through WhatsApp</p>
                <button onClick={openWhatsApp}>WhatsApp</button>
            </div>
            <p>Send us a message and we will get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactUs;