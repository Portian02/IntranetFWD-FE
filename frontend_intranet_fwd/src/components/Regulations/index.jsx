import React, { useState, useEffect } from 'react';
import {  fetchDocument } from '../../services/ApiDocuments';
import Navbar from '../NavBar';

const RegulationDocuments = () => {
  const [reglamentos, setReglamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReglamentos() {
      try {
        const documents = await fetchDocument();
        console.log(documents, "soy documents")

        // Filtrar los documentos de tipo "reglamento"
        const regulationDocuments = documents.filter(document => document.documents_type_id === 1 );
        
        setReglamentos(regulationDocuments);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load reglamentos", error);
      }
    }

    loadReglamentos();
  }, []);

  return (
    <div>
      <Navbar/>
      <h2>Reglamentos FWD</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {reglamentos.map(reglamento => (
            <li key={reglamento.id}>
              <div>{reglamento.type_name}</div>
              <div>{reglamento.description}</div>
              <div><a href={reglamento.url}>{reglamento.name}</a></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegulationDocuments;
