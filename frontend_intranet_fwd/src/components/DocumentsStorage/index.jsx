import React, { useState, useEffect } from "react";
import { fetchDocument } from "../../services/ApiDocuments";
import Navbar from "../NavBar";
import ButtonDeleteDocument from "./DeleteDocuments/ButtonDelete";
import ModalsDocumentsAdd from "./DocumentModalToAdd/modals";
import UpdateModalsDocument from "./UpdateDocuments/ModalToUpdate";
const DocumentsStorage = () => {
  const [documentsStorage, setDocumentsStorage] = useState([]);
  const [loading, setLoading] = useState(true);
  const role = localStorage.getItem("role");
  useEffect(() => {
    async function loadDocumentsStorage() {
      try {
        const data = await fetchDocument();
      
        console.log("data", data);
        setDocumentsStorage(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load documents storage", error);
      }
    }

    loadDocumentsStorage();
  }, []);

  console.log("documentsStorage", documentsStorage);

  return (
    <div>
      <Navbar />
      <h2 className="title">List Documents FWD </h2>
      {loading ? (
        <div className="loading">
          <section className="loader">
            <div className="slider" style={{ "--i": 0 }}></div>
            <div className="slider" style={{ "--i": 1 }}></div>
            <div className="slider" style={{ "--i": 2 }}></div>
            <div className="slider" style={{ "--i": 3 }}></div>
            <div className="slider" style={{ "--i": 4 }}></div>
          </section>
        </div>
      ) : (
        <div className="container-documents-storage">
          <ul className="documents-storage">
            {documentsStorage.map((documentStorage) => (
              <div className="card" key={documentStorage.id}>
                <p className="card-title">Name: {documentStorage.name}</p>
                <p className="small-desc">
                  Descripción: {documentStorage.description}
                </p>
                <a
                  href={documentStorage.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p value={documentStorage.url}> {documentStorage.name} </p>
                </a>

                <p> Documents_type: {documentStorage.document_type_id}</p>
                <div className="go-corner">
                  <div className="go-arrow">→</div>
                </div>
                {role === "admin" && (
                <div>
                <ButtonDeleteDocument
                  id={documentStorage.id}
                  />
                <UpdateModalsDocument id={documentStorage.id} initialData={documentStorage}   />
                </div>
                )}
            
              </div>
            ))}
          </ul>
        </div>
      )}
      <ModalsDocumentsAdd />
    </div>
  );
};

export default DocumentsStorage;
