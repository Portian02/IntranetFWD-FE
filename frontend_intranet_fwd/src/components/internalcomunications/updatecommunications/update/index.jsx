import React, { useState } from "react";
import { updateCommunication } from "../../../../services/ApiCommunications";
import "./updateform.css";
function UpdateCommunicationForm({ id, initialData }) {
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
      const updatedData = await updateCommunication(id, data);
      console.log(updatedData);
    } catch (error) {
      console.error("Failed to update communication", error);
    }
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="form-modal-update">
      <div className="conatiner-form-div">
      <label className="title-label">
        Title:
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      
      <label className="content-label">
        Content:
        <textarea
          name="content"
          value={data.content}
          onChange={handleChange}
          className="content-textarea"
        />
      </label>
      <button type="submit" className="submit-button">
        Update Communication
      </button>
      </div>
    </form>
  );
}

export default UpdateCommunicationForm;
