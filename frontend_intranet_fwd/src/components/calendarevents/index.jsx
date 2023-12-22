import React, { useState, useEffect } from "react";
import "./calendar.css";
const CalendarList = () => {
  const [calendars, setCalendars] = useState([]);

  useEffect(() => {
    const fetchCalendars = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/calendar_events"
        );
        const data = await response.json();

        setCalendars(data);
      } catch (error) {
        console.error("Error fetching calendars:", error);
      }
    };

    fetchCalendars();
  }, []);

  return (
    <div>
      <h2 className="title">Lista de Calendarios</h2>
    <div  className="container-calendar-events">
      <ul>
        {calendars.map((calendar) => (
          <div className="card">
            <p key={calendar.id} className="card-title">
              {calendar.name}
            </p>
            <p key={calendar.id} className="small-desc">
              {calendar.description}
            </p>
            <div key={calendar.id}>
              <span>Date:</span>
              {calendar.date}
            </div>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default CalendarList;
