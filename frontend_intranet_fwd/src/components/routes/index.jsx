import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "../users";
import Formuser from "../formuser";
import Internalcommunications from "../internalcomunications";
import InternalCommunicationsForm from "../internalcomunicationsform";
import Home from "../../pages/home/index";
import CalendarForm from "../calendarForm";
import Calendar from "../calendarevents";

const Routing = () => {
  return (
    <Routes>
  
      <Route path="/" element={<Home />} />
      <Route path="users" element={<UserList />} />
      <Route path="users/new" element={<Formuser />} />
      <Route path="communications" element={<Internalcommunications/>} />
      <Route path="communications/new" element={<InternalCommunicationsForm />} />
       <Route path="calendars" element={<Calendar/>} />
      <Route path="calendars/new" element={< CalendarForm />} />

  </Routes>


  )
}

export default Routing