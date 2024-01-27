import React, { useState, useEffect } from "react";
import { updateJustification, fetchJustifications_types } from "../../../../services/ApiJustification";
import { fetchUsers } from "../../../../services/ApiUsers";
import "./updateform.css";
function UpdateJustificationForm({ id, initialData }) {
  const [data, setData] = useState(initialData);
  const [getUsers,  setGetUsers] = useState([]);
  const [justification_types_id,  setJustification_types_id] = useState([]);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedData = await updateJustification(id, data);
      console.log(updatedData);
    } catch (error) {
      console.error("Failed to update communication", error);
    }
    window.location.reload();
  };

  
// with this function we get the users
useEffect(() => {
  async function GetUsers() {
    try {
      const data = await fetchUsers();
      setGetUsers(data);
      const type = await fetchJustifications_types();
      setJustification_types_id(type);
    } catch (error) {
      console.error("Failed to load users", error);
    }
  }
  GetUsers();
  }, []);


  return (
    <form onSubmit={handleSubmit} className="form-modal-update">
    <div className="container-form-div">
      <label htmlFor="status_admonition" className="label">
        Status:
        <select
          name="status_admonition"
          value={data?.status_admonition}
          onChange={handleChange}
          className="title-input"
        >
          <option value="">Select a status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </label>
  
      <label htmlFor="user_id" className="label">
        User:
        <select
          name="user_id"
          value={data?.user_id}
          onChange={handleChange}
          className="title-input"
        >
          {getUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
      </label>
    
      <label htmlFor="admonition_types_id" className="label">
        Justification Type:
        <select
          name="admonition_types_id"
          value={data?.admonition_types_id}
          onChange={handleChange}
          className="title-input"
        >
          {justification_types_id.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="submit-button">
        Update Admonition
      </button>
    </div>
    </form>
  );
}

export default UpdateJustificationForm;
