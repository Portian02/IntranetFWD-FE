import React, { useState, useEffect } from 'react';
import './communication.css';
const Internalcommunications = () => {
  const [comunications, setcomunication] = useState([]);

  useEffect(() => {
    const fetchComunications = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/internal_communications');
        const data = await response.json();


        setcomunication(data);
      } catch (error) {
        console.error('Error fetching comunication', error);
      }
    };

    fetchComunications();
  }, []); 

  return (
    
    <div className="internal-communications">
      <h2 className="internal-communications__title">Lista de comunicados</h2>
      <ul className="internal-communications__list">
        
        {comunications.map((comunication,) => (
          <div key={comunication.id} className="internal-communications__item">{comunication.title}
          <div className="comunication-content">{comunication.content}</div>
          <div className="comunication-date">{comunication.date}</div>
          <div className="comunication-username">{comunication.user_id.username}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Internalcommunications ;