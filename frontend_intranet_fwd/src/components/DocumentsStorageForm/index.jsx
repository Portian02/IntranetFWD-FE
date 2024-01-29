import React, { useRef, useEffect } from "react";
import { fetchDocumentsTypes } from "../../services/ApiDocuments";
import Swal from "sweetalert2";
import "./documentForm.css"
const DocumentsStorageForm = ({ setCurrDocumentsStorage, setShow }) => {
  const formRef = useRef();
  const [document_type_id, setDocument_type_id] = React.useState([]);

  const addDocumentsStorage = async (
    DocumentsStorage,
    setCurrDocumentsStorage ) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/documents_storages",
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(DocumentsStorage),
        }
      );

      console.log("Llega?", response);
      const data = await response.json();

      if (!response.ok) throw data.error;

      // Puedes realizar otras acciones según tus necesidades
      setCurrDocumentsStorage(data);
    } catch (error) {
      console.error("Error", error);
    }
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

    Swal.fire({
      title: `Guardar documento ${data.name}`,
      text: "¿Deseas guardar este documento?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí podrías agregar la lógica para guardar el documento
        Swal.fire("Guardado!", "El documento ha sido guardado.", "success");

        // Aquí podrías agregar la lógica para guardar el documento
        addDocumentsStorage(DocumentsStorage, setCurrDocumentsStorage);
        e.target.reset();
        window.location.reload();
        
      }
    });
  };
  // const handleSaveDocument = (documentName) => {
    
  // };

  return (
    <div className="documents-storage-add-container">
      <h2 className="documents-storage-add-title">Add Document</h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="documents-storage-add-form"
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          className="documents-storage-add-input"
        />
        <br />
        <label htmlFor="description">Description:</label>
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
        <select
          name="document_type_id"

          className="select-input"
        >
          {document_type_id.map((type) => (
            <option key={type.id} value={type.id}>
              {type.type_name}
            </option>
          ))}
        </select>
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
