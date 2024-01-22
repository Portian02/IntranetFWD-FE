import React, { useState } from "react";
import { updateDocument } from "../../../../services/ApiDocuments";
import "./updateform.css";
function UpdateDocumentForm({ id, initialData }) {
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
      const updatedData = await updateDocument(id, data);
      console.log(updatedData);
    } catch (error) {
      console.error("Failed to update admonition", error);
    }
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Status:
        <input
          type="text"
          name="status_admonition"
          value={data?.status_admonition}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      <label>
        user:
        <input
          type="text"
          name="user_id"
          value={data?.user_id}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      <label>
        admonition Type:
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
    </form>
  );
}

export default UpdateDocumentForm;
