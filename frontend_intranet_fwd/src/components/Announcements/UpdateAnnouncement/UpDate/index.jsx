import React, { useState } from "react";
import { updatedAnnouncement } from "../../../../services/ApiAnnouncements";
import "./updateform.css";
function UpdateAnnouncementForm({ id, initialData }) {
  const [data, setData] = useState(initialData);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedData = await updatedAnnouncement(id, data);
      console.log(updatedData);
    } catch (error) {
      console.error("Failed to update admonition", error);
    }
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={data?.title}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      <label>
        Description
        <context
          type="text"
          name="description"
          value={data?.description}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      <button type="submit" className="submit-button">
        Update Announcement
      </button>
    </form>
  );
}

export default UpdateAnnouncementForm;
