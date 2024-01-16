import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "../users";
import Internalcommunications from "../internalcomunications";
import InternalCommunicationsForm from "../internalcomunicationsform";
import Announcement from "../Announcements";
import AnnouncementForm from "../AnnouncementsForm";
import Home from "../../pages/home/index";
import Admin from "../../pages/admin/index";
import Calendar from "../calendarevents";
import CalendarForm from "../calendarForm";
import PasswordChange from "../changePassword";
import PageNotFound from "../../pages/Nopage";
import Signup from "../signup";
import LoginPage from "../../pages/Login";
const Routing = () => {
  return (
    <Routes>
      
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/new" element={<Signup />} />
      <Route path="/communications" element={<Internalcommunications/>} />
      <Route path="/communications/new" element={<InternalCommunicationsForm />} />
      <Route path="/calendars" element={<Calendar/>} />
      <Route path="/calendars/new" element={< CalendarForm />} />
      <Route path="/users/update_password" element={< PasswordChange />} />
      <Route path="/announcements" element={<Announcement/>} />
      <Route path="/announcements/new" element={< AnnouncementForm />} />
      <Route path="*" element={<PageNotFound />} />

  </Routes>


  )
}

export default Routing