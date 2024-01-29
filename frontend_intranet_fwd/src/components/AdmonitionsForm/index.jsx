  import { useRef, useEffect, useState } from "react";
  import { fetchUsers } from "../../services/ApiUsers";
  import Form from 'react-bootstrap/Form';
 import { fetchAdmonitionstypes } from "../../services/ApiAdmonitions";
  import "./admonitions.css"; 
  import Swal from "sweetalert2";



  const AdmonitionForm = ({ setCurrAdmonition, setShow }) => {
    const formRef = useRef();
    const [getUsers,  setGetUsers] = useState([]);
    const [getAdmonitions_types,  setGetAdmonitions_types] = useState([]);
    const responsable_id = localStorage.getItem("id")
    const addAdmonition = async (admonitionInfo, setCurrAdmonition) => {
      
      try {

     const response = await fetch("http://localhost:3001/api/admonitions", {

            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(admonitionInfo),
          });


        
  
        const data = await response.json();
        console.log("Soy Data", data);
        if (!response.ok) throw data.error;
        setCurrAdmonition(data);
      } catch (error) {
     
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
       
      }
      setTimeout(function(){ window.location.reload(); }, 2000);

      
  /////////////////////////////////////////////////////////////////////////////////////////

    };



    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData);

    console.log(data, "soy dataaaaaaaaaaaa")
      const admonitionInfo = {
        admonition: {
          status_admonition: data.status_admonition,
          date: data.date,
          responsable_id: data.responsable_id,
          user_id: data.type_user_id,
          admonition_types_id: data.admonition_type_id,
        
        },
      };

        console.log("Soy data", admonitionInfo);

      addAdmonition(admonitionInfo, setCurrAdmonition);
      e.target.reset();
    };
  // with this function we get the users  
  useEffect(() => {

    async function GetUsersandType() {
      try {
        const data = await fetchUsers();
        setGetUsers(data);
        const type = await fetchAdmonitionstypes();
        setGetAdmonitions_types(type);
      } catch (error) {
        console.error("Failed to load admonitions", error);
      }
    }
    GetUsersandType();
    }, []);






  return (
    <div className="admonition-add-container">
      
      <form ref={formRef} onSubmit={handleSubmit} className="d-flex flex-wrap admonition-add-Form">
        <h2>Admonition</h2>
        <label className="labels" htmlFor="status_admonition">Status:</label>
        <select
          name="status_admonition"
          id="status_admonition"
          className="admonition-add-input"
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="in_progress">In Progress</option>
        </select>

        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Date"
          className="admonition-add-input"
        />
        <br />
       
        <input
          type="text"
          name="responsable_id"
          id="responsable_id"
          placeholder="Responsable ID"
          defaultValue={responsable_id}
          className="admonition-add-input"
        />
        <br />
        <label>
          <select
            required
            name="type_user_id"
            id="type_user_id"
            className="input"
          >
            <option value="">Select User</option>
            <optgroup label="Students">
              {getUsers
                .filter(user => user.role === "student")
                .map(user => (
                  <option key={user.id} value={user.id}>{user.username}</option>
                ))}
            </optgroup>
          <span>User</span>
          </select>
        </label>
        <br />
        <br />
        <label className="labels ms-5" htmlFor="admonition_type_id">Admonition Type</label>
        <select
          name="admonition_type_id"
          id="admonition_type_id"
          className="admonition-add-input"
        >
          {getAdmonitions_types.map(admonitionType => (
            <option key={admonitionType.id} value={admonitionType.id}>{admonitionType.name}</option>
          ))}
        </select>

        <br />
        <input  type="submit" value="Submit" className="admonition-add-submit" />
      </form>
      <br />
    </div>
  );
};

export default AdmonitionForm;
