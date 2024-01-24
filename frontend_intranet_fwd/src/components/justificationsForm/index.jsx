import { useRef, useEffect, useState } from "react";
import "./justifications.css"; 
import { fetchUsers } from "../../services/ApiUsers";
const JustificationForm = ({ setCurrJustification, setShow }) => {
  const formRef = useRef();
  const [getUsers,  setGetUsers] = useState([]);
  const user_id = localStorage.getItem("id")
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


// with this function we get the users
useEffect(() => {
  async function GetUsers() {
    try {
      const data = await fetchUsers();
      setGetUsers(data);
    } catch (error) {
      console.error("Failed to load admonitions", error);
    }
  }
  GetUsers();
  }, []);


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
        <input
          type="text"
          name="responsable_id"
          id="responsable_id"
          defaultValue={user_id}
          placeholder="Responsable ID"
          className="justification-add-input"
        />
        <br />
        
        <label htmlFor="type_user_id"> Student </label>
          <select
            required
            name="type_user_id"
            id="type_user_id"
            className="input"
          >
            <option value="">Select Students</option>
            <optgroup label="Students">
              {getUsers
                .filter(user => user.role === "student")
                .map(user => (
                  <option key={user.id} value={user.id}>{user.username}</option>
                ))}
            </optgroup>
          </select>
        <br />

        <label htmlFor="justification_types_id">Justification Type:</label>
        <select
          name="justification_types_id"
          id="justification_types_id"
          className="justification-add-input"
        >
          <option value="1">Late Unjustified</option>
          <option value="2">Late Justified</option>
          <option value="3">Absence Unjustified</option>
          <option value="4">Absence Justified</option>
          <option value="5">Early Departure Unjustified</option>
          <option value="6">Early Departure Justified</option>
        </select>
        <br />
        <input type="submit" value="Submit" className="justification-add-submit" />
      </form>
      <br />
    </div>
  );
};

export default JustificationForm;
