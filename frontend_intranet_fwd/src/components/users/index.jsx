import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
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
      <NavBar /> 
      <h2>Lista de Usuarios</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.id}:{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
