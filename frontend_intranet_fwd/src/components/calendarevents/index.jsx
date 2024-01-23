import React, { useState, useEffect } from "react";
import "./calendar.css";
import Navbar from "../NavBar";
import ModalsCalendarAdd from "./CalendarModalToAdd/modals";
import { fetchCalendars } from "../../services/ApiCalendars";
import ButtonDeleteCalendar from "./DeleteCalendar/ButtonDelete";
import UpdateModalsCalendar from "./UpdateCalendar/ModalToUpdate";  
import Loading from "../loader";
const CalendarList = () => {
  const [calendars, setCalendars] = useState([]);
  const [loading, setLoading] = useState(true);
  const role = localStorage.getItem("role"); 
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
      <Navbar />
      <h2 className="title">Lista de Calendarios</h2>
      {loading ? (
        <div className="loading">
          <Loading/>
          <p>Loading data ...</p>
        </div>
      ) : (
        <div className="container-calendar-events">
          <ul className="internal-communications">
            {calendars.map((calendar) => (
              <div className="card">
                <p key={calendar.id} className="card-title">
                  {calendar.title}
                </p>
                <p key={calendar.id} className="small-desc">
                  {calendar.description}
                </p>
                <a href={calendar.url} key={calendar.id} className="small-desc">
                  {calendar.title}
                  </a>
                <div className="go-corner">
                  <div className="go-arrow">→</div>
                </div>
                {role === "admin"&&(
                <ButtonDeleteCalendar id={calendar.id} />)}
                {role === "admin" &&(
                <UpdateModalsCalendar
                  id={calendar.id}
                  initialData={calendar} />
                  )}
              </div>
            ))}
          </ul>
        </div>
      )}
      {role === "admin"&&(
      <ModalsCalendarAdd />)}
    </div>
  );
};

export default CalendarList;
