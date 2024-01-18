import React, { useState, useEffect } from "react";
import "./users.css";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Agregar estado para el loading

  useEffect(() => {
     const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/users");
        const data = await response.json();

        setUsers(data);
        setIsLoading(false); // Actualizar el estado del loading cuando se complete la carga
      } catch (error) {
        console.error("Error fetching users:", error);
        setIsLoading(false); // Actualizar el estado del loading en caso de error
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="list-conatiner">
      <h2 className="user-list-title">Lista de Usuarios</h2>
      {isLoading ? (
        <section className="loader">
          <div className="slider"></div>
          <div className="slider"></div>
          <div className="slider"></div>
          <div className="slider"></div>
          <div className="slider"></div>
        </section>
      ) : (
        <div className="user-list">
          <div className="user-list-items">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
