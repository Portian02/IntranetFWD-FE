import { useRef } from "react";
import "./calendarform.css";
const CalendarForm = ({ setCurrCalendarevent, setShow }) => {
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
      setCurrCalendarevent(data);
    } catch (error) {
      console.log("error", error);
      window.location.reload();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    console.log("Soy data", data);
    const calendar_eventInfo = {
      calendar_event: {
        title: data.title,
        description: data.description,
        url: data.url,
      },
    };
    communicationadd(calendar_eventInfo, setCurrCalendarevent);
    e.target.reset();

  };

  return (
    <div className="communicationadd-container">
      <form ref={formRef} onSubmit={handleSubmit} className="communicationadd-form">
        <h3>Calendar Form</h3>
        <label htmlFor="name">Title</label>
        <input
          type="text"
          name="title"
          id="name"
          placeholder="name"
           className="communicationadd-input"
        />
        <br />
        <label htmlFor="content">Description:</label>
        <input
          type="content"
          name="description"
          id="content"
          placeholder="content"
           className="communicationadd-input"
        />
        <br />
        <label htmlFor="url">Url</label>
        <input
          type="text"
          name="url"
          id="document"
          placeholder="document"
         className="communicationadd-input"
        />
        <br />
        <input type="submit" value="Submit" className="communicationadd-submit" />
        
      </form>

      <br />
    </div>
  );
};
export default CalendarForm;
