import { useRef } from "react";
import "./calendarform.css";
const CommunicationForm = ({ setCurrCalendarevent, setShow }) => {
  const formRef = useRef();
  const communicationadd = async (calendar_eventInfo, setCurrCalendarevent) => {
    const url = "http://localhost:3001/api/calendar_events";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          // accept: "application/json",
        },
        body: JSON.stringify(calendar_eventInfo),
      });
      console.log("Soy response", response);
      console.log("Soy calendar_eventInfo", calendar_eventInfo);
      const data = await response.json();
      console.log("Soy Data", data);
      if (!response.ok) throw data.error;
      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrCalendarevent(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const calendar_eventInfo = {
      calendar_event: {
        name: data.name,
        description: data.description,
        date: data.date,
        document: data.document,
      },
    };
    communicationadd(calendar_eventInfo, setCurrCalendarevent);
    e.target.reset();
  };

  return (
    <div className="container">
      <form ref={formRef} onSubmit={handleSubmit} className="form">
        <p className="title">Calendar Form</p>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          className="username input"
        />
        <br />
        <label htmlFor="content">Description:</label>
        <input
          type="content"
          name="description"
          id="content"
          placeholder="content"
          className="username input"
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="date"
          className="date input"
        />
        <label htmlFor="document">Document:</label>
        <input
          type="URL or File"
          name="document"
          id="document"
          placeholder="document"
          className="document input"
        />
        <br />
        <input
          type="submit"
          value="Submit"
          className="btn"
        />
      </form>

      <br />
    </div>
  );
};
export default CommunicationForm;
