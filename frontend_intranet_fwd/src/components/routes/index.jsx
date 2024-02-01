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
import RegulationDocuments from "../Regulations";
import Swal from "sweetalert2";

const Routing = () => {
  const role = localStorage.getItem("role");
  const isAuthenticated = localStorage.getItem("token");
 

  // Redirigir al usuario a la página de inicio de sesión si no está autenticado
  if (!isAuthenticated && window.location.pathname !== "/") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You are not Authorized, to enter on this direction!",
      
    });
    setTimeout(() => {
      window.location.href = "/";
    }, 2000); 
    return null
         ;
      }

      return (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {isAuthenticated && (
            <>
            
              <Route path="/home" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/communications" element={<Internalcommunications />} />
              <Route path="/calendars" element={<Calendar />} />
              <Route path="/users/update_password" element={<PasswordChange />} />
              <Route path="/announcements" element={<Announcement />} />
              <Route path="/admonitions" element={<Admonitions />} />
              <Route path="/justifications" element={<Justification />} />
              <Route path="/documentsStorage" element={<DocumentsStorage />} />
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
              <Route path="/documentsStorage/new" element={<DocumentsStorageForm />} />
              <Route path="/regulationDocuments" element={<RegulationDocuments />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<PageNotFound />} />
            </>
          )}
        </Routes>
      );
    };

    export default Routing;
