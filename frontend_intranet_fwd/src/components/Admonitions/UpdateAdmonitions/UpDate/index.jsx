import React, { useState } from "react";
import { updateAdmonition } from "../../../../services/ApiAdmonitions";
import "./updateform.css";
function UpdateAdmonitionForm({ id, initialData }) {
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
      const updatedData = await updateAdmonition(id, data);
      console.log(updatedData);
    } catch (error) {
      console.error("Failed to update admonition", error);
    }
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="form-modal-update">
    <div className="container-form-div">
      <label htmlFor="status_admonition" className="label">
        Status:
        <input
          type="text"
          name="status_admonition"
          value={data?.status_admonition}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      <label htmlFor="user_id" className="label">
        User:
        <input
          type="text"
          name="user_id"
          value={data?.user_id}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      <label htmlFor="admonition_types_id" className="label">
        Admonition Type:
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

export default UpdateAdmonitionForm;
