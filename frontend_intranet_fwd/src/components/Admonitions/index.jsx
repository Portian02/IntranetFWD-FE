import React, { useState, useEffect } from "react";
import {
  fetchAdmonitions,
  fetchAdmonitionstypes,
} from "../../services/ApiAdmonitions";
import Navbar from "../NavBar";
import UpdateModalsAdmonnition from "./UpdateAdmonitions/ModalToUpdate";
import ButtonDeleteAdmonition from "./DeleteAdmonitions/ButtonDelete";
import ModalsAdmonitionAdd from "./AdmonitionModalToAdd/modals";
import "./admonition.css";
import { fetchUsers } from "../../services/ApiUsers";
import Loading from "../loader";

const Admonition = () => {
  const [getUsers, setGetUsers] = useState([]);
  const [admonitions, setAdmonitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [admonition_type_id, setAdmonition_type_id] = useState([]);
  const role = localStorage.getItem("role");
  const user_id = localStorage.getItem("id");



  
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

  return (
    <div>
      <Navbar />
      <h2 className="title-admonition">Admonitions</h2>
      {role === "admin" || role === "teacher" ? <ModalsAdmonitionAdd /> : null}

      {loading ? (
        <div className="loading">
          <Loading />
          <h3 className="mt-5 mr-3"> Loading...</h3>
        </div>
      ) : admonitions.length === 0 ? (
        <h2 className="d-flex justify-content-center  mt-5 no-data ">
          There is no any data
        </h2>
      ) : role === "admin" || role === "teacher" ? (
        // this div is gonna show all the admonitions just when the user is admin or teacher
        <table className="admonitions-table">
          <thead>
            <tr>
              <th className="student-column">Student</th>
              <th className="responsable-column">Responsable</th>
              <th className="type-column">Type</th>
              <th className="status-column">Status</th>
              <th className="date-column">Date</th>
              {role === "admin" && <th className="action-column">Delete</th>}
              {role === "admin" && <th className="action-column">Edit</th>}
            </tr>
          </thead>
          <tbody>
            {admonitions.map((admonition) => (
              <tr key={admonition.id}>
                <td className="student-cell">
                  {getUsers.map(
                    (user) =>
                      user.id == admonition.user_id && (
                        <span key={user.id}>{user.username}</span>
                      )
                  )}
                </td>
                <td className="responsable-cell">
                  {getUsers.map(
                    (user) =>
                      user.id == admonition.responsable_id && (
                        <span key={user.id}>{user.username}</span>
                      )
                  )}
                </td>
                <td className="type-cell">
                  {admonition_type_id.map(
                    (admonition_type) =>
                      admonition_type.id === admonition.admonition_types_id && (
                        <span key={admonition_type.id}>
                          {admonition_type.name}
                        </span>
                      )
                  )}
                </td>
                <td className="status-cell"><p>{admonition.status_admonition}</p></td>
                <td className="date-cell">{admonition.date}</td>
                {role === "admin" && (
                  <td className="action-cell">
                    <ButtonDeleteAdmonition id={admonition.id} />
                  </td>
                )}
                {role === "admin" && (
                  <td className="action-cell">
                    <UpdateModalsAdmonnition
                      initialData={admonition}
                      id={admonition.id}
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ol className="admonitions-list">
          {admonitions
            .filter((admonition) => admonition.user_id == user_id)
            .map((admonition_user) => (
              <li className="admonition-card">
                <h2 className="card-title-admonition">
                  Status: {admonition_user.status_admonition}
                </h2>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          {getUsers.map(
                            (user) =>
                              user.id === admonition_user.user_id && (
                                <div key={user.id} className="student-name">
                                  Student: {user.username}
                                </div>
                              )
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td className="status-justification">
                          {admonition_user.status_justification}
                        </td>
                      </tr>
                      <tr>
                        <td>Date: {admonition_user.date}</td>
                      </tr>
                      <tr>
                        <td>
                          {getUsers.map(
                            (user) =>
                              user.id == admonition_user.responsable_id && (
                                <div key={user.id} className="responsable-name">
                                  Responsable: {user.username}
                                </div>
                              )
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            ))}
        </ol>
      )}

    </div>
  );
};

export default Admonition;
