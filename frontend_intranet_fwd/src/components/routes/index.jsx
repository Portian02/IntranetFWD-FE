import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../NavBar";
import UserList from "../users";
import Formuser from "../formuser";
import Internalcommunications from "../internalcomunications";
import InternalCommunicationsForm from "../internalcomunicationsform";
import { Home } from "../../pages/home";
import CalendarList from "../calendarevents";
import CalendarForm from "../calendarForm";

const Routing = () => {
  return (
    <Routes>
    <Route element={<Navbar />}>
      <Route path="/" element={<Home />} />

      <Route path="users" element={<UserList />} />
      <Route path="users/new" element={<Formuser />} />
      <Route path="communications" element={<Internalcommunications/>} />
      <Route path="communications/new" element={<InternalCommunicationsForm />} />
       <Route path="calendars" element={<CalendarList/>} />
      <Route path="calendars/new" element={< CalendarForm />} />
    </Route>
  </Routes>


  )
}

export default Routing