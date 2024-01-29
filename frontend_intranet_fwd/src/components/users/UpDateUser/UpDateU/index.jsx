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
    <form onSubmit={handleSubmit} className="d-flex flex-wrap form-modal-update">
      <h2>Updating User</h2>
      <div className="conatiner-form-div">
        <label className="Name-label">
          Name:
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
            className="form-input-name"
          />
        </label>
        <label className="ID-label">
          Number of Identification:
          <input
            name="identification"
            value={data.identification}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="number-label">
          number:
          <input
            type="text"
            name="number"
            value={data.number}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="role-label">
          Role:
          <select
            name="role"
            value={data.role}
            onChange={handleChange}
            className="form-input"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <label className="type_user_id-label">
          type_user_id:
          <select
            name="type_user_id"
            value={data.type_user_id}
            onChange={handleChange}
            className="form-input"
          >
            <option value="1">Student</option>
            <option value="2">Teacher</option>
            <option value="3">Admin</option>
          </select>
        </label>
        <label className="borndate-label">
          Borndate:
          <input
            name="borndate"
            type="date"
            value={data.borndate}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <button type="submit" className="submit-button">
          Update Communication
        </button>
      </div>
    </form>
  );
}

export default UpdateUserForm;
