import { useRef,useState,useEffect } from "react";
import "./CommunicationForm.css";
const CommunicationForm = ({ setCurrCommunication, setShow }) => {

  const [getUsers,  setGetUsers] = useState([]);

  const formRef = useRef();

 
  const communicationadd = async (communicationInfo, setCurrCommunication) => {
 
    try {

      const response = await fetch("http://localhost:3001/api/internal_communications", {
        method: "post",
        headers: {
          "content-type": "application/json",
          // accept: "application/json",
        },
        body: JSON.stringify(communicationInfo),
      });


      
 
      const data = await response.json();
      console.log("Soy Data", data);
      if (!response.ok) throw data.error;
      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrCommunication(data);
    } catch (error) {
      console.log("error", error);
    }
     
  


    
   communicationuser()

/////////////////////////////////////////////////////////////////////////////////////////

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
    user_id: data.user_id //PASAR EL ID DE LA PERSONA QUE ESTA LOGUEADA EN ESTE CASO EL ADMI
   
      },

      
    };

 
    
    
    communicationadd(communicationInfo, setCurrCommunication);
    e.target.reset();
  };


 


  const communicationuser = async () => {

    const id_user=localStorage.getItem("id_registro_user")

    const id_comunication=localStorage.getItem("id_registro")

    const valor = parseInt(id_comunication)
    const valor2 = parseInt(id_user)

    console.log("parseado 1",valor)
    console.log("parseado 2",valor2)

    //let  comunication_id=id_comunication+1

        const communicationmid = {
          internal_communications_users: {
            user_id: valor2, 
            internal_communication_id: valor +1
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
        const getusuarios = async () => {


 
          try {
            const response = await fetch("http://localhost:3001/api/users");
            const data = await response.json();
    
            setGetUsers(data);
            // Actualizar el estado del loading cuando se complete la carga
          } catch (error) {
            console.error("Error fetching users:", error);
    
          }
        };
        getusuarios();
  }, []);

  

   
      const user_id = localStorage.getItem("id")
  
  return (
    <div className="communicationadd-container">

      <form ref={formRef} onSubmit={handleSubmit}  className="communicationadd-form">


         <label>
        <select
          required
          name="type_user_id"
          id="type_user_id"
          className="input"
        >
          <option value="">Select User</option>
          {getUsers.map(user => (
            <option key={user.id} value={user.id}>{user.username}</option>
          ))}
        </select>
        <span>User</span>
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
        <input onClick={reload}   type="submit" value="Submit" className="communicationadd-submit" />


      </form>

      <br />  
      
    </div>
  );
};
export default CommunicationForm;

