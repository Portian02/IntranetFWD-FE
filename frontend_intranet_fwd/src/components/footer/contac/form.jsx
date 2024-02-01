import React from "react";
import { useState } from "react";
import "./contac.css";
const FormEmail = () => {
  const [emailSent, setEmailSent] = useState(false); // Estado para controlar si se envió el correo
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = () => {
    window.location.href = ` mailto:sariasp@fwdcostarica.com?subject=Message from ${formData.name}&body=${formData.message}`;
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    sendEmail();
    setEmailSent(true); // Establecer el estado de emailSent a true después de enviar el correo
  };
  return ( 
  <form onSubmit={handleSubmit} className="contact-form-eamil">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    value={formData.name}
    onChange={handleChange}
    required
    className="contact-input"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    value={formData.email}
    onChange={handleChange}
    required
    className="contact-input"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    required
    className="contact-textarea"
  ></textarea>
  <button type="submit" className="contact-button">
    Send a Email
  </button>
</form>);
};

export default FormEmail;
