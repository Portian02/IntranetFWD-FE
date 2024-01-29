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
      <h2 className="title-admonition">Calendar List</h2>
      {loading ? (
        <div className="loading">
          <Loading/>
       <h3 className="mt-5 mr-3"> Loading...</h3>
        </div>
      ) : (
       calendars.length === 0 ? (
        <h2 className="d-flex justify-content-center  mt-5 no-data ">
          There is no any data
        </h2>
      ) : (
        <div className="container-calendar-events">
          <table className="calendar-table">
            <thead>
              <tr>
                <th className="calendar-table-header">Title</th>
                <th className="calendar-table-header">Description</th>
                <th className="calendar-table-header">URL</th>
                {role === "admin" && <th className="calendar-table-header">Delete</th>}
                {role === "admin" && <th className="calendar-table-header">Edit</th>}

              </tr>
            </thead>
            <tbody>
              {calendars.map((calendar) => (
                <tr key={calendar.id}>
                  <td className="calendar-table-data"><h5>{calendar.title}</h5></td>
                  <td className="calendar-table-data">{calendar.description}</td>
                  <td className="calendar-table-data">
                    <a href={calendar.url}>{calendar.title}</a>
                  </td>
                  {role === "admin" && (
                    <td className="calendar-table-data">
                      <ButtonDeleteCalendar id={calendar.id} />
                    </td>
                  )}
                      {role === "admin" && (
                    <td className="calendar-table-data">
                      <UpdateModalsCalendar id={calendar.id} initialData={calendar} />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )
      )}
      {role === "admin"&&(
      <ModalsCalendarAdd />)}
    </div>
  );
};

export default CalendarList;
