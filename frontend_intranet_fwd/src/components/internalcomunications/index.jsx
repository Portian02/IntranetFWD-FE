import React, { useState, useEffect } from 'react';

const Internalcommunications = () => {
  const [comunications, setcomunication] = useState([]);

  useEffect(() => {
    const fetchComunications = async () => {
      try {
        const response = await fetch('http://localhost:3000/internal_communications');
        const data = await response.json();


        setcomunication(data);
      } catch (error) {
        console.error('Error fetching comunication', error);
      }
    };

    fetchComunications();
  }, []); 

  return (
    <div>
      <h2>Lista de comunicados</h2>
      <ul>
        
        {comunications.map((comunication,) => (
          <li key={comunication.id}>{comunication.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Internalcommunications ;