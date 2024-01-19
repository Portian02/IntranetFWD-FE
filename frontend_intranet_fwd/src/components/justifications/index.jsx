import React, { useState, useEffect } from 'react';
import { fetchJustifications } from "../../services/ApiService";
import Navbar from "../NavBar";


const Justifications = () => {
  const [justifications, setJustifications] = useState([]);

  useEffect(() => {
    const fetchJustifications = async () => {
      try {
        const response = await fetch('http://localhost:3000/justifications');
        const data = await response.json();

        setJustifications(data);
      } catch (error) {
        ///console.error('Error fetching justifications:', error);
      }
    };

    fetchJustifications();
  }, []); 

  return (
    <div>
      <h2>Justificaciones FWD </h2>

        <ul>
        {justifications.map((justifications) => (
          <li key={justifications.id}>{justifications.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Justifications;
