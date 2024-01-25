import { useRef } from "react";


const AnnouncementForm = ({ setCurrAnnouncement, setShow }) => {
  const formRef = useRef();

  const addAnnouncement = async (announcementInfo, setCurrAnnouncement) => {
    const url = "http://localhost:3001/api/announcements"; 
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(announcementInfo),
      });

      const data = await response.json();
      if (!response.ok) throw data.error;


      setCurrAnnouncement(data);
    } catch (error) {
      console.error("Error:", error);
      window.location.reload();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const announcementInfo = {
      announcement: {
        content: data.content,
        description: data.description,
        date: data.date,
      },
    };
    addAnnouncement(announcementInfo, setCurrAnnouncement);
    e.target.reset();
  };
return (
    <div className="container">
      <form ref={formRef} onSubmit={handleSubmit} className="form">
        <p className="title">Announcement Form</p>
        <label htmlFor="content">Content:</label>
        <input
          type="text"
          name="content"
          id="content"
          placeholder="Content"
          className="content input"
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          className="description input"
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Date"
          className="date input"
        />
        <br />
        {/* Puedes ajustar el formulario según tus necesidades, por ejemplo, si deseas permitir la carga de documentos /}
        {/ <label htmlFor="document">Document:</label>
        <input
          type="URL or File"
          name="document"
          id="document"
          placeholder="Document"
          className="document input"
        />
        <br /> */}
        <input type="submit" value="Submit" className="btn" />
      </form>
      <br />
    </div>
  );
};

export default AnnouncementForm;