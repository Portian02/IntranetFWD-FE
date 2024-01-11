import React, { useState, useEffect } from 'react';
import './communication.css';
import { fetchCommunicationInternals } from '../../services/ApiService';
import Modals from "../../components/internalcomunications/modalInternalCommunication/modals";

const Internalcommunications = () => {
  const [comunications, setcomunication] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCommunicationInternal() {
      try {
        const data = await fetchCommunicationInternals();
        setcomunication(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load calendars', error);
      }
    }

    loadCommunicationInternal();
  }, []);

  return (
    <div>
      <h2 className="internal-communications__title">Lista de comunicados</h2>
      {isLoading ? (
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
        <ul className="internal-communications">
          {comunications.map((comunication) => (
            <div key={comunication.id} className="internal-communications__item">
              {comunication.title}
              <div className="comunication-content">{comunication.content}</div>
              <div className="comunication-date">{comunication.date}</div>
              <div className="comunication-username">{comunication.user_id.username}</div>
            </div>
          ))}
      <Modals />

        </ul>
      )}
    </div>
  );
};

export default Internalcommunications;
