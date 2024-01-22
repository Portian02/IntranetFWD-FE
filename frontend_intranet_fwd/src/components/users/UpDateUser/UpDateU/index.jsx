import React, { useState } from "react";
import { updateUser } from "../../../../services/ApiUsers";
import "./updateform.css";
function UpdateUserForm({ id, initialData }) {
  const [data, setData] = useState(initialData);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedData = await updateUser(id, data);
      console.log(updatedData);
    } catch (error) {
      console.error("Failed to update communication", error);
    }
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      <label>
        Number of Identification:
        <input
          name="identification"
          value={data.identification}
          onChange={handleChange}
          className="content-textarea"
        />
      </label>
      <label>
        number:
        <input
          type="text"
          name="number"
          value={data.number}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={data.role}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      <label>
        type_user_id:
        <input
          name="type_user_id"
          value={data.type_user_id}
          onChange={handleChange}
          className="content-textarea"
        />
      </label>
      <label>
        Borndate:
        <input
          name="borndate"
          type="date"
          value={data.borndate}
          onChange={handleChange}
          className="content-textarea"
        />
      </label>
      <button type="submit" className="submit-button">
        Update Communication
      </button>
    </form>
  );
}

export default UpdateUserForm;
