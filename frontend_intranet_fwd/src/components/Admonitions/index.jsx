import React, { useState, useEffect } from "react";
import { fetchadmonitions } from "../../services/ApiService";
import Navbar from "../NavBar";

const Admonition = () => {
  const [admonitions, setAdmonitions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAdmonitions() {
      try {
        const data = await fetchadmonitions();
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
          <ul className="internal-communications">
            {admonitions.map((admonition) => (
              <div className="card" key={admonition.id}>
                <p className="card-title">Status: {admonition.status_admonition}</p>
                <p className="small-desc">Fecha: {admonition.date}</p>
                <p>Responsable ID: {admonition.responsable_id}</p>
                <p>Usuario ID: {admonition.user_id}</p>
                <p>admonition_type_id: {admonition.admonition_type_id}</p>
                <div className="go-corner">
                  <div className="go-arrow">→</div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Admonition;
