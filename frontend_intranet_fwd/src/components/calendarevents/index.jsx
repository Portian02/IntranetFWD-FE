import React, { useState, useEffect } from "react";
import "./calendar.css";
import { fetchCalendars } from "../../services/ApiService";
const CalendarList = () => {
  const [calendars, setCalendars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCalendars() {
      try {
        const data = await fetchCalendars();
        setCalendars(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load calendars', error);
      }
    }

    loadCalendars();
  }, []);
  return (
    <div>
      <h2 className="title">Lista de Calendarios</h2>
      {loading ? (
        <div className="loading">
          <section className="loader">
            <div className="slider" style={{ "--i": 0 }}></div>
            <div className="slider" style={{ "--i": 1 }}></div>
            <div className="slider" style={{ "--i": 2 }}></div>
            <div className="slider" style={{ "--i": 3 }}></div>
            <div className="slider" style={{ "--i": 4 }}></div>
          </section>
        </div>
      ) : (
        <div className="container-calendar-events">
          <ul className="internal-communications">
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
      )}
    </div>
  );
};

export default CalendarList;
