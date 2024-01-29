import { useRef,useState,useEffect } from "react";
import "./CommunicationForm.css";
import { fetchUsers } from "../../services/ApiUsers";


const CommunicationForm = ({ setCurrCommunication, setShow }) => {
const [getUsers,  setGetUsers] = useState([]);
const formRef = useRef();

const communicationadd = async (communicationInfo, setCurrCommunication) => {
   try {

    const response = await fetch("http://localhost:3001/api/internal_communications", {

        method: "post",
        headers: {
          "content-type": "application/json",
          
        },
        body: JSON.stringify(communicationInfo),
      });

      const data = await response.json();
      console.log("Soy Data", data);
      if (!response.ok) throw data.error;
      setCurrCommunication(data);
    } catch (error) {
      console.log("error", error);
    }
   communicationuser()
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    localStorage.setItem("id_registro_user", data.type_user_id);

    const communicationInfo = {
      internal_communication: {
    title: data.title,
    content: data.content,
    user_id: data.user_id 
   
      },
    };

    communicationadd(communicationInfo, setCurrCommunication);
    e.target.reset();
  };

  const communicationuser = async () => {

    const id_user=localStorage.getItem("id_registro_user")

    const id_comunication=localStorage.getItem("id_registro")

    const communiction = parseInt(id_comunication)
    const user_receptor = parseInt(id_user)

    console.log("parseado 1",communiction)
    console.log("parseado 2",user_receptor)


        const communicationmid = {
          internal_communications_users: {
            user_id: user_receptor, 
            internal_communication_id: communiction +1
          }
      };

      console.log("SOY EL JSON" ,communicationmid)
 try {

        
        
        const response2 = await fetch("http://localhost:3001/api/internal_communications_users", {
          method: "post",
          headers: {
            "content-type": "application/json",
            // accept: "application/json",
          },
          body: JSON.stringify(communicationmid),
        });

      
      

          const data2 = await response2.json();
        
          if (!response2.ok) throw data2.error;
          setCurrCommunication(data2);
        } catch (error) {
          console.log("error", error);
        }




        window.location.reload();

  }




  useEffect(() => {
    async function GetUsers() {
      try {
        const data = await fetchUsers();
        setGetUsers(data);
      } catch (error) {
        console.error("Failed to load admonitions", error);
      }
    }
    GetUsers();
    }, []);

  

   
      const user_id = localStorage.getItem("id")




     
  
  return (
    <div className="communicationadd-container">

      <form ref={formRef} onSubmit={handleSubmit}  className="communicationadd-form">


         <label>
          <span>User</span>
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
            <optgroup label="Teachers">
              {getUsers
                .filter(user => user.role === "teacher")
                .map(user => (
                  <option key={user.id} value={user.id}>{user.username}</option>
                ))}
            </optgroup>
          </select>
        </label>
        
        <br />

      

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
        <label htmlFor="user_id" id="user_id">User_id:</label>
        <input
          type="user_id"
          name="user_id"
          id="user_id"
          placeholder="user_id"

          className="communicationadd-input"

          defaultValue={user_id} //AQUI SE PASA EL ID DEL USUARIO QUE ESTA LOGUEADO

        />
        <input  type="submit" value="Submit" className="communicationadd-submit" />


      </form>

      <br />  
      
    </div>
  );
};
export default CommunicationForm;

