import React, { useState, useEffect } from "react";
import { fetchAdmonitions } from "../../services/ApiAdmonitions";
import Navbar from "../NavBar";
import UpdateModalsAdmonnition from "./UpdateAdmonitions/ModalToUpdate";
import ButtonDeleteAdmonition from "./DeleteAdmonitions/ButtonDelete";
import ModalsAdmonitionAdd from "./AdmonitionModalToAdd/modals";
import "./admonition.css"
import { fetchUsers } from "../../services/ApiUsers";
import Loading from "../loader";

const Admonition = () => {
  const [getUsers,  setGetUsers] = useState([]);
  const [admonitions, setAdmonitions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const role = localStorage.getItem("role");
  useEffect(() => {
    async function loadAdmonitions() {
      try {
        const data = await fetchAdmonitions();
        setAdmonitions(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load admonitions", error);
      }
    }

    loadAdmonitions();
  }, []);


 useEffect(() => {
  async function GetUsers() {
    try {
      const data = await fetchUsers();
      setGetUsers(data);
    } catch (error) {
      console.error("Failed to load admonitions", error);
    }
  }
  GetUsers();
  }, []);


  console.log("soy los usuarios",getUsers)
  console.log("soy la amonestacion",admonitions)

  const usuariosFiltrados = getUsers.filter(usuario => admonitions.some(amonestacion => amonestacion.user_id === usuario.id));
console.log(usuariosFiltrados)

  return (
    <div>
      <Navbar />
      <h2 className="title-admonition">Lista de Amonestaciones</h2>
      {loading ? (
        <div className="loading">
          <Loading/>
        </div>
      ) : (
        <div className="admonition-container">
          <ul className="justifications-list">
            {admonitions.map((admonition) => (
              <div className="admonition-card" key={admonition.id}>
                <p className="card-title">Status: {admonition.status_admonition}</p>
                {console.log("soy el status:", admonition.status_admonition)}
                <p>Responsable ID: {admonition.responsable_id}</p>
                <p>Usuario ID: {admonition.user_id}</p>
                <p>admonition_type_id: {admonition.admonition_type_id}</p>
                <p className="card-date">Fecha: {admonition.date}</p>
               
                 {role === "admin" && <ButtonDeleteAdmonition id={admonition.id} />}
               {role === "admin" && (
                  <UpdateModalsAdmonnition id={admonition.id} initialData={admonition} />
                )}
              </div>
            ))}
          </ul>

          {role === "admin" && <ModalsAdmonitionAdd />}
        </div>
      )}
    </div>
  );
};

export default Admonition;
