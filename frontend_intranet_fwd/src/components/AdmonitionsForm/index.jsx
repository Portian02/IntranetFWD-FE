import { useRef, useEffect, useState } from "react";
import { fetchUsers } from "../../services/ApiUsers";
import "./admonitions.css"; 
const AdmonitionForm = ({ setCurrAdmonition, setShow }) => {
  const formRef = useRef();
  const [getUsers,  setGetUsers] = useState([]);
  const user_id = localStorage.getItem("id")

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
       
        <input
          type="text"
          name="responsable_id"
          id="responsable_id"
          placeholder="Responsable ID"
          defaultValue={user_id}
          className="admonition-add-input"
        />
        <br />
        <label>
          <select
            required
            name="type_user_id"
            id="type_user_id"
            className="input"
          >
            <option value="">Select User</option>
            <optgroup label="Students">
              {getUsers
                .filter(user => user.role === "student")
                .map(user => (
                  <option key={user.id} value={user.id}>{user.username}</option>
                ))}
            </optgroup>
          </select>
          <span>User</span>
        </label>
        <br />
        <br />
        <label htmlFor="admonition_type_id">Admonition Type</label>
        <select
          name="admonition_type_id"
          id="admonition_type_id"
          className="admonition-add-input"
        >
          <option value="5">Late</option>
          <option value="6">Behavior</option>
          <option value="7">Technique</option>
          <option value="8">Absence</option>
        </select>
        
        <br />
        <input  type="submit" value="Submit" className="admonition-add-submit" />
      </form>
      <br />
    </div>
  );
};

export default AdmonitionForm;
