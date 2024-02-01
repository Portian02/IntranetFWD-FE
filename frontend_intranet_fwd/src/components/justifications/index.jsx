import React, { useState, useEffect } from "react";
import { fetchJustifications } from "../../services/ApiJustification";
import Navbar from "../NavBar";
import ButtonDeleteJustification from "./DeleteJustification/ButtonDelete";
import ModalsJustificationsAdd from "./ModalToAddJustification/modals";
import UpdateModalsJustification from "./UpDateJustification/modalToUpdate";
import "./justification.css";
import Loading from "../loader";
import { fetchJustifications_types } from "../../services/ApiJustification";
import { fetchUsers } from "../../services/ApiUsers";

const Justifications = () => {
  const [justifications, setJustifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [Justifications_types, setJustifications_types] = useState([]);
  const [Users, setUsers] = useState([]);
  const role = localStorage.getItem("role");
  const user_id = localStorage.getItem("id");
  useEffect(() => {
    async function loadJustification() {
      try {
        const data = await fetchJustifications();
        setJustifications(data);
        setIsLoading(false);
        console.log(data, "soy data");

        const type = await fetchJustifications_types();
        console.log(type, "soy type");
        setJustifications_types(type);

        const user = await fetchUsers();
        console.log(user, "soy user");
        setUsers(user);
      } catch (error) {
        console.error("Failed to load justifications", error);
      }
    }
    loadJustification();
  }, []);

  console.log(
    justifications
      .filter((justification) => justification.user_id == user_id)
      .map((justification_user) => justification_user.user_id),
    "soy justification"
  );

  return (
    <div>
      {" "}
      {/* //Div container begining */}
      <Navbar />
      <h2 className="title-justifications">Justifications</h2>
      {role === "admin" || role === "teacher" ? (
        <ModalsJustificationsAdd />
      ) : null}
      {isLoading ? (
        <div className="loading">
          <Loading />
          <h3 className="mt-5 mr-3"> Loading...</h3>
        </div>
      ) : // this validation just in case that the table is empty
      // so this is gonna show a messages that there is no data
      justifications.length === 0 ? (
        <h2 className="d-flex justify-content-center  mt-5 no-data ">
          There is no any data
        </h2>
      ) : role === "admin" || role === "teacher" ? (
        // this div over here is gonna render if the user is admin or teacher all the justifications
        <table className="justifications-table">
          <thead>
            <tr>
              <th className="status-column">Status</th>
              <th className="responsable-column">Responsable</th>
              <th className="student-column">Student</th>
              <th className="type-column">Type</th>
              <th className="date-column">Date</th>
              {role === "admin" && <th className="action-column">Delete</th>}
              {role === "admin" && <th className="action-column">Edit</th>}
            </tr>
          </thead>
          <tbody>
            {justifications.map((justification) => (
              <tr key={justification.id}>
                <td className="status-cell">
                  <h5>{justification.status_justification}</h5>
                </td>
                <td className="responsable-cell">
                  {Users.map(
                    (user) =>
                      user.id == justification.responsable_id && (
                        <span key={user.id}>{user.username}</span>
                      )
                  )}
                </td>
                <td className="student-cell">
                  {Users.map(
                    (user) =>
                      user.id == justification.user_id && (
                        <span key={user.id}>{user.username}</span>
                      )
                  )}
                </td>
                <td className="type-cell">
                  {Justifications_types.map(
                    (justification_type) =>
                      justification_type.id ===
                        justification.justification_types_id && (
                        <span key={justification_type.id}>
                          {justification_type.name}
                        </span>
                      )
                  )}
                </td>
                <td className="date-cell">{justification.date}</td>
                {role === "admin" && (
                  <td className="action-cell">
                    <ButtonDeleteJustification id={justification.id} />
                  </td>
                )}
                {role === "admin" && (
                  <td className="action-cell">
                    <UpdateModalsJustification
                      initialData={justification}
                      id={justification.id}
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // this one end over here the same div that render all the justifications
        // this div over here is gonna render if the user is a student all the justifications that he has
        <ol className="admonitions-list">
          {justifications
            .filter((justification) => justification.user_id == user_id)
            .map((justification_user) => (
              <li className="admonition-card">
                <h2 className="card-title-admonition">
                  Status: {justification_user.status_admonition}
                </h2>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          {Users.map(
                            (user) =>
                              user.id === justification_user.user_id && (
                                <div key={user.id} className="student-name">
                                  Student: {user.username}
                                </div>
                              )
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td className="status-justification">
                          {justification_user.status_justification}
                        </td>
                      </tr>
                      <tr>
                        <td>Date: {justification_user.date}</td>
                      </tr>
                      <tr>
                        <td>
                          {Users.map(
                            (user) =>
                              user.id == justification_user.responsable_id && (
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
        // this one ends over here the same div that render all the justifications
      )}
      
    </div> //Div container end
  );
};

export default Justifications;
