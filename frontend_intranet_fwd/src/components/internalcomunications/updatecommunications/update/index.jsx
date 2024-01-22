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
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      <label>
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
    </form>
  );
}

export default UpdateCommunicationForm;
