import React, { useRef } from "react";

const DocumentsStorageForm = ({ setCurrDocumentsStorage, setShow }) => {
  const formRef = useRef();

  const addDocumentsStorage = async (DocumentsStorage,setCurrDocumentsStorage) => {
    const url = "http://localhost:3001/api/documents_storages";

    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(DocumentsStorage),
      });

      console.log("Llega?", response);
      const data = await response.json();

      if (!response.ok) throw data.error;

      // Puedes realizar otras acciones según tus necesidades
      setCurrDocumentsStorage(data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    const DocumentsStorage = {
      documents_storage: {
        name: data.name,
        description: data.description,
        url: data.url,
        documents_type_id: data.document_type_id,
      },
    };

    console.log("Soy data", DocumentsStorage);

    addDocumentsStorage(DocumentsStorage, setCurrDocumentsStorage);
    e.target.reset();
  };

  return (
    <div className="documents-storage-add-container">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="documents-storage-add-form"
      >
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          className="documents-storage-add-input"
        />
        <br />
        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Descripción"
          className="documents-storage-add-input"
        />
        <br />
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          name="url"
          id="url"
          placeholder="URL"
          className="documents-storage-add-input"
        />
        <br />
        <label htmlFor="document_type_id">Document_Type:</label>
        <input
          type="text"
          name="document_type_id"
          id="document_type_id"
          placeholder="ID del Tipo de Documento"
          className="documents-storage-add-input"
        />

        <br />
        <input
          type="submit"
          value="Submit"
          className="documents-storage-add-submit"
        />
      </form>
      <br />
    </div>
  );
};

export default DocumentsStorageForm;
