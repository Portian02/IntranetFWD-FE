import React, { useState, useEffect } from 'react';
import { fetchJustifications } from '../../services/ApiJustification';
import Navbar from "../NavBar";
import ButtonDeleteJustification from './DeleteJustification/ButtonDelete';
import ModalsJustificationsAdd from './ModalToAddJustification/modals';
import UpdateModalsJustification from './UpDateJustification/modalToUpdate';
import './justification.css';
import HamsterWheel from '../loader';
const Justifications = () => {
  const [justifications, setJustifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const role = localStorage.getItem("role");

  useEffect(() => {
    async function loadJustification() {
      try {
        const data = await fetchJustifications();
        setJustifications(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load admonitions", error);
      }
    }
    loadJustification();
  }, []);

  return (
    <div> 
      <Navbar/>
      {isLoading ? (
        <div className="loading">
          <HamsterWheel />
          <p>Loading data ...</p>
        </div>
      ) : (
        <div>
          <h2>Justificaciones FWD</h2>
          <ul className='justification-list'>
            {justifications.map((justification) => (
              <div className="justification-card" key={justification.id}>
                <div className="justification-name">{justification.name}</div>
                <div className="justification-description">{justification.description}</div>
                <div className="justification-date">{justification.date}</div>
                <div className="justification-user-id">{justification.user_id}</div>
                <div className="justification-type-id">{justification.justification_type_id}</div>
                <div className="justification-responsable-id">{justification.responsable_id}</div>
                <div className='btns-communications'>
                {role === "admin" && (
                  <ButtonDeleteJustification id={justification.id} />
                )}
                {role === "admin" && (
                  <UpdateModalsJustification id={justification.id} initialData={justification} />
                )}
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
      {role === "admin" && (
        <ModalsJustificationsAdd/>
      )}
    </div>
  );
};

export default Justifications;
