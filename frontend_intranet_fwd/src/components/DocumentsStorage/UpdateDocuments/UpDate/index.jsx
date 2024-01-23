import React, { useState, useEffect } from "react";
import { updateDocument } from "../../../../services/ApiDocuments";
import { fetchUsers } from "../../../../services/ApiUsers";

import "./updateform.css";
function UpdateDocumentForm({ id, initialData }) {
  const [data, setData] = useState(initialData);
  const [getUsers,  setGetUsers] = useState([]);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedData = await updateDocument(id, data);
      console.log(updatedData);
    } catch (error) {
      console.error("Failed to update admonition", error);
    }
    window.location.reload();
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
    <form onSubmit={handleSubmit} className="form-modal-update">
      <div className="container-form-div">

      <label className="label">
        Status
        <input
          type="text"
          name="status_admonition"
          value={data?.status_admonition}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      <label className="label">
        user
        <select
          name="user_id"
          value={data?.user_id}
          onChange={handleChange}
          className="title-input"
        >
          <optgroup label="Students">
              {getUsers
                .filter(user => user.role === "student")
                .map(user => (
                  <option key={user.id} value={user.id}>{user.username}</option>
                ))}
          </optgroup>
        </select>
      </label>
      
      <label className="label">
        admonition Type
        <input
          name="admonition_types_id"
          value={data?.admonition_types_id}
          onChange={handleChange}
          className="content-textarea"
        />
      </label>
      <button type="submit" className="submit-button">
        Update Admonition
      </button>
      </div>
    </form>
  );
}

export default UpdateDocumentForm;
