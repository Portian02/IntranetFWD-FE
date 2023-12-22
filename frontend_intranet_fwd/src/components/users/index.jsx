import React, { useState, useEffect } from "react";
// import NavBar from "../NavBar";
import "./users.css";
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/users");
        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="user-list-title">Lista de Usuarios</h2>
      <div className="user-list">
        <ul className="user-list-items">
          {users.map((user) => (
            <div key={user.id} className="user-component">
              <div className="user-id">
                {user.id}:{user.username}
              </div>
              <div className="user-email">{user.email}</div>
              <div className="user-role">{user.role}</div>
              <div className="user-number">{user.nummber}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
