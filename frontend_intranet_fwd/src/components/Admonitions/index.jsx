// src/components/AdmonitionsList.js
import React, { useState, useEffect } from 'react';

const Admonitions = () => {
  const [admonitions, setAdmonitions] = useState([]);

  useEffect(() => {
    
    fetch('/admonitions')
      .then(response => response.json())
      .then(data => setAdmonitions(data))
      .catch(error => console.error('Error fetching admonitions:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Amonestaciones</h2>
      <ul>
        {admonitions.map(admonition => (
          <li key={admonition.id}>
            <p>Status: {admonition.status_admonition}</p>
            <p>Fecha: {admonition.date}</p>
            <p>Responsable ID: {admonition.responsable_id}</p>
            {/* Agrega más campos según la estructura de tu modelo Admonition */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admonitions;
