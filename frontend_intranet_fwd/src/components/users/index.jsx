import React, { useState, useEffect } from "react";
import "./users.css";
import { fetchUsers } from "../../services/ApiUsers";
import Navbar from "../NavBar";
import ButtonDeleteUser from "./DeleteUser/ButtonDelete";
import ModalsUserAdd from "./ModalToAddUser/modals";
import UpdateModalsUser from "./UpDateUser/modalToUpdate";
import Loading from "../loader";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Agregar estado para el loading
  const role = localStorage.getItem("role");
  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load admonitions", error);
      }
    }

    loadUsers();
  }, []);

  return (
    <div className="list-conatiner">
      <Navbar />
      <h2 className="user-list-title d-flex justify-content-center"> Users List</h2>
      {isLoading ? (
        <div className="loading">
          <Loading />
          <p>Loading data ...</p>
        </div>
      ) : (
        <ol className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-card">
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-details">
                  <div className="user-role">
                    <h2>
                    {user.role}
                    </h2> 
                  </div>
                  <div className="user-username">
                    <strong>Name:</strong> {user.username}
                  </div>
                  <div className="user-email">
                    <strong>Email:</strong> {user.email}
                  </div>
                  <div className="user-number">
                    <strong>Phone:</strong> +506 {user.number}
                  </div>
                </div>
              </div>
              <div className="btns">
                {role === "admin" && <ButtonDeleteUser id={user.id} />}
                {role === "admin" && (
                  <UpdateModalsUser id={user.id} initialData={user} />
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
      <ModalsUserAdd />
    </div>
  );
};

export default UserList;
