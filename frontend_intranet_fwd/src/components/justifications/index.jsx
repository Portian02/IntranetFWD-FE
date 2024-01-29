import React, { useState, useEffect } from 'react';
import { fetchJustifications } from '../../services/ApiJustification';
import Navbar from "../NavBar";
import ButtonDeleteJustification from './DeleteJustification/ButtonDelete';
import ModalsJustificationsAdd from './ModalToAddJustification/modals';
import UpdateModalsJustification from './UpDateJustification/modalToUpdate';
import './justification.css';
import Loading from '../loader';
import { fetchJustifications_types } from '../../services/ApiJustification';
import { fetchUsers } from '../../services/ApiUsers';




const Justifications = () => {
  const [justifications, setJustifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [Justifications_types, setJustifications_types] = useState([]);
  const [Users, setUsers] = useState([]);
  const role = localStorage.getItem("role");
  const user_id = localStorage.getItem("id");
  useEffect(() => {
    async function loadJustification() {
      try {
        const data = await fetchJustifications();
        setJustifications(data);
        setIsLoading(false);
        console.log(data, "soy data")

        const type = await fetchJustifications_types();
        console.log(type, "soy type")
        setJustifications_types(type);

         const user = await fetchUsers();
        console.log(user, "soy user")
        setUsers(user);


      } catch (error) {
        console.error("Failed to load admonitions", error);
      }

    }
    loadJustification();
  }, []);



console.log(justifications.filter(justification => justification.user_id == user_id).map((justification_user)=>(justification_user.user_id == user_id)), "soy admonitions");




  return (
    <div> 
      <Navbar/>
      {isLoading ? (
        <div className="loading">
          <Loading />
          <p>Loading data ...</p>
        </div>
      ) : (
        <div>
          <h2>Justificaciones FWD</h2>
          <ul className='justification-list'>
            {justifications.map((justification) => (
              <div className="justification-card" key={justification.id}>
                <div className="justification-name">{justification.name}</div>
                <div className="justification-description">{justification.description}</div>
                <div className="justification-date">{justification.date}</div>
                {/* <div className="user-id">{justification.user_id}</div> */}
                    
                    
                   <div className="justification-type-id">
                    {Users.map((user) => (
                      user.id === justification.user_id && (
                        <div key={user.id}>{user.username}</div>
                      )
                    ))}
                   </div>
                
                <div className="justification-type-id">
                    {Justifications_types.map((type) => (
                      type.id === justification.justification_types_id && (
                        <div key={type.id}>{type.name}</div>
                      )
                    ))}
                </div>
                

                {/* <div className="responsable-id">{justification.responsable_id}</div> */}
                 <div className="justification-type-id">
                    {Users.map((user) => (
                      user.id == justification.responsable_id && (
                        <div key={user.id}>{user.username}</div>
                      )
                    ))}
                     </div>
               
                {role === "admin" && (
                  <ButtonDeleteJustification id={justification.id}/>
                )}
                {role === "admin" || role === "teacher" ? (
                  <UpdateModalsJustification id={justification.id} initialData={justification} />
                ) : null}
              </div>
              
            ))}
          </ul>
        </div>
      )}
      {role === "admin" || role === "teacher" ? (
        <ModalsJustificationsAdd/>
      ) : null}
    </div>
  );
};


export default Justifications;
