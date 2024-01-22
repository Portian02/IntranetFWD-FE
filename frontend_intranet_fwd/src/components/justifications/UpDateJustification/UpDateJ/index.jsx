import React, { useState } from "react";
import { updateJustification } from "../../../../services/ApiJustification";
import "./updateform.css";
function UpdateJustificationForm({ id, initialData }) {
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
      const updatedData = await updateJustification(id, data);
      console.log(updatedData);
    } catch (error) {
      console.error("Failed to update communication", error);
    }
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Status:  
        <input
          type="text"
          name="title"
          value={data.status_justification}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      <label>
        User:
        <input
          name="content"
          value={data.user_id}
          onChange={handleChange}
          className="content-textarea"
        />
      </label>
      <label>
        Justification Type:
        <input
          name="content"
          value={data.justification_types_id}
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

export default UpdateJustificationForm;
