import { useRef } from "react";
import "./justifications.css"; 

const JustificationForm = ({ setCurrJustification, setShow }) => {
  const formRef = useRef();

  const addJustification = async (justificationInfo) => {
    const urladd = "http://localhost:3001/api/justifications"; 
    try {
      const response = await fetch(urladd, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(justificationInfo),
      });

      const data = await response.json();
      if (!response.ok) throw data.error;
      setCurrJustification(data);
      setShow(false); // Cierra el modal

      window.location.reload(); // Recarga la página
    } catch (error) {
      console.error("Error al agregar justificación", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    const justificationInfo = {
      justifications: {
        status_justification: data.status_justification,
        date: data.date,
        responsable_id: data.responsable_id,
        user_id: data.userid,
        justification_types_id: data.justification_types_id, 
      },
    };

    addJustification(justificationInfo);
    e.target.reset();
  };

  return (
    <div className="justification-add-container">
      <form ref={formRef} onSubmit={handleSubmit} className="justification-add-form">
        <label htmlFor="status_justification">Status:</label>
        <input
          type="text"
          name="status_justification"
          id="status_justification"
          placeholder="Status"
          className="justification-add-input"
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Date"
          className="justification-add-input"
        />
        <br />
        <label htmlFor="responsable_id">Responsable:</label>
        <input
          type="text"
          name="responsable_id"
          id="responsable_id"
          placeholder="Responsable ID"
          className="justification-add-input"
        />
        <br />
        <label htmlFor="userid">User:</label>
        <input
          type="text"
          name="userid"
          id="userid"
          placeholder="User ID"
          className="justification-add-input"
        />
        <br />
        <label htmlFor="justification_types_id">Justification Type:</label>
        <input
          type="text"
          name="justification_types_id"
          id="justification_types_id"
          placeholder="Justification Type"
          className="justification-add-input"
        />
        <br />
        <input type="submit" value="Submit" className="justification-add-submit" />
      </form>
      <br />
    </div>
  );
};

export default JustificationForm;
