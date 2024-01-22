import React, { useState } from "react";
import { updateCalendar } from "../../../../services/ApiCalendars";
import "./updateform.css";
function UpdateCalendarForm({ id, initialData }) {
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
      const updatedData = await updateCalendar(id, data);
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
        description:
        <input
          type="text"
          name="description"
          value={data?.description}
          onChange={handleChange}
          className="title-input"
        />
      </label>
      <label>
        url:
        <input
          name="url"
          value={data?.url}
          onChange={handleChange}
          className="content-textarea"
        />
      </label>
      <button type="submit" className="submit-button">
        Update Calendar
      </button>
    </form>
  );
}

export default UpdateCalendarForm;
