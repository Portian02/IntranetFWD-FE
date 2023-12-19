import React, { useState, useEffect } from 'react';

const CalendarList = () => {
  const [calendars, setCalendars] = useState([]);

  useEffect(() => {
    const fetchCalendars = async () => {
      try {
        const response = await fetch('http://localhost:3000/calendars');
        const data = await response.json();

        setCalendars(data);
      } catch (error) {
        console.error('Error fetching calendars:', error);
      }
    };

    fetchCalendars();
  }, []); 

  return (
    <div>
      <h2>Lista de Calendarios</h2>
      
      <ul>
        {calendars.map((calendar) => (
          <li key={calendar.id}>{calendar.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarList;
