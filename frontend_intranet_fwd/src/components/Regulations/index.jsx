import React, { useState, useEffect } from "react";
import { fetchDocument } from "../../services/ApiDocuments";
import NavBar from "../NavBar";
import "./regulations.css";
import Table from "react-bootstrap/Table";
import Loading from "../loader";

const RegulationDocuments = () => {
  const [reglamentos, setReglamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadReglamentos() {
      try {
        const documents = await fetchDocument();
        // Filtrar los documentos de tipo "reglamento"
        const regulationDocuments = documents.filter(
          (document) => document.documents_type_id === 3
        );
        setReglamentos(regulationDocuments);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load reglamentos", error);
      }
    }

    loadReglamentos();
  }, []);

  return (
    <div className="regulationsInfo">
      <NavBar />
      <h2 className="tittle-regulation">Regulations</h2>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
        <Loading />

       <h3 className="mt-5 mr-3"> Loading...</h3>
        </div>
      ) : reglamentos.length === 0 ? (
        <h2 className="d-flex justify-content-center  mt-5 no-data ">
          There is no any data
        </h2>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {reglamentos.map((reglamento) => (
              <tr key={reglamento.id}>
                <td>{reglamento.name}</td>
                <td>{reglamento.description}</td>
                <td>
                  <a href={reglamento.url}>{reglamento.name}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default RegulationDocuments;
