import React, { useState, useEffect } from "react";
import "./Annoucements.css";
import { fetchAnnouncements } from "../../services/ApiAnnouncements";
import Navbar from "../NavBar";
import ButtonDeleteAnnouncement from "./DeleteAnnouncement/ButtonDelete";
import ModalsAnnouncementAdd from "./AnnouncementsModalToAdd/modals";
import UpdateModalsAnnouncement from "./UpdateAnnouncement/ModalToUpdate";
import Loading from "../loader";
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
      <h2 className="title-announcements">Announcements</h2>
      {loading ? (
        <div className="loading">
          <Loading/>   
       <h3 className="mt-5 mr-3"> Loading...</h3>
        </div>
      ) : 
      (
       announcements.length === 0 ? (
        <h2 className="d-flex justify-content-center  mt-5 no-data ">
          There is no any data
        </h2>
      ) : (
        <div className="container-announcement-events flex">
          <ul className="internal-communications">
            {announcements.map((announcement) => (
              <div className="card" key={announcement.id}>
                <h3 className="card-title">{announcement.title}</h3>
                <p className="card-title">{announcement.content}</p>
                <p className="small-desc">{announcement.description}</p>
                <div>
                  <span>Date:</span> {announcement.date}
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
      )
      )}
      
      {role === "admin" && (
        <ModalsAnnouncementAdd />
      )}
      
    </div>

  );
};


export default Announcement;

