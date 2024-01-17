import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AdmonitionForm = ({ setCurrAdmonition, setShow }) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const addAdmonition = async (admonitionInfo) => {
    const url = "http://localhost:3001/admonitions"; 

    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(admonitionInfo),
      });

      const data = await response.json();

      if (!response.ok) throw data.error;

      // Puedes realizar acciones adicionales después de añadir la amonestación si es necesario
      console.log("Amonestación creada exitosamente:", data);
      setCurrAdmonition(data);
      setShow(false); // Otras acciones según tus necesidades

    } catch (error) {
      console.error("Error al crear la amonestación:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    const admonitionInfo = {
      user_id: data.user_id,
      status_admonition: data.status_admonition,
      date: data.date,
      responsable_id: data.responsable_id,
      type_admonition_id: data.type_admonition_id
      // Agrega más campos según la estructura de tu modelo Admonition
    };

    addAdmonition(admonitionInfo);
    e.target.reset();
  };

  return (
    <div className="admonition-form-container">
      <form ref={formRef} onSubmit={handleSubmit} className="admonition-form">
      <label htmlFor="user_id">Usuario ID:</label>
        <input
          type="text"
          name="user_id"
          id="user_id"
          placeholder="Usuario ID"
          className="admonition-input"
          required
        />
        <br />
        <label htmlFor="type_admonition_id">Tipo de Amonestación ID:</label>  
        <input
          type="text"
          name="type_admonition_id"
          id="type_admonition_id"
          placeholder="Tipo de Amonestación ID"
          className="admonition-input"
          required
        />
        <br />

        <label htmlFor="status_admonition">Status:</label>
        <input
          type="text"
          name="status_admonition"
          id="status_admonition"
          placeholder="Status"
          className="admonition-input"
          required
        />
        <br />
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          name="date"
          id="date"
          className="admonition-input"
          required
        />
        <br />
        <label htmlFor="responsable_id">Responsable ID:</label>
        <input
          type="text"
          name="responsable_id"
          id="responsable_id"
          placeholder="Responsable ID"
          className="admonition-input"
          required
        />
       
        <br />
        <input type="submit" value="Guardar Amonestación" className="admonition-submit" />
      </form>
    </div>
  );
};

export default AdmonitionForm;

