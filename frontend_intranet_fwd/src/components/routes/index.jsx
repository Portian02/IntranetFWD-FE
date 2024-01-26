import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "../users";
import Internalcommunications from "../internalcomunications";
import Announcement from "../Announcements";
import Home from "../../pages/home/index";
import Calendar from "../calendarevents";
import PasswordChange from "../changePassword";
import PageNotFound from "../../pages/Nopage";
import LoginPage from "../../pages/Login";
import Admonitions from "../Admonitions";
import Justification from "../justifications";
import DocumentsStorage from "../DocumentsStorage";
import NoAuth from "../../pages/NoAuth";
import Profile from "../profile";
import DocumentsStorageForm from "../DocumentsStorageForm";
const Routing = () => {
  const role = localStorage.getItem("role");
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/communications" element={<Internalcommunications/>} />
      <Route path="/calendars" element={<Calendar/>} />
      <Route path="/users/update_password" element={< PasswordChange />} />
      <Route path="/announcements" element={<Announcement/>} />
      <Route path="/admonitions" element={<Admonitions/>} />
      <Route path="/justifications" element={<Justification/>} />
      <Route path="/documentsStorage" element={<DocumentsStorage/>} />
      <Route path="/profile" element={<Profile/>} />
      {role === "admin" ? (
        <Route path="/users" element={<UserList />} />
      ) : (
        <Route path="/NoAccess" element={<NoAuth />} />
      )}
      <Route path="/communications" element={<Internalcommunications />} />
      <Route path="/calendars" element={<Calendar />} />
      <Route path="/users/update_password" element={<PasswordChange />} />
      <Route path="/announcements" element={<Announcement />} />
      <Route path="/admonitions" element={<Admonitions />} />
      <Route path="/justifications" element={<Justification />} />
      <Route path="/documentsStorage/new" element={<DocumentsStorageForm/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routing;
