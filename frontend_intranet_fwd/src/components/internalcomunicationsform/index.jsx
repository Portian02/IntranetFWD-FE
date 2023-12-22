import { useRef } from "react";
import "./CommunicationForm.css";
const CommunicationForm = ({ setCurrCommunication, setShow }) => {
  const formRef = useRef();
  const communicationadd = async (communicationInfo, setCurrCommunication) => {
    const url = "http://localhost:3001/api/internal_communications";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          // accept: "application/json",
        },
        body: JSON.stringify(communicationInfo),
      });
      console.log("Soy response", response);
      console.log("Soy communicationInfo", communicationInfo);
      const data = await response.json();
      console.log("Soy Data", data);
      if (!response.ok) throw data.error;
      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrCommunication(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const communicationInfo = {
      internal_communication: {
    title: data.title,
    content: data.content,
    date: data.date,
    user_id: data.user_id,
      },
    };
    communicationadd(communicationInfo, setCurrCommunication);
    e.target.reset();
  };
 
  return (
    <div className="communicationadd-container">
      <form ref={formRef} onSubmit={handleSubmit} className="communicationadd-form">
        <label htmlFor="title">Title:</label>
        <input
          type="title"
          name="title"
          id="title"
          placeholder="title"
          className="communicationadd-input"
        />
        <br />
        <label htmlFor="content">Content:</label>
        <input
          type="content"
          name="content"
          id="content"
          placeholder="content"
          className="communicationadd-input"
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="date"
          className="communicationadd-input"
        />
        <br />
        <label htmlFor="user_id">User_id:</label>
        <input
          type="user_id"
          name="user_id"
          id="user_id"
          placeholder="user_id"
          className="communicationadd-input"
        />
        <br />
        <input type="submit" value="Submit" className="communicationadd-submit" />
      </form>

      <br />
      
    </div>
  );
};
export default CommunicationForm;

