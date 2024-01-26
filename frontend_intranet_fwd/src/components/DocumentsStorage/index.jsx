import React, { useState, useEffect } from "react";
import { fetchDocument, fetchDocumentsTypes } from "../../services/ApiDocuments";

import Navbar from "../NavBar";
import ButtonDeleteDocument from "./DeleteDocuments/ButtonDelete";
import ModalsDocumentsAdd from "./DocumentModalToAdd/modals";
import UpdateModalsDocument from "./UpdateDocuments/ModalToUpdate";
import Loading from "../loader";
import "./documents.css"


const DocumentsStorage = () => {
  const [documentsStorage, setDocumentsStorage] = useState([]);
  const [loading, setLoading] = useState(true);
  const role = localStorage.getItem("role");
  const [document_type_id, setDocument_type_id] = useState([]);

  useEffect(() => {
    async function loadDocumentsStorage() {
      try {
        const data = await fetchDocument();
        setDocumentsStorage(data);
        setLoading(false);
        const type = await fetchDocumentsTypes();
        console.log(type, "soy type");
        setDocument_type_id(type);

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
      <h2 className="title">List Documents FWD</h2>
      {loading ? (
        <div className="loading">
          <Loading/>
        </div>
      ) : (
        <div className="container-documents-div">
          {documentsStorage.map((document) => (
            <div key={document.id} className="document-card">
              <div className="name-document">{document.name}</div>
              <div className="Body-document-info">
                <p>{document.description}</p>
                <p>this is the link to <a href={document.url}>{document.name}</a></p>
                {document_type_id.map((type) => (type.id === document.documents_type_id) && (
                  <p key={type.id}>Type: {type.type_name}</p>
                ))}
                
              </div>

              {role === "admin" && (
                <div className="card-footer">
                  <ButtonDeleteDocument id={document.id} />
                  <UpdateModalsDocument id={document.id} document={document} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <ModalsDocumentsAdd />
    </div>
  );
};

export default DocumentsStorage;
