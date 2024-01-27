import React, { useState, useEffect } from "react";
import { fetchAdmonitions, fetchAdmonitionstypes } from "../../services/ApiAdmonitions";
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
  const [admonition_type_id, setAdmonition_type_id] = useState([]);
  const role = localStorage.getItem("role");
  useEffect(() => {
    async function loadAdmonitions() {
      try {
        const data = await fetchAdmonitions();
        setAdmonitions(data);
        setLoading(false);
        const type = await fetchAdmonitionstypes();
        setAdmonition_type_id(type);
        const user = await fetchUsers();
        setGetUsers(user);
      } catch (error) {
        console.error("Failed to load admonitions", error);
      }
    }

    loadAdmonitions();
  }, []);



  console.log("soy los usuarios",getUsers)
  console.log("soy la amonestacion",admonitions)


  return (
    <div>
      <Navbar />
      <h2 className="title-admonition">Admonitions</h2>
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

                {getUsers.map((user) => (user.id == admonition.responsable_id) && (
                <p key={user.id}>Responsable: {user.username}</p>))
                }
                {getUsers.map((user) => (user.id == admonition.user_id) && (
                <p key={user.id}>User: {user.username}</p>))}
                <div className="admonitio_type">
                {admonition_type_id.map((admonition_type) => (admonition_type.id === admonition.admonition_types_id) && (
                              <p key={admonition_type.id}>Type: {admonition_type.name}</p>))}
                </div>
               
                <p className="card-date">Date: {admonition.date}</p>
               
                 {role === "admin" && <ButtonDeleteAdmonition id={admonition.id} />}

               {role === "admin" || role === "teacher" ? (
                  <UpdateModalsAdmonnition id={admonition.id} initialData={admonition} />
                ): null}
              </div>
            ))}
          </ul>

          {role === "admin" || role === "teacher" ? ( <ModalsAdmonitionAdd />): null}
        </div>
      )}
    </div>
  );
};

export default Admonition;
