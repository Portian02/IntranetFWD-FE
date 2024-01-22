import React, { useState, useEffect } from "react";
import { fetchAdmonitions } from "../../services/ApiAdmonitions";
import Navbar from "../NavBar";
import UpdateModalsAdmonnition from "./UpdateAdmonitions/ModalToUpdate";
import ButtonDeleteAdmonition from "./DeleteAdmonitions/ButtonDelete";
import ModalsAdmonitionAdd from "./AdmonitionModalToAdd/modals";
const Admonition = () => {
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
  return (
    <div>
      <Navbar />
      <h2 className="title">Lista de Amonestaciones</h2>
      {loading ? (
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
        <div className="container-admonition-events">
          <ul className="justifications">
            {admonitions.map((admonition) => (
              <div className="card" key={admonition.id}>
                <p className="card-title">Status: {admonition.status_admonition}</p>
                {console.log("soy el status:",admonition.status_admonition)}
                <p className="small-desc">Fecha: {admonition.date}</p>
                <p>Responsable ID: {admonition.responsable_id}</p>
                <p>Usuario ID: {admonition.user_id}</p>
                <p>admonition_type_id: {admonition.admonition_type_id}</p>
                <div className="go-corner">
                  <div className="go-arrow">→</div>
                </div>
                {role === "admin"&&(
                <ButtonDeleteAdmonition id={admonition.id} />
                )}
                {role === "admin"&&(
                <UpdateModalsAdmonnition
                  id={admonition.id}
                  initialData={admonition}/>
                )}
              </div>
            ))}
          </ul>
          {role === "admin"&&(
          <ModalsAdmonitionAdd />
          )}
        </div>
      )}
    </div>
  );
};

export default Admonition;
