import React, { useState, useEffect } from "react";
import { updateDocument, fetchDocumentsTypes } from "../../../../services/ApiDocuments";

import "./updateform.css";
function UpdateDocumentForm({ id, initialData }) {
  const [data, setData] = useState(initialData);
  const [document_type_id, setDocument_type_id] = useState([]);

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
  async function GetDocumnetsType() {
    try {
     const type = await fetchDocumentsTypes();
      setDocument_type_id(type);
    } catch (error) {
      console.error("Failed to load admonitions", error);
    }
  }
  GetDocumnetsType();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="form-modal-update">
      <div className="container-form-div">

      <label className="label">
        Name
        <input
          type="text"
          name="status_admonition"
          value={data?.name}
          onChange={handleChange}
          className="title-input"
        />
      </label>

      <label className="label">
        Description
        <input
          type="text"
          name="description"
          value={data?.description}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      
            <label className="label">
        URL
        <input
          type="text"
          name="status_admonition"
          value={data?.url}
          onChange={handleChange}
          className="title-input"
        />
      </label>

      <label className="label">
        Document Type
        <select
          name="document_type_id"
          value={data?.document_type_id}
          onChange={handleChange}
          className="select-input"
        >
          {document_type_id.map((type) => (
            <option key={type.id} value={type.id}>
              {type.type_name}
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

export default UpdateDocumentForm;
