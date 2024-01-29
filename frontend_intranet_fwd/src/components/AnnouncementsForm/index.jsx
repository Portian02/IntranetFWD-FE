import { useRef } from "react";
import Swal from "sweetalert2";

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


    Swal.fire({
      title: `Do you want to save the changes? ${data.content}`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
     
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
         
          addAnnouncement(announcementInfo, setCurrAnnouncement);
          e.target.reset();
          window.location.reload();
      } else if (result.isDenied || result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Changes are not saved", "", "info");
        window.location.reload();

       
      }
    });
  };

  return (
    <div className="container-announcements">
      <form ref={formRef} onSubmit={handleSubmit} className="form-announcemnets">
        <h2 className="title-announcement">Announcement</h2>
        <label htmlFor="content">Title:</label>
       < input
          type="text"
          name="content"
          id="content"
          placeholder="Content"
          className="input-announcements"
        />
        <br />
        <label htmlFor="description">Description:</label>
        <br />
        <input
          name="description"
          id="description"
          placeholder="Description"
          className="input-announcements"
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
       type="date"
          name="date"
          id="date"
          placeholder="Date"
          className="input-announcements"
        />
        <br />
    
        <input type="submit" value="Submit" className="btn-submit-announce" />
      </form>
      <br />
    </div>
  );
};

export default AnnouncementForm;
