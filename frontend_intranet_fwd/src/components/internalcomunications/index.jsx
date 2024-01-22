import React, { useState, useEffect } from "react";
import "./communication.css";
import Navbar from "../NavBar";
import { fetchCommunicationInternals } from "../../services/ApiCommunications";
import Modals from "../../components/internalcomunications/modalInternalCommunication/modals";
import MyButton from "./DeleteCommunication/ButtonDelete";
import UpdateModals from "./updatecommunications/modalToUpdate";
import HamsterWheel from "../loader";
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
        console.error("Failed to load calendars", error);
      }
    }

    loadCommunicationInternal();
    Internalcommunicationsusers();
  }, []);
  const role = localStorage.getItem("role");

  const Internalcommunicationsusers = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/internal_communications_users");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        for (let index = 0; index < data.length; index++) {
        const id_usuario_log= localStorage.getItem("id_usuario_log");
           if (data[index].user_id===parseInt(id_usuario_log)) {
            console.log("hola")
          }
        }
        return data;
      } catch (error) {
        console.error("Failed to fetch internal commmunications", error);
        throw error;
      }
  }

  //esto tiene el ultimo registro mas no el numero de id
  localStorage.setItem("id_registro", comunications.at(-1)?.id);
 
  return (
    <div>

      <Navbar />  

      <h2 className="internal-communications__title">Lista de comunicados</h2>
      {isLoading ? (
        <div className="loading">
          <HamsterWheel />
          <p>Loading data ...</p>
        </div>
      ) : (
        <ul className="internal-communications">
          {comunications.map((comunication) => (
            <div
              key={comunication.id}
              className="internal-communications__item"
            >
              {comunication.title}
              <div className="comunication-content">{comunication.content}</div>
              <div className="comunication-date">{comunication.updated_at}</div>
              <div className="comunication-username">
                {comunication.user_id.username}
              </div>

                {role === "admin" &&( 
             <MyButton id={comunication.id} />
                 
                )}
           {role === "admin" &&(
           <UpdateModals id={comunication.id} initialData={comunication} />    
           )}
            </div>
          ))}
        </ul>
      )}
          {role === "admin" &&( 
          <Modals />
          )}
    </div>
  );
};

export default Internalcommunications;
