import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./admonitions.css"; 
const AdmonitionForm = ({ setCurrAdmonition, setShow }) => {
  const formRef = useRef();

  const addAdmonition = async (admonitionInfo, setCurrAdmonition) => {
    const url = "http://localhost:3001/api/admonitions"; 

    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(admonitionInfo),
      });
console.log("llega?", response);
      const data = await response.json();
      if (!response.ok) throw data.error;

      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrAdmonition(data);
    } catch (error) {
      console.log("error", error);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

  
    const admonitionInfo = {
      admonition: {
        status_admonition: data.status_admonition,
        date: data.date,
        responsable_id: data.responsable_id,
        user_id: data.userid,
        admonition_types_id: data.admonition_type_id,
      
      },
    };

      console.log("Soy data", admonitionInfo);

    addAdmonition(admonitionInfo, setCurrAdmonition);
    e.target.reset();
  };

  return (
    <div className="admonition-add-container">
      <form ref={formRef} onSubmit={handleSubmit} className="admonition-add-form">
        <label htmlFor="status_admonition">Status:</label>
        <input
          type="text"
          name="status_admonition"
          id="status_admonition"
          placeholder="Status"
          className="admonition-add-input"
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Date"
          className="admonition-add-input"
        />
        <br />
        <label htmlFor="responsable_id">Responsable ID:</label>
        <input
          type="text"
          name="responsable_id"
          id="responsable_id"
          placeholder="Responsable ID"
          className="admonition-add-input"
        />
        <br />
        <label htmlFor="userid">User ID:</label>
        <input
          type="text"
          name="userid"
          id="userid"
          placeholder="User ID"
          className="admonition-add-input"
        />
        <br />
        <label htmlFor="admonition_type_id">Admonition Type ID:</label>
        <input
          type="text"
          name="admonition_type_id"
          id="admonition_type_id"
          placeholder="Admonition Type ID"
          className="admonition-add-input"
        />
        
        <br />
        <input  type="submit" value="Submit" className="admonition-add-submit" />
      </form>
      <br />
    </div>
  );
};

export default AdmonitionForm;
