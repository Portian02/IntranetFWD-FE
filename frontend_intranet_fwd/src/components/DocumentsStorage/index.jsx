import React, { useState, useEffect } from "react";
import { fetchDocument, fetchDocumentsTypes } from "../../services/ApiDocuments";
import Table from "react-bootstrap/Table";

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
      <h2 className="title-documents">Documents</h2>
      {loading ? (
        <div className="loading">
          <Loading/>
       <h3 className="mt-5 mr-3"> Loading...</h3>
        </div>
      ) : 
      (
       documentsStorage.length === 0 ? (
        <h2 className="d-flex justify-content-center  mt-5 no-data ">
          There is no any data
        </h2>
      ) : (
          <Table striped bordered hover  className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Link</th>
                <th>Type</th>
                {role === "admin" && (
                  <th>Edit</th>
                )}
                   {role === "admin" && (
                  <th>Delete</th>
                )}
              </tr>
            </thead>
            <tbody>
              {documentsStorage.map((document) => (
                <tr key={document.id}>
                  <td>{document.name}</td>
                  <td>{document.description}</td>
                  <td><a href={document.url}>{document.name}</a></td>
                  <td>
                    {document_type_id.map((type) => (
                      type.id === document.documents_type_id && (
                        <span key={type.id}>{type.type_name}</span>
                      )
                    ))}
                  </td>
                  {role === "admin" && (
                    <td>
                      <UpdateModalsDocument id={document.id} document={document} />
                    </td>
                  )}
                   {role === "admin" && (
                    <td>
                      <ButtonDeleteDocument id={document.id} />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
      )
      )}
      {role === "admin" && (
        <ModalsDocumentsAdd />
      )}
    </div>
  );
};

export default DocumentsStorage;
