import React, { useState, useEffect } from "react";
import "./Annoucements.css";
import { fetchAnnouncements } from "../../services/ApiAnnouncements";
import Navbar from "../NavBar";
import ButtonDeleteAnnouncement from "./DeleteAnnouncement/ButtonDelete";
import ModalsAnnouncementAdd from "./AnnouncementsModalToAdd/modals";
import UpdateModalsAnnouncement from "./UpdateAnnouncement/ModalToUpdate";
import HamsterWheel from "../loader";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const role = localStorage.getItem("role");
  useEffect(() => {
    async function loadAnnouncements() {
      try {

        const data = await fetchAnnouncements();
        setAnnouncements(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load announcements", error);

      }
    }

    loadAnnouncements();
  }, []);

  return (
    <div>

      <Navbar />
      <h2 className="title">Lista de Anuncios</h2>
      {loading ? (
        <div className="loading">
          
         
        </div>
      ) : (
        <div className="container-announcement-events">
          <ul className="internal-communications">
            {announcements.map((announcement) => (
              <div className="card" key={announcement.id}>
                <h3 className="card-title">{announcement.title}</h3>
                <p className="card-title">{announcement.content}</p>
                <p className="small-desc">{announcement.description}</p>
                <div>
                  <span>Date:</span> {announcement.date}
                </div>
                <div className="go-corner">
                  <div className="go-arrow">→</div>
                </div>
                  {role === "admin" && (
                <div className="btns">
                  <ButtonDeleteAnnouncement id={announcement.id} />
                  <UpdateModalsAnnouncement
                    id={announcement.id}
                    initialData={announcement}/>
                  </div>
                  )}
              </div>
            ))}
          </ul>
        </div>
      )}
        <ModalsAnnouncementAdd />
    </div>
  );
};


export default Announcement;

