import React, { useState, useEffect } from "react";

import "./Annoucements.css";
import { fetchAnnouncements } from "../../services/ApiService";
import Navbar from "../NavBar";


const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <section className="loader">
            <div className="slider" style={{ "--i": 0 }}></div>
            <div className="slider" style={{ "--i": 1 }}></div>
            <div className="slider" style={{ "--i": 2 }}></div>
            <div className="slider" style={{ "--i": 3 }}></div>
            <div className="slider" style={{ "--i": 4 }}></div>
          </section>

        </div>
      ) : (
        <div className="container-announcement-events">
          <ul className="internal-communications">
            {announcements.map((announcement) => (
              <div className="card" key={announcement.id}>
                <p className="card-title">{announcement.content}</p>
                <p className="small-desc">{announcement.description}</p>
                <div>
                  <span>Date:</span> {announcement.date}
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


export default Announcement;

